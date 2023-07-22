import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? (
    <Element />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PrivateRoute;
