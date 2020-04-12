import { INavLink } from 'src/app/models/INavLink';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const navLinks: INavLink[] = [
  {
    title: 'GitHub',
    icon: faGithub,
    href: 'https://github.com/jmanke'
  },
  {
    title: 'LinkedIn',
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/jeff-manke/'
  }
];
