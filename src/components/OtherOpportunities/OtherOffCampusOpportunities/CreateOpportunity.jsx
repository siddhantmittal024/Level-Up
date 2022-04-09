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

const CreateOtherOffCampusOpportunity = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const history = useHistory();
  //console.log(user);

  const initialValues = {
    tagline: '',
    opportunityType: '',
    lastDateToApply: new Date(),
    link: '',
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
      values.link === ''
    ) {
      //alert('Please fill all the fields');
      setShowAlert(true);
    } else {
      try {
        const otherOpportunityRef = doc(
          collection(db, 'other-off-campus-opportunities')
        );
        await setDoc(otherOpportunityRef, values);
        history.push('/other-opportunities/off-campus');
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
            to="/other-opportunities/off-campus"
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
              //color="primary"
              style={{ color: 'white', backgroundColor: '#75A2C9' }}
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

export default CreateOtherOffCampusOpportunity;
