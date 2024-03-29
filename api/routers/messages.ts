import express from 'express';
import fileDb from '../fileDb';
import { MessageWithoutId } from '../types';

const messagesRouter = express.Router();

messagesRouter.get('/', async (_req, res) => {
  const messages = await fileDb.getItems();
  return res.send(messages);
});

messagesRouter.post('/', async (req, res) => {
  if (!req.body.message || req.body.message === '') {
    return res
      .status(400)
      .send({ error: 'Message must be present in the request' });
  }
  const messageData: MessageWithoutId = {
    author: req.body.author ? req.body.author : 'Anonymous',
    message: req.body.message,
    image: 'fakepath/image.jpg',
  };
  await fileDb.addItem(messageData);
  return res.send('OK');
});

export default messagesRouter;
