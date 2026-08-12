import React from 'react';
import { BookCover3D } from './BookCover3D';
import { ShoppingBag, BookOpen, Heart, Sparkles, ArrowRight, ArrowDown, Calendar, Clock } from 'lucide-react';
import { BookDetails } from '../types';

interface HeroSectionProps {
  book: BookDetails;
  onBuyClick: () => void;
  onReadPreviewClick: () => void;
  onStartClimbClick: () => void;
  onTheMessageClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  book,
  onBuyClick,
  onReadPreviewClick,
  onStartClimbClick,
  onTheMessageClick,
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 text-white">
      
      {/* Background Golden Sunset & Mountain Range Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={book.mountainBgImage} 
          alt="Mountain Sunset Pathway" 
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.1] scale-105"
        />
        {/* Gradients for depth and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/80" />
        <div className="absolute inset-0 bg-radial-at-c from-amber-500/10 via-transparent to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
        
        {/* Left Column: Headline, Intro, CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Top Badges Row: Dates & Billboard Announcement */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs font-sans-body">
            
            {/* Publishing & Last Updated Dates Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-amber-400/40 text-amber-200 shadow-lg">
              <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span><strong>Published:</strong> August 10, 2026</span>
              <span className="text-amber-400/40">•</span>
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span><strong>Last Updated:</strong> August 11, 2026</span>
            </div>

            {/* Times Square Billboard Announcement Badge */}
            <a 
              href="#times-square"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-200 transition-all hover:bg-amber-500/30 hover:border-amber-400/50"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Times Square NYC Billboard</span>
              <span className="text-amber-300 font-serif">→</span>
            </a>

          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <span className="text-amber-400/90 font-serif-title text-sm sm:text-base tracking-[0.25em] uppercase font-semibold">
              Official Memoir Release
            </span>
            <h1 className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-amber-50 leading-[1.08] drop-shadow-lg">
              Climbing Toward <br className="hidden sm:inline" />
              <span className="font-script text-5xl sm:text-7xl lg:text-8xl text-amber-300 font-normal inline-block ml-1 sm:ml-2">
                Healing
              </span>
            </h1>
          </div>

          {/* Subtitle & Tagline */}
          <p className="font-serif-title italic text-xl sm:text-2xl text-amber-200/90 max-w-2xl font-normal leading-relaxed">
            "{book.subtitle}"
          </p>

          {/* Short Introduction Paragraph */}
          <p className="font-sans-body text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed text-slate-200/90">
            A raw and deeply personal memoir of survival, resilience, and the unbreakable human spirit. 
            Through the depths of trauma, heartbreak, and unimaginable pain, Jacqueline Eye shares her journey 
            of finding the courage to keep going—one step at a time.
          </p>

          {/* Key Motifs / Highlights */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-amber-200/80 font-sans-body">
            <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-amber-400/20">
              <Heart className="w-3.5 h-3.5 text-amber-400" />
              <span>Real & Vulnerable</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-amber-400/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Message of Hope</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-amber-400/20">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Available on Amazon</span>
            </span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col items-center lg:items-start gap-4 pt-4 w-full">
            {/* Top Row: Buy on Amazon & Chapter 1 Preview */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <button
                id="hero-buy-button"
                onClick={onBuyClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-slate-950 font-sans-body text-sm font-extrabold tracking-wide shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 border border-amber-300 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-slate-950" />
                <span>Buy the Book on Amazon</span>
              </button>

              <button
                id="hero-preview-button"
                onClick={onReadPreviewClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-100 font-sans-body text-sm font-bold border border-amber-400/50 hover:border-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg group cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                <span>Chapter 1 Preview</span>
                <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Bottom Row: Centered "Start the Climb" & "The Message" Experience Buttons with Glowing Effects */}
            <div className="w-full max-w-md sm:max-w-none flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              
              {/* START THE CLIMB Button */}
              <div className="relative group/climb inline-flex items-center justify-center w-full sm:w-auto">
                {/* Radiant Golden Glow Halo Behind Button */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 opacity-80 blur-md group-hover/climb:opacity-100 group-hover/climb:blur-lg transition-all duration-300 animate-pulse" />

                <button
                  id="hero-start-climb-button"
                  onClick={onStartClimbClick}
                  className="relative z-10 w-full sm:w-auto px-5.5 py-2.5 sm:px-6 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-sans-body text-xs sm:text-sm font-extrabold tracking-wide shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border-2 border-white cursor-pointer"
                >
                  <span className="text-base">🧗</span>
                  <span className="uppercase tracking-wider">Start the Climb</span>
                  <Sparkles className="w-4 h-4 text-slate-950 animate-spin-slow" />
                </button>
              </div>

              {/* THE MESSAGE Button */}
              <div className="relative group/message inline-flex items-center justify-center w-full sm:w-auto">
                {/* Radiant Rose Gold Glow Halo Behind Button */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-rose-500 via-amber-400 to-amber-500 opacity-80 blur-md group-hover/message:opacity-100 group-hover/message:blur-lg transition-all duration-300 animate-pulse" />

                <button
                  id="hero-the-message-button"
                  onClick={onTheMessageClick}
                  className="relative z-10 w-full sm:w-auto px-5.5 py-2.5 sm:px-6 sm:py-2.5 rounded-xl bg-gradient-to-r from-rose-600 via-amber-500 to-amber-600 hover:from-rose-500 hover:to-amber-400 text-white font-sans-body text-xs sm:text-sm font-extrabold tracking-wide shadow-[0_0_20px_rgba(244,63,94,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border-2 border-white cursor-pointer"
                >
                  <span className="text-base">❤️</span>
                  <span className="uppercase tracking-wider">THE MESSAGE</span>
                  <Sparkles className="w-4 h-4 text-white animate-spin-slow" />
                </button>
              </div>

            </div>
          </div>

          {/* Author Byline */}
          <p className="text-xs text-amber-300/80 font-serif tracking-widest pt-2">
            BY AUTHOR <strong className="text-amber-100 uppercase tracking-[0.2em]">{book.author}</strong>
          </p>

        </div>

        {/* Right Column: Prominent 3D Book Cover Artwork */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative">
            <BookCover3D
              coverUrl={book.coverImage}
              title={book.title}
              author={book.author}
              subtitle={book.subtitle}
              size="lg"
              onClick={onReadPreviewClick}
            />
          </div>
        </div>

      </div>

      {/* Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-amber-300/50 text-[10px] uppercase tracking-widest animate-bounce">
        <span>Scroll to Explore</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </div>

    </section>
  );
};
