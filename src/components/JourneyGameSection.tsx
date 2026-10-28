import React from 'react';
import { Compass, Sparkles, ArrowRight, Sun, Mountain, Play } from 'lucide-react';
import { BookDetails } from '../types';

interface JourneyGameSectionProps {
  book: BookDetails;
  onOpenGame: () => void;
}

export const JourneyGameSection: React.FC<JourneyGameSectionProps> = ({
  book,
  onOpenGame
}) => {
  return (
    <section 
      id="journey-game" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#181D29] via-[#1F1924] to-[#2B1B1C] text-white overflow-hidden border-t border-amber-500/20"
    >
      {/* Mountain & Sunrise Ambient Backdrops */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-amber-500/25 to-transparent rounded-full blur-3xl" />
        
        {/* Mountain silhouette vectors */}
        <svg 
          className="absolute bottom-0 w-full h-40 text-black/50" 
          viewBox="0 0 1200 240" 
          fill="currentColor" 
          preserveAspectRatio="none"
        >
          <path d="M0,240 L0,150 L180,100 L340,170 L520,70 L700,150 L880,50 L1040,140 L1200,90 L1200,240 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Section Label */}
        <div className="flex items-center justify-center gap-2 text-amber-300 font-serif text-xs uppercase tracking-[0.25em]">
          <span className="h-[1px] w-8 bg-amber-400/50" />
          <span className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            Interactive Experience
          </span>
          <span className="h-[1px] w-8 bg-amber-400/50" />
        </div>

        {/* Section Title & Description */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            The Journey <span className="font-script text-4xl sm:text-6xl text-amber-300 font-normal">Toward Healing</span>
          </h2>
          <p className="font-sans-body text-slate-300 text-sm sm:text-base leading-relaxed">
            Experience a brief, interactive mountain ascent inspired by the core message of <em>Climbing Toward Healing</em>. Climb through 5 gentle stages from darkness into sunrise, reflect on resilience, and discover the light waiting at the summit.
          </p>
        </div>

        {/* Primary Interactive Game Launch Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenGame}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-serif-title font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(251,191,36,0.4)] hover:shadow-[0_0_35px_rgba(251,191,36,0.6)] transition-all cursor-pointer transform hover:scale-105 active:scale-98"
          >
            <div className="w-7 h-7 rounded-full bg-slate-950/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 text-slate-950 fill-current ml-0.5" />
            </div>
            <span>Play The Journey Toward Healing</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Quiet, unboxed metadata features */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs text-slate-400 font-sans pt-2">
          <span>5 Gentle Stages</span>
          <span aria-hidden="true" className="text-amber-400/60">·</span>
          <span>~90 Seconds to Complete</span>
          <span aria-hidden="true" className="text-amber-400/60">·</span>
          <span>No Account or Download Required</span>
          <span aria-hidden="true" className="text-amber-400/60">·</span>
          <span>Desktop & Mobile Friendly</span>
        </div>

      </div>
    </section>
  );
};
