import {
  useState,
  useCallback,
  PropsWithChildren,
  useMemo,
  FC,
  useEffect,
} from 'react';

import { Theme, ThemeContextValue } from './theme.types.ts';
import { themeContext, THEME_KEY } from './themeContext.ts';
import { defaultValue } from './themeContext.ts';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultValue.theme);

  const toggleTheme = useCallback(() => {
    setTheme((theme) => {
      return theme === 'light' ? 'dark' : 'light';
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark-theme');
      root.classList.add('light-theme');
    } else {
      root.classList.remove('light-theme');
      root.classList.add('dark-theme');
    }
  }, [theme]);

  const contextValue = useMemo<ThemeContextValue>(() => {
    return {
      theme: theme,
      toggleTheme: toggleTheme,
    };
  }, [toggleTheme, theme]);

  return (
    <themeContext.Provider value={contextValue}>
      {children}
    </themeContext.Provider>
  );
};
