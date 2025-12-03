// src/App.js
import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, Container, Box, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import ParticleBG from './components/ParticleBG';
import SEO from './components/SEO';
import './App.css';

// Google Analytics - add your tracking ID when ready
// import ReactGA from 'react-ga4';
// ReactGA.initialize('G-YOUR_TRACKING_ID');

// Track page views on route change
function PageTracker() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return null;
}

// Simple error boundary
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center', p: 3, color: '#ff6b6b' }}>
          <Typography variant="h5" gutterBottom>Something went wrong.</Typography>
          <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>{this.state.error?.message || this.state.error}</Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>Check the browser console for details.</Typography>
        </Box>
      );
    }
    return this.props.children;
  }
}

// Persisted theme preference
const getInitialMode = () => {
  const saved = localStorage.getItem('prefers-mode');
  return saved === 'light' ? 'light' : 'dark';
};

export default function App() {
  const [mode, setMode] = useState(getInitialMode);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: '#00eaff' },
      secondary: { main: '#ff79c6' },
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
  }), [mode]);

  const toggleMode = () => setMode(m => {
    const next = m === 'dark' ? 'light' : 'dark';
    localStorage.setItem('prefers-mode', next);
    return next;
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParticleBG />
      <Router>
        <PageTracker />
        <SEO />
        <Navbar mode={mode} onToggleMode={toggleMode} />
        <Container maxWidth="md" sx={{ mt: 10, mb: 5, position: 'relative', zIndex: 1 }}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/research" element={<Research />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </ErrorBoundary>
        </Container>
        <Box sx={{ textAlign: 'center', py: 2, opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} Manish Neupane
        </Box>
      </Router>
    </ThemeProvider>
  );
}