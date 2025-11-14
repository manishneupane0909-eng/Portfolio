// src/components/Navbar.js (updated with Research link)
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Avatar, Tooltip, Switch } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Research', to: '/research' }, // New item
  { label: 'Contact', to: '/contact' }
];

export default function Navbar({ mode = 'dark', onToggleMode = () => {} }) {
  const { pathname } = useLocation();

  return (
    <AppBar position="fixed" elevation={0} sx={{ backdropFilter: 'blur(6px)', background: 'rgba(20,22,26,0.7)' }}>
      <Toolbar sx={{ display: 'flex', gap: 1 }}> {/* Reduced gap */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar src="/profile.jpeg" alt="Manish Neupane" sx={{ width: 36, height: 36 }} />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Manish Neupane</Typography>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', gap: 1, justifyContent: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.to}
              component={Link}
              to={item.to}
              color={pathname === item.to ? 'secondary' : 'inherit'}
              sx={{ textTransform: 'none', fontWeight: 600, fontSize: '0.875rem' }} // Smaller font
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
            <Switch checked={mode === 'dark'} onChange={onToggleMode} inputProps={{ 'aria-label': 'theme toggle' }} />
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton
              href="https://github.com/manishneupane0909-eng"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton
              href="https://www.linkedin.com/in/manish-neupane/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}