import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Language} from '../api/RequestTypes';

export type initialStateType = {
  languages: Language[];
  loading: boolean;
  error: Boolean;
};
export const fetchLanguages = createAsyncThunk<Language[], string>(
  'languages/fetchLanguages',
  async target => {
    const API_KEY = 'AIzaSyCkN4oK4kgk-sxQVpmQ0xzfcEm4MMc9zxg';
    const baseUrl =
      'https://translation.googleapis.com/language/translate/v2/languages';
    const url = new URL(baseUrl);
    const params = {
      target: target,
      key: API_KEY,
    };

    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value),
    );

    const res = await fetch(url.href, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await res.json();
    
    return result.data.languages;
    
  },
);
export const initialState: initialStateType = {
  languages: [],
  loading: false,
  error: false,
};
const languageSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLanguages.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchLanguages.fulfilled, (state, action) => {
        state.loading = false;
        state.languages = action.payload;
      });
  },
});

export default languageSlice.reducer;
