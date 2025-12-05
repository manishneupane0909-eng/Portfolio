import { Project } from '@/shared/types';

export const projectsList: Project[] = [
  {
    name: 'ElementX',
    tags: ['React', 'FastAPI', 'Python', 'NumPy', 'MongoDB', 'JWT Auth'],
    description:
      'Full-stack materials characterization platform for researchers. Features stoichiometry calculator, XRD peak detection with SciPy, and M-H loop analysis for magnetic properties (Ms, Hc extraction).',
    highlights:
      'Problem: Manual compound calculations are error-prone → Built automated tool → Used by lab colleagues for Heusler alloy synthesis',
    github: 'https://github.com/manishneupane0909-eng/ElementX',
    demo: null,
    image: null,
    featured: true,
  },
  {
    name: 'PINN PDE Solver',
    tags: ['Python', 'PyTorch', 'CUDA', 'Scientific Computing'],
    description:
      'Physics-Informed Neural Network that embeds physical laws directly into the loss function to solve diffusion-type PDEs. Benchmarked against FEM solvers for accuracy and speed.',
    highlights:
      'Problem: Classical solvers slow on irregular geometries → PINNs leverage GPU → 25% speedup on complex domains',
    github: 'https://github.com/manishneupane0909-eng/pinn-pde-solver',
    demo: null,
    image: null,
    featured: true,
  },
  {
    name: 'Magnetometer Data Pipeline',
    tags: ['Python', 'MATLAB', 'Data Automation', 'Signal Processing'],
    description:
      'Automated analysis pipeline for VSM/PPMS magnetometer data. Extracts saturation magnetization (Ms), coercivity (Hc), and remanence (Mr) from hysteresis loops with ML-based noise reduction.',
    highlights:
      'Problem: Manual M-H analysis took hours → Automated extraction → 80% faster analysis, reproducible results',
    github: 'https://github.com/manishneupane0909-eng/magnetometer-pipeline',
    demo: null,
    image: null,
    featured: true,
  },
  {
    name: 'Starship Fleet Telemetry Dashboard',
    tags: ['Python', 'Real-time Data', 'Robotics', 'Monitoring'],
    description:
      'Internal telemetry and monitoring system for autonomous delivery robot fleets. Tracks robot state, battery levels, delivery status, and implements predictive maintenance alerts.',
    highlights:
      'Problem: Robot failures caused delivery delays → Built predictive monitoring → Contributed to 99% fleet uptime',
    github: null,
    demo: null,
    image: null,
    featured: false,
  },
  {
    name: 'Daktronics Display Visualizer',
    tags: ['JavaScript', 'Data Visualization', 'Hardware Integration'],
    description:
      'Data visualization tools for LED display systems. Built during internship to help engineers preview content layouts and debug display configurations before deployment.',
    highlights:
      'Problem: Display debugging required physical hardware → Built simulator → Reduced testing cycles by 50%',
    github: null,
    demo: null,
    image: null,
    featured: false,
  },
];

