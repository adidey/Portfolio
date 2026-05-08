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
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1bff64173945869.64996929bbc71.png',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1bff64173945869.64996929bbc71.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/a1715b173945869.64996929bd635.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/b5f03e173945869.64996929b5f9d.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e01c6f173945869.64996929be668.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/935fe7173945869.64996929b44c7.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/6acf73173945869.64996929b1362.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d46760173945869.64996929b8533.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1de6f2173945869.64996929b94b2.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/606c37173945869.64996929b51be.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/6602ed173945869.64996929b2cb0.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/a57728173945869.64996929b6b08.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/65e06b173945869.64996929af603.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3156c6173945869.64996929b04c5.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/74b9cc173945869.64996929b38e6.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/2e0c74173945869.64996929baf3d.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/10cbf7173945869.64996929ae819.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/05ab92173945869.64996929bc91f.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/7c44d7173945869.64996929ada43.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1bf2ea173945869.64996929b209b.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e76c50173945869.64996929ba138.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1541d1173945869.64996929bf641.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4ec2cd173945869.64996929b7862.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/fd3c1d173945869.64996929acc54.png'
    ],
    tags: ['Interaction', 'Figma', 'UI Design', 'Mobile Architecture'],
    technologies: ['Figma', 'Photoshop', 'MySQL', 'UI Systems'],
    client: 'Self-Initiated',
    role: 'Interaction Designer',
    roleDetail: 'Designed the complete interaction model, information architecture, and high-fidelity mobile prototypes.',
    metrics: ['Increased Visibility of Local Talent', 'Frictionless Collaboration Workflows'],
    processImages: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d46760173945869.64996929b8533.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1de6f2173945869.64996929b94b2.png'
    ],
    outcomeImages: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/2e0c74173945869.64996929baf3d.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1541d1173945869.64996929bf641.png'
    ],
    figmaEmbed: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEl90BV6exDKrLEsWZbjzI7%2FSonora%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D6-1014%26viewport%3D964%252C180%252C0.12%26scaling%3Dscale-down%26starting-point-node-id%3D3%253A127%26mode%3Ddesign" allowfullscreen></iframe>',
    sections: [
      {
        title: 'Hero & Visual Identity',
        body: 'The sonora visual system is anchored by a deep obsidian background and a high-energy Electric Blue accent palette. The identity is designed to feel like high-end studio hardware — professional, tactile, and authoritative. "Let the wave form" is the primary brand promise, communicating that this is a space for serious craft.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1bff64173945869.64996929bbc71.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/a1715b173945869.64996929bd635.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/b5f03e173945869.64996929b5f9d.png'
        ],
        layout: 'grid-3'
      },
      {
        title: 'The Mobile Ecosystem',
        body: 'Sonora is a specialized social hub designed to bridge the gap between musicians. The mobile-first architecture prioritizes speed and discoverability. Key interactions are built around the Z-pattern scan path, ensuring that core features like search, profile, and collab requests are always within reach.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e01c6f173945869.64996929be668.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/935fe7173945869.64996929b44c7.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/6acf73173945869.64996929b1362.png'
        ],
        layout: 'grid-3'
      },
      {
        title: 'Music Detection & UI Motion',
        body: 'The music detection feature uses a radial waveform animation that pulses in real-time. This interaction was engineered to make the technology feel alive. The circular movement mimics the organic flow of sound waves, creating a tactile feedback loop that confirms the app is "listening" to the environment.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d46760173945869.64996929b8533.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1de6f2173945869.64996929b94b2.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/606c37173945869.64996929b51be.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/6602ed173945869.64996929b2cb0.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Artist Profile Architecture',
        body: 'The Artist Profile is the most data-rich screen in the ecosystem. It consolidates genre tags, mastery levels, gear lists, and collaboration history into a single, high-density card. This architecture respects the complexity of a musician\'s professional identity, providing more depth than a standard social media bio.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/a57728173945869.64996929b6b08.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/65e06b173945869.64996929af603.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3156c6173945869.64996929b04c5.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/74b9cc173945869.64996929b38e6.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Networking & Feed Discovery',
        body: 'The discovery feed is designed to surface local talent based on proximity and skill. The interface uses a clean, grid-based layout for festival updates and artist highlights, ensuring that the visual content — photography and poster art — remains the focus of the experience.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/2e0c74173945869.64996929baf3d.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/10cbf7173945869.64996929ae819.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/05ab92173945869.64996929bc91f.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/7c44d7173945869.64996929ada43.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Final Product & Integration',
        body: 'From onboarding to deep settings, the Sonora experience remains cohesive. The integration of Dynamic Island support and high-fidelity transitions makes the app feel natively woven into the iOS environment. Every screen is a testament to the specialized needs of the music community.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1bf2ea173945869.64996929b209b.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e76c50173945869.64996929ba138.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1541d1173945869.64996929bf641.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4ec2cd173945869.64996929b7862.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/fd3c1d173945869.64996929acc54.png'
        ],
        layout: 'grid-3'
      }
    ]
  },
  {
    id: 'aurorae',
    title: 'Aurorae',
    category: 'Branding',
    year: '2022',
    thumbnail: '/assets/aurorae.png',
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
      '/assets/aurorae.png',
      '/assets/aurorae/logo_mark_exploration.png',
      '/assets/aurorae/brand_concept.png'
    ],
    tags: ['Branding', 'Visual Identity', 'Graphic Design', 'Editorial'],
    technologies: ['Photoshop', 'Illustrator', 'Figma', 'Blender'],
    client: 'Identity Study',
    role: 'UI Designer & Brand Strategist',
    roleDetail: 'Architected the visual brand language and designed the core textural assets.',
    metrics: ['Brand Distinctiveness', 'Minimalist Precision', 'Textural Depth'],
    processImages: [
      '/assets/aurorae.png',
      '/assets/aurorae/logo_mark_exploration.png'
    ],
    outcomeImages: [
      '/assets/aurorae/brand_concept.png'
    ],
    figmaEmbed: '<iframe src="/assets/aurorae.png" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>',
    sections: [
      {
        title: 'Digital Interfaces & Mobile',
        body: 'The brand translates into a digital Art Space UI with no loss of physical weight. NFT grid screens, authentication flows, and collection browsing all inherit the monochromatic system. The grain reads correctly on-screen because the density was calculated for a 72dpi context rather than simply scaled down from print assets.',
        images: [
          '/assets/aurorae/logo_mark_exploration.png',
          '/assets/aurorae/brand_concept.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Brand Mark Exploration',
        body: 'The final mark came from analogue exploration — thick marker sketches on paper, testing the geometric A and pillar composition before touching Illustrator. Digitizing a hand-drawn form forces precision: every vector point is justified because every stroke was drawn with intention first. The sketch process is part of the case study because it proves the final mark was earned, not generated.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/7e8edb155839991.635be8ee3e7aa.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/a8a880155839991.635be8ee3cd76.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Logo System & Identity',
        body: 'The logomark is four vertical pillars centered around a circle — geometric, load-bearing, and readable at any scale. Every surface carries a 12% roughness grain overlay that was calibrated separately for screen and print output. The grain is not a Photoshop filter applied at the end; it is a structural element baked into the system from the start.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0ab619155839991.635be8ee411d9.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/99e32d155839991.635bf63ae2493.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Applied Identity & Print',
        body: 'The system holds from a 55mm business card to a four-metre billboard. Business cards use the debossed logomark on a heavy cotton stock — tactile, permanent, impossible to fake. The billboard placement shows how the architectural scale of the LOGO TYPE takes over at large format: at 4 metres wide, the type stops being text and becomes structure.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9b6767155839991.635bf63ae32bf.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9bf751155839991.636f3ca8730f0.jpg'
        ],
        layout: 'grid-2'
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
    thumbnail: '/assets/portfolio/portfolio_hero_section_1777819291389.png',
    shortDescription: 'A complete architectural rebuild of my digital identity — from an experimental v1 playground to a permanent, commercial-grade archive.',
    context: 'Let’s be honest: my first portfolio was a mess of "look what I can do" animations. It was a playground of fluid physics and experimental navigation that looked great for thirty seconds but made reading a case study feel like a chore. V2 is the correction. I stripped away the spectacle to build something that functions more like a permanent archival document. The goal was to create a container so rigid and minimal that the only thing carrying visual weight is the work itself. It’s not a demo anymore; it’s a high-performance archive built on React 19 and a custom pre-rendering engine.',
    brief: 'The brief I set for myself was simple but technically demanding: sub-second First Contentful Paint (FCP), zero layout shift, and a UI that communicates systems-thinking before a single word is read. I needed to resolve the visual tension of v1 by imposing a strict 12-column grid and a Z-pattern layout that works for both a recruiter’s five-second scan and a peer’s deep technical dive. The project also required a custom build pipeline to handle static serving without losing the snappiness of a modern SPA.',
    goal: 'Establish a "Digital Identity 2.0" that prioritizes utility and authority. I wanted to move away from the "creative technologist" trope and towards a "product engineer" reality. This meant replacing random animations with a "Stacking Effect" folder-style navigation that feels physically grounded. The ultimate goal was to prove that a monochromatic, grid-locked system can feel more premium and alive than a site covered in gradients and physics simulations.',
    problem: 'V1 was "AI slop" avant-la-lettre—cool to look at, empty to use. The experimental node-based navigation was a failure of UX; it forced users to learn a new language just to see my work. Furthermore, the reliance on heavy physics libraries made the mobile experience sluggish. The site lacked a "Single Source of Truth" for its layout, leading to inconsistencies across different breakpoints. It was an identity crisis in code form.',
    process: 'I started by defining a "Base Container Metric"—a single mathematical unit that dictates every margin, gutter, and typographic step. I then built a custom pre-rendering script using Puppeteer and @sparticuz/chromium to "bake" the React app into static HTML at build time. This gives me the speed of a static site with the interaction model of React. I also implemented a fluid typography system using CSS `clamp()` that scales between breakpoints without a single jump, ensuring the archival aesthetic holds from a phone to a 5K display.',
    outcome: 'A highly performant, accessible system that communicates at two speeds. The headline and layout land the brand in seconds, while the case studies reward hours of technical reading. Sub-second FCP, zero CLS, and a mathematically locked grid. The transition from v1 to v2 isn’t just a redesign—it’s the case study itself, proving I can identify the failure modes of my own work and rebuild with precision. It’s the fastest, cleanest version of my digital self.',
    challenges: 'The biggest challenge was "Responsive Rigidity." Maintaining a 12-column grid and aggressive typographic scale on mobile without it feeling like a generic stack required a lot of custom CSS logic. I also had to optimize high-res project imagery for that sub-second FCP target, which meant building an automated pipeline for format conversion and lazy-loading boundaries. Getting the "Stacking Effect" transitions to feel "weighted" without using a heavy physics engine took weeks of tuning Framer Motion easing curves.',
    tradeoffs: 'I traded playfulness for professional authority. The site is deliberately opinionated—there is one correct way to move through it. v1 was an open world; v2 is a curated editorial path. I also chose a strictly monochromatic palette for the shell. This was a risk, but it ensures that project imagery is the only source of color on the page, making every thumbnail a moment of visual impact rather than just another element in a busy UI.',
    learnings: 'Less is more only when the math is perfect. A rigid structural foundation builds trust more effectively than any animation ever could. This project reinforced that design and engineering are the same system expressed in different languages. I also learned that the most important decision in a rebuild isn’t what you add—it’s what you have the courage to remove. Moving to React 19 and Vite 6 also taught me that the "bleeding edge" is only useful if it serves the user’s performance.',
    images: [
      '/assets/portfolio/portfolio_current_homepage_1777819179444.png',
      '/assets/portfolio/portfolio_homepage_1777819105532.png',
      '/assets/portfolio/portfolio_hero_section_1777819291389.png',
      '/assets/portfolio-work.jpg',
      '/assets/portfolio-about.jpg'
    ],
    tags: ['UX Architecture', 'React 19', 'Custom SSG', 'Vite 6'],
    technologies: ['React 19', 'Vite 6', 'Puppeteer (SSG)', 'Tailwind v4', 'Framer Motion'],
    client: 'Personal Branding',
    role: 'Product Engineer',
    roleDetail: 'Designed the mathematical grid system and engineered the custom pre-rendering pipeline.',
    metrics: ['Sub-second FCP', 'Zero Layout Shift', 'Mathematically Derived Grid'],
    annotations: ['Z-Pattern Execution', 'Folder-Style Navigation', 'Custom SSG Build'],
    processImages: ['/assets/portfolio/portfolio_homepage_1777819105532.png'],
    outcomeImages: ['/assets/portfolio/portfolio_current_homepage_1777819179444.png'],
    sections: [
      {
        title: 'V1 vs V2: The Digital Identity Shift',
        body: 'Comparison of the digital identity evolution. On the left: the old V1 homepage—experimental, node-based, and visually cluttered. On the right: the current V2—brutalist, grid-locked, and content-first. The shift represents a move from "showing off" to "solving for clarity." V1 was a demo; V2 is a document.',
        images: [
          '/assets/portfolio/portfolio_homepage_1777819105532.png',
          '/assets/portfolio/portfolio_current_homepage_1777819179444.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Custom Pre-Rendering with Puppeteer',
        body: 'I didn’t want the overhead of Next.js, but I wanted the SEO and speed of static HTML. I built a custom `prerender.js` script that spins up a Chromium instance, navigates to every route, and scrapes the rendered content into a static file. This "local-first SSG" approach keeps the bundle light and the first paint instantaneous, regardless of the user’s connection.',
        images: ['/assets/portfolio/portfolio_hero_section_1777819291389.png'],
        layout: 'full'
      },
      {
        title: 'The Folder Navigation System',
        body: 'Navigation in V2 uses a "Stacking Effect" that mimics a physical folder system. When you move from Work to About, the previous page doesn’t just disappear—it slides and scales as if it’s being tucked away. This provides a spatial mental model for the site, making it feel like a unified physical object rather than a collection of disconnected URLs.',
        images: ['/assets/portfolio-work.jpg'],
        layout: 'full'
      },
      {
        title: 'Mathematical Grid Rigidity',
        body: 'Every pixel is on a grid. Every margin, gutter, and type step is derived from a base unit of 4px. This mathematical rigidity ensures that the site feels "heavy" and intentional. Even on mobile, the aggressive typographic hierarchy and container metrics maintain the archival aesthetic, preventing the layout from collapsing into a generic vertical stack.',
        images: ['/assets/portfolio-about.jpg'],
        layout: 'full'
      }
    ]
  },
  {
    id: 'spinpod',
    title: 'Spinpod',
    category: 'Web & Music',
    year: '2025',
    thumbnail: '/assets/spinpod/spinpod_next_track_1777820649171.png',
    shortDescription: 'A retro-industrial web music player built around personal, intentional listening.',
    context: 'Spinpod is a study in tactile digital interaction and personal musical agency. Streaming platforms have optimised so hard for discovery algorithms and recommendation engines that the simple act of choosing what you want to listen to has been buried. Spinpod inverts that entirely — it is a hardware-inspired web player that puts complete, deliberate control back in the listener\'s hands. There is no algorithm, no suggestions, no autoplay. Just you, your music, and a unit that feels like it belongs on a studio desk.',
    brief: 'The brief was to build a web music player (UNIT_REV_4.0) that prioritises feel over features. Key design requirements included physical-style Volume and Seek dials, a hardware-inspired boot sequence, and a suite of industrial signal indicators like "SIGNAL_OVERRIDE" and "PRGM_HOLD." The goal was to create a listening experience that feels like operating a solid piece of lab equipment — deliberate, personal, and completely in the user\'s control.',
    goal: 'My primary goal was to establish a sense of "Weight" and "Heft" in a purely digital interface. Every dial rotation and button press needed to feel physically grounded — not just animated. The objective was to move away from passive, algorithm-driven listening and towards an intentional, single-stream experience. The user decides what plays. The machine executes with authority.',
    problem: 'Streaming apps are engineered for infinite discovery at the expense of focused listening. Playlists autoplay, recommendations interrupt, and the interface constantly pulls attention away from the music itself. The flat, gesture-based touchscreen model also lacks the tactile satisfaction of real physical hardware. There was a clear gap for a dedicated web player with genuine personality — one that respects the listener\'s own choices rather than second-guessing them.',
    process: 'The process involved a deep dive into hardware UI patterns, analog signal design, and high-roughness material aesthetics. I used "UNIT_REV_4.0" as my architectural base, incorporating labels like "SIGNAL_OVERRIDE," "PRGM_HOLD," and "AUTO_SCAN" to ground the industrial character. I engineered a custom boot sequence in React 19 that simulates a hardware power-up with diagnostic signal feedback. The dial physics were the most time-intensive component — tuning Framer Motion easing curves until the rotational inertia felt genuinely heavy rather than just animated.',
    outcome: 'The result is a tactile, analog-inspired web player that creates a dedicated zone for intentional listening. The boot sequence transitions the user into a deliberate listening state. The industrial visual system — high-contrast monochromatic UI, signal indicators, weighted dials — communicates that this is a tool built for people who care about how their music sounds and how they choose it. No algorithm. No noise. Just control.',
    challenges: 'The core challenge was "The Weight Problem" — simulating the physical inertia of a heavy metal dial on a 2D screen. Complex easing functions and micro-animations had to sell both the click resistance and the drag. Refining the industrial material textures (grain, roughness) was equally demanding; they needed to read as premium on high-DPI Retina displays without becoming visual noise.',
    tradeoffs: 'I chose deliberate character over breadth of features. The player does not surface library browsing, lyrics, or autoplay queues. That\'s intentional. The tradeoff is a narrower feature set in exchange for a singular, coherent identity — a tool that knows exactly what it is and does it with conviction.',
    learnings: 'Spinpod reinforced that personality is one of the most underrated tools in product design. A digital tool with a specific, committed character is more memorable and more effective than a generic one. I also deepened my understanding of tactile interaction design — how micro-animation timing, easing curves, and visual weight work together to create the sensation of physical resistance in a purely software interface.',
    images: [
      '/assets/spinpod/spinpod_landing_1777820434463.png',
      '/assets/spinpod/spinpod_initial_load_1777820630246.png',
      '/assets/spinpod/spinpod_next_track_1777820649171.png',
      '/assets/spinpod/spinpod_knob_interaction_1777820786768.png',
      '/assets/spinpod/spinpod_paused_state_1777820721788.png',
      '/assets/spinpod/spinpod_signal_override_modal_1777820736707.png'
    ],
    tags: ['React 19', 'Industrial Design', 'Framer Motion'],
    technologies: ['React 19', 'Framer Motion', 'Vite', 'Tailwind CSS'],
    client: 'Self-Initiated',
    role: 'Interaction Designer',
    roleDetail: 'Designed the tactile UI system, dial physics, and industrial interaction language.',
    metrics: ['Personal Listening Agency', 'Tactile Dial Physics', 'Hardware Boot Sequence'],
    annotations: ['Industrial UI Design', 'Tactile Interaction', 'Framer Motion Physics'],
    processImages: ['/assets/spinpod/spinpod_knob_interaction_1777820786768.png'],
    outcomeImages: ['/assets/spinpod/spinpod_next_track_1777820649171.png'],
    sections: [
      {
        title: 'UNIT_REV_4.0 — The Interface',
        body: 'Spinpod reads like a piece of lab equipment dropped onto your desk. The landing state shows a minimal entry screen — no clutter, just the unit name and a single action. The hardware-inspired boot sequence is a real power-up ritual with diagnostic feedback, not a decorative splash screen. Every label (SIGNAL_OVERRIDE, PRGM_HOLD, AUTO_SCAN) is functional, not decoration.',
        images: [
          '/assets/spinpod/spinpod_landing_1777820434463.png',
          '/assets/spinpod/spinpod_initial_load_1777820630246.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Tactile Controls & Playback',
        body: 'Volume and Seek dials use Framer Motion physics tuned to feel heavy — the rotational inertia is deliberately exaggerated so the interaction feels like turning a metal knob, not dragging a slider. The next-track state and active playback view are designed around a single, committed audio stream. No library browsing. No infinite scroll. One track, full focus.',
        images: [
          '/assets/spinpod/spinpod_next_track_1777820649171.png',
          '/assets/spinpod/spinpod_knob_interaction_1777820786768.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Signal Override & System States',
        body: 'The SIGNAL_OVERRIDE modal and paused state are where the industrial character is most explicit. These system states use high-contrast monochromatic UI to communicate clearly: the machine is waiting for you. The paused state strips everything back to a single status indicator — an intentional design choice to reduce cognitive load during transitions.',
        images: [
          '/assets/spinpod/spinpod_paused_state_1777820721788.png',
          '/assets/spinpod/spinpod_signal_override_modal_1777820736707.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Source Input & Playlist Feed',
        body: 'The entry point is deliberately minimal — SPINPOD CORE_REV: 4.0.0 presents a single text input and a CONNECT_UNIT button. The user pastes a playlist link and boots the unit. No library browsing, no search, no recommendations. If you need to swap sources mid-session, the SIGNAL_OVERRIDE modal surfaces: paste a new SOURCE_PLAYLIST_URL and hit BOOT_FEED. The machine reloads the new source and continues. Every choice of what plays is made by the user, not inferred by an algorithm.',
        images: [
          '/assets/spinpod/spinpod_landing_1777819291389.png',
          '/assets/spinpod/spinpod_signal_override_modal_1777820736707.png'
        ],
        layout: 'grid-2'
      }
    ]
  },
  {
    id: 'resume-editor',
    title: 'Single Page Resume',
    category: 'Productivity',
    year: '2025',
    thumbnail: '/assets/resume-editor-main.png',
    shortDescription: 'A local-first, privacy-driven resume builder with a mathematical density scaling system.',
    context: 'I built Single Page Resume because I’m tired of tools that harvest your professional history just to give you a PDF. Most resume builders are data-traps disguised as utilities. This is a "local-first" product: your data never leaves your browser’s `localStorage`. No accounts, no database, no "sign up to download." It’s an editorial instrument designed for people who value privacy as much as they value clean typography. The split-panel interface provides a sub-millisecond feedback loop between granular controls and a pixel-perfect A4 preview.',
    brief: 'The brief was to engineer a document editor that functions with the precision of Adobe InDesign but the accessibility of a web app. Key requirements: three mathematically calibrated density modes (Comfy, Compact, Dense), six ATS-optimized font pairings, and mm-level margin controls. The tool had to solve the "overflow problem" not through truncation, but through intelligent reflow logic that helps users make their experience fit a single, high-impact page.',
    goal: 'Democratize high-end editorial typesetting for the job market. I wanted to build a tool where the user spends zero time "fighting the layout" and 100% of their time refining their narrative. By establishing a JSON-based "Single Source of Truth," I aimed to eliminate the layout shifts that plague Word or Google Docs, ensuring that the browser preview is a 1:1 match for the final PDF export.',
    problem: 'The resume market is a binary of bad choices: either rigid templates that break when you add a bullet point, or loose word processors that fail ATS parsing. Furthermore, the cloud-sync model used by modern tools is a massive privacy risk for something as sensitive as a resume. Job seekers are forced to hand over their data to companies that might sell it, just to get a basic document formatted.',
    process: 'I engineered the editor using a reactive state model where typography, spacing, and content are independent layers. The "Density System" was the most complex part—it uses a mathematical scaling factor (based on REMs) that shrinks line-height, padding, and font-size in unison. This allows a user to "contract" a 1.2-page draft into a perfect 1.0-page resume with a single toggle. I used PDF-Lib for the export engine, building a custom mapping layer to translate CSS coordinates into the PDF’s point-based coordinate system.',
    outcome: 'A production-grade utility at singlepageresume.vercel.app that has helped users generate thousands of documents without ever storing a single byte of their data. The tool offers a suite of "Guaranteed Quality" controls: from serif/sans font pairings to section-visibility toggles. It’s a testament to the fact that you don’t need a backend to build a high-utility product if you trust the power of the client side.',
    challenges: 'Achieving "Wysiwyg" parity between a browser (CSS) and a PDF (PDF-Lib) is an engineering nightmare. Browsers handle font metrics and leading differently than the PDF spec. I had to build a custom normalization layer to ensure that if a line of text fits in the preview, it fits in the export. Another challenge was the "Local-First" state management—handling large JSON blobs in `localStorage` while maintaining a 60fps editing experience on lower-end hardware.',
    tradeoffs: 'I traded "Infinite Choice" for "Guaranteed Success." The tool opinionatedly enforces a single-column layout because it’s the most reliable for both ATS systems and human readers. I also prioritized local storage over cloud sync. While this means the user is responsible for their own data (no "lost password" recovery), the tradeoff is total privacy and a significantly faster, more responsive interface.',
    learnings: 'Opinionated design is a superpower. By limiting the user’s choices to only "what works," you actually increase their creative speed. I also deepened my understanding of document engineering—the subtle relationship between kerning, leading, and structural integrity. This project taught me that "User Agency" and "Privacy" are the two most important features you can build into a tool, even if they don’t show up on a marketing checklist.',
    images: [
      '/assets/resume-editor-main.png',
      '/assets/resume/dense_layout.png',
      '/assets/resume/serif_typography.png',
      '/assets/resume/visibility_toggle.png',
      '/assets/resume/editing_mode.png'
    ],
    tags: ['Local-First', 'Next.js 15', 'PDF Engineering', 'Tailwind 4'],
    technologies: ['Next.js 15', 'Tailwind v4', 'PDF-Lib', 'TypeScript'],
    client: 'Self-Initiated',
    role: 'Product Engineer',
    roleDetail: 'Architected the density scaling system and the CSS-to-PDF mapping engine.',
    metrics: ['Zero-Data Harvesting', '100% Client-Side', 'ATS-Safe Output'],
    annotations: ['Deployed: singlepageresume.vercel.app', 'Local-First Build'],
    sections: [
      {
        title: 'Reactive Density Engine',
        body: 'The "Density System" (Comfy / Compact / Dense) isn’t just a simple font-size toggle; it’s a mathematical scaling engine. By adjusting the base REM unit of the preview container, every child element—from the line-height of a bullet point to the vertical padding between sections—recalibrates in unison. This allows a user to "contract" a document that slightly exceeds one page into a perfect A4 fit without breaking the professional typographic hierarchy.',
        images: ['/assets/resume/dense_layout.png'],
        layout: 'full'
      },
      {
        title: 'Precision Typesetting Controls',
        body: 'The editor provides a professional-grade typography panel, allowing users to switch between curated font pairings like "Modern Serif" and "Clean Sans." Beyond simple font choice, I implemented granular sliders for line spacing, letter spacing, and margin control. This level of precision ensures that job seekers can fine-tune their document’s "grey value"—the overall visual density of the page—to match their specific experience level.',
        images: ['/assets/resume/serif_typography.png'],
        layout: 'full'
      },
      {
        title: 'Dynamic Visibility & Editorial Choice',
        body: 'To help users manage the strict single-page constraint, I built a visibility toggle system. Using eye-icons in the sidebar, users can instantly hide or show sections like "Summary" or "Projects" to see how the remaining content reflows. This encourages a deliberate editorial process, helping candidates prioritize their most relevant experience for a specific role without deleting their underlying data.',
        images: ['/assets/resume/visibility_toggle.png'],
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0e92c6162449841.63d6b384666f2.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/711202162449841.63d6b3846759c.png'
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
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e68bad162449841.63d62a98eccb6.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/67d725162449841.63d6965078f9b.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/50a658162449841.63d6bfd6266b0.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/779c99162449841.63d6bee25c966.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Brand System & Palette',
        body: 'Purple (#B66CFF), Yellow (#FFE973), and Mint Green are not chosen at random — each colour has a defined role. Purple leads on primary brand surfaces. Yellow is the accent that signals energy and creativity. Mint anchors supporting elements. The palette is loud enough to own a space but internally logical enough to stay cohesive across wildly different applications.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/22559c162449841.63d62a98ebaa4.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0f5b39162449841.63d6bfd6254a8.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d7bebd162449841.63d695786798e.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8a8e51162449841.63dcc097d478b.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Print & Stationary',
        body: 'The brand identity extends seamlessly to physical touchpoints. Business cards feature a dense, repeating logo pattern that feels tactile and substantial. The bold yellow accents make the cards highly distinctive.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/b17b69162449841.63d693177d365.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/c4e3a7162449841.63d693177e0ce.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0f0f40162449841.63d6931779a18.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5e1f6d162449841.63d6931780c1b.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Editorial & Collateral',
        body: 'Tri-fold brochures leverage the core brand palette to organize content sharply without sacrificing visual impact. Merch and apparel mockups show the flexibility of the logomark in real-world contexts.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/414ffd162449841.63d693177a854.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3d0805162449841.63d693177b65a.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4a8698162449841.63d693177c5ad.png'
        ],
        layout: 'grid-3'
      },
      {
        title: 'Digital & OOH Mockups',
        body: 'From massive urban billboards to clean digital interfaces, the identity was designed to scale. High-contrast typography paired with the 3D mark ensures CREO remains highly legible and recognizable whether viewed on a 6-inch phone screen or a 6-meter outdoor placement.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/24d12b162449841.63d693177fd32.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/dc9d6b162449841.63d693177ef9d.png'
        ],
        layout: 'grid-2'
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/65c87a151193447.6309886470f1a.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/268574151193447.6309886472479.png'
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
        title: 'Brand Identity & Visuals',
        body: 'The Exousia logo is a human-lightning bolt hybrid — a silhouette mid-stride with an energy bolt replacing the spine. It communicates the core concept in a single mark without any supporting text. The circular emblem frames it with industrial precision. Brans-DemiBold carries the wordmark at the same weight as the mark itself, so neither dominates.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4c931f151193447.63077404eb0f7.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/77c423151193447.63077404f3727.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4b9537151193447.63077404efe00.png'
        ],
        layout: 'grid-3'
      },
      {
        title: 'Hardware & Engineering',
        body: 'The physical hardware design features PZT sensors mapped to an Arduino-driven feedback loop. The floor tile cross-section was designed in Fusion360 to ensure high-impact loading durability while maintaining a clean, architectural finish for premium commercial spaces.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/c65b41151193447.63077404ef662.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3a5893151193447.63077404f14cd.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'System Integration',
        body: 'Physical collaterals carry the energy of the brand into the real world. Distinctive typographics and vibrant lime green elements help communicate the scale of energy generation directly to end-users.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/388b62151193447.63077404f2f03.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5676d6151193447.63077404ed590.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Mobile Application',
        body: 'The mobile UI tracks Total Power Generated in kWh with lime green indicators on a dark background — energy data that feels alive rather than clinical. It makes the invisible visible instantly.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5eb18e151193447.630779e950ebb.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3d31bd151193447.6307740500e25.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Marketing & OOH',
        body: 'The "POWER YOUR HOME" marketing campaign scales the brand from individual tiles to massive urban infrastructure. High-contrast billboard mockups demonstrate how the identity cuts through visual noise in environments like train stations and stadiums.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/ae1450151193447.63077404eeee8.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/357321151193447.63077404edeb0.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/cac9bf151193447.636f40b79d08e.jpg'
        ],
        layout: 'grid-3'
      }
    ]
  },
  {
    id: 'horizon-zoom',
    title: 'Horizon Zoom',
    category: 'Branding',
    year: '2023',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8de913156706847.636f3b772881b.jpg',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8de913156706847.636f3b772881b.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/11b173156706847.636bc57463412.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8463e1156706847.636d401e76332.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f984c0156706847.636d401e77201.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e16d31156706847.636d401e74e37.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab8d2b156706847.636d401e78ef8.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0c61a7156706847.636d401e7a967.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d117a8156706847.636d419468267.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d7d163156706847.636d491ba636b.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/source/1f1be0156706847.636cfb528cc67.gif',
      'https://mir-s3-cdn-cf.behance.net/project_modules/source/316b15156706847.636cd6e9c264c.gif',
      'https://mir-s3-cdn-cf.behance.net/project_modules/source/44cea9156706847.636cfb528dbca.gif',
      'https://mir-s3-cdn-cf.behance.net/project_modules/source/48e384156706847.636cd6e9bfd5a.gif',
      'https://mir-s3-cdn-cf.behance.net/project_modules/source/560c9b156706847.636bc57467a0b.gif'
    ],
    tags: ['Brand Identity', 'Strategy', 'Game Design Pitch'],
    technologies: ['Presentation Design', 'Business Modeling', 'Brand Positioning'],
    client: 'Horizon Games',
    role: 'Strategist & Designer',
    roleDetail: 'Designed the visual pitch deck and formulated the core business, retention, and incentive models.',
    metrics: ['Subscription Strategy', 'Charitable Incentive Model (15%)'],
    annotations: ['Retro 32-bit Aesthetic', 'Community Focus'],
    processImages: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f984c0156706847.636d401e77201.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e16d31156706847.636d401e74e37.png'
    ],
    outcomeImages: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab8d2b156706847.636d401e78ef8.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0c61a7156706847.636d401e7a967.png'
    ],
    figmaEmbed: '<iframe src="https://www.behance.net/embed/project/156706847?ilo0=1" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>',
    sections: [
      {
        title: 'Brand Identity & Visuals',
        body: 'The HORIZON ZOOM wordmark is embossed on a pill-shaped badge rendered in 3D — glossy red platform, clean white letterforms, Chrome finish on the badge edge. It sets the register: this is not a student game concept, it is a product pitch. The Racing Red and white palette runs through every subsequent screen without exception.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/11b173156706847.636bc57463412.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab8d2b156706847.636d401e78ef8.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/source/560c9b156706847.636bc57467a0b.gif',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0c61a7156706847.636d401e7a967.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Gameplay & Interaction',
        body: 'A core part of the Horizon Zoom identity relies on dynamic motion. Animated elements loop continuously, demonstrating gameplay sequences, menu transitions, and environmental lighting. These short snippets capture the fast-paced, arcade energy that static screens cannot convey.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/source/316b15156706847.636cd6e9c264c.gif',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8463e1156706847.636d401e76332.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d7d163156706847.636d491ba636b.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e16d31156706847.636d401e74e37.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'HUD & Customisation',
        body: 'The game HUD uses pixelated counters and a minimap — 32-bit aesthetic by design, not limitation. The select screen shows the bike customisation depth: clothes, decals, colourways. High-contrast white type on red backgrounds makes every screen readable at a glance, even in a low-light gaming environment.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/source/48e384156706847.636cd6e9bfd5a.gif',
          'https://mir-s3-cdn-cf.behance.net/project_modules/source/1f1be0156706847.636cfb528cc67.gif',
          'https://mir-s3-cdn-cf.behance.net/project_modules/source/44cea9156706847.636cfb528dbca.gif'
        ],
        layout: 'grid-3'
      },
      {
        title: 'Business Model & Marketing',
        body: 'Five revenue streams: ads, in-game currency, digital merch, physical drops, and four subscription tiers from Free Plan to Racer Pass. The Incentive Model earmarks 15% of profits for road accident victims and injured racing competitors. This positions Horizon Zoom effectively against Gameloft competitors.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f984c0156706847.636d401e77201.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d117a8156706847.636d419468267.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3763c6156706847.636d4194670c1.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8de913156706847.636f3b772881b.jpg'
        ],
        layout: 'grid-2'
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
