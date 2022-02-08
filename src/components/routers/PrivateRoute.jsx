import React from 'react';
import { Redirect, Route } from 'react-router-dom';
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
