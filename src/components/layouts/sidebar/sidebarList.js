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

      // {
      //   name: 'All User Games',
      //   link: '/user-games',
      //   // icon: walletBalanceIcon,
      // },

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
  {
    name: 'Messages',
    icon: icons.users,
    link: '/support-chats',
    numb: 'two',
  },

  {
    name: 'Trades',
    icon: icons.users,
    link: '/platform-trades',
    numb: 'four',
    children: [
      {
        name: 'Subscriptions',
        link: '/platform-trades',
        // icon: walletBalanceIcon,
      },
      {
        name: 'Switches',
        link: '/platform-switches',
        // icon: walletBalanceIcon,
      },
      {
        name: 'Purchases',
        link: '/platform-purchases',
        // icon: walletBalanceIcon,
      },

      {
        name: 'Withdraw',
        link: '/withdrawal',
        // icon: walletBalanceIcon,
      },
    ],
  },
];
