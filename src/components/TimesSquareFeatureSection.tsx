import React from 'react';
import { Sparkles, MapPin, Film, Heart, Check, ExternalLink } from 'lucide-react';
import { BookDetails } from '../types';

interface TimesSquareFeatureSectionProps {
  book: BookDetails;
}

export const TimesSquareFeatureSection: React.FC<TimesSquareFeatureSectionProps> = ({
  book,
}) => {
  return (
    <section id="times-square" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Subtle Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-serif uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Special Media Highlight</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold tracking-tight text-amber-100">
            Featured in <span className="font-script text-4xl sm:text-6xl text-amber-400 font-normal">Times Square, NYC</span>
          </h2>

          <p className="font-serif-title italic text-amber-200/90 text-lg sm:text-xl">
            "Never in a million years did we imagine that Climbing Toward Healing would reach one of the most iconic places in the world..."
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Times Square Billboard Graphic Frame (Left) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl group bg-slate-950">
              <img 
                src={book.timesSquareImage} 
                alt="Climbing Toward Healing Times Square Billboard NYC" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80';
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-amber-400/30 text-xs font-sans-body text-amber-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Times Square, New York City</span>
                    <span className="text-[11px] text-slate-300">New York Times Official Billboard Showcase</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] uppercase">
                  Official Feature
                </span>
              </div>
            </div>
          </div>

          {/* Times Square Feature Text & Gratitude Note (Right) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-4 font-sans-body text-slate-300 text-sm leading-relaxed">
              
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-amber-100 leading-snug">
                The Next Chapter Begins in the Heart of New York City
              </h3>

              <p>
                A huge thank you to <strong>New York Times</strong> for creating a official book trailer showcased on their iconic Times Square billboard.
              </p>

              <p>
                Seeing <em>Climbing Toward Healing</em> on a billboard in the heart of Times Square is truly surreal. It serves as a reminder that every journey starts with a single step—and every story of endurance deserves to be heard.
              </p>

              <p>
                Thank you to every reader, follower, and supporter who has shared this message. Every purchase, review, and recommendation has helped make moments like this possible.
              </p>

            </div>

            {/* Highlights Box */}
            <div className="space-y-2 bg-slate-950/70 p-5 rounded-2xl border border-amber-400/20">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-200">
                <Film className="w-4 h-4 text-amber-400" />
                <span>Trailer Feature Details</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 pt-1">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Featured on Marriott Marquis Times Square Screen</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Highlighting themes of survival, strength, and hope</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Connecting readers globally to Jacqueline Eye's message</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex items-center gap-2 text-amber-300 font-serif italic text-sm">
              <span>"A journey. A story. A movement. Thank you for being part of it."</span>
              <span>♡</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
