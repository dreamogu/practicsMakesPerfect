import React, { ReactNode, createContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ isTheme: false, toggleTheme: () => {} });

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const [isTheme, setTheme] = useState(
    () =>
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  useEffect(() => {
    if (isTheme) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isTheme]);

  return (
    <ThemeContext.Provider value={{ isTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
