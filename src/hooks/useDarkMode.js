import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');
  const [bg, setBg] = useState('');

  const toggleTheme = () => {
    if (theme === 'light') {
      setBg('first');
      setTimeout(() => {
        window.localStorage.setItem('THEME_MODE', 'dark');
        setTheme('dark');
      }, 2000);
    } else {
      setBg('second');
      setTimeout(() => {
        window.localStorage.setItem('THEME_MODE', 'light');
        setTheme('light');
      }, 2000);
    }
  };

  useEffect(() => {
    const localMode = window.localStorage.getItem('THEME_MODE');
    if (localMode === undefined || localMode === null) {
      setTheme('dark');
      window.localStorage.setItem('THEME_MODE', 'dark');
    } else {
      setTheme(localMode);
    }
  }, []);

  return [theme, bg, toggleTheme];
};
