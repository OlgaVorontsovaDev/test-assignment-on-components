import { FC, useMemo } from 'react';
import cn from 'classnames';

import { ButtonContentGroupProps } from './ButtonContentGroup.types';
import { useButtonContext } from '../../hooks';
import styles from './ButtonContentGroup.styles.module.styl';

export const ButtonContentGroup: FC<ButtonContentGroupProps> = ({
  className,
  ...props
}) => {
  const buttonContext = useButtonContext();

  const classNames = useMemo(() => {
    return cn(styles['box'], className, {
      [styles[`size-${buttonContext.size}`]]: buttonContext.size,
      [styles['loading']]: buttonContext.loading,
    });
  }, [buttonContext.loading, buttonContext.size, className]);
  return <span {...props} className={classNames} />;
};
