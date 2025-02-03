import { createContext } from 'react';

import { ButtonContextValue } from './Button.types';

const defaultValue: ButtonContextValue = {
  color: 'primary',
  size: 'medium',
  loading: false,
};

export const ButtonContext = createContext<ButtonContextValue>(defaultValue);
