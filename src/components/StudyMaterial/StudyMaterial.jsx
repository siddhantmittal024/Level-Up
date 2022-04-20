import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import SectionCard from '../SectionCard/SectionCard';
import { StudyMaterialTitles } from '../../utils/cardTitles';
import { Container } from '@mui/material';

const StudyMaterial = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }} my={{ xs: 6, sm: 8, md: 6 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 7 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          alignItems="center"
        >
          {StudyMaterialTitles.map((item, index) => {
            const url = item.title.replaceAll(' ', '-').toLowerCase();
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Link
                  to={`/study-material/${url}`}
                  style={{ textDecoration: 'none' }}
                >
                  <SectionCard title={item.title} imageUrl={item.imageUrl} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default StudyMaterial;
