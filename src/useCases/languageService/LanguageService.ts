import { LanguageDTO } from "../../dtos/language.dto";
import { Language } from "../../entities/Language.entity";
import { languageMapDto } from "../../mapDto/languageMapDto";
import { api } from "../../services/api";

export class LanguageService {
  async getAll(): Promise<Language[]> {
    return await api
      .get<LanguageDTO[]>("/languages")
      .then(({ data }) => data.map(languageMapDto));
  }
}
