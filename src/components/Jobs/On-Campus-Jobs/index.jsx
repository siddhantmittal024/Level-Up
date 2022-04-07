import React from 'react';
import { Paper, Container } from '@mui/material';
import EnhancedTable from './OnCampusJobsTable/useTable';
import { OnCampusJobsHeader } from './OnCampusJobsTable/tableHeader';

const tableHeader = OnCampusJobsHeader;

const OnCampusJobs = () => {
  return (
    <Container>
      <Paper>
        <EnhancedTable tableHeader={tableHeader} />
      </Paper>
    </Container>
  );
};

export default OnCampusJobs;
