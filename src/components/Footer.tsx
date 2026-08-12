import React, { useState } from 'react';
import { Heart, Send, Check, Sparkles, BookOpen } from 'lucide-react';
import { BookDetails } from '../types';

interface FooterProps {
  book: BookDetails;
  onBuyClick: () => void;
  onReadPreviewClick: () => void;
  onOpenTimelineClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  book,
  onBuyClick,
  onReadPreviewClick,
  onOpenTimelineClick,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans-body border-t border-amber-900/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Newsletter & Quote Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-900">
          
          <div className="lg:col-span-7 space-y-2 text-center lg:text-left">
            <span className="text-amber-400 font-serif text-xs uppercase tracking-[0.2em] font-semibold">
              Stay Connected
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-amber-100">
              Receive Reflections & Book Release Updates
            </h3>
            <p className="text-xs text-slate-400 max-w-lg">
              Sign up for Jacqueline Eye's reader letter with personal reflections on healing, upcoming events, and new book releases.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="bg-emerald-900/40 border border-emerald-500/40 p-3.5 rounded-2xl text-emerald-300 text-xs text-center flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Thank you for subscribing to Jacqueline's reader list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs shrink-0 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-serif font-bold text-lg flex items-center justify-center shadow-md">
                C
              </div>
              <div>
                <span className="font-serif-title text-xl font-bold text-amber-100 block leading-none">
                  Climbing Toward Healing
                </span>
                <span className="text-[10px] text-amber-400/80 uppercase tracking-widest font-sans">
                  By Jacqueline Eye
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              An official promotional website dedicated to <em>Climbing Toward Healing</em>—a memoir of resilience, survival, and finding light after darkness.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
              <a 
                href={book.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-400/20 transition-colors"
              >
                Facebook
              </a>
              <a 
                href={book.socialLinks.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-400/20 transition-colors"
              >
                TikTok
              </a>
              <a 
                href={book.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-400/20 transition-colors"
              >
                Instagram
              </a>
            </div>

            {/* Book Updates Timeline Button */}
            <div className="pt-2">
              <button
                onClick={onOpenTimelineClick}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 hover:scale-105 transition-all border border-white cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                <span>Book Updates Timeline</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <p className="font-serif-title font-bold text-amber-200 text-sm">
              Quick Links
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about-book" className="hover:text-amber-300 transition-colors">About the Book</a></li>
              <li><a href="#why-written" className="hover:text-amber-300 transition-colors">Why It Was Written</a></li>
              <li><a href="#about-author" className="hover:text-amber-300 transition-colors">About Jacqueline Eye</a></li>
              <li><a href="#where-to-buy" className="hover:text-amber-300 transition-colors">Where to Buy</a></li>
              <li><a href="#news-updates" className="hover:text-amber-300 transition-colors font-semibold text-amber-300">News & Updates Board</a></li>
              <li><a href="#our-team" className="hover:text-amber-300 transition-colors">Our Team</a></li>
              <li><a href="#quotes" className="hover:text-amber-300 transition-colors">Book Quotes</a></li>
              <li><a href="#times-square" className="hover:text-amber-300 transition-colors">Times Square Billboard</a></li>
            </ul>
          </div>

          {/* Col 3: Buy & Media */}
          <div className="space-y-3">
            <p className="font-serif-title font-bold text-amber-200 text-sm">
              Get the Book
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a 
                  href={book.buyLinks.amazon} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors font-semibold text-amber-400"
                >
                  Buy on Amazon (Kindle/Paperback) →
                </a>
              </li>
              <li><button onClick={onReadPreviewClick} className="hover:text-amber-300 transition-colors text-left">Read Free Chapter Excerpt</button></li>
              <li><a href="#where-to-buy" className="hover:text-amber-300 transition-colors">Where to Buy</a></li>
              <li><a href="#community" className="hover:text-amber-300 transition-colors">Community Encouragement Wall</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Jacqueline Eye. All rights reserved. Official Promotional Website for <em>Climbing Toward Healing</em>.</p>
          <p className="flex items-center gap-1">
            <span>Written with hope & courage</span>
            <Heart className="w-3 h-3 text-amber-500 fill-amber-500" />
          </p>
        </div>

      </div>

    </footer>
  );
};
