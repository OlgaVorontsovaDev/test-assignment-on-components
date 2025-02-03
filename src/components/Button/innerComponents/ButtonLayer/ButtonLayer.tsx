import { FC, useMemo } from 'react';
import cn from 'classnames';

import { ButtonLayerProps } from './ButtonLayer.types';
import styles from './ButtonLayer.styles.module.styl';

export const ButtonLayer: FC<ButtonLayerProps> = ({
  className,
  color,
  size,
  ...props
}) => {
  const classNames = useMemo(() => {
    return cn(styles['layer'], className, {
      [styles[`layer-${color}`]]: color,
      [styles[`layer-${size}`]]: size,
    });
  }, [className, color, size]);

  return <span {...props} className={classNames} />;
};
