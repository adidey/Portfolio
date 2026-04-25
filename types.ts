export interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'UI Design' | 'Web Development' | 'Interaction' | 'AI & Music' | 'Productivity' | 'macOS Utility';
  year: string;
  thumbnail: string;
  shortDescription: string;
  context: string;
  problem: string;
  process: string;
  outcome: string;
  challenges?: string;
  tradeoffs?: string;
  learnings?: string;
  images: string[];
  tags: string[];
  client: string;
  role: string;
  roleDetail?: string;
  metrics?: string[];
  technologies?: string[];
  brief?: string;
  goal?: string;
  link?: string;
  prototypeVideo?: string;
  annotations?: string[];
  processImages?: string[];
  outcomeImages?: string[];
  figmaEmbed?: string;
}



export interface CarouselItem {
  id: string;
  title: string;
  imageUrl: string;
  year: string;
  link?: string;
  source: 'poster' | 'dribbble';
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
