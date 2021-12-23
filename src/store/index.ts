import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import dataBaseReducer from './data-base';

export const store = configureStore({
  reducer: {
    dataBaseReducer,
  },
});

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
export type TAppThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, Action<string>>;
