import { useContext } from 'react';

import { themeContext } from './themeContext';
import { ThemeContextValue } from './theme.types';

export const useTheme = (): ThemeContextValue => {
  return useContext(themeContext);
};
