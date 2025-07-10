import { Skeleton } from '@mui/material';
import type { FC } from 'react';
import { joinClasses } from 'shared/utils';
import s from './Post.module.css';
import type { TPostSkeletonProps } from './PostSkeleton.types';

export const PostSkeleton: FC<TPostSkeletonProps> = ({
  className,
  isPreview,
}) => {
  return (
    <div className={joinClasses(s['post'], className)}>
      <Skeleton variant="text" className={s['post__heading']} />

      <Skeleton
        variant={isPreview ? 'text' : 'rounded'}
        className={joinClasses(
          s['post__text'],
          !isPreview && s['post-skeleton__text']
        )}
      />
    </div>
  );
};
