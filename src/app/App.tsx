import { getPosts } from "entities/Post";
import { useEffect } from "react";

export const App = () => {
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

  return <>hello</>;
};
