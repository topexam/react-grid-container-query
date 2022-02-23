import * as React from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';
import { EBreakpoint } from './enums';

type IMinChildWidthSize = 1 | 2 | 3 | 4 | 5;

type Props = React.PropsWithChildren<{
  gap?: EBreakpoint;
  minChildWidth?: {
    xs?: IMinChildWidthSize;
    sm?: IMinChildWidthSize;
    md?: IMinChildWidthSize;
    lg?: IMinChildWidthSize;
    xl?: IMinChildWidthSize;
    base?: IMinChildWidthSize;
  } & Record<string, number>;
}>;

export const AutoGrid = ({
  children,
  gap = EBreakpoint.xs,
  minChildWidth,
}: Props) => {
  const customClasses = React.useMemo<Record<string, boolean>>(() => {
    const defaultClasses = { [styles['grid-auto-3']]: true };
    if (minChildWidth) {
      return Object.keys(minChildWidth).reduce<Record<string, boolean>>(
        (res: Record<string, boolean>, it) => {
          if (it === 'base') {
            return {
              ...res,
              [styles['grid-auto-3']]: false,
              [styles[`grid-auto-${minChildWidth[it]}`]]: true,
            };
          }

          const cloneRes = {
            ...res,
            [styles[`grid-auto-${minChildWidth[it]}\@${it}`]]: true,
          };

          return cloneRes;
        },
        defaultClasses
      );
    }
    return defaultClasses;
  }, [minChildWidth]);

  return (
    <div
      className={clsx({
        [styles[`grid-gap-${gap}`]]: true,
        ...customClasses,
      })}
    >
      {children}
    </div>
  );
};
