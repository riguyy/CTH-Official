import React, { useState } from 'react';
import { Sparkles, Megaphone, Award, BookOpen, Mail, Copy, Check } from 'lucide-react';
import { BookDetails } from '../types';

interface OurTeamSectionProps {
  book: BookDetails;
}

export const OurTeamSection: React.FC<OurTeamSectionProps> = ({ book }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('climbingtowardhealing@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  const teamMembers = [
    {
      name: book.author,
      role: 'Author & Speaker',
      initials: 'JE',
      quote: '"Honesty and vulnerability open the doorway to healing."',
      badge: 'Memoir Author',
    },
    {
      name: 'Riley Eye',
      role: 'Market Director',
      initials: 'RE',
      quote: '"Connecting readers with stories that illuminate, inspire, and transform."',
      badge: 'Market Director',
    },
    {
      name: 'Trinity Book Publishing',
      role: 'Publisher',
      initials: 'TBP',
      quote: '"Bringing impactful, life-changing memoirs and stories to readers worldwide."',
      badge: 'Official Publisher',
    },
  ];

  return (
    <section id="our-team" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6] text-slate-800 relative border-t border-amber-900/10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-amber-800 font-serif text-xs uppercase tracking-[0.25em]">
            <span className="h-[1px] w-8 bg-amber-400" />
            <span>OUR TEAM & PUBLISHER</span>
            <span className="h-[1px] w-8 bg-amber-400" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Meet <span className="font-script text-4xl sm:text-6xl text-amber-800 font-normal">Our Team</span>
          </h2>

          <p className="font-sans-body text-slate-600 text-sm sm:text-base leading-relaxed">
            The passionate team and publisher bringing <em>Climbing Toward Healing</em> to life.
          </p>
        </div>

        {/* Team Member Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group w-full max-w-sm">
              
              {/* Decorative Background Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-600 opacity-60 blur-md group-hover:opacity-80 transition-all duration-500" />

              {/* Emblem Box - Compact Style like "Meet the Author" Box */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 border-4 border-white shadow-2xl p-6 sm:p-7 flex flex-col items-center text-center text-white space-y-5 h-full justify-between">
                
                <div className="flex flex-col items-center space-y-4 w-full">
                  {/* Monogram Crest */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center border border-amber-300/40">
                      <span className="font-serif-title font-bold text-xl text-amber-300 tracking-wider">
                        {member.initials}
                      </span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-1">
                    <h3 className="font-serif-title text-xl sm:text-2xl font-bold tracking-wide text-amber-100">
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-amber-400 font-sans-body uppercase tracking-[0.2em] font-semibold">
                      {member.role}
                    </p>
                  </div>

                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                  {/* Quote */}
                  <blockquote className="font-serif italic text-xs sm:text-sm text-slate-200 leading-relaxed px-1">
                    {member.quote}
                  </blockquote>
                </div>

                {/* Badge Footer */}
                <div className="w-full pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-300/80">
                  <span className="bg-amber-500/20 px-2.5 py-1 rounded-full border border-amber-400/30 text-[10px] font-sans font-bold text-amber-200 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{member.badge}</span>
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-serif">
                    <span>♡</span>
                    <span className="uppercase text-[9px] tracking-widest text-slate-400 font-sans">Team</span>
                    <span>♡</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Contact & Inquiries Banner */}
        <div id="contact" className="pt-8 border-t border-amber-900/15 scroll-mt-24">
          <div className="bg-slate-900 border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 text-center text-white shadow-2xl max-w-2xl mx-auto space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 text-amber-400 font-serif text-xs uppercase tracking-[0.2em]">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Contact & Inquiries</span>
            </div>

            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-amber-100">
              Get in Touch with Us
            </h3>

            <p className="font-sans-body text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Have questions, media inquiries, or want to share your thoughts with our team? Send us an email:
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="mailto:climbingtowardhealing@gmail.com"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-950" />
                <span>climbingtowardhealing@gmail.com</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-400/30 text-xs font-bold transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
