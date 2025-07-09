import { RouterProvider } from 'react-router';
import { router } from './providers/router';

export const App = () => {
  return <RouterProvider router={router} />;
};
