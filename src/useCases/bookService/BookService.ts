import { Book } from "../../entities/Book.entity";
import { bookMapDto } from "../../mapDto/bookMapDto";
import { api } from "../../services/api";
import { BookFormData, IBookService } from "./IBookService";

export class BookService implements IBookService {
  async create(data: BookFormData): Promise<Book> {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("isbn", data.isbn);
    formData.append("volume", data.volume || "");
    formData.append("publisher", data.publisher);
    formData.append("edition", data.edition);
    formData.append("year", data.year.toString());
    formData.append("number_of_pages", data.numberOfPages.toString());
    formData.append("synopsis", data.synopsis);
    formData.append("files", data.bookCover[0]);
    formData.append("files", data.bookFile[0]);
    formData.append("language_uuid", data.languageUuid);

    console.log(data);

    return await api
      .post("/books/create", formData)
      .then(({ data }) => bookMapDto(data));
  }
}
