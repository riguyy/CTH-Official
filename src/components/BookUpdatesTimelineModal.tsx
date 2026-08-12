import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Calendar, Compass, Mountain, Sparkles, Send, Check, Heart, ExternalLink } from 'lucide-react';
import timelineBg from '../assets/images/timeline_bg_mountain_1786549427466.jpg';

interface BookUpdatesTimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFollowJourneyClick?: () => void;
}

interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  stepNumber: number;
  icon?: string;
  bullets?: string[];
  isHighlighted?: boolean;
}

const MILESTONES: TimelineMilestone[] = [
  {
    stepNumber: 1,
    year: '2020',
    title: 'The Beginning',
    description: 'During the COVID-19 pandemic, the idea for Climbing Toward Healing begins. What started as an idea would eventually grow into a full book.',
    icon: '🌱',
  },
  {
    stepNumber: 2,
    year: '2021',
    title: 'The Story Takes Shape',
    description: 'Writing continues as the story develops and the vision for the book becomes clearer.',
    icon: '✍️',
  },
  {
    stepNumber: 3,
    year: '2022',
    title: 'The Journey Continues',
    description: 'More time is spent writing, revising, and developing the story.',
    icon: '📖',
  },
  {
    stepNumber: 4,
    year: '2023',
    title: 'Bringing It Together',
    description: 'The book continues to evolve as the writing and editing process moves forward.',
    icon: '🧗',
  },
  {
    stepNumber: 5,
    year: '2024',
    title: 'The Final Climb',
    description: 'The story gets closer to completion as the final pieces begin coming together.',
    icon: '🏔️',
  },
  {
    stepNumber: 6,
    year: '2025',
    title: 'The Finish Line',
    description: 'The manuscript reaches the final stages and preparations for publication begin.',
    icon: '🏁',
  },
  {
    stepNumber: 7,
    year: '2026',
    title: 'Published',
    description: 'Climbing Toward Healing officially becomes available to readers.',
    icon: '✨',
    isHighlighted: true,
  },
  {
    stepNumber: 8,
    year: '2026',
    title: 'The Journey Continues',
    description: 'The book reaches exciting new milestones:',
    icon: '🚀',
    isHighlighted: true,
    bullets: [
      '🌐 The official Climbing Toward Healing website launches.',
      '📚 The book becomes available on Amazon.',
      '🗽 Climbing Toward Healing is featured on a billboard in New York.',
      '🏬 Coming soon to Barnes & Noble.',
      '🍎 Coming soon to Apple Books.',
      '📱 The book continues growing through social media and its expanding community of readers.',
    ],
  },
];

