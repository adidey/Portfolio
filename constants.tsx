
import { Project, ResumeEntry, SkillGroup } from './types';

/**
 * HOW TO ADD A NEW PROJECT:
 * 1. Copy one of the objects below.
 * 2. Update the 'id' (must be unique).
 * 3. Add details for title, category, and year.
 * 4. Add image URLs (Unsplash or your own hosted links).
 * 5. Fill out excerpt, context, process, and outcome sections.
 * 6. Projects will appear automatically on the Work page.
 */
export const PROJECTS: Project[] = [
  {
    id: 'synapse',
    title: 'Synapse',
    category: 'Interaction',
    year: '2026',
    thumbnail: '/assets/synapse/main_knowledge_graph_1777509064798.png',
    shortDescription: 'An AI-driven knowledge graph transforming complex learning into a dynamic, spatial experience.',
    tags: ['AI Knowledge Graph', 'Physics Engine', 'UX Architecture', 'React 19'],
    role: 'Product Engineer & Designer',
    metrics: ['40% Faster Concept Identification'],
    client: 'Self-Initiated',
    images: [],
    context: '',
    problem: '',
    process: '',
    outcome: ''
  },
  {
    id: 'sonora',
    title: 'Sonora',
    category: 'Interaction',
    year: '2023',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1bff64173945869.64996929bbc71.png',
    shortDescription: 'A specialized social hub for musicians to network, collaborate, and discover local talent through a tactile, mobile-first experience.',
    tags: ['Interaction', 'Figma', 'UI Design'],
    role: 'Interaction Designer',
    metrics: ['Increased Visibility of Local Talent'],
    client: 'Self-Initiated',
    images: [],
    context: '',
    problem: '',
    process: '',
    outcome: ''
  },
  {
    id: 'aurorae',
    title: 'Aurorae',
    category: 'Branding',
    year: '2022',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9bf751155839991.636f3ca8730f0.jpg',
    shortDescription: 'A minimalist, high-contrast visual identity and brand study exploring the intersection of grain, form, and analog-inspired digital design.',
    tags: ['Branding', 'Visual Identity', 'Graphic Design'],
    role: 'UI Designer & Brand Strategist',
    metrics: ['Brand Distinctiveness'],
    client: 'Identity Study',
    images: [],
    context: '',
    problem: '',
    process: '',
    outcome: ''
  },
  {
    id: 'notchprompt',
    title: 'NotchPrompt',
    category: 'macOS Utility',
    year: '2026',
    thumbnail: '/notchprompt.png',
    shortDescription: 'A premium macOS teleprompter that integrates with the hardware notch.',
    tags: ['Swift', 'SwiftUI', 'macOS SDK'],
    role: 'Designer & Developer',
    metrics: ['Native Performance'],
    client: 'Personal Build',
    images: [],
    context: '',
    problem: '',
    process: '',
    outcome: ''
  },
  {
    id: 'portfolio',
    title: 'Digital Identity',
    category: 'UI Design',
    year: '2026',
    thumbnail: '/assets/portfolio-home.jpg',
    shortDescription: 'A systematic architectural overhaul of my digital identity and portfolio, engineered for speed and editorial aesthetics.',
    tags: ['UX Architecture', 'Framer Motion', 'React 19'],
    role: 'Product Engineer',
    metrics: ['Sub-second FCP'],
    client: 'Personal Branding',
    images: [],
    context: '',
    problem: '',
    process: '',
    outcome: ''
  },
  {
    id: 'spinpod',
    title: 'Spinpod',
    category: 'AI & Music',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'A retro-industrial music controller powered by Gemini AI.',
    tags: ['React', 'Gemini AI', 'Tailwind CSS'],
    role: 'Interaction Designer',
    metrics: ['AI-Driven Exploration'],
    client: 'Self-Initiated',
    images: [],
    context: '',
    problem: '',
    process: '',
    outcome: ''
  },
  {
    id: 'resume-editor',
    title: 'Resume Editor',
    category: 'Productivity',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'Privacy-focused, single-page resume builder for instant ATS-friendly exports.',
    tags: ['Next.js', 'Typescript', 'Design Systems'],
    role: 'Product Designer',
    metrics: ['ATS-Friendly Export'],
    client: 'Personal Project',
    images: [],
    context: '',
    problem: '',
    process: '',
    outcome: ''
  },
  {
    id: 'client-work',
    title: 'Client Work: Portfolio',
    category: 'UI Design',
    year: '2024',
    thumbnail: '/assets/client-portfolio/DARK HOME.png',
    shortDescription: 'Interactive Figma prototype for a personal client portfolio showcasing sleek design and seamless navigation.',
    tags: ['Figma', 'Prototyping', 'Web Design'],
    role: 'Lead Designer',
    metrics: ['Interactive Prototype Validation'],
    client: 'Private Client',
    images: [],
    context: '',
    problem: '',
    process: '',
    outcome: ''
  },
  {
    id: 'sneakin',
    title: 'Sneakin',
    category: 'UI Design',
    year: '2023',
    thumbnail: '/assets/sneakin/Slide 16_9 - 4.png',
    shortDescription: 'Premium sneaker dropshipping platform focused on hype culture and seamless retail architecture.',
    tags: ['E-commerce', 'Dropshipping', 'Retail Design'],
    role: 'Product Designer',
    metrics: ['Retail Flow Optimization'],
    client: 'Concept Project',
    images: [],
    context: '',
    problem: '',
    process: '',
    outcome: ''
  },
  {
    id: 'creo',
    title: 'CREO',
    category: 'Branding',
    year: '2023',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/original/0e92c6162449841.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    shortDescription: 'Founding brand identity and design language for CREO Design Agency.',
    tags: ['Branding', '3D Design', 'Agency Strategy'],
    role: 'Co-Founder & Lead Designer',
    metrics: ['Brand Distinctiveness'],
    client: 'Self-Founded',
    images: [],
    context: '',
    problem: '',
    process: '',
    outcome: ''
  },
  {
    id: 'exousia',
    title: 'Exousia',
    category: 'Interaction',
    year: '2023',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/original/f36c99151193447.Y3JvcCwxODQxLDE0NDAsNDEsMA.png',
    shortDescription: 'Piezoelectric energy-generating floor tiles for sustainable infrastructure.',
    tags: ['Arduino', 'IoT', 'Physical Computing'],
    role: 'Product Designer & Engineer',
    metrics: ['Kinetic Energy Harvest'],
    client: 'Educational Innovation',
    images: [],
    context: '',
    problem: '',
    process: '',
    outcome: ''
  },
  {
    id: 'horizon-zoom',
    title: 'Horizon Zoom',
    category: 'Branding',
    year: '2023',
    thumbnail: '/assets/horizon-zoom/Slide 16_9 - 1.jpg',
    shortDescription: 'Brand identity and business case study for a retro-inspired 32-bit arcade racing game.',
    tags: ['Brand Identity', 'Strategy', 'Game Design Pitch'],
    role: 'Strategist & Designer',
    metrics: ['Subscription Strategy'],
    client: 'Horizon Games',
    images: [],
    context: '',
    problem: '',
    process: '',
    outcome: ''
  },
  {
    id: 'sidemen-app',
    title: 'Sidemen App',
    category: 'UI Design',
    year: '2022',
    thumbnail: '/assets/sidemen/chunk_0.jpg',
    shortDescription: 'A centralized all-in-one app concept gathering Sidemen content, merch, and community.',
    tags: ['UI Design', 'Wireframing', 'User Flow'],
    role: 'Product Designer',
    metrics: ['Unified User Flow'],
    client: 'Concept Project',
    images: [],
    context: '',
    problem: '',
    process: '',
    outcome: ''
  }
];

