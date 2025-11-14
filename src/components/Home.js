// src/components/Home.js (removed minHeight from cards in featured section to auto-adjust; single column on small screens for no gaps)
import React from 'react';
import { Box, Paper, Typography, Stack, Button, Chip, Avatar, Grid, Divider, Card, CardContent, ListItemIcon, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { projectsList } from './Projects';
import { stats } from '../data/stats';
import LogoRow from './LogoRow';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import BuildIcon from '@mui/icons-material/Build';

// Pick featured projects (SecurePath first, PINN PDE second as per updated list)
const featuredProjects = projectsList;

export default function Home() {
  const projectCount = projectsList.length;
  const awardsCount = stats.awardsCount;
  const yearsCoding = stats.yearsCoding;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, pt: 6 }}>
      {/* HERO */}
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
        <Paper elevation={12} sx={{ p: { xs: 3, sm: 4 }, background: 'rgba(24,38,44,0.9)', borderRadius: 6, boxShadow: '0 8px 24px #00eaff44', color: '#eaf8fa' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', sm: 'center' }}>
            <Avatar src="/profile.jpeg" alt="Manish Neupane" sx={{ width: 80, height: 80 }} />
            <Box>
              <Typography variant="overline" color="secondary">Open to 2025–26 R&D / Robotics / SWE roles</Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, lineHeight: 1.2, color: 'primary.main' }}>Physics × CS → building magnetic materials, robots, and data tools</Typography>
              <Typography variant="body1" sx={{ mt: 1, maxWidth: 800, color: '#d7eef1' }}>
                I turn lab measurements and logs into robust software + hardware systems. Recent work: Heusler alloys (APS 2023/24), Starship robot ops, PINN PDE solver in PyTorch.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={2}>
                <Button variant="contained" color="primary" href="/Resume.pdf" download>Download Resume</Button>
                <Button variant="outlined" color="secondary" href="mailto:manishneupane0909@gmail.com">Book a 15‑min chat</Button>
              </Stack>
            </Box>
          </Stack>

          {/* QUICK STATS */}
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {[{ label: 'Projects', value: projectCount, color: 'secondary' }, { label: 'Awards', value: awardsCount, color: 'primary' }, { label: 'Years Coding', value: yearsCoding, color: 'info' }].map((s) => (
              <Grid item xs={4} key={s.label}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="subtitle1">{s.label}</Typography>
                  <Typography variant="h4" color={`${s.color}.main`}><CountUp end={s.value} duration={2} /></Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </motion.div>

      {/* LOGO / PROOF ROW */}
      <LogoRow />

      {/* FEATURED PROJECTS */}
      <section>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: 'primary.main' }}>Featured work</Typography>
        <Typography variant="body2" sx={{ mb: 3, color: '#cfe8ea' }}>Problem → Action → Result snapshots. Full list on the Projects page.</Typography>
        <Grid container spacing={3}>
          {featuredProjects.map((p, i) => (
            <Grid item xs={12} sm={6} md={4} key={p.name}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Card elevation={6} sx={{ height: 'auto', background: 'rgba(24,38,44,0.85)', borderRadius: 4, transition: 'all 0.3s', '&:hover': { boxShadow: '0 4px 12px #00eaff55' } }}>  {/* Changed to height: 'auto' */}
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{p.name}</Typography>
                    <Typography variant="body2" sx={{ color: '#cddede', mt: 1, mb: 2 }}>{p.description}</Typography>
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" mb={2}>
                      {p.tags.map((t) => <Chip key={t} label={t} size="small" color="primary" />)}
                    </Stack>
                    <Typography variant="caption" color="primary.light">{p.highlights}</Typography>
                    <Stack direction="row" spacing={2} mt={2}>
                      {p.github && <Button variant="outlined" size="small" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</Button>}
                      {p.demo && <Button variant="outlined" size="small" href={p.demo} target="_blank" rel="noopener noreferrer">Live Demo</Button>}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* CURRENT FOCUS */}
      <Paper elevation={8} sx={{ p: 3, borderRadius: 4, background: 'rgba(24,38,44,0.85)' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'secondary.main' }}>Currently</Typography>
        <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <ListItemIcon sx={{ minWidth: 'auto' }}>
              <GitHubIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <MuiLink href="https://github.com/manishneupane0909-eng/pinn-pde-solver" underline="hover" sx={{ color: '#cddede' }}>
              Benchmarking PINNs vs. classical solvers for diffusion‑type PDEs (speed/accuracy tradeoffs).
            </MuiLink>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <ListItemIcon sx={{ minWidth: 'auto' }}>
              <DescriptionIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <MuiLink href="/Resume.pdf" underline="hover" sx={{ color: '#cddede' }}>
              Automating magnetometer M‑T/M‑H analysis (Ms, Hc extraction with reproducible scripts).
            </MuiLink>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <ListItemIcon sx={{ minWidth: 'auto' }}>
              <BuildIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <MuiLink href="https://github.com/manishneupane0909-eng" underline="hover" sx={{ color: '#cddede' }}>
              Prototyping a small lab robot with better telemetry + recovery behavior.
            </MuiLink>
          </Stack>
        </Box>
      </Paper>

      {/* WHAT I’M LOOKING FOR */}
      <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>What I’m looking for</Typography>
        <Typography variant="body2" sx={{ mt: 1, color: '#cfe8ea' }}>
          R&D or software roles where physics meets code: materials/automation, robotics, applied ML, or platform tooling. Prefer hands‑on teams, strong code review, and opportunities to deploy.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={2}>
          <Button variant="contained" color="primary" href="mailto:manishneupane0909@gmail.com">Invite me to interview</Button>
          <Button variant="outlined" color="secondary" href="/projects">See all projects</Button>
        </Stack>
      </Paper>

      {/* FOOTER CTA */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>Like what you see? I reply fast on email.</Typography>
        <Button sx={{ mt: 1 }} variant="text" color="primary" href="mailto:manishneupane0909@gmail.com">manishneupane0909@gmail.com</Button>
      </Box>
    </Box>
  );
}