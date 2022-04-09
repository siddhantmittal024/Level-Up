import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';
import { db } from '../../../firebase/firebase.util';
import { getDoc, doc } from 'firebase/firestore';
import LoadingPage from '../../Loading/Loading';

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const ViewJob = () => {
  const { id } = useParams();
  //console.log('ID', id);
  const [job, setJob] = useState(null);

  const jobRef = doc(db, 'off-campus-jobs', id);

  useEffect(() => {
    getDoc(jobRef).then((doc) => {
      setJob(doc.data());
      //console.log(doc.data());
    });
  }, []);

  //console.log(job);

  if (job !== null) {
    return (
      <Container align="center">
        <Box
          sx={{
            display: 'flex',
            bgcolor: '#F7F7F7',
            border: 0.2,
            borderColor: '#e8e8e8',
            //alignItems: 'flex-start',
            flexDirection: 'column',
            p: 1,
            mt: 10
          }}
          width="100%"
        >
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Link
              to="/jobs/off-campus"
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: 0
              }}
            >
              <Button
                variant="contained"
                //color="primary"
                sx={{ width: '100px', backgroundColor: '#75A2C9' }}
              >
                {`Back`}
              </Button>
            </Link>
            <Box
              sx={{ alignSelf: 'center', width: '100%', marginLeft: '-70px' }}
            >
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{ margin: 'auto' }}
              >
                {job.companyName}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ marginTop: '30px' }}
              >
                {job.tagline}
              </Typography>
            </Box>
            <Box sx={{ align: 'left' }}>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ marginTop: '30px' }}
              >
                {job.tagline}
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ marginTop: '30px' }}
              >
                {job.tagline}
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 1,
            m: 1,
            bgcolor: '#FFFFFF',
            borderRadius: 1,
            alignItems: 'flex-start',
            alignContent: 'stretch'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              bgcolor: '#F7F7F7',
              border: 0.2,
              borderColor: '#e8e8e8',
              alignItems: 'flex-start',
              flexDirection: 'column'
            }}
            width="100%"
          >
            <Link
              to="/jobs/off-campus"
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: 0
              }}
            >
              <Button
                variant="contained"
                //color="primary"
                sx={{ width: '100px', backgroundColor: '#75A2C9' }}
              >
                {`Back`}
              </Button>
            </Link>
            <Box ml={2} mr={2} width="100%" alignContent="flex-start" mt={4}>
              <Typography variant="h5" gutterBottom component="div">
                {job.tagline}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'space-between'
              }}
              m={4}
              width="100%"
            >
              <Box width="100%">
                <Typography my={2}>Company: {job.companyName}</Typography>
                <Typography>Batch: {job.batch}</Typography>
              </Box>
              <Box width="100%" m="auto">
                <Typography my={2}>Position: {job.position}</Typography>
                <Typography>
                  Last Date:
                  {job.lastDateToApply
                    .toDate()
                    .toLocaleDateString('en', options)}
                </Typography>
              </Box>
              <Typography my={2}>Description: {job.description}</Typography>
              <Typography my={2}>Link: {job.link}</Typography>
            </Box>
          </Box>
        </Box> */}
      </Container>
    );
  } else {
    return <LoadingPage />;
  }
};

export default ViewJob;
