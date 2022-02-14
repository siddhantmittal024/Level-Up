import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import SectionCard from '../Card/Card';
//import Card from '../Card/Card';

const titles = ['Jobs','Internships','Higher Education', "Study Material", "Other Opportunities" ]

export default function StudentDashboard() {
  return (
    <Box sx={{ flexGrow: 1 }} my={{xs: 8, sm: 10 , md: 12 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 7 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        alignItems="center">
      
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <SectionCard/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
