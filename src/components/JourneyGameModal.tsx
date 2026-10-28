import React, { useState, useEffect } from 'react';
import { 
  X, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Sun, 
  Flame, 
  Wind, 
  Compass, 
  ShoppingBag, 
  BookOpen, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { BookDetails } from '../types';
import { gameAudio } from '../utils/gameAudio';

interface JourneyGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: BookDetails;
  onExploreBookClick?: () => void;
}

// 5 Interactive Stages Definitions
interface StageChoice {
  id: string;
  title: string;
  subtext: string;
  feedback: string;
}

const STAGE_1_CHOICES: StageChoice[] = [
  {
    id: 'courage',
    title: 'The quiet courage to take one honest step',
    subtext: 'Acknowledging where you are without judgment.',
    feedback: 'Every mountain summit was once reached by someone who simply decided to take one small, trembling step forward.'
  },
  {
    id: 'gentleness',
    title: 'The permission to be gentle with myself',
    subtext: 'Releasing the need to rush your healing.',
    feedback: 'Healing is not a race. Giving yourself grace transforms the heaviest stones into stepping pads.'
  },
  {
    id: 'faith',
    title: 'The belief that night always gives way to day',
    subtext: 'Holding onto hope even when shadows linger.',
    feedback: 'No darkness has ever defeated the morning. Trusting the dawn gives you quiet strength on the darkest trails.'
  }
];

const STAGE_2_MISTS = [
  { id: 'mist-fear', label: 'The Fear of What Lies Ahead', prompt: 'Tap to release fear' },
  { id: 'mist-hurt', label: 'Old Burdens & Lingering Pain', prompt: 'Tap to release hurt' },
  { id: 'mist-doubt', label: 'The Whisper That You Cannot Do This', prompt: 'Tap to dissolve doubt' }
];

const STAGE_3_LANTERNS: StageChoice[] = [
  {
    id: 'survival',
    title: 'Surviving what I thought would break me',
    subtext: 'Remembering the storms you already endured.',
    feedback: 'You have survived 100% of your hardest days. That strength is not gone—it lives in your bones.'
  },
  {
    id: 'love',
    title: 'Love and hope for the people who believe in me',
    subtext: 'Drawing warmth from shared kindness and connection.',
    feedback: 'Love is a lantern that never flickers out. Carrying love in your heart lights up even the steepest cliff.'
  },
  {
    id: 'purpose',
    title: 'The quiet conviction that my story isn’t over',
    subtext: 'Trusting that the best chapters are still being written.',
    feedback: 'Your past is only a chapter, not your whole book. The greatest chapters of healing are yet to come.'
  }
];

