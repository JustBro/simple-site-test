import { configureStore } from '@reduxjs/toolkit';
import { uiReducer } from './ui-slice';

export const store = configureStore({
  reducer: {
    uiReducer: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
