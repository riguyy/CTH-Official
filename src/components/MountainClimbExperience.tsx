import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Sparkles, ChevronUp, RotateCcw, Compass, Mountain, Volume2, VolumeX } from 'lucide-react';
import { ambienceEngine } from '../utils/audioAmbience';
import defaultMountainBg from '../assets/images/climb_mountain_bg_1786488298770.jpg';

interface MountainClimbExperienceProps {
  isOpen: boolean;
  onClose: () => void;
  mountainBgUrl?: string;
}

interface StepWord {
  id: string;
  word: string;
  elevation: number; // e.g. 800 ft
  quote: string;
  positionPercent: number; // horizontal alignment percentage 15% - 85%
  sizeClass: string;
  glowClass: string;
  level: number;
}

const STEPS: StepWord[] = [
  {
    id: 'step-18',
    word: 'Healing',
    elevation: 14411,
    quote: 'Reaching a new horizon of light, wholeness, and inner peace.',
    positionPercent: 50,
    sizeClass: 'text-6xl sm:text-8xl lg:text-9xl font-extrabold',
    glowClass: 'text-amber-200 drop-shadow-[0_0_35px_rgba(251,191,36,0.9)]',
    level: 18,
  },
  {
    id: 'step-17',
    word: 'Transformation',
    elevation: 14000,
    quote: 'You are no longer defined by what broke you; you are remade in grace.',
    positionPercent: 42,
    sizeClass: 'text-4xl sm:text-6xl lg:text-7xl font-bold',
    glowClass: 'text-amber-300 drop-shadow-[0_0_25px_rgba(251,191,36,0.7)]',
    level: 17,
  },
  {
    id: 'step-16',
    word: 'Renewal',
    elevation: 13400,
    quote: 'Fresh air fills your lungs as a new morning dawns over the mountains.',
    positionPercent: 65,
    sizeClass: 'text-3xl sm:text-5xl lg:text-6xl font-bold',
    glowClass: 'text-amber-300/90 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]',
    level: 16,
  },
  {
    id: 'step-15',
    word: 'Acceptance',
    elevation: 12700,
    quote: 'Embracing every chapter of who you were and who you are becoming.',
    positionPercent: 28,
    sizeClass: 'text-3xl sm:text-5xl lg:text-6xl font-semibold',
    glowClass: 'text-amber-200/90 drop-shadow-[0_0_18px_rgba(251,191,36,0.5)]',
    level: 15,
  },
  {
    id: 'step-14',
    word: 'Purpose',
    elevation: 11900,
    quote: 'Your pain was not the end of your story—it became your purpose.',
    positionPercent: 72,
    sizeClass: 'text-3xl sm:text-4xl lg:text-5xl font-semibold',
    glowClass: 'text-amber-200/90 drop-shadow-[0_0_16px_rgba(251,191,36,0.5)]',
    level: 14,
  },
  {
    id: 'step-13',
    word: 'Peace',
    elevation: 11000,
    quote: 'A quiet heart that has laid down its burdens and made peace with the past.',
    positionPercent: 35,
    sizeClass: 'text-2xl sm:text-4xl lg:text-5xl font-semibold',
    glowClass: 'text-amber-100 drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]',
    level: 13,
  },
  {
    id: 'step-12',
    word: 'Hope',
    elevation: 10100,
    quote: 'The first warm golden beam of light breaking through a long night.',
    positionPercent: 68,
    sizeClass: 'text-2xl sm:text-4xl lg:text-5xl font-medium',
    glowClass: 'text-amber-100 drop-shadow-[0_0_14px_rgba(251,191,36,0.4)]',
    level: 12,
  },
  {
    id: 'step-11',
    word: 'Resilience',
    elevation: 9200,
    quote: 'Bending gracefully in the mountain wind, but never breaking.',
    positionPercent: 22,
    sizeClass: 'text-2xl sm:text-3xl lg:text-4xl font-medium',
    glowClass: 'text-amber-200/80 drop-shadow-[0_0_12px_rgba(251,191,36,0.3)]',
    level: 11,
  },
  {
    id: 'step-10',
    word: 'Rise',
    elevation: 8300,
    quote: 'Above the clouds, the sky has always been open and vast.',
    positionPercent: 58,
    sizeClass: 'text-xl sm:text-3xl lg:text-4xl font-medium',
    glowClass: 'text-amber-200/80',
    level: 10,
  },
  {
    id: 'step-9',
    word: 'Progress',
    elevation: 7400,
    quote: 'Look back only to see how far you have already climbed.',
    positionPercent: 30,
    sizeClass: 'text-xl sm:text-2xl lg:text-3xl font-medium',
    glowClass: 'text-amber-300/80',
    level: 9,
  },
  {
    id: 'step-8',
    word: 'Persevere',
    elevation: 6500,
    quote: 'Keep moving forward, even when the incline grows steep and heavy.',
    positionPercent: 75,
    sizeClass: 'text-lg sm:text-2xl lg:text-3xl font-normal',
    glowClass: 'text-amber-200/75',
    level: 8,
  },
  {
    id: 'step-7',
    word: 'Growth',
    elevation: 5600,
    quote: 'In the quiet valleys of difficulty, your roots grew deep.',
    positionPercent: 25,
    sizeClass: 'text-lg sm:text-xl lg:text-2xl font-normal',
    glowClass: 'text-amber-300/70',
    level: 7,
  },
  {
    id: 'step-6',
    word: 'Support',
    elevation: 4700,
    quote: 'Lean on the hands held out to guide and help you rise.',
    positionPercent: 62,
    sizeClass: 'text-base sm:text-xl lg:text-2xl font-normal',
    glowClass: 'text-slate-200',
    level: 6,
  },
  {
    id: 'step-5',
    word: 'Patience',
    elevation: 3800,
    quote: 'Healing is not a sprint; honor the tempo of your heart.',
    positionPercent: 38,
    sizeClass: 'text-base sm:text-lg lg:text-xl font-normal',
    glowClass: 'text-slate-300',
    level: 5,
  },
  {
    id: 'step-4',
    word: 'Strength',
    elevation: 2900,
    quote: 'You are far stronger than the storms that tried to break you.',
    positionPercent: 70,
    sizeClass: 'text-sm sm:text-base lg:text-lg font-normal',
    glowClass: 'text-slate-300',
    level: 4,
  },
  {
    id: 'step-3',
    word: 'Courage',
    elevation: 2000,
    quote: 'Courage is not the absence of fear, but placing one foot forward anyway.',
    positionPercent: 28,
    sizeClass: 'text-sm sm:text-base font-normal',
    glowClass: 'text-slate-400',
    level: 3,
  },
  {
    id: 'step-2',
    word: 'Believe',
    elevation: 1200,
    quote: 'Trust that the path beneath you will support your weight.',
    positionPercent: 60,
    sizeClass: 'text-xs sm:text-sm font-normal',
    glowClass: 'text-slate-400',
    level: 2,
  },
  {
    id: 'step-1',
    word: 'Begin',
    elevation: 500,
    quote: 'Every great summit starts with a single, quiet step.',
    positionPercent: 45,
    sizeClass: 'text-xs sm:text-sm font-light uppercase tracking-widest',
    glowClass: 'text-slate-400',
    level: 1,
  },
];

