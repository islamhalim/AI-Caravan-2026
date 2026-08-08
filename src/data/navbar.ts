// Navbar Data
import caravanlogo from '../components/imgs/caravanlogo.png';
import cslogo from '../components/imgs/IEEE-CS_LogoTM-orange.png';
import r8logo from '../components/imgs/ieee_r8_cs_rgb_ko.png';
import gaclogo from '../components/imgs/mga_gac_color.png';
import dvplogo from '../components/imgs/dvp_logo-removebg-preview.png';

export interface NavItem {
  label: string;
  path: string;
}

export interface LogoLink {
  name: string;
  image: string;
  url: string;
  alt: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/About' },
  { label: 'Activities', path: '/Activities' },
  { label: 'Highlights', path: '/Highlights' },
  { label: 'Partners', path: '/Partners' },
  { label: 'Timeline', path: '/Timeline' },
  { label: 'Gallery', path: '/Gallery' },
  { label: 'Registration', path: '/Registration' },
  { label: 'Contact', path: '/Contact' }
];

export const logoLinks: LogoLink[] = [
  {
    name: 'caravan',
    image: caravanlogo,
    url: '/',
    alt: 'AI Caravan'
  },
  {
    name: 'cs',
    image: cslogo,
    url: 'https://www.computer.org/',
    alt: 'IEEE CS'
  },
  {
    name: 'gac',
    image: gaclogo,
    url: 'https://www.computer.org/volunteering/boards-and-committees/member-geographic-activities',
    alt: 'GAC'
  },
  {
    name: 'dvp',
    image: dvplogo,
    url: 'https://www.computer.org/communities/professional-chapters/distinguished-visitors-program',
    alt: 'DVP'
  },
  {
    name: 'r8',
    image: r8logo,
    url: 'https://www.computer.org/volunteering/boards-and-committees/member-geographic-activities',
    alt: 'R8'
  }
];
