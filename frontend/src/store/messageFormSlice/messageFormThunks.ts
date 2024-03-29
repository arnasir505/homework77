import { createAsyncThunk } from '@reduxjs/toolkit';
import { MessageWithoutId } from '../../types';
import axiosApi from '../../axiosApi';

export const postMessage = createAsyncThunk<void, MessageWithoutId>(
  'messages/post',
  async (message) => {
    try {
      const blobUrlToFile = async (blobUrl: string): Promise<File> => {
        const response = await fetch(blobUrl);
        const blob = await response.blob();

        const filename = blobUrl.substring(blobUrl.lastIndexOf('/') + 1);

        const file = new File([blob], filename, { type: blob.type });

        return file;
      };

      const formData = new FormData();

      formData.append('author', message.author);
      formData.append('message', message.message);

      if (message.image) {
        const imageAsFile = await blobUrlToFile(message.image);
        formData.append('image', imageAsFile);
      }

      await axiosApi.post('/messages', formData);
    } catch (err) {
      console.log(err);
    }
  }
);
