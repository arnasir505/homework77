import { createAsyncThunk } from '@reduxjs/toolkit';
import { MessageMutation } from '../../types';
import axiosApi from '../../axiosApi';

export const postMessage = createAsyncThunk<void, MessageMutation>(
  'messages/post',
  async (messageMutation) => {
    try {
      const getUrlExtension = (url: string): string => {
        return url.split(/[#?]/)[0].split('.').pop()!.trim();
      };

      const onImageEdit = async (imgUrl: string): Promise<File> => {
        var imgExt = getUrlExtension(imgUrl);

        const response = await fetch(imgUrl);
        const blob = await response.blob();
        const file = new File([blob], 'profileImage.' + imgExt, {
          type: blob.type,
        });
        return file;
      };

      const formData = new FormData();

      formData.append('author', messageMutation.author);
      formData.append('message', messageMutation.message);

      if (messageMutation.image) {
        const imageAsFile = await onImageEdit(messageMutation.image);
        formData.append('image', imageAsFile);
      }

      await axiosApi.post('/messages', formData);
    } catch (err) {
      console.log(err);
    }
  }
);
