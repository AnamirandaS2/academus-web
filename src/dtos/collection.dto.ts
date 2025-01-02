import { Book } from "../entities/Book.entity";

export type CollectionDTO = {
  uuid: string;
  name: string;
  books: Book[];
};
