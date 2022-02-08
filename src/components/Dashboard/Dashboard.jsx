import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import AdminDashboard from '../Admin/Admin-Dashboard';
import CDCDashboard from '../Cdc/CDC-Dashboard';
import StudentDashboard from '../Student/Student-Dashboard';
import { signOut } from 'firebase/auth';
import { userSlice } from '../../redux/userSlice';
import { authentication } from '../../firebase/firebase.util';
import { useHistory } from 'react-router-dom';
import {Button} from '@mui/material';

const Dashboard = () => {

  const user = useSelector(state=>state.users.currentUser);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(authentication)
      .then(() => {
        dispatch(userSlice.actions.signOut());
        history.push('/');
        console.log('user is signed out');
      })
      .catch((err) => {
        console.log(err)
      });
  };
  //console.log(user);
  return (
    <div>
      {user.role === 'student' && <StudentDashboard />}
      {user.role === 'cdc' && <CDCDashboard />}
      {user.role === 'admin' && <AdminDashboard />}
      <Button variant='contained' onClick={handleSignOut}>Logout</Button>
    </div>
  );
}

export default Dashboard;
