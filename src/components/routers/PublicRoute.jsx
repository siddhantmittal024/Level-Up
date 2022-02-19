import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  return (
    <Route
      {...rest}
      component={(props) =>
        useSelector((state) => state.users.currentUser) ? (
          <Redirect to={"/dashboard"} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
