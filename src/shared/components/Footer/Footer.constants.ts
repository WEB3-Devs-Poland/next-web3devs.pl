import { ROUTE } from '@config/routes';
import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons';

export const LINKS = [
  {
    label: 'Home',
    route: ROUTE.home,
    disabled: false,
  },
  {
    label: 'Blog',
    route: ROUTE.blog,
    disabled: false,
  },
  {
    label: 'Newsletter',
    route: ROUTE.newsletter,
    disabled: false,
  },
];

export const MEDIA = [
  {
    link: 'https://twitter.com/web3DevsPoland',
    icon: faTwitter,
  },
  {
    link: 'https://discord.com/invite/aPCQdz5cQA',
    icon: faDiscord,
  },
  {
    link: 'https://medium.com/',
    icon: faMedium,
  },
];
