import React from 'react';

interface BookCover3DProps {
  coverUrl?: string;
  title?: string;
  author?: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  showSpine?: boolean;
}

export const BookCover3D: React.FC<BookCover3DProps> = ({
  coverUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
  title = 'Climbing Toward Healing',
  author = 'JACQUELINE EYE',
  subtitle = 'A JOURNEY OF SURVIVAL, STRENGTH, AND FINDING LIGHT AFTER THE DARKNESS',
  size = 'lg',
  onClick,
  showSpine = true,
}) => {
  const sizeClasses = {
    sm: 'w-44 h-64',
    md: 'w-56 h-80',
    lg: 'w-72 h-[420px] sm:w-80 sm:h-[470px]',
    xl: 'w-80 h-[480px] sm:w-96 sm:h-[560px]',
  };

  return (
    <div 
      onClick={onClick}
      className={`group relative perspective-1000 cursor-pointer select-none transition-transform duration-500 hover:scale-[1.03] ${sizeClasses[size]}`}
    >
      {/* Glow / Ambient Lighting Behind Book */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 via-orange-400/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-70 group-hover:opacity-100" />

      {/* Main 3D Book Container */}
      <div className="relative w-full h-full rounded-r-lg rounded-l-sm bg-slate-900 overflow-hidden shadow-2xl transition-all duration-500 border border-amber-900/40 transform group-hover:-rotate-y-6 group-hover:rotate-x-2">
        
        {/* Book Cover Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={coverUrl} 
            alt={title} 
            className="w-full h-full object-cover object-center filter contrast-[1.02]"
            onError={(e) => {
              // Fallback if custom image breaks
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80';
            }}
          />
        </div>

        {/* Realistic Book Spine (Left Edge) */}
        {showSpine && (
          <div className="absolute top-0 bottom-0 left-0 w-3.5 bg-gradient-to-r from-slate-950 via-amber-950/80 to-slate-900 border-r border-amber-400/30 z-20 flex flex-col justify-between py-4 text-[8px] text-amber-200/80 font-serif tracking-widest select-none">
            <span className="rotate-90 origin-center translate-y-4">HEALING</span>
            <span className="text-center">♡</span>
            <span className="rotate-90 origin-center -translate-y-4">EYE</span>
          </div>
        )}

        {/* Realistic 3D Page Edge Overlay (Right Edge) */}
        <div className="absolute top-0 bottom-0 right-0 w-1.5 bg-gradient-to-l from-amber-100/30 via-slate-200/20 to-transparent z-20" />
        
        {/* Subtle Shine Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Floating Badge Tag */}
      <div className="absolute -bottom-3 right-4 z-30 bg-amber-500 text-slate-950 font-sans-body text-[10px] font-bold tracking-wider px-3 py-1 rounded-full shadow-lg border border-amber-300 flex items-center gap-1">
        <span>Official Cover</span>
      </div>
    </div>
  );
};
