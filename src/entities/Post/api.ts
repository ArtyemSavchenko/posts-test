import type { TPost } from "entities/Post";
import { api } from "shared/api";

export const getPosts = () => {
  return api.get<TPost[]>("/posts");
};
