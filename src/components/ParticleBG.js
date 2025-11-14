import React, { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const baseOptions = {
  background: { color: '#23242a' },
  fpsLimit: 60,
  interactivity: {
    events: { onClick: { enable: true, mode: 'push' }, onHover: { enable: true, mode: 'repulse' }, resize: true },
    modes: { push: { quantity: 4 }, repulse: { distance: 70, duration: 0.7 } }
  },
  particles: {
    color: { value: '#00eaff' },
    links: { enable: true, color: '#ff79c6', distance: 120, opacity: 0.5, width: 2 },
    collisions: { enable: false },
    move: { direction: 'none', outModes: { default: 'bounce' }, enable: true, speed: 1 },
    number: { value: 60, density: { enable: true, area: 800 } },
    opacity: { value: 0.4 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 3 } }
  },
  detectRetina: true
};

export default function ParticleBG() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) return null;

  return (
    <div id="particle-bg" aria-hidden>
      <Particles options={baseOptions} init={particlesInit} />
    </div>
  );
}