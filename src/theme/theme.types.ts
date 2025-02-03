export type Theme = 'dark' | 'light';
export type ThemeContextValue = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
};
