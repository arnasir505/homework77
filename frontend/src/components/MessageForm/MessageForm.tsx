import React from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import FileInput from '../UI/FileInput/FileInput';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectMessageForm,
  updateAuthor,
  updateImage,
  updateMessage,
} from '../../store/messageFormSlice/messageFormSlice';

const MessageForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { author, message } = useAppSelector(selectMessageForm);

  const fileInputChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { files } = e.target;

    if (files) {
      console.log(files[0]);
      const localImageUrl = window.URL.createObjectURL(files[0]);
      await dispatch(updateImage(localImageUrl));
    }
  };

  return (
    <Container sx={{ py: 3 }}>
      <form>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type='text'
              name='author'
              label='Author'
              value={author}
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
              value={message}
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
            <Button type='submit' variant='contained' color='violet'>
              SEND
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default MessageForm;
