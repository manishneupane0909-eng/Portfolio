import React from 'react';
import { Paper, Stack } from '@mui/material';

const logos = [
  { src: 'https://1000logos.net/wp-content/uploads/2020/01/South-Dakota-State-Jackrabbits-Logo.jpg', alt: 'SDSU Jackrabbits' },
  { src: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Logo-aps-no-tagline.svg/1200px-Logo-aps-no-tagline.svg.png', alt: 'APS' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Daktronics_Logo.svg/2560px-Daktronics_Logo.svg.png', alt: 'Daktronics' },
  { src: 'https://seekvectorlogo.com/wp-content/uploads/2018/09/starship-technologies-vector-logo.png', alt: 'Starship' }
];

export default function LogoRow() {
  return (
    <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} useFlexGap flexWrap="wrap" alignItems="center" justifyContent="center">
        {logos.map(l => (
          <img
            key={l.alt}
            src={l.src}
            alt={l.alt}
            height={32}
            loading="lazy"
            style={{ filter: 'grayscale(100%) contrast(120%)', opacity: 0.85, mixBlendMode: 'luminosity', transition: 'filter 0.3s' }}
            onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%) contrast(100%)'}
            onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%) contrast(120%)'}
          />
        ))}
      </Stack>
    </Paper>
  );
}