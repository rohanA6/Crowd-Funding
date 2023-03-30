import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../public/assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: './assets/dashboard.svg',
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: './assets/create-campaign.svg',
    link: '/createCampaigns',
  },
  {
    name: 'payment',
    imgUrl: './assets/payment.svg',
    link: '/',
    disabled: true,
  },
  {
    name: 'withdraw',
    imgUrl: './assets/withdraw.svg',
    link: '/',
    disabled: true,
  },
  {
    name: 'profile',
    imgUrl: './assets/profile.svg',
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: './assets/logout.svg',
    link: '/',
    disabled: true,
  },
];