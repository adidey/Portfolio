import { Project } from './types';

export const FULL_PROJECTS: Project[] = [
  {
    id: 'synapse',
    title: 'Synapse',
    category: 'Interaction',
    year: '2026',
    thumbnail: '/assets/synapse/main_knowledge_graph_1777509064798.png',
    shortDescription: 'An AI-driven knowledge graph transforming complex learning into a dynamic, spatial experience.',
    context: 'Synapse was built to solve the "static note-taking" problem, where information ends up in disconnected graveyards. I wanted to mirror the biological neural web, creating a spatial environment where knowledge exists as a network of associations. It’s designed for high-density academic research, allowing users to visualize subjects like "Computer Science" or "Physics" as living, interactive maps. Instead of linear documents, I architected a system where adding a new concept like "Neural Networks" physically shifts the entire graph, forcing the user to acknowledge the structural relationships between prerequisite topics like Linear Algebra and Calculus.',
    brief: 'The brief was to engineer a physics-driven learning ecosystem that quantifies mastery through spatial interaction. Key requirements included a real-time responsive graph, a custom subject-switching architecture, and a persistent HUD for progress tracking. I needed to build a system that manages thousands of concept relations without performance lag, ensuring that the transition between "Exploration" and "Focus" modes felt instantaneous. The goal was to provide a tool that helps researchers identify gaps in their knowledge by visualizing the "gravity" of their mental models.',
    goal: 'My primary goal was to establish a digital neural core that lowers cognitive load through automated relationship mapping. I wanted to implement a "Mastery Pulse" system that provides visual feedback on knowledge decay—concepts that haven\'t been reviewed pulse red to signal a drop in clarity. By integrating a "Focus" state, I aimed to help users isolate specific nodes (like "Machine Learning") while keeping the global context visible. The ultimate objective was to turn the abstract act of research into a tactile, spatial experience where every node represents a quantifiable metric of understanding.',
    problem: 'Standard note-taking is fragmented; you lose the deeper connections that actually lead to understanding. Most people struggle to see how "Data Structures" relates to "Graph Theory" in a meaningful way. This lack of architectural clarity leads to cognitive overwhelm. I saw a need for a tool that doesn’t just store facts, but actively maps the structural prerequisites of a subject. The problem wasn’t the availability of information, but the absence of a system that could visualize the "forgetting curve" and the interconnectivity of complex academic subjects.',
    process: 'The process involved a deep dive into D3.js force-simulations and React 19 performance optimization. I spent weeks refining the "Mastery Index" sidebar, which categorizes topics from "Mastered" to "Weak" based on review frequency. I engineered a "Spaced Repetition" engine that generates cards like "NEXT BEST TOPIC: GRAPH THEORY," showing precise metrics such as "25d since review" and "~10 min review estimate." I also designed a "Create Concept" modal with an "Initial Clarity" slider (defaulting to 10%) and placeholder text to guide users. The interaction model was stress-tested to maintain a 0.4ms latency even with hundreds of active nodes.',
    outcome: 'The result is a fluid, intelligence-first platform that enables networked mastery. The "Computer Science" graph successfully visualizes topics from Statistics to Machine Learning with weighted physical links. Recruiters can see the technical depth in the HUD, which tracks global progress across active subjects. The interaction is snappy and weighted, making the graph feel like a physical extension of the user’s mind. The final build includes a robust subject selector and a "Mastery Index" that provides a clear roadmap for long-term retention, transforming research from a chore into a high-performance cognitive activity.',
    challenges: 'Performance was the ultimate challenge—balancing complex physics simulations with high-density UI components in the browser. I had to optimize the D3 engine to ensure nodes didn’t jitter and that the HUD remained responsive. Another hurdle was designing the "Initial Clarity" logic; I had to ensure that the system felt honest about the learning curve. Refining the "Machine Learning" focus state required custom view-port scaling to keep the surrounding prerequisites in sight without cluttering the screen.',
    tradeoffs: 'I chose "Structural Rigidity" over free-form layouts to ensure the architecture of learning remained intact. This means the graph is opinionated about node placement, which reduces the user\'s "messy" cognitive load but limits creative scrapbooking. I also prioritized performance (targeting 0.4ms latency) over having excessive "eye candy" animations. Every visual element—from the node pulse to the sidebar categories—is backed by real-time data, trading off purely aesthetic flourishes for functional, data-driven utility.',
    learnings: 'Synapse taught me that knowledge is a living organism that requires a specific architecture to thrive. I learned that the most effective learning tools are those that respect the networked nature of the brain. My experience with D3 and physics-based UI reinforced the importance of "tactile" feedback in digital research. Moving forward, I want to keep exploring "Spatial Intelligence," building tools that make the "invisible" connections in our minds visible and actionable through rigorous design and engineering.',
    images: [
      '/assets/synapse/main_knowledge_graph_1777509064798.png',
      '/assets/synapse/pulsing_node_focus_1777509187603.png',
      '/assets/synapse/create_concept_modal_1777509108635.png',
      '/assets/synapse/subject_selector_dropdown_1777509082710.png',
      '/assets/synapse/media__1777508979864.png',
      '/assets/synapse/media__1777509014296.png'
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
    ],
    sections: [
      {
        title: 'The Knowledge Graph',
        body: 'The core view is a live physics simulation where every concept you add physically pulls on the surrounding nodes. Subjects like "Computer Science" exist as a gravitational centre — add "Neural Networks" and it snaps into orbit around "Linear Algebra" and "Calculus" automatically. The layout is never static; it evolves as your knowledge does.',
        images: ['/assets/synapse/main_knowledge_graph_1777509064798.png'],
        layout: 'full'
      },
      {
        title: 'Focus Mode & Node Detail',
        body: 'Clicking a node enters Focus Mode — the graph dims everything except the selected concept and its direct relations. The inspector panel surfaces mastery score, time since last review, and a smart recommendation for what to study next. Every metric is pulled from the spaced repetition engine in real-time.',
        images: [
          '/assets/synapse/pulsing_node_focus_1777509187603.png',
          '/assets/synapse/subject_selector_dropdown_1777509082710.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Create Concept Modal',
        body: 'Adding a new concept opens a friction-aware modal that forces intentionality. You name the topic, set an Initial Clarity score (defaulting to 10% to reflect honest beginner-level understanding), and tag prerequisite relations. The graph physically re-routes when you confirm — making the structural impact of new knowledge immediately visible.',
        images: ['/assets/synapse/create_concept_modal_1777509108635.png'],
        layout: 'full'
      },
      {
        title: 'Mastery Index & HUD',
        body: 'The persistent HUD tracks global progress across all active subjects. Concepts are bucketed from Mastered to Weak based on review frequency and self-reported clarity. Nodes that haven\'t been reviewed in over 14 days pulse red — a visual decay signal that mirrors the forgetting curve. The sidebar gives a roadmap, not just a record.',
        images: [
          '/assets/synapse/media__1777508979864.png',
          '/assets/synapse/media__1777509014296.png'
        ],
        layout: 'grid-2'
      }
    ]
  },
  {
    id: 'sonora',
    title: 'Sonora',
    category: 'Interaction',
    year: '2023',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1bff64173945869.64996929bbc71.png',
    shortDescription: 'A specialized social hub for musicians to network, collaborate, and discover local talent through a tactile, mobile-first experience.',
    context: 'Sonora was built because musicians are scattered across too many platforms and none of them actually understand the creative process. Instagram is for lifestyle. LinkedIn is for corporate networking. Discord is for gamers. There is no dedicated space where a bassist in Bangalore can find a producer in Mumbai based on shared genre, gear, or sound. Sonora is that space — a mobile-first social network designed specifically for the music community, using the tagline Let the wave form to set the tone immediately.',
    brief: 'The brief was to design a high-fidelity mobile ecosystem where discoverability is based on craft rather than follower count. Key screens included a music detection state with a circular radial waveform animation, detailed artist profile cards showing mastery tags and gear lists, a local networking feed, a festival updates editorial grid, and a full settings menu. The UI had to feel like professional studio hardware — dark, tactile, and built for people who work late.',
    goal: 'The goal was to move away from the influencer model and towards a craft model. A bass player should be able to find a drummer within five kilometers. A bedroom producer should be able to reach a vocalist with the right genre tags without paying for ads. I also wanted to integrate Dynamic Island support to make audio detection states feel natively iOS — the circular waveform animation that pulses when the app is Listening for music was designed to make the technology feel magical rather than technical.',
    problem: 'Mainstream social networks are engineered for content consumption, not creative collaboration. They do not understand the vocabulary of musicians: gear specs, mastery levels, collab history, genre tags. This creates massive friction in the creative-to-commercial pipeline — independent artists cannot reach their target audience effectively because the platform architecture was never built for them. The result is a fragmented scene where talent is invisible and discovery is purely algorithmic.',
    process: 'I spent months in Figma building the complete interaction model, starting with the artist profile card — a dense but clean screen showing profile image, genre tags, mastery indicators, gear list, and collab history. The Electric Blue accent palette was chosen to feel energetic without being aggressive. The music detection screen centres the circular waveform on a dark background, making the act of identifying a track feel like a ritual. The festival updates section uses a 12-column editorial grid — closer to a music magazine than a social feed.',
    outcome: 'The result is a complete high-fidelity prototype covering the full user journey: onboarding, discovery feed, music detection, profile exploration, festival updates, and settings. The Dynamic Island integration gives it an iOS-native feel that most third-party apps never achieve. The artist profile for Samarth Saluja — with his sonora@gmail.com contact, specific genre tags, and custom profile imagery — demonstrates how much richer the information density is compared to a standard Instagram bio.',
    challenges: 'Balancing information density with mobile usability was the central design challenge. Musicians need a lot of data visible — mastery tags, gear lists, collab history, location, genre — but cramming that onto a mobile screen without it becoming unreadable required a disciplined expandable card system. The music detection waveform animation also needed to feel perfectly synced and tactile, which took many iterations to get the timing and the visual weight right.',
    tradeoffs: 'I prioritized audio-centric features and deep professional networking over casual social features like reels or stories. Sonora is not a content platform — it is a tool for working musicians. That means I traded scrollable entertainment for high-utility professional features. The dark-only theme was also a firm call: late-night studio sessions are the primary use context, and a light mode would have been a distraction. Every decision was made to respect the physical workflow of someone who actually makes music for a living.',
    learnings: 'Sonora taught me that niche communities require a specific visual vocabulary. You cannot just reskin a generic social template and expect it to resonate — you have to understand the subculture deeply enough to design its language. Working with Samarth on the profile prototypes showed me how much trust users place in platforms that accurately represent their professional identity. The detail in a profile card — the specific gear, the exact mastery level — communicates respect for the user as a serious professional.',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1bff64173945869.64996929bbc71.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/10cbf7173945869.64996929ae819.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1bf2ea173945869.64996929b209b.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3156c6173945869.64996929b04c5.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a1715b173945869.64996929bd635.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1de6f2173945869.64996929b94b2.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6602ed173945869.64996929b2cb0.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2e0c74173945869.64996929baf3d.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4ec2cd173945869.64996929b7862.png'
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
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/173945869?ilo0=1" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>',
    sections: [
      {
        title: 'Hero & Identity',
        body: 'The opening screen sets the register immediately — dark background, Electric Blue accent, the Sonora wordmark in heavy sans-serif. It is not trying to compete with Instagram; it is deliberately positioning itself as a professional tool. "Let the wave form" is the first thing you read, which frames the entire experience as something for people who take sound seriously.',
        images: ['https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1bff64173945869.64996929bbc71.png'],
        layout: 'full'
      },
      {
        title: 'Music Detection & Dynamic Island',
        body: 'The music detection state is the centrepiece interaction. A circular radial waveform pulses at the top of the screen, expanding and contracting in sync with the app\'s "Listening" state. The Dynamic Island integration makes this feel natively iOS — the animation bleeds into the hardware notch, turning the camera cutout into an active UI element rather than dead space.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/10cbf7173945869.64996929ae819.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1bf2ea173945869.64996929b209b.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Artist Profile Card',
        body: 'The artist profile is the densest screen in the app — and that density is deliberate. Genre tags, mastery indicators, gear list, collab history, and location all live on one card. Real musicians have complex professional identities that Instagram bios cannot hold. Sonora\'s profile architecture treats that complexity as a feature, not a problem to solve.',
        images: ['https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3156c6173945869.64996929b04c5.png'],
        layout: 'full'
      },
      {
        title: 'Discovery Feed & Festival Grid',
        body: 'The local discovery feed surfaces musicians within a defined radius, filtered by genre and instrument. The Festival Updates section breaks from the social feed format entirely — it uses a 12-column editorial grid closer to a music magazine than a timeline. Event cards, lineup announcements, and ticket links live in the same space without fighting for attention.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a1715b173945869.64996929bd635.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1de6f2173945869.64996929b94b2.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6602ed173945869.64996929b2cb0.png'
        ],
        layout: 'grid-3'
      },
      {
        title: 'Settings & Final Screens',
        body: 'The settings menu and final screens complete the system. Every screen inherits the same dark palette and Electric Blue accent logic — there is no visual inconsistency between the onboarding flow and the deepest settings panel. The information architecture holds from first launch to power user.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2e0c74173945869.64996929baf3d.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4ec2cd173945869.64996929b7862.png'
        ],
        layout: 'grid-2'
      }
    ]
  },
  {
    id: 'aurorae',
    title: 'Aurorae',
    category: 'Branding',
    year: '2022',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7e8edb155839991.635be8ee3e7aa.png',
    shortDescription: 'A minimalist, high-contrast visual identity and brand study exploring the intersection of grain, form, and analog-inspired digital design.',
    context: 'Aurorae is a brand identity study exploring one specific idea: what happens when you use imperfection as a design material? Modern digital design has a sterility problem — everything is too clean, too flat, too interchangeable. Aurorae pushes in the opposite direction, using high-grain textures, aggressive monochromatic contrast, and architectural scale to make a digital identity feel physically heavy. The brand is built for a premium lifestyle platform positioned at the intersection of fine art and NFT culture.',
    brief: 'The brief was to develop a brutalist, monochromatic brand system that works across the full range of touchpoints — from a 35mm business card to a building-scale billboard. No colour except black, white, and procedural grain. The logomark had to be geometric: four vertical pillars centered around a circle, representing stability and growth. Every asset had to pass one test: does it still read as intentional and premium when stripped of all colour and decoration?',
    goal: 'The goal was to prove that minimalism can feel heavy. I used a 12% roughness grain overlay across every surface — not as a filter, but as a structural element. The LOGO MARK builds from geometric primitives deliberately, and the LOGO TYPE mirrors that geometric weight. Process sketches documenting the hand-drawn exploration of the A form and the vertical pillar mark are part of the case study, showing that the precision of the final mark came from analogue exploration rather than direct digital construction.',
    problem: 'Most digital branding feels disposable because it lacks physical weight. Templates and AI-generated palettes have made the design landscape incredibly uniform. There is a loss of tactile trust — identities that look like they could be swapped out overnight do not build long-term brand equity. The market for a premium lifestyle or art-adjacent brand needed something that felt more like architecture than graphic design: load-bearing, permanent, and impossible to fake.',
    process: 'I developed a procedural grain system that scales correctly from mobile screens to large-format print without becoming noise. The hand-drawn logo explorations came first — multiple iterations of the geometric A and the pillar mark, drawn with thick markers, then digitized and refined in Illustrator. High-fidelity mockups cover the full application spectrum: NFT-centric grid UI, clean authentication screens, tactile business cards with debossed logomarks, realistic urban billboard placements, and editorial stationary.',
    outcome: 'The final case study is a production-ready brand system that demonstrates two things simultaneously: that a monochromatic palette is not a creative limitation, and that grain is a legitimate structural design material. The identity holds from a 55mm business card to a four-meter billboard. The Art Space UI screens show how the system translates into a digital product without losing any of the physical weight that makes the brand distinctive.',
    challenges: 'Maintaining grain fidelity across scales is technically hard. Too much roughness at small sizes reads as bad pixels. Too little at large sizes reads as lazy. I had to develop a procedural approach — different grain densities for different output sizes — and test everything at final dimensions rather than screen previews. Making a strictly monochromatic palette feel dynamic also required aggressive typographic shifts and precise geometric pattern work to sustain visual interest across long compositions.',
    tradeoffs: 'I chose visual distinctiveness over broad appeal. Aurorae has a very specific mood — it is not for everyone, and that is by design. A brand with a clearly defined target audience is more valuable than one trying to appeal to everyone simultaneously. I also traded decorative colour entirely for the raw power of form and texture, which means the brand depends on its structural integrity to carry all the expressive weight. There is no colour safety net.',
    learnings: 'Aurorae taught me that imperfection is a trust-building tool when deployed with precision. The grain has to look intentional — which means understanding the technical parameters of your output medium well enough to control the noise rather than just adding a filter. I also learned how to use typography as a primary structural element. When the LOGO TYPE is scaled to 400pt, it stops being text and becomes architecture. That shift in register is something I now look for in every brand project.',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9bf751155839991.636f3ca8730f0.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a8a880155839991.635be8ee3cd76.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7e8edb155839991.635be8ee3e7aa.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0ab619155839991.635be8ee411d9.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b27eeb155839991.635bfaec34816.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ec97b3155839991.635c05e215e26.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9b6767155839991.635bf63ae32bf.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/99e32d155839991.635bf63ae2493.png'
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
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/155839991?ilo0=1" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>',
    sections: [
      {
        title: 'Logo System & Grain',
        body: 'The logomark is four vertical pillars centered around a circle — geometric, load-bearing, and readable at any scale. Every surface carries a 12% roughness grain overlay that was calibrated separately for screen and print output. The grain is not a Photoshop filter applied at the end; it is a structural element baked into the system from the start.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9bf751155839991.636f3ca8730f0.jpg',
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7e8edb155839991.635be8ee3e7aa.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Brand Mark Exploration',
        body: 'The final mark came from analogue exploration — thick marker sketches on paper, testing the geometric A and pillar composition before touching Illustrator. Digitizing a hand-drawn form forces precision: every vector point is justified because every stroke was drawn with intention first. The sketch process is part of the case study because it proves the final mark was earned, not generated.',
        images: ['https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a8a880155839991.635be8ee3cd76.png'],
        layout: 'full'
      },
      {
        title: 'Digital Product UI',
        body: 'The brand translates into a digital Art Space UI with no loss of physical weight. NFT grid screens, authentication flows, and collection browsing all inherit the monochromatic system. The grain reads correctly on-screen because the density was calculated for a 72dpi context rather than simply scaled down from print assets.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0ab619155839991.635be8ee411d9.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b27eeb155839991.635bfaec34816.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Applied Identity & Print',
        body: 'The system holds from a 55mm business card to a four-metre billboard. Business cards use the debossed logomark on a heavy cotton stock — tactile, permanent, impossible to fake. The billboard placement shows how the architectural scale of the LOGO TYPE takes over at large format: at 4 metres wide, the type stops being text and becomes structure.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ec97b3155839991.635c05e215e26.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9b6767155839991.635bf63ae32bf.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400/99e32d155839991.635bf63ae2493.png'
        ],
        layout: 'grid-3'
      }
    ]
  },
  {
    id: 'notchprompt',
    title: 'NotchPrompt',
    category: 'macOS Utility',
    year: '2026',
    thumbnail: '/notchprompt.png',
    shortDescription: 'A premium macOS teleprompter that integrates with the hardware notch.',
    context: 'NotchPrompt was engineered to solve the eye-contact disconnect inherent in remote communication. I realized the camera notch on the MacBook Pro was essentially dead space that could be reclaimed as a focal anchor. I architected a native macOS teleprompter that overlays scripts directly around the hardware notch, ensuring the user’s gaze never leaves the lens. It’s designed for high-performance presenters who need their notes accessible without the distraction of a floating window. The utility is built to feel natively integrated, utilizing system-level window management to stay anchored regardless of app-switching or full-screen states.',
    brief: 'The brief was to develop a professional-grade macOS utility that utilizes the camera notch as a functional HUD. Key requirements included sub-millisecond scrolling latency, support for ProMotion (120Hz) displays, and a minimal CPU footprint to prevent thermal throttling during video calls. I needed to implement a system that could handle long-form scripts while providing visual cues for pacing. The design had to be unobtrusive, respecting the macOS menu bar architecture while providing a clear, high-contrast reading environment for users in varied lighting conditions.',
    goal: 'My goal was to transform a hardware limitation into a communication asset by establishing a "Notch-Centric" interaction model. I wanted to implement a "Glow" mode that uses a cyan neon aura to highlight the active line, helping the eye track text through peripheral vision. By supporting 120Hz ProMotion, I aimed to provide the smoothest reading experience possible, eliminating the jitter common in standard software prompters. The ultimate objective was to create a tool that makes professional eye contact effortless, helping users project confidence and authority during critical virtual presentations.',
    problem: 'Standard teleprompters are intrusive; they require dragging windows near the camera, which is imprecise and clunky. Every time a presenter looks down to read, they break the "fourth wall," losing audience trust. Existing software solutions lack the system-level integration needed to feel truly native on macOS. There was no tool that specifically addressed the geometry of the MacBook Pro notch, leading to janky workarounds like sticky notes or shrunken documents. The problem was a lack of dedicated, hardware-aligned software for modern remote professionals.',
    process: 'The development process was a deep dive into SwiftUI 6.0 and AppKit, focusing on specialized window layering. I engineered a custom rendering engine to handle 120Hz refresh rates, ensuring the text scroll felt fluid and weighted. I developed two distinct themes: "Glow," which features the cyan neon highlight for peripheral tracking, and "Stark," a brutalist high-contrast black-and-white theme for maximum clarity. I spent weeks optimizing the "Notch Geometry" logic to ensure the window anchors perfectly across different MacBook models (14" and 16"). The final build maintains a minimal CPU footprint, crucial for stability during resource-heavy Zoom or Teams sessions.',
    outcome: 'The result is a production-grade macOS utility that turns the camera notch into a productivity powerhouse. It successfully enables constant eye contact, significantly improving the quality of virtual communication. The "Glow" theme provides a unique visual rhythm that users can track without looking away from the camera. The app is Snappy and native, supporting custom scroll speeds and font adjustments. It establishes a new standard for hardware-integrated utilities, proving that even a "notch" can be a valuable UI anchor when architected correctly.',
    challenges: 'The primary challenge was AppKit’s window management—making sure the prompter stayed on top of every full-screen app without interfering with system features like Mission Control. Handling varied notch geometries across the MacBook lineup required custom coordinate math to ensure perfect alignment. I also had to optimize the Metal-accelerated text rendering to ensure that the "Glow" blur didn’t spike CPU usage, which could cause frame drops during video encoding on the same machine.',
    tradeoffs: 'I chose SwiftUI for the core UI to speed up iteration but moved to AppKit for low-level window controls and system-level anchoring. This increased the codebase complexity but was necessary for the "Native" feel. I also traded off complex rich-text features to keep the focus entirely on script readability and performance. I prioritized 120Hz support and low CPU overhead over having a larger feature set, ensuring the app remains a specialized, ultra-reliable tool for one specific, high-stakes use case.',
    learnings: 'NotchPrompt taught me that the best digital solutions are often those that respect the physical hardware. By using the notch as a focal point, I learned how to reduce cognitive load through spatial anchoring. This project reinforced my skills in low-level macOS development and the importance of performance-first design in professional utilities. Moving forward, I want to keep looking for these "hidden" hardware assets, building software that feels like it was designed as part of the machine itself.',
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
    prototypeVideo: '/videos/notchprompt_demo.mp4',
    sections: [
      {
        title: 'The Notch Interface',
        body: 'NotchPrompt transforms the MacBook Pro camera notch from dead hardware space into a functional HUD. The prompter window anchors precisely to the notch geometry across all models — 14" and 16" — using custom coordinate math rather than approximations. The result is a reading surface that sits exactly where your eyes naturally go when looking at the camera.',
        images: ['/notchprompt.png'],
        layout: 'full'
      },
      {
        title: 'Glow & Stark Themes',
        body: 'Two themes cover the full range of use cases. Glow uses a cyan neon aura to highlight the active reading line — the peripheral glow lets your eye track position without a conscious scan. Stark is a brutalist high-contrast black-on-white mode for outdoor use or situations where the neon feel is too intense. Both are engineered to run at 120Hz ProMotion without spiking CPU.',
        images: [
          'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1600',
          'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1600'
        ],
        layout: 'grid-2'
      },
      {
        title: 'System-Level Architecture',
        body: 'The prompter maintains its position above every full-screen app without interfering with Mission Control or Stage Manager. This required custom AppKit window layering rather than a standard SwiftUI sheet — the kind of low-level system work that most macOS utilities skip. Metal-accelerated text rendering keeps the Glow blur lightweight even during simultaneous video encoding.',
        images: ['https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1600'],
        layout: 'full'
      }
    ]
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    category: 'UI Design',
    year: '2026',
    thumbnail: '/assets/portfolio_hero_section_1777819291389.png',
    shortDescription: 'A systematic architectural overhaul of my digital identity, engineered for speed and editorial aesthetics.',
    context: 'This portfolio is a systematic architectural overhaul of my digital identity. I wanted to move away from the "tool-first" playground and towards a high-end editorial archive that establishes a professional design philosophy. The redesign is built on a mathematically locked 12-column grid system, aiming to commercialize my personal brand and provide a space that feels intellectually rigorous. It’s designed to function as an "Archival Folder," where every project is documented with the same technical depth and visual precision found in a professional design studio’s internal records.',
    brief: 'The brief was to engineer a resilient digital infrastructure that communicates founder-level methodology and technical prowess. Key requirements included sub-second First Contentful Paint (FCP), a unified container metric system, and aggressive typographic scaling. I needed to resolve the visual tension common in responsive portfolios by standardizing margin sets and vertical pacing. The goal was to build a system that remains structurally sound regardless of content volume, proving my ability to architect scalable, high-performance web products.',
    goal: 'My primary goal was to establish a rigid Z-pattern layout methodology that controls visual hierarchy across all routes. I wanted to implement a "Performance Index" for every project, holding my own work to a rigorous engineering standard. By using a unified 16mm margin set and a mathematically derived typographic rhythm, I aimed to create a sense of "Commercial Credibility." The ultimate objective was to build a digital platform that recruiters can scan in seconds to understand my methodology, while providing the depth required for a multi-hour deep dive into my process.',
    problem: 'Minimalist design often fails when it lacks a strict structural foundation; white space without a grid looks like an error rather than a choice. Most portfolios suffer from inconsistent hierarchy and layout shifts, which reduces the user’s trust in the designer’s technical ability. I saw a need for a site that feels as solid and permanent as brutalist architecture. The problem wasn’t just "showing work," but establishing a cohesive visual system that demonstrates an understanding of both design aesthetics and high-performance engineering.',
    process: 'The process involved a total reconstruction of the site’s underlying math. I designed a custom 12-column grid system using Tailwind v4 and React 19, ensuring that every pixel is anchored to a global container metric. I spent weeks refining the Z-pattern layout to guide the eye toward key "Recruiter-Ready" data points like roles, metrics, and technologies. I standardized the "Archival Folder" aesthetic, using high-contrast borders and structured metadata blocks to create a feeling of professional documentation. Performance was optimized through Vite, targeting a sub-second TTI and zero layout shift during asset loading.',
    outcome: 'The result is a highly performant, accessible digital product that functions as a definitive archive of my work. The sub-second FCP ensures an instant first impression, while the rigid grid system provides a premium editorial feel. The Z-pattern execution successfully highlights my technical methodology, making the transition from "Designer" to "Product Engineer" clear. The final site successfully balances aggressive typography with technical precision, establishing a professional identity that is both memorable and intellectually deep.',
    challenges: 'The biggest challenge was the "Responsive Rigidity" problem—maintaining the 12-column grid and aggressive typographic scale on mobile viewports without breaking the archival aesthetic. I had to develop a custom fluid-typography system that scales mathematically between breakpoints. Another hurdle was optimizing high-resolution project imagery for a sub-second FCP; I had to implement a custom lazy-loading and image-optimization pipeline to ensure that visual depth didn’t regress my performance metrics.',
    tradeoffs: 'I prioritized "Structural Rigidity" and grid-locking over experimental, free-form navigation to ensure maximum commercial credibility. This means the site is more opinionated about its layout, trading off casual "playfulness" for professional authority. I also chose a strictly monochromatic "Stark" theme to highlight the structural clarity of my work, sacrificing a more colorful palette to ensure that the content and the grid remained the primary focus. Every choice was made to lean into a high-performance, archival design philosophy.',
    learnings: 'This project taught me that "less is more" only works when the math is perfect. I learned that a rigid structural foundation is the most powerful tool for building user trust. Working on the intersection of Tailwind and React reinforced my belief that design and engineering are inseparable. Moving forward, I am obsessed with "Mathematical Layouts," building systems where every visual decision is backed by a rigorous grid. It’s made me a more disciplined designer and a much more strategic engineer, focusing on the long-term resilience of the systems I build.',
    images: ['/assets/portfolio_hero_section_1777819291389.png'],
    tags: ['UX Architecture', 'Framer Motion', 'React 19'],
    technologies: ['Vite', 'Tailwind', 'Motion UI'],
    client: 'Personal Branding',
    role: 'Product Engineer',
    roleDetail: 'Designed the mathematical layout grid and engineered the fluid navigation architecture.',
    metrics: ['Sub-second FCP', 'Mathematical Grid Alignment', 'Reduced TTI Layout Shift'],
    annotations: ['Z-Pattern Execution', 'Fluid Typography'],
    processImages: ['/assets/portfolio-about.jpg'],
    outcomeImages: ['/assets/portfolio-work.jpg'],
    sections: [
      {
        title: 'Hero & Grid System',
        body: 'The landing page is built on a 12-column mathematical grid — every margin, every gutter, every typographic step is derived from the same base unit. The hero uses a Z-pattern scan path that guides the eye from name to role to featured project in under two seconds. No decorative elements compete with the content; the structure does all the work.',
        images: ['/assets/portfolio_hero_section_1777819291389.png'],
        layout: 'full'
      },
      {
        title: 'Work Index & Project Cards',
        body: 'The Work index uses a table-style layout rather than a conventional grid of thumbnails. Each project row shows title, category, year, and a short descriptor — scannable in a single pass. Hover states reveal the project thumbnail via a smooth clip-path reveal, keeping the page clean until the user actively engages with a specific entry.',
        images: ['/assets/portfolio-work.jpg'],
        layout: 'full'
      },
      {
        title: 'About & Process',
        body: 'The About page uses a split-column layout: biographical text on the left, a structured skills matrix and timeline on the right. The section communicates both the human behind the work and the technical depth required to execute it. Every section uses the same border and spacing logic as the rest of the site — there is no visual inconsistency between pages.',
        images: ['/assets/portfolio-about.jpg'],
        layout: 'full'
      }
    ]
  },
  {
    id: 'spinpod',
    title: 'Spinpod',
    category: 'AI & Music',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'A retro-industrial music controller powered by Gemini AI.',
    context: 'Spinpod is a study in tactile digital interaction, designed to act as a "physical buffer" between the user and digital noise. I wanted to build a hardware-inspired interface that prioritizes deep work by removing the distractions of modern streaming apps. The project is a "Retro-Industrial" experiment, utilizing the Gemini LLM to mood-match audio feeds based on real-time user input. It’s built for those who miss the "weighted" feeling of physical dials and need a dedicated, low-friction environment to enter a creative flow state.',
    brief: 'The brief was to create a tactile AI music controller (UNIT_REV_4.0) that provides a distraction-free listening experience. Key features included physical-style Volume and Seek dials, a hardware-inspired boot sequence, and a suite of industrial signal indicators like "SIGNAL_OVERRIDE" and "PRGM_HOLD." I needed to integrate the Gemini API to decode Spotify schemas and provide intelligent audio recommendations. The goal was to build a digital experience that feels like a solid piece of laboratory equipment, demanding the user’s full presence and focus.',
    goal: 'My primary goal was to establish a sense of "Weight" and "Heft" in a purely digital interface. I wanted to implement a "Tactile Feedback" system where every dial rotation and button press feels physically grounded. By using Gemini AI for mood-matching, I aimed to simplify the choice-making process, allowing the user to focus on their work while the AI handles the audio curation. The objective was to move away from the "Infinite Scroll" of Spotify and towards a "Single-Stream" industrial tool that acts as a dedicated companion for high-performance productivity.',
    problem: 'Modern streaming apps are over-engineered for "Discovery" but under-engineered for "Focus." They distract users with infinite options, breaking the flow state through constant choice-making. Additionally, the flat interaction model of touchscreens lacks the tactile satisfaction of physical hardware. There is a complete absence of a dedicated "Workplace Controller" that respects the user’s need for a physical buffer. The problem is a lack of digital tools that have a specific, industrial character and a singular, focused utility.',
    process: 'The process involved a deep dive into high-roughness material design and hardware UI patterns. I used "UNIT_REV_4.0" as my architectural base, incorporating specific labels like "SIGNAL_OVERRIDE," "PRGM_HOLD," and "AUTO_SCAN" to anchor the aesthetic. I engineered a custom "Boot" sequence in React 19 that simulates a hardware power-up, complete with diagnostic signal feedback. I spent weeks refining the Framer Motion physics for the dials, ensuring they felt "heavy" rather than just animated. The Gemini integration was architected to parse Spotify URLs and provide context-aware audio streams with minimal latency.',
    outcome: 'The result is a super-tactile, analog-inspired desk interface that creates a dedicated zone for focused listening. The "Boot" feed successfully transitions the user into a work state, while the AI mood-matching eliminates "choice fatigue." The UI is snappier than a standard app, utilizing high-contrast industrial visuals to provide a premium, authoritative feel. The final build includes the full suite of signal indicators and weighted dials, proving that a digital tool can feel like a physical object if the interaction design is rigorous and intentional.',
    challenges: 'The biggest challenge was "The Weight Problem"—simulating the physical inertia of a heavy metal dial on a 2D screen. I had to use complex easing functions and micro-animations to sell the "click" and the "drag." Another hurdle was the Gemini AI latency; I had to implement a custom caching layer to ensure that the mood-matching didn’t interrupt the "Hardware Boot" experience. Refining the industrial material textures (the roughness and grain) was also a challenge to ensure they looked premium on high-DPI displays.',
    tradeoffs: 'I chose "Industrial Character" and "Focus" over having a full-featured music player. This means the user cannot browse their entire library or see lyrics; the app is strictly for "Single-Stream" deep work. I traded off the versatility of a modern UI for the singular authority of a piece of lab equipment. I also prioritized the tactile "heft" of the interface over making it "fast" in the traditional sense, ensuring the boot sequence and dial rotations felt like they were moving actual machinery.',
    learnings: 'Spinpod taught me that "Personality" is a powerful tool in product design. A tool with a specific character is more memorable and more effective than a generic one. I learned the importance of "Tactile UI" in building focus-oriented products. Working with Gemini AI beyond the chatbot model showed me new ways to simplify complex user inputs into singular, actionable outputs. It’s made me want to keep exploring the intersection of AI and industrial design, building tools that feel more like "machines" and less like "software."',
    images: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1600'
    ],
    tags: ['React', 'Gemini AI', 'Tailwind CSS'],
    technologies: ['React 19', 'Google Gemini Pro API', 'Framer Motion', 'Vite'],
    client: 'Self-Initiated',
    role: 'Interaction Designer',
    roleDetail: 'Designed the tactile UI system and implemented the AI-driven playlist logic.',
    metrics: ['AI-Driven Exploration', 'Tactile Interface', 'Low-Latency Interaction'],
    annotations: ['Concept: Industrial Design', 'AI Integration'],
    processImages: ['https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1600'],
    outcomeImages: ['https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600'],
    sections: [
      {
        title: 'The Hardware Interface',
        body: 'UNIT_REV_4.0 reads like a piece of lab equipment dropped onto your desk. Volume and Seek dials use Framer Motion physics tuned to feel heavy — not just animated. Signal indicators (SIGNAL_OVERRIDE, PRGM_HOLD, AUTO_SCAN) are functional status displays, not decoration. The boot sequence is a real power-up ritual, not a splash screen.',
        images: ['https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=1200'],
        layout: 'full'
      },
      {
        title: 'AI Mood-Matching',
        body: 'The Gemini integration parses Spotify schemas and surfaces a single-stream audio recommendation based on the user\'s current context — no browsing, no infinite scroll, just one track queued and ready. A custom caching layer keeps the AI response latency below the perceptual threshold so it feels instantaneous rather than computationally expensive.',
        images: [
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600',
          'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1600'
        ],
        layout: 'grid-2'
      }
    ]
  },
  {
    id: 'resume-editor',
    title: 'Resume Editor',
    category: 'Productivity',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'Privacy-focused, single-page resume builder for instant ATS-friendly exports.',
    context: 'Resume Editor was developed to bridge the gap between "design-heavy" resumes and high-performance ATS readability. Most designers prioritize aesthetic complexity, which often breaks automated recruitment systems. I wanted to build a professional, local-first utility that gives users total agency over their data while providing granular typographic control. It’s a tool for serious professionals who need to manage their experience across varied density modes—ensuring that their resume is as readable to a machine as it is to a human hiring manager.',
    brief: 'The brief was to engineer a privacy-first, technical resume builder that eliminates the friction of modern recruitment. Key requirements included 100% client-side processing, perfect PDF generation with zero layout shift, and three distinct density modes: "Comfy," "Compact," and "Dense." I needed to implement a system that handles complex line-spacing and margin adjustments (down to the mm) without breaking the single-page constraint. the goal was to provide a professional-grade editorial tool that respects the user’s data privacy and their need for machine-readable output.',
    goal: 'My primary goal was to establish a "Single-Column Architecture" that guarantees ATS compatibility without sacrificing design quality. I wanted to implement real-time preview features that allow users to experiment with Modern Serif and Humanist Sans font pairings. By using a local-first architecture (Next.js 15), I aimed to ensure that sensitive personal information never leaves the user’s browser. The ultimate objective was to democratize high-end editorial design, providing job-seekers with a tool that manages information density as effectively as a professional typesetter.',
    problem: 'Mainstream resume builders are often data-harvesting platforms that produce janky, machine-unfriendly PDFs. If a resume contains complex columns or non-standard font encodings, it fails at the first hurdle of the recruitment process. There is a complete lack of dedicated, privacy-focused tools that prioritize "Technical Readability" over generic templates. This leads to a loss of opportunity for highly qualified candidates who are being rejected by automated systems before a human even sees their work.',
    process: 'The process involved a deep dive into PDF-Lib and client-side rendering optimizations. I developed a custom sidebar that provides real-time control over margins, letter-spacing, and section-level visibility. I engineered three density modes—"Comfy" for early-career profiles and "Dense" for high-experience professionals—to help users maximize their single-page real estate. The interaction model was designed to be snappy and "tool-like," utilizing Next.js 15 and Tailwind v4 to ensure a sub-millisecond feedback loop during typographic adjustments.',
    outcome: 'The result is a robust, production-grade utility that produces some of the cleanest, most readable resumes in the industry. The "Preview" mode provides a 1:1 match with the final PDF export, ensuring zero surprises for the user. It successfully solves the ATS compatibility problem while maintaining an elite editorial aesthetic. The final project demonstrates a complete understanding of information density and typographic hierarchy, providing a specialized solution for professionals who value both their privacy and their presentation.',
    challenges: 'The biggest challenge was "The Font Encoding Problem"—ensuring that every character in the generated PDF was perfectly searchable and selectable by automated systems. I had to go through dozens of iterations of the export engine to handle different font weights and kerning values. Another hurdle was building a complex UI that manages real-time layout shifts on the client side without any perceptible lag, requiring strict React optimization and state management.',
    tradeoffs: 'I chose "Technical Readability" and "Privacy" over having a wide variety of artistic templates. This means the tool is opinionated about its single-column structure, which might limit creative freedom but guarantees professional performance. I also traded cloud-saving features for 100% local-first security, requiring users to manage their own data exports. I prioritized the "utility" of getting a job over the "playfulness" of a typical design tool.',
    learnings: 'This project taught me that high-stakes design is about functional precision. I learned that the most effective tools are those that respect both the human user and the machine ecosystem they inhabit. Working on local-first architectures reinforced my commitment to data privacy and performance. Moving forward, I want to keep building "Invisible Solutions"—tools that remove the technical hurdles from human processes through rigorous engineering and clean, authoritative design.',
    images: [
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Next.js', 'Typescript', 'Design Systems'],
    technologies: ['Next.js 15', 'Tailwind v4', 'PDF-Lib'],
    client: 'Personal Project',
    role: 'Product Designer',
    roleDetail: 'Designed the typography-first interface and optimized the export engine for high readability.',
    metrics: ['ATS-Friendly Export', 'Privacy-Focused Design', 'Clean Typography'],
    annotations: ['Focus: ATS Optimization', 'Client-side Processing'],
    sections: [
      {
        title: 'Editor & Live Preview',
        body: 'The editor and preview panels live side by side. Every change — font size, line height, margin — updates the preview in under a millisecond. There is no "Generate" button; the output is always current. The sidebar controls are organized by concern: typography, spacing, section visibility — each group collapsible so the tool scales from beginner to power user without cluttering the workspace.',
        images: ['https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600'],
        layout: 'full'
      },
      {
        title: 'Density Modes & Typography',
        body: 'Three density modes — Comfy, Compact, Dense — adjust line height, section padding, and font size simultaneously using a single toggle. Comfy is for early-career profiles with limited content. Dense packs a decade of experience into one clean page. Modern Serif and Humanist Sans pairings are built-in; both are tested against ATS parsers to ensure no encoding issues on export.',
        images: ['https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200'],
        layout: 'full'
      }
    ]
  },
  {
    id: 'client-work',
    title: 'Client Work: Portfolio',
    category: 'UI Design',
    year: '2024',
    thumbnail: '/assets/client-portfolio/DARK HOME.png',
    shortDescription: 'Interactive Figma prototype for a personal client portfolio showcasing sleek design and seamless navigation.',
    context: 'A client came to me with a photography and videography side hustle they were trying to turn into actual paying work. The work was good but the presentation was not backing it up — no clear pricing, no portfolio structure, nothing that made a potential client feel confident enough to reach out. I designed a full five-screen Figma prototype: Home, Work, About, Pricing, and Contact. The whole identity is built around a stark black-and-white editorial system so the photography does the talking, with one arresting opener: a concentric oval logo and the line You are entering a new dimension.',
    brief: 'The client shoots stills, motion, and conceptual Alt Text work — experimental shoots that needed their own lane. The Work section needed clear category navigation: Stills, Motion, Nature, Skies, Videos, each with an arrow-link so a specific type of client can jump straight to relevant work. The Home screen had to land authority immediately. I used the spiral eye logo centered on a pure black background with a single START CTA — no clutter, just presence and a sense of entering something curated.',
    goal: 'Make this feel like a serious creative practice, not a side project. The nav had to be intuitive but architectural — I went with a vertical-column hamburger menu where each section (HOME, WORK, ABOUT, PRICING, CONTACT) gets its own colour-coded gradient strip. Bold, organized, and memorable. The Pricing section had to remove all ambiguity: three dashed-border cards for Photography, Videography, and Alt Text, each with bullet-point service tiers and a clean book-now CTA at the bottom.',
    problem: 'The client was losing potential bookings because nobody could figure out what they offered or what it would cost. The existing work presentation mixed everything together — landscape photography next to portrait sessions next to motion work — which diluted every category. I also noticed the About section was nonexistent, which meant there was no place for the personality behind the lens to come through. Potential clients were hitting a blank wall after the home screen.',
    process: 'I prototyped all five screens in Figma with full interactivity. The Work section shows preview images right on the page — a Sarojini Market street shot, a close-up of someone writing in a notebook, a twilight river landscape — so the quality is immediately visible without any clicking. The About screen uses a checkerboard texture as a mid-column visual element alongside social platform links (Instagram, LinkedIn, Spotify, YouTube) and a prominent RESUME CTA. Contact closes with a review section: Enjoying the Journey? and a textarea for client testimonials.',
    outcome: 'The prototype gives the client something shareable with potential bookings before the live site even exists. The visual identity — black background, heavy white sans-serif type, colour-burst gradient nav — is distinctive enough to stand out in an Instagram DM or a PDF send. The Pricing section is a genuine business unlock: three clean tier cards with CTAs, ready to fill with real rates. The Work page previews actual photography directly, so the value is self-evident on first scroll.',
    challenges: 'Making the Pricing page feel premium rather than transactional was the hardest design call. Dashed-border cards can easily look cheap. I used consistent internal padding, heavy uppercase type for the tier titles, and a solid white CTA button at the bottom of each card to give them weight. The About screen also needed to feel personal without being casual — the checkerboard texture handles the visual energy while the copy grid stays clean and professional.',
    tradeoffs: 'I kept everything black and white deliberately. The client shoots colourful, expressive work — introducing colour into the UI would compete with the photography. The monochrome palette ensures the images are always the most visually alive thing on screen. I also chose a single-page scrolling architecture over nested navigation because most of the target audience would discover this on mobile and needed an experience with no friction.',
    learnings: 'Client work is a different discipline to personal projects. You are solving someone else real business problem, which means every design decision needs a plain-English justification. I got much better at explaining why choices make strategic sense — why pricing transparency builds trust, why the colour-coded nav makes orientation intuitive, why the hero copy sets the right tone. That clarity of rationale is something I carry into every project now.',
    images: [
      '/assets/client-portfolio/DARK HOME.png',
      '/assets/client-portfolio/ABOUT.png',
      '/assets/client-portfolio/WORK.png',
      '/assets/client-portfolio/PRICING.png',
      '/assets/client-portfolio/work motion.png',
      '/assets/client-portfolio/work still.png',
      '/assets/client-portfolio/CONTACT.png',
      '/assets/client-portfolio/Slide 16_9 - 15.png'
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
    figmaEmbed: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" src="https://embed.figma.com/proto/mK3RFKq5p6rB6BxhIgxD93/client-work--AYUSH?node-id=5-2&p=f&viewport=121%2C258%2C0.1&scaling=contain&content-scaling=fixed&starting-point-node-id=5%3A2&show-proto-sidebar=1&page-id=0%3A1&embed-host=share" allowfullscreen></iframe>`,
    sections: [
      {
        title: 'Home & Navigation',
        body: 'The home screen opens on pure black with the concentric oval logo centered and the line "You are entering a new dimension" beneath it. A single START CTA. No hero image, no clutter — just presence. The hamburger nav is a vertical column system where each section gets its own colour-coded gradient strip: hot pink for Work, electric blue for About, and so on.',
        images: ['/assets/client-portfolio/DARK HOME.png'],
        layout: 'full'
      },
      {
        title: 'About & Identity',
        body: 'The About screen uses a checkerboard texture as a mid-column visual element — a bold geometric choice that adds visual energy without introducing colour. Social links (Instagram, LinkedIn, Spotify, YouTube) sit to the right as large uppercase text links. A RESUME CTA anchors the bottom. The page communicates personality without being casual.',
        images: ['/assets/client-portfolio/ABOUT.png'],
        layout: 'full'
      },
      {
        title: 'Work Gallery',
        body: 'The Work section splits into Motion and Still — two distinct modes for two different client types. The grid shows actual photographs directly on the page: a Sarojini Market street shot, a notebook close-up, a twilight river landscape. Quality is self-evident before any clicking. Arrow-links route to each subcategory.',
        images: ['/assets/client-portfolio/WORK.png', '/assets/client-portfolio/work motion.png', '/assets/client-portfolio/work still.png'],
        layout: 'grid-3'
      },
      {
        title: 'Pricing & Contact',
        body: 'The Pricing page is three dashed-border cards — Photography, Videography, Alt Text — each with service bullet points and a solid white book-now CTA. Transparent, clear, zero ambiguity. The Contact screen closes with "Enjoying the Journey?" and a client review textarea, turning the end of the visit into a relationship-building moment.',
        images: ['/assets/client-portfolio/PRICING.png', '/assets/client-portfolio/CONTACT.png'],
        layout: 'grid-2'
      }
    ]
  },
  {
    id: 'sneakin',
    title: 'Sneakin',
    category: 'UI Design',
    year: '2023',
    thumbnail: '/assets/sneakin/Slide 16_9 - 4.png',
    shortDescription: 'Premium sneaker dropshipping platform focused on hype culture and seamless retail architecture.',
    context: 'Sneakin started with a simple question: what if buying a pair of Jordan 1s felt as premium as the shoe itself? The secondary sneaker market is fragmented — shady sellers, blurry photos, zero authentication. So I built SNEAK.IN, a dropshipping platform designed to bring structure to hype retail. The hero screen says it all: giant stacked SNEAKERS typography slammed over a crisp Nike Air Force 1 shot, with the tagline KEEP SNEAKIN. Aggressive, confident, and immediately clear about who this is for.',
    brief: 'The brief covered a full five-section e-commerce ecosystem built in Figma: SneakZone (the marketplace), SneakOn (drops feed), SneakAid (care helpline), SneakaDrama (community hub), and ZoneIn (editorial). Each section has its own character but shares the same bold black-and-white palette with red accents punching through at key moments. I designed everything mobile-first, since that is genuinely how people shop drops — standing in a queue, phone in hand.',
    goal: 'The goal was to make SNEAK.IN feel legitimate, not just exciting. I built out a full filter system in lo-fi wireframes — Brand, Release, Colourway, Lot type selectors — all structured so a user can narrow a specific drop in seconds. The wireframes also mapped the Discord community gate for SneakaDrama and the SALE LIVE overlay indicator. Structure first, aesthetics second. Trust is the product.',
    problem: 'The sneaker resale market has a real trust problem. StockX solves authenticity but feels transactional and cold. GOAT has verification but the UX feels dated. There was room for something culturally alive — a platform that understood the community while still having the bones of a proper retail environment. SneakAid filled another gap nobody addressed: a helpline covering overall cleaning, crease removal, and sizing queries, presented with editorial-grade photography.',
    process: 'I started with lo-fi wireframes across all six screens simultaneously, forcing me to think about information architecture before getting drawn into aesthetics. The grids show the hamburger nav structure (SneakZone, SneakOn, SneakAid, SneakaDrama, ZoneIn), the filter sidebar, the community Discord gate, and the SALE LIVE indicator. Once structure felt solid, I moved to high-fidelity — the glitched SNEAKAID hero type, the three-column editorial care grid, and the full marketplace with its brand and colourway filters.',
    outcome: 'The final prototype covers the complete user journey. The landing page grabs you with that stacked SNEAKERS hero displayed on a 3D MacBook mockup. SneakAid reads like editorial content — crisp shoe photography, three care categories (Overall Cleaning, Crease Removal, Queries About Sizes), clean CTAs. The closing spread is a full-bleed THANKS FOR VIEWING with the SNEAKAID logotype rotated vertically on both sides. It feels like a design publication, not a school project. Samarth and I built this together.',
    challenges: 'Balancing street energy with retail professionalism is genuinely hard. Lean too far into hype aesthetics and it stops feeling like somewhere you would enter your card details. The filter system took multiple rounds — a lot of data packed into a mobile sidebar without losing readability. The SALE LIVE overlay needed to feel urgent without triggering anxiety, which required tight control over the animation timing and the visual weight of the indicator.',
    tradeoffs: 'Mobile-first and strict black-and-white were the two foundational calls. Mobile-first because that is how people shop drops. Black-and-white because colour would compete with the red accent system the visual tension is built around — the red hits much harder when everything else is greyscale. I also chose breadth over depth in the prototype — six well-designed sections beats two over-engineered ones.',
    learnings: 'This project taught me how much cultural research matters in product design. You cannot design for hype culture without understanding why people queue outside Supreme. I spent time on Reddit threads and Discord servers reading how collectors talk about pickups. That vocabulary fed directly into the copy — SneakaDrama, KEEP SNEAKIN, the care helpline framing. The product speaks the language of its community. That is not something you can fake.',
    images: [
      '/assets/sneakin/Slide 16_9 - 1.png',
      '/assets/sneakin/Slide 16_9 - 2.png',
      '/assets/sneakin/Slide 16_9 - 3.png',
      '/assets/sneakin/Slide 16_9 - 4.png',
      '/assets/sneakin/Slide 16_9 - 5.png',
      '/assets/sneakin/Slide 16_9 - 6.png',
      '/assets/sneakin/Slide 16_9 - 8.png',
      '/assets/sneakin/Slide 16_9 - 9.png',
      '/assets/sneakin/Slide 16_9 - 10.png'
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
    ],
    sections: [
      {
        title: 'Brand Identity & Hero',
        body: 'The SNEAK.IN hero is built around a 3D MacBook mockup with the landing page displayed at full scale. Stacked SNEAKERS typography bleeds off the edge of the screen — it is the first thing you see and it tells you exactly what this platform is about. The brand vocabulary is black, white, and red: aggressive, clean, and instantly recognizable.',
        images: ['/assets/sneakin/Slide 16_9 - 1.png', '/assets/sneakin/Slide 16_9 - 2.png'],
        layout: 'grid-2'
      },
      {
        title: 'Wireframes & Information Architecture',
        body: 'Before any high-fidelity work, I mapped the complete information architecture in lo-fi wireframes. The hamburger nav shows all five sections laid out — SneakZone, SneakOn, SneakAid, SneakaDrama, ZoneIn — along with the filter sidebar, Discord community gate, and the SALE LIVE overlay indicator. Structure first.',
        images: ['/assets/sneakin/Slide 16_9 - 3.png', '/assets/sneakin/Slide 16_9 - 4.png'],
        layout: 'grid-2'
      },
      {
        title: 'Marketplace & Discovery',
        body: 'The SneakZone marketplace gives buyers real filtering power: Brand, Release, Colourway, and Lot type selectors built into a clean mobile sidebar. The product grid shows live stock status at a glance. High-contrast photography of Jordan 1s and Air Force 1s does the selling.',
        images: ['/assets/sneakin/Slide 16_9 - 5.png', '/assets/sneakin/Slide 16_9 - 6.png'],
        layout: 'grid-2'
      },
      {
        title: 'SneakAid & Editorial',
        body: "SneakAid is the platform's care helpline — Overall Cleaning, Crease Removal, and Size Queries presented with editorial photography and clean CTAs. It fills a gap no competitor addresses: making sneaker care feel approachable and legitimate. The wide-format hero image uses the WIDE VARIETY OF SNEAKERS. copyline slammed over a Jordan 1 macro shot.",
        images: ['/assets/sneakin/Slide 16_9 - 8.png', '/assets/sneakin/Slide 16_9 - 9.png', '/assets/sneakin/Slide 16_9 - 10.png'],
        layout: 'grid-3'
      }
    ]
  },
  {
    id: 'creo',
    title: 'CREO',
    category: 'Branding',
    year: '2023',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/original/0e92c6162449841.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    shortDescription: 'Founding brand identity and design language for CREO Design Agency.',
    context: 'CREO is the design studio Aditya Dey and Samarth Saluja co-founded — two people, one shared conviction that most design agencies are faceless. We wanted to build a studio where the founders are the brand. The name stands for Curating Revolutionary Experiences, and the identity has to carry that weight. The logo is a bold 2x2 geometric block with a thick 3D offset drop shadow — it looks like it could be a physical object sitting on a desk. Purple (#B66CFF), Yellow (#FFE973), and Mint Green make up the palette: high energy, completely unapologetic.',
    brief: 'We needed a complete brand system that could handle everything from business cards to outdoor billboards, and a digital presence that doubled as a portfolio. The system had to be flexible enough to showcase 3D work, UI design, and branding simultaneously without feeling like it was trying to do too much. Key deliverables: the core logo and type system, a tri-fold brochure mockup, business card treatments with the repeating logo pattern, and a digital UI that used the brand vocabulary consistently throughout.',
    goal: 'The primary goal was establishing authority — making CREO look like it had been operating at the highest level from day one, not like two students who just graduated. The geometric logo with its heavy 3D shadow communicates structural weight. Brans-DemiBold as the primary typeface gives everything a premium industrial feel. The purple-yellow-mint combination was chosen specifically because it is bold enough to own without being garish — every colour has a defined role in the visual hierarchy.',
    problem: 'The design agency market is saturated with safe, generic brands — grey gradients, thin serifs, vague taglines about creativity. There was a real gap for a studio that was visually loud and technically rigorous at the same time. Most studios that do striking branding cannot back it up with engineering depth. Most studios that have the technical depth have forgettable identities. We wanted both. The brand had to immediately communicate that CREO does not do safe work.',
    process: 'We built a modular grid-based portfolio system that could slot in work from any vertical — 3D renders, UI screens, brand mockups — without the layout falling apart. The business cards use a repeating CREO logo pattern on the reverse: dense, tactile, and immediately recognizable. The tri-fold brochure mockup translates the digital system into print, using the purple-yellow palette to divide sections. Every 3D element was rendered in Blender and composited with the flat design assets to create a mixed-reality aesthetic.',
    outcome: 'The CREO brand is now the foundation of an active design practice. The identity works at every scale — from a small business card pattern to a large-scale billboard. Clients know immediately what kind of studio they are dealing with when they see the logo: structured, technical, and creatively ambitious. The Behance project documents the full system, and the case study itself acts as a proof-of-concept for the kind of work CREO delivers for its own clients.',
    challenges: 'The biggest challenge was keeping the brand consistent across two designers with different working styles. We had to build an internal design system — specific colour codes, specific Blender material settings for the 3D shadows, specific grid proportions — so that every output felt like it came from the same hand. The purple-yellow-mint palette was also tricky to balance: any of the three colours can dominate a composition in the wrong proportions, so we had to define strict usage rules early.',
    tradeoffs: 'We chose opinionated branding over universal appeal. CREO is not a studio for clients who want safe beige corporate design — and the brand makes that clear immediately. We focused strictly on 3D visualization and branding as our public verticals, even though we do UI work, because depth of craft in fewer areas reads as more credible than claiming competence in everything. The personality of the founders is baked into the brand, which is a risk but also our biggest differentiator.',
    learnings: 'Building your own brand is both the hardest and the most useful design project you can do. There is no brief, no client guardrails, and nowhere to hide — every choice reflects directly on your judgment. I learned that the most powerful brand asset is a clear point of view: knowing what you stand for and what you refuse to do. Working with Samarth also reinforced how important it is to have a collaborator who challenges your assumptions rather than just agreeing with them.',
    images: [
      'https://mir-s3-cdn-cf.behance.net/projects/original/0e92c6162449841.Y3JvcCwxNjE2LDEyNjQsMCww.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0e92c6162449841.63d6b384666f2.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/711202162449841.63d6b3846759c.png'
    ],
    tags: ['Branding', '3D Design', 'Agency Strategy'],
    technologies: ['Adobe XD', 'Blender', 'Photoshop'],
    client: 'Self-Founded',
    role: 'Co-Founder & Lead Designer',
    roleDetail: 'Co-founded the agency and lead the creative direction for branding and 3D visualization projects.',
    metrics: ['Brand Distinctiveness', '3D Innovation'],
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/162449841?ilo0=1" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>',
    sections: [
      {
        title: 'Logo & 3D Mark',
        body: 'The CREO logo is a 2x2 geometric block with a thick offset drop shadow rendered in Blender — it looks like a physical object sitting on a surface, not a flat vector. That three-dimensionality is the founding statement: this is a studio that understands form as well as graphic design. The Brans-DemiBold typeface carries the same weight. Every letterform is heavy, structured, and impossible to mistake for a generic agency.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/projects/original/0e92c6162449841.Y3JvcCwxNjE2LDEyNjQsMCww.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0e92c6162449841.63d6b384666f2.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Brand System & Palette',
        body: 'Purple (#B66CFF), Yellow (#FFE973), and Mint Green are not chosen at random — each colour has a defined role. Purple leads on primary brand surfaces. Yellow is the accent that signals energy and creativity. Mint anchors supporting elements. The palette is loud enough to own a space but internally logical enough to stay cohesive across wildly different applications.',
        images: ['https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/711202162449841.63d6b3846759c.png'],
        layout: 'full'
      }
    ]
  },
  {
    id: 'exousia',
    title: 'Exousia',
    category: 'Interaction',
    year: '2023',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/original/f36c99151193447.Y3JvcCwxODQxLDE0NDAsNDEsMA.png',
    shortDescription: 'Piezoelectric energy-generating floor tiles for sustainable infrastructure.',
    context: 'Exousia tackles a genuinely overlooked problem: every time someone walks through a busy train station or a stadium, the kinetic energy from their footsteps just disappears into the floor. Piezoelectric materials convert mechanical pressure into electrical charge — they have been used in lighters and sensors for decades — but nobody had designed a compelling consumer-facing product around the concept. Exousia is that product: floor tiles that harvest human footsteps and convert them into usable electricity, packaged with an industrial brand identity and a mobile dashboard that makes the energy output visible in real-time.',
    brief: 'The brief required two parallel tracks: engineering a working hardware prototype and designing a complete brand system. On the hardware side: PZT (Lead Zirconate Titanate) sensors wired to Arduino micro-controllers, driving a localized lighting loop that turns each footstep into a visible light event. On the brand side: a circular emblem logo, the Brans-DemiBold industrial typeface, a dark-themed mobile dashboard tracking Total Power Generated in kWh, and a full marketing campaign including billboard mockups under the headline POWER YOUR HOME.',
    goal: 'The primary goal was making complex physics feel personal and achievable. Most green energy solutions operate at an infrastructure scale that feels disconnected from the individual — solar farms, wind turbines, grid management. Exousia brings the scale down: one floor tile, one footstep, one visible light event. The brand identity had to carry that message immediately. The human-lightning bolt hybrid logo communicates it in a single glance: human movement is energy.',
    problem: 'Modern infrastructure wastes enormous amounts of kinetic energy. Train stations, airports, shopping malls — high footfall environments where millions of steps generate measurable mechanical energy that is currently just absorbed and lost. The broader green energy market also has a visibility problem: people do not see the energy they generate or consume, so they do not engage with it emotionally. Exousia creates a feedback loop that makes the invisible visible — footstep to light, instantly.',
    process: 'The engineering process involved iterating on the PZT sensor-to-Arduino circuit to maximise the electrical output per footstep while keeping the tile structure durable enough for high-traffic use. The design process ran in parallel: high-contrast mobile UI with lime green indicators for power storage and generation metrics, technical product diagrams showing the tile cross-section and sensor placement, and the POWER YOUR HOME marketing campaign across multiple billboard formats. The physical chassis design in Fusion360 had to balance structural durability with the architectural aesthetic required for modern commercial spaces.',
    outcome: 'A working functional prototype demonstrating the piezoelectric harvesting loop — footstep in, light event out, kWh metric updated on the mobile dashboard. A complete industrial brand system covering the logo, typeface system, mobile UI, product diagrams, and large-scale marketing materials. The case study documents both tracks in parallel, which is intentional: the engineering credibility validates the design ambition, and the design quality elevates what could have been a dry research project into something that actually communicates to non-engineers.',
    challenges: 'Translating the physics of Lead Zirconate Titanate into a brand identity that does not read like a dry research paper was the central creative challenge. The logo had to communicate human energy harvest instantly, which is why the human-lightning bolt hybrid works — it is symbolic rather than literal, but the symbolism lands immediately. The physical chassis design was also genuinely hard: the tile needed to withstand repeated high-impact loading while maintaining a surface finish that looked intentional in a premium architectural context.',
    tradeoffs: 'I chose emotional connection over total scientific precision in the brand mark. The logo is more about the idea of human-powered energy than an accurate representation of piezoelectric mechanics. I focused the mobile UI entirely on the kWh Generated metric, sacrificing more granular technical data to keep the user experience motivating rather than overwhelming. The Impact Story is the one worth telling — the sensor data is for the engineers, not the end user.',
    learnings: 'Exousia taught me that design is the bridge that makes complex technology usable and worth caring about. The engineering was impressive but invisible until the brand and the UI gave it a language. I also learned that hardware and software design require fundamentally different thinking: hardware decisions are permanent in a way that software decisions are not, which changes your tolerance for uncertainty at every stage of the process. The intersection of C++ and UI design is a space I want to keep exploring.',
    images: [
      'https://mir-s3-cdn-cf.behance.net/projects/original/f36c99151193447.Y3JvcCwxODQxLDE0NDAsNDEsMA.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/65c87a151193447.6309886470f1a.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/268574151193447.6309886472479.png'
    ],
    tags: ['Arduino', 'IoT', 'Physical Computing'],
    technologies: ['C++', 'Fusion360', 'Piezoelectric Sensors'],
    client: 'Educational Innovation',
    role: 'Product Designer & Engineer',
    roleDetail: 'Designed the physical chassis and engineered the sensor-to-light feedback loop.',
    metrics: ['Kinetic Energy Harvest', 'Localized Feedback System'],
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/151193447?ilo0=1" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>',
    sections: [
      {
        title: 'Brand Identity & Logo',
        body: 'The Exousia logo is a human-lightning bolt hybrid — a silhouette mid-stride with an energy bolt replacing the spine. It communicates the core concept in a single mark without any supporting text. The circular emblem frames it with industrial precision. Brans-DemiBold carries the wordmark at the same weight as the mark itself, so neither dominates.',
        images: ['https://mir-s3-cdn-cf.behance.net/projects/original/f36c99151193447.Y3JvcCwxODQxLDE0NDAsNDEsMA.png'],
        layout: 'full'
      },
      {
        title: 'Mobile Dashboard & Hardware',
        body: 'The mobile UI tracks Total Power Generated in kWh with lime green indicators on a dark background — energy data that feels alive rather than clinical. The hardware prototype shows the PZT sensor layout and the Arduino circuit that drives the footstep-to-light feedback loop. Both tracks are documented in parallel because the engineering credibility is what makes the design ambition believable.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/65c87a151193447.6309886470f1a.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/268574151193447.6309886472479.png'
        ],
        layout: 'grid-2'
      }
    ]
  },
  {
    id: 'horizon-zoom',
    title: 'Horizon Zoom',
    category: 'Branding',
    year: '2023',
    thumbnail: '/assets/horizon-zoom/Slide 16_9 - 1.jpg',
    shortDescription: 'Brand identity and business case study for a retro-inspired 32-bit arcade racing game.',
    context: 'Horizon Zoom is a full brand and business pitch for a 32-bit arcade bike-racing game — think Asphalt meets classic Nintendo, built for a modern community-first audience. The deck opens with a sleek 3D render of the HORIZON ZOOM wordmark embossed on a pill-shaped badge sitting on a glossy red platform. Minimal, confident, instantly recognizable. The whole project started from one idea: inculcating retro spirit into something modern, targeting the 10-25 age group who grew up on Asphalt but are bored of its monotony.',
    brief: 'Two things needed to happen simultaneously: design the brand identity and write a credible business case. The brand side covered the game HUD design, select-screen UI, logo system, and marketing posters. The business side covered target audience research, competitor analysis (Asphalt/Gameloft, Nintendo Turbo Racer), revenue streams, subscription tiers, retention mechanics, and a charitable incentive model. This was not just a visual brief — it had to be defensible as an actual product pitch.',
    goal: 'The brand palette is Racing Red and white, with a pixelated Futura-style typeface carrying the 32-bit energy throughout. Horizon Zoom differentiates itself through multiple game modes (Police Chase, Free Drive, Route 66, Desert Storm), deep bike customisation from clothes to decals, and a community feature — group formation, friend chat, voice activity — that neither Asphalt nor Turbo Racer does well. The goal was to make nostalgia feel like a deliberate design decision rather than a technical limitation.',
    problem: 'Asphalt crashes. Turbo Racer has been losing its fanbase because it is monotonous. There is a real gap for a bike-racing game that feels fast and communal without the technical frustrations of older titles. Most gaming brands also completely skip the business model — they design beautiful games with no plan for retaining users past month one. Horizon Zoom addresses both: a visual identity strong enough to acquire users, and retention mechanics strong enough to keep them.',
    process: 'The pitch deck runs eight slides. Target Audience and Competition come first, grounded in data rather than vibes. Then the Business Model breaks down five revenue streams: ads, in-game currency (coins and diamonds purchasable in bags and crates at $2.99-$5.99), in-game merch, physical Horizon Zoom merchandise (new drops every three months), and four subscription tiers — Free Plan, Gamer Plan ($7.99), Streamer Plan ($12.99), and Racer Pass ($3.99 for weekly XP and bounty challenges).',
    outcome: 'The Incentive Model slide is the standout — 15% of profits earmarked for road accident victims and injured racing competitors, 85% distributed equally among team members, excess earnings fed back as free-play bonuses to the community. It turns a game into a values statement. The Competition slide positions Horizon Zoom directly against Asphalt and Turbo Racer with a specific argument: 32-bit sprites done right actually reduce crash rates, and community features are the real competitive moat.',
    challenges: 'Making pixelated graphics look intentionally premium rather than technically limited was the core design challenge. The solution was contrast — pairing lo-res pixel elements with high-quality 3D renders and the clean Futura type system. The business model was also genuinely hard to write. Getting the subscription pricing right so it feels fair to players while being sustainable for a hypothetical studio required many rounds of iteration on the revenue mix.',
    tradeoffs: 'I leaned into the retro aesthetic as a feature, not a compromise — the HUD uses pixelated counters and minimaps which some would call dated, but within this brand it reads as character. I also kept the subscription economy broad (four tiers plus cosmetic currency) which is a lot for a pitch, but I wanted to demonstrate that we had thought through the full player economy rather than just the launch price point.',
    learnings: 'Horizon Zoom taught me that a design pitch without a business case behind it is just decoration. The slides that land hardest are not the brand ones — they are the competition analysis and the incentive model. Understanding your market and being honest about why someone should care is the real design work. I also learned a lot about gaming industry mechanics: retention loops, streamer monetisation, and the psychology of in-game currency. That knowledge has been useful in every product project since.',
    images: [
      '/assets/horizon-zoom/Frame 1.jpg', 
      '/assets/horizon-zoom/Slide 16_9 - 1.jpg', 
      '/assets/horizon-zoom/Slide 16_9 - 8.jpg',
      '/assets/horizon-zoom/Slide 16_9 - 4.jpg', 
      '/assets/horizon-zoom/Slide 16_9 - 5.jpg',
      '/assets/horizon-zoom/Slide 16_9 - 6.jpg', 
      '/assets/horizon-zoom/Slide 16_9 - 12.jpg'
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
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/156706847?ilo0=1" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>',
    sections: [
      {
        title: 'Brand Mark & 3D Hero',
        body: 'The HORIZON ZOOM wordmark is embossed on a pill-shaped badge rendered in 3D — glossy red platform, clean white letterforms, Chrome finish on the badge edge. It is the first visual in the pitch and it sets the register: this is not a student game concept, it is a product pitch. The Racing Red and white palette runs through every subsequent screen without exception.',
        images: ['/assets/horizon-zoom/Frame 1.jpg', '/assets/horizon-zoom/Slide 16_9 - 1.jpg'],
        layout: 'grid-2'
      },
      {
        title: 'Game HUD & UI Screens',
        body: 'The game HUD uses pixelated counters and a minimap — 32-bit aesthetic by design, not limitation. The select screen shows the bike customisation depth: clothes, decals, colourways. High-contrast white type on red backgrounds makes every screen readable at a glance, even in a low-light gaming environment.',
        images: ['/assets/horizon-zoom/Slide 16_9 - 8.jpg', '/assets/horizon-zoom/Slide 16_9 - 4.jpg'],
        layout: 'grid-2'
      },
      {
        title: 'Business Model & Incentive',
        body: 'Five revenue streams: ads, in-game currency, digital merch, physical drops, and four subscription tiers from Free Plan to Racer Pass ($7.99-$12.99). The Incentive Model earmarks 15% of profits for road accident victims and injured racing competitors — turning a game into a values statement. This is the slide that makes the pitch real.',
        images: ['/assets/horizon-zoom/Slide 16_9 - 5.jpg', '/assets/horizon-zoom/Slide 16_9 - 6.jpg', '/assets/horizon-zoom/Slide 16_9 - 12.jpg'],
        layout: 'grid-3'
      }
    ]
  },
  {
    id: 'sidemen-app',
    title: 'Sidemen App',
    category: 'UI Design',
    year: '2022',
    thumbnail: '/assets/sidemen/chunk_0.jpg',
    shortDescription: 'A centralized all-in-one app concept gathering Sidemen content, merch, and community.',
    context: 'The Sidemen are one of the biggest creator groups in the world — and their business empire is genuinely sprawling. YouTube channels, Sides (a food delivery brand), XIX Vodka, Sidemen Clothing, and charity work. Every single one of those lives on a different platform, which means a fan has to navigate five different apps just to engage with everything they care about. This concept is a Super-App that brings it all under one roof, designed with the same dark industrial energy that the Sidemen brand carries across their content.',
    brief: 'The brief I set myself was to design a comprehensive mobile platform that unifies all Sidemen verticals into one cohesive experience. I mapped the full information architecture first — a detailed user flow diagram showing every path through the app, from onboarding to unified checkout. The UI needed to feel premium and dark-themed, using high-contrast custom sans-serif type. Dedicated sections for Sides food ordering, XIX merch, Sidemen Clothing drops, and video content all had to coexist without the app feeling bloated.',
    goal: 'A single front door for the Everything Sidemen universe. The goal was a modular UI that could handle wildly different content types — video playback, food ordering, spirit purchases, clothing drops — without any section feeling like it was bolted on as an afterthought. The dark mode was non-negotiable: it is the visual register the brand lives in across YouTube thumbnails, merch photography, and social content. The app had to feel like an extension of that world.',
    problem: 'Fragmented ecosystems leak revenue and reduce fan engagement. If you have to open a separate app to order Sides, another to shop XIX, and another to watch content, the friction compounds quickly. The Sidemen audience is also younger and highly mobile — they want everything fast, in one place, with no login friction between sections. There was a clear business case for consolidation, and the design case was even clearer: one strong identity beats five weak ones.',
    process: 'I started with the user flow diagram — every node, every decision point, every path through the app mapped before a single pixel of UI was drawn. Then I built the high-fidelity screens in Figma, using iPhone 14 Pro mockups throughout to keep the proportions honest. The dark-themed UI uses modular card designs for each content vertical, with the Sidemen primary typography establishing hierarchy. The marketing materials included a Piccadilly Circus billboard mockup — which was a deliberate choice to show how the app would be positioned in the physical world as a launch campaign.',
    outcome: 'Four high-fidelity screens covering the core experience: the home feed, the content hub, the commerce section with Sides and XIX, and the community layer. The Everything Sidemen identity translates cleanly across all of them — the brand does not fracture when you move between ordering food and watching a video. The Piccadilly Circus mockup demonstrates that the visual identity holds at scale, which is the kind of thinking that makes a concept pitch feel real rather than academic.',
    challenges: 'Fitting content, commerce, and community into a single app without it becoming overwhelming is genuinely hard. The modular card system was the solution — each vertical has its own card template that inherits the global dark theme but has enough differentiation to signal a mode change. Balancing the Sides, XIX, and Sidemen Clothing sub-brands with the main Sidemen identity required strict rules about when each brand voice appears and when it recedes.',
    tradeoffs: 'I designed this as a dark mode-only experience. That is a constraint that locks out some users but was the right call for this brand. The Sidemen visual language is built on dark backgrounds, high-contrast type, and vivid accent moments — a light mode would have felt like a completely different brand. I also chose utility and speed over visual experimentation — the UI is clean and fast because the content is the spectacle, not the chrome around it.',
    learnings: 'Creator brands operate more like product companies than traditional media brands — they need the infrastructure of a tech company behind them. This project taught me how to think about information architecture at scale: when you have five distinct business verticals, the IA is not just a UX consideration, it is a business strategy decision. Mapping the user flow diagram before touching the UI was the single most important step in the whole process.',
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
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/153505365?ilo0=1" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>',
    sections: [
      {
        title: 'Information Architecture',
        body: 'The user flow diagram came before any visual design — every node, every decision point, every path from onboarding to checkout mapped in full. Five distinct business verticals (Sides, XIX, Clothing, Video, Community) had to coexist in a single navigation structure without creating decision fatigue. The hamburger nav resolves this with a clear vertical hierarchy: each section gets its own slot, no nesting.',
        images: ['/assets/sidemen/chunk_0.jpg'],
        layout: 'full'
      },
      {
        title: 'Home Feed & Content Hub',
        body: 'The home feed surfaces video content, Sides orders, and merch drops in a unified stream — the modular card system means each content type reads correctly in context without custom layout logic. Dark background, high-contrast type, vivid accent moments. The brand does not fracture when you move between watching a video and ordering chicken.',
        images: ['/assets/sidemen/chunk_1.jpg', '/assets/sidemen/chunk_2.jpg'],
        layout: 'grid-2'
      },
      {
        title: 'Commerce & Billboard',
        body: 'The commerce section handles XIX Vodka, Sidemen Clothing, and Sides food ordering from a single checkout flow. Sub-brand identity is preserved — XIX has its own typographic voice, Clothing has its own grid — but the dark theme and primary Sidemen typography holds everything together. The Piccadilly Circus billboard mockup closes the case study: the identity holds at 20 metres wide.',
        images: ['/assets/sidemen/chunk_3.jpg'],
        layout: 'full'
      }
    ]
  }
];
