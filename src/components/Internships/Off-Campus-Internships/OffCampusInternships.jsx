import React from 'react';
import { Paper, Container } from '@mui/material';
import EnhancedTable from './OffCampusInternTable/useTable';
import { offCampusInternshipsHeader } from './OffCampusInternTable/tableHeader';

const tableHeader = offCampusInternshipsHeader;

const OffCampusInternships = () => {
  return (
    <Container>
      <Paper>
        <EnhancedTable tableHeader={tableHeader} />
      </Paper>
    </Container>
  );
};

export default OffCampusInternships;
