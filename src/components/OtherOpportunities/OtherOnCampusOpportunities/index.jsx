import React from 'react';
import { Paper, Container } from '@mui/material';
import EnhancedTable from './OtherOnCampusOppTable/useTable';
import { OtherOnCampusOpportunitiesHeader } from './OtherOnCampusOppTable/tableHeader';

const tableHeader = OtherOnCampusOpportunitiesHeader;

const OtherOnCampusOpportunities = () => {
  return (
    <Container>
      <Paper>
        <EnhancedTable tableHeader={tableHeader} />
      </Paper>
    </Container>
  );
};

export default OtherOnCampusOpportunities;
