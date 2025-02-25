import Login from '../pages/auth/login/Login';
import Homepage from '../pages/dashboard/overview/Homepage';
import Users from '../pages/dashboard/user/Users';

export const auth_routes = [
  {
    path: '/login',
    element: Login,
  },
  {
    path: '/register',
    element: Login,
  },
];
