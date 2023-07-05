import {createSelector} from '@reduxjs/toolkit';
import { selectLangList } from '../store/selectors';
import { selectFavoriteList } from '../store/selectors';
export const selectAllLangs = createSelector(
  [selectLangList, selectFavoriteList],
  (allLanguages, allFavorites) => {
      return allFavorites.concat(allLanguages)
  },
);
