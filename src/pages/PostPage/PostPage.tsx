import { useParams } from 'react-router';
import { ArrowLeft } from 'shared/ui/icons';
import { RouterLink } from 'shared/ui/RouterLink';
import { FullPost } from 'widgets/FullPost';
import s from './PostPage.module.css';

export const PostPage = () => {
  const { id } = useParams();
  const numberId = Number(id);

  return (
    <div>
      <RouterLink
        className={s['post-page__back-link']}
        to="/"
        LeftIcon={ArrowLeft}
      >
        К постам
      </RouterLink>

      <FullPost id={numberId} />
    </div>
  );
};
