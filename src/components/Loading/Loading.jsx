import { Container } from '@mui/material';
import React from 'react';

const LoadingPage = () => (
  <Container
    style={{
      height: '100vh',
      display: 'flex',
      width: '100vw',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <img
      style={{ height: '6rem', width: '6rem' }}
      src="/images/loader.gif"
    ></img>
  </Container>
);

export default LoadingPage;
