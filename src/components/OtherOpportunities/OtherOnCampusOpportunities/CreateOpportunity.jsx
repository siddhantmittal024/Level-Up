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
import { db } from '../../../firebase/firebase.util';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreateOtherOnCampusOpportunity = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const history = useHistory();
  //console.log(user);

  const initialValues = {
    tagline: '',
    opportunityType: '',
    lastDateToApply: new Date(),
    link: '',
    contact: '',
    description: '',
    createdAt: new Date(),
    userID: user.uid
  };
  const [values, setValues] = useState(initialValues);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleDateChange = (date) => {
    //console.log(date);
    setValues({ ...values, lastDateToApply: date });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    //console.log(values);
    if (
      values.tagline === '' ||
      values.opportunityType === '' ||
      values.link === '' ||
      values.contact === ''
    ) {
      //alert('Please fill all the fields');
      setShowAlert(true);
    } else {
      try {
        const otherOpportunityRef = doc(
          collection(db, 'other-on-campus-opportunities')
        );
        await setDoc(otherOpportunityRef, values);
        history.push('/other-opportunities/on-campus');
      } catch (err) {
        console.log('Error:', err);
      }
    }
  };

  return (
    <>
      <Container align="center" sx={{ marginTop: '50px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '80%' }}>
          <Link
            to="/other-opportunities/on-campus"
            style={{
              textDecoration: 'none',
              color: 'black',
              marginRight: 0
            }}
          >
            <Button variant="contained" color="primary" sx={{ width: '100px' }}>
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
            Add Opportunity
          </Typography>
        </Box>
        <>
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
              label="Opportunity Type"
              defaultValue=""
              name="opportunityType"
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Person to Contact"
              defaultValue=""
              name="contact"
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
              sx={{ minWidth: '84%' }}
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
          {showAlert ? (
            <Alert
              severity="error"
              sx={{ width: 260, marginTop: 5 }}
              onClose={() => setShowAlert(false)}
            >
              Please fill the required fields!
            </Alert>
          ) : null}
        </>
      </Container>
    </>
  );
};

export default CreateOtherOnCampusOpportunity;
