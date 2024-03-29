import { createSlice } from '@reduxjs/toolkit';
import { Message } from '../../types';
import { RootState } from '../../app/store';

interface MessagesState {
  data: Message[];
  loading: boolean;
  error: boolean;
}

const initialState: MessagesState = {
  data: [],
  loading: false,
  error: false,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
});

export const messagesReducer = messagesSlice.reducer;
export const selectMessages = (state: RootState) => state.messages.data;
export const selectMessagesLoading = (state: RootState) =>
  state.messages.loading;
