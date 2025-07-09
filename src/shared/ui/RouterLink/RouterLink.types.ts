import type { LinkProps } from 'react-router';
import type { TSvgIcon } from 'shared/types/utils';

export type TRouterLinkProps = LinkProps & {
  LeftIcon?: TSvgIcon;
  RightIcon?: TSvgIcon;
};
