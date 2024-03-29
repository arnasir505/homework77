import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Message } from '../../types';
import { RootState } from '../../app/store';
import { fetchMessages } from './messagesThunks';

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        fetchMessages.fulfilled,
        (state, { payload: messages }: PayloadAction<Message[]>) => {
          state.loading = false;
          state.data = messages;
        }
      )
      .addCase(fetchMessages.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const messagesReducer = messagesSlice.reducer;
export const selectMessages = (state: RootState) => state.messages.data;
export const selectMessagesLoading = (state: RootState) =>
  state.messages.loading;
