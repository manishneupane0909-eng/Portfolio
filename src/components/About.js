// src/components/About.js (updated with generated details based on context)
import React from 'react';
import { Typography, Paper, Chip, Box, Divider, Stack, Avatar, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';

const skills = ["Python", "C", "MATLAB", "Origin", "Oscilloscope", "Git", "Robotics", "Research", "Leadership", "Machine Learning", "PyTorch", "Data Automation", "Predictive Modeling", "CUDA"];

export default function About() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <Paper elevation={8} sx={{ p: 4, background: 'rgba(24,38,44,0.8)', borderRadius: 6, boxShadow: '0 6px 18px #00eaff33', color: '#eaf8fa' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Avatar src="/profile.jpeg" alt="Manish Neupane" sx={{ width: 72, height: 72 }} />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>About Me</Typography>
              <Typography variant="subtitle1">Machine Learning Enthusiast & Data Automation Specialist | BS in Physics & Computer Science, South Dakota State University</Typography>
            </Box>
          </Box>
          <Divider sx={{ mb: 2, borderColor: 'rgba(255,255,255,0.08)' }} />
          <Typography variant="body1" sx={{ color: '#cddede', mb: 2 }}>
            As a dedicated Physics and Computer Science student at South Dakota State University, I excel at intersecting scientific principles with computational innovation. My work focuses on developing advanced software solutions for materials research, robotics operations, and machine learning applications, transforming raw experimental data into meaningful, actionable intelligence.
          </Typography>
          <Typography variant="body2" sx={{ color: '#cddede', mb: 2 }}>
            With hands-on experience in magnetic materials labs, I have led experiments on Heusler alloys, automating data analysis to enhance efficiency and accuracy. At Starship Technologies, I optimized autonomous robot fleets, implementing telemetry systems that boosted reliability. My internships at Daktronics honed my skills in software integration for real-world systems. Passionate about applied AI, I build tools like physics-informed neural networks and fraud detection platforms, always prioritizing reproducible, scalable code.
          </Typography>

          <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, fontWeight: 700 }}>Education</Typography>
          <ul>
            <li>Bachelor of Science in Physics and Computer Science, South Dakota State University (Expected 2025)</li>
          </ul>

          <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, fontWeight: 700 }}>Experience</Typography>
          <ul>
            <li>Research Assistant, SDSU Magnetic Materials Lab (2022–Present): Led Heusler alloy studies, automated VSM data processing, presented at APS.</li>
            <li>Robotics Operator, Starship Technologies (2023–Present): Managed fleet ops, improved recovery algorithms for 99% uptime.</li>
            <li>Software Engineering Intern, Daktronics (2022): Built data visualization tools and integrated systems for display technologies.</li>
          </ul>

          <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, fontWeight: 700 }}>Skills</Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
            {skills.map((s) => (<Chip key={s} color="primary" label={s} />))}
          </Stack>

          <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, fontWeight: 700 }}>Select Recognition</Typography>
          <ul>
            <li>American Physical Society (APS) Meeting Presenter (2023, 2024)</li>
            <li>Dean's List, SDSU (2022–2024)</li>
            <li>Undergraduate Research Scholarship, SDSU Physics Department</li>
          </ul>

          <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, fontWeight: 700 }}>Contact</Typography>
          <Typography variant="body2">
            <strong>Email:</strong> <MuiLink href="mailto:manishneupane0909@gmail.com">manishneupane0909@gmail.com</MuiLink><br />
            <strong>LinkedIn:</strong> <MuiLink href="https://www.linkedin.com/in/manish-neupane-380a65189">linkedin.com/in/manish-neupane-380a65189</MuiLink><br />
            <strong>Location:</strong> Brookings, SD
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
}