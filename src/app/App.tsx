import { RouterProvider } from 'react-router';
import s from './App.module.css';
import { router } from './providers/router';

export const App = () => {
  return (
    <div className={s['app']}>
      <RouterProvider router={router} />
    </div>
  );
};
