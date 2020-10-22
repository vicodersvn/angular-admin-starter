import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Homepage',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Demo',
    icon: 'list-outline',
    children: [
      {
        title: 'Dashboard',
        icon: 'book-outline',
        link: '/demo/pages/dashboard'
      },
      {
        title: 'IOT',
        icon: 'hard-drive-outline',
        link: '/demo/pages/dashboard'
      }
    ]
  }
];
