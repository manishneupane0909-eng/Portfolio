import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '@/features/home/Home';
import { About } from '@/features/about/About';
import { Projects } from '@/features/projects/Projects';
import { Contact } from '@/features/contact/Contact';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

