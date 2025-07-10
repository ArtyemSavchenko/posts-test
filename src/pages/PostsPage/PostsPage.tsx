import { useQuery } from '@tanstack/react-query';
import { getPosts } from 'entities/Post';
import { type FC } from 'react';
import { PostList, PostListSkeleton } from 'widgets/PostList';

export const PostsPage: FC = () => {
  const {
    status,
    data: posts,
    error,
  } = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  if (status === 'pending') {
    return <PostListSkeleton />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <PostList posts={posts} />;
};
