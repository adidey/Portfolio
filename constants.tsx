
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
    id: 'spinpod',
    title: 'Spinpod',
    category: 'AI & Music',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'An AI-powered music platform featuring a nostalgic pixel-art interface and smart mixing capabilities.',
    context: 'Created Spinpod to bridge the gap between advanced AI music generation and retro-futuristic UI design. The platform allows users to mix and manipulate AI-generated beats in real-time.',
    process: 'Developed using React and the Gemini AI API. Focused on creating a tactile digital experience with custom-built audio visualization and a unique 8-bit aesthetic.',
    outcome: 'Successfully deployed as a high-performance web app with seamless AI integration, receiving positive feedback for its innovative interface.',
    images: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600'
    ],
    tags: ['React', 'Gemini AI', 'Tailwind CSS', 'Web Audio API'],
    client: 'Self-Initiated',
    role: 'Full Stack Developer & Designer',
    link: 'A Retro AI Music Experience'
  },
  {
    id: 'resume-editor',
    title: 'Resume Editor',
    category: 'Productivity',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'A sleek, client-side resume builder designed for professional impact and ease of use.',
    context: 'Designed to simplify the resume-building process while maintaining high design standards. The tool provides a real-time preview of premium templates.',
    process: 'Built with Next.js and TypeScript, prioritizing performance and security by keeping all data on the client side. Implemented a robust PDF generation engine.',
    outcome: 'Used by hundreds of applicants to create clean, ATS-friendly resumes with a 40% faster completion rate than traditional editors.',
    images: [
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600'
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'jspdf'],
    client: 'Personal Project',
    role: 'Lead Developer',
    link: 'Simplified Professional Resumes'
  },
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
