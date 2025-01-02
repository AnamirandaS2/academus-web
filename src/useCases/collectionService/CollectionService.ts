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
}
