export interface Project {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  role: string;
  duration: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
  learning: string;
  category: 'backend' | 'fullstack' | 'frontend' | 'security' | 'ml' | 'systems';
  // New technical metadata fields for high-signal case study
  projectType: string;
  cardHighlights: string[];
  cardChallenge: string;
  teamSize: string;
  status: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  gpa: string;
  duration: string;
  details: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}
