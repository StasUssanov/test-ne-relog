import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TAppEntity = {
  id?: number
  index?: number
}

export type TAppState = {
  selectedApp: TAppEntity | null
}

const initialState: TAppState = {
  selectedApp: null,
};

export const marginSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedApp(state, action: PayloadAction<TAppState>) {
      if (action.payload.selectedApp !== undefined) state.selectedApp = action.payload.selectedApp;
    },
  },
});

export const {
  setSelectedApp,
} = marginSlice.actions;
export default marginSlice.reducer;
