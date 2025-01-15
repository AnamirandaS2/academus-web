import { Book } from "./Book.entity";

export type Collection = {
  uuid: string;
  name: string;
  books: Book[];
};
