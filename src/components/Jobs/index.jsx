import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import SectionCard from '../SectionCard/SectionCard';
import { Box, Container, Typography } from '@mui/material';
import { SubSectiontitles } from '../../utils/cardTitles';

const Jobs = () => {
  return (
    <Box my={{ xs: 12, sm: 10, md: 20 }} mx={{ xs: 4 }}>
      <Grid
        container
        spacing={{ xs: 12, sm: 12, md: 2 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {SubSectiontitles.map((item, index) => {
          const url = item.title.replace(' ', '-').toLowerCase();
          return (
            <Grid item xs={2} sm={4} md={6} key={index} align="center">
              <Link to={`/jobs/${url}`} style={{ textDecoration: 'none' }}>
                <SectionCard title={item.title} imageUrl={item.imageUrl} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Jobs;
