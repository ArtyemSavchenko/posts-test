import type { FC } from 'react';
import { ArrowRight } from 'shared/ui/icons';
import { Post } from 'shared/ui/Post';
import { RouterLink } from 'shared/ui/RouterLink';
import { joinClasses } from 'shared/utils';
import s from './PostList.module.css';
import type { TPostListProps } from './PostList.types';

export const PostList: FC<TPostListProps> = ({ posts, className }) => {
  return (
    <ul className={joinClasses(s['post-list'], className)}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post
            {...post}
            actionEl={
              <RouterLink
                className={s['post-list__post-link']}
                to={`post/${post.id}`}
                RightIcon={ArrowRight}
              >
                Подробнее
              </RouterLink>
            }
          />
        </li>
      ))}
    </ul>
  );
};
