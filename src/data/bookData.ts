import { BookDetails } from '../types';
import officialBookCoverImage from '../assets/images/phototourl_book_cover.jpg';
import authorSpeakerPhotoImage from '../assets/images/instasize_author_speaker.jpg';

export const initialBookDetails: BookDetails = {
  title: 'Climbing Toward Healing',
  subtitle: 'A journey of healing, hope, and finding your way forward.',
  tagline: 'A JOURNEY OF SURVIVAL, STRENGTH, AND FINDING LIGHT AFTER THE DARKNESS',
  author: 'Jacqueline Eye',
  isbn: '978-1-63988-123-4',
  
  // High quality artwork tailored for Climbing Toward Healing
  coverImage: officialBookCoverImage,
  authorPhoto: authorSpeakerPhotoImage,
  mountainBgImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
  timesSquareImage: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
  
  buyLinks: {
    amazon: 'https://www.amazon.com/dp/B0HB8Z71WM',
    amazonKindle: 'https://www.amazon.com/dp/B0HB7678FS',
    amazonPaperback: 'https://www.amazon.com/dp/B0HB8Z71WM',
    amazonHardcover: 'https://www.amazon.com/dp/B0HBHBJTK1',
    barnesAndNoble: 'https://www.barnesandnoble.com',
    appleBooks: 'https://books.apple.com',
    indieBound: 'https://www.indiebound.org',
  },
  
  socialLinks: {
    facebook: 'https://www.facebook.com/share/1c4SmXV7XA/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@climbing.toward.healing?_r=1&_t=ZP-98nWpgmMttW',
    instagram: 'https://www.instagram.com/climbingtowardhealing?igsh=MTJmejl4MmdwY3Byag%3D%3D&utm_source=qr',
  },
};
