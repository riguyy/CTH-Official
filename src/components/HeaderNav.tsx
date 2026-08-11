import React, { useState, useEffect } from 'react';
import { BookOpen, ShoppingBag, Menu, X, Heart, Sparkles, Volume2, VolumeX } from 'lucide-react';

interface HeaderNavProps {
  onBuyClick: () => void;
  onReadPreviewClick: () => void;
  audioPlaying: boolean;
  onToggleAudio: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onBuyClick,
  onReadPreviewClick,
  audioPlaying,
  onToggleAudio,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Book', href: '#about-book' },
    { label: 'Why Written', href: '#why-written' },
    { label: 'About Author', href: '#about-author' },
    { label: 'Quotes', href: '#quotes' },
    { label: 'Times Square', href: '#times-square' },
    { label: 'Where to Buy', href: '#where-to-buy' },
    { label: 'News & Updates', href: '#news-updates' },
    { label: 'Community', href: '#community' },
    { label: 'Our Team', href: '#our-team' },
  ];

  return (
    <header 
      id="header-nav" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm py-3 border-b border-amber-900/10' 
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Book Title */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-serif text-lg font-bold transition-transform group-hover:scale-105 ${
            isScrolled 
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20' 
              : 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/30'
          }`}>
            C
          </div>
          <div className="flex flex-col">
            <span className={`font-serif-title font-bold text-lg leading-none tracking-wide ${
              isScrolled ? 'text-slate-900' : 'text-amber-100'
            }`}>
              Climbing Toward Healing
            </span>
            <span className={`text-[10px] tracking-widest font-sans uppercase mt-0.5 ${
              isScrolled ? 'text-amber-800/80 font-medium' : 'text-amber-300/80'
            }`}>
              By Jacqueline Eye
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-sans-body font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors hover:text-amber-600 ${
                isScrolled ? 'text-slate-700 hover:text-amber-700' : 'text-amber-100/90 hover:text-amber-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Audio Ambient Player Toggle */}
          <button
            onClick={onToggleAudio}
            className={`p-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 border ${
              isScrolled
                ? 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
                : 'bg-slate-900/60 text-amber-200 border-amber-400/20 hover:bg-slate-900'
            }`}
            title={audioPlaying ? 'Mute Peaceful Ambience' : 'Play Mountain Ambience'}
          >
            {audioPlaying ? <Volume2 className="w-3.5 h-3.5 text-amber-600 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
            <span className="hidden xl:inline text-[11px]">{audioPlaying ? 'Sound On' : 'Nature Sound'}</span>
          </button>

          {/* Excerpt Reader Button */}
          <button
            onClick={onReadPreviewClick}
            className={`hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
              isScrolled
                ? 'border-slate-300 text-slate-700 hover:bg-slate-100'
                : 'border-amber-400/30 text-amber-100 hover:bg-amber-400/10'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            <span>Read Excerpt</span>
          </button>

          {/* Buy Book Button */}
          <button
            onClick={onBuyClick}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-sans-body text-xs font-bold tracking-wide shadow-md shadow-amber-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Buy Book</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-amber-100 hover:bg-slate-900/60'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-amber-900/10 shadow-xl px-4 pt-4 pb-6 mt-3 animate-fadeIn text-slate-800">
          <div className="flex flex-col gap-3 font-sans-body text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-amber-100/50 hover:text-amber-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-3 border-t border-amber-200/60 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReadPreviewClick();
                }}
                className="w-full py-2.5 rounded-xl border border-amber-300 text-amber-900 font-semibold text-xs flex items-center justify-center gap-2 bg-amber-50"
              >
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Read Free Chapter Excerpt</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
