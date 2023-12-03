import Login from '../pages/auth/login/Login';
import Games from '../pages/dashboard/games/Games';
import Category from '../pages/dashboard/games/components/Category';
import Genre from '../pages/dashboard/games/components/Genre';
import Homepage from '../pages/dashboard/overview/Homepage';
import ChatSection from '../pages/dashboard/support/Chat';
import Users from '../pages/dashboard/user/Users';
import UserGames from '../pages/dashboard/games/components/UserGames';

export const dashboard_routes = [
  {
    path: '/dashboard',
    element: Homepage,
  },
  {
    path: '/users',
    element: Users,
  },
  {
    path: '/games',
    element: Games,
  },
  {
    path: '/user-games',
    element: UserGames,
  },
  {
    path: '/games/categories',
    element: Category,
  },
  {
    path: '/games/genres',
    element: Genre,
  },
  {
    path: '/support-chats',
    element: ChatSection,
  },
];
