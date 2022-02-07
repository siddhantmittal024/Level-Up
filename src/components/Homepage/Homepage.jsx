import React from 'react';
import { db, authentication } from '../../firebase/firebase.util';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../redux/userSlice';
import { getDoc, doc, setDoc } from 'firebase/firestore';

const Homepage = () => {
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      hd: 'snu.edu.in'
    });

    try {
      const signedInUser = await signInWithPopup(authentication, provider);
      //setUser(signedInUser);
      //console.log(signedInUser);

      const userr = {
        name: signedInUser.user.displayName,
        email: signedInUser.user.email,
        role: 'student'
      };

      //console.log(signedInUser.user.uid);

      const userRef = doc(db, 'users', signedInUser.user.uid);
      const userData = await getDoc(userRef);
      //console.log(userData.data());

      if (!userData.exists()) {
        await setDoc(doc(db, 'users', signedInUser.user.uid), userr);
        dispatch(userSlice.actions.addUser(userr));
      } else {
        dispatch(userSlice.actions.addUser(userData.data()));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = async () => {
    signOut(authentication)
      .then(() => {
        dispatch(userSlice.actions.signOut());
        console.log('user is signed out');
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div>
        <h1>Welcome to Level-Up!</h1>
        <button onClick={handleSignIn}>LOGIN</button>
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </div>
  );
};

export default Homepage;
