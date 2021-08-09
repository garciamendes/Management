// React
import React from 'react';
import { Route, Redirect } from 'react-router-dom'

// Local
import { isLogin } from '../../utils'

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route {...rest} render={props => (
      isLogin() ?
        <Component {...props} />
        : <Redirect to='/' />
    )} />
  );
};

export default PrivateRoute;