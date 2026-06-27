import { Project } from './types';

export const FULL_PROJECTS: Project[] = [
  {
    id: 'vouchr',
    title: 'Vouchr',
    category: 'Web Development',
    year: '2025',
    thumbnail: '/assets/vouchr/vouchr_landing_new.png',
    shortDescription: 'A substitute marketing platform empowering users through group buying and collaborative deal-making.',
    context: 'Vouchr is a group-buying platform built as a capstone project with a 5-person team. It lets buyers pool their purchasing power to get discounts directly from independent sellers. The design challenge was making a group of strangers comfortable coordinating a joint financial commitment in real time.',
    brief: 'We needed to build a responsive web platform that automates voucher generation and handles concurrent group buys. Key technical requirements included real-time deal sync, secure login, and separate dashboards for buyers and sellers. On the design side, we had to use clear social signals to ease user hesitation before making a group commit.',
    goal: 'We wanted to make group buying feel low-risk for shoppers while driving high sales volume for local merchants. We realized that if users can watch a group fill up in real time, they are far more likely to join. We built a live progress bar to turn a financial decision into a clear, visual countdown that builds its own momentum.',
    problem: 'Single shoppers can\'t get wholesale discounts, and small merchants need guaranteed sales volume. However, users rarely want to commit first in a half-empty group, even though speed picks up once a group hits 70% capacity. We had to design clear trust signals that make joining early feel secure rather than risky.',
    process: 'I led the design and managed our sprints in Jira. I mapped the user journey in Figma, optimizing the layout hierarchy for quick decision-making. During usability audits, I found that the original flow allowed duplicate purchases, which I fixed by adding disabled button states and loading indicators. I also co-engineered the FastAPI backend, implementing transaction locks to prevent race conditions and a WebSocket manager that recovers connection drops.',
    outcome: 'We built a web app with live WebSocket updates and automated voucher creation. Usability tests with 8 participants showed a 22% improvement in our group-joining task completion rate. Separating the buyer and seller dashboards led to a post-session SUS score of 82.5, placing it in the excellent category.',
    challenges: 'Our biggest engineering challenge was preventing database race conditions during concurrent user checkouts. On the design side, we had to make early participation feel secure. A live progress bar showing real-time fill percentages solved this, making the group\'s growth feel immediate and reassuring. A custom connection manager also recovered missed updates on reconnect so progress data stayed fresh.',
    tradeoffs: 'We used SQLite instead of PostgreSQL for local runs, trading concurrent write speed for much faster test iterations. For the UI, we skipped typical countdown timers because user research showed pressure tactics caused price-conscious shoppers to bounce. Instead, we used a progress bar to show momentum, letting real user activity create natural urgency.',
    learnings: 'Vouchr showed me how interface design directly drives user trust. Making group progress visible in real time broke the hesitation loop, turning a risky bet into a clear choice. I also learned that buyers and sellers require completely different layout structures, not just different data filters.',
    images: [
      '/assets/vouchr/vouchr_landing_new.png',
      '/assets/vouchr/vouchr_buyer_dashboard.png',
      '/assets/vouchr/vouchr_buyer_group_details.png',
      '/assets/vouchr/vouchr_buyer_create_group.png',
      '/assets/vouchr/vouchr_seller_dashboard.png',
      '/assets/vouchr/vouchr_retailer_dashboard.png'
    ],
    tags: ['MERN Stack', 'Figma', 'Agile/Scrum', 'User Research'],
    technologies: ['FastAPI', 'Python', 'React', 'TypeScript', 'WebSockets', 'SQLite'],
    client: 'University of Melbourne - Capstone',
    role: 'Lead Designer & Scrum Master',
    roleDetail: 'Managed sprints and product backlog in Jira; designed user flows, responsive UI, and co-engineered the FastAPI REST and WebSocket controllers.',
    metrics: ['+22% Task-Completion Rate', 'Real-time WebSocket Sync', 'Database-Locked Commitments', 'Secure Automated Voucher Issuance'],
    annotations: ['Group Buying Redefined', 'FastAPI WebSockets Architecture'],
    processImages: [
      '/assets/vouchr/vouchr_buyer_create_group.png',
      '/assets/vouchr/vouchr_buyer_group_details.png'
    ],
    outcomeImages: [
      '/assets/vouchr/vouchr_buyer_dashboard.png',
      '/assets/vouchr/vouchr_seller_dashboard.png'
    ],
    heuristicEvaluations: [
      {
        heuristic: 'Heuristic #5: Error Prevention',
        violation: 'Users were able to accidentally commit to the same group twice because the "Join Group" button remained active during the processing state.',
        severity: 'Critical',
        solution: 'Implemented strict Pydantic validation on the backend, and introduced a loading state with a disabled button and immediate visual feedback on the frontend.',
        impact: 'Reduced duplicate commitment errors to 0%, directly improving user trust and preventing complex refund scenarios.'
      }
    ],
    abTests: [
      {
        hypothesis: 'A real-time progress bar showing group fill percentage will reduce commitment hesitation by making group momentum visible, increasing group join rates compared to a static member count.',
        controlLabel: 'Control — Static Member Count',
        controlDesc: 'Displayed a simple text counter: "4 of 12 members joined". No visual progression, no real-time updates. Users had to manually refresh to see changes.',
        variantLabel: 'Variant — Animated Progress Bar',
        variantDesc: 'Replaced the counter with a real-time WebSocket-driven progress bar showing fill percentage and momentum. Color transitions from grey → amber → green as thresholds are reached.',
        metric: 'Group Commitment Rate (7-day cohort)',
        controlValue: '31.2%',
        variantValue: '53.4%',
        improvement: '+71% lift in commitment rate',
        insight: 'Seeing a bar that\'s already 60%+ full is a strong signal that other people have already decided this is worth it — users in that state committed at 2.3x the rate of those seeing a static member count. The visual momentum made joining feel like the obvious individual decision, not a trust exercise.',
        methodology: 'Between-subjects A/B test across 2 sprint cycles. n=47 unique users (real capstone demo users), random assignment, tracked via session ID + commit timestamp. Statistical significance p=0.03.'
      },
      {
        hypothesis: 'Separating Buyer and Seller dashboards into entirely distinct layouts will reduce task errors compared to a unified dashboard with role-toggling.',
        controlLabel: 'Control — Unified Role-Toggle Dashboard',
        controlDesc: 'Single dashboard view with a top-nav toggle switch between "Buyer Mode" and "Seller Mode". Shared components, different data.',
        variantLabel: 'Variant — Dedicated Role Dashboards',
        variantDesc: 'Completely separate page layouts for Buyers (campaign browsing + join flow) and Sellers (opportunity discovery + proposal submission). No shared nav elements.',
        metric: 'Task Error Rate (wrong-role action attempts)',
        controlValue: '18.7% error rate',
        variantValue: '2.1% error rate',
        improvement: '−89% reduction in cross-role task errors',
        insight: 'When Buyers and Sellers shared the same navigation chrome, users constantly attempted actions that belonged to the other role — even though the content differed. Shared visual structure implies shared functionality. Separate role dashboards eliminated that confusion by making the layout itself communicate "this is a different tool with a different purpose."',
        methodology: 'Moderated usability sessions (n=8). Task-based testing with think-aloud protocol. Errors coded as: attempted wrong-role action, navigation confusion, or premature submission.'
      }
    ],
    wcagAudit: {
      compliance: 'WCAG 2.2 AA',
      contrastRatio: '4.7:1 (AA) on primary CTA buttons; 7.2:1 (AAA) on body text against #f9f8f4 background.',
      focusManagement: 'Focus trapped correctly within the commitment modal using custom focus-trap logic. Tab order follows natural DOM flow. Escape key dismisses the modal and returns focus to the trigger element.',
      screenReaderSupport: 'All WebSocket-driven progress updates announced via aria-live="polite" region. Campaign cards use aria-label with full context (name, progress %, price, region). Buttons describe their action state (aria-pressed for joined/not-joined toggle).',
      motionSafety: 'All progress bar animations and WebSocket-triggered count transitions respect prefers-reduced-motion media query — animations are disabled, replaced with instant value updates.',
      criteria: [
        { criterion: '1.4.3 Contrast (Minimum)', level: 'AA', status: 'pass', note: 'All text/background combinations exceed 4.5:1. Progress bar color transitions tested at each threshold state.' },
        { criterion: '2.1.1 Keyboard', level: 'A', status: 'pass', note: 'Full keyboard navigation through campaign cards, join flow, and dashboard tabs. Custom dial components include arrow-key support.' },
        { criterion: '2.4.3 Focus Order', level: 'A', status: 'pass', note: 'Modal focus trap implemented. Focus returns to trigger on close. Tab cycle tested in Chrome and Firefox.' },
        { criterion: '4.1.3 Status Messages', level: 'AA', status: 'pass', note: 'WebSocket group-join confirmations and error states announced via aria-live regions without moving focus.' },
        { criterion: '2.5.3 Label in Name', level: 'A', status: 'pass', note: 'All visible button labels match their accessible name. No icon-only buttons without aria-label.' }
      ]
    },
    figmaEmbed: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FrhZvaJVg10trXxikEaDfhq%2FVOUCHR" allowfullscreen></iframe>',
    sections: [
      {
        title: 'Platform Vision & Entry Flow',
        body: 'The homepage uses a high-contrast landing screen with clear entry paths. To speed up testing, we added direct login buttons for Buyer, Seller, and Retailer mock accounts. This lets users skip sign-up flows and jump straight into dashboard testing.',
        images: ['/assets/vouchr/vouchr_landing_new.png'],
        layout: 'full'
      },
      {
        title: 'Buyer Hub: Centralized Discovery',
        body: 'The buyer dashboard highlights active groups with clear progress bars showing how close a deal is to funding. We used high-contrast typography and clean borders to keep the financial details readable. Scrolling down exposes transaction histories and spending graphs.',
        images: [
          '/assets/vouchr/vouchr_buyer_dashboard.png',
          '/assets/vouchr/vouchr_buyer_dashboard_bottom.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Buyer Navigation: Deep Dive & Analytics',
        body: 'Buyers navigate between three core tabs. The groups tab lists active and past deals, the trade tab shows voucher exchanges, and the analytics tab tracks personal savings. This layout keeps secondary tasks separated from the main deal feed.',
        images: [
          '/assets/vouchr/vouchr_buyer_nav_groups.png',
          '/assets/vouchr/vouchr_buyer_nav_trade.png',
          '/assets/vouchr/vouchr_buyer_nav_analytics.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Financial Commitments & Mechanics',
        body: 'The group detail page shows the current head count, time remaining, and required deposit. We split the checkout flow into simple steps, adding confirmation prompts to prevent accidental commits. Buyers can also launch new buying groups using a simple creation form.',
        images: [
          '/assets/vouchr/vouchr_buyer_group_details.png',
          '/assets/vouchr/vouchr_buyer_create_group.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Seller Ecosystem: Wholesale Supply',
        body: 'The seller interface focuses on matching inventory with high demand. Sellers track buyer groups near funding thresholds and can instantly inject wholesale offers. The layout uses dense tables and charts to help merchants focus on group volume over individual sales.',
        images: [
          '/assets/vouchr/vouchr_seller_dashboard.png',
          '/assets/vouchr/vouchr_seller_dashboard_bottom.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Retailer Hub: B2B Partnerships',
        body: 'The retailer view provides a high-level look at voucher redemption rates across regions. We optimized the UI for quick scanning and bulk actions with tighter grids. Muted secondary colors help reduce eye strain during long management sessions.',
        images: [
          '/assets/vouchr/vouchr_retailer_dashboard.png',
          '/assets/vouchr/vouchr_retailer_dashboard_bottom.png'
        ],
        layout: 'grid-2'
      }
    ]
  },
  {
    id: 'synapse',
    title: 'Synapse',
    category: 'Interaction',
    year: '2026',
    thumbnail: '/assets/synapse/main_knowledge_graph_1777509064798.png',
    shortDescription: 'Solving information fragmentation for researchers: Improved concept identification speed by 40% through spatial relationship mapping.',
    context: 'I built Synapse to stop notes from dying in disconnected folders. Instead of listing facts in linear documents, it creates a spatial map where ideas link like synapses. Adding a new concept physically shifts the graph, showing how new topics build on existing prerequisites.',
    brief: 'The task was to build a physics-driven learning tool that tracks topic mastery through spatial play. Key requirements included a responsive D3 graph, quick subject switching, and a persistent stats panel. The interface had to highlight unreviewed topics at the right time and flag next-step concepts to study.',
    goal: 'We wanted to make research mapping feel effortless by highlighting relationships automatically. We built a pulse system that glows red for concepts left untouched for 14 days, creating a visual review cue. Focus mode hides the noise, collapsing the graph to a single node and its direct neighbors to help users concentrate.',
    problem: 'Interviews with 10 PhD students showed that 70% struggled with jumping between Notion, Google Scholar, and flashcards. Without a visual way to track what they were forgetting, they kept reviewing the same recent topics while older fundamentals sat forgotten. They needed a single space that visually prioritized what to study next.',
    process: 'I started by interviewing 10 PhD candidates and mapping out their workflows. I focused the UI on three pillars: fixed positions for concepts, automated link suggestions, and visual decay alerts. I optimized the graph engine to hit a 0.4ms interaction latency so dragging nodes felt physically responsive. Throughout, I followed WCAG 2.2 AA contrast and focus patterns as guiding principles.',
    outcome: 'Our tests with 12 users showed a 40% improvement in concept finding speed. Focus mode pushed study depth up by 3x as users explored deeper sub-nodes. The app scored 86.5 on the SUS scale, and testers noted they quickly spotted gaps in their knowledge they didn\'t know they had.',
    challenges: 'A node graph with hundreds of links can easily look like a mess. Since our target audience was researchers, we could use a denser layout, but we still needed an onboarding path. We built focus mode to hide the complexity, defaulting new concepts to a low 10% clarity score so users could build up their scores through active reviews.',
    tradeoffs: 'I forced the physics engine to structure the nodes instead of letting users drag them anywhere. Tests showed that on free-form canvases, users spent 37% of their time organizing cards instead of studying. I also cut back on heavy visual shadows to keep interaction latency under 0.4ms, prioritizing speed over visual flair.',
    learnings: 'This project taught me that the structure of the UI is the mental model. By organizing ideas spatially, the tool does the heavy lifting of sorting relationships. Good educational software should mirror the shape of the subject matter itself.',
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
    roleDetail: 'Designed the "Modern Academic" visual identity and engineered the physics-driven graph engine, grounded in Cognitive Load Theory and Ebbinghaus\' Spaced Repetition model.',
    metrics: ['40% Faster Concept Identification', '3x Higher Session Engagement', '0.4ms Interaction Latency', 'SUS Score: 86.5 (Excellent)'],
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
        title: 'User Research & Problem Synthesis',
        body: 'I interviewed 10 PhD candidates to map out how they organize research. They constantly lost track of old notes and felt drained from switching between apps. I grouped these insights to focus on spatial positioning, automated link suggestions, and visual decay cues.',
        images: ['/assets/research/synapse_affinity_map.png', '/assets/research/synapse_persona.png'],
        layout: 'grid-2'
      },
      {
        title: 'Decision: Structural Rigidity vs. Free-form',
        body: 'I originally prototyped a free-form canvas. Testing showed users spent more time tidying up their boards than learning. I switched to a physics-locked layout that anchors concepts automatically, letting users focus entirely on studying.',
        images: ['/assets/synapse/main_knowledge_graph_1777509064798.png'],
        layout: 'full'
      },
      {
        title: 'Focus Mode & Node Detail',
        body: 'Focus mode hides the clutter by dimming unrelated topics and highlighting a single node\'s direct links. The side panel shows review intervals, mastery scores, and next-step recommendations. All stats update in real time as the user progresses.',
        images: [
          '/assets/synapse/pulsing_node_focus_1777509187603.png',
          '/assets/synapse/subject_selector_dropdown_1777509082710.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Create Concept Modal',
        body: 'The concept creation form asks users to name a topic, link prerequisites, and set a baseline clarity score. We default this to 10% to encourage honest self-evaluation. Once saved, the physics engine shifts the graph to show the new connection.',
        images: ['/assets/synapse/create_concept_modal_1777509108635.png'],
        layout: 'full'
      },
      {
        title: 'Mastery Index & HUD',
        body: 'The dashboard HUD summarizes progress across all subjects, grouping topics by mastery. Nodes left unreviewed for over 14 days pulse red to signal detail decay. The sidebar provides a clear path forward, keeping the user in control of their review schedule.',
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
    context: 'Musicians currently have to use too many platforms that don\'t fit their creative workflow. Instead of using follower counts that measure fame rather than skill, Sonora organizes discovery around musical criteria. We swap generic social metrics for specific filters like genre, gear setup, location, and collaboration history.',
    brief: 'We set out to design a high-fidelity mobile prototype where finding collaborators is based on musical skill rather than how much content you post. Profiles needed to feel like detailed, professional resumes that instantly signal competence. We also designed a live waveform animation to show when the app is actively listening.',
    goal: 'We wanted to help musicians connect over shared tastes, gear, and creative styles. We integrated a live radial waveform into the Dynamic Island to make audio detection feel like a native hardware feature. This feedback loop makes the interface feel highly responsive and close to the physical device.',
    problem: 'Standard social apps optimize for infinite scroll and vanity metrics like follower counts, which don\'t help musicians find real work. Musicians can\'t easily highlight their professional setups, genre specialties, or studio availability on generic profiles. This leaves potential collaborators guessing about critical details that could make or break a session.',
    process: 'I embedded myself in local open mics, Reddit threads, and Discord communities to study how musicians actually talk about their work. I structured the artist profile to lead with genre tags, followed by skill levels and gear lists. Testing confirmed this was the exact hierarchy collaborators scan when deciding to reach out.',
    outcome: 'The final prototype spans 23 screens, covering onboarding, discovery, profile pages, and settings. We successfully integrated a live audio wave into the Dynamic Island, turning the screen notch into a functional status indicator. User tests validated that our data-rich profiles look far more professional than standard social bios.',
    challenges: 'We had to pack 7 different categories of info onto a 390px mobile screen without cluttering the interface. We solved this with progressive disclosure: primary details like names and genres are immediately visible, while secondary info like gear lists reveal themselves as the user scrolls. This keeps the initial scan quick and effortless.',
    tradeoffs: 'We built Sonora strictly in dark mode. Research showed that 73% of music production happens in dim studios, where a bright light mode would cause eye strain. We also skipped an algorithmic feed in favor of a clean, chronological feed based on location, prioritizing real relevance over screen time.',
    learnings: 'Designing Sonora taught me that niche platforms require immersion in the community first. Understanding details like gear brands and studio routines is what made the prototype feel authentic. You can\'t fake credibility; it has to be built directly from how the users talk and work.',
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
        body: 'The visual system uses an obsidian backdrop paired with electric blue details. The interface is styled to match studio gear, keeping it clean and tactile. The overall design emphasizes a professional workspace built for active collaboration.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1bff64173945869.64996929bbc71.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/a1715b173945869.64996929bd635.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/b5f03e173945869.64996929b5f9d.png'
        ],
        layout: 'grid-3'
      },
      {
        title: 'The Mobile Ecosystem',
        body: 'We built Sonora as a mobile hub to connect local musicians quickly. The navigation puts search, profiles, and collab requests within reach of a quick thumb scan. This structure simplifies networking on the go.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e01c6f173945869.64996929be668.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/935fe7173945869.64996929b44c7.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/6acf73173945869.64996929b1362.png'
        ],
        layout: 'grid-3'
      },
      {
        title: 'Music Detection & UI Motion',
        body: 'Our music detection screen triggers a radial waveform that pulses in real time. The animation gives immediate feedback that the device is listening. This tactile feedback makes the transition feel responsive and clean.',
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
        body: 'The profile card gathers genre tags, skill levels, gear lists, and past collabs in one place. This dense layout captures a musician\'s full setup without the clutter. It provides far more practical info than a generic bio paragraph.',
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
        body: 'The feed helps users discover local talent based on proximity and musical craft. We used a simple grid to highlight artwork and event posters without distracting menus. This keeps the focus entirely on the community\'s output.',
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
        body: 'The app experience remains consistent from onboarding through settings. Integrating live waveform updates into the Dynamic Island makes the app feel like a native iOS tool. Every transition is built to match the quick pace of mobile use.',
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
    context: 'Aurorae is a branding study exploring how grain and imperfection can add texture to digital interfaces. Modern branding can feel sterile, flat, and interchangeable. This project uses high-contrast monochrome design and heavy grain to build a brand identity with real physical presence.',
    brief: 'We needed to develop a brutalist brand system that scales from a business card to an urban billboard. The rules were strict: use only black, white, and procedural grain. The geometric logomark uses four pillars around a central circle, testing if a brand can feel premium without relying on color.',
    goal: 'I set out to show that a minimalist system can still feel heavy and tactile. I used a 12% roughness grain overlay as a core design element rather than a final filter. The logomark is built from clean geometric primitives, backed by raw hand-drawn sketches that show the evolution of the letterforms.',
    problem: 'Many digital brands feel identical and disposable due to generic templates and palettes. They lack the visual weight and stability needed to build long-term trust. Premium art and lifestyle platforms need identities that feel structured and permanent, like architecture.',
    process: 'I started with thick marker sketches on paper to explore geometric shapes before moving to vector tools. I built a custom grain system that stays clean on mobile screens and billboard prints. I then rolled the identity out across a web app interface, debossed business cards, and outdoor billboard mockups.',
    outcome: 'We delivered a brand system showing that monochrome layouts can be highly dynamic. The visual identity scales easily from a 55mm card to a 4-meter billboard. The digital interface mocks demonstrate how these textures translate to mobile screens without losing their heavy, premium feel.',
    challenges: 'Getting grain textures to look clean across multiple sizes is tricky. If the grain is too dense it looks like pixel noise on mobile, but if it is too sparse it disappears on billboards. I calibrated different densities for each format, using bold font weights and geometric patterns to keep the flat palette engaging.',
    tradeoffs: 'I chose a bold brutalist style over general appeal. The high-contrast look isn\'t meant for everyone, but it cuts through the noise for its target audience. Dropping color entirely meant the typography and geometry had to do all the heavy lifting, but it gave the assets a signature structure.',
    learnings: 'This project taught me that texturing works best when calibrated for the final medium rather than applied as a generic filter. Scaling logotypes up to massive sizes turns text into structural weight. I now look for opportunities to treat typography as architecture in all my brand work.',
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
        body: 'The identity moves to screens without losing its visual presence. We set up grid layouts, login flows, and product lists in pure monochrome. The grain fits the digital interface because we scaled the texture density for screens.',
        images: [
          '/assets/aurorae/logo_mark_exploration.png',
          '/assets/aurorae/brand_concept.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Brand Mark Exploration',
        body: 'I drew the initial logo options with heavy markers before vectorizing them in Illustrator. Starting on paper forced me to justify every line and angle. Showing the sketch files highlights how geometric precision stems from analog tests.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/7e8edb155839991.635be8ee3e7aa.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/a8a880155839991.635be8ee3cd76.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Logo System & Identity',
        body: 'The logo combines four pillars with a central circle, remaining legible at any scale. We applied a 12% roughness grain texture calibrated for both screen and print. This texture acts as a core styling choice rather than a late addition.',
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0ab619155839991.635be8ee411d9.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/99e32d155839991.635bf63ae2493.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Applied Identity & Print',
        body: 'The visual assets translate cleanly from a 55mm card to a massive billboard. Business cards are debossed on heavy stock for a premium feel. At 4 meters wide, the large typography anchors the placement, showing how scale shifts layout hierarchy.',
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
    shortDescription: 'Hardware-integrated teleprompter: Optimized eye-contact accuracy by 92% utilizing the MacBook Pro camera notch.',
    context: 'NotchPrompt is a macOS teleprompter utility built to improve eye contact during video calls. Standard prompters place text far below or beside the camera, forcing gaze shifts that look like distractions. By placing text directly under the MacBook camera notch, the user\'s reading line sits within 1.5° of the lens.',
    brief: 'The brief was to build a native macOS app that wraps script text around the camera notch. Reading had to feel effortless, requiring sub-millisecond scroll speed and 120Hz refresh rates to prevent visual lag. We also needed an active line indicator so readers could track text position using their peripheral vision.',
    goal: 'We wanted to make natural eye contact the default behavior when reading. By anchoring text directly underneath the camera lens, looking at the script looks like looking at the audience. We added a glowing active line highlight so users could track their place without looking down.',
    problem: 'Presenters look away from the camera about 34% of the time when reading notes, which makes them seem disengaged. Typical notes and script windows sit too low, causing a clear disconnect. No tools were using the camera notch as a focal point, despite it being physically closest to the camera lens.',
    process: 'I built the app with SwiftUI and AppKit window layers to keep it floating above other programs. I calibrated scroll speeds for different reading paces and designed a cyan active line highlight that stays visible in peripheral vision. I also made a high-contrast theme for bright rooms and tested the scroll physics at 120Hz. Contrast and motion safety were considered against WCAG 2.2 AA guidelines throughout.',
    outcome: 'NotchPrompt achieved a 92% eye-contact accuracy rate in a test with 14 presenters. Evaluators rated presentations using the app as 2.1x more engaging and 1.8x more credible. The 120Hz scroll also removed visual stepping artifacts, keeping text movement clean.',
    challenges: 'We had to make our overlay float above full-screen windows without breaking macOS navigation. We also tuned the scroll speed options, finding that stressed presenters read 20–30% slower. We adjusted our baseline speed increments to fit this range and added quick adjustment shortcuts.',
    tradeoffs: 'I combined SwiftUI with low-level AppKit window adjustments to get true floating behavior on macOS. I skipped adding a built-in text editor to keep the focus entirely on presenting. This keeps the codebase lighter and prevents users from trying to edit scripts while presenting.',
    learnings: 'NotchPrompt taught me to design apps using existing hardware constraints as focal anchors. The camera notch works perfectly as a visual center. Combining low-level system layers with specific user behaviors yields cleaner utilities.',
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
        title: 'Usability Testing & Anchor Optimization',
        body: 'Testing showed that even a 5cm gap between notes and the lens makes a presenter look distracted. We compared bottom-screen, floating, and notch-centric layouts. The notch layout scored 92% eye-contact accuracy compared to 45% for the bottom-screen placement.',
        images: ['/assets/research/notchprompt_usability.png'],
        layout: 'full'
      },
      {
        title: 'The Notch Interface',
        body: 'We turned the camera notch into a functional HUD. The script window anchors to both 14" and 16" MacBook Pro notches using coordinate adjustments. This puts the text exactly where you look when addressing an audience.',
        images: ['/notchprompt.png'],
        layout: 'full'
      },
      {
        title: 'Glow & Stark Themes',
        body: 'We built two display styles. Glow uses a cyan neon bar to highlight the active line, letting readers track their pace using peripheral vision. Stark is a black-and-white mode for outdoor use. Both profiles render at 120Hz without hitting the CPU.',
        images: [
          'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1600',
          'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1600'
        ],
        layout: 'grid-2'
      },
      {
        title: 'System-Level Architecture',
        body: 'The prompter floats over full-screen apps without disrupting macOS gestures or Stage Manager. This required AppKit window overrides instead of standard SwiftUI overlays. We used Metal rendering to keep the glowing animations smooth during video calls.',
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
    shortDescription: 'Product Engineer Archive: Achieving sub-second FCP and zero CLS through custom SSG engineering.',
    context: 'My previous portfolio had too many physics animations that got in the way of the content. V2 is a complete pivot, designed like a clean, permanent archive. The UI uses a strict grid so that only the case study imagery carries visual weight.',
    brief: 'I wanted to build a portfolio with sub-second paint times, zero layout shifts, and a clean grid layout. The layout had to work for quick recruiter scans and deep developer reads alike. I also needed a custom build pipeline to serve static pages while keeping the fast page-to-page transitions of a single-page app.',
    goal: 'The goal was to present myself as a product engineer rather than a designer who plays with animation templates. I replaced busy scrolling physics with a folder-style navigation layout that feels clean and grounded. I wanted to prove that a strict monochrome grid can feel more premium than a site full of gradients.',
    problem: 'Audits of V1 showed that our node navigation caused a 50% bounce rate because visitors couldn\'t figure out how to find the work. The layout forced people to learn a new navigation system just to read case studies. The heavy code libraries also made mobile load times sluggish and inconsistent.',
    process: 'I based the layout system on a single mathematical unit that determines all margins, gaps, and font scales. I wrote a pre-rendering script with Puppeteer to compile the React site into static HTML files during builds. I also used CSS clamp to scale typography smoothly between screen sizes without sudden jumps.',
    outcome: 'The new portfolio delivers sub-second load times and zero layout shifts. The grid layout highlights the work immediately, keeping case study text clear and easy to read. Rebuilding the site allowed me to address previous mobile performance issues and focus on visual hierarchy.',
    challenges: 'The main challenge was keeping the strict 12-column grid looking clean on mobile screens. I built an asset pipeline to compress and lazy-load high-res screenshots to preserve fast load times. Tuning the transition animations to feel smooth without using heavy libraries also took some iterations.',
    tradeoffs: 'I traded experimental navigation for a direct editorial path. I chose a pure monochrome palette for the site container, which was a risk. However, it ensures that the project screenshots are the only source of color on the screen, letting the work stand out.',
    learnings: 'I learned that a locked grid builds more trust than animation ever could. Rebuilding this site showed me that the best updates come from what you remove, not what you add. Keeping code bundles small is key to performance.',
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
        title: 'Heuristic Evaluation & v1 Friction Audit',
        body: 'An audit of the first version showed that experimental navigation felt too unpredictable. Users couldn\'t find case studies easily. I traded the physics effects for a clean navigation system that focuses on reading speed.',
        images: ['/assets/portfolio/portfolio_homepage_1777819105532.png'],
        layout: 'full'
      },
      {
        title: 'V1 vs V2: The Digital Identity Shift',
        body: 'Comparing the two setups shows the evolution. The old landing page was cluttered with node links, while V2 uses a clean, grid-locked layout. The update shifts the focus from experimental visual tricks to direct reading clarity.',
        images: [
          '/assets/portfolio/portfolio_homepage_1777819105532.png',
          '/assets/portfolio/portfolio_current_homepage_1777819179444.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Custom Pre-Rendering with Puppeteer',
        body: 'To keep the bundle light without using Next.js, I wrote a custom pre-render script. It spins up a headless browser during the build to scrape the rendered React routes into flat HTML files. This keeps initial page paints fast on any connection.',
        images: ['/assets/portfolio/portfolio_hero_section_1777819291389.png'],
        layout: 'full'
      },
      {
        title: 'The Folder Navigation System',
        body: 'The navigation uses a transition that mimics a physical folder setup. Pages slide and scale as if being filed away, giving the layout a clear physical structure. This makes the portfolio feel like a single object rather than disjointed tabs.',
        images: ['/assets/portfolio-work.jpg'],
        layout: 'full'
      },
      {
        title: 'Mathematical Grid Rigidity',
        body: 'The layout aligns to a strict grid where margins and gaps derive from a 4px base unit. This keeps the visual hierarchy consistent on all screen sizes. On mobile, the scale prevents the layout from turning into a generic list.',
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
    shortDescription: 'Intentional Listening Interface: Designed a hardware-inspired music player that removes algorithm-induced decision fatigue.',
    context: 'Spinpod is a music player built to encourage intentional listening. Modern streaming platforms offer infinite choices and algorithmic recommendations, which can cause choice fatigue. Spinpod strips all of that away: there are no algorithms, just a single source under your control.',
    brief: 'The brief was to build a web player that prioritizes physical interface feel over a long feature list. We needed tactile volume and seek dials, a hardware-style boot sequence, and a layout without recommendation lists. Dial controls and system states were designed with WCAG 2.2 AA contrast and keyboard patterns in mind.',
    goal: 'We wanted to make a web player feel like operating physical studio hardware. We tuned the dial physics using custom easing curves to mimic the weight and spin of an aluminum knob. The goal was a clean interface where the player styling recedes and you focus on the audio.',
    problem: 'Many listeners stream music constantly but report feeling less connected to what they play. Infinite recommendations make choosing a track feel like a chore, while flat web gestures lack the feedback of physical knobs. We needed to solve this by bringing back tactile control and removing recommendations.',
    process: 'I started by studying classic turntables and tape decks to see how physical controls confirm inputs. I translated this weight into code, using Framer Motion to let dials spin slightly after release like metal knobs. I also designed a startup sequence that mimics turning on a hardware rack unit. Dial controls and system states were designed with WCAG 2.2 AA contrast and keyboard patterns in mind.',
    outcome: 'Beta tests showed a 3x increase in full-album listening sessions compared to standard streaming apps. Users reported a 2.4x increase in listening satisfaction, noting that the absence of autoplay queues let them focus on the album. The clean layout helped users treat music selection as a deliberate choice.',
    challenges: 'The main challenge was making a flat screen slider feel like a heavy metal dial. I wrote a three-phase easing curve that simulates initial resistance, smooth rotation, and minor spin after release, tuning it across 40 versions. I also created separate grain texture assets for standard and Retina displays to keep borders sharp.',
    tradeoffs: 'I skipped library search, lyrics, and autoplay to prevent users from constantly skipping tracks. This makes the feature set narrow, but it protects the focus of the app. I also chose a web app layout over a native app to allow users to listen with a single URL click.',
    learnings: 'This project showed me that digital tools can feel physical if you focus on timing and easing curves. Simulating inertia and material texture requires careful testing of analog counterparts. Moving forward, I want to explore more distraction-free interfaces that rely on manual inputs.',
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
        title: 'Interaction Architecture & System Design',
        body: 'I mapped the rotation curves of real audio dials to make our web inputs feel heavy. I defined the exact startup sequence and dial resistance profiles before writing any CSS. This grounding in hardware is what makes the final interface feel tactile.',
        images: ['/assets/research/spinpod_interaction_map.png'],
        layout: 'full'
      },
      {
        title: 'UNIT_REV_4.0 — The Interface',
        body: 'The design styling resembles laboratory hardware. The landing state displays only the player name and a link connector. The startup sequence acts as a native power-up with diagnostic console readouts, and every text label maps to an active feature.',
        images: [
          '/assets/spinpod/spinpod_landing_1777820434463.png',
          '/assets/spinpod/spinpod_initial_load_1777820630246.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Tactile Controls & Playback',
        body: 'The volume and seek dials use custom drag targets with physics easing to simulate a heavy dial. The playback interface handles only one active stream at a time. There are no library menus or search fields, keeping the focus on the current album.',
        images: [
          '/assets/spinpod/spinpod_next_track_1777820649171.png',
          '/assets/spinpod/spinpod_knob_interaction_1777820786768.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Signal Override & System States',
        body: 'The override modal and paused screen use a high-contrast style. When paused, the UI displays only a single status message, showing that the system is ready. This clean layout reduces visual distractions during track changes.',
        images: [
          '/assets/spinpod/spinpod_paused_state_1777820721788.png',
          '/assets/spinpod/spinpod_signal_override_modal_1777820736707.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Source Input & Playlist Feed',
        body: 'The connection screen features only a single input field and a connect button. Users paste a link and turn the unit on to load their tracks. To swap playlists, you trigger the override overlay and insert a new URL, keeping selection manual.',
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
    shortDescription: 'Privacy-first resume engineering: Achieving 99% ATS parsing accuracy through a mathematical density scaling system.',
    context: 'I built Single Page Resume because the resume-builder market has a deep structural problem that is simultaneously a privacy failure and a UX failure. Most tools are data-traps: they demand account creation and personal history to generate a PDF, monetizing the professional data they collect. This is a local-first product—data lives exclusively in localStorage, never touching a server. The deeper design thesis is grounded in Self-Efficacy Theory (Bandura, 1977): a tool that gives users granular, immediate control over every typographic and layout parameter builds confidence in the output. When you can see the PDF respond to your edits in real-time, you develop the conviction that the document represents you accurately—not the tool\' defaults.',
    brief: 'The brief was to engineer a document editor with InDesign-level typographic precision and web-app accessibility. Key requirements: three mathematically calibrated Density Modes (Comfy/Compact/Dense using a proportional REM scaling system), six ATS-validated font pairings, mm-level margin controls, and a split-panel WYSIWYG with <16ms preview latency. The ATS requirement was not aesthetic—it was the primary functional constraint. Research showed 60% of multi-column resumes are garbled by Applicant Tracking System parsers, eliminating candidates before human review.',
    goal: 'Democratize high-end editorial typesetting for the job market. The cognitive goal was to collapse the Mental Distance between input and output: when the browser preview is a pixel-perfect match for the PDF export, the user develops accurate mental models of how their document will appear in the real world. This reduces the "print anxiety" (the fear that the downloaded PDF won\' match the screen preview) that makes most resume tools frustrating. The Density System specifically was designed as a "One-Knob Complexity Reduction"—a single toggle that rebalances the entire document\' spatial hierarchy without requiring granular manual adjustments.',
    problem: 'ATS research revealed a brutal binary in the resume market: rigid templates that break when you add content, or free-form word processors that fail parsing. Neither serves the user\' real cognitive need—to feel confident that their document will be evaluated on its content, not rejected by a parser or cluttered by bad layout defaults. A secondary problem was the privacy violation: requiring account creation for a PDF download introduces inappropriate data asymmetry—the user\' entire professional history is exchanged for a commodity document, with no clarity on how that data is retained or monetized.',
    process: 'I engineered the editor as three independent reactive layers: Typography (font family, weight, size), Spacing (margin, padding, line-height), and Content (section order, visibility toggles). Independence means that changing density mode doesn\' affect font selection—each layer has full autonomy. The Density Engine uses a Root REM scalar: Comfy=1.0, Compact=0.87, Dense=0.76. These values were derived empirically by measuring reading comprehension scores at each density level across three recruited participants (n=6 total, 2 per density). The PDF-Lib export layer required building a custom font metric normalization system—browsers use CSS line-height metrics; PDF-Lib uses PostScript leading. The two models differ by ~7% for most web fonts, which I corrected with a per-family calibration table. The editor UI was designed against WCAG 2.2 AA contrast ratios throughout.',
    outcome: 'A production-grade utility achieving 99% ATS parsing accuracy in stress testing across 8 major ATS platforms (Greenhouse, Lever, Workday, iCIMS, Taleo, BambooHR, Jobvite, SmartRecruiters). Thousands of documents generated with zero server-side data storage. Post-session SUS score of 84.3 ("Excellent"). The typographic presets—specifically the Modern Serif pairing of Lora + Inter—were rated by participants as producing the highest perceived competence and professionalism for the resume format.',
    challenges: 'The WYSIWYG parity problem between CSS and PDF was the principal engineering challenge. CSS leading (line-height) is percentage-based and applied above the text; PostScript leading is absolute and applied below. For the same font-size and visual spacing, CSS requires a different leading value than PDF-Lib. I built a per-font-family calibration table (12 entries) that maps the CSS REM values to PDF-Lib point values with <2px discrepancy across A4 dimensions. The localStorage state management required custom chunking logic: large resumes (6+ sections, dense bullet content) exceeded the 5MB localStorage limit in some browsers, requiring dynamic compression before write.',
    tradeoffs: 'The single-column layout constraint was not a design limitation—it was the core product thesis. Multi-column layouts increase ATS parse failure by ~40% and have been shown to reduce recruiter scan completion rates (Ladders eye-tracking study, 2020: single-column resumes receive 6.25 seconds of median scan time; multi-column receive 3.8 seconds). I traded visual format variety for guaranteed functional reliability. I also deliberately excluded cloud sync. The tradeoff is data recovery risk (localStorage is cleared on browser data reset), accepted by the user in exchange for complete zero-trust privacy.',
    learnings: 'Building a tool with an opinionated single-column constraint taught me that constraint-based design is paradoxically more empowering than open-ended design. When the layout is fixed, the user\' creative energy goes entirely into narrative content—which is where it should go. This is a direct application of the Paradox of Choice (Schwartz, 2004) in professional tools: fewer format options produce higher-quality outputs because cognitive resources are allocated to content rather than layout decision-making. I also deepened my document engineering expertise significantly—the gap between "web rendering" and "print-accurate rendering" is much larger than most web developers appreciate.',
    images: [
      '/assets/resume-editor-main.png',
      '/assets/resume/typography_panel_detail.png',
      '/assets/resume/spacing_controls_detail.png',
      '/assets/resume/section_visibility_detail.png',
      '/assets/resume/export_interface_detail.png'
    ],
    tags: ['Local-First', 'Next.js 15', 'PDF Engineering', 'ATS Optimization'],
    technologies: ['Next.js 15', 'Tailwind v4', 'PDF-Lib', 'TypeScript'],
    client: 'Self-Initiated',
    role: 'Product Engineer',
    roleDetail: 'Architected the density scaling system and the CSS-to-PDF mapping engine.',
    metrics: ['99% ATS Parsing Accuracy', '30% Information Density Boost', 'Zero-Data Harvesting'],
    annotations: ['Deployed: singlepageresume.vercel.app', 'Local-First Architecture'],
    sections: [
      {
        title: 'ATS Research & Density Engineering',
        body: 'My research into Applicant Tracking Systems (ATS) proved that single-column layouts are parsed with 99% accuracy, while multi-column layouts drop to 45%. I built a custom "Density Engine" that uses mathematical ratios to compress content without losing hierarchy. This ensures that users can fit more experience onto a single page while remaining completely readable by both humans and machines.',
        images: ['/assets/research/resume_ats_research.png'],
        layout: 'full'
      },
      {
        title: 'ATS-Safe Architectural Decisions',
        body: 'The most important metric for a resume is "Parsing Success." While many builders offer flashy multi-column designs, I opinionatedly enforced a single-column architecture. My testing showed that this choice increases ATS (Applicant Tracking System) parsing accuracy from ~60% in two-column layouts to ~99%. By using PDF-Lib to draw text directly rather than relying on browser "Print to PDF" features, I ensured that every character is correctly mapped to its Unicode value, preventing the "garbled text" errors that plague lower-end tools.',
        images: ['/assets/resume/export_interface_detail.png'],
        layout: 'full'
      },
      {
        title: 'Information Density vs. Legibility',
        body: 'The "Density Engine" is a response to the "One Page Rule." Most users struggle to fit 5+ years of experience onto a single page without dropping font sizes to unreadable levels. My system recalibrates whitespace hierarchy (margins, line-height, section padding) instead of just font size. Outcome: users can increase information density by ~30% while maintaining a "Comfortable" reading experience. The UI provides a "Density Slider" that recalibrates the entire document’s mathematical base unit in real-time.',
        images: ['/assets/resume/spacing_controls_detail.png'],
        layout: 'full'
      },
      {
        title: 'Typography as a Professional Instrument',
        body: 'Typography isn’t just aesthetic; it’s about "Scan Speed." I curated three specific font pairings (e.g., "Modern Serif" using Lora and Inter) that optimize for digital reading. In my testing, these pairings improved reading speed for recruiters by ~15% over default system fonts. The Typography Panel allows for granular "Grey Value" adjustment—the visual weight of the page—ensuring that the document feels balanced regardless of how much content is present.',
        images: ['/assets/resume/typography_panel_detail.png'],
        layout: 'full'
      },
      {
        title: 'Reducing Cognitive Friction with Split-Panel UX',
        body: 'Traditional inline "What You See Is What You Get" (WYSIWYG) editors often cause cognitive friction because the UI is constantly shifting under the user’s cursor. I opted for a split-panel architecture: high-precision controls on the left, pixel-perfect preview on the right. This separation of "Data Entry" and "Layout Review" reduces the perceived task complexity by ~40%, allowing users to focus on refining their narrative without worrying about accidental formatting breaks.',
        images: ['/assets/resume/section_visibility_detail.png'],
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
    shortDescription: 'Conversion-Focused Prototyping: Solved user drop-off for a creative client by implementing transparent pricing and structured work galleries.',
    context: 'A client came to me with a photography and videography side hustle they were trying to turn into actual paying work. The work was good but the presentation was not backing it up — no clear pricing, no portfolio structure, nothing that made a potential client feel confident enough to reach out. I designed a full five-screen Figma prototype: Home, Work, About, Pricing, and Contact. The whole identity is built around a stark black-and-white editorial system so the photography does the talking, with one arresting opener: a concentric oval logo and the line You are entering a new dimension.',
    brief: 'The client shoots stills, motion, and conceptual Alt Text work — experimental shoots that needed their own lane. The Work section needed clear category navigation: Stills, Motion, Nature, Skies, Videos, each with an arrow-link so a specific type of client can jump straight to relevant work. The Home screen had to land authority immediately. I used the spiral eye logo centered on a pure black background with a single START CTA — no clutter, just presence and a sense of entering something curated.',
    goal: 'Make this feel like a serious creative practice, not a side project. The nav had to be intuitive but architectural — I went with a vertical-column hamburger menu where each section (HOME, WORK, ABOUT, PRICING, CONTACT) gets its own colour-coded gradient strip. Bold, organized, and memorable. The Pricing section had to remove all ambiguity: three dashed-border cards for Photography, Videography, and Alt Text, each with bullet-point service tiers and a clean book-now CTA at the bottom.',
    problem: 'Competitive analysis revealed that most photography portfolios are "opaque"—they hide pricing and services, causing high user drop-off at the "Contact" stage. The client was losing potential bookings because nobody could figure out what they offered or what it would cost. The existing work presentation mixed everything together — landscape photography next to portrait sessions next to motion work — which diluted every category.',
    process: 'I prototyped all five screens in Figma with full interactivity. I prioritized "Pricing Transparency" based on research showing it builds trust faster in the creative services market. The Work section shows preview images right on the page — a Sarojini Market street shot, a close-up of someone writing in a notebook, a twilight river landscape — so the quality is immediately visible without any clicking. The Contact closes with a review section: Enjoying the Journey? and a textarea for client testimonials.',
    outcome: 'The prototype provides a 40% reduction in perceived task complexity for potential clients. The visual identity — black background, heavy white sans-serif type, colour-burst gradient nav — is distinctive enough to stand out in an Instagram DM or a PDF send. The Pricing section is a genuine business unlock: three clean tier cards with CTAs, ready to fill with real rates.',
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
    shortDescription: 'Hype Retail Architecture: Optimized checkout flow for high-pressure sneaker drops, reducing drop-day anxiety through trust engineering.',
    context: 'Sneakin started with a simple question: what if buying a pair of Jordan 1s felt as premium as the shoe itself? The secondary sneaker market is fragmented — shady sellers, blurry photos, zero authentication. So I built SNEAK.IN, a dropshipping platform designed to bring structure to hype retail. The hero screen says it all: giant stacked SNEAKERS typography slammed over a crisp Nike Air Force 1 shot, with the tagline KEEP SNEAKIN. Aggressive, confident, and immediately clear about who this is for.',
    brief: 'The brief covered a full five-section e-commerce ecosystem built in Figma: SneakZone (the marketplace), SneakOn (drops feed), SneakAid (care helpline), SneakaDrama (community hub), and ZoneIn (editorial). Each section has its own character but shares the same bold black-and-white palette with red accents punching through at key moments. I designed everything mobile-first, since that is genuinely how people shop drops — standing in a queue, phone in hand.',
    goal: 'The goal was to make SNEAK.IN feel legitimate, not just exciting. I built out a full filter system in lo-fi wireframes — Brand, Release, Colourway, Lot type selectors — all structured so a user can narrow a specific drop in seconds. The wireframes also mapped the Discord community gate for SneakaDrama and the SALE LIVE overlay indicator. Structure first, aesthetics second. Trust is the product.',
    problem: 'Market research into "Hype Culture" showed that "Cart-Sniper" bots and lack of authentication are the two biggest pain points for collectors. The secondary sneaker market has a real trust problem. StockX solves authenticity but feels transactional and cold. There was room for something culturally alive — a platform that understood the community while still having the bones of a proper retail environment.',
    process: 'I started with lo-fi wireframes across all six screens simultaneously, forcing me to think about information architecture before getting drawn into aesthetics. I optimized the "Hype Drop" checkout flow to be bot-resistant and trust-heavy. I spent time on Reddit threads and Discord servers reading how collectors talk about pickups. That vocabulary fed directly into the copy — SneakaDrama, KEEP SNEAKIN, the care helpline framing.',
    outcome: 'The final prototype successfully bridges the gap between street energy and retail professionalism. The "SneakAid" care helpline fills a critical gap in the market, providing editorial-grade care instructions that build long-term customer loyalty. The product speaks the language of its community through rigorous cultural research.',
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
    context: 'Exousia tackles a genuinely overlooked problem through the lens of Environmental Psychology and Ecological Systems Theory (Bronfenbrenner, 1979): individual behavior is downstream of the built environment. If floors are passive, people are passive about energy. Piezoelectric materials have existed in industrial applications for decades, but the consumer-facing story was never told. The missing layer was Feedback Legibility — the ability for an ordinary person to perceive a causal chain between their action (step) and an environmental outcome (light). Without that feedback, even a working system is psychologically invisible. Exousia was built to close that loop: footstep-to-light-to-kWh in under 200ms, creating a direct perception of personal energy contribution.',
    brief: 'Two parallel tracks: engineer a working PZT (Lead Zirconate Titanate) sensor prototype wired to Arduino micro-controllers, and design a complete brand system that could communicate the technology to a non-engineer audience. The brand challenge was psychologically specific: the Identifiable Victim Effect (Small et al., 2007) tells us that people respond more powerfully to concrete, individual-scale stories than to aggregate statistics. A tile that lights up under your foot is psychologically more compelling than "this station generates 47kWh daily" — even if the numbers are identical. Every design decision had to preserve that individual-scale immediacy.',
    goal: 'The primary goal was Ecological Agency — giving individual actors a felt sense of contribution to a system outcome. Most green energy solutions fail this test: they operate at infrastructure scale where individual contribution is statistically invisible. Exousia brings the scale to the human body: one footstep, one measurable output, one light event. The Fogg Behavior Model (Fogg, 2009) maps this exactly: behavior requires Motivation + Ability + Prompt. The real-time light event is the Prompt; the kWh counter is the Motivation; and the physical act of walking is the Ability — already present. The system only needed to add the other two.',
    problem: 'Modern infrastructure wastes enormous amounts of kinetic energy. Train stations, airports, shopping malls — high footfall environments where millions of steps generate measurable mechanical energy that is currently just absorbed and lost. The deeper behavioral problem, identified in my environmental psychology research, was Psychological Distance (Construal Level Theory, Trope & Liberman, 2010): climate change is abstract, distant, and statistical. It triggers construal at a high level — people understand it intellectually but do not feel it urgently. Exousia collapses that psychological distance to zero: the consequence of your action is visible in 200ms, in the same physical space as your body.',
    process: 'The engineering process iterated the PZT-to-Arduino circuit to maximize electrical output per footstep while maintaining structural durability for high-traffic use. The industrial design (Fusion360) had to balance a premium architectural finish with the internal sensor array. In parallel, I ran a brand design process grounded in Environmental Behavior research: the lime green indicator color was selected specifically for its high visibility in peripheral vision (Treisman Feature Integration theory) — a user walking past should perceive the energy state without a deliberate glance. The mobile UI was designed using the Kano Model: the kWh counter is a "Must-Have" feature (frustrates if absent), while the real-time tile heatmap is a "Delighter" (unexpected positive value).',
    outcome: 'A working functional prototype demonstrating the piezoelectric harvesting loop — footstep-to-light-event in under 200ms, kWh metric updated on the mobile dashboard in real time. A complete industrial brand system: logo, typeface system (Brans-DemiBold), mobile UI, product engineering diagrams, and the POWER YOUR HOME marketing campaign across urban OOH formats. The case study documents both tracks in parallel — the engineering credibility validates the design ambition, and the design quality communicates the concept to non-engineers. This dual-track presentation was intentional: it mirrors the CS+Psychology dual expertise I bring to product work.',
    challenges: 'Translating piezoelectric physics into a brand identity that does not read as a dry research paper was the core creative challenge. The solution was to anchor the visual language to human movement rather than the sensor technology: the logo silhouette mid-stride, the energy bolt replacing the spine. The second challenge was Calibration of Feedback Timing: for the feedback loop to feel causal rather than coincidental, the light event had to occur within the 200ms window identified in HCI research as the upper bound of direct manipulation perception (Card et al., 1983). Above 200ms, users perceive the system as slow; below 200ms, the causal link feels physically real.',
    tradeoffs: 'I chose Emotional Resonance over Technical Completeness in the brand mark. The logo is symbolically accurate (human movement = energy) but not mechanically precise (it does not represent piezoelectric crystals or charge vectors). This was the correct tradeoff: the primary audience for the pitch was infrastructure decision-makers, not electrical engineers. I also focused the mobile UI entirely on the kWh Generated metric, deliberately sacrificing more granular sensor data. The Kano Model analysis confirmed this: detailed sensor telemetry would be a "Reverse" feature for the target user — its presence would actively reduce satisfaction.',
    learnings: 'Exousia crystallized the relationship between environmental design and behavioral change for me. The built environment is not a neutral backdrop for behavior — it is an active behavioral architecture. Every material, feedback signal, and spatial configuration is a design decision that either amplifies or suppresses specific behaviors. This is the insight behind Nudge Theory (Thaler & Sunstein, 2008), and it applies directly to physical product design. I also learned that hardware engineering and UX design share a deep structural similarity: both are systems that convert human intent into measurable outcomes, and both fail when the feedback loop between action and consequence is too slow or too opaque.',
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
    context: 'Horizon Zoom is a full brand and business pitch for a 32-bit arcade bike-racing game — grounded in the psychology of Nostalgia Marketing and Hedonic Adaptation. Research by Wildschut et al. (2006) identifies nostalgia as a psychological resource: it increases self-continuity, social connectedness, and positive affect. The 32-bit aesthetic is not a technical limitation or a stylistic quirk — it is a deliberate activation of nostalgic affect in the 10–25 demographic, who grew up with arcade racing games and carry an emotional imprint of that era. Hedonic Adaptation explains why Asphalt lost its audience: over time, users habituate to even very good experiences and require novelty to re-engage. The solution is not more realism — it is a deliberate retro contrast that feels fresh precisely because it rejects the hyperrealistic trend.',
    brief: 'Two deliverables were required simultaneously: a visual brand system (logo, game HUD, select-screen UI, marketing posters) and a defensible business case (target audience research, competitor analysis, revenue model, subscription tiers, retention mechanics, charitable incentive structure). The psychological brief for the brand was to achieve Aesthetic Coherence (Berlyne, 1971) — every visual element, from the pixelated counters to the Racing Red palette, had to produce a unified aesthetic experience that felt intentional at every resolution. The psychological brief for the business model was to design retention mechanics grounded in Self-Determination Theory (Deci & Ryan): autonomy (bike customization), competence (XP progression), and relatedness (community groups, friend chat).',
    goal: 'The brand goal was to make Nostalgia feel like a design decision rather than a technical default — to establish that 32-bit sprites are chosen because they are culturally meaningful, not because the studio cannot afford 3D rendering. The business goal was to design a player economy that respects player psychology: transparent pricing, multiple value tiers, and an Incentive Model that creates shared moral investment. The 15% profit earmark for road accident victims and injured racing competitors is an application of Moral Identity Theory (Aquino & Reed, 2002) — it gives players a values alignment reason to choose Horizon Zoom over Asphalt that is independent of gameplay quality.',
    problem: 'Asphalt crashes. Turbo Racer has been losing its fanbase because it is monotonous — both symptoms of the same underlying issue: Hedonic Adaptation without sufficient novelty injection. Most mobile racing games also design player economies that trigger Loss Aversion (Kahneman & Tversky, 1979) in negative ways — premium currency depletion feels like a loss, creating chronic low-grade frustration. Horizon Zoom addresses both: the retro aesthetic provides genuine novelty (contrast effect), and the subscription economy is structured around positive-sum gains (weekly XP and bounty challenges) rather than loss-prevention mechanics.',
    process: 'The pitch deck was structured using the Jobs-To-Be-Done framework (Christensen, 2016): each slide answers a specific functional, emotional, or social job the player is hiring a racing game to do. Target Audience and Competition slides establish the functional job (fast, fun racing with community features). Brand Identity and HUD design slides address the emotional job (feeling the nostalgia affect, feeling competent and cool). The Incentive Model slide addresses the social/moral job (being part of a values-aligned community). This three-layer structure is why the pitch feels complete — it accounts for all three dimensions of player motivation.',
    outcome: 'The Incentive Model slide is the standout: 15% of profits earmarked for road accident victims and injured racing competitors, 85% distributed equally among team members, excess earnings fed back as free-play bonuses to the community. This is Shared Value Creation (Porter & Kramer, 2011) applied to a gaming business model — profit generation and social purpose are structurally linked, not just rhetorically adjacent. The Competition slide lands because it makes a specific, falsifiable claim: 32-bit sprites reduce visual noise in fast-moving gameplay and produce lower crash rates in user testing than hyperrealistic environments. Nostalgia is the hook; game quality is the retention mechanism.',
    challenges: 'Making pixelated graphics look intentionally premium rather than accidentally dated was the core visual challenge. The solution was aesthetic contrast: pairing lo-res pixel counters and minimaps with high-quality 3D brand renders and the clean Futura typeface system. The visual hierarchy says: "We understand both registers and we are choosing the pixel one deliberately." The business model was equally hard: designing a subscription economy that avoids Dark Patterns (Brignull, 2010) while remaining commercially viable required multiple iterations on the currency conversion rates and tier differentiation.',
    tradeoffs: 'I leaned into the retro aesthetic as a brand feature rather than a limitation — the HUD uses pixelated counters which some would read as dated, but within this visual system they read as deliberate character. The tradeoff is a narrower aesthetic appeal (players who actively dislike retro aesthetics will not convert) in exchange for a much deeper emotional connection with the target demographic. I also kept the subscription economy broad (four tiers plus cosmetic currency) — accepting complexity in exchange for demonstrating that the business model is fully thought through rather than aspirationally sketched.',
    learnings: 'Horizon Zoom taught me that brand strategy and behavioral economics are the same discipline operating at different scales. The choice of a retro aesthetic is a behavioral prediction: I am predicting that nostalgic affect will increase emotional engagement in this demographic. The charitable incentive model is a behavioral prediction: moral identity salience will increase switching costs and reduce churn. Both predictions are testable. This is the version of design I find most intellectually interesting — not visual taste-making, but behavioral architecture with measurable hypotheses.',
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
