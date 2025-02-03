import { useContext } from 'react';

import { ButtonContext } from '../ButtonContext';
import { ButtonContextValue } from '../Button.types';

export const useButtonContext = (): ButtonContextValue => {
  return useContext(ButtonContext);
};
