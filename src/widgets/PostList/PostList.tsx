import type { TPost } from 'entities/Post';
import type { FC } from 'react';
import { Link } from 'react-router';
import { Post } from 'shared/ui/Post';

type TPostListProps = {
  posts: TPost[];
};

export const PostList: FC<TPostListProps> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Post
            {...post}
            actionEl={<Link to={`post/${post.id}`}>Подробнее</Link>}
          />
        </li>
      ))}
    </ul>
  );
};
