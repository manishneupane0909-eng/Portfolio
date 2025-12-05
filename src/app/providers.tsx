import React, { useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ThemeMode } from '@/shared/types';

interface ProvidersProps {
  mode: ThemeMode;
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ mode, children }) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: mode === 'dark' ? '#00eaff' : '#0066cc' },
          secondary: { main: mode === 'dark' ? '#ff79c6' : '#cc0066' },
          background: {
            default: mode === 'dark' ? '#23242a' : '#ffffff',
            paper: mode === 'dark' ? 'rgba(24,38,44,0.9)' : 'rgba(255,255,255,0.95)',
          },
          text: {
            primary: mode === 'dark' ? '#eaf8fa' : '#1a1a2e',
            secondary: mode === 'dark' ? '#8ca0a3' : '#6b7c85',
          },
        },
        typography: {
          fontFamily: "'Outfit', system-ui, -apple-system, sans-serif",
          h1: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
          h2: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
          h3: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
          h4: { fontFamily: "'Outfit', sans-serif", fontWeight: 700 },
          h5: { fontFamily: "'Outfit', sans-serif", fontWeight: 700 },
          h6: { fontFamily: "'Outfit', sans-serif", fontWeight: 600 },
          overline: { fontFamily: "'Source Code Pro', monospace", letterSpacing: '0.1em' },
          caption: { fontFamily: "'Source Code Pro', monospace" },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                backgroundColor: mode === 'dark' ? '#23242a' : '#ffffff',
              },
            },
          },
        },
      }),
    [mode]
  );

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

