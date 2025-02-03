import { CounterProps } from '../../../../Counter/Counter.types';
import { ButtonProps } from '../../../Button.types';

type ButtonColor = Required<ButtonProps>['color'];
type ButtonCounterColor = Extract<
  Required<CounterProps>['color'],
  'altSecondary' | 'altPrimary'
>;

export const buttonCounterColorAdapter = (
  buttonColor: ButtonColor
): ButtonCounterColor => {
  switch (buttonColor) {
    case 'primary':
      return 'altPrimary';
    case 'secondary':
      return 'altSecondary';
    default:
      return 'altPrimary';
  }
};
