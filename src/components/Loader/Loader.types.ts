import { HTMLAttributes } from 'react';

type Color = 'primary' | 'secondary';
type Size = 'small' | 'medium' | 'large';

export type LoaderProps = {
  color: Color;
  size: Size;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children'>;
