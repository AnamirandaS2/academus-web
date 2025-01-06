import { LanguageDTO } from "../dtos/language.dto";
import { Language } from "../entities/Language.entity";

export const languageMapDto = (data: LanguageDTO): Language => {
  return {
    name: data.name,
    slug: data.slug,
    uuid: data.uuid,
  };
};
