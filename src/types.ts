export interface BookDetails {
  title: string;
  subtitle: string;
  tagline: string;
  author: string;
  isbn: string;
  coverImage: string;
  authorPhoto: string;
  mountainBgImage: string;
  timesSquareImage: string;
  buyLinks: {
    amazon: string;
    amazonKindle: string;
    amazonPaperback: string;
    amazonHardcover: string;
    barnesAndNoble: string;
    appleBooks: string;
    indieBound: string;
  };
  socialLinks: {
    facebook: string;
    tiktok: string;
    instagram: string;
  };
}

export interface ExcerptChapter {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
}

export interface EncouragementNote {
  id: string;
  authorName: string;
  location?: string;
  message: string;
  date: string;
  likes: number;
}
