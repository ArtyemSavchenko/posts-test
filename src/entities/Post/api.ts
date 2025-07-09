import type { TPost } from 'entities/Post';
import { api } from 'shared/api';

export const getPosts = () => {
  return api.get<TPost[]>('/posts');
};

export const getPostById = (id: number) => {
  return api.get<TPost>(`/posts/${id}`);
};
