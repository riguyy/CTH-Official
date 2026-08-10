import React, { useState, useRef } from 'react';
import { Sparkles, BookOpen } from 'lucide-react';

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
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'w-44 h-64',
    md: 'w-56 h-80',
    lg: 'w-72 h-[430px] sm:w-80 sm:h-[480px]',
    xl: 'w-80 h-[490px] sm:w-96 sm:h-[570px]',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-12deg to +12deg)
    const rY = ((x / rect.width) - 0.5) * 24;
    const rX = ((y / rect.height) - 0.5) * -24;
    
    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        ref={containerRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative cursor-pointer select-none transition-all duration-300 ease-out ${sizeClasses[size]}`}
        style={{ perspective: '1200px' }}
      >
        {/* Glow / Ambient Lighting Behind Book */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/30 via-orange-400/20 to-amber-200/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-80 group-hover:opacity-100 pointer-events-none" />

        {/* 3D Rotating Wrapper */}
        <div 
          className="relative w-full h-full transition-transform duration-500 ease-out transform-gpu"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          }}
        >
          {/* ================= FRONT COVER ONLY ================= */}
          <div 
            className="absolute inset-0 w-full h-full rounded-r-xl rounded-l-sm bg-slate-900 overflow-hidden shadow-2xl border border-amber-500/30 text-white"
          >
            {/* Book Cover Artwork Image */}
            <img 
              src={coverUrl} 
              alt={title} 
              className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.02]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80';
              }}
            />

            {/* Realistic 3D Spine (Left Edge Overlay) */}
            {showSpine && (
              <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-slate-950 via-amber-950/80 to-transparent border-r border-amber-400/30 z-20 flex flex-col justify-between py-6 text-[8px] text-amber-200/90 font-serif tracking-widest select-none shadow-inner">
                <span className="rotate-90 origin-center translate-y-4">HEALING</span>
                <span className="text-center font-bold text-amber-300">♡</span>
                <span className="rotate-90 origin-center -translate-y-4">EYE</span>
              </div>
            )}

            {/* Realistic 3D Page Edge Highlights (Right Edge) */}
            <div className="absolute top-0 bottom-0 right-0 w-2 bg-gradient-to-l from-amber-100/40 via-amber-50/20 to-transparent z-20" />

            {/* Dynamic Mouse Glare Shine Effect */}
            <div 
              className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}) 0%, rgba(255, 255, 255, 0) 60%)`,
              }}
            />

            {/* Floating Gold Foil Accent Badge */}
            <div className="absolute bottom-4 right-4 z-30 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-sans-body text-[10px] font-extrabold tracking-wider px-3 py-1 rounded-full shadow-xl border border-amber-200 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-slate-950" />
              <span>Official Cover</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Control Button */}
      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={onClick}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-amber-200 border border-amber-400/40 hover:border-amber-400/80 text-xs font-sans-body font-semibold transition-all shadow-md hover:shadow-amber-500/10"
        >
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span>Read Chapter 1 Preview</span>
        </button>
      </div>
    </div>
  );
};
