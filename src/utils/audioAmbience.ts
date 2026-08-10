// Gentle peaceful mountain wind & soft harmonic tone synthesizer using Web Audio API
class AudioAmbienceEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private intervalId: number | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.ctx = new AudioCtx();
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Play soft warm chord progression (A Major 9 / C# minor warm pads)
      const playNote = (freq: number, duration: number, delay: number) => {
        if (!this.ctx || !this.masterGain || !this.isPlaying) return;
        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

        noteGain.gain.setValueAtTime(0, this.ctx.currentTime + delay);
        noteGain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + delay + 2);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + delay + duration);

        osc.connect(noteGain);
        noteGain.connect(this.masterGain);

        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + duration);
      };

      this.isPlaying = true;

      const chordLoop = () => {
        if (!this.isPlaying) return;
        // Frequencies for peaceful ambient notes (A3, C#4, E4, G#4, B4)
        const notes = [220, 277.18, 329.63, 415.3, 493.88, 659.25];
        notes.forEach((freq, idx) => {
          playNote(freq, 6, idx * 1.2);
        });
      };

      chordLoop();
      this.intervalId = window.setInterval(chordLoop, 7500);

    } catch (err) {
      console.warn('Audio ambience could not be initialized:', err);
      this.isPlaying = false;
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
    }
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const ambienceEngine = new AudioAmbienceEngine();
