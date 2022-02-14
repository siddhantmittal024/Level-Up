import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const SectionCard = ()=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          //image="/static/images/cards/contemplative-reptile.jpg"
          alt="jobs "
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
            JOBS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
} 

export default SectionCard;