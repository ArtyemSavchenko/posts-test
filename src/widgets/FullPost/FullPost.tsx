import { useQuery, useQueryClient } from '@tanstack/react-query';
import { type TPost, getPostById, Post, PostSkeleton } from 'entities/Post';
import type { FC } from 'react';
import { joinClasses } from 'shared/utils';
import { UserInfo } from 'widgets/FullPost/UserInfo';
import s from './FullPost.module.css';
import type { TFullPostProps } from './FullPost.types';

export const FullPost: FC<TFullPostProps> = ({ id, className }) => {
  const queryClient = useQueryClient();
  const posts: TPost[] | undefined = queryClient.getQueryData(['posts']);

  const { status: postStatus, data: post } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPostById(id),
    initialData: posts?.find((post) => post.id === id),
  });

  const getPostEl = () => {
    if (postStatus === 'pending') {
      return <PostSkeleton />;
    }

    if (postStatus === 'error') {
      return <div>Не удалось загрузить пост</div>;
    }

    return <Post {...post} />;
  };

  return (
    <div className={joinClasses(s['full-post'], className)}>
      {getPostEl()}

      {postStatus !== 'error' && <UserInfo userId={post?.userId ?? null} />}
    </div>
  );
};
