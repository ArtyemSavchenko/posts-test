import type { TPost } from 'entities/Post';

export type TPostProps = TPost & {
  className?: string;
  isPreview?: boolean;
};
