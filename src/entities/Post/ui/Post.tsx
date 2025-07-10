import type { FC } from 'react';
import { CSS_UTILS } from 'shared/styles/utils';
import { joinClasses } from 'shared/utils';
import s from './Post.module.css';
import type { TPostProps } from './Post.types';

export const Post: FC<TPostProps> = ({ body, title, className, isPreview }) => {
  return (
    <article className={joinClasses(s['post'], className)}>
      <h2 className={s['post__heading']}>{title}</h2>

      <p
        className={joinClasses(
          s['post__text'],
          isPreview && CSS_UTILS.textEllipsis
        )}
      >
        {body}
      </p>
    </article>
  );
};
