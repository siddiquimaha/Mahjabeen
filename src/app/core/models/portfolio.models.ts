export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  linkedIn: string;
  gitHub: string;
  location?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  domain: string;
  clientContext: string;
  highlights: string[];
}

export interface Project {
  name: string;
  status: 'Completed' | 'In Progress';
  description: string;
  technologies: string[];
  url?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  status?: 'Completed' | 'In Progress';
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  status?: 'Completed' | 'In Progress';
}

export interface NavLink {
  label: string;
  fragment: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  navLinks: NavLink[];
}
