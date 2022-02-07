import React from 'react';
import { useSelector } from 'react-redux';
import AdminDashboard from '../Admin/Admin-Dashboard';
import CDCDashboard from '../Cdc/CDC-Dashboard';
import StudentDashboard from '../Student/Student-Dashboard';

const Dashboard = () => {
  const user = useSelector(state=>state.users.currentUser);
  //console.log(user);
  return (
    <div>
      {user.role === 'student' && <StudentDashboard />}
      {user.role === 'cdc' && <CDCDashboard />}
      {user.role === 'admin' && <AdminDashboard />}
    </div>
  );
}

export default Dashboard;
