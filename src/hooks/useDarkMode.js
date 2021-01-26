import { useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');
  const [bg, setBg] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light') {
      setBg('first');
      setTimeout(() => {
        setTheme('dark');
      }, 2000);
    } else {
      setBg('second');
      setTimeout(() => {
        setTheme('light');
      }, 2000);
    }
  };

  return [theme, bg, toggleTheme];
};
