export type ThemeMode = 'light' | 'dark';

export interface Project {
  name: string;
  tags: string[];
  description: string;
  highlights: string;
  github: string | null;
  demo: string | null;
  image: string | null;
  featured: boolean;
}

export interface Achievement {
  metric: string;
  label: string;
  context: string;
}

export interface NavItem {
  label: string;
  to: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export type ContactStatus = 'idle' | 'ok' | 'error' | 'loading';

