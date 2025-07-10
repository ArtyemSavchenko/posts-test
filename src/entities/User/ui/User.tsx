import type { FC } from 'react';
import { joinClasses } from 'shared/utils';
import s from './User.module.css';
import type { TUserProps } from './User.types';

export const User: FC<TUserProps> = ({ className, username, name }) => {
  return (
    <div
      className={joinClasses(s['user'], className)}
    >{`${name} aka ${username}`}</div>
  );
};
