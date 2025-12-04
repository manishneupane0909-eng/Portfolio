// src/components/Projects.js - Enhanced with featured projects and PAR format
import React from 'react';
import { Typography, Card, CardContent, Grid, Chip, Box, CardActions, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export const projectsList = [
  {
    name: 'ElementX',
    tags: ['React', 'FastAPI', 'Python', 'NumPy', 'MongoDB', 'JWT Auth'],
    description: 'Full-stack materials characterization platform for researchers. Features stoichiometry calculator, XRD peak detection with SciPy, and M-H loop analysis for magnetic properties (Ms, Hc extraction).',
    highlights: 'Problem: Manual compound calculations are error-prone → Built automated tool → Used by lab colleagues for Heusler alloy synthesis',
    github: 'https://github.com/manishneupane0909-eng/ElementX',
    demo: null,
    image: null,
    featured: true
  },
  {
    name: 'PINN PDE Solver',
    tags: ['Python', 'PyTorch', 'CUDA', 'Scientific Computing'],
    description: 'Physics-Informed Neural Network that embeds physical laws directly into the loss function to solve diffusion-type PDEs. Benchmarked against FEM solvers for accuracy and speed.',
    highlights: 'Problem: Classical solvers slow on irregular geometries → PINNs leverage GPU → 25% speedup on complex domains',
    github: 'https://github.com/manishneupane0909-eng/pinn-pde-solver',
    demo: null,
    image: null,
    featured: true
  },
  {
    name: 'Magnetometer Data Pipeline',
    tags: ['Python', 'MATLAB', 'Data Automation', 'Signal Processing'],
    description: 'Automated analysis pipeline for VSM/PPMS magnetometer data. Extracts saturation magnetization (Ms), coercivity (Hc), and remanence (Mr) from hysteresis loops with ML-based noise reduction.',
    highlights: 'Problem: Manual M-H analysis took hours → Automated extraction → 80% faster analysis, reproducible results',
    github: 'https://github.com/manishneupane0909-eng/magnetometer-pipeline',
    demo: null,
    image: null,
    featured: true
  },
  {
    name: 'Starship Fleet Telemetry Dashboard',
    tags: ['Python', 'Real-time Data', 'Robotics', 'Monitoring'],
    description: 'Internal telemetry and monitoring system for autonomous delivery robot fleets. Tracks robot state, battery levels, delivery status, and implements predictive maintenance alerts.',
    highlights: 'Problem: Robot failures caused delivery delays → Built predictive monitoring → Contributed to 99% fleet uptime',
    github: null,
    demo: null,
    image: null,
    featured: false
  },
  {
    name: 'Daktronics Display Visualizer',
    tags: ['JavaScript', 'Data Visualization', 'Hardware Integration'],
    description: 'Data visualization tools for LED display systems. Built during internship to help engineers preview content layouts and debug display configurations before deployment.',
    highlights: 'Problem: Display debugging required physical hardware → Built simulator → Reduced testing cycles by 50%',
    github: null,
    demo: null,
    image: null,
    featured: false
  }
];

export default function Projects() {
  const featuredProjects = projectsList.filter(p => p.featured);
  const otherProjects = projectsList.filter(p => !p.featured);

  const ProjectCard = ({ project, idx, isFeatured = false }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.5, delay: idx * 0.08 }}
    >
      <Card 
        elevation={isFeatured ? 10 : 4} 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: isFeatured 
            ? 'linear-gradient(135deg, rgba(24,38,44,0.95) 0%, rgba(30,45,55,0.95) 100%)' 
            : 'rgba(24,38,44,0.8)', 
          borderRadius: 4, 
          border: isFeatured ? '1px solid rgba(0,234,255,0.2)' : '1px solid rgba(255,255,255,0.05)',
          transition: 'all 0.3s ease', 
          '&:hover': { 
            transform: 'translateY(-4px)', 
            boxShadow: isFeatured ? '0 12px 40px rgba(0,234,255,0.2)' : '0 8px 24px rgba(0,0,0,0.3)'
          } 
        }}
      >
        <CardContent sx={{ flex: 1, p: 3 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: isFeatured ? 'primary.main' : '#eaf8fa' }}>
              {project.name}
            </Typography>
            {isFeatured && (
              <Chip 
                icon={<StarIcon sx={{ fontSize: 14 }} />} 
                label="Featured" 
                size="small" 
                color="secondary"
                sx={{ fontWeight: 600, fontSize: '0.7rem' }}
              />
            )}
          </Box>

          {/* Description */}
          <Typography variant="body2" sx={{ color: '#b8cfd3', mb: 2, lineHeight: 1.6 }}>
            {project.description}
          </Typography>

          {/* Tech Stack */}
          <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mb: 2 }}>
            {project.tags.map((tag) => (
              <Chip 
                key={tag} 
                label={tag} 
                size="small" 
                variant={isFeatured ? 'filled' : 'outlined'}
                sx={{ 
                  fontSize: '0.7rem',
                  height: 24,
                  borderColor: 'rgba(0,234,255,0.3)',
                  color: isFeatured ? undefined : '#8ca8ad',
                  '&.MuiChip-filled': { bgcolor: 'rgba(0,234,255,0.15)', color: 'primary.main' }
                }} 
              />
            ))}
          </Box>

          {/* Impact Highlight (PAR format) */}
          <Box sx={{ 
            p: 2, 
            borderRadius: 2, 
            background: 'rgba(0,234,255,0.05)', 
            border: '1px solid rgba(0,234,255,0.1)',
            mt: 'auto'
          }}>
            <Typography variant="caption" sx={{ color: '#6b8a8f', fontFamily: "'Source Code Pro', monospace", display: 'block', mb: 0.5 }}>
              IMPACT
            </Typography>
            <Typography variant="body2" sx={{ color: '#a8d4da', fontSize: '0.8rem', lineHeight: 1.5 }}>
              {project.highlights}
            </Typography>
          </Box>
        </CardContent>

        {/* Actions */}
        {(project.github || project.demo) && (
          <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
            {project.github && (
              <Button 
                size="small" 
                variant="outlined"
                startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  borderColor: 'rgba(255,255,255,0.2)', 
                  color: '#cddede',
                  '&:hover': { borderColor: 'primary.main', color: 'primary.main' }
                }}
              >
                Code
              </Button>
            )}
            {project.demo && (
              <Button 
                size="small" 
                variant="contained"
                startIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            )}
          </CardActions>
        )}
      </Card>
    </motion.div>
  );

  return (
    <Box sx={{ pt: 5 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>Projects</Typography>
        <Typography variant="body1" sx={{ color: '#8ca0a3', maxWidth: 600 }}>
          Production-ready code with real impact. All repos include commit history, tests, and documentation. Click through to see the implementation details.
        </Typography>
      </Box>

      {/* Featured Projects */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.15em', mb: 2, display: 'block' }}>
          ⭐ Featured Work
        </Typography>
        <Grid container spacing={3}>
          {featuredProjects.map((project, idx) => (
            <Grid item xs={12} md={6} lg={4} key={project.name}>
              <ProjectCard project={project} idx={idx} isFeatured={true} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <Box>
          <Divider sx={{ mb: 4, borderColor: 'rgba(255,255,255,0.08)' }} />
          <Typography variant="overline" sx={{ color: '#6b8a8f', fontWeight: 600, letterSpacing: '0.1em', mb: 2, display: 'block' }}>
            More Projects
          </Typography>
          <Grid container spacing={2}>
            {otherProjects.map((project, idx) => (
              <Grid item xs={12} sm={6} lg={4} key={project.name}>
                <ProjectCard project={project} idx={idx} isFeatured={false} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}