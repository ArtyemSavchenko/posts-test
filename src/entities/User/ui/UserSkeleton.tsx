import { Skeleton } from '@mui/material';
import type { FC } from 'react';
import s from './User.module.css';
import type { TUserSkeletonProps } from './UserSkeleton.types';

export const UserSkeleton: FC<TUserSkeletonProps> = ({ className }) => {
  return (
    <Skeleton className={className} variant="text">
      <div className={s['user']}>John Doe aka Deadman</div>
    </Skeleton>
  );
};
