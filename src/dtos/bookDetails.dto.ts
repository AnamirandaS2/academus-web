export type BookDetailsDTO = {
  book: {
    uuid: string;
    title: string;
    author: string;
    edition: string;
    year: number;
    publisher: string;
    pages_total: number;
    cover_url: string;
    rating: number;
    reviews_count: number;
    readers_count: number;
    synopsis: string;
  };
  progress?: {
    percentage?: number;
    pages_read?: number;
    last_updated?: string;
    start_date?: string;
    goal_date?: string;
  };

  reading_details?: {
    description?: string;
    created_at?: string;
  };
};
