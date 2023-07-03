import {configureStore} from '@reduxjs/toolkit';
import languageReducer from './languagesSlice';

const store = configureStore({
  reducer: {
    languages: languageReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
