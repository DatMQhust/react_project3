import { FC, lazy } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import { routeList } from '@/data/constant/navs';
import LayoutComponent from '@/layout';
import { Test } from '@/pages';
import LoginPage from '@/pages/login/login';
import RegisterPage from '@/pages/login/register';

const NotFound = lazy(() => import('@/pages/not-found'));

const routes = [
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '',
        element: <Navigate to="home" />,
      },
      ...routeList,
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'test',
        element: <Test />,
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      }
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