export const MountainClimbExperience: React.FC<MountainClimbExperienceProps> = ({
  isOpen,
  onClose,
  mountainBgUrl,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [activeWordId, setActiveWordId] = useState<string | null>(null);
  const [currentElevation, setCurrentElevation] = useState<number>(500);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);

  // When opening modal, scroll down to the base ("Begin")
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Small delay to ensure render complete
      const timer = setTimeout(() => {
        if (bottomRef.current) {
          bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Track scroll position to calculate current elevation & progress
  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const totalScrollable = scrollHeight - clientHeight;
    if (totalScrollable <= 0) return;

    // Scroll progress from 0 (at top = Peak = 14411ft) to 1 (at bottom = Base = 500ft)
    const progressFromTop = scrollTop / totalScrollable; // 0 = Peak, 1 = Base
    const progressFromBottom = 1 - progressFromTop; // 0 = Base, 1 = Peak

    // Elevation calculation
    const calculatedElevation = Math.round(500 + progressFromBottom * (14411 - 500));
    setCurrentElevation(calculatedElevation);
  };

  const toggleAmbience = () => {
    const active = ambienceEngine.toggle();
    setIsAudioActive(active);
  };

  const scrollToPeak = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBase = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col font-sans-body overflow-hidden select-none animate-fade-in">
      
      {/* Top Floating Control Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-amber-500/20 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Back to Website Button */}
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-200 border border-amber-400/30 hover:border-amber-300 text-xs sm:text-sm font-sans font-bold transition-all shadow-lg group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Website</span>
        </button>

        {/* Center Live Elevation Indicator */}
        <div className="hidden sm:flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/30 text-amber-200 text-xs font-mono shadow-inner">
          <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
          <span>ELEVATION: <strong className="text-amber-100 font-bold">{currentElevation.toLocaleString()} FT</strong></span>
          <span className="text-amber-500/40">|</span>
          <span className="text-slate-400 text-[11px]">Climb to the Peak ↑</span>
        </div>

        {/* Right Audio & Quick Scroll Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleAmbience}
            title="Toggle Ambient Mountain Sound"
            className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              isAudioActive 
                ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-amber-500/20' 
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-400/50'
            }`}
          >
            {isAudioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden md:inline">{isAudioActive ? 'Audio On' : 'Ambient Audio'}</span>
          </button>

          <button
            onClick={scrollToPeak}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-400/30 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
            title="Jump to Summit Peak"
          >
            <ChevronUp className="w-4 h-4 text-amber-400" />
            <span className="hidden md:inline">To Summit</span>
          </button>
        </div>

      </header>

      {/* Main Scrollable Mountain Ascent Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto relative scroll-smooth bg-slate-950"
      >
        
        {/* Background Mountain Photo & Glow Effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          
          {/* High quality mountain landscape background image */}
          <img
            src={mountainBgUrl || defaultMountainBg}
            alt="Mountain Landscape"
            className="w-full h-full object-cover object-center opacity-35 scale-105 filter saturate-120 transition-all duration-700"
          />

          {/* Atmospheric gradient overlay for contrast and depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-slate-950" />

          {/* Top Peak Sunrise Aura */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-amber-400/40 via-amber-600/15 to-transparent blur-3xl opacity-90" />

          {/* Golden Rays & Sunburst Effect */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-amber-400/25 blur-2xl animate-pulse" />

          {/* SVG Ascending Trail Path */}
          <svg className="absolute inset-0 w-full h-full stroke-amber-400/20" preserveAspectRatio="none">
            <path 
              d="M 50% 98% Q 25% 90%, 45% 82% T 70% 68% T 30% 50% T 65% 32% T 42% 18% T 50% 2%" 
              fill="none" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
            />
          </svg>

        </div>

        {/* Content Section: Peak to Base Layout */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 flex flex-col items-center space-y-24 sm:space-y-32">
          
          {/* ==================== THE PEAK / SUMMIT ==================== */}
          <div className="text-center space-y-6 pt-12 pb-8 flex flex-col items-center">
            
            {/* Sunrise Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-serif uppercase tracking-[0.25em] shadow-2xl backdrop-blur-md animate-bounce">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>THE SUMMIT • 14,411 FT</span>
            </div>

            {/* Glowing Sunburst Peak Icon */}
            <div className="relative my-4">
              <div className="absolute -inset-6 rounded-full bg-amber-400/30 blur-xl animate-pulse" />
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 p-1 shadow-2xl relative flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center border border-amber-300/60">
                  <Mountain className="w-10 h-10 text-amber-300" />
                </div>
              </div>
            </div>

            {/* THE PEAK WORD: HEALING */}
            <div className="space-y-2">
              <h1 className="font-serif-title font-extrabold text-6xl sm:text-8xl lg:text-9xl tracking-tight text-amber-100 drop-shadow-[0_0_40px_rgba(251,191,36,0.9)] uppercase transition-transform hover:scale-105 duration-500">
                HEALING
              </h1>
              <p className="font-script text-3xl sm:text-5xl text-amber-300 font-normal">
                Reaching the Light
              </p>
            </div>

            {/* Exact Required Quote Under the Peak */}
            <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-900/80 border-2 border-amber-400/50 shadow-2xl backdrop-blur-md space-y-3">
              <blockquote className="font-serif italic text-lg sm:text-2xl text-amber-100 leading-relaxed font-normal">
                “You don’t have to reach the top all at once. You just have to keep climbing.”
              </blockquote>
              <p className="text-xs font-sans-body uppercase tracking-[0.25em] text-amber-400 font-semibold">
                — Climbing Toward Healing
              </p>
            </div>

          </div>

          {/* ==================== THE ASCENDING WORDS PATH ==================== */}
          <div className="w-full space-y-16 sm:space-y-24 relative py-8">
            
            {STEPS.slice(1).map((step) => { // Skip index 0 (Healing) as it's rendered at the Peak
              const isSelected = activeWordId === step.id;

              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center transition-all duration-300"
                  style={{
                    alignItems: 
                      step.positionPercent < 35 
                        ? 'flex-start' 
                        : step.positionPercent > 65 
                        ? 'flex-end' 
                        : 'center',
                    paddingLeft: step.positionPercent < 35 ? `${step.positionPercent}%` : '0',
                    paddingRight: step.positionPercent > 65 ? `${100 - step.positionPercent}%` : '0',
                  }}
                >
                  
                  {/* Interactive Word Container */}
                  <div
                    onClick={() => setActiveWordId(isSelected ? null : step.id)}
                    className="group cursor-pointer relative flex flex-col items-center max-w-md text-center p-2 rounded-2xl transition-all hover:scale-105"
                  >
                    
                    {/* Step Elevation Pill */}
                    <span className="text-[10px] font-mono text-amber-400/80 bg-slate-900/90 border border-amber-400/20 px-2.5 py-0.5 rounded-full mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      {step.elevation.toLocaleString()} FT • STEP {step.level}
                    </span>

                    {/* Word Display */}
                    <h2 className={`font-serif-title font-bold tracking-wide transition-all ${step.sizeClass} ${step.glowClass} group-hover:text-amber-200`}>
                      {step.word}
                    </h2>

                    {/* Click Indicator / Reflection Quote */}
                    <div className="mt-2 transition-all">
                      {isSelected ? (
                        <div className="mt-3 p-4 rounded-xl bg-slate-900/90 border border-amber-400/40 text-amber-100 text-xs sm:text-sm font-serif italic shadow-xl max-w-sm animate-fade-in">
                          "{step.quote}"
                        </div>
                      ) : (
                        <span className="text-[11px] text-amber-300/50 font-sans group-hover:text-amber-300 transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100">
                          <Sparkles className="w-3 h-3" />
                          <span>Tap for reflection</span>
                        </span>
                      )}
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

          {/* ==================== THE BASE / TRAILHEAD ==================== */}
          <div ref={bottomRef} className="text-center space-y-6 pt-16 pb-20 flex flex-col items-center border-t border-amber-500/20 w-full">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-300/80 text-xs font-mono uppercase tracking-widest">
              <span>TRAILHEAD BASE • 500 FT</span>
            </div>

            <div className="space-y-2 max-w-lg">
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-amber-200">
                Where Every Journey Begins
              </h2>
              <p className="font-sans-body text-xs sm:text-sm text-slate-300 leading-relaxed">
                You are at the foot of the mountain. Take a deep breath, trust the path ahead, and begin your climb upward toward healing.
              </p>
            </div>

            {/* Climb Upward Action Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
              <button
                onClick={scrollToPeak}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xl hover:scale-105 transition-all border border-amber-300 cursor-pointer"
              >
                <ChevronUp className="w-4 h-4 text-slate-950" />
                <span>Climb to the Peak ↑</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-200 font-bold text-xs sm:text-sm border border-amber-400/30 hover:border-amber-300 transition-all cursor-pointer"
              >
                Return to Website
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Sticky Progress Bar */}
      <footer className="bg-slate-950/90 border-t border-amber-500/20 px-6 py-2.5 flex items-center justify-between text-xs text-amber-300/80 font-sans-body">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-medium">Climbing Toward Healing • Digital Experience</span>
        </div>

        <button
          onClick={scrollToBase}
          className="hover:text-amber-200 transition-colors flex items-center gap-1 text-[11px] underline cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset to Base</span>
        </button>
      </footer>

    </div>
  );
};