export const EXPERIENCE: ResumeEntry[] = [
  {
    title: 'FAaS Intern',
    organization: 'Ernst and Young LLP',
    period: 'Nov 2024 — Feb 2025',
    description: [
      'Engineered predictive financial models achieving 97% accuracy, standardizing operational procedures and automating data pipelines for investment firms.',
      'Developed forecasting tools using LSTM and XGBoost.'
    ]
  },
  {
    title: 'BCI Designer',
    organization: 'Melbourne BioInnovation',
    period: 'June 2024 — May 2025',
    description: [
      'Led brand identity and user-centered design for a BCI wheelchair, driving a 37% increase in engagement while improving mobility via gaze-tracking technology.',
      'Supported the development of a retrofittable wheelchair with Brain-Computer Interface (BCI).'
    ]
  },
  {
    title: 'UI/UX Designer',
    organization: 'Matrix Freight Forwarding Systems',
    period: 'May 2023 — Sep 2023',
    description: [
      'Delivered responsive web interfaces and high-fidelity Figma prototypes, implementing SEO strategies that increased site traffic by 28%.',
      'Built responsive web solutions using HTML5 and CSS for freight forwarding operations.'
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Design',
    items: ['Visual Design', 'Interaction', 'Photoshop', 'Illustrator']
  },
  {
    category: 'Prototyping',
    items: ['Figma', 'Blender', 'Premiere Pro', 'After Effects']
  },
  {
    category: 'Programming',
    items: ['Java', 'SQL', 'Python', 'JavaScript', 'Ruby', 'C']
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'MATLAB', 'Arduino', 'Raspberry Pi']
  }
];
