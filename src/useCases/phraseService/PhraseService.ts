import { PhraseDTO } from "../../dtos/phrase.dto";
import { Phrase } from "../../entities/Phrase.entity";
import { phraseMapDto } from "../../mapDto/phraseMapDto";
import { api } from "../../services/api";
import { IPhraseData } from "./IPhraseService";

export class PhraseService implements IPhraseData {
  async random(): Promise<Phrase> {
    return await api
      .get<PhraseDTO>("/phrases/random")
      .then(({ data }) => phraseMapDto(data));
  }
}
