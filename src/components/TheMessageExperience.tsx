import React, { useEffect, useState } from 'react';
import { ArrowLeft, Heart, Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { ambienceEngine } from '../utils/audioAmbience';

interface TheMessageExperienceProps {
  isOpen: boolean;
  onClose: () => void;
}

const STATEMENTS = [
  "Everyone has a story.",
  "Everyone faces difficult moments.",
  "Everyone’s path looks different.",
  "Progress doesn’t always look like progress.",
  "You don’t have to have everything figured out.",
  "You are allowed to take your time.",
  "One step is still a step forward.",
  "Small moments can create meaningful change.",
  "Hope can begin in unexpected places.",
  "And sometimes, simply continuing forward is an accomplishment."
];

export const TheMessageExperience: React.FC<TheMessageExperienceProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const totalSlides = STATEMENTS.length + 1; // 10 statements + 1 final centerpiece slide

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
      setIsPlaying(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Auto-advance slideshow timer
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    // Final slide stays a bit longer (7.5s), normal statements auto-advance every 4.5s
    const timerDuration = currentIndex === STATEMENTS.length ? 8000 : 4500;

    const timer = setTimeout(() => {
      if (currentIndex < STATEMENTS.length) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        // Stop autoplay on final slide so user can absorb it peacefully
        setIsPlaying(false);
      }
    }, timerDuration);

    return () => clearTimeout(timer);
  }, [isOpen, isPlaying, currentIndex]);

  const toggleAmbience = () => {
    const active = ambienceEngine.toggle();
    setIsAudioActive(active);
  };

  const handleNext = () => {
    if (currentIndex < STATEMENTS.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsPlaying(true);
  };

  if (!isOpen) return null;

  const isFinalSlide = currentIndex === STATEMENTS.length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col font-sans-body select-none overflow-hidden animate-fade-in">
      
      {/* Quiet Ambient Canvas Background with Floating Light Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Radial Ambient Aurora */}
        <div 
          className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-rose-900/20 via-amber-900/10 to-transparent blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${currentIndex * 15}px, ${currentIndex * 10}px)`
          }}
        />
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-amber-600/15 via-rose-950/10 to-transparent blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${-currentIndex * 12}px, ${-currentIndex * 8}px)`
          }}
        />

        {/* Deep Bokeh Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-rose-500/10 blur-3xl animate-pulse" />

        {/* Stars/Dust particles */}
        <div className="absolute inset-0 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      {/* Top Bar Navigation */}
      <header className="relative z-30 px-6 py-5 flex items-center justify-between gap-4">
        
        {/* Return to Website Button */}
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-amber-200 border border-amber-400/30 hover:border-amber-300 text-xs sm:text-sm font-bold transition-all shadow-lg group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Website</span>
        </button>

        {/* Center Progress Indicators */}
        <div className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/20 backdrop-blur-md">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-6 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]'
                  : idx < currentIndex
                  ? 'w-2 bg-amber-500/50'
                  : 'w-2 bg-slate-800'
              }`}
              title={`Jump to statement ${idx + 1}`}
            />
          ))}
        </div>

        {/* Controls: Audio & Play/Pause */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleAmbience}
            title="Toggle Peaceful Audio"
            className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              isAudioActive 
                ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-amber-500/20' 
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-400/50'
            }`}
          >
            {isAudioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden md:inline">{isAudioActive ? 'Audio On' : 'Ambient Audio'}</span>
          </button>

          {!isFinalSlide && (
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-400/30 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="hidden md:inline">{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
          )}
        </div>

      </header>

      {/* Main Experience Canvas */}
      <main 
        onClick={() => {
          if (!isFinalSlide) handleNext();
        }}
        className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 sm:px-12 max-w-4xl mx-auto text-center cursor-pointer select-none"
      >

        {!isFinalSlide ? (
          /* Single Statement Display with Smooth Transitions */
          <div key={currentIndex} className="space-y-8 animate-fade-in max-w-3xl">
            
            {/* Step Counter Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-amber-400/30 text-amber-300/80 text-xs font-mono tracking-widest uppercase shadow-md">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/30" />
              <span>THE MESSAGE • {currentIndex + 1} OF {STATEMENTS.length}</span>
            </div>

            {/* Main Statement Text */}
            <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-normal leading-relaxed sm:leading-tight text-amber-50 drop-shadow-[0_0_25px_rgba(251,191,36,0.3)]">
              "{STATEMENTS[currentIndex]}"
            </h1>

            {/* Subtle Click Hint */}
            <p className="text-xs font-sans-body text-slate-500 tracking-wider uppercase pt-4 opacity-70">
              Tap anywhere to continue
            </p>

          </div>
        ) : (
          /* Final Centerpiece Section */
          <div className="space-y-10 animate-fade-in max-w-3xl py-8">
            
            {/* Golden Heart Emblem */}
            <div className="relative inline-block">
              <div className="absolute -inset-4 rounded-full bg-rose-500/30 blur-xl animate-pulse" />
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-rose-600 via-amber-500 to-amber-300 p-1 shadow-2xl relative flex items-center justify-center mx-auto">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center border border-amber-300/60">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-rose-400 fill-rose-400/40" />
                </div>
              </div>
            </div>

            {/* EVERY STEP MATTERS */}
            <div className="space-y-3">
              <h2 className="font-serif-title font-extrabold text-4xl sm:text-6xl lg:text-7xl text-amber-100 tracking-tight uppercase drop-shadow-[0_0_35px_rgba(251,191,36,0.8)]">
                EVERY STEP MATTERS.
              </h2>
            </div>

            {/* Quote Block */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border-2 border-amber-400/40 shadow-2xl backdrop-blur-md max-w-2xl mx-auto space-y-4">
              <p className="font-serif italic text-xl sm:text-3xl text-amber-100 leading-relaxed font-normal">
                “You don’t have to reach the top all at once. You just have to keep moving forward.”
              </p>
            </div>

            {/* KEEP CLIMBING. ❤️ */}
            <div className="space-y-2 pt-2">
              <h3 className="font-serif-title font-bold text-3xl sm:text-5xl text-amber-300 flex items-center justify-center gap-3">
                <span>KEEP CLIMBING.</span>
                <span className="text-rose-500 inline-block animate-pulse">❤️</span>
              </h3>
              <p className="font-script text-2xl sm:text-4xl text-amber-200/90 font-normal">
                Because healing is worth the climb.
              </p>
            </div>

            {/* Action Buttons on Final Screen */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button
                onClick={handleRestart}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-200 font-bold text-xs sm:text-sm border border-amber-400/30 hover:border-amber-300 transition-all flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-amber-400" />
                <span>Replay The Message</span>
              </button>

              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl transition-all hover:scale-105 border border-white cursor-pointer"
              >
                Return to Website
              </button>
            </div>

          </div>
        )}

      </main>

      {/* Bottom Bar: Manual Step Arrows & Subtitle */}
      <footer className="relative z-30 px-6 py-4 border-t border-amber-500/20 bg-slate-950/80 backdrop-blur-md flex items-center justify-between text-xs text-amber-300/70 font-sans-body">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-medium">Why every step matters • Climbing Toward Healing</span>
        </div>

        {/* Prev / Next Manual Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-amber-400/50 transition-colors cursor-pointer"
            title="Previous Statement"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <span className="font-mono text-[11px] px-2 text-slate-400">
            {currentIndex + 1} / {totalSlides}
          </span>

          <button
            onClick={handleNext}
            disabled={isFinalSlide}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-amber-400/50 transition-colors cursor-pointer"
            title="Next Statement"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>

    </div>
  );
};
