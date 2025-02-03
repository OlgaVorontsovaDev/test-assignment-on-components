import { FC, useMemo } from 'react';
import cn from 'classnames';

import { ButtonLabelProps } from './ButtonLabel.types';
import styles from './ButtonLabel.styles.module.styl';

export const ButtonLabel: FC<ButtonLabelProps> = ({ className, ...props }) => {
  const classNames = useMemo(() => {
    return cn(styles['label'], className);
  }, [className]);

  return <span {...props} className={classNames} />;
};
