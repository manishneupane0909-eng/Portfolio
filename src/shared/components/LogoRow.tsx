import React from 'react';
import { Paper, Stack, Typography, Box } from '@mui/material';

interface Logo {
  text: string;
  subtitle: string | null;
}

const logos: Logo[] = [
  { text: 'SDSU', subtitle: 'Jackrabbits' },
  { text: 'DAKTRONICS', subtitle: null },
  { text: 'Starship', subtitle: 'Technologies' },
];

export const LogoRow: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 3,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          textAlign: 'center',
          color: '#6b8a8f',
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          mb: 2,
        }}
      >
        Experience & Affiliations
      </Typography>
      <Stack
        direction="row"
        spacing={6}
        useFlexGap
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        {logos.map((l) => (
          <Box
            key={l.text}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              opacity: 0.6,
              transition: 'all 0.3s ease',
              cursor: 'default',
              '&:hover': {
                opacity: 1,
                transform: 'scale(1.05)',
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: '1.3rem',
                color: '#a8b8bc',
                letterSpacing: '0.1em',
                lineHeight: 1,
              }}
            >
              {l.text}
            </Typography>
            {l.subtitle && (
              <Typography
                sx={{
                  fontSize: '0.6rem',
                  color: '#6b7c80',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  mt: 0.25,
                }}
              >
                {l.subtitle}
              </Typography>
            )}
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

