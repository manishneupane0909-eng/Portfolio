import { useState, useEffect, useCallback } from 'react';
import { ThemeMode } from '@/shared/types';
import { getInitialTheme, saveTheme } from '@/shared/utils/theme';

export const useTheme = () => {
  const [mode, setMode] = useState<ThemeMode>(getInitialTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      saveTheme(next);
      return next;
    });
  }, []);

  return { mode, toggleMode, mounted };
};

