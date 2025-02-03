import { createContext } from 'react';

import { ThemeContextValue, Theme } from './theme.types';

export const THEME_KEY = 'theme';

const localStorageTheme = localStorage.getItem(THEME_KEY) as Theme | null;

export const defaultValue: ThemeContextValue = {
  theme: localStorageTheme || 'light',
  toggleTheme: () => {},
};

export const themeContext = createContext<ThemeContextValue>(defaultValue);
