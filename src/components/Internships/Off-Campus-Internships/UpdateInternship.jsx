import React, { useState, useEffect } from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Container, Box, TextField, Typography, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase.util';
import MuiAlert from '@mui/material/Alert';
import { Link, useParams } from 'react-router-dom';
import LoadingPage from '../../Loading/Loading';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UpdateInternship = () => {
  const history = useHistory();
  //const [intern, setintern] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [values, setValues] = useState(null);
  const [loading, setLoading] = useState(true);
  //console.log(user);
  const { id } = useParams();
  const internRef = doc(db, 'off-campus-internships', id);

  useEffect(() => {
    getDoc(internRef).then((doc) => {
      //setintern(doc.data());
      let lastDateApply = doc.data().lastDateToApply.toDate();
      let createdAtDate = doc.data().createdAt.toDate();
      setValues({
        ...doc.data(),
        createdAt: createdAtDate,
        lastDateToApply: lastDateApply
      });
      setLoading(false);
      //console.log(date);
    });
  }, []);

  //setValues({...values, lastDateToApply: values.lastDateToApply.toDate()});

  if (loading) {
    return <LoadingPage />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleDateChange = (date) => {
    setValues({ ...values, lastDateToApply: date });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (
      values.tagline === '' ||
      values.companyName === '' ||
      values.position === '' ||
      values.link === ''
    ) {
      setShowAlert(true);
    } else {
      try {
        values.batch = parseInt(values.batch);
        const internRef = doc(db, 'off-campus-internships', id);
        await updateDoc(internRef, values);
        history.push('/internships/off-campus');
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
            to="/interns/off-campus"
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
            Update Internship
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
              value={values.tagline}
              name="tagline"
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Company Name"
              value={values.companyName}
              name="companyName"
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Position"
              value={values.position}
              name="position"
              onChange={handleChange}
            />
            <TextField
              id="outlined-required"
              label="Batch"
              value={values.batch}
              name="batch"
              type="number"
              onChange={handleChange}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Last Date to Apply"
                //defaultValue={values.lastDateToApply}
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
              value={values.link}
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
              value={values.description}
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

export default UpdateInternship;
