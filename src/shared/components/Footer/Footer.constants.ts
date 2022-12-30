import { ROUTE } from '@config/routes';
import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons';

export const LINKS = [
  {
    label: 'Home',
    route: ROUTE.home,
  },
  {
    label: 'Blog',
    route: ROUTE.blog,
  },
  {
    label: 'Newsletter',
    route: ROUTE.newsletter,
  },
];

export const MEDIA = [
  {
    key: 'twitter',
    icon: faTwitter,
  },
  {
    key: 'discord',
    icon: faDiscord,
  },
  {
    key: 'medium',
    icon: faMedium,
  },
];
