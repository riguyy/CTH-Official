// Peaceful, uplifting Web Audio sound effects for "The Journey Toward Healing" mini-game
class MiniGameAudioEngine {
  private ctx: AudioContext | null = null;
  public isMuted: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  // Play a soft bell/chime note with gentle harmonics
  public playChime(freq = 528, duration = 1.4, gainLevel = 0.08) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(gainLevel, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // Stage 1: Anchor stone selection chime
  public playAnchorStone() {
    this.playChime(440, 1.2, 0.09);
    setTimeout(() => this.playChime(659.25, 1.5, 0.06), 120);
  }

  // Stage 2: Mist cloud dissolve chime
  public playMistClear() {
    this.playChime(587.33, 1.1, 0.07);
    setTimeout(() => this.playChime(880, 1.3, 0.05), 90);
  }

  // Stage 3: Lantern flame ignition chime
  public playLanternFlame() {
    this.playChime(493.88, 1.2, 0.08);
    setTimeout(() => this.playChime(739.99, 1.4, 0.07), 110);
    setTimeout(() => this.playChime(987.77, 1.6, 0.05), 220);
  }

  // Stage 4: Calming breath tone
  public playBreath() {
    this.playChime(329.63, 2.2, 0.08);
    setTimeout(() => this.playChime(493.88, 2.0, 0.06), 200);
  }

  // Stage 5 / Summit Sunrise: Glorious arpeggio of dawn
  public playSummitArrival() {
    if (this.isMuted) return;
    const notes = [440, 554.37, 659.25, 830.61, 880, 1108.73];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, 2.0, 0.08);
      }, idx * 160);
    });
  }
}

export const gameAudio = new MiniGameAudioEngine();
