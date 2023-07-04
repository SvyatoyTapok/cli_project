import { RootState } from "./index";

export const selectLangList = (state: RootState) => state.languages.languages;

export const selectFavoriteList = (state: RootState) => state.favorite.favorite;