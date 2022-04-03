import React from 'react';
import { Paper, Container } from '@mui/material';
import EnhancedTable from './Table/useTable';
import { OtherOffCampusOpportunitiesHeader } from './Table/tableHeader';

const tableHeader = OtherOffCampusOpportunitiesHeader;

const OtherOffCampusOpportunities = () => {
  return (
    <Container>
      <Paper>
        <EnhancedTable tableHeader={tableHeader} />
      </Paper>
    </Container>
  );
};

export default OtherOffCampusOpportunities;
