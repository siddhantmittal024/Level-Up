import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase.util';
import { getDocs, collection } from 'firebase/firestore';
import LoadingPage from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { Paper, Toolbar, Container, Button } from '@mui/material';
import EnhancedTable from '../Table/useTable';
import { offCampusJobsHeader } from '../Table/tableHeader';

const tableHeader = offCampusJobsHeader;

const OffCampusJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const jobsRef = collection(db, 'off-campus-jobs');

  useEffect(() => {
    const getJobs = async () => {
      try {
        const jobsData = await getDocs(jobsRef);
        setJobs(jobsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    getJobs();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Container>
      <Paper>
        <EnhancedTable jobs={jobs} tableHeader={tableHeader} />
      </Paper>
    </Container>
    // <Container align="center">
    //   <Box>
    //     <Typography variant="h3" gutterBottom component="div" mt={4}>
    //       Off-Campus Jobs
    //     </Typography>
    //   </Box>
    //   <Box>
    //     <input></input>
    //   </Box>
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       p: 1,
    //       m: 1,
    //       bgcolor: '#FFFFFF',
    //       borderRadius: 1,
    //       alignItems: 'flex-start',
    //       alignContent: 'stretch'
    //     }}
    //   >
    //     {jobs.map((job) => (
    //       <Box
    //         sx={{
    //           display: 'flex',
    //           bgcolor: '#F7F7F7',
    //           border: 0.2,
    //           borderColor: '#e8e8e8',
    //           alignItems: 'flex-start',
    //           flexDirection: 'column'
    //         }}
    //         width="100%"
    //         key={job.id}
    //       >
    //         <Link
    //           key={job.id}
    //           to={`/off-campus-jobs/${job.id}`}
    //           style={{ textDecoration: 'none', width: '100%', color: 'black' }}
    //         >
    //           <Box ml={2} mr={2} width="100%" alignContent="flex-start" mt={4}>
    //             <Typography variant="h5" gutterBottom component="div">
    //               {job.tagline}
    //             </Typography>
    //           </Box>
    //           <Box
    //             sx={{
    //               display: 'flex',
    //               flexDirection: 'row',
    //               alignContent: 'space-between'
    //             }}
    //             m={4}
    //             width="100%"
    //           >
    //             <Box width="100%">
    //               <Typography my={2}>Company: {job.company}</Typography>
    //               <Typography>Batch: {job.batch}</Typography>
    //             </Box>
    //             <Box width="100%" m="auto">
    //               <Typography my={2}>Position: {job.position}</Typography>
    //               <Typography>
    //                 Last Date:
    //                 {job.last_date.toDate().toLocaleDateString('en', options)}
    //               </Typography>
    //             </Box>
    //           </Box>
    //         </Link>
    //       </Box>
    //     ))}
    //   </Box>
    // </Container>
  );
};

export default OffCampusJobs;
