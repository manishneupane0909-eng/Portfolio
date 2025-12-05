import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Container, Box, Typography } from '@mui/material';
import { Providers } from './providers';
import { Navbar } from '@/shared/components/Navbar';
import { ParticleBG } from '@/shared/components/ParticleBG';
import { SEO } from '@/shared/components/SEO';
import { AppRoutes } from './routes';
import { useTheme } from '@/shared/hooks/useTheme';

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

const AppContent: React.FC = () => {
  const { mode, toggleMode, mounted } = useTheme();

  if (!mounted) {
    return null;
  }

  return (
    <Providers mode={mode}>
      <ParticleBG />
      <BrowserRouter>
        <SEO />
        <Navbar mode={mode} onToggleMode={toggleMode} />
        <Container
          maxWidth="md"
          sx={{
            mt: { xs: 8, sm: 10 },
            mb: 5,
            position: 'relative',
            zIndex: 1,
            minHeight: 'calc(100vh - 120px)',
          }}
        >
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </Container>
        <Box
          component="footer"
          sx={{
            textAlign: 'center',
            py: 2,
            opacity: 0.7,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Manish Neupane
          </Typography>
        </Box>
      </BrowserRouter>
    </Providers>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <AppContent />
    </HelmetProvider>
  );
}

