import React from 'react';
import { useSelector } from 'react-redux';
import AdminDashboard from '../Admin/Admin-Dashboard';
import StudentDashboard from '../Student/Student-Dashboard';


import CoordinatorDashboard from '../Coodinator/Coodinator-Dashboard';
import Navbar from '../Navbar/Navbar';
import { Container } from '@mui/material';

const Dashboard = () => {

  const user = useSelector(state=>state.users.currentUser);
  return (
    <div>
      <Navbar name={user.name}/>
    <Container>
      {user.role === 'student' && <StudentDashboard />}
      {user.role === 'cdc' && <CoordinatorDashboard />}
      {user.role === 'admin' && <AdminDashboard />}
      {/* <Button variant='contained' onClick={handleSignOut}>Logout</Button> */}
    </Container>
    </div>
  );
}

export default Dashboard;
