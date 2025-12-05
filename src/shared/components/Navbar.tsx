import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Avatar,
  Tooltip,
  Switch,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavItem, ThemeMode } from '@/shared/types';

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

interface NavbarProps {
  mode: ThemeMode;
  onToggleMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ mode, onToggleMode }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = (to: string) => {
    navigate(to);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }} onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton
              selected={pathname === item.to}
              onClick={() => handleNavClick(item.to)}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'secondary.main',
                  color: 'primary.main',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2, px: 2 }}>
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
            href="https://www.linkedin.com/in/manish-neupane-380a65189"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
            <Switch checked={mode === 'dark'} onChange={onToggleMode} size="small" />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: 'blur(6px)',
          background: mode === 'dark' ? 'rgba(20,22,26,0.7)' : 'rgba(255,255,255,0.9)',
          width: '100%',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: { xs: 1, sm: 2 },
            minHeight: { xs: 56, sm: 64 },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Avatar
              src="/profile.jpeg"
              alt="Manish Neupane"
              sx={{ width: { xs: 32, sm: 36 }, height: { xs: 32, sm: 36 }, cursor: 'pointer' }}
              onClick={() => navigate('/')}
            />
            {!isMobile && (
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, display: { xs: 'none', sm: 'block' } }}
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}
              >
                Manish Neupane
              </Typography>
            )}
          </Box>

          {!isMobile && (
            <>
              <Box sx={{ display: 'flex', gap: 1, flex: 1, justifyContent: 'center' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.to}
                    component={Link}
                    to={item.to}
                    color={pathname === item.to ? 'secondary' : 'inherit'}
                    sx={{
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      minWidth: 'fit-content',
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
                <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
                  <Switch checked={mode === 'dark'} onChange={onToggleMode} size="small" />
                </Tooltip>
                <Tooltip title="GitHub">
                  <IconButton
                    href="https://github.com/manishneupane0909-eng"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    aria-label="GitHub profile"
                    size="small"
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <IconButton
                    href="https://www.linkedin.com/in/manish-neupane-380a65189"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    aria-label="LinkedIn profile"
                    size="small"
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

