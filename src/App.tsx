import React, { useState } from 'react';
import { initialBookDetails } from './data/bookData';
import { BookDetails } from './types';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { AboutBookSection } from './components/AboutBookSection';
import { WhyWrittenSection } from './components/WhyWrittenSection';
import { AboutAuthorSection } from './components/AboutAuthorSection';
import { QuoteBannerSection } from './components/QuoteBannerSection';
import { TimesSquareFeatureSection } from './components/TimesSquareFeatureSection';
import { WhereToBuySection } from './components/WhereToBuySection';
import { NewsUpdatesBoardSection } from './components/NewsUpdatesBoardSection';
import { CommunityWallSection } from './components/CommunityWallSection';
import { OurTeamSection } from './components/OurTeamSection';
import { Footer } from './components/Footer';
import { ExcerptModal } from './components/ExcerptModal';
import { MountainClimbExperience } from './components/MountainClimbExperience';
import { TheMessageExperience } from './components/TheMessageExperience';
import { BookUpdatesTimelineModal } from './components/BookUpdatesTimelineModal';
import { ambienceEngine } from './utils/audioAmbience';

export function App() {
  const [bookDetails, setBookDetails] = useState<BookDetails>(initialBookDetails);
  const [isExcerptOpen, setIsExcerptOpen] = useState(false);
  const [isMountainClimbOpen, setIsMountainClimbOpen] = useState(false);
  const [isTheMessageOpen, setIsTheMessageOpen] = useState(false);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Scroll to "Where to Buy" or open Amazon
  const handleBuyClick = () => {
    const buySection = document.getElementById('where-to-buy');
    if (buySection) {
      buySection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(bookDetails.buyLinks.amazon, '_blank');
    }
  };

  const handleReadPreviewClick = () => {
    setIsExcerptOpen(true);
  };

  const handleToggleAudio = () => {
    const active = ambienceEngine.toggle();
    setAudioPlaying(active);
  };

  const handleUpdateAuthorPhoto = (newUrl: string) => {
    setBookDetails((prev) => ({
      ...prev,
      authorPhoto: newUrl,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 font-sans-body selection:bg-amber-200 selection:text-amber-900">
      
      {/* Top Header Navigation */}
      <HeaderNav
        onBuyClick={handleBuyClick}
        onReadPreviewClick={handleReadPreviewClick}
        audioPlaying={audioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection
          book={bookDetails}
          onBuyClick={handleBuyClick}
          onReadPreviewClick={handleReadPreviewClick}
          onStartClimbClick={() => setIsMountainClimbOpen(true)}
          onTheMessageClick={() => setIsTheMessageOpen(true)}
        />

        {/* Section 2: About the Book */}
        <AboutBookSection
          book={bookDetails}
          onReadPreviewClick={handleReadPreviewClick}
          onBuyClick={handleBuyClick}
        />

        {/* Section 3: Why This Book Was Written */}
        <WhyWrittenSection />

        {/* Section 4: About the Author */}
        <AboutAuthorSection
          book={bookDetails}
        />

        {/* Section 5: Quote Banner */}
        <QuoteBannerSection mountainBgUrl={bookDetails.mountainBgImage} />

        {/* Section 6: Times Square Billboard Highlight */}
        <TimesSquareFeatureSection book={bookDetails} />

        {/* Section 7: Where to Buy */}
        <WhereToBuySection book={bookDetails} />

        {/* Section 8: News & Updates Board */}
        <NewsUpdatesBoardSection
          book={bookDetails}
          onBuyClick={handleBuyClick}
          onReadPreviewClick={handleReadPreviewClick}
        />

        {/* Section 9: Social Media & Community Wall ("Join the Healing Journey") */}
        <CommunityWallSection 
          book={bookDetails} 
          onOpenTimelineClick={() => setIsTimelineOpen(true)}
        />

        {/* Section 9: Our Team */}
        <OurTeamSection book={bookDetails} />
      </main>

      {/* Footer */}
      <Footer
        book={bookDetails}
        onBuyClick={handleBuyClick}
        onReadPreviewClick={handleReadPreviewClick}
        onOpenTimelineClick={() => setIsTimelineOpen(true)}
      />

      {/* Sample Excerpt Modal */}
      <ExcerptModal
        isOpen={isExcerptOpen}
        onClose={() => setIsExcerptOpen(false)}
        book={bookDetails}
        onBuyClick={handleBuyClick}
      />

      {/* Digital Mountain Climb Experience Modal */}
      <MountainClimbExperience
        isOpen={isMountainClimbOpen}
        onClose={() => setIsMountainClimbOpen(false)}
        mountainBgUrl={bookDetails.mountainBgImage}
      />

      {/* Cinematic The Message Experience Modal */}
      <TheMessageExperience
        isOpen={isTheMessageOpen}
        onClose={() => setIsTheMessageOpen(false)}
      />

      {/* Book Updates Timeline Modal */}
      <BookUpdatesTimelineModal
        isOpen={isTimelineOpen}
        onClose={() => setIsTimelineOpen(false)}
        onFollowJourneyClick={() => {
          const footerForm = document.querySelector('form');
          if (footerForm) {
            footerForm.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

    </div>
  );
}

export default App;
