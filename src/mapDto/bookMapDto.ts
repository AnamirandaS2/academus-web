import { BookDTO } from "../dtos/book.dto";
import { Book } from "../entities/Book.entity";

export const bookMapDto = (data: BookDTO): Book => {
  return {
    bookCoverUrl: data.book_cover_url,
    edition: data.edition,
    isbn: data.isbn,
    languageUuid: data.language_uuid,
    numberOfPages: data.number_of_pages,
    publisher: data.publisher,
    synopsis: data.synopsis,
    title: data.title,
    url: data.url,
    uuid: data.uuid,
    year: data.year,
    volume: data.volume,
  };
};
