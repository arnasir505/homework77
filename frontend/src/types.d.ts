export interface Message {
  id: string;
  author: string;
  message: string;
  image: string | null;
}

export type MessageWithoutId = Omit<Message, 'id'>;