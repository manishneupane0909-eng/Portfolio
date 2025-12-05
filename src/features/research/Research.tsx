import React from 'react';
import { Box, Typography, Paper, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';

interface ResearchItem {
  title: string;
  abstract: string;
  pdf: string;
  highlights: string;
}

const researchItems: ResearchItem[] = [
  {
    title: 'Heusler Alloys: Magnetic Properties Analysis',
    abstract:
      'Investigated the structural, electronic, and magnetic properties of Ni-based Heusler alloys using experimental techniques and computational modeling. Focused on half-metallicity and spin-polarization for spintronic applications, with VSM measurements revealing high Curie temperatures and low coercivity in optimized compositions, similar to studies on Mn2VAl alloys showing potential for room-temperature spin filters.',
    pdf: '/papers/heusler-alloys-aps2023.pdf',
    highlights:
      'APS March Meeting 2023; Comparable to arXiv papers on disorder-tolerant Heusler magnets',
  },
  {
    title: 'PINN for Diffusion PDEs: Benchmarks and Applications',
    abstract:
      'Implemented Physics-Informed Neural Networks (PINNs) in PyTorch to solve diffusion-type partial differential equations (PDEs), embedding physical constraints into the neural architecture for improved generalization with sparse data. Benchmarked against traditional solvers (e.g., finite element methods), showing 15-25% speedup in irregular geometries and nonlinear scenarios, akin to recent works on PINNs for fluid mechanics in Nature Machine Intelligence.',
    pdf: '/papers/pinn-pde-benchmarks.pdf',
    highlights: 'Benchmarks show 25% efficiency gain; Inspired by similar PDE solvers on GitHub/arXiv',
  },
  {
    title: 'Lab Automation for Magnetometer Data',
    abstract:
      'Created automated tools for processing magnetometer data from PPMS systems, employing machine learning for noise reduction and parameter extraction in hysteresis loops. This reproducible pipeline accelerated analysis of ferromagnetic materials, mirroring automation strategies in high-throughput materials discovery platforms like those at NIST.',
    pdf: '/papers/magnetometer-automation.pdf',
    highlights:
      'Reduced analysis time by 80%; Similar to MDPI-published workflows for magnetic characterization',
  },
];

export const Research: React.FC = () => {
  return (
    <Box sx={{ pt: { xs: 2, sm: 5 } }}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
        Research
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: '#cddede' }}>
        Selected publications and presentations. Full CV on Resume.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {researchItems.map((item, idx) => (
          <Box key={item.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Paper
                elevation={6}
                sx={{
                  p: { xs: 2, sm: 3 },
                  background: 'rgba(24,38,44,0.8)',
                  borderRadius: 4,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#cddede', mt: 1, mb: 2, lineHeight: 1.6 }}>
                  {item.abstract}
                </Typography>
                <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.08)' }} />
                <Typography variant="caption" color="primary.light" sx={{ display: 'block', mb: 2 }}>
                  {item.highlights}
                </Typography>
                <Button variant="outlined" color="primary" href={item.pdf} download size="small">
                  Download PDF
                </Button>
              </Paper>
            </motion.div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

