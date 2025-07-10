import { Post } from 'entities/Post';
import type { FC } from 'react';
import { ArrowRight } from 'shared/ui/icons';
import { RouterLink } from 'shared/ui/RouterLink';
import { joinClasses } from 'shared/utils';
import s from './PostList.module.css';
import type { TPostListProps } from './PostList.types';

export const PostList: FC<TPostListProps> = ({ posts, className }) => {
  return (
    <ul className={joinClasses(s['post-list'], className)}>
      {posts.map((post) => (
        <li className={s['post-list__el']} key={post.id}>
          <Post {...post} isPreview />

          <RouterLink
            className={s['post-list__post-link']}
            to={`post/${post.id}`}
            RightIcon={ArrowRight}
          >
            Просмотр
          </RouterLink>
        </li>
      ))}
    </ul>
  );
};
