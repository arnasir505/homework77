import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { postMessage } from './messageFormThunks';

interface MessageFormState {
  data: {
    author: string;
    message: string;
    image: string | null;
  };
  loading: boolean;
  error: boolean;
}

const initialState: MessageFormState = {
  data: {
    author: '',
    message: '',
    image: null,
  },
  loading: false,
  error: false,
};

const messageFormSlice = createSlice({
  name: 'messageForm',
  initialState,
  reducers: {
    updateAuthor: (state, { payload: author }: PayloadAction<string>) => {
      state.data.author = author;
    },
    updateMessage: (state, { payload: message }: PayloadAction<string>) => {
      state.data.message = message;
    },
    updateImage: (state, { payload: image }: PayloadAction<string>) => {
      state.data.image = image;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postMessage.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(postMessage.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(postMessage.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const messageFormReducer = messageFormSlice.reducer;
export const { updateAuthor, updateMessage, updateImage } =
  messageFormSlice.actions;
export const selectMessageForm = (state: RootState) => state.messageForm.data;
export const selectMessageFormSubmitLoading = (state: RootState) =>
  state.messageForm.loading;
