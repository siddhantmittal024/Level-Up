import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
//import Header from '../components/Header';
import { useSelector } from 'react-redux';
import LoadingPage from '../Loading/Loading';

export const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        useSelector((state) => state.users.currentUser) ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <>{isAuthenticated ? <LoadingPage /> : <Redirect to="/" />}</>
        )
      }
    />
  );
};

export default PrivateRoute;
