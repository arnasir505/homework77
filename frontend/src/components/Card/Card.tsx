import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { apiUrl } from '../../constants';

interface Props {
  author: string;
  message: string;
  image: string | null;
}

const CardItem: React.FC<Props> = ({ author, message, image }) => {
  return (
    <Card sx={{ my: 3 }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {author}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {message}
        </Typography>
        {image ? (
          <img
            src={apiUrl + '/' + image}
            alt='image'
            style={{ maxWidth: '200px', height: 'auto', marginTop: '20px' }}
          />
        ) : null}
      </CardContent>
    </Card>
  );
};

export default CardItem;
