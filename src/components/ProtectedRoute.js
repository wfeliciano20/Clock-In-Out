import React from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { Route, useLocation } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { currentUser } = useAuth();
  const { path } = props;
  const location = useLocation();

  let whereToRedirect;
  if (location.state === undefined) {
    whereToRedirect ='/dashboard';
  } else if(location.state === null){
    whereToRedirect = '/dashboard';
  }else {
    whereToRedirect = location.state.from;
  }

  if (path === '/login'|| path === '/signup') {
    return currentUser ? <Redirect to = { whereToRedirect }/> :
    <Route {...props} /> ;
  }

  return currentUser ? <Route {...props} /> :
    <Redirect to={{
      pathname: '/login',
          state: { from: path }
      }
    }/>
};

export default ProtectedRoute;