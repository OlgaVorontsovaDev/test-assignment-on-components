import { FC, useMemo } from 'react';
import cn from 'classnames';

import { ButtonProps, StaticFC, ButtonContextValue } from './Button.types';
import {
  ButtonContentGroup,
  ButtonCounter,
  ButtonLabel,
  ButtonLoader,
  ButtonLayer,
} from './innerComponents';
import { ButtonContext } from './ButtonContext';
import styles from './Button.styles.module.styl';

export const Button: FC<ButtonProps> & StaticFC = ({
  color = 'primary',
  size = 'medium',
  loading = false,
  className,
  disabled,
  children,
  ...props
}) => {
  const classNames = useMemo(() => {
    return cn(styles.button, styles[`size-${size}`], styles[color], className, {
      [styles['loading']]: loading,
    });
  }, [size, color, className, loading]);

  const ctxValue = useMemo<ButtonContextValue>(() => {
    return { color, size, loading };
  }, [color, loading, size]);

  return (
    <ButtonContext.Provider value={ctxValue}>
      <button {...props} className={classNames} disabled={disabled}>
        <ButtonLayer size={size} color={color} />
        {loading && <ButtonLoader size={size} color={color} />}
        {children}
      </button>
    </ButtonContext.Provider>
  );
};

Button.ContentGroup = ButtonContentGroup;
Button.Counter = ButtonCounter;
Button.Label = ButtonLabel;
