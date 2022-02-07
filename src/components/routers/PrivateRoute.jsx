import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
//import Header from '../components/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.users.currentUser
});

export default connect(mapStateToProps)(PrivateRoute);
