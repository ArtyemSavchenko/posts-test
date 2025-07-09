import { useParams } from 'react-router';
import { ArrowLeft } from 'shared/ui/icons';
import { Post } from 'shared/ui/Post';
import { RouterLink } from 'shared/ui/RouterLink';

export const PostPage = () => {
  const { id } = useParams();

  return (
    <div>
      <RouterLink to="/" LeftIcon={ArrowLeft}>
        К постам
      </RouterLink>

      {id}
      <Post body="q" id={1} title="q" userId={1} />
    </div>
  );
};
