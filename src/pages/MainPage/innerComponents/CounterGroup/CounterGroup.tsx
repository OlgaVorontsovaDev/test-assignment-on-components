import { FC, useMemo, PropsWithChildren } from 'react';
import cn from 'classnames';

import { CounterGroupProps } from './CounterGroup.types';
import styles from './CounterGroup.styles.module.styl';

export const CounterGroup: FC<PropsWithChildren<CounterGroupProps>> = ({
  className,
  children,
  ...props
}) => {
  const classNames = useMemo(() => {
    return cn(styles['group'], className);
  }, [className]);

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
};
