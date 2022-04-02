import React from 'react';
import { Paper, Container } from '@mui/material';
import EnhancedTable from './OffCampusJobsTable/useTable';
import { offCampusJobsHeader } from './OffCampusJobsTable/tableHeader';

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
