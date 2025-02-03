import { FC, useMemo } from 'react';
import cn from 'classnames';

import { Loader } from '../../../Loader';
import { LoaderProps } from '../../../Loader/Loader.types';
import styles from './ButtonLoader.styles.module.styl';

export const ButtonLoader: FC<LoaderProps> = ({ className, ...props }) => {
  const classNames = useMemo(() => {
    return cn(styles['loader'], className);
  }, [className]);

  return <Loader {...props} className={classNames} />;
};
