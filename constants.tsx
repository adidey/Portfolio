
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
    id: 'notchprompt',
    title: 'NotchPrompt',
    category: 'macOS Utility',
    year: '2026',
    thumbnail: '/notchprompt.png',
    shortDescription: 'A premium macOS teleprompter that integrates with the hardware notch.',
    context: 'Designed for flawless presentations and video calls, acting as a native extension of the Mac camera notch.',
    problem: 'Traditional teleprompters are bulky and distract from the camera lens, breaking eye contact during calls.',
    process: 'Built natively using Swift 6.0 and SwiftUI. Features a striking cyan/blue glow on the active reading line.',
    outcome: 'An unobtrusive utility that improves communication professionalism without cluttered traditional UI.',
    images: ['/notchprompt.png'],
    tags: ['Swift', 'SwiftUI', 'AppKit', 'macOS'],
    client: 'Personal Project',
    role: 'Creator & Developer',
    link: 'A Native Teleprompter Experience',
    annotations: ['WIP: Dynamic Reading Line', 'v1.0 Launch', 'System: macOS Native'],
    processImages: ['/notchprompt_wireframe.png'],
    outcomeImages: ['/notchprompt_final.png'],
    prototypeVideo: '/videos/notchprompt_demo.mp4'
  },
  {
    id: 'spinpod',
    title: 'Spinpod',
    category: 'AI & Music',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'A retro-industrial music controller powered by Gemini AI.',
    context: 'A personal focus tool designed strictly for deep work with high-contrast blacks and CRT aesthetics.',
    problem: 'Modern music players are often flat and spreadsheet-like, failing to provide a tactile focus-oriented experience.',
    process: 'Designed with Dieter Rams-inspired aesthetics and engineered to decode Spotify playlists using Gemini AI.',
    outcome: 'A beautiful, analog-feeling desk interface that prioritizes physicality to keep the user entirely in the zone.',
    images: ['https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600'],
    tags: ['React', 'Gemini AI', 'Tailwind CSS', 'Vite'],
    client: 'Self-Initiated',
    role: 'Full Stack Developer & Designer',
    link: 'A Retro AI Music Experience',
    annotations: ['Concept: Retro-Industrial', 'Gemini AI Integration', 'Prototype: Tactical Dial'],
    processImages: ['/spinpod_design_process.png'],
    outcomeImages: ['/spinpod_hero.png']
  },
  {
    id: 'resume-editor',
    title: 'Resume Editor',
    category: 'Productivity',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'Privacy-focused, single-page resume builder for instant ATS-friendly exports.',
    context: 'Designed to offer an intuitive alternative to bloated resume builders with zero configuration required.',
    problem: 'Existing resume tools are often data-heavy, require accounts, and lack privacy for sensitive career data.',
    process: 'Built with Next.js App Router and Tailwind CSS. Implemented smooth PDF generation entirely on the client-side.',
    outcome: 'An elegant, robust tool enabling users to craft professional resumes securely in seconds.',
    images: ['https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600'],
    tags: ['Next.js', 'Tailwind CSS', 'Lucide React'],
    client: 'Personal Project',
    role: 'Lead Developer',
    link: 'Simplified Professional Resumes',
    annotations: ['Focus: ATS Optimization', 'Zero-Config UI', 'Export: Client-side PDF']
  },
  {
    id: 'exousia',
    title: 'Exousia',
    category: 'Interaction',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'Piezoelectric energy-generating floor tiles for sustainable infrastructure.',
    context: 'Energy-harvesting floor tiles that turn human footsteps into electricity for sustainable buildings.',
    problem: 'Large educational and public spaces consume high energy without leveraging the ambient energy from foot traffic.',
    process: 'Prototyped using Arduino and Fusion360. Integrated sensors to power lights across high-traffic locations.',
    outcome: 'Winner of FICCI Arise. Successfully demonstrated a self-sustaining energy loop for school environments.',
    images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600'],
    tags: ['Arduino', 'Fusion360', 'Sustainable Tech'],
    client: 'Self-Initiated',
    role: 'Lead Designer & Engineer',
    link: 'An Energy Harvesting System Built for Education'
  },
  {
    id: 'joy-assistant',
    title: 'JOY',
    category: 'UI Design',
    year: '2022',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'AI-powered mental healthcare assistant using music therapy.',
    context: 'A digital companion that uses personalized journaling and music-based mood regulation for wellbeing.',
    problem: 'Mental health support is often inaccessible or lacks real-time personalization for emotional regulation.',
    process: 'Engineered a Swift interface aligned with medical design principles. Integrated AI-tailored music plans.',
    outcome: 'Achieved a 25% reduction in onboarding time. Winner of Boston Hackathon 2022.',
    images: ['https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1600'],
    tags: ['Swift', 'Figma', 'UI/UX'],
    client: 'Healthcare Innovation Lab',
    role: 'Product Designer',
    link: 'A Digital Companion Reimagined'
  },
  {
    id: 'tracker-360',
    title: 'Tracker.360',
    category: 'Web Development',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'Smart COVID-19 protection device with thermal screening and UV-C sanitization.',
    context: 'An automated sanitation device invented to improve safety in high-density communal living.',
    problem: 'Manual screening and sanitation in housing societies were inefficient and high-risk during the pandemic.',
    process: 'Built using Python and Raspberry PI4. Designed a 3D-printed UV-C module with thermal feedback.',
    outcome: 'Recognized as UNICEF Top 100 Innovation. Improved sanitation rates in communities by 15%.',
    images: ['https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=1600'],
    tags: ['Python', 'IoT', 'Raspberry Pi'],
    client: 'Social Innovation Project',
    role: 'Technical Lead',
    link: 'A Smart Sanitation Device'
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
