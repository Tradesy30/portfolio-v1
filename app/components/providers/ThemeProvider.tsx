'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/app/store/theme-store';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useThemeStore();

  useEffect(() => {
    // Remove previous theme class
    document.documentElement.classList.remove('light', 'dark');
    // Add current theme class
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
}