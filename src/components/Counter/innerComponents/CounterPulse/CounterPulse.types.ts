import { HTMLAttributes } from 'react';

type CounterPulseColor =
  | 'primary'
  | 'secondary'
  | 'altPrimary'
  | 'altSecondary';

export type CounterPulseProps = {
  color: CounterPulseColor;
} & HTMLAttributes<HTMLDivElement>;