export const JourneyGameModal: React.FC<JourneyGameModalProps> = ({
  isOpen,
  onClose,
  book,
  onExploreBookClick
}) => {
  // Game Stage: 1, 2, 3, 4, 5, or 6 (6 is the Summit Victory / Ending screen)
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Stage 1 State
  const [selectedAnchor, setSelectedAnchor] = useState<StageChoice | null>(null);

  // Stage 2 State: Mist clouds cleared
  const [clearedMists, setClearedMists] = useState<string[]>([]);

  // Stage 3 State: Lantern chosen
  const [selectedLantern, setSelectedLantern] = useState<StageChoice | null>(null);

  // Stage 4 State: Breathing progress
  const [isBreathingActive, setIsBreathingActive] = useState<boolean>(false);
  const [breathCount, setBreathCount] = useState<number>(0);
  const [breathComplete, setBreathComplete] = useState<boolean>(false);

  // Stage 5 State: Final step ready
  const [summitStepped, setSummitStepped] = useState<boolean>(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Breathing loop timer for Stage 4
  useEffect(() => {
    let timer: number;
    if (currentStage === 4 && isBreathingActive && !breathComplete) {
      timer = window.setInterval(() => {
        setBreathCount((prev) => {
          if (prev >= 4) {
            clearInterval(timer);
            setBreathComplete(true);
            setIsBreathingActive(false);
            gameAudio.playChime(659.25, 1.8, 0.08);
            return 4;
          }
          return prev + 1;
        });
      }, 900);
    }
    return () => clearInterval(timer);
  }, [currentStage, isBreathingActive, breathComplete]);

  // Trigger celebration audio when arriving at Summit
  useEffect(() => {
    if (currentStage === 6) {
      gameAudio.playSummitArrival();
    }
  }, [currentStage]);

  if (!isOpen) return null;

  const handleResetGame = () => {
    setCurrentStage(1);
    setSelectedAnchor(null);
    setClearedMists([]);
    setSelectedLantern(null);
    setIsBreathingActive(false);
    setBreathCount(0);
    setBreathComplete(false);
    setSummitStepped(false);
    gameAudio.playChime(440, 1.0, 0.06);
  };

  const handleToggleMute = () => {
    const nextMuted = gameAudio.toggleMute();
    setIsMuted(nextMuted);
  };

  // Stage Progression logic
  const handleSelectAnchor = (choice: StageChoice) => {
    setSelectedAnchor(choice);
    gameAudio.playAnchorStone();
  };

  const handleClearMist = (id: string) => {
    if (!clearedMists.includes(id)) {
      const next = [...clearedMists, id];
      setClearedMists(next);
      gameAudio.playMistClear();
    }
  };

  const handleSelectLantern = (choice: StageChoice) => {
    setSelectedLantern(choice);
    gameAudio.playLanternFlame();
  };

  const handleStartBreathing = () => {
    setIsBreathingActive(true);
    setBreathCount(1);
    gameAudio.playBreath();
  };

  const handleSkipBreathing = () => {
    setBreathComplete(true);
    setIsBreathingActive(false);
    gameAudio.playChime(587.33, 1.2, 0.07);
  };

  const handleTakeSummitStep = () => {
    setSummitStepped(true);
    gameAudio.playChime(528, 1.5, 0.09);
    setTimeout(() => {
      setCurrentStage(6);
    }, 700);
  };

  // Sky environment styling based on stage altitude
  const getSkyAtmosphere = () => {
    switch (currentStage) {
      case 1:
        // Midnight / Starlit valley
        return {
          bg: 'from-slate-950 via-[#0B101D] to-[#121B2F]',
          altitude: '2,400 ft · Mountain Base',
          progressPercent: 20,
          label: 'The Journey Begins'
        };
      case 2:
        // Deep twilight blue, gentle mist
        return {
          bg: 'from-[#0A1224] via-[#121B36] to-[#1A2649]',
          altitude: '5,600 ft · Lower Slopes',
          progressPercent: 40,
          label: 'Parting the Mist'
        };
      case 3:
        // Pre-dawn violet with warm amber undertones
        return {
          bg: 'from-[#14122E] via-[#241738] to-[#3B1E3B]',
          altitude: '8,900 ft · The Ridge',
          progressPercent: 60,
          label: 'Gathering Strength'
        };
      case 4:
        // Dawn rose & coral twilight
        return {
          bg: 'from-[#251535] via-[#481E38] to-[#742B36]',
          altitude: '11,800 ft · High Pass',
          progressPercent: 80,
          label: 'Catching Your Breath'
        };
      case 5:
        // Golden hour sunrise approaching
        return {
          bg: 'from-[#421D28] via-[#7B341E] to-[#B45309]',
          altitude: '14,200 ft · Summit Trail',
          progressPercent: 95,
          label: 'The Final Ascent'
        };
      case 6:
      default:
        // Brilliant full golden sunrise
        return {
          bg: 'from-[#1E1B18] via-[#78350F] to-[#D97706]',
          altitude: '14,411 ft · Summit',
          progressPercent: 100,
          label: 'The Summit at Dawn'
        };
    }
  };

  const sky = getSkyAtmosphere();

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-500 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="game-title"
    >
      {/* Main Game Card Container */}
      <div 
        className={`relative w-full max-w-4xl bg-gradient-to-b ${sky.bg} text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col min-h-[580px] sm:min-h-[640px] max-h-[92vh] transition-colors duration-1000`}
      >
        {/* Animated Mountain Silhouette Background Layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
          {/* Distant Ridge SVG */}
          <svg className="absolute bottom-0 w-full h-48 sm:h-64 text-slate-900/60" viewBox="0 0 1200 320" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,320 L0,210 L140,160 L280,240 L440,110 L600,190 L760,80 L920,200 L1080,120 L1200,190 L1200,320 Z" />
          </svg>
          {/* Mid Ridge SVG */}
          <svg className="absolute bottom-0 w-full h-36 sm:h-48 text-slate-950/80" viewBox="0 0 1200 320" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,320 L0,240 L180,170 L360,250 L520,150 L680,220 L860,130 L1040,210 L1200,160 L1200,320 Z" />
          </svg>
          {/* Soft ambient sun / dawn glow sphere */}
          <div 
            className={`absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ${
              currentStage >= 5 ? 'bg-amber-400/35 scale-125' : currentStage >= 3 ? 'bg-rose-400/20 scale-100' : 'bg-indigo-400/10 scale-75'
            }`} 
          />
        </div>

        {/* Top Header / HUD */}
        <header className="relative z-10 px-5 sm:px-8 pt-5 pb-4 border-b border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <Compass className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 id="game-title" className="font-serif-title text-base sm:text-lg font-bold text-amber-100 tracking-wide flex items-center gap-2">
                <span>The Journey Toward Healing</span>
                <span className="hidden sm:inline text-xs text-amber-300/80 font-sans font-normal border-l border-white/20 pl-2">
                  Interactive Experience
                </span>
              </h2>
              <p className="text-[11px] text-slate-300 font-sans tracking-wide">
                {currentStage <= 5 ? (
                  <>
                    <span className="text-amber-300 font-semibold">Journey {currentStage} of 5</span>
                    <span className="mx-1.5 opacity-50">·</span>
                    <span>{sky.altitude}</span>
                  </>
                ) : (
                  <span className="text-amber-300 font-semibold">Journey Complete · Sunrise at the Summit</span>
                )}
              </p>
            </div>
          </div>

          {/* Controls: Audio mute, Replay, Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleMute}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-200 transition-colors cursor-pointer"
              title={isMuted ? 'Unmute sound effects' : 'Mute sound effects'}
              aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
            </button>

            {currentStage > 1 && (
              <button
                onClick={handleResetGame}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-200 transition-colors cursor-pointer"
                title="Restart Journey"
                aria-label="Restart Journey"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Close"
              aria-label="Close Journey Game"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Altitude Progress Line */}
        <div className="relative z-10 w-full bg-black/30 h-1.5">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-200 transition-all duration-700 ease-out shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            style={{ width: `${sky.progressPercent}%` }}
          />
        </div>

        {/* Interactive Game Body */}
        <div className="relative z-10 flex-1 p-5 sm:p-8 flex flex-col justify-between overflow-y-auto">

          {/* ================= STAGE 1: THE FIRST STEP ================= */}
          {currentStage === 1 && (
            <div className="max-w-2xl mx-auto w-full my-auto space-y-6 text-center animate-fadeIn">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Stage 1 of 5: The Mountain Base</span>
                </div>
                <h3 className="font-serif-title text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  Acknowledging the Climb
                </h3>
                <p className="font-sans-body text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                  Every healing journey begins in the valley. Before you can rise, choose the anchor truth you wish to carry with you as you take the first step.
                </p>
              </div>

              {/* 3 Choice Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 text-left">
                {STAGE_1_CHOICES.map((choice) => {
                  const isSelected = selectedAnchor?.id === choice.id;
                  return (
                    <button
                      key={choice.id}
                      onClick={() => handleSelectAnchor(choice)}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all text-left flex flex-col justify-between cursor-pointer group ${
                        isSelected 
                          ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)] ring-2 ring-amber-400/50' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-amber-300/40'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs uppercase tracking-widest font-semibold ${isSelected ? 'text-amber-300' : 'text-slate-400'}`}>
                            Anchor Stone
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                        </div>
                        <h4 className="font-serif-title text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                          "{choice.title}"
                        </h4>
                      </div>
                      <p className="text-xs text-slate-300 pt-3 mt-auto border-t border-white/5">
                        {choice.subtext}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Encouraging Feedback & Advance Button */}
              {selectedAnchor && (
                <div className="space-y-4 pt-3 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs sm:text-sm font-sans italic leading-relaxed max-w-xl mx-auto">
                    "{selectedAnchor.feedback}"
                  </div>

                  <button
                    onClick={() => {
                      setCurrentStage(2);
                      gameAudio.playChime(520, 1.2, 0.07);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30 transition-all cursor-pointer transform hover:scale-105"
                  >
                    <span>Ascend to Stage 2: Clearing the Mist</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ================= STAGE 2: CLEARING THE MIST ================= */}
          {currentStage === 2 && (
            <div className="max-w-2xl mx-auto w-full my-auto space-y-6 text-center animate-fadeIn">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-medium">
                  <Wind className="w-3.5 h-3.5" />
                  <span>Stage 2 of 5: Altitude 5,600 ft</span>
                </div>
                <h3 className="font-serif-title text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  Parting the Mist
                </h3>
                <p className="font-sans-body text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                  Doubt and lingering memories often gather like dense fog along the steep trail. Gently tap each cloud to dissolve the mist and reveal the solid path beneath.
                </p>
              </div>

              {/* Interactive Mist Clouds */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                {STAGE_2_MISTS.map((mist) => {
                  const isCleared = clearedMists.includes(mist.id);
                  return (
                    <button
                      key={mist.id}
                      onClick={() => handleClearMist(mist.id)}
                      className={`p-5 rounded-2xl border transition-all text-center flex flex-col items-center justify-center min-h-[140px] cursor-pointer group relative overflow-hidden ${
                        isCleared
                          ? 'bg-emerald-950/30 border-emerald-400/50 text-emerald-200 shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                          : 'bg-white/10 hover:bg-white/15 border-white/20 text-slate-200 hover:border-amber-300/50'
                      }`}
                    >
                      {/* Mist backdrop effect */}
                      {!isCleared && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-300/10 via-slate-200/15 to-blue-300/10 animate-pulse pointer-events-none" />
                      )}

                      <div className="relative z-10 space-y-2">
                        <div className="w-8 h-8 mx-auto rounded-full bg-white/10 flex items-center justify-center">
                          {isCleared ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <Wind className="w-4 h-4 text-slate-300 group-hover:text-amber-300 transition-colors" />
                          )}
                        </div>
                        <h4 className={`font-serif-title text-sm sm:text-base font-bold ${isCleared ? 'text-emerald-200 line-through opacity-75' : 'text-white'}`}>
                          {mist.label}
                        </h4>
                        <p className="text-[11px] font-sans text-amber-300/90 font-medium">
                          {isCleared ? 'Cleared ✓ Path open' : mist.prompt}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Progress counter */}
              <div className="text-xs text-slate-400">
                <span>{clearedMists.length} of 3 clouds released</span>
              </div>

              {/* Feedback and next button when all clouds cleared */}
              {clearedMists.length === 3 && (
                <div className="space-y-4 pt-2 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-blue-950/50 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-sans italic leading-relaxed max-w-xl mx-auto">
                    "You do not have to carry everything that ever hurt you up the mountain. With the path clear, you are lighter and stronger than you realize."
                  </div>

                  <button
                    onClick={() => {
                      setCurrentStage(3);
                      gameAudio.playChime(580, 1.2, 0.07);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30 transition-all cursor-pointer transform hover:scale-105"
                  >
                    <span>Ascend to Stage 3: The Beacon of Strength</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ================= STAGE 3: GATHERING INNER FLAME ================= */}
          {currentStage === 3 && (
            <div className="max-w-2xl mx-auto w-full my-auto space-y-6 text-center animate-fadeIn">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-xs font-medium">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Stage 3 of 5: Altitude 8,900 ft</span>
                </div>
                <h3 className="font-serif-title text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  Gathering Your Inner Flame
                </h3>
                <p className="font-sans-body text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                  The air grows cooler as the ridge steepens. Choose the beacon of resilience that keeps your spirit warm and determined.
                </p>
              </div>

              {/* 3 Lantern Choices */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 text-left">
                {STAGE_3_LANTERNS.map((lantern) => {
                  const isSelected = selectedLantern?.id === lantern.id;
                  return (
                    <button
                      key={lantern.id}
                      onClick={() => handleSelectLantern(lantern)}
                      className={`p-5 rounded-2xl border transition-all text-left flex flex-col justify-between cursor-pointer group ${
                        isSelected 
                          ? 'bg-amber-500/25 border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.35)] ring-2 ring-amber-400/50' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-amber-300/40'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-amber-500 text-slate-950' : 'bg-white/10 text-amber-300'}`}>
                            <Flame className="w-4 h-4" />
                          </div>
                          {isSelected && <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">Lit</span>}
                        </div>
                        <h4 className="font-serif-title text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                          "{lantern.title}"
                        </h4>
                      </div>
                      <p className="text-xs text-slate-300 pt-3 mt-auto border-t border-white/5">
                        {lantern.subtext}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Encouraging Feedback & Advance Button */}
              {selectedLantern && (
                <div className="space-y-4 pt-3 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-purple-950/50 border border-purple-500/30 text-amber-200 text-xs sm:text-sm font-sans italic leading-relaxed max-w-xl mx-auto">
                    "{selectedLantern.feedback}"
                  </div>

                  <button
                    onClick={() => {
                      setCurrentStage(4);
                      gameAudio.playChime(640, 1.2, 0.07);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30 transition-all cursor-pointer transform hover:scale-105"
                  >
                    <span>Ascend to Stage 4: Catching Your Breath</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ================= STAGE 4: CATCHING YOUR BREATH ================= */}
          {currentStage === 4 && (
            <div className="max-w-xl mx-auto w-full my-auto space-y-6 text-center animate-fadeIn">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs font-medium">
                  <Heart className="w-3.5 h-3.5 text-rose-300" />
                  <span>Stage 4 of 5: Altitude 11,800 ft</span>
                </div>
                <h3 className="font-serif-title text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  Catching Your Breath
                </h3>
                <p className="font-sans-body text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                  Healing is not a frantic sprint—it is sustained by stillness. Pause at this high mountain overlook and center yourself with one deep, peaceful breath.
                </p>
              </div>

              {/* Interactive Breathing Orb */}
              <div className="py-6 flex flex-col items-center justify-center">
                <div 
                  onClick={!isBreathingActive && !breathComplete ? handleStartBreathing : undefined}
                  className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 flex flex-col items-center justify-center transition-all duration-1000 relative cursor-pointer select-none ${
                    isBreathingActive 
                      ? 'scale-110 bg-rose-500/20 border-rose-300 shadow-[0_0_40px_rgba(244,63,94,0.4)]'
                      : breathComplete 
                        ? 'bg-amber-500/20 border-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.4)]'
                        : 'bg-white/5 border-white/20 hover:border-amber-300 hover:scale-105'
                  }`}
                >
                  <div className="space-y-1 text-center p-3">
                    <Heart className={`w-6 h-6 mx-auto ${breathComplete ? 'text-amber-300' : 'text-rose-300 animate-pulse'}`} />
                    <span className="font-serif-title font-bold text-sm sm:text-base text-white block">
                      {breathComplete 
                        ? 'Grounded & Centered'
                        : isBreathingActive 
                          ? (breathCount <= 2 ? 'Inhale Light...' : 'Release...')
                          : 'Tap to Breathe'}
                    </span>
                    <span className="text-[11px] text-slate-300 font-sans block">
                      {breathComplete 
                        ? 'Inner peace found'
                        : isBreathingActive 
                          ? `${4 - breathCount}s`
                          : '4-second mindful pause'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {!breathComplete && !isBreathingActive && (
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={handleStartBreathing}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-white font-bold text-sm shadow-lg transition-all cursor-pointer"
                    >
                      Begin Mindful Breath
                    </button>
                    <button
                      onClick={handleSkipBreathing}
                      className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium transition-all cursor-pointer"
                    >
                      Skip Ahead
                    </button>
                  </div>
                )}

                {breathComplete && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="p-4 rounded-2xl bg-rose-950/50 border border-rose-400/30 text-amber-100 text-xs sm:text-sm font-sans italic leading-relaxed max-w-lg mx-auto">
                      "Look down at how high you have already climbed. You are so much stronger than the valley you started from."
                    </div>

                    <button
                      onClick={() => {
                        setCurrentStage(5);
                        gameAudio.playChime(700, 1.2, 0.08);
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30 transition-all cursor-pointer transform hover:scale-105"
                    >
                      <span>Ascend to Stage 5: The Final Steps</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================= STAGE 5: THE FINAL ASCENT ================= */}
          {currentStage === 5 && (
            <div className="max-w-xl mx-auto w-full my-auto space-y-6 text-center animate-fadeIn">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-medium">
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Stage 5 of 5: Altitude 14,200 ft</span>
                </div>
                <h3 className="font-serif-title text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  The Morning Dawn Breaks
                </h3>
                <p className="font-sans-body text-slate-200 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                  The darkest hours of the night have passed. The summit is directly before you, bathed in the very first golden rays of the morning sun.
                </p>
              </div>

              {/* Glowing Summit Path Affordance */}
              <div className="py-6 flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-amber-500/30 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-1 shadow-2xl flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-slate-950/80 flex flex-col items-center justify-center text-center p-3">
                      <Sun className="w-8 h-8 text-amber-300 animate-spin-slow mb-1" />
                      <span className="text-[11px] font-serif font-bold text-amber-200 tracking-wider">
                        14,411 FT
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step into the Light button */}
              <div className="pt-2">
                <button
                  onClick={handleTakeSummitStep}
                  disabled={summitStepped}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-serif-title font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all cursor-pointer transform hover:scale-105 active:scale-95"
                >
                  <Sun className="w-5 h-5" />
                  <span>Step onto the Summit & Into the Light ☀️</span>
                </button>
              </div>
            </div>
          )}

          {/* ================= FINAL SCENE (STAGE 6): SUMMIT REACHED ================= */}
          {currentStage === 6 && (
            <div className="max-w-3xl mx-auto w-full my-auto space-y-6 text-center animate-fadeIn py-2">
              
              {/* Summit Header Banner */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/25 border border-amber-300/50 text-amber-200 text-xs font-semibold uppercase tracking-wider">
                  <Sun className="w-4 h-4 text-amber-300" />
                  <span>Summit Reached · Standing in the Light</span>
                </div>
                <h3 className="font-serif-title text-3xl sm:text-5xl font-bold text-amber-100 tracking-tight">
                  You Made It to the Light
                </h3>
              </div>

              {/* Exact Requested Ending Messages */}
              <div className="space-y-4 max-w-2xl mx-auto">
                {/* Message 1 */}
                <blockquote className="font-serif text-base sm:text-xl text-amber-100 leading-relaxed italic bg-black/40 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-amber-400/30 shadow-xl">
                  “You made it to the light. Every journey is different, and every step forward matters. There is always room for hope, growth, and healing.”
                </blockquote>

                {/* Message 2: Connection to the book */}
                <p className="font-sans-body text-slate-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
                  “Your journey doesn't have to end here. Discover the powerful message behind <span className="font-semibold text-amber-300 italic">Climbing Toward Healing</span> and continue exploring a journey of survival, strength, and finding light after the darkness.”
                </p>
              </div>

              {/* Book Showcase Box */}
              <div className="bg-gradient-to-r from-slate-900/90 via-amber-950/60 to-slate-900/90 border border-amber-400/40 rounded-2xl p-5 sm:p-6 max-w-2xl mx-auto shadow-2xl flex flex-col sm:flex-row items-center gap-6 text-left">
                {/* Official Book Cover */}
                <div className="w-28 sm:w-32 shrink-0 rounded-lg overflow-hidden shadow-2xl border border-amber-300/40 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={book.coverImage}
                    alt={`Book cover of ${book.title} by ${book.author}`}
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Book Details & CTA */}
                <div className="flex-1 space-y-3 text-center sm:text-left">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 font-sans">
                      Official Memoir by {book.author}
                    </span>
                    <h4 className="font-serif-title text-xl sm:text-2xl font-bold text-white">
                      {book.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-0.5">
                      {book.tagline}
                    </p>
                  </div>

                  {/* Primary Amazon CTA Button (Reusing existing book link) */}
                  <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    <a
                      href={book.buyLinks.amazon}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/30 transition-all cursor-pointer transform hover:scale-105"
                    >
                      <ShoppingBag className="w-4 h-4 text-slate-950" />
                      <span>Get Your Copy on Amazon</span>
                    </a>

                    <button
                      onClick={() => {
                        onClose();
                        if (onExploreBookClick) {
                          onExploreBookClick();
                        } else {
                          const aboutSec = document.getElementById('about');
                          if (aboutSec) {
                            aboutSec.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold transition-all cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-amber-300" />
                      <span>Explore Climbing Toward Healing</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Subtle Replay Option */}
              <div className="pt-1">
                <button
                  onClick={handleResetGame}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-300/80 hover:text-amber-200 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Replay The Journey Toward Healing</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <footer className="relative z-10 px-5 sm:px-8 py-3 bg-black/40 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-sans">
              Inspired by <em className="text-amber-200 font-serif">Climbing Toward Healing</em>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400">
              By {book.author}
            </span>
            <span className="text-slate-600">·</span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
};
