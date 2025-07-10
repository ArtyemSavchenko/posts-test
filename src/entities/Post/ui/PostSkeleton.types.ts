import type { TCLassName } from 'shared/types';
import type { TPostProps } from './Post.types';

export type TPostSkeletonProps = TCLassName & Pick<TPostProps, 'isPreview'>;
