import { ROUTE } from '@config/routes';
import { faTwitter, faDiscord, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

export const LINKS = [
  {
    label: 'Blog',
    route: ROUTE.blog,
    disabled: true,
  },
  {
    label: 'Meetups',
    route: 'https://www.meetup.com/pl-PL/web3-devs-poland/',
    disabled: false,
  },
  {
    label: 'Newsletter',
    route: ROUTE.newsletter,
    disabled: true,
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
    link: 'https://www.youtube.com/channel/UCvV6USxk59dGeCQgxBp61bQ',
    icon: faYoutube,
  },
  {
    link: 'https://github.com/WEB3-Devs-Poland',
    icon: faGithub,
  },
];
