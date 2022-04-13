import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';
import { db } from '../../../firebase/firebase.util';
import { getDoc, doc } from 'firebase/firestore';
import LoadingPage from '../../Loading/Loading';

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const ViewOtherOffCampusOpportunity = () => {
  const { id } = useParams();
  //console.log('ID', id);
  const [otherOpportunity, setOtherOpportunity] = useState(null);

  const otherOpportunityRef = doc(db, 'other-off-campus-opportunities', id);

  useEffect(() => {
    getDoc(otherOpportunityRef).then((doc) => {
      setOtherOpportunity(doc.data());
      //console.log(doc.data());
    });
  }, []);

  //console.log(intern);

  if (otherOpportunity !== null) {
    return (
      <Container align="center">
        <Box
          sx={{
            display: 'flex',
            bgcolor: '#F7F7F7',
            border: 0.2,
            borderColor: '#e8e8e8',
            flexDirection: 'column',
            p: 1,
            mt: 6,
            mb: 10
          }}
          width="100%"
        >
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Link
              to="/other-opportunities/off-campus"
              style={{
                textDecoration: 'none',
                color: 'black',
                marginLeft: '20px'
                //marginRight: 0
              }}
            >
              <Button
                variant="contained"
                sx={{ width: '100px', backgroundColor: '#75A2C9' }}
              >
                {`Back`}
              </Button>
            </Link>
            <Box
              sx={{ alignSelf: 'center', width: '100%', marginLeft: '-120px' }}
            >
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{ margin: 'auto' }}
              >
                {otherOpportunity.tagline}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
              marginLeft: '20px',
              marginTop: '40px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px'
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ fontWeight: 'bold', marginRight: '15px' }}
              >
                Opportunity Type:
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                {otherOpportunity.opportunityType}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', marginBottom: '20px' }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ fontWeight: 'bold', marginRight: '15px' }}
              >
                Description:
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{
                  maxWidth: '85%',
                  textAlign: 'justify'
                }}
              >
                {otherOpportunity.description}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                marginTop: '20px'
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ fontWeight: 'bold', marginRight: '15px' }}
              >
                Link:
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                <a
                  href={`${otherOpportunity.link}`}
                  style={{ color: '#75A2C9' }}
                  target="_blank"
                >
                  {otherOpportunity.link}
                </a>
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px'
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ fontWeight: 'bold', marginRight: '10px' }}
              >
                Last Date to Apply:
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                {otherOpportunity.lastDateToApply
                  .toDate()
                  .toLocaleDateString('en', options)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    );
  } else {
    return <LoadingPage />;
  }
};

export default ViewOtherOffCampusOpportunity;
