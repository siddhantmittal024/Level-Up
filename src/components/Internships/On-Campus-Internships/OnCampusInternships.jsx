import React from 'react';
import { Paper, Container } from '@mui/material';
import EnhancedTable from './OnCampusInternTable/useTable';
import { OnCampusInternshipsHeader } from './OnCampusInternTable/tableHeader';

const tableHeader = OnCampusInternshipsHeader;

const OnCampusInternships = () => {
  return (
    <Container>
      <Paper>
        <EnhancedTable tableHeader={tableHeader} />
      </Paper>
    </Container>
  );
};

export default OnCampusInternships;
