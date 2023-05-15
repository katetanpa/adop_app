import { DEFAULT_PATHS } from 'config.js';
import TroubleshootAdx from 'views/TroubleshootAdx';
import Home from 'views/default/Home';

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/home`,
    },
    {
      path: `${appRoot}/home`,
      label: 'Daily Monitoring | Home',
      icon: 'home',
      component: Home,
    },
    {
      path: `${appRoot}/ts/adx`,
      component: TroubleshootAdx,
      label: 'UPR Card',
      icon: 'grid-2',
    }
  ],
  sidebarItems: [],
};
export default routesAndMenuItems;