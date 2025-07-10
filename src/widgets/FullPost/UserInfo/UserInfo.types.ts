import type { TPost } from 'entities/Post';
import type { TCLassName } from 'shared/types';

export type TUserInfoProps = TCLassName & {
  userId: TPost['userId'] | null;
};
