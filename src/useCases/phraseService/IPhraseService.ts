import { Phrase } from "../../entities/Phrase.entity";

export interface PhraseData {
  uuid: string;
  content: string;
  author: string;
}

export interface IPhraseData {
  random: () => Promise<Phrase>;
}
