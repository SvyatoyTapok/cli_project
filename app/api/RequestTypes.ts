export interface Language {
  language: string;
  name: string;
}
export interface GetLangType {
  data: {
    languages: Language[];
  };
}

export type Translate = {
  detectedSourceLanguage: string;
  model: string;
  translatedText: string;
};

export type ResultPostRequestTranslateType = {
  data: {
    translations: Translate[];
  };
};
export type TranslateScreenType = {
  navigation: string;
};
