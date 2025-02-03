import { HTMLAttributes } from 'react';

import { ButtonProps } from '../../Button.types';

export type ButtonLayerProps = Omit<
  HTMLAttributes<HTMLSpanElement>,
  'children'
> &
  Pick<ButtonProps, 'color' | 'size'>;
