import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import appReducer from './_app';
import dataBaseReducer from './data-base';

export const store = configureStore({
  reducer: {
    appReducer,
    dataBaseReducer,
  },
});

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
export type TAppThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, Action<string>>;
