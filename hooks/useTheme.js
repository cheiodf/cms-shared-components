import { useState } from 'react';

/**
 * @returns {object} - theme, setTheme
 */
function useTheme() {
  const [theme, setTheme] = useState(
    process.browser ? window.localStorage.getItem('theme') || 'light' : null
  );

  const setThemeLocal = () => {
    const th = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', th);
    setTheme(th);
  };

  return { theme, setTheme: setThemeLocal };
}

export default useTheme;
