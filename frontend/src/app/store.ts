import { configureStore } from '@reduxjs/toolkit';
import { messageFormReducer } from '../store/messageFormSlice/messageFormSlice';

export const store = configureStore({
  reducer: {
    messageForm: messageFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
