
import { useState, useEffect } from 'react';

// const useDarkMode = (): [boolean, () => void] => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const body = document.body;
//     if (isDarkMode) {
//       body.classList.add('dark');
//     } else {
//       body.classList.remove('dark');
//     }
//   }, [isDarkMode]);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return [isDarkMode, toggleDarkMode];
// };

// export default useDarkMode;

export interface useDarkModeOptions {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
}

function useDarkMode (defaultValue?: boolean): useDarkModeOptions {
  const isDarkOS = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setIsDarkMode] = useState(defaultValue || isDarkOS);

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
    isDarkMode,
    toggleDarkMode: () => setIsDarkMode(!isDarkMode),
    enableDarkMode: () => setIsDarkMode(true),
    disableDarkMode: () => setIsDarkMode(false)
  }
}

export default useDarkMode;