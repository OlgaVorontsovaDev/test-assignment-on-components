import { HTMLAttributes } from 'react';

export type ButtonLabelProps = { children: string | number } & Omit<
  HTMLAttributes<HTMLSpanElement>,
  'children'
>;
