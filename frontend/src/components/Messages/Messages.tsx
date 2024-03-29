import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectMessages } from '../../store/messagesSlice/messagesSlice';
import { fetchMessages } from '../../store/messagesSlice/messagesThunks';
import Card from '../Card/Card';

const Messages: React.FC = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);

  const getMessages = async () => {
    await dispatch(fetchMessages());
  };

  useEffect(() => {
    void getMessages();
  }, []);

  return (
    <Container sx={{ py: 3 }}>
      {messages.map((msg) => (
        <Card
          key={msg.id}
          author={msg.author}
          message={msg.message}
          image={msg.image}
        />
      ))}
    </Container>
  );
};

export default Messages;
