import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

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
});

export const messageFormReducer = messageFormSlice.reducer;
export const { updateAuthor, updateMessage, updateImage } =
  messageFormSlice.actions;
export const selectMessageForm = (state: RootState) => state.messageForm.data;
export const selectMessageFormSubmitLoading = (state: RootState) =>
  state.messageForm.loading;
