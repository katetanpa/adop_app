import { lazy } from 'react';
import { DEFAULT_PATHS } from 'config.js';

const NotFound = lazy(() => import('views/default/NotFound'));
const App = lazy(() => import('App.js'));
const Home = lazy(() => import('views/default/Home'));
const defaultRoutes = [
  { path: DEFAULT_PATHS.NOTFOUND, exact: true, component: NotFound },
  { path: DEFAULT_PATHS.APP, component: App },
  { path: '/', exact: true, component: Home },
];

export default defaultRoutes;
