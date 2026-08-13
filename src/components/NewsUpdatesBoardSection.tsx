import React, { useState } from 'react';
import { Newspaper, Calendar, Sparkles, ArrowRight, ExternalLink, Megaphone, Video, BookOpen, Heart, X, CheckCircle2, HelpCircle, Check, Award } from 'lucide-react';
import { BookDetails } from '../types';

interface NewsUpdatesBoardSectionProps {
  book: BookDetails;
  onBuyClick: () => void;
  onReadPreviewClick: () => void;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  badge: string;
  isFeatured?: boolean;
  summary: string;
  fullText: string;
  ctaText: string;
  icon: React.ElementType;
}

export const NewsUpdatesBoardSection: React.FC<NewsUpdatesBoardSectionProps> = ({
  book,
  onBuyClick,
  onReadPreviewClick,
}) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [triviaGuess, setTriviaGuess] = useState<string | null>(null);

  const newsItems: NewsItem[] = [
    {
      id: 'website-live',
      title: '🎉 The Official Website Is Live',
      date: 'August 11, 2026',
      badge: 'Official Launch',
      isFeatured: true,
      summary: 'The official Climbing Toward Healing website is now live! This online home brings the story, message, and updates together in one place for readers to stay connected.',
      fullText: 'The official Climbing Toward Healing website is now live! This new online home brings the story, message, and journey of Climbing Toward Healing together in one place. Visitors can learn more about the book, discover its purpose, explore updates, and stay connected as the journey continues. This is only the beginning.',
      ctaText: 'Read Full Announcement',
      icon: Sparkles,
    },
    {
      id: 'trivia-thursday',
      title: '🧠📚 Trivia Thursday!',
      date: 'Every Thursday',
      badge: 'Weekly Community Trivia',
      isFeatured: true,
      summary: 'Every Thursday, test your Climbing Toward Healing knowledge! 🧗‍♀️❤️\n\n📖 Today’s Question: How long did it take to write Climbing Toward Healing?\n\nA. 1 year | B. 3 years | C. 6 years | D. 10 years',
      fullText: 'Every Thursday, test your Climbing Toward Healing knowledge! 🧗‍♀️❤️\n\n🎉 Last Week’s Answer: B — the challenges and steps involved in moving toward healing.\n\n📖 Today’s Question: How long did it take to write Climbing Toward Healing?\n\nA. 1 year\nB. 3 years\nC. 6 years\nD. 10 years\n\n🔎 Think you know? Find a hint on the official website and make your guess!',
      ctaText: 'Take the Trivia Quiz',
      icon: HelpCircle,
    },
    {
      id: 'author-clarification',
      title: '📖✨ A MESSAGE FROM THE AUTHOR ✨📖',
      date: 'August 13, 2026',
      badge: 'Author Clarification',
      isFeatured: false,
      summary: 'As the Social Media Manager, I wanted to take a moment to share a little clarification before the author’s message below. ❤️ Climbing Toward Healing is a story about healing, strength, and finding light after difficult experiences...',
      fullText: '📖✨ A MESSAGE FROM THE AUTHOR ✨📖\n\nAs the Social Media Manager, I wanted to take a moment to share a little clarification before the author’s message below. ❤️ Climbing Toward Healing is, a story about healing, strength, and finding light after difficult experiences. The details throughout the book are there to help readers understand the author’s journey, the environment she grew up in, and the experiences that shaped her. Recently, there has been some misunderstanding surrounding one particular detail. Because of that, the author felt it was important to personally clarify what she meant. — Her intention is simply to make sure that someone who played a loving and important role in her life is not mistakenly associated with something they had absolutely no part in. Most importantly, this book is about healing. It is about sharing a difficult journey, finding strength through it, and showing that there can be light after darkness. ❤️ Thank you to everyone who takes the time to read this story, to listen with an open heart, to be positive, to show kindness, to climb towards healing. ❤️🩹\n\n——————————————————\n\nThe Message From the Author:\nI’d like to offer a clarification about my book. Some readers have misunderstood a part where I described the home we grew up in and mentioned that my uncle lived downstairs. That detail was included simply to set the scene and give context to the type of housing and environment we lived in. To be absolutely clear, the uncle who lived downstairs was not the person who harmed me. In fact, he was like a second father to me. He loved, protected, and cared for me, and I will always be grateful for the role he played in my life. I want to clarify that when I referred to “the evil downstairs,” I was not referring to the uncle who lived downstairs. That description was meant to establish the setting of the home where I grew up and to describe the darkness and trauma that existed there—not the people who lived in that space. That uncle was like a second father to me and was a source of love, safety, and support in my life. The “evil” I wrote about was the abuse and its impact, not him. I wanted to make this clarification because I never want an innocent person to be misunderstood or associated with something they had no part in. Thank you to everyone who has read my story with compassion and understanding.\n\n— 📝✨ Jacqueline Eye ✨📝 Author of Climbing Toward Healing',
      ctaText: 'Read Full Message',
      icon: Heart,
    },
    {
      id: 'journey-behind',
      title: '📖 The Journey Behind Climbing Toward Healing',
      date: 'August 2026',
      badge: 'Book Purpose',
      summary: 'Climbing Toward Healing is a story centered around healing, growth, resilience, and moving forward. It offers a gentle reminder that difficult chapters do not define an entire story.',
      fullText: 'Climbing Toward Healing is more than a book—it is a story centered around healing, growth, resilience, and the journey of moving forward. The book was created with the hope that its message reaches people who may need a reminder that healing takes time, that difficult chapters do not define an entire story, and that there can still be hope along the way.',
      ctaText: 'Read Story Purpose',
      icon: BookOpen,
    },
    {
      id: 'official-trailer',
      title: '🎬 Official Trailer in the Works',
      date: 'August 2026',
      badge: 'Media Release',
      summary: 'An official promotional trailer for Climbing Toward Healing is currently in production to share the book’s message with a wider audience. More details coming soon.',
      fullText: 'An official promotional trailer for Climbing Toward Healing is currently in the works. The trailer will offer another way to introduce the book and share its message with a wider audience. More details and the official release will be announced soon. Stay tuned.',
      ctaText: 'Preview Details',
      icon: Video,
    },
    {
      id: 'more-ways-to-read',
      title: '📚 More Ways to Read Climbing Toward Healing',
      date: 'August 2026',
      badge: 'Availability',
      summary: 'Climbing Toward Healing is currently available for readers, with additional retailer availability continuing to develop. Stay tuned for new purchase locations.',
      fullText: 'Climbing Toward Healing is currently available for readers, with additional opportunities to find the book continuing to develop. More information about where to purchase or find the book will be shared here as new availability is announced.',
      ctaText: 'Find Your Copy',
      icon: Megaphone,
    },
    {
      id: 'message-worth-sharing',
      title: '🌟 A Message Worth Sharing',
      date: 'August 2026',
      badge: 'Author Note',
      summary: 'At the heart of Climbing Toward Healing is the hope that these words reach someone who needs them. Recognizing that healing happens step by step, every page was worth writing.',
      fullText: 'At the heart of Climbing Toward Healing is a simple but meaningful hope: that the words within these pages can reach someone who needs them. The goal isn’t to promise that healing is easy. It is to recognize that healing is a journey—one that can happen step by step, even when the path ahead isn’t always clear. If this book helps even one person, every page was worth writing.',
      ctaText: 'Read Reflection',
      icon: Heart,
    },
    {
      id: 'more-updates-soon',
      title: '📰 More Updates Coming Soon',
      date: 'Upcoming',
      badge: 'Milestone',
      summary: 'The journey is just beginning. As the book reaches new readers and media appearances unfold, this board will continue to grow with fresh updates and events.',
      fullText: 'The journey is just beginning. As Climbing Toward Healing reaches new readers, appears in new places, and takes on new opportunities, this page will continue to grow. Check back for upcoming announcements, media appearances, promotional projects, reader reactions, events, and other milestones.',
      ctaText: 'Follow the Journey',
      icon: Newspaper,
    },
  ];

  return (
    <section id="news-updates" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] text-slate-800 relative border-t border-amber-900/10">
      
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-200/80 text-amber-900 text-xs font-serif uppercase tracking-widest border border-amber-300">
            <Newspaper className="w-3.5 h-3.5 text-amber-800" />
            <span>NEWS & UPDATES BOARD</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Follow the <span className="font-script text-4xl sm:text-6xl text-amber-800 font-normal">Journey</span>
          </h2>

          <p className="font-sans-body text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Welcome to the News & Updates board of <em>Climbing Toward Healing</em>. Follow the latest announcements, milestones, media projects, and moments surrounding the book.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className={`group relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border shadow-sm hover:shadow-xl ${
                  item.isFeatured 
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 text-white border-amber-400/50 shadow-md ring-1 ring-amber-400/30' 
                    : 'bg-white text-slate-800 border-amber-200/80 hover:border-amber-400/60'
                }`}
              >
                {/* Header Badge & Date */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider ${
                      item.isFeatured
                        ? 'bg-amber-500 text-slate-950 border border-amber-300'
                        : 'bg-amber-100 text-amber-900 border border-amber-200'
                    }`}>
                      <Icon className="w-3 h-3" />
                      <span>{item.badge}</span>
                    </span>

                    <span className={`flex items-center gap-1 text-xs font-sans-body ${
                      item.isFeatured ? 'text-amber-300/80' : 'text-slate-500'
                    }`}>
                      <Calendar className="w-3 h-3 text-amber-500" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-serif-title text-xl font-bold leading-snug group-hover:text-amber-600 transition-colors ${
                    item.isFeatured ? 'text-amber-100 group-hover:text-amber-300' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Custom rendering for Author Clarification vs Trivia Thursday vs Standard News */}
                  {item.id === 'author-clarification' ? (
                    <div className="space-y-2.5 pt-1">
                      <p className={`text-xs sm:text-sm font-sans-body leading-relaxed ${
                        item.isFeatured ? 'text-amber-200/90' : 'text-slate-600'
                      }`}>
                        As the Social Media Manager, I wanted to take a moment to share a little clarification before the author’s message below. ❤️ <em>Climbing Toward Healing</em> is a story about healing, strength, and finding light.
                      </p>
                      <div className={`p-3 rounded-xl border text-xs font-sans-body italic ${
                        item.isFeatured
                          ? 'bg-slate-950/80 border-amber-400/30 text-amber-100/90'
                          : 'bg-amber-50/80 border-amber-200/80 text-slate-800'
                      }`}>
                        "I’d like to offer a clarification about my book. Some readers have misunderstood a part where I described the home we grew up in..."
                      </div>
                    </div>
                  ) : item.id === 'trivia-thursday' ? (
                    <div className="space-y-3 pt-1">
                      <p className="text-xs sm:text-sm font-sans-body leading-relaxed text-amber-200/90">
                        Every Thursday, test your <strong>Climbing Toward Healing</strong> knowledge! 🧗‍♀️❤️
                      </p>
                      
                      <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-400/30 text-xs font-sans-body space-y-1.5">
                        <span className="text-amber-400 font-bold block text-[11px] uppercase tracking-wider">Today's Question:</span>
                        <p className="text-amber-100 font-medium italic">
                          How long did it take to write <em>Climbing Toward Healing</em>?
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-bold text-amber-300/80">
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700">A. 1 yr</span>
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700">B. 3 yrs</span>
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700">C. 6 yrs</span>
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700">D. 10 yrs</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-amber-300/70 italic">
                        🔎 Think you know? Find a hint on the website and make your guess!
                      </p>
                    </div>
                  ) : (
                    /* Concise 2-3 sentence summary */
                    <p className={`text-xs sm:text-sm font-sans-body leading-relaxed ${
                      item.isFeatured ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {item.summary}
                    </p>
                  )}
                </div>

                {/* Footer Action Button */}
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (item.id === 'more-ways-to-read') {
                        onBuyClick();
                      } else {
                        setSelectedNews(item);
                        if (item.id === 'trivia-thursday') {
                          setTriviaGuess(null);
                        }
                      }
                    }}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                      item.isFeatured 
                        ? 'text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1' 
                        : 'text-amber-800 group-hover:text-amber-900 group-hover:translate-x-1'
                    }`}
                  >
                    <span>
                      {item.id === 'more-ways-to-read' 
                        ? 'Get the Book' 
                        : item.id === 'trivia-thursday'
                        ? 'Take the Quiz'
                        : item.id === 'author-clarification'
                        ? 'Read Full Message'
                        : 'Read More'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {item.isFeatured && (
                    <span className="text-[10px] text-amber-300/60 font-serif italic">
                      {item.id === 'trivia-thursday' ? 'Weekly Feature' : 'Pinned Release'}
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Footer Banner - Stay Connected */}
        <div className="bg-gradient-to-r from-amber-900 via-slate-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 border-2 border-amber-400/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-amber-100">
              The Journey Continues.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans-body leading-relaxed">
              <em>Climbing Toward Healing</em> is a story about moving forward, finding strength, and continuing the climb—one step at a time.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={book.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-all border border-amber-200"
            >
              <span>Follow Us on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={book.socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-200 font-bold text-xs flex items-center gap-2 shadow-lg transition-all border border-amber-400/30"
            >
              <span>Follow Us on TikTok</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={book.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all border border-pink-400/30"
            >
              <span>Follow Us on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border-2 border-amber-400/50 text-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6">
            
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-bold bg-amber-500 text-slate-950">
                {selectedNews.badge}
              </span>
              <h3 className="font-serif-title text-2xl font-bold text-amber-100">
                {selectedNews.title}
              </h3>
              <p className="text-xs text-amber-300/80 font-sans-body flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{selectedNews.date}</span>
              </p>
            </div>

            <div className="w-full h-[1px] bg-slate-800" />

            {selectedNews.id === 'author-clarification' ? (
              <div className="space-y-6">
                {/* Social Media Manager Note Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-400/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
                    <Heart className="w-4 h-4 text-amber-400" />
                    <span>Note from Social Media Manager</span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-100 font-sans-body leading-relaxed">
                    As the Social Media Manager, I wanted to take a moment to share a little clarification before the author’s message below. ❤️ <em>Climbing Toward Healing</em> is a story about healing, strength, and finding light after difficult experiences. The details throughout the book are there to help readers understand the author’s journey, the environment she grew up in, and the experiences that shaped her.
                  </p>
                  <p className="text-xs sm:text-sm text-amber-100/90 font-sans-body leading-relaxed">
                    Recently, there has been some misunderstanding surrounding one particular detail. Because of that, the author felt it was important to personally clarify what she meant. — Her intention is simply to make sure that someone who played a loving and important role in her life is not mistakenly associated with something they had absolutely no part in.
                  </p>
                  <p className="text-xs sm:text-sm text-amber-100 font-sans-body leading-relaxed">
                    Most importantly, this book is about healing. It is about sharing a difficult journey, finding strength through it, and showing that there can be light after darkness. ❤️ Thank you to everyone who takes the time to read this story, to listen with an open heart, to be positive, to show kindness, to climb towards healing. ❤️🩹
                  </p>
                </div>

                {/* Divider Line */}
                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-amber-400/30"></div>
                  <span className="flex-shrink mx-4 text-xs font-serif italic text-amber-400">The Message From the Author</span>
                  <div className="flex-grow border-t border-amber-400/30"></div>
                </div>

                {/* The Message From the Author Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 border-2 border-amber-400/50 space-y-4 shadow-xl">
                  <h4 className="font-serif-title text-lg font-bold text-amber-200">
                    The Message From the Author
                  </h4>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-200 font-sans-body leading-relaxed">
                    <p>
                      I’d like to offer a clarification about my book. Some readers have misunderstood a part where I described the home we grew up in and mentioned that my uncle lived downstairs. That detail was included simply to set the scene and give context to the type of housing and environment we lived in. To be absolutely clear, the uncle who lived downstairs was not the person who harmed me. In fact, he was like a second father to me. He loved, protected, and cared for me, and I will always be grateful for the role he played in my life.
                    </p>
                    <p>
                      I want to clarify that when I referred to “the evil downstairs,” I was not referring to the uncle who lived downstairs. That description was meant to establish the setting of the home where I grew up and to describe the darkness and trauma that existed there—not the people who lived in that space. That uncle was like a second father to me and was a source of love, safety, and support in my life. The “evil” I wrote about was the abuse and its impact, not him.
                    </p>
                    <p>
                      I wanted to make this clarification because I never want an innocent person to be misunderstood or associated with something they had no part in. Thank you to everyone who has read my story with compassion and understanding.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-amber-400/30 text-right">
                    <p className="font-serif italic text-amber-300 font-bold text-sm">
                      — 📝✨ Jacqueline Eye ✨📝
                    </p>
                    <p className="text-xs text-amber-400/80 font-sans-body">
                      Author of <em>Climbing Toward Healing</em>
                    </p>
                  </div>
                </div>
              </div>
            ) : selectedNews.id === 'trivia-thursday' ? (
              <div className="space-y-6">
                <p className="text-sm sm:text-base font-sans-body text-amber-100 font-medium leading-relaxed">
                  Every Thursday, test your <strong>Climbing Toward Healing</strong> knowledge! 🧗‍♀️❤️
                </p>

                {/* Last Week's Answer Callout */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-sans-body leading-relaxed">
                  <span className="font-bold text-amber-300 block mb-1">🎉 Last Week’s Answer:</span>
                  <p className="text-slate-200">
                    <strong>B</strong> — the challenges and steps involved in moving toward healing.
                  </p>
                </div>

                {/* Today's Question & Options */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border-2 border-amber-400/40 space-y-4">
                  <div className="flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-serif uppercase tracking-wider text-amber-400 font-bold block mb-1">
                        Today’s Question
                      </span>
                      <h4 className="font-serif-title text-base sm:text-lg font-bold text-amber-100">
                        How long did it take to write <em>Climbing Toward Healing</em>?
                      </h4>
                    </div>
                  </div>

                  {/* Options List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {[
                      { key: 'A', text: '1 year' },
                      { key: 'B', text: '3 years' },
                      { key: 'C', text: '6 years' },
                      { key: 'D', text: '10 years' },
                    ].map((opt) => {
                      const isSelected = triviaGuess === opt.key;
                      const isCorrect = opt.key === 'C';
                      return (
                        <button
                          key={opt.key}
                          onClick={() => setTriviaGuess(opt.key)}
                          className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-sans-body font-bold transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? isCorrect
                                ? 'bg-emerald-950/90 border-emerald-400 text-emerald-200 shadow-lg'
                                : 'bg-amber-950/90 border-amber-400 text-amber-200 shadow-lg'
                              : 'bg-slate-900/90 border-slate-700 hover:border-amber-400/60 text-slate-200 hover:bg-slate-800'
                          }`}
                        >
                          <span><strong>{opt.key}.</strong> {opt.text}</span>
                          {isSelected && (
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                              isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-amber-500 text-slate-950'
                            }`}>
                              {isCorrect ? 'Correct! 🎉' : 'Selected'}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback on selection */}
                  {triviaGuess && (
                    <div className={`p-4 rounded-xl border text-xs sm:text-sm font-sans-body leading-relaxed animate-fade-in ${
                      triviaGuess === 'C'
                        ? 'bg-emerald-950/80 border-emerald-400/60 text-emerald-200'
                        : 'bg-amber-950/80 border-amber-400/60 text-amber-200'
                    }`}>
                      {triviaGuess === 'C' ? (
                        <div className="flex items-start gap-2">
                          <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-emerald-300 text-sm mb-1">🎉 Spot On! Correct Answer: C (6 years)</p>
                            <p>The writing and publishing journey for <em>Climbing Toward Healing</em> spanned 6 years (2020–2026), beginning during the pandemic in 2020 all the way to its official release!</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-2">
                          <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-amber-300 text-sm mb-1">Good guess! Try again or find the hint!</p>
                            <p>🔎 <strong>Hint:</strong> Check out the <em>Book Updates Timeline</em> on this website to see when the climb first started in 2020!</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Hint Callout */}
                <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-sans-body flex items-center gap-2">
                  <span className="text-base">🔎</span>
                  <p>
                    <strong>Think you know?</strong> Find a hint on the official website and make your guess!
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-200 font-sans-body leading-relaxed space-y-3 whitespace-pre-line">
                {selectedNews.fullText}
              </p>
            )}

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
