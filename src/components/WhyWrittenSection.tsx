import React from 'react';
import { Heart, Feather, Quote, MessageCircle, Sparkles } from 'lucide-react';

export const WhyWrittenSection: React.FC = () => {
  return (
    <section id="why-written" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-amber-950/80 to-slate-950 text-amber-50 relative overflow-hidden">
      
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-serif tracking-widest uppercase">
            <Feather className="w-3.5 h-3.5 text-amber-400" />
            <span>A Personal Message From The Author</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold tracking-tight text-amber-100">
            Why This Book Was Written
          </h2>

          <div className="flex items-center justify-center gap-3 text-amber-400/60 pt-2">
            <div className="h-[1px] w-12 bg-amber-400/30" />
            <Heart className="w-4 h-4 text-amber-400" />
            <div className="h-[1px] w-12 bg-amber-400/30" />
          </div>
        </div>

        {/* Heartfelt Note Card */}
        <div className="bg-slate-900/90 border border-amber-400/30 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md relative space-y-8">
          
          <Quote className="w-12 h-12 text-amber-500/20 absolute top-6 right-8 pointer-events-none" />

          <div className="space-y-6 font-sans-body text-slate-200 text-base sm:text-lg leading-relaxed">
            
            <p className="font-serif-title italic text-2xl text-amber-200 font-normal leading-snug">
              "This story was never just mine… It's for every heart still climbing."
            </p>

            <p>
              When I first sat down to write <em>Climbing Toward Healing</em>, I didn't set out to write a book. I was simply trying to survive the weight of what I had lived through. Sharing my deeply personal experiences of heartbreak, trauma, and recovery felt terrifying at first. It was never an easy story to tell.
            </p>

            <p>
              But as I began to piece my journey together, I realized something essential: so many of us carry hidden scars in silence. We walk around carrying immense pain, believing we are alone in our darkness or that our broken pieces can never be mended.
            </p>

            <p>
              I wrote this book with one single hope: that someone reading it might see a piece of their own journey within these pages. Maybe it reminds them that they are stronger than they realize. Maybe it gives them hope when they need it most. Or maybe it simply offers a quiet, comforting reminder that they do not have to carry their burden alone.
            </p>

          </div>

          {/* Highlight Callout Quote Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-600/10 to-transparent border border-amber-400/40 text-center space-y-3">
            <Sparkles className="w-5 h-5 text-amber-400 mx-auto" />
            <blockquote className="font-serif-title text-xl sm:text-2xl font-bold text-amber-100 italic leading-snug">
              "Because at the end of the day, if <span className="text-amber-300 font-script text-3xl font-normal not-italic px-1">Climbing Toward Healing</span> helps even one person, then every page, every word, and every moment that went into writing it was worth it."
            </blockquote>
            <p className="text-xs text-amber-300/80 font-sans-body font-semibold tracking-wider uppercase">
              — Jacqueline Eye
            </p>
          </div>

          {/* Author Signature Line */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-amber-400/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-serif font-bold text-lg">
                JE
              </div>
              <div>
                <p className="font-serif-title font-bold text-amber-100 text-base leading-none">
                  Jacqueline Eye
                </p>
                <p className="text-xs text-amber-300/70 font-sans-body mt-0.5">
                  Author & Advocate for Healing
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-amber-300/80 italic font-serif">
              <span>With love, strength & hope</span>
              <span>♡</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
