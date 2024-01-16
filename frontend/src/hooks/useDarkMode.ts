import { useState, useEffect } from 'react';

export interface useDarkModeOptions {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
}

function useDarkMode (): useDarkModeOptions {
  const currentTheme = localStorage.getItem('theme');
  if (!currentTheme) window.matchMedia('(prefers-color-scheme: dark)').matches ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
  const [isDarkMode, setIsDarkMode] = useState(currentTheme === 'dark' ? true : false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return {
    isDarkMode: currentTheme === 'dark' ? true : false,
    toggleDarkMode: () => setIsDarkMode(!isDarkMode),
    enableDarkMode: () => setIsDarkMode(true),
    disableDarkMode: () => setIsDarkMode(false)
  }
}

export default useDarkMode;