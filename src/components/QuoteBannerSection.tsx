import React, { useState, useEffect } from 'react';
import { Quote, Sparkles, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface QuoteBannerSectionProps {
  mountainBgUrl: string;
}

export const QuoteBannerSection: React.FC<QuoteBannerSectionProps> = ({
  mountainBgUrl,
}) => {
  const quotes = [
    {
      text: "Every step has a story. Every scar holds strength. Every climb leads to healing.",
      context: "Core Mantra from Climbing Toward Healing",
    },
    {
      text: "Because at the end of the day, if Climbing Toward Healing helps even one person, then every page, every word, and every moment that went into writing it was worth it.",
      context: "A Message from Jacqueline Eye",
    },
    {
      text: "To everyone who is healing, rebuilding, growing, or simply taking life one day at a time: Keep climbing. Your story is still being written.",
      context: "Dedication to Readers",
    },
    {
      text: "And sometimes, the most important part of the journey isn't how quickly you reach the top—it's realizing just how far you've already come.",
      context: "Reflection on Courage",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section id="quotes" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden my-0">
      
      {/* Peaceful Mountain Sunset Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={mountainBgUrl} 
          alt="Peaceful Mountain Background" 
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.1] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/80" />
        <div className="absolute inset-0 bg-radial-at-c from-amber-500/10 via-transparent to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Top Flourish */}
        <div className="flex items-center justify-center gap-2 text-amber-400 font-serif text-xs uppercase tracking-[0.3em]">
          <span className="h-[1px] w-12 bg-amber-400/40" />
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Words of Healing</span>
          <span className="h-[1px] w-12 bg-amber-400/40" />
        </div>

        {/* Quote Card */}
        <div className="bg-slate-900/70 border border-amber-400/30 rounded-3xl p-8 sm:p-14 shadow-2xl backdrop-blur-md relative min-h-[260px] flex flex-col justify-between">
          
          <Quote className="w-16 h-16 text-amber-400/15 absolute top-6 left-6 pointer-events-none" />

          {/* Active Quote Text */}
          <div className="space-y-4 my-auto animate-fadeIn key={activeIndex}">
            <blockquote className="font-serif-title text-2xl sm:text-4xl font-semibold text-amber-100 italic leading-relaxed drop-shadow-md">
              "{quotes[activeIndex].text}"
            </blockquote>

            <p className="font-sans-body text-xs sm:text-sm text-amber-300/80 uppercase tracking-[0.2em] font-medium pt-2">
              — {quotes[activeIndex].context}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-amber-400/20 text-xs text-amber-200/80 font-sans-body">
            
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + quotes.length) % quotes.length)}
              className="p-2 rounded-xl bg-slate-950/60 hover:bg-slate-900 border border-amber-400/20 text-amber-300 transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === idx 
                      ? 'w-6 bg-amber-400' 
                      : 'w-2 bg-amber-400/30 hover:bg-amber-400/60'
                  }`}
                  title={`Quote ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % quotes.length)}
              className="p-2 rounded-xl bg-slate-950/60 hover:bg-slate-900 border border-amber-400/20 text-amber-300 transition-colors flex items-center gap-1"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};
