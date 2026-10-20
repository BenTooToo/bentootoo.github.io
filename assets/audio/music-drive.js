import { AudioBridgeClient } from './audio-bridge.js';
import { AudioSpring } from './audio-spring.js';

// An optional contribution to the existing animation; never owns a render loop.
export function createMusicDrive() {
  let target = 0;
  let previousTime = null;
  let enabled = false;
  const spring = new AudioSpring();
  const client = new AudioBridgeClient({
    transport: 'extension',
    onLevel(level) { target = level; }
  });
  const onPageHide = () => client.disconnect();
  const onPageShow = () => {
    previousTime = null;
    if (enabled) client.connect();
  };
  window.addEventListener('pagehide', onPageHide);
  window.addEventListener('pageshow', onPageShow);

  return {
    start() { enabled = true; client.connect(); },
    sample(nowMs) {
      const seconds = previousTime === null ? 0 : (nowMs - previousTime) / 1000;
      previousTime = nowMs;
      const value = spring.update(target, seconds);
      // Settle to exactly zero so silence restores the original coordinates.
      if (target === 0 && value < 0.0001 && Math.abs(spring.velocity) < 0.001) {
        spring.value = spring.velocity = 0;
        return 0;
      }
      return value;
    },
    dispose() {
      enabled = false;
      client.disconnect();
      window.removeEventListener('pagehide', onPageHide);
      window.removeEventListener('pageshow', onPageShow);
    }
  };
}
