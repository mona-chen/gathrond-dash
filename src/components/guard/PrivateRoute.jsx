import React from 'react';
import { Navigate } from 'react-router-dom';

import { getCookie, setCookie } from '../../utils/helper/Helper';
import axios from '../../utils/axios';
import { toast } from '../common/toast/toast';

export const LOGOUT = async () => {
  localStorage.clear();
  setCookie('token', '', 0);
};

// const set = setCookie('login_grace', 'active', 5); // check if the user freshly logged in

const hasLoginGrace = getCookie('login_grace'); // check if the user freshly logged in

const PrivateRoute = ({ children }) => {
  let isLoggingOut = false; // global
  axios.interceptors.response.use(async (response) => {
    // logger.log(response, 'private route');
    if (response?.data?.data === 'invalid_token') {
      if (!isLoggingOut && !hasLoginGrace) {
        isLoggingOut = true;
        toast.error('Your session has expired, and you will be logged out.');
        try {
          LOGOUT();
          setTimeout(() => {
            return <Navigate to="/login" />;
          }, 1000);
        } catch (error) {
          // throw errors away
        } finally {
          setTimeout(() => {
            isLoggingOut = false;
            window.location.replace('/login');
          }, 1000); // isLoggedIn = false; // if the variable is assignable
        }
        return;
      }
    } else {
      return response;
    }
  });

  const authenticated = getCookie('token');
  console.log('token', authenticated);
  return authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
