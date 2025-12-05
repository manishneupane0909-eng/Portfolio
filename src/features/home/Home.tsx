import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Stack,
  Button,
  Chip,
  Avatar,
  Card,
  CardContent,
  ListItemIcon,
  Link as MuiLink,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { projectsList } from './data/projects';
import { achievements } from './data/achievements';
import { LogoRow } from '@/shared/components/LogoRow';

const featuredProjects = projectsList.filter((p) => p.featured);

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, pt: { xs: 2, sm: 4 } }}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <Paper
          elevation={12}
          sx={{
            p: { xs: 3, sm: 5 },
            background: 'linear-gradient(135deg, rgba(24,38,44,0.95) 0%, rgba(20,30,38,0.98) 100%)',
            borderRadius: 6,
            boxShadow: '0 12px 40px #00eaff33',
            color: '#eaf8fa',
            border: '1px solid rgba(0,234,255,0.1)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Chip
              icon={<RocketLaunchIcon sx={{ fontSize: 16 }} />}
              label="ACTIVELY SEEKING R&D / ROBOTICS / SWE ROLES"
              color="secondary"
              sx={{
                mb: 3,
                fontFamily: "'Source Code Pro', monospace",
                fontWeight: 500,
                fontSize: '0.75rem',
                letterSpacing: '0.05em',
                py: 2.5,
                '& .MuiChip-icon': { color: 'inherit' },
              }}
            />
          </motion.div>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            alignItems={{ xs: 'center', md: 'center' }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <Avatar
                src="/profile.jpeg"
                srcSet="/profile.jpeg 1x, /profile.jpeg 2x"
                alt="Manish Neupane"
                sx={{
                  width: { xs: 100, sm: 120 },
                  height: { xs: 100, sm: 120 },
                  border: '3px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 0 30px rgba(0,234,255,0.3)',
                }}
              />
            </motion.div>
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.1,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                }}
              >
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Physics
                </Box>
                <Box component="span" sx={{ color: '#8892a0', mx: 1 }}>
                  ×
                </Box>
                <Box component="span" sx={{ color: 'secondary.main' }}>
                  Code
                </Box>
              </Typography>
              <Typography
                variant="h5"
                sx={{ mt: 1, fontWeight: 400, color: '#a8c5ca', lineHeight: 1.4 }}
              >
                I turn lab data into production systems—from Heusler alloys to autonomous robots.
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ mt: 2, flexWrap: 'wrap', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}
              >
                <Chip
                  icon={<SchoolIcon />}
                  label="BS Physics + CS @ SDSU '26"
                  size="small"
                  variant="outlined"
                  sx={{ borderColor: 'rgba(255,255,255,0.2)', color: '#cddede' }}
                />
                <Chip
                  icon={<WorkIcon />}
                  label="Starship • Daktronics • SDSU Lab"
                  size="small"
                  variant="outlined"
                  sx={{ borderColor: 'rgba(255,255,255,0.2)', color: '#cddede' }}
                />
              </Stack>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                mt={3}
                sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  href="/Resume.pdf"
                  download
                  size="large"
                  sx={{ fontWeight: 700, px: 4, boxShadow: '0 4px 20px rgba(0,234,255,0.4)' }}
                >
                  Download Resume
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  href="mailto:manishneupane0909@gmail.com"
                  size="large"
                  sx={{ fontWeight: 600, px: 4 }}
                >
                  Let's Talk →
                </Button>
              </Stack>
            </Box>
          </Stack>

          <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <Typography
              variant="overline"
              sx={{
                color: '#6b7c85',
                mb: 2,
                display: 'block',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              Quantified Impact
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2 }}>
              {achievements.map((a, i) => (
                <Box key={a.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 2,
                        borderRadius: 3,
                        background: 'rgba(0,234,255,0.05)',
                        border: '1px solid rgba(0,234,255,0.1)',
                        transition: 'all 0.3s',
                        '&:hover': {
                          background: 'rgba(0,234,255,0.1)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          color: 'primary.main',
                          fontFamily: "'Source Code Pro', monospace",
                        }}
                      >
                        {a.metric}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#eaf8fa' }}>
                        {a.label}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#6b8a8f' }}>
                        {a.context}
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </motion.div>

      <LogoRow />

      <section>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: 'primary.main' }}>
          Featured work
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: '#cfe8ea' }}>
          Problem → Action → Result snapshots. Full list on the Projects page.
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {featuredProjects.map((p, i) => (
            <Box key={p.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card
                  elevation={6}
                  sx={{
                    height: 'auto',
                    background: 'rgba(24,38,44,0.85)',
                    borderRadius: 4,
                    transition: 'all 0.3s',
                    '&:hover': { boxShadow: '0 4px 12px #00eaff55' },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {p.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#cddede', mt: 1, mb: 2 }}>
                      {p.description}
                    </Typography>
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" mb={2}>
                      {p.tags.map((t) => (
                        <Chip key={t} label={t} size="small" color="primary" />
                      ))}
                    </Stack>
                    <Typography variant="caption" color="primary.light">
                      {p.highlights}
                    </Typography>
                    <Stack direction="row" spacing={2} mt={2}>
                      {p.github && (
                        <Button
                          variant="outlined"
                          size="small"
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </Button>
                      )}
                      {p.demo && (
                        <Button
                          variant="outlined"
                          size="small"
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </Button>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </section>

      <Paper
        elevation={8}
        sx={{
          p: 3,
          borderRadius: 4,
          background: 'rgba(24,38,44,0.85)',
          border: '1px solid rgba(0,234,255,0.08)',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: '#4ade80',
              animation: 'pulse 2s infinite',
            }}
          />
          <Typography variant="overline" sx={{ color: '#4ade80', letterSpacing: '0.1em' }}>
            Currently Building
          </Typography>
        </Stack>
        <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
          <Stack direction="row" alignItems="flex-start" spacing={2} sx={{ mb: 2 }}>
            <ListItemIcon sx={{ minWidth: 'auto', mt: 0.5 }}>
              <GitHubIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <Box>
              <MuiLink
                href="https://github.com/manishneupane0909-eng/pinn-pde-solver"
                underline="hover"
                sx={{ color: '#eaf8fa', fontWeight: 600 }}
              >
                PINN Benchmarking Suite
              </MuiLink>
              <Typography variant="body2" sx={{ color: '#8ca0a3' }}>
                Comparing physics-informed neural nets vs. FEM for diffusion PDEs — targeting 25%
                speedup in irregular geometries.
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="flex-start" spacing={2} sx={{ mb: 2 }}>
            <ListItemIcon sx={{ minWidth: 'auto', mt: 0.5 }}>
              <DescriptionIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <Box>
              <MuiLink
                href="/Resume.pdf"
                underline="hover"
                sx={{ color: '#eaf8fa', fontWeight: 600 }}
              >
                Magnetometer Analysis Pipeline
              </MuiLink>
              <Typography variant="body2" sx={{ color: '#8ca0a3' }}>
                Automated Ms/Hc extraction from VSM data with ML noise reduction — already cut
                analysis time by 80%.
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="flex-start" spacing={2}>
            <ListItemIcon sx={{ minWidth: 'auto', mt: 0.5 }}>
              <BuildIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <Box>
              <MuiLink
                href="https://github.com/manishneupane0909-eng"
                underline="hover"
                sx={{ color: '#eaf8fa', fontWeight: 600 }}
              >
                Lab Robot Telemetry System
              </MuiLink>
              <Typography variant="body2" sx={{ color: '#8ca0a3' }}>
                Better state recovery and real-time monitoring — applying lessons from Starship fleet
                ops.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 4,
          background: 'linear-gradient(135deg, rgba(255,121,198,0.08) 0%, rgba(0,234,255,0.08) 100%)',
          border: '1px solid rgba(255,121,198,0.15)',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
          Ideal Next Role
        </Typography>
        <Typography variant="body1" sx={{ color: '#cfe8ea', mb: 3, lineHeight: 1.7 }}>
          Looking for <strong>R&D, robotics, or software engineering</strong> positions where I can
          apply physics intuition to real systems. I thrive in <strong>hands-on teams</strong> that
          value code quality, ship iteratively, and tackle hard problems at the intersection of
          hardware and software.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2, mb: 3 }}>
          {[
            {
              title: 'Great Fit',
              items: [
                'Robotics / Autonomous Systems',
                'Applied ML / Scientific Computing',
                'Hardware-Software Integration',
                'R&D Labs & Deep Tech',
              ],
            },
            {
              title: 'I Bring',
              items: [
                'Physics + CS dual perspective',
                'Production robotics experience',
                'Research-to-code pipeline skills',
                'Strong written communication',
              ],
            },
          ].map((col) => (
            <Box key={col.title}>
              <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                {col.title}
              </Typography>
              <Box component="ul" sx={{ m: 0, mt: 1, pl: 2 }}>
                {col.items.map((item) => (
                  <Typography component="li" variant="body2" key={item} sx={{ color: '#b8d4d8', mb: 0.5 }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="contained"
            color="secondary"
            href="mailto:manishneupane0909@gmail.com"
            size="large"
            sx={{ fontWeight: 700, px: 4 }}
          >
            Invite Me to Interview
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate('/projects')}
            size="large"
            sx={{ fontWeight: 600, px: 4 }}
          >
            See All Projects
          </Button>
        </Stack>
      </Paper>

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Like what you see? I reply fast on email.
        </Typography>
        <Button
          sx={{ mt: 1 }}
          variant="text"
          color="primary"
          href="mailto:manishneupane0909@gmail.com"
        >
          manishneupane0909@gmail.com
        </Button>
      </Box>
    </Box>
  );
};

