import { Link, useParams } from 'react-router';

export const PostPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Link to="/">К постам</Link>

      {id}
    </div>
  );
};
