
import { Project, ResumeEntry, SkillGroup, Poster } from './types';

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
    id: 'exousia',
    title: 'Exousia',
    category: 'Interaction',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Piezoelectric energy-generating floor tiles for sustainable infrastructure.',
    context: 'Designed and engineered floor tiles with piezoelectric sensors capable of generating electricity under human pressure.',
    process: 'Prototyped using Arduino and designed the physical structure in Fusion360. Integrated sensors to power classroom lights, testing durability across 25+ high-traffic locations.',
    outcome: 'Winner of FICCI Arise and TGELF Youth India STEM Product. Successfully demonstrated a self-sustaining energy loop for school environments.',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600'
    ],
    tags: ['Arduino', 'Fusion360', 'Sustainable Tech'],
    client: 'Self-Initiated',
    role: 'Lead Designer & Engineer',
    link: 'An Energy Harvesting System Built for Education'
  },
  {
    id: 'joy-assistant',
    title: 'JOY: Mental Health',
    category: 'UI Design',
    year: '2022',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'An AI-powered mental healthcare assistant utilizing music therapy and personalized journaling.',
    context: 'Created to address the accessibility gap in mental health support through personalized journaling and music-based mood regulation.',
    process: 'Engineered a user-friendly interface in Swift, aligning with medical design principles. Integrated AI-generated workout and music plans tailored to real-time mood data.',
    outcome: 'Achieved a 25% reduction in patient onboarding time. Winner of Boston Hackathon 2022 and TGELF Youth India.',
    images: [
      'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1600'
    ],
    tags: ['Swift', 'Figma', 'UI/UX'],
    client: 'Healthcare Innovation Lab',
    role: 'Product Designer',
    link: 'A Digital Companion Reimagined for Wellbeing'
  },
  {
    id: 'tracker-360',
    title: 'Tracker.360',
    category: 'Web Development',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'All-round COVID-19 protection device with thermal screening and UV-C sanitization.',
    context: 'Invented during the pandemic to automate sanitation in high-density housing societies.',
    process: 'Built using Python, Raspberry PI4, and Arduino. Designed a 3D-printed UV-C sanitizer module and integrated RGB thermal feedback systems.',
    outcome: 'Recognized as UNICEF Top 100 Innovation and Government of India MANAK award winner. Improved sanitation rates in targeted housing societies by 15%.',
    images: [
      'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=1600'
    ],
    tags: ['Python', 'IoT', 'Raspberry Pi'],
    client: 'Social Innovation Project',
    role: 'Technical Lead',
    link: 'A Smart Sanitation Device for Communal Safety'
  }
];

/**
 * HOW TO ADD A NEW POSTER:
 * 1. Copy a poster object below.
 * 2. Update the 'id', 'title', 'imageUrl', and 'year'.
 * 3. New posters will appear automatically in the Posters gallery.
 */
export const POSTERS: Poster[] = [
  { id: 'p1', title: '911 Lake Commo', imageUrl: '/assets/posters/poster1.jpg', year: '2024' },
  { id: 'p2', title: 'Senna Marlboro', imageUrl: '/assets/posters/poster2.jpg', year: '2024' },
  { id: 'p3', title: 'Vocal Intensity', imageUrl: '/assets/posters/poster3.jpg', year: '2024' },
  { id: 'p4', title: 'STFU Vinyl', imageUrl: '/assets/posters/poster4.jpg', year: '2024' },
];

export const EXPERIENCE: ResumeEntry[] = [
  {
    title: 'User Experience Intern',
    organization: 'HARMAN International',
    period: 'Nov 2025 — Jan 2026',
    description: [
      'Worked on end-to-end UX for in-vehicle infotainment and connected systems.',
      'Created high-fidelity Figma prototypes and component libraries.',
      'Improved design consistency across teams and cut handoff time to developers by 30%.'
    ]
  },
  {
    title: 'FAaS Intern',
    organization: 'Ernst and Young LLP',
    period: 'Nov 2024 — Feb 2025',
    description: [
      'Developed predictive models using LSTM and XGBoost with 97% accuracy to forecast stock market trends.',
      'Formulated SOPs for investment firms and automated financial data processing pipelines.'
    ]
  },
  {
    title: 'BCI Designer',
    organization: 'Melbourne BioInnovation',
    period: 'June 2024 — May 2025',
    description: [
      'Helped design and development of a retrofittable wheelchair with Brain-Computer Interface (BCI).',
      'Significantly improved mobility for individuals with paraplegia through gaze-tracking technology.',
      'Developed user-centered design and brand identity, resulting in a 37% increase in engagement.'
    ]
  },
  {
    title: 'UI/UX Designer',
    organization: 'Matrix Freight Forwarding Systems',
    period: 'May 2023 — Sep 2023',
    description: [
      'Developed high-fidelity Figma mockups and created a responsive website using HTML5 and CSS.',
      'Employed SEO Optimization that increased site traffic by 28%.'
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Programming',
    items: ['Java', 'SQL', 'Python', 'JavaScript', 'Ruby', 'C']
  },
  {
    category: 'Design',
    items: ['Figma', 'Photoshop', 'Illustrator', 'Blender', 'Premiere Pro', 'After Effects']
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'MATLAB', 'Arduino', 'Raspberry Pi']
  }
];
