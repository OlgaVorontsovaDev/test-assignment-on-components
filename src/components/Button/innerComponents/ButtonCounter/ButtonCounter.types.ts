import { CounterProps } from '../../../Counter/Counter.types';

export type ButtonCounterProps = Omit<
  CounterProps,
  'size' | 'color' | 'label' | 'pulse'
> & {
  label: string | number;
};
