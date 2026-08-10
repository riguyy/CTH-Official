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
          
          {/* Left: Author Photo Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              
              {/* Decorative Background Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-600 opacity-60 blur-md group-hover:opacity-80 transition-all" />

              {/* Photo Box */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] rounded-2xl overflow-hidden bg-slate-900 border-4 border-white shadow-2xl">
                <img 
                  src={book.authorPhoto} 
                  alt={book.author} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to serene portrait placeholder
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                {/* Author Name Badge */}
                <div className="absolute bottom-4 left-4 right-4 text-center text-white p-3 rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/20">
                  <h3 className="font-serif-title text-xl font-bold tracking-wide">
                    {book.author}
                  </h3>
                  <p className="text-[11px] text-amber-300 font-sans-body uppercase tracking-widest mt-0.5">
                    Author & Speaker
                  </p>
                </div>

              </div>

            </div>

            <p className="text-center text-xs text-slate-500 font-sans-body mt-4 italic">
              "Honesty and vulnerability open the doorway to healing."
            </p>
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
