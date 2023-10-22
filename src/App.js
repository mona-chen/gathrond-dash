import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { dashboard_routes } from './routes/dashboard';
import { auth_routes } from './routes/auth';
import { Provider, useDispatch } from 'react-redux';
import PrivateRoute from './components/guard/PrivateRoute';
import Toasty from './components/common/toast/toast';
import store from './redux/store';
import setAuthToken from './utils/auth.ts';
import { getCookie } from './utils/helper/Helper';
import { dashboardAPI } from './redux/dashboard';

function App() {
  const location = useLocation();

  const token = getCookie('token');

  setAuthToken(token);

  return (
    <Provider store={store}>
      <div className="App">
        <Toasty />
        <Routes location={location}>
          <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          {/* auth group start */}
          {auth_routes?.map((route, idx) => (
            <Route key={idx} path={route.path} element={<route.element />} />
          ))}
          {/* auth group end */}

          {/* dashboard group start */}
          {dashboard_routes?.map((route, idx) => (
            <Route key={idx} path={route.path} element={<PrivateRoute>{<route.element />}</PrivateRoute>} />
          ))}
          {/* dashboard group end */}
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
