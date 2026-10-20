export class AudioSpring {
  constructor({ frequency = 3.5, damping = 0.78, max = 1.08 } = {}) {
    this.frequency = frequency; this.damping = damping; this.max = max;
    this.value = 0; this.velocity = 0;
    this.media = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)');
  }
  update(target, seconds) {
    if (this.media?.matches) { this.value = this.velocity = 0; return 0; }
    if (!Number.isFinite(target)) target = 0;
    target = Math.max(0, Math.min(1, target));
    let remaining = Math.max(0, Math.min(0.05, Number.isFinite(seconds) ? seconds : 0));
    const omega = 2 * Math.PI * this.frequency;
    while (remaining > 0) {
      const dt = Math.min(remaining, 1 / 120);
      this.velocity += (omega * omega * (target - this.value) - 2 * this.damping * omega * this.velocity) * dt;
      this.value += this.velocity * dt;
      if (this.value < 0) { this.value = 0; this.velocity = Math.max(0, this.velocity); }
      if (this.value > this.max) { this.value = this.max; this.velocity = Math.min(0, this.velocity); }
      remaining -= dt;
    }
    return this.value;
  }
}
