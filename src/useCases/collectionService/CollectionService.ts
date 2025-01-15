import { collectionMapDto } from "../../mapDto/collectionMapDto";
import { api } from "../../services/api";

export class CollectionService {
  async list() {
    return await api.get("/collections").then((response) => response.data);
  }
  async create(name: string) {
    return await api
      .post("/collections", { name })
      .then(({ data }) => collectionMapDto(data));
  }
  async show(collectionId: string) {
    return await api
      .get(`/collections/${collectionId}`)
      .then((response) => response.data);
  }
  async syncBook({
    bookId,
    collectionId,
  }: {
    bookId: string;
    collectionId: string;
  }): Promise<void> {
    await api.post(`/collections/${collectionId}/books/${bookId}`);
  }
}
