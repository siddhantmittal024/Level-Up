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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            variant="h3"
            gutterBottom
            component="div"
            mt={4}
            align="center"
            width="100%"
          >
            Other Off-Campus Opportunity
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
                {otherOpportunity.tagline}
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
              <Box width="100%" m="auto">
                <Typography>
                  Opportunity-Type: {otherOpportunity.opportunityType}
                </Typography>
              </Box>
              <Box width="100%" m="auto">
                <Typography>
                  Last Date:
                  {otherOpportunity.lastDateToApply
                    .toDate()
                    .toLocaleDateString('en', options)}
                </Typography>
              </Box>
              <Box width="100%" m="auto">
                <Typography my={2}>
                  Description: {otherOpportunity.description}
                </Typography>
              </Box>
              <Typography>Link: {otherOpportunity.link}</Typography>
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
