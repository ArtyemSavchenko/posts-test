import { getPosts, type TPost } from 'entities/Post';
import { useEffect, useState, type FC } from 'react';
import { PostList } from 'widgets/PostList';

export const PostsPage: FC = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const handlePostGet = async () => {
      try {
        const posts = await getPosts();

        setPosts(posts);
      } catch (err) {
        console.log(err);
      }
    };

    handlePostGet();
  }, []);

  return <PostList posts={posts} />;
};
