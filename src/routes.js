import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Vehicle from './pages/Vehicle';

import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/" component={Vehicle} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
