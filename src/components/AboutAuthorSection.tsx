import React from 'react';
import { User, Heart, BookOpen, Award, Check } from 'lucide-react';
import { BookDetails } from '../types';

interface AboutAuthorSectionProps {
  book: BookDetails;
}

export const AboutAuthorSection: React.FC<AboutAuthorSectionProps> = ({
  book,
}) => {
  return (
    <section id="about-author" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6] text-slate-800 relative">
      
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Author Crest & Quote Box */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-sm">
              
              {/* Decorative Background Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-600 opacity-60 blur-md group-hover:opacity-80 transition-all" />

              {/* Author Emblem Box */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 border-4 border-white shadow-2xl p-8 flex flex-col items-center text-center text-white space-y-6">
                
                {/* Monogram Crest */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-xl flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center border border-amber-300/40">
                    <span className="font-serif-title font-bold text-2xl text-amber-300 tracking-wider">JE</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif-title text-2xl font-bold tracking-wide text-amber-100">
                    {book.author}
                  </h3>
                  <p className="text-xs text-amber-400 font-sans-body uppercase tracking-[0.25em] font-semibold">
                    Author & Speaker
                  </p>
                </div>

                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                <blockquote className="font-serif italic text-sm text-slate-200 leading-relaxed px-2">
                  "Honesty and vulnerability open the doorway to healing."
                </blockquote>

                <div className="pt-2 flex items-center justify-center gap-2 text-amber-400 text-xs font-serif">
                  <span>♡</span>
                  <span className="uppercase text-[10px] tracking-widest text-slate-400 font-sans">Climbing Toward Healing</span>
                  <span>♡</span>
                </div>

              </div>

            </div>
          </div>

          {/* Right: Author Biography */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-800 font-serif text-xs uppercase tracking-[0.25em]">
                <span className="h-[1px] w-8 bg-amber-400" />
                <span>Meet The Author</span>
              </div>

              <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                About <span className="font-script text-4xl sm:text-6xl text-amber-800 font-normal">{book.author}</span>
              </h2>
            </div>

            <div className="prose prose-slate max-w-none font-sans-body text-slate-700 space-y-4 text-base leading-relaxed">
              <p className="font-medium text-slate-900 text-lg leading-relaxed">
                Jacqueline Eye is a writer, storyteller, and heartfelt survivor whose life work centers on turning hardship into hope.
              </p>

              <p>
                Having navigated profound personal loss, trauma, and the arduous process of rebuilding from within, Jacqueline writes with rare honesty, emotional clarity, and deep compassion. She believes that true strength is not born from never falling, but from finding the grace to rise again after life’s steepest storms.
              </p>

              <p>
                Through her debut memoir, <em>Climbing Toward Healing</em>, Jacqueline dedicated years to carefully crafting a narrative that honours both the pain of survival and the light that awaits on the other side of darkness. Her writing serves as a beacon for anyone navigating their own wilderness, encouraging readers to honor every step of their personal journey.
              </p>

              <p>
                When she isn't writing or connecting with readers, Jacqueline enjoys spending time in quiet nature, drawing inspiration from mountain trails, and supporting advocates for emotional wellness and trauma recovery.
              </p>
            </div>

            {/* Author Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-amber-200/80 shadow-2xs text-center space-y-1">
                <p className="font-serif-title text-2xl font-bold text-amber-800">Memoir</p>
                <p className="text-xs text-slate-600 font-sans-body">Debut Author</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-amber-200/80 shadow-2xs text-center space-y-1">
                <p className="font-serif-title text-2xl font-bold text-amber-800">Times Square</p>
                <p className="text-xs text-slate-600 font-sans-body">Billboard Featured</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-amber-200/80 shadow-2xs text-center space-y-1">
                <p className="font-serif-title text-2xl font-bold text-amber-800">Hope</p>
                <p className="text-xs text-slate-600 font-sans-body">Mental Health Advocate</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
