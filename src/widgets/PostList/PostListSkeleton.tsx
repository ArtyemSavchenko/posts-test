import { Skeleton } from '@mui/material';
import { PostSkeleton } from 'entities/Post';
import type { TPostSkeletonProps } from 'entities/Post/ui/PostSkeleton.types';
import type { FC } from 'react';
import { getSkeletonKeys, joinClasses } from 'shared/utils';
import s from './PostList.module.css';

export const PostListSkeleton: FC<TPostSkeletonProps> = ({ className }) => {
  return (
    <ul className={joinClasses(s['post-list'], className)}>
      {getSkeletonKeys(10, 'post-skeleton').map((key) => (
        <li key={key} className={s['post-list__el']}>
          <PostSkeleton isPreview />

          <Skeleton variant="text" className={s['post-list__post-link']}>
            <div>Просмотр</div>
          </Skeleton>
        </li>
      ))}
    </ul>
  );
};
