import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  // const { signed } = useSelector(state => state.auth);

  // if (!signed && isPrivate) {
  //   return <Redirect to="/" />;
  // }

  // if (signed && !isPrivate) {
  //   return <Redirect to="/app" />;
  // }

  return <Route {...rest} render={props => <Component {...props} />} />;
}
