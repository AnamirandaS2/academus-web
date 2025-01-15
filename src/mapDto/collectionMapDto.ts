import { CollectionDTO } from "../dtos/collection.dto";
import { Collection } from "../entities/Collection.entity";

export const collectionMapDto = (data: CollectionDTO): Collection => {
  return {
    books: data.books,
    name: data.name,
    uuid: data.uuid,
  };
};
