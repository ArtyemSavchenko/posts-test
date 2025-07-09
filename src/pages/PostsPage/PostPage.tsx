import { getPosts } from 'entities/Post';
import { useEffect, type FC } from 'react';

export const PostPage: FC = () => {
  useEffect(() => {
    const handlePostGet = async () => {
      try {
        const posts = await getPosts();

        console.log(posts);
      } catch (err) {
        console.log(err);
      }
    };

    handlePostGet();
  }, []);

  return 'hello';
};
