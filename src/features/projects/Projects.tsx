import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  Chip,
  Box,
  CardActions,
  Button,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Project } from '@/shared/types';
import { projectsList } from './data/projects';

interface ProjectCardProps {
  project: Project;
  idx: number;
  isFeatured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, idx, isFeatured = false }) => (
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
        border: isFeatured
          ? '1px solid rgba(0,234,255,0.2)'
          : '1px solid rgba(255,255,255,0.05)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: isFeatured
            ? '0 12px 40px rgba(0,234,255,0.2)'
            : '0 8px 24px rgba(0,0,0,0.3)',
        },
      }}
    >
      <CardContent sx={{ flex: 1, p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: isFeatured ? 'primary.main' : '#eaf8fa' }}
          >
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

        <Typography variant="body2" sx={{ color: '#b8cfd3', mb: 2, lineHeight: 1.6 }}>
          {project.description}
        </Typography>

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
                '&.MuiChip-filled': { bgcolor: 'rgba(0,234,255,0.15)', color: 'primary.main' },
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            background: 'rgba(0,234,255,0.05)',
            border: '1px solid rgba(0,234,255,0.1)',
            mt: 'auto',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: '#6b8a8f',
              fontFamily: "'Source Code Pro', monospace",
              display: 'block',
              mb: 0.5,
            }}
          >
            IMPACT
          </Typography>
          <Typography variant="body2" sx={{ color: '#a8d4da', fontSize: '0.8rem', lineHeight: 1.5 }}>
            {project.highlights}
          </Typography>
        </Box>
      </CardContent>

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
                '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
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

export const Projects: React.FC = () => {
  const featuredProjects = projectsList.filter((p) => p.featured);
  const otherProjects = projectsList.filter((p) => !p.featured);

  return (
    <Box sx={{ pt: { xs: 2, sm: 5 } }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
          Projects
        </Typography>
        <Typography variant="body1" sx={{ color: '#8ca0a3', maxWidth: 600 }}>
          Production-ready code with real impact. All repos include commit history, tests, and
          documentation. Click through to see the implementation details.
        </Typography>
      </Box>

      <Box sx={{ mb: 5 }}>
        <Typography
          variant="overline"
          sx={{
            color: 'secondary.main',
            fontWeight: 700,
            letterSpacing: '0.15em',
            mb: 2,
            display: 'block',
          }}
        >
          ⭐ Featured Work
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
          {featuredProjects.map((project, idx) => (
            <Box key={project.name}>
              <ProjectCard project={project} idx={idx} isFeatured={true} />
            </Box>
          ))}
        </Box>
      </Box>

      {otherProjects.length > 0 && (
        <Box>
          <Divider sx={{ mb: 4, borderColor: 'rgba(255,255,255,0.08)' }} />
          <Typography
            variant="overline"
            sx={{
              color: '#6b8a8f',
              fontWeight: 600,
              letterSpacing: '0.1em',
              mb: 2,
              display: 'block',
            }}
          >
            More Projects
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2 }}>
            {otherProjects.map((project, idx) => (
              <Box key={project.name}>
                <ProjectCard project={project} idx={idx} isFeatured={false} />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

