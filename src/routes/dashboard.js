import Login from '../pages/auth/login/Login';
import Games from '../pages/dashboard/games/Games';
import Category from '../pages/dashboard/games/components/Category';
import Genre from '../pages/dashboard/games/components/Genre';
import Homepage from '../pages/dashboard/overview/Homepage';
import ChatSection from '../pages/dashboard/support/Chat';
import Users from '../pages/dashboard/user/Users';
import UserGames from '../pages/dashboard/games/components/UserGames';
import Trades from '../pages/dashboard/trades/trades';
import Switches from '../pages/dashboard/trades/switches';
import Purchases from '../pages/dashboard/trades/purchases';

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

  {
    path: '/platform-trades',
    element: Trades,
  },

  {
    path: '/platform-switches',
    element: Switches,
  },

  {
    path: '/platform-purchases',
    element: Purchases,
  },
];
