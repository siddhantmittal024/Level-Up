import React from 'react';

const LoadingPage = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      width: '100vw',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <img style={{height: '6rem', width: '6rem'}} src="/src/images/loader.gif"></img>
  </div>
);

export default LoadingPage;
