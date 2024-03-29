import { createAsyncThunk } from '@reduxjs/toolkit';
import { MessageMutation } from '../../types';
import axiosApi from '../../axiosApi';

export const postMessage = createAsyncThunk<void, MessageMutation>(
  'messages/post',
  async (messageMutation) => {
    try {
      const blobUrlToFile = async (blobUrl: string): Promise<File> => {
        const response = await fetch(blobUrl);
        const blob = await response.blob();

        const filename = blobUrl.substring(blobUrl.lastIndexOf('/') + 1);

        const file = new File([blob], filename, { type: blob.type });

        return file;
      };

      const formData = new FormData();

      formData.append('author', messageMutation.author);
      formData.append('message', messageMutation.message);

      if (messageMutation.image) {
        const imageAsFile = await blobUrlToFile(messageMutation.image);
        formData.append('image', imageAsFile);
      }

      await axiosApi.post('/messages', formData);
    } catch (err) {
      console.log(err);
    }
  }
);
