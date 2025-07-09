import type { TPost } from 'entities/Post';
import type { ReactNode } from 'react';

export type TPostProps = TPost & {
  actionEl?: ReactNode;
  className?: string;
};
