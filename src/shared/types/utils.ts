import type { FC, SVGProps } from 'react';

export type TSvgIcon = FC<
  SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
  }
>;

export type TCLassName = { className?: string };
export type TIsLoading = { isLoading?: boolean };
