import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';
import { db } from '../../../firebase/firebase.util';
import { getDoc, doc } from 'firebase/firestore';
import LoadingPage from '../../Loading/Loading';

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const ViewOnCampusJob = () => {
  const { id } = useParams();
  //console.log('ID', id);
  const [job, setJob] = useState(null);

  const jobRef = doc(db, 'on-campus-jobs', id);

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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link
            to="/jobs/off-campus"
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
            variant="h3"
            gutterBottom
            component="div"
            mt={4}
            align="center"
            width="100%"
          >
            On-Campus Jobs
          </Typography>
        </Box>
        <Box
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
        </Box>
      </Container>
    );
  } else {
    return <LoadingPage />;
  }
};

export default ViewOnCampusJob;
