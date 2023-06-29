export interface Language {
  type: string;
}

export interface GetLangType {
  data: {
    languages: Language[];
  };
}

export type TranslatedTextType = {
  text: string;
  source: string;
  target: string;
};
export type ResultPostRequestTranslateType = {
  data: {
    translations: TranslatedTextType[];
  };
};
