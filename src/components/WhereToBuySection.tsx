import React, { useState } from 'react';
import { ShoppingBag, BookOpen, Check, Copy, ExternalLink, Heart, Sparkles, Gift } from 'lucide-react';
import { BookDetails } from '../types';

interface WhereToBuySectionProps {
  book: BookDetails;
}

export const WhereToBuySection: React.FC<WhereToBuySectionProps> = ({
  book,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(book.buyLinks.amazon);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const formats = [
    {
      name: 'Kindle eBook',
      desc: 'Instant digital download on Kindle app & devices',
      badge: 'Popular Digital',
      icon: BookOpen,
      price: '$9.99',
      url: book.buyLinks.amazonKindle,
    },
    {
      name: 'Paperback Edition',
      desc: 'Beautiful tactile softcover with premium matte finish',
      badge: 'Bestseller',
      icon: ShoppingBag,
      price: '$16.99',
      url: book.buyLinks.amazonPaperback,
    },
    {
      name: 'Hardcover Collector',
      desc: 'Durable hardcover edition for your home library',
      badge: 'Premium Edition',
      icon: Sparkles,
      price: '$24.99',
      url: book.buyLinks.amazonHardcover,
    },
  ];

  return (
    <section id="where-to-buy" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] text-slate-900 relative">
      
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-serif uppercase tracking-widest border border-amber-200">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
            <span>Official Retailers</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Where To Buy <span className="font-script text-4xl sm:text-6xl text-amber-700 font-normal">Climbing Toward Healing</span>
          </h2>

          <p className="font-sans-body text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Available now on Amazon and leading online booksellers in multiple formats. Start reading today or send a gift to someone who needs hope.
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formats.map((fmt, idx) => {
            const Icon = fmt.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold font-sans-body uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                      {fmt.badge}
                    </span>
                    <span className="font-serif-title text-xl font-bold text-slate-900">
                      {fmt.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif-title text-2xl font-bold text-slate-900 leading-none">
                        {fmt.name}
                      </h3>
                      <p className="font-sans-body text-xs text-slate-500 mt-1">
                        {fmt.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={fmt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-slate-950 font-sans-body text-xs font-bold tracking-wide shadow-md shadow-amber-600/20 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                  >
                    <span>Order {fmt.name} on Amazon</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Impact Primary Buying Box */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-amber-400/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-amber-400 font-serif text-xs uppercase tracking-widest font-semibold">
              Instant Amazon Link
            </span>
            <h3 className="font-serif-title text-2xl sm:text-4xl font-bold text-amber-100 leading-snug">
              Order Your Copy of Climbing Toward Healing Today
            </h3>
            <p className="font-sans-body text-slate-300 text-xs sm:text-sm">
              Read on Kindle or hold the paperback edition in your hands. Thank you for supporting this journey!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href={book.buyLinks.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-sans-body text-sm font-extrabold tracking-wide shadow-lg shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-slate-950" />
              <span>Buy Directly on Amazon</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="w-full sm:w-auto px-5 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-200 border border-amber-400/30 text-xs font-semibold transition-all flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
              <span>{copied ? 'Link Copied!' : 'Copy Amazon Link'}</span>
            </button>
          </div>

        </div>

        {/* Other Retailers Notice & Coming Soon */}
        <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-2xs text-center space-y-4">
          <p className="font-serif-title text-base font-bold text-slate-800">
            Additional Retailers & Bookstores
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans-body text-slate-600">
            <span className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 font-medium text-slate-700">
              Barnes & Noble (Coming Soon)
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 font-medium text-slate-700">
              Apple Books (Coming Soon)
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 font-medium text-slate-700">
              IndieBound / Local Independent Bookstores
            </span>
          </div>
          <p className="text-[11px] text-slate-500 italic">
            Interested in carrying <em>Climbing Toward Healing</em> in your local library or bookstore? Contact us below.
          </p>
        </div>

      </div>

    </section>
  );
};
