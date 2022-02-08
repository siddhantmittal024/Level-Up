import React from 'react';
import { db, authentication } from '../../firebase/firebase.util';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../redux/userSlice';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

const Homepage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      hd: 'snu.edu.in'
    });

    try {
      const signedInUser = await signInWithPopup(authentication, provider);

      const userr = {
        name: signedInUser.user.displayName,
        email: signedInUser.user.email,
        role: 'student'
      };

      const userRef = doc(db, 'users', signedInUser.user.uid);
      const userData = await getDoc(userRef);

      if (!userData.exists()) {
        await setDoc(doc(db, 'users', signedInUser.user.uid), userr);
        dispatch(userSlice.actions.addUser(userr));
        history.push('/dashboard');
      } else {
        dispatch(userSlice.actions.addUser(userData.data()));
        history.push('/dashboard');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <h1>Welcome to Level-Up!</h1>
        <Button variant="contained" onClick={handleSignIn}>
          LOGIN
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