export const BookUpdatesTimelineModal: React.FC<BookUpdatesTimelineModalProps> = ({
  isOpen,
  onClose,
  onFollowJourneyClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFollowJourney = () => {
    onClose();
    if (onFollowJourneyClick) {
      onFollowJourneyClick();
    } else {
      // Fallback: scroll to footer subscribe section
      const newsletter = document.querySelector('form');
      if (newsletter) {
        newsletter.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl text-white flex flex-col font-sans-body select-none overflow-hidden animate-fade-in">
      
      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/90 border-b border-amber-500/20 px-4 sm:px-8 py-4 flex items-center justify-between gap-4 backdrop-blur-md">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-200 border border-amber-400/30 hover:border-amber-300 text-xs sm:text-sm font-bold transition-all shadow-lg group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Website</span>
        </button>

        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span className="font-serif-title text-sm sm:text-base font-bold text-amber-100">
            Book Updates Timeline
          </span>
        </div>

        <div className="w-20 text-right">
          <span className="text-[10px] font-mono text-amber-400/80 bg-slate-900 px-2.5 py-1 rounded-full border border-amber-500/20">
            2020 — 2026
          </span>
        </div>
      </header>

      {/* Main Timeline Scrollable Content */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto relative scroll-smooth px-4 sm:px-6 py-12"
      >
        
        {/* Professional Relatable Scenic Mountain Background Layer */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <img
            src={timelineBg}
            alt="Scenic Mountain Summit background"
            className="w-full h-full object-cover object-center opacity-25 scale-105 filter saturate-110 blur-[1px] transition-all duration-700"
          />
          {/* Atmospheric gradient overlay for contrast, depth and readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/90 to-slate-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-radial from-amber-500/15 via-amber-900/10 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-16">
          
          {/* Header Title Banner */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-serif uppercase tracking-[0.2em] shadow-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>THE STORY OF CLIMBING TOWARD HEALING</span>
            </div>

            <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-amber-100 tracking-tight">
              Book Updates Timeline
            </h1>

            <p className="font-sans-body text-xs sm:text-sm text-slate-300 leading-relaxed">
              From a small seed of hope during the 2020 global pandemic to a published memoir featured on New York billboards and touching lives worldwide.
            </p>
          </div>

          {/* Vertical Timeline Container */}
          <div className="relative pt-4 pb-12">
            
            {/* Mountain Climbing Vertical Connector Line */}
            <div className="absolute left-6 sm:left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-slate-800 via-amber-500/60 to-amber-300 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.3)]" />

            {/* Timeline Item Cards */}
            <div className="space-y-12 sm:space-y-16 relative">
              {MILESTONES.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={`${item.year}-${index}`}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-6 sm:gap-12 group`}
                  >
                    
                    {/* Milestone Center Badge / Node */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg shadow-xl transition-transform duration-300 group-hover:scale-110 border-2 ${
                        item.isHighlighted 
                          ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 border-white shadow-amber-500/40' 
                          : 'bg-slate-900 text-amber-300 border-amber-500/40'
                      }`}>
                        <span>{item.icon || '📍'}</span>
                      </div>
                    </div>

                    {/* Milestone Content Box */}
                    <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${
                      isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                    }`}>
                      
                      <div className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 border backdrop-blur-md ${
                        item.isHighlighted
                          ? 'bg-slate-900/90 border-amber-400/50 shadow-2xl shadow-amber-500/10 hover:border-amber-300'
                          : 'bg-slate-900/60 border-slate-800 hover:border-amber-500/30'
                      }`}>
                        
                        {/* Year Tag */}
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mb-3 ${
                          item.isHighlighted
                            ? 'bg-amber-400 text-slate-950'
                            : 'bg-slate-800 text-amber-300 border border-amber-500/20'
                        }`}>
                          <Calendar className="w-3 h-3" />
                          <span>{item.year}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-amber-100 mb-2">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="font-sans-body text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Bullet points for 2026 Journey Continues */}
                        {item.bullets && item.bullets.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-amber-500/20 space-y-2 text-left">
                            {item.bullets.map((bullet, bIdx) => (
                              <div 
                                key={bIdx}
                                className="p-2.5 rounded-xl bg-slate-950/80 border border-amber-500/20 text-xs sm:text-sm text-amber-100 font-sans-body leading-normal flex items-start gap-2 shadow-sm"
                              >
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        )}

                      </div>

                    </div>

                    {/* Empty spacer column for balanced desktop grid */}
                    <div className="hidden sm:block sm:w-1/2" />

                  </div>
                );
              })}
            </div>

          </div>

          {/* End Highlighted Message & Button */}
          <div className="text-center space-y-6 pt-8 pb-12 border-t border-amber-500/20">
            
            {/* Highlighted Banner */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-900 border-2 border-amber-400/50 shadow-2xl relative overflow-hidden max-w-2xl mx-auto space-y-6">
              
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />

              <div className="space-y-3">
                <span className="text-xs font-serif text-amber-400 uppercase tracking-[0.25em] font-semibold">
                  Looking Ahead
                </span>
                
                <h2 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-amber-100 tracking-tight leading-tight drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                  “The climb doesn’t end here.”
                </h2>

                <p className="font-sans-body text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  New chapters, bookstore appearances, community events, and reader reflections are unfolding every day.
                </p>
              </div>

              {/* Follow the Journey Button */}
              <div className="pt-2">
                <button
                  onClick={handleFollowJourney}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all hover:scale-105 border-2 border-white cursor-pointer inline-flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
                  <span>Follow the Journey</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
