import React from 'react';
import { BookCover3D } from './BookCover3D';
import { Heart, Sun, Mountain, Sparkles, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { BookDetails } from '../types';

interface AboutBookSectionProps {
  book: BookDetails;
  onReadPreviewClick: () => void;
  onBuyClick: () => void;
}

export const AboutBookSection: React.FC<AboutBookSectionProps> = ({
  book,
  onReadPreviewClick,
  onBuyClick,
}) => {
  const pillars = [
    {
      icon: Heart,
      title: 'Healing From Within',
      desc: 'Facing the darkest moments with vulnerability, self-compassion, and the gentle understanding that healing takes time.',
    },
    {
      icon: Mountain,
      title: 'Strength in Every Step',
      desc: 'Every scar holds strength. Recognizing that even the smallest step forward is a victory worth celebrating.',
    },
    {
      icon: Sun,
      title: 'Finding Light After Darkness',
      desc: 'Discovering that after trauma, loss, or heartbreak, joy and peace can bloom once again.',
    },
    {
      icon: Sparkles,
      title: 'You Are Not Alone',
      desc: 'A comforting sanctuary for anyone who has ever felt lost, overwhelmed, or isolated in their pain.',
    },
  ];

  return (
    <section id="about-book" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] text-slate-800 relative overflow-hidden">
      
      {/* Background Decorative Flourish */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-amber-700 font-serif text-xs uppercase tracking-[0.25em]">
            <span className="h-[1px] w-8 bg-amber-300" />
            <span>Discover The Story</span>
            <span className="h-[1px] w-8 bg-amber-300" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            About <span className="font-script text-4xl sm:text-6xl text-amber-700 font-normal">Climbing Toward Healing</span>
          </h2>

          <p className="font-serif-title italic text-lg sm:text-xl text-amber-800">
            "Healing is a journey—not a destination."
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Book Cover Visual (Left) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="p-4 sm:p-6 rounded-3xl bg-amber-50/80 border border-amber-200/80 shadow-lg shadow-amber-900/5">
              <BookCover3D
                coverUrl={book.coverImage}
                title={book.title}
                author={book.author}
                subtitle={book.subtitle}
                size="md"
                onClick={onReadPreviewClick}
              />
              
              <div className="mt-6 text-center space-y-2">
                <p className="font-serif-title text-sm font-semibold text-slate-900">
                  Available Formats
                </p>
                <div className="flex items-center justify-center gap-3 text-xs text-slate-600 font-sans-body">
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">Kindle eBook</span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">Paperback</span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">Hardcover</span>
                </div>
              </div>
            </div>
          </div>

          {/* Descriptive Text & Purpose (Right) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="prose prose-slate max-w-none font-sans-body text-slate-700 space-y-4 text-base leading-relaxed">
              <p className="font-medium text-slate-900 text-lg leading-relaxed">
                <strong className="font-serif-title text-2xl text-amber-800 font-bold block mb-1">
                  A Story of Survival, Strength & Transformation
                </strong>
                <em>Climbing Toward Healing</em> is more than just a memoir—it is an intimate map of endurance and a warm hand held out in the dark.
              </p>

              <p>
                In this deeply moving memoir, <strong>Jacqueline Eye</strong> opens her heart to share personal experiences of facing moments that nearly broke her, finding the courage to continue through immense grief and hardship, and discovering the hope and healing that helped her rise again.
              </p>

              <p>
                Through the metaphor of a mountain climb—where the trail is steep, rocky, and often unpredictable—Jacqueline demonstrates that choosing to keep moving forward, no matter how slowly, is something profoundly worth recognizing.
              </p>

              <div className="bg-amber-100/60 border-l-4 border-amber-600 p-4 rounded-r-xl my-4 text-slate-800 italic font-serif-title text-lg">
                "For anyone who has ever felt lost, overwhelmed, or alone, this book is a gentle reminder: <span className="font-bold text-amber-900">Healing is possible. You are not alone.</span>"
              </div>
            </div>

            {/* Core Message Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Real emotions & honest reflections',
                'Overcoming the seemingly impossible',
                'Finding light and newfound purpose',
                'A gentle guide for your own climb'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white p-3 rounded-xl border border-amber-200/60 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Read Sample CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={onReadPreviewClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-100 font-sans-body text-xs font-bold tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Read Free Excerpt</span>
              </button>

              <button
                onClick={onBuyClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-sans-body text-xs font-bold tracking-wide shadow-md shadow-amber-600/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Buy On Amazon</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-amber-200/70 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-title text-xl font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-sans-body text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-amber-700">
                  <span>Pillar {idx + 1}</span>
                  <span className="font-serif">♡</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
