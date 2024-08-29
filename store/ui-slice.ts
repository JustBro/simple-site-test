import { UiState } from '@/types/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: UiState = {
  showVideoModal: false,
};

export const uiSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setShowVideoModal: (state, action: PayloadAction<boolean>) => {
      state.showVideoModal = action.payload;
    },
  },
});

export const { setShowVideoModal } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
