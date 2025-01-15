import { PhraseDTO } from "../dtos/phrase.dto";
import { Phrase } from "../entities/Phrase.entity";

export const phraseMapDto = (data: PhraseDTO): Phrase => {
  return {
    author: data.author,
    content: data.content,
    uuid: data.uuid,
  };
};
