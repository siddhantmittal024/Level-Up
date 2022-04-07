import React from 'react';
import { Paper, Container } from '@mui/material';
import EnhancedTable from './UserTable/useTable';
import { UserTableHeader } from './UserTable/tableHeader';

const tableHeader = UserTableHeader;

const usersData = () => {
  //console.log('HELO');
  return (
    <Container>
      <Paper>
        <EnhancedTable tableHeader={tableHeader} />
      </Paper>
    </Container>
  );
};

export default usersData;
