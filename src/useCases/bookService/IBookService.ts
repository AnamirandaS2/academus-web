import { Book } from "../../entities/Book.entity";

export interface IBookService {
  create: (data: BookFormData) => Promise<Book>;
}

export type BookFormData = {
  title: string;
  isbn: string;
  volume?: string;
  publisher: string;
  edition: string;
  year: number;
  numberOfPages: number;
  synopsis: string;
  bookCover: FileList;
  bookFile: FileList;
  languageUuid: string;
};
