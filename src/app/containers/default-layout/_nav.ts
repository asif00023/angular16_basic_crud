import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  
  {
    name:'Contact',
    url:'/contact',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'List',
        url: '/contact/contact-index'
      },
      {
        name: 'Add',
        url: '/contact/contact-add'
      }
    ]
  }
  
  
];
