import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPostById, type TPost } from 'entities/Post';
import { useParams } from 'react-router';
import { ArrowLeft } from 'shared/ui/icons';
import { Post } from 'shared/ui/Post';
import { RouterLink } from 'shared/ui/RouterLink';
import s from './PostPage.module.css';

export const PostPage = () => {
  const { id } = useParams();
  const numberId = Number(id);

  const queryClient = useQueryClient();
  const posts: TPost[] | undefined = queryClient.getQueryData(['posts']);

  const { status, data: post } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPostById(numberId),
    initialData: posts?.find((post) => post.id === numberId),
  });

  const getPostEl = () => {
    if (status === 'pending') {
      return <div>Loading</div>;
    }

    if (status === 'error') {
      return <div>Не удалось загрузить пост</div>;
    }

    return <Post {...post} />;
  };

  return (
    <div>
      <RouterLink
        className={s['post-page__back-link']}
        to="/"
        LeftIcon={ArrowLeft}
      >
        К постам
      </RouterLink>

      {getPostEl()}
    </div>
  );
};
