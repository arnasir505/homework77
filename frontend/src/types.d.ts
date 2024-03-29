export interface MessageMutation {
  author: string;
  message: string;
  image: string | null;
}

export interface MessageMutationWithFileImg {
  author: string;
  message: string;
  image: File | null;
}