export type BookDetails = {
  book: {
    uuid: string;
    title: string;
    author: string;
    edition: string;
    year: number;
    publisher: string;
    pagesTotal: number;
    coverUrl: string;
    rating: number;
    reviewsCount: number;
    readersCount: number;
    synopsis: string;
  };
  progress?: {
    percentage?: number;
    pagesRead?: number;
    lastUpdated?: string;
    startDate?: string;
    goalDate?: string;
  };

  readingDetails?: {
    description?: string;
    createdAt?: string;
  };
};
