import { useRoutes } from 'react-router-dom';
import BoardPage from '../pages/Board/BoardPage';
import LoginPage from '../pages/Login/LoginPage';
import MainLayout from '../layouts/main-layout';
import MainPage from '../pages/Main/MainPage';
import { Outlet } from 'react-router-dom';

export default function Router() {
  return useRoutes([
    {
      element: (
        <MainLayout>
          <Outlet />
        </MainLayout>
      ),
      children: [
        { path: '/', element: <MainPage title="Main Title" posts={['abc']} /> },
        { path: '/board', element: <BoardPage /> },
        { path: '/login', element: <LoginPage /> }
      ]
    }
  ]);
}
