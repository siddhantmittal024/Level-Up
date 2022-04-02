import React from 'react';
import { Paper, Container } from '@mui/material';
import EnhancedTable from './Table/useTable';
import { offCampusJobsHeader } from './Table/tableHeader';

const tableHeader = offCampusJobsHeader;

const OffCampusJobs = () => {
  return (
    <Container>
      <Paper>
        <EnhancedTable tableHeader={tableHeader} />
      </Paper>
    </Container>
  );
};

export default OffCampusJobs;
