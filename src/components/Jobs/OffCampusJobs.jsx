import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase.util';
import { getDocs, collection } from 'firebase/firestore';
import LoadingPage from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { Paper, Container } from '@mui/material';
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
  );
};

export default OffCampusJobs;
