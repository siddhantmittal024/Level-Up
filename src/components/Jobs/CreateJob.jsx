import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { getAuth } from 'firebase/auth';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase.util';

const CreateJob = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const history = useHistory();
  //console.log(user);

  const initialValues = {
    tagline: '',
    companyName: '',
    position: '',
    batch: '',
    lastDateToApply: new Date(),
    link: '',
    description: '',
    createdAt: new Date(),
    userID: user.uid
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleDateChange = (date) => {
    setValues({ ...values, lastDateToApply: date });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    try {
      const jobRef = doc(collection(db, 'off-campus-jobs'));
      await setDoc(jobRef, values);
      history.push('/jobs/off-campus');
    } catch (err) {
      console.log('Error:', err);
    }
  };

  return (
    <>
      <Container align="center" sx={{ marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom component="div">
          Add Job
        </Typography>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            width: '500px',
            maxWidth: '100%'
          }}
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField
            required
            id="outlined-required"
            label="Tagline"
            defaultValue=""
            name="tagline"
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Company Name"
            defaultValue=""
            name="companyName"
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Position"
            defaultValue=""
            name="position"
            onChange={handleChange}
          />
          <TextField
            id="outlined-required"
            label="Batch"
            defaultValue=""
            name="batch"
            onChange={handleChange}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Last Date to Apply"
              value={values.lastDateToApply}
              name="lastDateToApply"
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField
            required
            id="outlined-required"
            label="Link"
            defaultValue=""
            name="link"
            onChange={handleChange}
          />
          <TextField
            id="fullWidth"
            label="Description"
            multiline
            rows={3}
            maxRows={15}
            sx={{ minWidth: '90%' }}
            name="description"
            //value={value}
            onChange={handleChange}
          />
          <Button
            onClick={onSubmit}
            variant="contained"
            color="primary"
            style={{ color: 'white' }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default CreateJob;
