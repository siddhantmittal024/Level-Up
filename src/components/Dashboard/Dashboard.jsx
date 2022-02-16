import React from 'react';
import { useSelector } from 'react-redux';
import AdminDashboard from '../Admin/Admin-Dashboard';
import StudentDashboard from '../Student/Student-Dashboard';

import CoordinatorDashboard from '../Coodinator/Coodinator-Dashboard';
import { Container } from '@mui/material';

const Dashboard = () => {
  const user = useSelector(state=>state.users.currentUser);
  return (
    <Container>
      {user.role === 'student' && <StudentDashboard />}
      {user.role === 'coordinator' && <CoordinatorDashboard />}
      {user.role === 'admin' && <AdminDashboard />}
    </Container>
  );
}

export default Dashboard;
