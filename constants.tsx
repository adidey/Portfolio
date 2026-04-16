
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
    context: 'Built to solve eye-contact fatigue in the remote-work era. NotchPrompt transforms a static hardware limitation (the camera notch) into a dynamic UI asset.',
    brief: 'Native macOS teleprompter designed to reclaim the camera notch as a functional workspace tool for remote professionals.',
    goal: 'Transform hardware limitations into productivity assets by turning the camera notch into an interactive, functional communication utility.',
    problem: 'Traditional teleprompters are bulky and break eye contact as they force the user to look away from the camera lens.',
    process: 'Engineered using SwiftUI 6.0 and AppKit integration. Focused on system-level overlays and highly-performant text rendering at 120Hz.',
    outcome: 'An unobtrusive utility that improves communication professionalism without cluttered traditional UI.',
    images: ['/notchprompt.png'],
    tags: ['Swift', 'SwiftUI', 'macOS SDK'],
    technologies: ['Swift 6.0', 'AppKit', 'Metal Rendering'],
    client: 'Personal Build',
    role: 'Designer & Developer',
    roleDetail: 'Designed the interaction model and developed the native macOS application using SwiftUI.',
    metrics: ['Native Performance', 'Minimal CPU Footprint', 'Seamless System Integration'],
    annotations: ['v1.0 Launch', 'macOS Native'],
    processImages: ['https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1600'],
    outcomeImages: ['https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1600'],
    prototypeVideo: '/videos/notchprompt_demo.mp4'
  },
  {
    id: 'portfolio',
    title: 'Digital Identity',
    category: 'Product & UX',
    year: '2026',
    thumbnail: '/assets/portfolio-home.jpg',
    shortDescription: 'A systematic architectural overhaul of my digital identity and portfolio, engineered for speed and editorial aesthetics.',
    context: 'Commercializing the digital identity of a high-performance interactive designer.',
    brief: 'Perform a systematic architectural overhaul of my digital identity to establish a strict editorial design language.',
    goal: 'Establish a resilient, mathematically locked 12-column grid system that resolves layout tension and commercializes the portfolio architecture.',
    problem: 'Minimalism without structural rigidity often looks broken rather than intentional.',
    process: 'Employed a strict Z-pattern layout methodology across all routes to control visual hierarchy. Designed a mathematically locked vertical pacing system governed globally.',
    outcome: 'A highly performant, accessible digital product. Improved recruiter scan-ability significantly through unified container metrics and aggressive typographic scaling parameters.',
    images: ['/assets/portfolio-home.jpg'],
    tags: ['UX Architecture', 'Framer Motion', 'React 19'],
    technologies: ['Vite', 'Tailwind', 'Motion UI'],
    client: 'Personal Branding',
    role: 'Product Engineer',
    roleDetail: 'Designed the mathematical layout grid and engineered the fluid navigation architecture.',
    metrics: ['Sub-second FCP', 'Mathematical Grid Alignment', 'Reduced TTI Layout Shift'],
    annotations: ['Z-Pattern Execution', 'Fluid Typography'],
    processImages: ['/assets/portfolio-about.jpg'],
    outcomeImages: ['/assets/portfolio-work.jpg']
  },
  {
    id: 'spinpod',
    title: 'Spinpod',
    category: 'AI & Music',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'A retro-industrial music controller powered by Gemini AI.',
    context: 'A tactile hardware-inspired interface that prioritizes deep work. Spinpod acts as a physical buffer between the user and digital spreadsheets.',
    brief: 'Create a retro-industrial AI music controller that provides a physical buffer for deep work and creative flow sessions.',
    goal: 'Design a tactile AI controller that uses Gemini LLM to mood-match audio to user flow states, reclaiming the physical interaction of music.',
    problem: 'Standard streaming apps are distractingly complex, offering too much choice and not enough focused "flow" state.',
    process: 'Designed with high-roughness materials and soft studio lighting. Engineered to decode Spotify schemas using Gemini LLM for mood-matching.',
    outcome: 'A tactile, analog-feeling desk interface that prioritizes physicality to keep the user entirely in the zone.',
    images: ['https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600'],
    tags: ['React', 'Gemini AI', 'Tailwind CSS'],
    technologies: ['React 19', 'Google Gemini Pro API', 'Framer Motion', 'Vite'],
    client: 'Self-Initiated',
    role: 'Interaction Designer',
    roleDetail: 'Designed the tactile UI system and implemented the AI-driven playlist logic.',
    metrics: ['AI-Driven Exploration', 'Tactile Interface', 'Low-Latency Interaction'],
    annotations: ['Concept: Industrial Design', 'AI Integration'],
    processImages: ['https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1600'],
    outcomeImages: ['https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600']
  },
  {
    id: 'resume-editor',
    title: 'Resume Editor',
    category: 'Productivity',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'Privacy-focused, single-page resume builder for instant ATS-friendly exports.',
    context: 'Solving the trade-off between beautiful designer resumes and high-performance ATS readability.',
    brief: 'Develop a privacy-focused, technical resume builder that bridges the gap between editorial design and machine-readable exports.',
    goal: 'Eliminate the friction of high-performance recruitment by providing a 100% local-first tool for ATS-friendly PDF generation without data leaks.',
    problem: 'Modern resume builders often leak personal data and produce PDFs that automated recruitment systems (ATS) cannot parse correctly.',
    process: 'Built with Next.js App Router for server-side stability. Implemented a zero-database architecture to ensure absolute user privacy.',
    outcome: 'A robust, local-first tool that enables precise typography control without sacrificing machine readability.',
    images: ['https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600'],
    tags: ['Next.js', 'Typescript', 'Design Systems'],
    technologies: ['Next.js 15', 'Tailwind v4', 'PDF-Lib'],
    client: 'Personal Project',
    role: 'Product Designer',
    roleDetail: 'Designed the typography-first interface and optimized the export engine for high readability.',
    metrics: ['ATS-Friendly Export', 'Privacy-Focused Design', 'Clean Typography'],
    annotations: ['Focus: ATS Optimization', 'Client-side Processing']
  },
  {
    id: 'client-work',
    title: 'Client Work: Portfolio',
    category: 'UI Design',
    year: '2024',
    thumbnail: '/assets/client-portfolio/DARK HOME.png',
    shortDescription: 'Interactive Figma prototype for a personal client portfolio showcasing sleek design and seamless navigation.',
    context: 'Establishing a cohesive digital identity for a high-end personal brand.',
    brief: 'Design and prototype a high-fidelity design system and user flows for a creative client portfolio.',
    goal: 'Establish a rigid editorial Z-pattern layout that highlights creative work while maintaining high interactivity through deep Figma prototyping.',
    problem: 'The client needed a responsive, visually distinct digital identity emphasizing typography and spacing to highlight their creative work.',
    process: 'Structured a rigid editorial Z-pattern layout directly in Figma, incorporating high-fidelity interactive prototyping to closely simulate full browser mechanics.',
    outcome: 'A production-ready prototype that allowed the client to fully test edge interactions, content padding, and navigational pacing.',
    images: [
      '/assets/client-portfolio/DARK HOME.png',
      '/assets/client-portfolio/ABOUT.png',
      '/assets/client-portfolio/WORK.png',
      '/assets/client-portfolio/PRICING.png'
    ],
    tags: ['Figma', 'Prototyping', 'Web Design'],
    technologies: ['Figma Prototype', 'UI Architecture'],
    client: 'Private Client',
    role: 'Lead Designer',
    roleDetail: 'Architected the structure and executed the fully functional Figma prototype.',
    metrics: ['Interactive Prototype Validation', 'Z-Pattern Design'],
    annotations: ['Client Collaboration', 'High-Fidelity Wireframes'],
    processImages: [
      '/assets/client-portfolio/work motion.png',
      '/assets/client-portfolio/work still.png'
    ],
    outcomeImages: [
      '/assets/client-portfolio/CONTACT.png',
      '/assets/client-portfolio/Slide 16_9 - 15.png'
    ],
    figmaEmbed: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/mK3RFKq5p6rB6BxhIgxD93/client-work--AYUSH?node-id=5-2&p=f&viewport=121%2C258%2C0.1&scaling=contain&content-scaling=fixed&starting-point-node-id=5%3A2&show-proto-sidebar=1&page-id=0%3A1&embed-host=share" allowfullscreen></iframe>`
  },
  {
    id: 'sneakin',
    title: 'Sneakin',
    category: 'E-commerce',
    year: '2023',
    thumbnail: '/assets/sneakin/Slide 16_9 - 4.png',
    shortDescription: 'Premium sneaker dropshipping platform focused on hype culture and seamless retail architecture.',
    context: 'A digital marketplace designed to streamline high-end sneaker acquisition through an energetic, urban aesthetic.',
    brief: 'Design a frictionless, high-trust dropshipping platform for sneaker enthusiasts to access limited-edition releases.',
    goal: 'Simplify the "hype" retail experience through an intuitive UI that manages global listings and authenticates inventory in real-time.',
    problem: 'The sneaker secondary market is fragmented and prone to trust issues, requiring a unified, verified platform for safe transactions.',
    process: 'Structured a highly visual, streetwear-inspired UI. Designed key flows including live stock tracking, secure checkout, and seller verification metrics.',
    outcome: 'A vibrant, recruiter-ready case study showcasing responsive retail interfaces, crisp product photography, and professional e-commerce branding.',
    images: [
      '/assets/sneakin/Slide 16_9 - 1.png',
      '/assets/sneakin/Slide 16_9 - 2.png',
      '/assets/sneakin/Slide 16_9 - 3.png',
      '/assets/sneakin/Slide 16_9 - 4.png',
      '/assets/sneakin/Slide 16_9 - 5.png'
    ],
    tags: ['E-commerce', 'Dropshipping', 'Retail Design'],
    technologies: ['Figma', 'Prototyping', 'UI/UX'],
    client: 'Concept Project',
    role: 'Product Designer',
    roleDetail: 'Designed end-to-end e-commerce interfaces and brand marketing assets.',
    metrics: ['Retail Flow Optimization', 'Hype Culture Alignment'],
    annotations: ['Sneaker Tech', 'Urban Aesthetics'],
    processImages: [
      '/assets/sneakin/Slide 16_9 - 6.png',
      '/assets/sneakin/Slide 16_9 - 8.png'
    ],
    outcomeImages: [
      '/assets/sneakin/Slide 16_9 - 9.png',
      '/assets/sneakin/Slide 16_9 - 10.png'
    ]
  },
  {
    id: 'creo',
    title: 'CREO',
    category: 'Branding',
    year: '2023',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/original/0e92c6162449841.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    shortDescription: 'Founding brand identity and design language for CREO Design Agency.',
    context: 'Establishing a premium design agency that delivers fresh perspectives on 3D and branding.',
    brief: 'Founded by Samarth Saluja and Aditya Dey, CREO was conceived to bring a unique perspective to the global design landscape, specializing in high-end branding and 3D visualization.',
    goal: 'To help brands bring their ideas to life through a blend of innovation and premium aesthetics, ensuring they stand out in a saturated market.',
    problem: 'Brands often struggle to communicate their stories through high-fidelity visuals that balance modernity with technical precision.',
    process: 'Structured a diverse service offering including 3D product visualization, walkthroughs, and UI/UX design. Developed a signature visual language that emphasizes clarity and impact.',
    outcome: 'A thriving design practice that bridge the gap between abstract concepts and production-ready visual solutions.',
    images: ['https://mir-s3-cdn-cf.behance.net/projects/original/0e92c6162449841.Y3JvcCwxNjE2LDEyNjQsMCww.png'],
    tags: ['Branding', '3D Design', 'Agency Strategy'],
    technologies: ['Adobe XD', 'Blender', 'Photoshop'],
    client: 'Self-Founded',
    role: 'Co-Founder & Lead Designer',
    roleDetail: 'Co-founded the agency and lead the creative direction for branding and 3D visualization projects.',
    metrics: ['Brand Distinctiveness', '3D Innovation'],
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/162449841?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>'
  },
  {
    id: 'exousia',
    title: 'Exousia',
    category: 'Interaction',
    year: '2023',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/original/f36c99151193447.Y3JvcCwxODQxLDE0NDAsNDEsMA.png',
    shortDescription: 'Piezoelectric energy-generating floor tiles for sustainable infrastructure.',
    context: 'Harnessing wasted kinetic energy to power localized household infrastructure.',
    brief: 'Establish a brand and functional prototype for a sustainable energy floor system that captures human kinetic energy.',
    goal: 'Convert the latent physical energy of daily household movement—like walking or furniture shifting—into usable electricity for essential appliances.',
    problem: 'Public and household infrastructure currently ignores the massive untapped energy potential of high-traffic physical environments.',
    process: 'Prototyped structural flooring using Fusion360. Integrated an array of PZT sensors with custom Arduino circuitry for energy harvesting.',
    outcome: 'Awarded FICCI Arise for Innovation. Successfully powered a localized lighting loop using solely kinetic input.',
    images: ['https://mir-s3-cdn-cf.behance.net/projects/original/f36c99151193447.Y3JvcCwxODQxLDE0NDAsNDEsMA.png'],
    tags: ['Arduino', 'IoT', 'Physical Computing'],
    technologies: ['C++', 'Fusion360', 'Piezoelectric Sensors'],
    client: 'Educational Innovation',
    role: 'Product Designer & Engineer',
    roleDetail: 'Designed the physical chassis and engineered the sensor-to-light feedback loop.',
    metrics: ['Kinetic Energy Harvest', 'Localized Feedback System'],
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/151193447?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>'
  },
  {
    id: 'horizon-zoom',
    title: 'Horizon Zoom',
    category: 'Branding',
    year: '2023',
    thumbnail: '/assets/horizon-zoom/Slide 16_9 - 1.jpg',
    shortDescription: 'Brand identity and business case study for a retro-inspired 32-bit arcade racing game.',
    context: 'Bridging the gap between nostalgic 32-bit graphics and modern multiplayer dynamics.',
    brief: 'Develop a comprehensive brand identity and business strategy for a community-driven arcade racing game.',
    goal: '"Inculcate nostalgia into the modern world" by merging classic 32-bit racing aesthetics with modern PC gaming performance and community features.',
    problem: 'Modern racing games dominate the market but are prone to crashing and monotonous gameplay. Classic retro racers, conversely, lack community features.',
    process: 'Developed a comprehensive pitch deck covering business planning, monetization strategies, and unique incentive models including charitable profit allocation.',
    outcome: 'A complete brand system and strategic presentation that positions Horizon Zoom as an emerging leader in community-driven, stable arcade racing.',
    images: [
      '/assets/horizon-zoom/Frame 1.jpg', 
      '/assets/horizon-zoom/Slide 16_9 - 1.jpg', 
      '/assets/horizon-zoom/Slide 16_9 - 8.jpg'
    ],
    tags: ['Brand Identity', 'Strategy', 'Game Design Pitch'],
    technologies: ['Presentation Design', 'Business Modeling', 'Brand Positioning'],
    client: 'Horizon Games',
    role: 'Strategist & Designer',
    roleDetail: 'Designed the visual pitch deck and formulated the core business, retention, and incentive models.',
    metrics: ['Subscription Strategy', 'Charitable Incentive Model (15%)'],
    annotations: ['Retro 32-bit Aesthetic', 'Community Focus'],
    processImages: [
      '/assets/horizon-zoom/Slide 16_9 - 4.jpg', 
      '/assets/horizon-zoom/Slide 16_9 - 5.jpg'
    ],
    outcomeImages: [
      '/assets/horizon-zoom/Slide 16_9 - 6.jpg', 
      '/assets/horizon-zoom/Slide 16_9 - 12.jpg'
    ],
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/156706847?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>'
  },
  {
    id: 'sidemen-app',
    title: 'Sidemen App',
    category: 'UI Design',
    year: '2022',
    thumbnail: '/assets/sidemen/chunk_0.jpg',
    shortDescription: 'A centralized all-in-one app concept gathering Sidemen content, merch, and community.',
    context: 'Unifying a vast ecosystem of YouTube channels, commerce, and exclusive media.',
    brief: 'Design a single hub that gathers all Sidemen content, YouTube channels, and business ventures into one mobile platform.',
    goal: 'Centralize the Sidemen fan experience by streamlining content consumption, commerce, and community engagement into a high-performance hub.',
    problem: 'Fans currently have to navigate across multiple disparate platforms (YouTube, independent merch sites, social media) to engage with the brand.',
    process: 'Designed a comprehensive user flow encompassing content consumption, e-commerce, and account management, mapped into a signature dark-themed UI.',
    outcome: 'A modern, clean, and interactive prototype that consolidates media playback and browsing into one cohesive mobile experience.',
    images: [
      '/assets/sidemen/chunk_0.jpg', 
      '/assets/sidemen/chunk_1.jpg', 
      '/assets/sidemen/chunk_2.jpg',
      '/assets/sidemen/chunk_3.jpg'
    ],
    tags: ['UI Design', 'Wireframing', 'User Flow'],
    technologies: ['Figma', 'Prototyping', 'Mobile UI'],
    client: 'Concept Project',
    role: 'Product Designer',
    roleDetail: 'Designed the complete information architecture, wireframes, and final high-fidelity mobile screens.',
    metrics: ['Unified User Flow', 'Dark Mode Interface'],
    annotations: ['All-in-one Platform', 'Modern Aesthetics'],
    processImages: [
      '/assets/sidemen/chunk_1.jpg'
    ],
    outcomeImages: [
      '/assets/sidemen/chunk_2.jpg',
      '/assets/sidemen/chunk_3.jpg'
    ],
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/153505365?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>'
  },
  /* 
  {
    id: 'joy-assistant',
    title: 'JOY',
    category: 'UI Design',
    year: '2022',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'AI-powered mental healthcare assistant using music therapy.',
    context: 'A clinical-grade UI experiment utilizing personalized journaling and mood-regulated sonics.',
    brief: 'Design a cross-platform mental health assistant that integrates mood-regulated sonics with behavioral psychology.',
    goal: 'Optimize patient emotional regulation through a seamless intersection of frequent journaling and personalized music therapy.',
    problem: 'Mental health apps often feel too sterile or too chaotic, leading to low long-term engagement.',
    process: 'Collaborated with psychology advisors to map emotional states to specific UX flows and sonic frequencies.',
    outcome: 'Won Boston Hackathon 2022. Identified as a high-engagement prototype for patient emotional regulation.',
    images: ['https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1600'],
    tags: ['Interaction', 'Figma', 'Behavioral Psych'],
    technologies: ['Swift', 'CoreML', 'Figma'],
    client: 'Healthcare Innovation Lab',
    role: 'UX/UI Designer',
    roleDetail: 'Designed the interaction architecture and visual language for the emotion tracking interface.',
    metrics: ['User-Centered Design', 'Hackathon Finalist']
  },
  {
    id: 'tracker-360',
    title: 'Tracker.360',
    category: 'Web Development',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'Smart COVID-19 protection device with thermal screening and UV-C sanitization.',
    context: 'Deploying autonomous health screening technology to communities with limited surgical oversight.',
    brief: 'Develop an autonomous COVID-19 screening and sanitization device for high-traffic environments.',
    goal: 'Protect frontline workers and communities by automating thermal vision and UV-C sanitization processes, reducing human error.',
    problem: 'During the pandemic, manual thermal screening put workers at high risk and was prone to human error.',
    process: 'Developed on Raspberry Pi 4 with Python OpenCV for thermal vision. Integrated an automated UV-C chamber.',
    outcome: 'Selected as UNICEF Top 100 Innovation. Improved community hygiene compliance by measurable margins.',
    images: ['https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=1600'],
    tags: ['Python', 'Embedded Systems', 'Health-Tech'],
    technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'IR Sensors'],
    client: 'Social Innovation Project',
    role: 'Designer & Developer',
    roleDetail: 'Developed the thermal detection logic and designed the autonomous interaction model.',
    metrics: ['Hygiene Compliance Improvement', 'UNICEF Recognition']
  }
  */
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
