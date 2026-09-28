'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type AppTheme = 'light' | 'dark' | 'beige';

interface ThemeContextType {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'beige',
  setTheme: () => {},
});

const THEME_STORAGE_KEY = 'cat_prep_theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<AppTheme>('beige');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as AppTheme | null;
    if (saved && (saved === 'light' || saved === 'dark' || saved === 'beige')) {
      setThemeState(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'beige');
    }
  }, []);

  const setTheme = (newTheme: AppTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      window.dispatchEvent(new CustomEvent('theme_changed', { detail: newTheme }));
    } catch {
      // LocalStorage fallback
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
