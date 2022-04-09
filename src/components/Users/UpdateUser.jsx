import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  MenuItem
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase.util';
import { Link, useParams } from 'react-router-dom';
import LoadingPage from '../Loading/Loading';

const roles = ['student', 'coordinator', 'admin'];

const UpdateUser = () => {
  const history = useHistory();
  const [values, setValues] = useState(null);
  const [loading, setLoading] = useState(true);
  //console.log(user);
  const { id } = useParams();
  const userRef = doc(db, 'users', id);

  useEffect(() => {
    getDoc(userRef).then((doc) => {
      //setJob(doc.data());
      setValues({
        ...doc.data()
      });
      setLoading(false);
      //console.log(date);
    });
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setValues({ ...values, role: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const userRef = doc(db, 'users', id);
      await updateDoc(userRef, values);
      history.push('/users');
    } catch (err) {
      console.log('Error:', err);
    }
  };

  return (
    <>
      <Container align="center" sx={{ marginTop: '50px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '80%' }}>
          <Link
            to="/users"
            style={{
              textDecoration: 'none',
              color: 'black',
              marginRight: 0
            }}
          >
            <Button
              variant="contained"
              sx={{ width: '100px', backgroundColor: '#75A2C9' }}
            >
              {`Back`}
            </Button>
          </Link>

          <Typography
            variant="h4"
            gutterBottom
            component="div"
            width="75%"
            align="center"
          >
            Update User
          </Typography>
        </Box>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            width: '500px',
            maxWidth: '100%'
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginTop={4}
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField
            id="outlined-required"
            label="Name"
            value={values.name}
            name="name"
            inputProps={{ readOnly: true }}
            sx={{ minWidth: '45%' }}
          />
          <TextField
            id="outlined-required"
            label="Email"
            value={values.email}
            name="email"
            inputProps={{ readOnly: true }}
            sx={{ minWidth: '45%' }}
          />

          <TextField
            select
            id="role"
            value={values.role}
            label="Role"
            sx={{ minWidth: '45%' }}
            onChange={handleChange}
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>

          <Button
            onClick={onSubmit}
            variant="contained"
            //color="primary"
            style={{
              color: 'white',
              marginTop: '30px',
              backgroundColor: '#75A2C9'
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default UpdateUser;
