import { FC, PropsWithChildren, HTMLAttributes, useMemo } from 'react';
import cn from 'classnames';

import styles from './Container.styles.module.styl';

export const Container: FC<
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
> = ({ children, className, ...props }) => {
  const classNames = useMemo(() => {
    return cn(styles['container'], className);
  }, [className]);

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
};
