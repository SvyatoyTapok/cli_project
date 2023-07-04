import {createAction, createReducer} from '@reduxjs/toolkit';
import { Language } from '../api/RequestTypes';

export const addFavorite = createAction<Language>('addFavorite');
export const deleteFavorite = createAction<string>('deleteFavorite');

export const favoriteLangsReduser = createReducer<{favorite: Language[]}>({favorite: []}, bulder =>
  bulder.addCase(addFavorite, (state, action) => ({
    ...state,
    favorite: [...state.favorite, action.payload],
  })).addCase(deleteFavorite, (state, action) => ({
    ...state,
    favorite: state.favorite.filter(favItem => favItem.language != action.payload),
  })),
);
