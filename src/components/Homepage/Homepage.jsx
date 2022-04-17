import React from 'react';
import { db, authentication } from '../../firebase/firebase.util';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../redux/userSlice';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import { Button, Container, Paper, Box, Typography } from '@mui/material';

const styles = {
  paperContainer: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${'/images/bg.jpg'})`
    //alignItems: 'center'
  }
};

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
    <Paper style={styles.paperContainer}>
      <Box
        minHeight="100vh"
        //minWidth="50vw"
        align="center"
        display="flex"
        //alignItems="center"
        justifyContent="center"
        //flexDirection="column"
      >
        <Box
          display="flex"
          flexDirection="column"
          align="center"
          //height="100vh"
          margin="auto"
          //marginTop="auto"
          sx={{
            backgroundColor: '#EBEBEB',
            minWidth: 345,
            minHeight: 250,
            opacity: [0.9]
          }}
        >
          <Typography variant="h3" align="center" sx={{ margin: 'auto' }}>
            level <strong>up</strong>
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{ color: '#868786', fontWeight: '500', maxWidth: 345 }}
          >
            A career development portal for college students.
          </Typography>

          <Button
            variant="contained"
            onClick={handleSignIn}
            sx={{
              width: 130,
              margin: 'auto',
              height: 50,
              backgroundColor: '#75A2C9',
              opacity: 1,
              fontWeight: 'bold',
              fontSize: 18,
              '&:hover': {
                backgroundColor: '#5C8FB2'
              }
            }}
          >
            LOGIN
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Homepage;
