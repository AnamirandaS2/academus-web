import { BookDetailsDTO } from "../dtos/bookDetails.dto";
import { BookDetails } from "../entities/BookDetails.entity";

export const BookDetailsMapDto = (data: BookDetailsDTO): BookDetails => {
  return {
    book: {
      author: data.book.author,
      coverUrl: data.book.cover_url,
      edition: data.book.edition,
      pagesTotal: data.book.pages_total,
      publisher: data.book.publisher,
      rating: data.book.rating,
      readersCount: data.book.readers_count,
      reviewsCount: data.book.reviews_count,
      synopsis: data.book.synopsis,
      title: data.book.title,
      uuid: data.book.uuid,
      year: data.book.year,
    },
    progress: {
      goalDate: data.progress?.goal_date,
      lastUpdated: data.progress?.last_updated,
      pagesRead: data.progress?.pages_read,
      percentage: data.progress?.percentage,
      startDate: data.progress?.start_date,
    },
    readingDetails: {
      createdAt: data.reading_details?.created_at,
      description: data.reading_details?.description,
    },
  };
};
