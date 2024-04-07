import * as React from 'react';
import clsx from 'clsx';
import { useContainerQuery } from 'react-container-query';

import { EBreakpoint } from '../enums';
import styles from './index.module.scss';

const query = {
  [styles['container-xs']]: {
    minWidth: 400,
  },
  [styles['container-sm']]: {
    minWidth: 640,
  },
  [styles['container-md']]: {
    minWidth: 768,
  },
  [styles['container-lg']]: {
    minWidth: 1024,
  },
  [styles['container-xl']]: {
    minWidth: 1280,
  },
};

type Props = React.PropsWithChildren<{
  gap?: EBreakpoint;
}>;

export const Grid = ({ children, gap = EBreakpoint.xs }: Props) => {
  const [params, containerRef] = useContainerQuery(query, {});

  return (
    <div
      ref={containerRef}
      className={clsx({
        ...params,
        [styles['grid']]: true,
        [styles[`grid-gap-${gap}`]]: true,
      })}
    >
      {children}
    </div>
  );
};
