
export interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'UI Design' | 'Web Development' | 'Interaction';
  year: string;
  thumbnail: string;
  excerpt: string;
  context: string;
  process: string;
  outcome: string;
  images: string[];
  tags: string[];
  client: string;
  role: string;
  link?: string;
}

export interface Poster {
  id: string;
  title: string;
  imageUrl: string;
  year: string;
}

export interface ResumeEntry {
  title: string;
  organization: string;
  period: string;
  description: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

/**
 * Interface representing the structured design concept returned by the AI.
 */
export interface AIConceptResult {
  brandName: string;
  vision: string;
  visualDirection: string;
  colorPalette: string[];
  typography: string;
  suggestedFeatures: string[];
}
