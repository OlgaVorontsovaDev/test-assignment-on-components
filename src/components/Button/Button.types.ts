import { FC, HTMLAttributes } from 'react';

import { ButtonCounterProps } from './innerComponents/ButtonCounter/ButtonCounter.types';
import { ButtonContentGroupProps } from './innerComponents/ButtonContentGroup/ButtonContentGroup.types';
import { ButtonLabelProps } from './innerComponents/ButtonLabel/ButtonLabel.types';

type ButtonColor = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  color?: ButtonColor;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export type StaticFC = {
  ContentGroup: FC<ButtonContentGroupProps>;
  Counter: FC<ButtonCounterProps>;
  Label: FC<ButtonLabelProps>;
};

export type ButtonContextValue = Pick<
  Required<ButtonProps>,
  'size' | 'color' | 'loading'
>;
