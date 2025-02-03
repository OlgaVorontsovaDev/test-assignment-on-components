import { FC, useMemo } from 'react';
import cn from 'classnames';

import { CounterProps } from './Counter.types';
import { CounterPulse } from './innerComponents';
import { formatLabel } from './utils';
import styles from './Counter.styles.module.styl';

export const Counter: FC<CounterProps> = ({
  color = 'primary',
  size = 'medium',
  className,
  label,
  pulse,
  stroke,
  ...props
}) => {
  const classNames = useMemo(() => {
    return cn(styles['counter'], className, {
      [styles[`counterSize-${size}`]]: size,
      [styles[`counterColor-${color}`]]: color,
      [styles[`stroke`]]: !!stroke,
    });
  }, [className, size, color, stroke]);

  return (
    <span {...props} className={classNames}>
      {label && formatLabel(label)}
      {pulse && <CounterPulse color={color} />}
    </span>
  );
};
