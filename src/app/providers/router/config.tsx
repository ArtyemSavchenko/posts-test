import { PostPage } from 'pages/PostPage';
import { PostsPage } from 'pages/PostsPage';
import { createBrowserRouter, Navigate } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PostsPage />,
  },
  {
    path: 'post/:id',
    element: <PostPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
