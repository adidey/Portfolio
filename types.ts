export interface CaseSection {
  title: string;
  body?: string;
  images: string[];
  layout?: 'full' | 'grid-2' | 'grid-3' | 'wide';
}

export interface ABTest {
  hypothesis: string;
  controlLabel: string;
  controlDesc: string;
  variantLabel: string;
  variantDesc: string;
  metric: string;
  controlValue: string;
  variantValue: string;
  improvement: string;
  insight: string;
  methodology: string;
}

export interface WCAGCriterion {
  criterion: string;
  level: 'A' | 'AA' | 'AAA';
  status: 'pass' | 'fail' | 'manual';
  note: string;
}

export interface WCAGAudit {
  compliance: 'WCAG 2.2 AA' | 'WCAG 2.1 AA' | 'Partial';
  contrastRatio: string;
  focusManagement: string;
  screenReaderSupport: string;
  motionSafety: string;
  criteria: WCAGCriterion[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'UI Design' | 'Web Development' | 'Interaction' | 'AI & Music' | 'Productivity' | 'macOS Utility' | 'Web & Music';
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
  abTests?: ABTest[];
  wcagAudit?: WCAGAudit;
  brief?: string;
  goal?: string;
  link?: string;
  prototypeVideo?: string;
  annotations?: string[];
  processImages?: string[];
  outcomeImages?: string[];
  figmaEmbed?: string;
  sections?: CaseSection[];
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
