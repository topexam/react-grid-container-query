import * as React from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

type IColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = React.PropsWithChildren<
  {
    xs?: IColSize;
    sm?: IColSize;
    md?: IColSize;
    lg?: IColSize;
    xl?: IColSize;
    base?: IColSize;
  } & Record<string, number | React.ReactElement>
>;

export const GridItem = ({ children, ...restProps }: Props) => {
  const customClasses = React.useMemo<Record<string, boolean>>(() => {
    return Object.keys(restProps).reduce<Record<string, boolean>>(
      (res: Record<string, boolean>, it) => {
        if (it === 'base') {
          return {
            ...res,
            [styles[`col-${restProps[it]}`]]: true,
          };
        }

        const cloneRes = {
          ...res,
          [styles[`col-${restProps[it]}\@${it}`]]: true,
        };

        return cloneRes;
      },
      {}
    );
  }, [restProps]);
  return <div className={clsx(customClasses)}>{children}</div>;
};
