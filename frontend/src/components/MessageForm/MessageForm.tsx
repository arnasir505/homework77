import React from 'react';
import { Container, Grid, TextField } from '@mui/material';
import FileInput from '../UI/FileInput/FileInput';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  clearForm,
  selectMessageForm,
  selectMessageFormSubmitLoading,
  updateAuthor,
  updateImage,
  updateMessage,
} from '../../store/messageFormSlice/messageFormSlice';
import { postMessage } from '../../store/messageFormSlice/messageFormThunks';
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';
import { fetchMessages } from '../../store/messagesSlice/messagesThunks';

const MessageForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector(selectMessageForm);
  const loading = useAppSelector(selectMessageFormSubmitLoading);

  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files[0]) {
      const localImageUrl = window.URL.createObjectURL(files[0]);
      dispatch(updateImage(localImageUrl));
    }
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(postMessage(form));
    dispatch(clearForm());
    dispatch(fetchMessages());
  };

  return (
    <Container sx={{ py: 3 }}>
      <form onSubmit={onFormSubmit}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type='text'
              name='author'
              label='Author'
              value={form.author}
              onChange={(e) => dispatch(updateAuthor(e.target.value))}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type='text'
              name='message'
              label='Message'
              required
              value={form.message}
              onChange={(e) => dispatch(updateMessage(e.target.value))}
            />
          </Grid>
          <Grid item xs={12}>
            <FileInput
              onChange={fileInputChangeHandler}
              name='image'
              label='Image'
            />
          </Grid>
          <Grid item>
            <LoadingButton
              type='submit'
              color='violet'
              variant='contained'
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition='end'
            >
              <span>Send</span>
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default MessageForm;
