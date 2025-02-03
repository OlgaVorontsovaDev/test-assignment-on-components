import { FC, useMemo } from 'react';
import cn from 'classnames';

import { LoaderProps } from './Loader.types';
import styles from './Loader.styles.module.styl';

export const Loader: FC<LoaderProps> = ({
  size,
  color,
  className,
  ...props
}) => {
  const classNames = useMemo(() => {
    return cn(
      styles.loader,
      styles[`loader-${size}`],
      styles[color],
      className
    );
  }, [className, color, size]);

  return <span {...props} className={classNames}></span>;
};
