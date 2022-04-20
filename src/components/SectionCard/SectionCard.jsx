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
    <Card sx={{ maxWidth: 280, backgroundColor: '#EBEBEB', boxShadow:5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={'200'}
          image={imageUrl}
          alt={title}
        />
        <CardContent sx={{padding:'0px'}}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="center"
            //alignItems="center"
            textTransform="uppercase"
            sx={{padding:'5px', marginTop:'7px'}}
            
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SectionCard;
