import React from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import FileInput from '../UI/FileInput/FileInput';

const MessageForm: React.FC = () => {
  return (
    <Container sx={{ py: 3 }}>
      <form>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth type='text' name='author' label='Author' />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type='text'
              name='message'
              label='Message'
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FileInput
              onChange={() => console.log('changing')}
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
