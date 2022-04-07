import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import SectionCard from '../../SectionCard/SectionCard';
import { AdminDashboardTitles } from '../../../utils/cardTitles';
//import Card from '../Card/Card';

export default function AdminDashboard() {
  return (
    <Box sx={{ flexGrow: 1 }} my={{ xs: 6, sm: 8, md: 10 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 7 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        alignItems="center"
      >
        {AdminDashboardTitles.map((item, index) => {
          const url = item.title.replace(' ', '-').toLowerCase();
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Link to={`/${url}`} style={{ textDecoration: 'none' }}>
                <SectionCard title={item.title} imageUrl={item.imageUrl} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
