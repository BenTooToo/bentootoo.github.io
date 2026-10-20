const CHANNEL = 'bentootoo-audio-bridge-v1';

export function validMessage(value) {
  if (!value || value.version !== 1 || !Number.isSafeInteger(value.sequence) || value.sequence < 0) return false;
  if (value.type === 'audio-level') return typeof value.level === 'number' && Number.isFinite(value.level) && value.level >= 0 && value.level <= 1 && typeof value.muted === 'boolean';
  return value.type === 'bridge-status' && ['ready', 'paused', 'device-unavailable'].includes(value.state);
}

export class AudioBridgeClient {
  constructor({ url = 'ws://127.0.0.1:47831/v1/levels', transport = 'auto', staleAfterMs = 1000, onLevel = () => {}, onStatus = () => {} } = {}) {
    if (!['auto', 'extension', 'windows'].includes(transport)) throw new TypeError('Unknown transport');
    this.url = url; this.transport = transport; this.staleAfterMs = staleAfterMs;
    this.onLevel = onLevel; this.onStatus = onStatus;
    this.level = 0; this._permission = null; this.status = { connection: 'idle', audio: 'unknown', transport: null, permission: null };
    this._wanted = false; this._epoch = 0; this._attempt = 0;
    this._visibility = () => {
      if (document.hidden) { this._clear(); this._setLevel(0); this._status('idle', 'unknown'); }
      else if (this._wanted) this._open();
    };
  }
  _call(callback, value) { try { callback(value); } catch { /* A consumer callback must not break cleanup/reconnect. */ } }
  _setLevel(value) { this.level = value; this._call(this.onLevel, value); }
  _status(connection, audio = this.status.audio, transport = this.status.transport) {
    const next = { connection, audio, transport, permission: this._permission };
    if (JSON.stringify(next) === JSON.stringify(this.status)) return;
    this.status = next; this._call(this.onStatus, { ...next });
  }
  connect() {
    if (this._wanted) return;
    this._wanted = true; this._attempt = 0;
    document.addEventListener('visibilitychange', this._visibility);
    if (!document.hidden) this._open();
  }
  disconnect() {
    this._wanted = false; this._clear();
    document.removeEventListener('visibilitychange', this._visibility);
    this._setLevel(0); this._status('idle', 'unknown', null);
  }
  _clear() {
    this._epoch++;
    clearTimeout(this._retry); clearTimeout(this._probe); clearTimeout(this._connectTimeout); clearInterval(this._watchdog);
    this._socket?.close(); this._socket = null;
    if (this._windowListener) window.removeEventListener('message', this._windowListener);
    if (this._id) window.postMessage({ channel: CHANNEL, kind: 'unsubscribe', id: this._id }, window.location.origin);
    this._windowListener = null; this._id = null;
  }
  _open() {
    this._clear();
    const epoch = this._epoch;
    this._sequence = -1; this._lastValid = 0; this._goodSince = 0; this._permission = null;
    this._status('connecting', 'unknown', null);
    if (this.transport === 'windows') { this._openSocket(epoch); return; }
    this._id = crypto.randomUUID();
    this._windowListener = event => {
      if (epoch !== this._epoch || event.source !== window || event.origin !== window.location.origin) return;
      const data = event.data;
      if (data?.channel !== CHANNEL || data.id !== this._id) return;
      if (data.kind === 'available' && !this._extensionChosen) {
        clearTimeout(this._probe); this._extensionChosen = true;
        this._status('connecting', 'unknown', 'extension'); this._armWatchdog(epoch);
        window.postMessage({ channel: CHANNEL, kind: 'subscribe', id: this._id }, window.location.origin);
      } else if (data.kind === 'data' && this._extensionChosen) this._accept(data.message);
      else if (data.kind === 'closed' && this._extensionChosen) this._failed(epoch);
    };
    this._extensionChosen = false;
    window.addEventListener('message', this._windowListener);
    window.postMessage({ channel: CHANNEL, kind: 'discover', id: this._id, activeOnly: this.transport === 'auto' }, window.location.origin);
    this._probe = setTimeout(() => {
      if (epoch !== this._epoch) return;
      if (this.transport === 'extension') { this._failed(epoch); return; }
      // Stop discovery before falling back, avoiding two simultaneous transports.
      window.removeEventListener('message', this._windowListener); this._windowListener = null;
      this._openSocket(epoch);
    }, 350);
  }
  _openSocket(epoch) {
    this._status('connecting', 'unknown', 'windows');
    // Query only the granular permission. Older browsers may not recognize it.
    // Do not retry a known user denial; disconnect/connect explicitly retries.
    if (globalThis.navigator?.permissions?.query) {
      navigator.permissions.query({ name: 'loopback-network' }).then(permission => {
        if (epoch !== this._epoch) return;
        this._permission = permission.state;
        if (permission.state === 'denied') { this._setLevel(0); this._status('unavailable', 'unknown', 'windows'); return; }
        this._createSocket(epoch);
      }).catch(() => { if (epoch === this._epoch) this._createSocket(epoch); });
    } else this._createSocket(epoch);
  }
  _createSocket(epoch) {
    try {
      const socket = this._socket = new WebSocket(this.url);
      this._connectTimeout = setTimeout(() => this._failed(epoch), 3000);
      socket.onopen = () => { if (epoch === this._epoch) { clearTimeout(this._connectTimeout); this._armWatchdog(epoch); } };
      socket.onmessage = event => {
        if (epoch !== this._epoch || typeof event.data !== 'string' || event.data.length > 2048) return;
        try { this._accept(JSON.parse(event.data)); } catch { /* Ignore malformed JSON. */ }
      };
      socket.onclose = () => this._failed(epoch);
      socket.onerror = () => this._failed(epoch);
    } catch { this._failed(epoch); }
  }
  _armWatchdog(epoch) {
    const started = performance.now();
    this._watchdog = setInterval(() => {
      if (epoch !== this._epoch) return;
      const age = performance.now() - (this._lastValid || started);
      if (age > this.staleAfterMs) { this._setLevel(0); this._status('stale', 'unknown'); }
      if (age > Math.max(3000, this.staleAfterMs * 3)) this._failed(epoch);
    }, 200);
  }
  _accept(message) {
    if (!validMessage(message) || message.sequence <= this._sequence) return;
    this._sequence = message.sequence;
    const now = performance.now(); this._lastValid = now;
    if (!this._goodSince) this._goodSince = now;
    if (now - this._goodSince > 5000) this._attempt = 0;
    if (message.type === 'audio-level') { this._status('connected', 'ready'); this._setLevel(message.muted ? 0 : message.level); }
    else { this._status('connected', message.state); this._setLevel(0); }
  }
  _failed(epoch) {
    if (epoch !== this._epoch) return;
    this._clear(); this._setLevel(0); this._status('unavailable', 'unknown');
    if (!this._wanted || document.hidden || this._permission === 'denied') return;
    const delay = Math.min(30000, 1000 * 2 ** Math.min(this._attempt++, 5)) * (0.8 + Math.random() * 0.4);
    this._retry = setTimeout(() => this._open(), delay);
  }
}
