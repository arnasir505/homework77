import { configureStore } from '@reduxjs/toolkit';
import { messageFormReducer } from '../store/messageFormSlice/messageFormSlice';
import { messagesReducer } from '../store/messagesSlice/messagesSlice';

export const store = configureStore({
  reducer: {
    messageForm: messageFormReducer,
    messages: messagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
