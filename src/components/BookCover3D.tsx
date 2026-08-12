import React, { useState, useRef } from 'react';
import { Sparkles, BookOpen, ArrowRight } from 'lucide-react';

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
  author = 'Jacqueline Eye',
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
    sm: 'w-44 aspect-[848/1264]',
    md: 'w-56 aspect-[848/1264]',
    lg: 'w-72 sm:w-80 aspect-[848/1264]',
    xl: 'w-80 sm:w-96 aspect-[848/1264]',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-14deg to +14deg)
    const rY = ((x / rect.width) - 0.5) * 28;
    const rX = ((y / rect.height) - 0.5) * -28;
    
    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.4,
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
        <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/40 via-amber-400/30 to-amber-200/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-80 group-hover:opacity-100 pointer-events-none" />

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
            className="absolute inset-0 w-full h-full rounded-r-xl rounded-l-sm bg-slate-900 overflow-hidden shadow-2xl border-2 border-amber-400/50 text-white"
          >
            {/* Book Cover Artwork Image */}
            <img 
              src={coverUrl} 
              alt={title} 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80';
              }}
            />

            {/* Notice Overlay Box Positioned at Top of Cover (Above Mountain Peak) */}
            <div className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 w-[92%] z-30 bg-slate-950/92 border border-amber-400/70 rounded-xl p-2 sm:p-2.5 text-center shadow-2xl backdrop-blur-md pointer-events-none">
              <div className="flex items-center justify-center gap-1 text-amber-300 font-extrabold text-[10px] sm:text-xs mb-0.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>This is not the Official Cover</span>
              </div>
              <p className="text-[9px] sm:text-[10px] leading-tight text-slate-200 font-sans-body">
                The cover shown here is a temporary display image. Due to a technical issue during the website transfer, the official book cover could not be transferred correctly to the website.
              </p>
              <p className="text-[9px] sm:text-[10px] leading-tight text-amber-200/95 font-sans-body mt-1 pt-1 border-t border-amber-400/30">
                For the <strong className="text-amber-200 font-semibold">official cover of <em>Climbing Toward Healing</em></strong>, visit our social media or view on Amazon.
              </p>
            </div>

            {/* Realistic 3D Spine (Left Edge Overlay) */}
            {showSpine && (
              <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-r from-slate-950/60 to-transparent border-r border-amber-400/20 z-20" />
            )}

            {/* Realistic 3D Page Edge Highlights (Right Edge) */}
            <div className="absolute top-0 bottom-0 right-0 w-2 bg-gradient-to-l from-amber-100/30 to-transparent z-20" />

            {/* Dynamic Mouse Glare Shine Effect */}
            <div 
              className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}) 0%, rgba(255, 255, 255, 0) 60%)`,
              }}
            />

            {/* Bottom Preview Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (onClick) onClick();
              }}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[88%] z-30 bg-slate-950/90 hover:bg-amber-500 text-amber-200 hover:text-slate-950 transition-all duration-300 font-sans-body text-xs font-extrabold tracking-wide px-3 py-2 rounded-xl shadow-2xl border border-amber-400/70 hover:border-amber-300 flex items-center justify-center gap-1.5 cursor-pointer group/btn backdrop-blur-md text-center"
              title="Click photo to read Chapter 1 preview"
            >
              <span>Click to Read Preview</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>


          </div>
        </div>
      </div>

      {/* Interactive Control Button */}
      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={onClick}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 hover:from-amber-500/40 hover:to-amber-500/40 text-amber-200 border border-amber-400/50 hover:border-amber-300 text-xs font-sans-body font-bold transition-all shadow-lg hover:shadow-amber-500/20 hover:scale-105 active:scale-95 group"
        >
          <BookOpen className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span>Click Cover to Read Chapter 1 Preview</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-300 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
