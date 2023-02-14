import { LAYOUT, MENU_BEHAVIOUR, NAV_COLOR, MENU_PLACEMENT, RADIUS, THEME_COLOR, USER_ROLE } from 'constants.js';

export const IS_DEMO = true;
export const IS_AUTH_GUARD_ACTIVE = true;
export const SERVICE_URL = '/app';

// For detailed information: https://github.com/nfl/react-helmet#reference-guide
export const REACT_HELMET_PROPS = {
  defaultTitle: 'AdOps Apps',
  titleTemplate: '%s | PremiumAds Optimization',
};

export const DEFAULT_PATHS = {
  APP: '/',
  USER_WELCOME: '/home',
  NOTFOUND: '/page-not-found',
};

export const DEFAULT_SETTINGS = {
  MENU_PLACEMENT: MENU_PLACEMENT.Horizontal,
  MENU_BEHAVIOUR: MENU_BEHAVIOUR.Pinned,
  LAYOUT: LAYOUT.Boxed,
  RADIUS: RADIUS.Rounded,
  COLOR: THEME_COLOR.LightRed,
  NAV_COLOR: NAV_COLOR.Default,
  USE_SIDEBAR: false,
};

export const DEFAULT_USER = {
  id: 1,
  name: 'Kate Tan',
  thumb: '/img/profile/katetan.webp',
  role: USER_ROLE.Admin,
  email: 'katetan@premiumads.net',
};

export const REDUX_PERSIST_KEY = 'starter';
