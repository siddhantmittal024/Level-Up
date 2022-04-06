import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//import { useHistory } from 'react-router-dom';

const SectionCard = ({ title, imageUrl }) => {
  //const history = useHistory();
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#EBEBEB' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={'220'}
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
            textTransform="uppercase"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SectionCard;
