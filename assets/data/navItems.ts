import { NavItem } from 'src/app/models/NavItem';

export const navItems = [
  new NavItem({
    title: 'About',
    faIcon: 'fas fa-user fa-fw',
    href: '#About'
  }),
  new NavItem({
    title: 'Skills',
    faIcon: 'fas fa-chart-pie fa-fw',
    href: '#Skills'
  }),
  // new NavItem({
  //   title: 'Experience',
  //   faIcon: 'fas fa-chart-line fa-fw',
  //   href: '#Experience'
  // }),
  new NavItem({
    title: 'Projects',
    faIcon: 'fas fa-folder-open fa-fw',
    href: '#Projects'
  }),
  new NavItem({
    title: 'Journey',
    faIcon: 'fas fa-graduation-cap fa-fw',
    href: '#Journey'
  }),
  // new NavItem({
  //   title: 'Contact',
  //   faIcon: 'fas fa-envelope-open-text fa-fw',
  //   href: '#Contact'
  // })
];
