import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));
const Test = lazy(() => import('@/pages/test_page'));

export { Home, Test };
