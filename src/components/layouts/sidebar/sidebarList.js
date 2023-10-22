import { icons } from '../../../assets/icons/icons';

export const sideMenuList = [
  { name: 'Overview', icon: icons.home, link: '/dashboard' },
  {
    name: 'Users',
    icon: icons.users,
    link: '/users',
    numb: 'two',
  },
  {
    name: 'Games',
    icon: icons.games,
    link: '/games',
    children: [
      {
        name: 'All Games',
        link: '/games',
        // icon: walletBalanceIcon,
      },

      {
        name: 'Game Categories',
        link: '/games/categories',
        // icon: walletFundingeIcon,
      },
      {
        name: 'Game Genres',
        link: '/games/genres',
        // icon: walletFundingeIcon,
      },
    ],
  },
];
