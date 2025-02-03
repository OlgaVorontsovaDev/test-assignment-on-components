import { FC, useMemo } from 'react';
import cn from 'classnames';

import { CounterPulseProps } from './CounterPulse.types';
import styles from './CounterPulse.styles.module.styl';

export const CounterPulse: FC<CounterPulseProps> = ({ color, className }) => {
  const classNames = useMemo(() => {
    return cn(styles.pulse, styles[color], className);
  }, [className, color]);
  return (
    <>
      <div className={classNames}></div>
      <div className={cn(classNames, styles.pulseTwo)}></div>
    </>
  );
};
