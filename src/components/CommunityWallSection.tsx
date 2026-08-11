import React, { useState } from 'react';
import { Heart, MessageSquare, Send, Sparkles, Share2, ThumbsUp } from 'lucide-react';
import { BookDetails, EncouragementNote } from '../types';

interface CommunityWallSectionProps {
  book: BookDetails;
}

export const CommunityWallSection: React.FC<CommunityWallSectionProps> = ({
  book,
}) => {
  const [notes, setNotes] = useState<EncouragementNote[]>([
    {
      id: '1',
      authorName: 'Sarah M.',
      location: 'Caribou, Maine',
      message: 'This book gave me the courage to keep walking when I felt completely lost. Thank you Jacqueline for your vulnerability and honesty.',
      date: '2 days ago',
      likes: 24,
    },
    {
      id: '2',
      authorName: 'David K.',
      location: 'Presque Isle, Maine',
      message: 'Healing really is a mountain climb. Every page reminded me that my scars are proof of my survival.',
      date: '5 days ago',
      likes: 18,
    },
    {
      id: '3',
      authorName: 'Elena R.',
      location: 'Bangor, Maine',
      message: 'I sent this book to my sister who is going through recovery. It brought her so much hope. Keep climbing!',
      date: '1 week ago',
      likes: 32,
    },
  ]);

  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !newAuthor.trim()) return;

    const noteToAdd: EncouragementNote = {
      id: Date.now().toString(),
      authorName: newAuthor.trim(),
      location: newLocation.trim() || undefined,
      message: newMessage.trim(),
      date: 'Just now',
      likes: 1,
    };

    setNotes([noteToAdd, ...notes]);
    setSubmitted(true);
    setNewAuthor('');
    setNewLocation('');
    setNewMessage('');

    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleLike = (id: string) => {
    setNotes(notes.map(n => n.id === id ? { ...n, likes: n.likes + 1 } : n));
  };

  return (
    <section id="community" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6] text-slate-800 relative">
      
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-200/80 text-amber-900 text-xs font-serif uppercase tracking-widest border border-amber-300">
            <Heart className="w-3.5 h-3.5 text-amber-700" />
            <span>Community & Social Media</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Join the <span className="font-script text-4xl sm:text-6xl text-amber-800 font-normal">Healing Journey</span>
          </h2>

          <p className="font-sans-body text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Follow the official social accounts, share your story, and connect with a compassionate community of readers climbing toward light.
          </p>
        </div>

        {/* Social Media Links Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Instagram Card */}
          <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  📸
                </div>
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-slate-900">Instagram</h3>
                  <p className="text-xs text-slate-500 font-sans-body">@climbingtowardhealing</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans-body">
                Follow for inspirational quotes, author reflections, book photos, aesthetic visual cards, and community stories.
              </p>
            </div>

            <a
              href={book.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-sans-body text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <span>Follow on Instagram</span>
              <Share2 className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Facebook Card */}
          <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  f
                </div>
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-slate-900">Facebook Page</h3>
                  <p className="text-xs text-slate-500 font-sans-body">@CTHOfficial</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans-body">
                Join our Facebook community for daily inspirational quotes, author updates, live Q&A sessions, and reader discussions.
              </p>
            </div>

            <a
              href={book.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-sans-body text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <span>Follow on Facebook</span>
              <Share2 className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* TikTok Card */}
          <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center font-bold text-sm shadow-sm border border-slate-800">
                  🎵
                </div>
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-slate-900">TikTok Community</h3>
                  <p className="text-xs text-slate-500 font-sans-body">@ClimbingTowardHealing</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans-body">
                Watch video excerpts, behind-the-scenes writing reflections, Times Square highlights, and peaceful nature video clips.
              </p>
            </div>

            <a
              href={book.socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-sans-body text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <span>Follow on TikTok</span>
              <Share2 className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Reader Encouragement Note Wall */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-md space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
                Words of Hope Wall
              </h3>
              <p className="font-sans-body text-xs text-slate-600 mt-1">
                Leave a note of encouragement for fellow readers or share what "Climbing Toward Healing" means to you.
              </p>
            </div>

            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold font-sans-body">
              {notes.length} Reader Messages
            </span>
          </div>

          {/* Form to submit note */}
          <form onSubmit={handleNoteSubmit} className="bg-amber-50/70 p-6 rounded-2xl border border-amber-200/60 space-y-4">
            <p className="font-serif-title text-base font-bold text-slate-900">
              Add Your Note to the Wall
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="Your Name (e.g. Maria S.)"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              <input
                type="text"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                placeholder="City, State / Country (Optional)"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <textarea
              rows={3}
              required
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Share a message of hope, a favorite quote from the book, or words of encouragement for others..."
              className="w-full p-3.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none resize-none"
            />

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-slate-500 italic">
                Messages are posted immediately for all visitors to see.
              </span>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-sans-body text-xs font-bold shadow-md transition-all flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post Note</span>
              </button>
            </div>

            {submitted && (
              <p className="text-xs text-emerald-700 font-semibold bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                ✨ Thank you! Your message of hope has been posted to the wall.
              </p>
            )}
          </form>

          {/* List of Messages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notes.map((note) => (
              <div 
                key={note.id} 
                className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200/50 flex flex-col justify-between space-y-3 relative group hover:border-amber-300 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif-title font-bold text-slate-900 text-sm">
                      {note.authorName}
                    </span>
                    <span className="text-[10px] text-slate-400 font-sans-body">
                      {note.date}
                    </span>
                  </div>

                  {note.location && (
                    <p className="text-[10px] text-amber-800/80 font-medium">
                      📍 {note.location}
                    </p>
                  )}

                  <p className="font-sans-body text-xs text-slate-700 italic leading-relaxed pt-1">
                    "{note.message}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <button
                    onClick={() => handleLike(note.id)}
                    className="flex items-center gap-1 hover:text-amber-700 transition-colors"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-amber-600" />
                    <span className="text-[11px] font-semibold">{note.likes}</span>
                  </button>

                  <span className="font-serif text-amber-700">♡</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
