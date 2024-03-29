import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MessageFormState {
  data: {
    author: string | null;
    message: string;
    image: File | null;
  };
  loading: boolean;
  error: boolean;
}

const initialState: MessageFormState = {
  data: {
    author: null,
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
    updateImage: (state, { payload: image }: PayloadAction<File>) => {
      state.data.image = image;
    },
  },
});

export const messageFormReducer = messageFormSlice.reducer;
