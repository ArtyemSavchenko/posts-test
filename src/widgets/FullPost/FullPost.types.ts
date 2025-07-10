import type { TPost } from 'entities/Post';
import type { TCLassName } from 'shared/types';

export type TFullPostProps = Pick<TPost, 'id'> & TCLassName;
