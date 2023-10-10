import logo from './logo.svg';
import React from 'react'
import './App.css';
import {Route, Routes, useLocation, Navigate} from 'react-router-dom'
import { dashboard_routes } from './routes/dashboard';
import { auth_routes } from './routes/auth';
// import PrivateRoute from './routes/PrivateGuard';

function App() {
  const location = useLocation();

  const token = undefined;
  return (
    <div className="App">
      		<Routes location={location}>
					<Route
						path="/"
						element={
							token ? (
								<Navigate to="/dashboard-overview" />
							) : (
								<Navigate to="/login" />
							)
						}
					/>
					<Route path="*" element={<h1>404 Not Found</h1>} />
					{/* auth group start */}
					{auth_routes?.map((route, idx) => (
						<Route key={idx} path={route.path} element={<route.element />} />
					))}
					{/* auth group end */}
					{/* verification group start */}
					{/* {verification_routes_group?.map((route: RouteProp, idx: number) => (
          <Route key={idx} path={route.path} element={<route.element />} />
        ))} */}
					{/* verification group end */}
					{/* dashboard group start */}
					{dashboard_routes?.map((route, idx) => (
						<Route
							key={idx}
							path={route.path}
							// element={<PrivateRoute>{<route.element />}</PrivateRoute>}
						/>
					))}
					{/* dashboard group end */}
				</Routes>
    </div>
  );
}

export default App;
