import { UiState } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UiState = {
  showVideo: false,
  showRequestModal: false,
};

export const uiSlice = createSlice({
  name: "ui-slice",
  initialState,
  reducers: {
    setShowVideo: (state, action: PayloadAction<boolean>) => {
      state.showVideo = action.payload;
    },
    setShowRequestModal: (state, action: PayloadAction<boolean>) => {
      state.showRequestModal = action.payload;
    },
  },
});

export const { setShowVideo, setShowRequestModal } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
