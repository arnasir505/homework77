import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { Message } from '../../types';

export const fetchMessages = createAsyncThunk('messages/fetch', async () => {
  try {
    const { data: messages } = await axiosApi.get<Message[]>('/messages');

    return messages;
  } catch (error) {
    console.log(error);
    return [];
  }
});
