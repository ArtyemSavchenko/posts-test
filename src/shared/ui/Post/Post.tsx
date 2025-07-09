import type { FC } from 'react';
import { joinClasses } from 'shared/utils';
import s from './Post.module.css';
import type { TPostProps } from './Post.types';

export const Post: FC<TPostProps> = ({
  body,
  id,
  title,
  actionEl,
  className,
  userId,
}) => {
  return (
    <article className={joinClasses(s['post'], className)}>
      <h2 className={s['post__heading']}>{title}</h2>
      <p className={s['post__text']}>{body}</p>

      {actionEl && <div className={s['post__action-el']}>{actionEl}</div>}
    </article>
  );
};
