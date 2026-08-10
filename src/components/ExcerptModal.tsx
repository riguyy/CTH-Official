import React, { useState, useEffect } from 'react';
import { X, BookOpen, ChevronLeft, ChevronRight, ShoppingBag, Pause, Play, Bookmark, Sparkles, ArrowRight } from 'lucide-react';
import { BookDetails } from '../types';

interface ExcerptModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: BookDetails;
  onBuyClick: () => void;
}

export const ExcerptModal: React.FC<ExcerptModalProps> = ({
  isOpen,
  onClose,
  book,
  onBuyClick,
}) => {
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [readerTheme, setReaderTheme] = useState<'day' | 'sepia' | 'dark' | 'sunset'>('sepia');
  const [page, setPage] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [bookmarkedPages, setBookmarkedPages] = useState<number[]>([]);

  // Reset to cover page whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      setPage(1);
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [page]);

  if (!isOpen) return null;

  const pages = [
    {
      pageNumber: 1,
      isCover: true,
      chapterTitle: 'OFFICIAL BOOK COVER',
      content: []
    },
    {
      pageNumber: 2,
      isCover: false,
      chapterTitle: 'CHAPTER 1: INTRODUCTORY',
      content: [
        "Ansonia, Connecticut was the kind of small town where everybody believed they knew each other.",
        "The streets were lined with modest homes, cracked sidewalks, and chain-link fences decorated with flowerpots every spring. People waved from their porches, church bells echoed through Sunday mornings, and neighbors noticed when someone bought a new car or painted their shutters a different color. In a town that small, families built reputations that lasted for generations.",
        "From the outside, her family looked like one of the good ones.",
        "They lived in a worn two-family house tucked along a quiet street, with overgrown green bushes lining the yard like a natural fence. During the summer, the bushes bloomed thick enough to create the illusion of privacy, wrapping the home in a kind of protection that only looked real from the outside.",
        "A German shepherd patrolled the yard proudly, barking at strangers and chasing squirrels through patches of uneven grass. To passing neighbors, the dog made the family seem safe and ordinary.",
        "Upstairs lived her immediate family, while downstairs lived one of her uncles and aunts. People often described them as close-knit and blessed."
      ]
    },
    {
      pageNumber: 3,
      isCover: false,
      chapterTitle: 'CHAPTER 1: INTRODUCTORY (Part 2)',
      content: [
        "Her mother was known for her kindness, the kind of woman who brought soup to sick neighbors and remembered birthdays without needing reminders. She smiled easily, spoke softly, and made people feel welcome the moment they stepped through the front door. At church, people often described her as having a heart of gold.",
        "Her father was the man everyone called when something broke. He could fix engines, repair plumbing, patch walls, and wire lights. His hands were rough from years of work, and he carried himself with the quiet exhaustion of someone who believed providing for his family was the same thing as protecting them.",
        "She had two brothers, one older and one younger. Her older brother carried the restless energy of someone eager to leave town one day, while the younger still held onto the kind of innocence that had not yet been touched by the world around him.",
        "She fell somewhere in the middle of them all, quiet enough to go unnoticed most days. Even as a child, she was beginning to understand how appearances could become prisons.",
        "Every Sunday, the family dressed neatly for church. Shoes polished. Hair brushed. Smiles prepared before stepping out the door. They sat together in the same pew each week like a picture pulled straight from a sermon about faith and family values.",
        "No one looking at them would have guessed darkness lived inside that house too."
      ]
    },
    {
      pageNumber: 4,
      isCover: false,
      chapterTitle: 'CHAPTER 1: INTRODUCTORY (Part 3)',
      content: [
        "Because evil rarely looks frightening when people first meet it. Sometimes it sits beside you at dinner. Sometimes it laughs at family gatherings. Sometimes it lives only a floor below you. And sometimes the people you are taught to trust become the people you fear the most.",
        "The summer she stopped calling herself a child was the same summer the robins chirped endlessly through the trees behind her grandmother's house. Their noise filled the silences between conversations, drifted through open windows, and carried through prayers whispered over dinner. Years later, she would remember those birds more clearly than most people's voices. Maybe because the birds never lied to her.",
        "At fifteen, she learned that truth meant very little when spoken by the wrong person.",
        "Her uncle was the kind of man everyone trusted. He fixed cars for neighbors without charging them, laughed loudly at church picnics, carried groceries for elderly women, and shook hands with pastors every Sunday. He was a deacon in the church. In family photographs, he always stood near the center, smiling like someone incapable of causing harm.",
        "And when she finally found the courage to speak his name beside the word abuse, the room did not erupt in outrage. Instead, it became painfully quiet. Not the kind of silence that protects someone who has been hurt, but the kind that warns them they have suddenly become the problem.",
        "Her mother stared at the floor. Her father stared at the wall. Her grandmother reached for her Bible. Nobody reached for her."
      ]
    },
    {
      pageNumber: 5,
      isCover: false,
      chapterTitle: 'CHAPTER 1: INTRODUCTORY (Part 4)',
      content: [
        'The questions came carefully at first, wrapped in concern sharp enough to wound. "Are you sure?" "Why didn\'t you say something sooner?" "You know what this accusation could do to this family."',
        'This family. As if she had somehow betrayed it.',
        'Within weeks, she was sent away to live with her grandmother in another state, carrying one suitcase full of clothes and the understanding that exile could happen without a courtroom, without police involvement, and without anyone ever using the word punishment. Her uncle stayed home. He kept his job, his family, and his seat at Sunday dinner.',
        'She lost everything. No one called it abandonment because families rarely use honest words for ugly things. Her mother said she "needed space." Her father said nothing at all. Her grandmother said God asked people to forgive. Over time, forgiveness became the family\'s language for silence, so she learned silence too.',
        'She learned how to swallow panic attacks inside public bathrooms and how to smile while relatives hugged the man who shattered her childhood. She learned how to sit through church sermons about purity while feeling permanently ruined inside. Eventually, she realized trauma was not only what happened behind closed doors. It was also what happened afterward, when the people who should have protected her chose comfort over truth.',
        'For years, she wondered if pain had a look to it, if strangers could see it on her the same way smoke clings to clothing after a fire. Inside her, everything still felt burned.',
        'This is not only a story about abuse. It is a story about what happens after. About families that protect appearances instead of children, about the loneliness of being called a liar while telling the truth, and about religion being used like a bandage over wounds that needed justice. It is also about a girl forced to carry shame that never belonged to her.',
        'But despite everything taken from her—her safety, trust, childhood, and home—something inside her refused to disappear completely. Beneath the guilt, fear, and years of silence, a voice still remained alive. Small and buried deep, but alive nonetheless.',
        'And this story begins the moment she finally decides to listen to it.'
      ]
    }
  ];

  const currentPageData = pages.find(p => p.pageNumber === page) || pages[0];

  const fontClasses = {
    sm: 'text-sm leading-relaxed space-y-3',
    md: 'text-base sm:text-lg leading-relaxed space-y-4',
    lg: 'text-lg sm:text-xl leading-relaxed space-y-5',
  };

  const themeStyles = {
    day: {
      bg: 'bg-slate-50 text-slate-900 border-slate-300',
      accent: 'text-amber-800',
      quoteBg: 'bg-slate-200/60 text-slate-800 border-slate-400',
    },
    sepia: {
      bg: 'bg-[#FAF5E8] text-[#332A1E] border-[#E8D9BF]',
      accent: 'text-[#8C5E26]',
      quoteBg: 'bg-[#F2E5CD] text-[#2C2216] border-[#D4C19C]',
    },
    dark: {
      bg: 'bg-[#12161F] text-slate-200 border-slate-800',
      accent: 'text-amber-400',
      quoteBg: 'bg-slate-900 text-amber-100 border-amber-500/30',
    },
    sunset: {
      bg: 'bg-[#1C1318] text-amber-100 border-amber-900/40',
      accent: 'text-amber-300',
      quoteBg: 'bg-amber-950/80 text-amber-200 border-amber-600/40',
    },
  };

  const currentTheme = themeStyles[readerTheme];

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const textToRead = currentPageData.isCover 
        ? `${book.title}. ${book.subtitle}. By ${book.author}. Official Cover.`
        : `${currentPageData.chapterTitle}. ${currentPageData.content.join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.92;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const toggleBookmark = () => {
    if (bookmarkedPages.includes(page)) {
      setBookmarkedPages(bookmarkedPages.filter(p => p !== page));
    } else {
      setBookmarkedPages([...bookmarkedPages, page]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      
      {/* Reader Modal Container */}
      <div className={`rounded-3xl max-w-3xl w-full p-5 sm:p-8 shadow-2xl border relative flex flex-col justify-between min-h-[620px] transition-all duration-300 ${currentTheme.bg}`}>
        
        <div>
          {/* Reader Control Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-current/15 mb-6">
            
            {/* Title Badge */}
            <div className="flex items-center gap-2">
              <BookOpen className={`w-4 h-4 ${currentTheme.accent}`} />
              <span className="font-serif-title font-bold text-sm sm:text-base">
                {currentPageData.isCover ? 'Official Cover Preview' : 'Digital Chapter Reader'}
              </span>
            </div>

            {/* Reader Customizers */}
            <div className="flex items-center flex-wrap gap-2 sm:gap-3">
              
              {/* Theme Switcher */}
              <div className="flex items-center gap-1 bg-black/10 dark:bg-white/10 p-1 rounded-xl">
                <button
                  onClick={() => setReaderTheme('day')}
                  className={`px-2 py-1 text-[11px] rounded-lg font-bold transition-all ${readerTheme === 'day' ? 'bg-white text-slate-900 shadow-xs' : 'opacity-60'}`}
                  title="Warm Daylight Theme"
                >
                  Day
                </button>
                <button
                  onClick={() => setReaderTheme('sepia')}
                  className={`px-2 py-1 text-[11px] rounded-lg font-bold transition-all ${readerTheme === 'sepia' ? 'bg-[#EBDCBE] text-[#3E2D1A] shadow-xs' : 'opacity-60'}`}
                  title="Sepia Parchment Theme"
                >
                  Sepia
                </button>
                <button
                  onClick={() => setReaderTheme('dark')}
                  className={`px-2 py-1 text-[11px] rounded-lg font-bold transition-all ${readerTheme === 'dark' ? 'bg-slate-800 text-amber-300 shadow-xs' : 'opacity-60'}`}
                  title="Dark Velvet Theme"
                >
                  Dark
                </button>
                <button
                  onClick={() => setReaderTheme('sunset')}
                  className={`px-2 py-1 text-[11px] rounded-lg font-bold transition-all ${readerTheme === 'sunset' ? 'bg-amber-900 text-amber-200 shadow-xs' : 'opacity-60'}`}
                  title="Sunset Glow Theme"
                >
                  Sunset
                </button>
              </div>

              {/* Font Size Selector (Only for text pages) */}
              {!currentPageData.isCover && (
                <div className="flex items-center gap-1 bg-black/10 dark:bg-white/10 p-1 rounded-xl text-xs font-sans-body">
                  <button
                    onClick={() => setFontSize('sm')}
                    className={`px-2 py-0.5 rounded-lg ${fontSize === 'sm' ? 'bg-amber-600 text-white font-bold' : 'opacity-70'}`}
                  >
                    A-
                  </button>
                  <button
                    onClick={() => setFontSize('md')}
                    className={`px-2 py-0.5 rounded-lg ${fontSize === 'md' ? 'bg-amber-600 text-white font-bold' : 'opacity-70'}`}
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize('lg')}
                    className={`px-2 py-0.5 rounded-lg ${fontSize === 'lg' ? 'bg-amber-600 text-white font-bold' : 'opacity-70'}`}
                  >
                    A+
                  </button>
                </div>
              )}

              {/* Speech Audio Narrator */}
              {'speechSynthesis' in window && (
                <button
                  onClick={toggleSpeech}
                  className={`px-2.5 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all ${
                    isSpeaking 
                      ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold' 
                      : 'bg-black/10 hover:bg-black/20 border-current/20'
                  }`}
                  title={isSpeaking ? 'Pause Audio' : 'Listen to Audio'}
                >
                  {isSpeaking ? <Pause className="w-3.5 h-3.5 animate-pulse" /> : <Play className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{isSpeaking ? 'Pause' : 'Listen'}</span>
                </button>
              )}

              {/* Bookmark Toggle */}
              <button
                onClick={toggleBookmark}
                className={`p-1.5 rounded-xl border transition-all ${
                  bookmarkedPages.includes(page)
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-black/10 hover:bg-black/20 border-current/20'
                }`}
                title={bookmarkedPages.includes(page) ? 'Remove Bookmark' : 'Bookmark This Page'}
              >
                <Bookmark className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => {
                  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                  onClose();
                }}
                className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                title="Close Reader"
              >
                <X className="w-5 h-5" />
              </button>

            </div>
          </div>

          {/* PAGE CONTENT SWITCHER */}
          {currentPageData.isCover ? (
            /* ================= PAGE 1: OFFICIAL BOOK COVER ================= */
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 my-2">
              
              {/* Cover Artwork Card */}
              <div className="relative group shrink-0">
                <div className="absolute -inset-3 bg-gradient-to-tr from-amber-500/40 via-amber-300/20 to-amber-600/30 rounded-2xl blur-xl" />
                <div className="relative w-56 sm:w-64 h-[380px] sm:h-[430px] rounded-xl overflow-hidden shadow-2xl border-2 border-amber-400/40 bg-slate-900">
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-full object-cover object-center filter contrast-[1.03]"
                  />
                  
                  <div className="absolute bottom-3 right-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-sans-body text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-full shadow-lg border border-amber-200 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-slate-950" />
                    <span>Official Cover</span>
                  </div>
                </div>
              </div>

              {/* Cover Details & Start Reading CTA */}
              <div className="flex flex-col justify-between space-y-4 text-center md:text-left flex-1">
                <div className="space-y-2">
                  <span className={`text-[11px] font-sans-body uppercase tracking-[0.25em] font-extrabold ${currentTheme.accent}`}>
                    Memoir • Non-Fiction
                  </span>
                  
                  <h3 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight">
                    {book.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-sans-body font-semibold uppercase tracking-wider opacity-90 text-amber-700 dark:text-amber-300">
                    {book.subtitle}
                  </p>

                  <p className="text-sm font-serif italic opacity-80 pt-1">
                    By <strong className="font-semibold">{book.author}</strong>
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-current/10 space-y-2 text-xs font-serif leading-relaxed">
                  <p>
                    "Every step has a story. Every scar holds strength. Every climb leads to healing."
                  </p>
                  <p className="opacity-75 font-sans text-[11px]">
                    Turn page to begin reading Chapter 1: Introductory.
                  </p>
                </div>

                <button
                  onClick={() => setPage(2)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-slate-950 font-sans-body text-sm font-extrabold shadow-xl flex items-center justify-center gap-2 border border-amber-200 group transition-all transform hover:-translate-y-0.5"
                >
                  <BookOpen className="w-4 h-4 text-slate-950" />
                  <span>Begin Chapter 1 Preview</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          ) : (
            /* ================= PAGES 2-5: CHAPTER 1 TEXT ================= */
            <div>
              {/* Chapter Title & Byline */}
              <div className="text-center space-y-1 mb-6">
                <span className={`text-[10px] font-sans-body uppercase tracking-[0.25em] font-bold ${currentTheme.accent}`}>
                  {book.title}
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight">
                  {currentPageData.chapterTitle}
                </h3>
                <p className="text-xs font-serif italic opacity-80">
                  By {book.author}
                </p>
              </div>

              {/* Book Excerpt Text */}
              <div className={`font-serif ${fontClasses[fontSize]}`}>
                {currentPageData.content.map((paragraph, idx) => (
                  <p key={idx} className="indent-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Navigation & Amazon CTA */}
        <div className="pt-5 border-t border-current/15 mt-6 space-y-4">
          
          {/* Page Switcher */}
          <div className="flex items-center justify-between text-xs font-sans-body font-semibold">
            <button
              disabled={page === 1}
              onClick={() => {
                if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                setPage(page - 1);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-current/20 ${
                page === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/10 dark:hover:bg-white/10'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{page === 2 ? 'Back to Cover' : 'Previous Page'}</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="font-serif text-sm font-bold">
                {page === 1 ? 'Page 1 of 5 (Official Cover)' : `Page ${page} of ${pages.length}`}
              </span>
              {bookmarkedPages.includes(page) && (
                <span className="text-[10px] bg-amber-500 text-slate-950 font-sans font-bold px-2 py-0.5 rounded-full">
                  Bookmarked
                </span>
              )}
            </div>

            <button
              disabled={page === pages.length}
              onClick={() => {
                if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                setPage(page + 1);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-current/20 ${
                page === pages.length ? 'opacity-30 cursor-not-allowed' : 'bg-amber-500/20 text-amber-900 dark:text-amber-200 border-amber-400/40 hover:bg-amber-500/30'
              }`}
            >
              <span>{page === 1 ? 'Read Chapter 1' : 'Next Page'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Amazon Order Banner */}
          <div className={`p-3.5 sm:p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 ${currentTheme.quoteBg}`}>
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold font-sans-body">
                Ready to read the full story of survival and transformation?
              </p>
              <p className="text-[11px] opacity-80 font-serif italic mt-0.5">
                Available in Kindle eBook, Paperback, and Hardcover on Amazon.
              </p>
            </div>

            <button
              onClick={() => {
                if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                onClose();
                onBuyClick();
              }}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-slate-950 font-sans-body text-xs font-extrabold shadow-md shrink-0 flex items-center gap-2 border border-amber-300"
            >
              <ShoppingBag className="w-4 h-4 text-slate-950" />
              <span>Buy Full Memoir on Amazon</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
