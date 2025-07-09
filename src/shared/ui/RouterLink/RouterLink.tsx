import type { FC } from 'react';
import { Link } from 'react-router';
import { joinClasses } from 'shared/utils';
import s from './RouterLink.module.css';
import type { TRouterLinkProps } from './RouterLink.types';

export const RouterLink: FC<TRouterLinkProps> = ({
  className,
  children,
  LeftIcon: LeftIcon,
  RightIcon: RightIcon,
  ...rest
}) => {
  return (
    <Link className={joinClasses(className, s['router-link'])} {...rest}>
      {LeftIcon && <LeftIcon className={s['router-link__icon']} />}

      {children}

      {RightIcon && <RightIcon className={s['router-link__icon']} />}
    </Link>
  );
};
