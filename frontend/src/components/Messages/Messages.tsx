import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectMessages,
  selectMessagesLoading,
} from '../../store/messagesSlice/messagesSlice';
import { fetchMessages } from '../../store/messagesSlice/messagesThunks';
import Card from '../Card/Card';

const Messages: React.FC = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);
  const loading = useAppSelector(selectMessagesLoading);

  const getMessages = async () => {
    await dispatch(fetchMessages());
  };

  useEffect(() => {
    void getMessages();
  }, []);

  let content = (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress size={'3rem'} sx={{ mt: 2 }} />
    </Box>
  );

  if (messages.length > 0 && !loading) {
    content = (
      <Grid container direction={'column-reverse'}>
        {messages.map((msg) => (
          <Card
            key={msg.id}
            author={msg.author}
            message={msg.message}
            image={msg.image}
          />
        ))}
      </Grid>
    );
  } else if (messages.length === 0 && !loading) {
    content = (
      <Typography variant='h5' textAlign={'center'} mt={3}>
        No messages yet. Send first message!
      </Typography>
    );
  }

  return <Container sx={{ py: 3 }}>{content}</Container>;
};

export default Messages;
