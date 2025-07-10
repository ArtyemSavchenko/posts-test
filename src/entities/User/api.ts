import { api } from 'shared/api';
import type { TUser } from './types';

export const getUserById = (id: number) => {
  return api.get<TUser>(`/users/${id}`);
};
