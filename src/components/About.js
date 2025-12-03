// src/components/About.js - Recruiter-optimized layout
import React from 'react';
import { Typography, Paper, Chip, Box, Divider, Stack, Avatar, Link as MuiLink, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';

const skillCategories = [
  { 
    title: 'Languages', 
    skills: ['Python', 'C', 'JavaScript', 'MATLAB'],
    color: 'primary'
  },
  { 
    title: 'ML & Data', 
    skills: ['PyTorch', 'NumPy', 'SciPy', 'CUDA', 'Pandas'],
    color: 'secondary'
  },
  { 
    title: 'Tools & Infra', 
    skills: ['Git', 'MongoDB', 'FastAPI', 'React', 'Linux'],
    color: 'primary'
  },
  { 
    title: 'Domain', 
    skills: ['Robotics', 'Signal Processing', 'Materials Science', 'Scientific Computing'],
    color: 'secondary'
  }
];

const experience = [
  {
    role: 'Research Assistant',
    company: 'SDSU Magnetic Materials Lab',
    period: '2022 – Present',
    highlights: [
      'Led Heusler alloy synthesis & characterization (APS 2023/24 presenter)',
      'Built automated VSM/PPMS data pipelines → 80% faster analysis',
      'Co-authored research on MnBi-Fe composite permanent magnets'
    ]
  },
  {
    role: 'Robotics Operator',
    company: 'Starship Technologies',
    period: '2023 – Present',
    highlights: [
      'Managed autonomous delivery fleet operations across campus',
      'Improved recovery protocols → contributed to 99% fleet uptime',
      'Developed internal telemetry monitoring tools'
    ]
  },
  {
    role: 'Software Engineering Intern',
    company: 'Daktronics',
    period: 'Summer 2022',
    highlights: [
      'Built visualization tools for LED display systems',
      'Reduced hardware testing cycles by 50% with simulator',
      'Integrated data pipelines for real-time display content'
    ]
  }
];

export default function About() {
  return (
    <Box sx={{ pt: 5, pb: 4 }}>
      {/* Header Section */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Paper elevation={10} sx={{ p: { xs: 3, sm: 4 }, background: 'linear-gradient(135deg, rgba(24,38,44,0.95) 0%, rgba(30,45,55,0.95) 100%)', borderRadius: 6, border: '1px solid rgba(0,234,255,0.1)', mb: 3 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ xs: 'center', sm: 'flex-start' }}>
            <Avatar 
              src="/profile.jpeg" 
              alt="Manish Neupane" 
              sx={{ 
                width: 120, 
                height: 120, 
                border: '3px solid',
                borderColor: 'primary.main',
                boxShadow: '0 0 30px rgba(0,234,255,0.2)'
              }} 
            />
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 0.5 }}>
                Manish Neupane
              </Typography>
              <Typography variant="h6" sx={{ color: '#a8c5ca', fontWeight: 400, mb: 2 }}>
                Physics × Computer Science · Building tools at the intersection of science and software
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                <Chip icon={<SchoolIcon />} label="BS Physics + CS @ SDSU '26" size="small" sx={{ bgcolor: 'rgba(0,234,255,0.1)', color: 'primary.main' }} />
                <Chip icon={<WorkIcon />} label="Open to Opportunities" size="small" color="secondary" />
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </motion.div>

      <Grid container spacing={3}>
        {/* Experience Section */}
        <Grid item xs={12} md={7}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Paper elevation={6} sx={{ p: 3, background: 'rgba(24,38,44,0.85)', borderRadius: 4, height: '100%' }}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
                <WorkIcon color="primary" />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>Experience</Typography>
              </Stack>
              
              {experience.map((exp, idx) => (
                <Box key={exp.company} sx={{ mb: idx < experience.length - 1 ? 3 : 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1 }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#eaf8fa', fontSize: '1rem' }}>
                        {exp.role}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>
                        {exp.company}
                      </Typography>
                    </Box>
                    <Chip 
                      label={exp.period} 
                      size="small" 
                      sx={{ 
                        bgcolor: 'rgba(255,255,255,0.05)', 
                        color: '#8ca0a3',
                        fontFamily: "'Source Code Pro', monospace",
                        fontSize: '0.7rem'
                      }} 
                    />
                  </Box>
                  <Box component="ul" sx={{ m: 0, mt: 1, pl: 2.5, color: '#b8cfd3' }}>
                    {exp.highlights.map((h, i) => (
                      <Typography component="li" variant="body2" key={i} sx={{ mb: 0.5, lineHeight: 1.5 }}>
                        {h}
                      </Typography>
                    ))}
                  </Box>
                  {idx < experience.length - 1 && <Divider sx={{ mt: 2, borderColor: 'rgba(255,255,255,0.06)' }} />}
                </Box>
              ))}
            </Paper>
          </motion.div>
        </Grid>

        {/* Right Column: Education, Skills, Recognition */}
        <Grid item xs={12} md={5}>
          <Stack spacing={3}>
            {/* Education */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Paper elevation={6} sx={{ p: 3, background: 'rgba(24,38,44,0.85)', borderRadius: 4 }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                  <SchoolIcon color="primary" />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Education</Typography>
                </Stack>
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#eaf8fa' }}>
                  B.S. Physics & Computer Science
                </Typography>
                <Typography variant="body2" sx={{ color: 'primary.main' }}>
                  South Dakota State University
                </Typography>
                <Typography variant="caption" sx={{ color: '#8ca0a3', fontFamily: "'Source Code Pro', monospace" }}>
                  Expected Spring 2026
                </Typography>
              </Paper>
            </motion.div>

            {/* Skills */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <Paper elevation={6} sx={{ p: 3, background: 'rgba(24,38,44,0.85)', borderRadius: 4 }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                  <CodeIcon color="primary" />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Skills</Typography>
                </Stack>
                {skillCategories.map((cat) => (
                  <Box key={cat.title} sx={{ mb: 2 }}>
                    <Typography variant="overline" sx={{ color: '#6b8a8f', fontSize: '0.65rem' }}>
                      {cat.title}
                    </Typography>
                    <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                      {cat.skills.map((s) => (
                        <Chip 
                          key={s} 
                          label={s} 
                          size="small"
                          sx={{ 
                            fontSize: '0.7rem',
                            height: 24,
                            bgcolor: cat.color === 'primary' ? 'rgba(0,234,255,0.1)' : 'rgba(255,121,198,0.1)',
                            color: cat.color === 'primary' ? 'primary.main' : 'secondary.main',
                            border: '1px solid',
                            borderColor: cat.color === 'primary' ? 'rgba(0,234,255,0.2)' : 'rgba(255,121,198,0.2)'
                          }} 
                        />
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Paper>
            </motion.div>

            {/* Recognition */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <Paper elevation={6} sx={{ p: 3, background: 'rgba(24,38,44,0.85)', borderRadius: 4 }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                  <EmojiEventsIcon color="secondary" />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Recognition</Typography>
                </Stack>
                <Box component="ul" sx={{ m: 0, pl: 2, color: '#b8cfd3' }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    <strong style={{ color: '#ff79c6' }}>APS March Meeting</strong> Presenter (2023, 2024)
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    <strong style={{ color: '#00eaff' }}>Dean's List</strong> – SDSU (2022–2024)
                  </Typography>
                  <Typography component="li" variant="body2">
                    <strong style={{ color: '#00eaff' }}>Undergraduate Research Scholarship</strong>
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Stack>
        </Grid>
      </Grid>

      {/* Contact CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <Paper elevation={0} sx={{ mt: 3, p: 3, borderRadius: 4, background: 'linear-gradient(135deg, rgba(255,121,198,0.1) 0%, rgba(0,234,255,0.1) 100%)', border: '1px solid rgba(255,121,198,0.15)', textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: '#cddede', mb: 1 }}>
            Want to chat? I'm always happy to discuss physics, robotics, or potential opportunities.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
            <MuiLink href="mailto:manishneupane0909@gmail.com" underline="hover" sx={{ color: 'primary.main', fontWeight: 600 }}>
              manishneupane0909@gmail.com
            </MuiLink>
            <MuiLink href="https://www.linkedin.com/in/manish-neupane-380a65189" target="_blank" underline="hover" sx={{ color: 'secondary.main', fontWeight: 600 }}>
              LinkedIn
            </MuiLink>
            <MuiLink href="https://github.com/manishneupane0909-eng" target="_blank" underline="hover" sx={{ color: 'primary.main', fontWeight: 600 }}>
              GitHub
            </MuiLink>
          </Stack>
        </Paper>
      </motion.div>
    </Box>
  );
}