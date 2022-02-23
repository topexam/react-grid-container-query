import * as React from 'react';
import clsx from 'clsx';

import { EBreakpoint } from '../enums';

import styles from '../styles/index.module.scss';

type Props = React.PropsWithChildren<{
  gap?: EBreakpoint;
}>;

export const Grid = ({ children, gap = EBreakpoint.xs }: Props) => {
  return (
    <div
      className={clsx({
        [styles['grid']]: true,
        [styles[`grid-gap-${gap}`]]: true,
      })}
    >
      {children}
    </div>
  );
};
