import React, { useState } from 'react';
import { X, BookOpen, ChevronLeft, ChevronRight, ShoppingBag, Sparkles } from 'lucide-react';
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
  const [page, setPage] = useState(1);

  if (!isOpen) return null;

  const fontClasses = {
    sm: 'text-sm leading-relaxed',
    md: 'text-base leading-relaxed sm:text-lg',
    lg: 'text-lg leading-relaxed sm:text-xl',
  };

  const pages = [
    {
      pageNumber: 1,
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
      pageNumber: 2,
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
      pageNumber: 3,
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
      pageNumber: 4,
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

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Modal Box */}
      <div className="bg-[#FAF7F0] text-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-amber-300/80 relative flex flex-col justify-between min-h-[580px] animate-fadeIn">
        
        {/* Top Control Bar */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-amber-900/10 mb-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span className="font-serif-title font-bold text-sm text-slate-900">
                Chapter Excerpt Preview
              </span>
            </div>

            {/* Font Adjuster & Close */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-amber-100/60 p-1 rounded-lg border border-amber-200 text-xs font-sans-body">
                <button
                  onClick={() => setFontSize('sm')}
                  className={`px-2 py-0.5 rounded ${fontSize === 'sm' ? 'bg-amber-700 text-white font-bold' : 'text-amber-900'}`}
                >
                  A-
                </button>
                <button
                  onClick={() => setFontSize('md')}
                  className={`px-2 py-0.5 rounded ${fontSize === 'md' ? 'bg-amber-700 text-white font-bold' : 'text-amber-900'}`}
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('lg')}
                  className={`px-2 py-0.5 rounded ${fontSize === 'lg' ? 'bg-amber-700 text-white font-bold' : 'text-amber-900'}`}
                >
                  A+
                </button>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-amber-200/60 text-slate-700 transition-colors"
                title="Close Excerpt Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chapter Heading */}
          <div className="text-center space-y-1 mb-6">
            <span className="text-[10px] font-sans-body uppercase tracking-[0.25em] text-amber-800 font-bold">
              Climbing Toward Healing
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
              {currentPageData.chapterTitle}
            </h3>
            <p className="text-xs text-amber-700 font-serif italic">
              By Jacqueline Eye
            </p>
          </div>

          {/* Book Content Paragraphs */}
          <div className={`font-serif text-slate-800 space-y-4 ${fontClasses[fontSize]}`}>
            {currentPageData.content.map((paragraph, idx) => (
              <p key={idx} className="indent-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Footer & Page Switcher */}
        <div className="pt-6 border-t border-amber-900/10 mt-8 space-y-4">
          
          <div className="flex items-center justify-between text-xs text-slate-600 font-sans-body">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className={`flex items-center gap-1 font-semibold ${page === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:text-amber-800'}`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Page</span>
            </button>

            <span className="font-serif text-amber-900 font-bold">
              Page {page} of {pages.length}
            </span>

            <button
              disabled={page === pages.length}
              onClick={() => setPage(page + 1)}
              className={`flex items-center gap-1 font-semibold ${page === pages.length ? 'opacity-40 cursor-not-allowed' : 'hover:text-amber-800'}`}
            >
              <span>Next Page</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Buy CTA */}
          <div className="bg-amber-100/70 p-4 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-amber-900 font-sans-body font-medium text-center sm:text-left">
              Enjoying this preview? Read the full story on Amazon.
            </p>

            <button
              onClick={() => {
                onClose();
                onBuyClick();
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-sans-body text-xs font-bold shadow-md shrink-0 flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Buy Full Book</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
