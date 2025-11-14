// src/components/Projects.js (updated minHeight removed for auto-adjust)
import React from 'react';
import { Typography, Card, CardContent, Grid, Chip, Box, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

export const projectsList = [
  {
    name: 'SecurePath Solution',
    tags: ['React', 'JavaScript', 'Machine Learning', 'Full-Stack', 'Security'],
    description: 'A React-based solution for secure path optimization or routing, ensuring data privacy and efficient navigation in dynamic environments.',
    highlights: 'Full-stack implementation with secure APIs; demo available locally via CRA',
    github: 'https://github.com/manishneupane0909-eng/SecurePath-solution',
    demo: null,
    image: null
  },
  {
    name: 'PINN PDE Solver',
    tags: ['Python', 'PyTorch', 'CUDA'],
    description: 'Physics-Informed Neural Network for solving PDEs; training and visualization tooling.',
    highlights: 'Repo with experiments and benchmarks',
    github: 'https://github.com/manishneupane0909-eng/pinn-pde-solver',
    demo: null,
    image: 'https://www.researchgate.net/publication/335990167/figure/fig1/AS:806502679982080@1569296631121/Schematic-of-a-physics-informed-neural-network-PINN-where-the-loss-function-of-PINN.png'
  }
];

export default function Projects() {
  return (
    <Box sx={{ pt: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>Projects</Typography>
      <Grid container spacing={2}>
        {projectsList.map((project, idx) => (
          <Grid item xs={12} sm={6} key={project.name}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }}>
              <Card elevation={6} sx={{ height: 'auto', background: 'rgba(24,38,44,0.8)', borderRadius: 4, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.02)' } }}>  {/* Removed minHeight */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.name} illustration`}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', maxHeight: 200, objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                  />
                )}
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{project.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#cddede', mb: 1 }}>{project.description}</Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                    {project.tags.map((tag) => (<Chip key={tag} label={tag} size="small" color="primary" />))}
                  </Box>
                  <Typography variant="caption" color="primary.light">{project.highlights}</Typography>
                </CardContent>
                {(project.github || project.demo) && (
                  <CardActions sx={{ pt: 0, pl: 2, pb: 2 }}>
                    {project.github && <Button size="small" href={project.github} target="_blank" rel="noopener noreferrer">GitHub</Button>}
                    {project.demo && <Button size="small" href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</Button>}
                  </CardActions>
                )}
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}