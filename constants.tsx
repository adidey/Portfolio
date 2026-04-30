
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
    category: 'Education & AI',
    year: '2026',
    thumbnail: '/assets/synapse/main_knowledge_graph_1777509064798.png',
    shortDescription: 'An AI-driven knowledge graph transforming complex learning into a dynamic, spatial experience.',
    context: 'Synapse reimagines learning as a living graph, where every node of knowledge is defined by its relationship to the whole. Built for high-performance scholars, it bridges the gap between thought and documentation.',
    brief: 'Design and engineer a physics-driven learning ecosystem that allows users to visualize prerequisites, track mastery, and navigate personalized study paths.',
    goal: 'Establish a digital neural core that mirrors biological webs of association, reducing cognitive load and maximizing retention through spatial mental models.',
    problem: 'Standard note-taking is linear, static, and fragile. Fragmented learning environments obscure the deeper connections between concepts, leading to cognitive overwhelm.',
    process: 'Adopted a non-linear, design-led development approach. Iterated on D3-based physics forces for tactile responsiveness and developed a "Mastery Pulse" system for visual diagnostics.',
    outcome: 'Successfully architected a fluid, intelligence-first platform that enables networked mastery. Users reported a 40% faster identification of knowledge gaps.',
    challenges: 'Balancing technical latency (targeting 0.4ms) with high-density data visualization and complex physics simulations in the browser.',
    tradeoffs: 'Prioritized structural rigidity and "Cognitive Gravity" over free-form layouts to ensure the system remains an architected environment for serious research.',
    learnings: 'Refined the understanding that knowledge is a living organism, and the most effective tools are those that mirror the non-linear nature of human thought.',
    images: [
      '/assets/synapse/main_knowledge_graph_1777509064798.png',
      '/assets/synapse/pulsing_node_focus_1777509187603.png',
      '/assets/synapse/create_concept_modal_1777509108635.png',
      '/assets/synapse/subject_selector_dropdown_1777509082710.png'
    ],
    tags: ['AI Knowledge Graph', 'Physics Engine', 'UX Architecture', 'React 19'],
    technologies: ['React 19', 'Framer Motion', 'D3.js', 'Vite', 'Tailwind CSS'],
    client: 'Self-Initiated',
    role: 'Product Engineer & Designer',
    roleDetail: 'Designed the "Modern Academic" visual identity and engineered the physics-driven graph engine.',
    metrics: ['40% Faster Concept Identification', '3x Higher Session Engagement', '0.4ms Interaction Latency'],
    annotations: ['The Architecture of Learning', 'Networked Mastery'],
    processImages: [
      '/assets/synapse/media__1777508979864.png',
      '/assets/synapse/media__1777509014296.png'
    ],
    outcomeImages: [
      '/assets/synapse/main_knowledge_graph_1777509064798.png'
    ]
  },
  {
    id: 'sonora',
    title: 'Sonora',
    category: 'Interaction Design',
    year: '2023',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1bff64173945869.64996929bbc71.png',
    shortDescription: 'A specialized social hub for musicians to network, collaborate, and discover local talent through a tactile, mobile-first experience.',
    context: 'Sonora was born from the need to bridge the fragmented gap between music composition and professional networking. Aspiring artists often struggle to find specialized collaborators in a landscape dominated by broad, non-specific social platforms.',
    brief: 'Design a high-fidelity mobile ecosystem that empowers musicians to showcase their creative process, network with peers, and discover local opportunities in real-time.',
    goal: 'Establish a resilient digital infrastructure that prioritizes creative utility over algorithmic noise, allowing for seamless portfolio sharing and local talent discovery.',
    problem: 'Mainstream social networks prioritize "content" over "craft," making it difficult for serious musicians to reach their target audience or find high-quality collaborators without significant marketing friction.',
    process: 'The design process involved deep ethnographic research into musician workflows. I mapped the journey from initial composition to final networking, resulting in a tactile UI system built in Figma and Photoshop that emphasizes visual clarity and audio-first interactions.',
    outcome: 'Successfully architected a high-fidelity mobile prototype that received positive feedback for its intuitive information architecture and specialized feature set tailored for the independent music community.',
    challenges: 'Designing a platform that balances the high-density information needs of professionals with the low-friction expectations of modern mobile users.',
    tradeoffs: 'Prioritized "Interaction Velocity" and tactile feedback over experimental navigation patterns to ensure the app remains an efficient tool for busy creatives.',
    learnings: 'Refined the understanding that niche communities require bespoke UI patterns that respect the specific vocabulary and physical workflows of their industry.',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1bff64173945869.64996929bbc71.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/10cbf7173945869.64996929ae819.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1bf2ea173945869.64996929b209b.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3156c6173945869.64996929b04c5.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a1715b173945869.64996929bd635.png'
    ],
    tags: ['Interaction', 'Figma', 'UI Design', 'Mobile Architecture'],
    technologies: ['Figma', 'Photoshop', 'MySQL', 'UI Systems'],
    client: 'Self-Initiated',
    role: 'Interaction Designer',
    roleDetail: 'Designed the complete interaction model, information architecture, and high-fidelity mobile prototypes.',
    metrics: ['Increased Visibility of Local Talent', 'Frictionless Collaboration Workflows'],
    processImages: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1de6f2173945869.64996929b94b2.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6602ed173945869.64996929b2cb0.png'
    ],
    outcomeImages: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2e0c74173945869.64996929baf3d.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4ec2cd173945869.64996929b7862.png'
    ],
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/173945869?ilo0=1" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>'
  },
  {
    id: 'aurorae',
    title: 'Aurorae',
    category: 'Visual Identity',
    year: '2022',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9bf751155839991.636f3ca8730f0.jpg',
    shortDescription: 'A minimalist, high-contrast visual identity and brand study exploring the intersection of grain, form, and analog-inspired digital design.',
    context: 'AURORAE is a comprehensive visual identity project focusing on establishing a premium, tactile design language for a futuristic lifestyle brand.',
    brief: 'Develop a minimalist and high-contrast brand system using grain textures, architectural typography, and a restricted monochromatic palette.',
    goal: 'Establish a unique, high-fidelity brand language that emphasizes structural clarity through heavy texture and brutalist form.',
    problem: 'Modern digital branding often feels sterile and lacks the tactile "soul" found in analog-inspired design, leading to a loss of brand personality.',
    process: 'The project involved an intensive study of grain-textures and their application across digital assets. Using Photoshop and Illustrator, I created a series of high-contrast compositions focusing on typographic scale and textural depth.',
    outcome: 'A production-grade brand system that balances minimalist digital standards with the warmth of analog-inspired textures. The identity successfully differentiates the brand through its aggressive yet refined aesthetic.',
    challenges: 'Translating complex, high-roughness textures into scalable digital assets without losing visual fidelity or performance.',
    tradeoffs: 'Prioritized "Visual Impact" and textural depth over ultra-safe minimalist norms to ensure the brand stands out in a saturated market.',
    learnings: 'Refined the application of procedural grain-textures as a primary branding element, discovering that "imperfection" can be a powerful tool for building trust.',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9bf751155839991.636f3ca8730f0.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a8a880155839991.635be8ee3cd76.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7e8edb155839991.635be8ee3e7aa.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0ab619155839991.635be8ee411d9.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b27eeb155839991.635bfaec34816.png'
    ],
    tags: ['Branding', 'Visual Identity', 'Graphic Design', 'Editorial'],
    technologies: ['Photoshop', 'Illustrator', 'Figma', 'Blender'],
    client: 'Identity Study',
    role: 'UI Designer & Brand Strategist',
    roleDetail: 'Architected the visual brand language and designed the core textural assets.',
    metrics: ['Brand Distinctiveness', 'Minimalist Precision', 'Textural Depth'],
    processImages: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ec97b3155839991.635c05e215e26.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9b6767155839991.635bf63ae32bf.png'
    ],
    outcomeImages: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/99e32d155839991.635bf63ae2493.png'
    ],
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/155839991?ilo0=1" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>'
  },
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
    challenges: 'Ensuring system-level overlays did not interfere with macOS mission control or full-screen application behaviors.',
    tradeoffs: 'Choosing SwiftUI over AppKit for rapid UI iteration while accepting minor limitations in low-level window management.',
    learnings: 'Discovered that hardware-anchored UI (like the notch) significantly reduces cognitive load for users during video calls.',
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
    challenges: 'Balancing aggressive, large-scale typography with mobile responsiveness without breaking the archival folder aesthetic.',
    tradeoffs: 'Prioritizing structural rigidity and grid-locking over free-form experimental layouts to ensure commercial credibility.',
    learnings: 'Refined the understanding that "less is more" only works when the underlying grid is mathematically perfect.',
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
    challenges: 'Establishing a cohesive digital identity for a high-performance brand while maintaining teenager-led agency agility.',
    tradeoffs: 'Prioritized high-impact experimental visuals over safe corporate norms to differentiate the agency in a crowded market.',
    learnings: 'Refined the agency mission to focus on founder-led storytelling as a primary trust-building tool.',
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
    figmaEmbed: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" src="https://embed.figma.com/proto/mK3RFKq5p6rB6BxhIgxD93/client-work--AYUSH?node-id=5-2&p=f&viewport=121%2C258%2C0.1&scaling=contain&content-scaling=fixed&starting-point-node-id=5%3A2&show-proto-sidebar=1&page-id=0%3A1&embed-host=share" allowfullscreen></iframe>`
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
    challenges: 'Consolidating a fragmented brand ecosystem (SDMN Clothing, SIDE+) into a single cohesive mobile hub.',
    tradeoffs: 'Consolidated multi-vertical business units into a unified flow, necessitating a modular UI to avoid user cognitive overload.',
    learnings: 'Proved that detailed user flow mapping is critical for brands with complex, multi-vertical business models.',
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
    challenges: 'Scaling a full-service design agency as a student while maintaining production-grade quality for diverse clients.',
    tradeoffs: 'Used a restricted, high-roughness aesthetic to lean into the "founder-as-builder" narrative rather than a faceless agency.',
    learnings: 'Learned the value of community-led design (CREO Hangouts) in attracting high-tier creative talent.',
    images: ['https://mir-s3-cdn-cf.behance.net/projects/original/0e92c6162449841.Y3JvcCwxNjE2LDEyNjQsMCww.png'],
    tags: ['Branding', '3D Design', 'Agency Strategy'],
    technologies: ['Adobe XD', 'Blender', 'Photoshop'],
    client: 'Self-Founded',
    role: 'Co-Founder & Lead Designer',
    roleDetail: 'Co-founded the agency and lead the creative direction for branding and 3D visualization projects.',
    metrics: ['Brand Distinctiveness', '3D Innovation'],
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/162449841?ilo0=1" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>'
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
    challenges: 'Translating complex, technical piezoelectric data into a brand identity that felt human and accessible.',
    tradeoffs: 'Simplified the brand mark to a human-lightning bolt hybrid to demystify the hardware solution.',
    learnings: 'Refined the brand message to focus on the synergy between human movement and energy production.',
    images: ['https://mir-s3-cdn-cf.behance.net/projects/original/f36c99151193447.Y3JvcCwxODQxLDE0NDAsNDEsMA.png'],
    tags: ['Arduino', 'IoT', 'Physical Computing'],
    technologies: ['C++', 'Fusion360', 'Piezoelectric Sensors'],
    client: 'Educational Innovation',
    role: 'Product Designer & Engineer',
    roleDetail: 'Designed the physical chassis and engineered the sensor-to-light feedback loop.',
    metrics: ['Kinetic Energy Harvest', 'Localized Feedback System'],
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/151193447?ilo0=1" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>'
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
    challenges: 'Bridging the gap between 32-bit graphical constraints and modern high-performance game standards.',
    tradeoffs: 'Used pixelated typography (PIXEBOY) for UI elements while maintaining modern Futura for high-readability headings.',
    learnings: 'Established a clear typographic hierarchy as the foundation for multi-platform marketing consistency.',
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
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/156706847?ilo0=1" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>'
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
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/153505365?ilo0=1" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>'
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
