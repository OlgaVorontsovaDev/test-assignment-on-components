import { FC, useMemo } from 'react';
import cn from 'classnames';

import { Counter } from '../../../Counter';
import { useButtonContext } from '../../hooks';
import { buttonCounterSizeAdapter, buttonCounterColorAdapter } from './utils';
import { ButtonCounterProps } from './ButtonCounter.types';
import styles from './ButtonCounter.styles.module.styl';

export const ButtonCounter: FC<ButtonCounterProps> = ({
  className,
  label,
  ...props
}) => {
  const buttonContext = useButtonContext();
  const classNames = useMemo(() => {
    return cn(styles['counter'], className);
  }, [className]);

  const calcSize = useMemo(() => {
    return buttonCounterSizeAdapter(buttonContext.size);
  }, [buttonContext.size]);

  const calcColor = useMemo(() => {
    return buttonCounterColorAdapter(buttonContext.color);
  }, [buttonContext.color]);

  return (
    <Counter
      {...props}
      className={classNames}
      size={calcSize}
      color={calcColor}
      label={label}
    />
  );
};
