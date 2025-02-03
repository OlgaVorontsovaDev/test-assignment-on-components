import { CounterProps } from '../../../../Counter/Counter.types';
import { ButtonProps } from '../../../Button.types';

type ButtonSize = Required<ButtonProps>['size'];
type ButtonCounterSize = Extract<
  Required<CounterProps>['size'],
  'extraLarge' | 'large' | 'medium'
>;

export const buttonCounterSizeAdapter = (
  counterSize: ButtonSize
): ButtonCounterSize => {
  switch (counterSize) {
    case 'large':
      return 'extraLarge';
    case 'medium':
      return 'large';
    case 'small':
      return 'medium';
    default:
      return 'medium';
  }
};
