import { useQuery } from '@tanstack/react-query';
import { getPosts } from 'entities/Post';
import { type FC } from 'react';
import { PostList } from 'widgets/PostList';

export const PostsPage: FC = () => {
  const {
    status,
    data: posts,
    error,
  } = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <PostList posts={posts} />;
};
