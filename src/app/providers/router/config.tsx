import { PostPage } from 'pages/PostsPage/PostPage';
import { createBrowserRouter, Navigate } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PostPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
