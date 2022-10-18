import { createContext, useContext, useState } from 'react';

const themeContext = createContext();
const themeToggleContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <themeToggleContext.Provider value={setTheme}>
      <themeContext.Provider value={theme}>
        {children}
      </themeContext.Provider>
    </themeToggleContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(themeContext);
};

export const useThemeToggleContext = () => {
  return useContext(themeToggleContext);
};
