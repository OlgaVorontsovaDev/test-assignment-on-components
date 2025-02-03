import { HTMLAttributes } from 'react';

type Size = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';

type PartSizeKeysMore = Extract<Size, 'medium' | 'large' | 'extraLarge'>;

type PartSizeKeysLess = Extract<Size, 'extraSmall' | 'small'>;

type Color = 'primary' | 'secondary' | 'altPrimary' | 'altSecondary';

type SizeAndLabelAndPulse =
  | {
      size: PartSizeKeysMore;
      label: string | number;
      pulse?: never;
    }
  | {
      size: PartSizeKeysLess;
      label?: never;
      pulse?: boolean;
    };

export type CounterProps = {
  color?: Color;
  stroke?: boolean;
} & SizeAndLabelAndPulse &
  Omit<HTMLAttributes<HTMLSpanElement>, 'children'>;
