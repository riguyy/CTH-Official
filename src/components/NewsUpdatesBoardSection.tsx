import React, { useState } from 'react';
import { Newspaper, Calendar, Sparkles, ArrowRight, ExternalLink, Megaphone, Video, BookOpen, Heart, X, CheckCircle2 } from 'lucide-react';
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

                  {/* Concise 2-3 sentence summary */}
                  <p className={`text-xs sm:text-sm font-sans-body leading-relaxed ${
                    item.isFeatured ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.summary}
                  </p>
                </div>

                {/* Footer Action Button */}
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (item.id === 'more-ways-to-read') {
                        onBuyClick();
                      } else {
                        setSelectedNews(item);
                      }
                    }}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                      item.isFeatured 
                        ? 'text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1' 
                        : 'text-amber-800 group-hover:text-amber-900 group-hover:translate-x-1'
                    }`}
                  >
                    <span>{item.id === 'more-ways-to-read' ? 'Get the Book' : 'Read More'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {item.isFeatured && (
                    <span className="text-[10px] text-amber-300/60 font-serif italic">
                      Pinned Release
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

            <p className="text-sm text-slate-200 font-sans-body leading-relaxed space-y-3">
              {selectedNews.fullText}
            </p>

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
