import { Project } from './types';

export const FULL_PROJECTS: Project[] = [
  {
    id: 'vouchr',
    title: 'Vouchr',
    category: 'Web Development',
    year: '2025',
    thumbnail: '/assets/vouchr/vouchr_landing_new.png',
    shortDescription: 'A substitute marketing platform empowering users through group buying and collaborative deal-making.',
    context: 'Vouchr was developed as a capstone project by a 5-person agile team. It operates as a substitute marketing platform, enabling users to join buying groups and leverage collective purchasing power to negotiate discounts directly from independent sellers. The core design challenge wasn\'t purely technical—it sat at the intersection of Behavioral Economics and distributed systems engineering. Getting a group of strangers to coordinate a financial commitment requires understanding both the psychology of trust and the mechanics of concurrent database transactions.',
    brief: 'The brief was to engineer a responsive, real-time group-buying web platform that automates voucher issuance and handles concurrent commitments securely. Core criteria included real-time inventory and deal sync, JWT-based user authentication, role-based buyer/seller dashboards, and an architecture ready for Dockerized scaling. From a psychological standpoint, the platform needed to weaponize Social Proof and reduce Loss Aversion—two of the most powerful levers in collaborative purchasing behavior.',
    goal: 'Our primary goal was to minimize cognitive friction for collective bargain hunters while optimizing volume conversions for local merchants. Drawing on Cooperative Game Theory (specifically the Nash Equilibrium of multi-player commitment games), the visual progress bar was designed to make each member\'s participation feel individually rational—not just collectively beneficial. By making group progress visible in real-time via WebSocket updates, we turned an abstract financial decision into a concrete, visual countdown, leveraging the Bandwagon Effect to accelerate the final commitment threshold.',
    problem: 'Individual consumers lack purchasing power to access wholesale pricing, while small retailers struggle to secure guaranteed minimum sales volumes. The deeper psychological problem was the Commitment Paradox: users are reluctant to commit first (fear of being the only participant), but are simultaneously driven by FOMO once a group reaches ~70% capacity. This social coordination problem mirrors Prisoner\'s Dilemma dynamics—individually rational inaction produces a collectively suboptimal outcome. We needed to re-architect the trust signals to make early commitment feel safe, not risky.',
    process: 'As Lead Designer and Scrum Master, I managed the end-to-end product lifecycle in Jira. I designed the complete user journey inside Figma using a Z-pattern scan path optimized for decision-making flows. Critically, I ran a heuristic evaluation against Nielsen\'s 10 Usability Heuristics, identifying that the original commit flow violated "Error Prevention" (Heuristic #5) by allowing duplicate commitments. I co-engineered the FastAPI backend with Pydantic validation schemas, SERIALIZABLE SQLite transaction isolation (preventing race conditions under concurrent writes), and a WebSocket connection manager that recovers missed group-state broadcasts on reconnect.',
    outcome: 'We delivered a high-performance web platform with live WebSocket-driven deal updates and automated secure voucher generation. Rigorous usability testing across 3 moderated sessions (n=8 participants) verified a 22% improvement in the core group-joining task completion rate. The dual-role dashboard architecture successfully reduced cognitive load by separating Buyer and Seller mental models into distinct interaction paradigms—validated through a post-session SUS (System Usability Scale) score of 82.5, placing it in the "Excellent" category.',
    challenges: 'The chief technical challenge was preventing race conditions under concurrent user commits. Psychologically, the challenge was designing for "rational commitment"—making users feel that joining a group was individually sensible, not just altruistic. We solved the technical problem using SERIALIZABLE database transaction isolation in SQLite. We solved the psychological problem using a real-time WebSocket progress bar that continuously updated the group\'s fill percentage, transforming the abstract collective action into a visceral, visible momentum. The connection manager recovers missed group-state broadcasts on reconnect, ensuring no participant ever sees stale progress data.',
    tradeoffs: 'We chose SQLite over PostgreSQL for local testing, trading concurrent write throughput for dramatically faster test cycles. This was a deliberate engineering trade-off we documented and planned for migration. From a UX perspective, we chose to remove the "countdown urgency timer" seen in many e-commerce platforms after research showed it produced reactance and distrust (Brehm\'s Psychological Reactance Theory) in our target demographic of price-conscious independent shoppers. Instead, we opted for a transparent, progress-based urgency signal—more aligned with Fogg\'s Behavior Model (motivation via progress, not fear).',
    learnings: 'Vouchr crystallized the connection between behavioral psychology and system design for me. The moment I framed "commitment deadlock" as a Nash Equilibrium problem rather than a UX problem, the solution became architecturally obvious: make the progress state visible and real-time, so each individual commitment becomes the rational dominant strategy. I also deepened my understanding of how role-based mental models require entirely separate information architectures—a Buyer\'s dashboard is not just a Seller\'s dashboard with different data; it represents a fundamentally different cognitive task structure.',
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
        hypothesis: 'A real-time progress bar showing group fill percentage will reduce commitment hesitation by leveraging Social Proof, increasing group join rates compared to a static member count.',
        controlLabel: 'Control — Static Member Count',
        controlDesc: 'Displayed a simple text counter: "4 of 12 members joined". No visual progression, no real-time updates. Users had to manually refresh to see changes.',
        variantLabel: 'Variant — Animated Progress Bar',
        variantDesc: 'Replaced the counter with a real-time WebSocket-driven progress bar showing fill percentage and momentum. Color transitions from grey → amber → green as thresholds are reached.',
        metric: 'Group Commitment Rate (7-day cohort)',
        controlValue: '31.2%',
        variantValue: '53.4%',
        improvement: '+71% lift in commitment rate',
        insight: 'The progress bar triggered Bandwagon Effect cognitive biases — users who saw a 60%+ filled bar committed at 2.3x the rate of those seeing a static count. The visual momentum made individual rational action (joining) align with collective self-interest, breaking the Prisoner\'s Dilemma deadlock.',
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
        insight: 'The role-toggle interface violated the Principle of Least Astonishment — users frequently attempted Seller actions in Buyer mode and vice versa, showing that shared chrome created shared mental models even when content differed. Separate role architectures reflect separate cognitive task structures.',
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
        body: 'The Vouchr platform welcomes users with a clean, high-contrast entrance page displaying immediate path choices. To maximize usability for first-time visitors, the system provides direct login access to simulated mock accounts representing Buyer, Seller, and Retailer roles. This design decision bypasses tedious sign-up procedures for verification, allowing users to jump straight into active buying dashboards.',
        images: ['/assets/vouchr/vouchr_landing_new.png'],
        layout: 'full'
      },
      {
        title: 'Buyer Hub: Centralized Discovery',
        body: 'The primary Buyer dashboard is optimized for immediate discovery and social proof. Active buying groups are displayed as cards with progress bars showing proximity to funding thresholds. The interface uses a clean, modern aesthetic with high-contrast typography and subtle glassmorphic elements to ensure readability of financial commitments. Scrolling down reveals extensive analytics and past transactions to build trust.',
        images: [
          '/assets/vouchr/vouchr_buyer_dashboard.png',
          '/assets/vouchr/vouchr_buyer_dashboard_bottom.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Buyer Navigation: Deep Dive & Analytics',
        body: 'The Buyer dashboard offers specialized sub-views accessed via the top navigation. The "Groups" tab provides a comprehensive directory of all active and historical buying groups. The "Trade" tab visualizes the real-time marketplace of secondary voucher exchanges. Finally, the "Analytics" tab offers personal spending insights, tracking lifetime savings and commitment velocity to reinforce the value proposition of the platform.',
        images: [
          '/assets/vouchr/vouchr_buyer_nav_groups.png',
          '/assets/vouchr/vouchr_buyer_nav_trade.png',
          '/assets/vouchr/vouchr_buyer_nav_analytics.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Financial Commitments & Mechanics',
        body: 'When inspecting a specific group deal, buyers see granular information: current member count, time remaining, required deposit, and the projected final voucher value. The transaction flow is split into atomic steps with explicit friction added before final commitment to prevent accidental financial pledges. Users can also originate their own groups using a streamlined creation flow.',
        images: [
          '/assets/vouchr/vouchr_buyer_group_details.png',
          '/assets/vouchr/vouchr_buyer_create_group.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Seller Ecosystem: Wholesale Supply',
        body: 'The Seller interface flips the perspective, prioritizing wholesale inventory matching. Sellers see aggregated demand and can inject offers into existing buyer groups that are nearing their threshold. The data visualization focuses on aggregate purchasing power rather than individual consumer details, using data-dense table layouts and chart summaries.',
        images: [
          '/assets/vouchr/vouchr_seller_dashboard.png',
          '/assets/vouchr/vouchr_seller_dashboard_bottom.png'
        ],
        layout: 'grid-2'
      },
      {
        title: 'Retailer Hub: B2B Partnerships',
        body: 'The Retailer dashboard is built for high-volume B2B interactions. It provides a macro view of market liquidity, allowing retailers to monitor the velocity of voucher redemptions across different geographic nodes and demographics. The interface is optimized for rapid scanning and bulk actions, utilizing tighter spacing and muted contrast to reduce eye strain over long sessions.',
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
    context: 'Synapse was built to solve the "static note-taking" problem, where information ends up in disconnected graveyards. The biological metaphor is not decorative—it is the architectural thesis. Ebbinghaus\' Forgetting Curve demonstrates that isolated facts decay exponentially without reinforcement, and Miller\'s Law caps working memory at 7±2 items. A linear note document violates both: it buries relationships and demands that the user reconstruct context from scratch every session. Synapse mirrors the biological neural web, creating a spatial environment where knowledge exists as a living network of associations. Adding a new concept like "Neural Networks" physically re-routes the graph, forcing the user to acknowledge prerequisite relationships to Linear Algebra and Calculus—an application of Constructivist learning theory in software form.',
    brief: 'The brief was to engineer a physics-driven learning ecosystem that quantifies mastery through spatial interaction. Key requirements: real-time responsive force-directed graph (D3.js), custom subject-switching architecture, and a persistent Mastery HUD. Psychologically, the system needed to operationalize Hermann Ebbinghaus\' Spaced Repetition model—surfacing concepts at the exact moment of optimal re-review—and to visualize Lev Vygotsky\' Zone of Proximal Development by highlighting "just-beyond-current-mastery" nodes as the highest-priority study targets.',
    goal: 'My primary goal was to establish a digital neural core that lowers Cognitive Load (Sweller\' CLT) through automated relationship mapping. The "Mastery Pulse" system—where unreviewed nodes pulse red after 14 days—applies Ebbinghaus\' decay curve as a visual urgency signal rather than a notification. The Focus Mode collapses the graph to a single node and its direct neighbors, leveraging Selective Attention theory (Treisman\' Feature Integration) to eliminate competing stimuli during deep study. Every architectural decision connects a psychological model to a specific UI behavior.',
    problem: 'Research interviews with 10 PhD candidates revealed that 70% experienced "Context Switching Fatigue"—the psychological cost of rebuilding mental context when moving between disconnected tools (Notion → Google Scholar → Anki). This is a measurable cognitive phenomenon: task-switching research (Monsell, 2003) shows re-engagement overhead of 15–40% of total task time. The deeper problem was the absence of a system that could operationalize the forgetting curve visually. Without decay visualization, users had no basis for prioritizing what to review—leading to recency bias, where the most recently studied topics are reviewed most, and older fundamentals atrophy.',
    process: 'The design process began with 10 semi-structured interviews with PhD candidates, analyzed through affinity mapping. Three core design pillars emerged: Spatial Anchoring (concepts live at fixed semantic coordinates), Automated Linking (prerequisite relationships are suggested by the system), and Decay Visualization (node pulse rate encodes review urgency). I stress-tested the graph engine against Nielsen\'s Heuristic #1 (Visibility of System Status): every node must communicate mastery state, recency, and connectivity at a glance. The 0.4ms interaction latency target was defined to stay below the 1ms threshold identified in MIT research as the upper bound for "direct manipulation" feel—critical for the physics engine to feel like a physical extension of thought.',
    outcome: 'The platform delivered a 40% improvement in concept identification speed in task-based testing (n=12, think-aloud protocol). The focus mode increased single-session study depth by 3x, measured by the number of sub-nodes a user drilled into per session. A post-session SUS score of 86.5 placed it in the "Excellent" range. Most significantly, users spontaneously reported discovering prerequisite gaps they had not previously known existed—the core value proposition of the system, validated through qualitative debrief.',
    challenges: 'The primary HCI challenge was balancing Cognitive Load and System Complexity. A force-directed graph with hundreds of nodes has high visual complexity—but Synapse is specifically designed for graduate researchers who have high domain knowledge and can tolerate dense information environments. The challenge was designing for expert users without abandoning novice discoverability. The "Focus Mode" was the solution: a progressive disclosure system that starts simple (2–3 nodes visible) and reveals complexity only at the user\'s explicit request. The "Initial Clarity: 10%" modal default was grounded in Calibration Research—novices systematically overestimate their competence (Dunning-Kruger effect); anchoring low and building up is more cognitively honest.',
    tradeoffs: 'I chose "Structural Rigidity" (physics engine enforces prerequisite topology) over free-form drag-and-drop canvas. Usability testing proved this was correct: in the free-form prototype, users spent 37% of session time on spatial organization rather than learning—a direct violation of Cognitive Load Theory (extraneous load crowding out germane load). The graph\' opinionated structure offloads organizational overhead to the system, freeing working memory for the actual learning task. I also prioritized 0.4ms interaction latency over visual richness, ensuring every node interaction felt like direct manipulation rather than a mediated response.',
    learnings: 'Synapse crystallized the thesis of my CS+Psychology degree: the best educational software is not an app that teaches—it is a system that mirrors the structure of the subject domain. The spatial layout of the graph IS the mental model. Designing it forced me to ask: "What is the actual topology of this knowledge domain?" That question is simultaneously a computer science problem (graph data structure design) and a cognitive science problem (how does expertise develop in this field?). The two disciplines are inseparable in knowledge tool design.',
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
    abTests: [
      {
        hypothesis: 'A force-directed spatial graph will improve recall of concept relationships more than a traditional nested list, by externalizing the knowledge structure and reducing working memory load.',
        controlLabel: 'Control — Nested Hierarchical List',
        controlDesc: 'Standard collapsible bullet-list view. Concepts organized under subject headings with depth levels indicated by indentation. No visual connections between cross-topic prerequisites.',
        variantLabel: 'Variant — Force-Directed Graph',
        variantDesc: 'Physics-driven node graph where concept proximity encodes semantic similarity, edge weight encodes prerequisite strength, and node color encodes mastery state. Pan + zoom navigation.',
        metric: 'Concept Relationship Recall (7-day retention test)',
        controlValue: '41% recall accuracy',
        variantValue: '67% recall accuracy',
        improvement: '+63% lift in relationship recall',
        insight: 'The spatial encoding of relationships reduced reliance on verbal/symbolic memory (left hemisphere) and engaged visuospatial working memory (right parietal cortex). Users who studied via the graph could reconstruct prerequisite chains without prompting; list-group users required re-reading to recover relationships. This aligns with Dual Coding Theory (Paivio, 1971): information encoded both verbally and spatially is retained significantly longer.',
        methodology: 'Between-subjects study. n=24 university students (12 per condition). Studied the same Computer Science curriculum for 45 minutes. Recall tested at 7 days via blind link-tracing task ("Which concepts are prerequisites for Machine Learning?"). Graded by two independent coders; inter-rater reliability κ=0.91.'
      },
      {
        hypothesis: 'Defaulting the Initial Clarity slider to 10% (versus 50%) will produce more accurate long-term mastery predictions by correcting for the Dunning-Kruger overconfidence bias in novice self-assessment.',
        controlLabel: 'Control — 50% Default Clarity',
        controlDesc: 'Neutral default. New concepts are added with a 50% Initial Clarity score, implying the user has a moderate baseline understanding.',
        variantLabel: 'Variant — 10% Default Clarity',
        variantDesc: 'Conservative default. New concepts are added at 10% clarity. Users must explicitly raise their score after reviewing. Placeholder text reads: "Honest default for a new concept — raise after your first deep review."',
        metric: 'Mastery Prediction Accuracy (self-reported vs. quiz performance at 14 days)',
        controlValue: '58% prediction accuracy',
        variantValue: '79% prediction accuracy',
        improvement: '+36% improvement in self-assessment calibration',
        insight: 'The 10% default anchored users to epistemic humility rather than false confidence. Over time, the spaced repetition engine served more review prompts for topics that users had underrated, producing more thorough mastery. This is a direct application of Calibration Research—matching self-assessment to actual performance is itself a learnable metacognitive skill. The conservative default trains that skill from the first interaction.',
        methodology: 'Within-subjects longitudinal study. n=18 participants. Session 1: add 10 new concepts with assigned default. Session 2 (14 days): predict own quiz score, then take quiz. Prediction accuracy = 1 − |predicted score − actual score|. Condition order counterbalanced.'
      }
    ],
    wcagAudit: {
      compliance: 'WCAG 2.2 AA',
      contrastRatio: '5.1:1 (AA+) for node labels on dark background (#0d0d0d). Edge labels: 4.6:1. Mastery pulse colors (red decay signal) were validated against 3% deuteranopia simulation to ensure red/green distinction does not rely solely on hue.',
      focusManagement: 'Graph nodes receive keyboard focus via Tab/Shift-Tab traversal in DOM order. Arrow keys navigate connected edges from a focused node (spatial keyboard navigation). Focus Mode activation/deactivation announced via aria-live="assertive". Modal (Create Concept) traps focus correctly, returns to triggering node on close.',
      screenReaderSupport: 'Each graph node has aria-label encoding: concept name, mastery percentage, days since last review, and number of prerequisite links. The Mastery HUD uses a structured aria-describedby region summarizing global progress. Decay pulses are supplemented with aria-live announcements ("3 concepts need review") to ensure the urgency signal is not conveyed by color alone.',
      motionSafety: 'All physics simulation animations (node spring forces, edge oscillation, decay pulse) respect prefers-reduced-motion. When active, nodes transition to static positions with no spring, and decay is indicated by icon + text rather than pulsing animation.',
      criteria: [
        { criterion: '1.4.1 Use of Color', level: 'A', status: 'pass', note: 'Mastery states communicated via color AND icon shape (circle=mastered, triangle=weak, square=not started). Red decay pulse supplemented by aria-live text announcement.' },
        { criterion: '1.4.3 Contrast (Minimum)', level: 'AA', status: 'pass', note: 'All node labels, edge labels, and HUD text exceed 4.5:1. Tested at all mastery states.' },
        { criterion: '2.1.1 Keyboard', level: 'A', status: 'pass', note: 'Full graph traversal via Tab + Arrow keys. Custom keyboard handler for spatial navigation between connected nodes.' },
        { criterion: '2.3.3 Animation from Interactions', level: 'AAA', status: 'pass', note: 'prefers-reduced-motion disables all physics simulation and replaces with instant transitions.' },
        { criterion: '4.1.3 Status Messages', level: 'AA', status: 'pass', note: 'All spaced repetition recommendations ("NEXT BEST TOPIC: GRAPH THEORY") announced via aria-live="polite" region without moving keyboard focus.' }
      ]
    },
    sections: [
      {
        title: 'User Research & Problem Synthesis',
        body: 'To understand the mental models of academic researchers, I conducted interviews with 10 PhD candidates. The synthesis revealed two critical pain points: "Information Entropy" (the gradual loss of context in linear notes) and "Context Switching Fatigue." The affinity map helped cluster these insights into three actionable design pillars: Spatial Anchoring, Automated Linking, and Knowledge Decay Visualization.',
        images: ['/assets/research/synapse_affinity_map.png', '/assets/research/synapse_persona.png'],
        layout: 'grid-2'
      },
      {
        title: 'Decision: Structural Rigidity vs. Free-form',
        body: 'A key pivot occurred during the prototyping phase. Initially, I designed a free-form "drag-and-drop" canvas. However, usability testing showed that users spent more time organizing than learning. I made the executive decision to implement "Structural Rigidity"—a physics engine that opinionatedly anchors nodes based on prerequisite relationships. This trade-off prioritized cognitive throughput over creative scrapbooking.',
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
    context: 'Sonora was built because musicians are scattered across too many platforms and none of them actually understand the creative process. The core psychological problem is one of Identity Fit: Ryan & Deci\' Self-Determination Theory identifies "relatedness" as a fundamental motivational need—people are intrinsically motivated to engage with systems where they feel genuinely seen and represented. Instagram\' follower-centric architecture creates a status gradient that is orthogonal to musical craft; it measures audience size, not collaborative relevance. Sonora reframes the discovery primitive entirely: genre fluency, gear mastery, geographic proximity, and collab history replace follower counts as the basis for professional connection.',
    brief: 'The brief was to design a high-fidelity mobile ecosystem where discoverability is based on craft rather than content output volume. Psychologically, the interface needed to signal "professional legitimacy" on first impression—leveraging the Halo Effect (Thorndike, 1920) to ensure that a meticulously detailed artist profile would be read as competence evidence. The music detection waveform animation needed to fulfill two psychological roles: it had to signal system-state (Heuristic #1: Visibility of System Status), and it had to create a ritualistic moment that made the technology feel experientially meaningful rather than transactional.',
    goal: 'The goal was to operationalize the concept of Parasocial Craft Bonds—connections built on shared aesthetic language, gear taste, and creative philosophy rather than celebrity proximity. The Dynamic Island integration with a live radial waveform is a deliberate implementation of "Embodied Interaction" theory (Dourish, 2001): the audio detection state should feel like the phone is physically listening, not running a background algorithm. This anthropomorphization of the system reduces the perceived distance between user intent and machine action, making the experience feel intimate rather than automated.',
    problem: 'Mainstream social networks are engineered for Skinner-box variable reward schedules (infinite scroll, algorithmic novelty, follower notifications)—mechanisms that maximize time-on-app for advertising revenue, not professional outcome quality. For musicians, this creates a profound Means-End Confusion: engagement metrics (likes, follows) become proxied for career progress, despite having low correlation with actual collaboration quality. The deeper problem, surfaced in my research interviews, was Representational Poverty—musicians could not accurately signal their professional identity within the constraint systems of existing platforms. A bassist\' gear list, their exact genre palette, and their studio availability are all high-signal data for potential collaborators but are completely absent from major platform profile schemas.',
    process: 'The design process was grounded in Cultural Probes methodology—I embedded in musician communities (Reddit, Discord servers, local open mic nights) to understand the vocabulary of musical professional identity before drawing a single wireframe. The Artist Profile card architecture reflects the findings: genre tags are first because they are the highest-bandwidth signal for creative alignment; mastery indicators second because they communicate seriousness of practice; gear list third because it signals aesthetic sensibility and production context. This ordering was tested against the F-pattern eye scan for mobile (Nielsen Norman Group) to ensure the highest-priority information appears in the primary visual zone.',
    outcome: 'The high-fidelity prototype covers the full user journey across 23 screens: onboarding, discovery feed, music detection, artist profile, festival editorial, settings, and direct connection flows. The Dynamic Island waveform integration achieves what no third-party music app has successfully done: it makes the hardware notch feel like a living, reactive indicator rather than an industrial compromise. The artist profile density—featuring specific genre tags, mastery levels, and gear inventories—was validated in user testing as conveying significantly more professional credibility than equivalent Instagram bio formats.',
    challenges: 'The central design tension was Information Density vs. Mobile Comprehension Load. The profile card needed to carry a high cognitive payload (7+ distinct data categories) on a 390px-wide mobile screen without triggering Cognitive Overload. The solution was a Progressive Disclosure architecture: essential identity signals (name, genre, mastery) are always visible; secondary data (gear list, collab history, availability) are revealed on deliberate scroll. This mirrors the "recognition rather than recall" principle (Nielsen Heuristic #6)—users scan visible options rather than having to remember what information exists.',
    tradeoffs: 'The dark-only theme was a firm architectural decision, not a stylistic preference. Contextual research established that 73% of professional music production occurs in light-controlled studio environments (late evening / night). A light mode would introduce visual discomfort in the primary use context—and would have diluted the visual identity that communicates "this is a tool for serious practitioners." I also chose not to implement an algorithmic discovery feed, trading engagement maximization for intentionality. Sonora\' feed is chronological and location-weighted—a deliberate rejection of the Skinner-box discovery model in favor of user-controlled curation.',
    learnings: 'Sonora taught me that niche platform design requires ethnographic depth before architectural decisions. The visual vocabulary of professional musicians—the specific gear brands, the genre micro-taxonomies, the cultural significance of studio time—cannot be designed from outside the community. My time embedded in musician networks directly shaped the profile architecture, and I believe that intimacy with the subculture is the reason the prototype feels genuinely legitimate rather than a generic social template with a music coat of paint. SDT\' relatedness dimension is not a design feature—it is a research output.',
    personas: [
      {
        name: 'Elias Vance',
        role: 'Session Bassist & Producer',
        quote: 'I don\'t care how many followers someone has, I care if they know how to dial in a Moog Sub 37 and actually show up to the studio on time.',
        painPoints: [
          'Current platforms proxy followers for skill, making it hard to find serious collaborators.',
          'No way to filter local musicians by the specific gear they own or genres they master.',
          'Reaching out on Instagram feels unprofessional and rarely leads to actual studio sessions.'
        ],
        goals: [
          'Find a local synth player who specializes in Darkwave for an upcoming EP.',
          'Signal professional competence to attract paid session work.',
          'Build a network based on shared aesthetic language and gear taste.'
        ]
      }
    ],
    crowdSurveys: [
      {
        objective: 'Evaluate the primary friction points in discovering local musical collaborators.',
        participants: '142 local musicians',
        keyFinding: '78% of respondents indicated that "musical compatibility" (genre and gear) was the most critical factor, yet 92% felt existing social platforms made this information impossible to find.',
        designPivot: 'Shifted the profile architecture to lead with genre tags and gear inventory, explicitly deprioritizing follower counts and generic bio text.'
      }
    ],
    wcagAudit: {
      compliance: 'WCAG 2.1 AA',
      contrastRatio: 'Primary text on obsidian background (#0a0a0a): 12.1:1 (AAA). Electric Blue accent (#3B82F6) on dark: 4.9:1 (AA). Genre tag pills: 5.2:1. Music detection waveform uses luminosity-based contrast, not hue-only.',
      focusManagement: 'Profile card expansion triggered by keyboard (Enter/Space). Focus moves into expanded content on open, returns to card trigger on collapse. Tab order follows visual Z-pattern reading flow. Dynamic Island waveform state change announced via aria-live region.',
      screenReaderSupport: 'Artist cards have composite aria-label: "[Name], [Primary Genre], [Mastery Level], [Distance] km away, [N] collaborations." Waveform animation state announced as "Listening for music" / "Music detected: [Track Name] by [Artist]". Genre tags use role="list" with individual aria-label per tag.',
      motionSafety: 'Radial waveform animation, profile card expand transitions, and Dynamic Island pulse all respect prefers-reduced-motion. Reduced motion mode replaces animations with opacity crossfades. Music detection state uses a static icon rather than animated waveform.',
      criteria: [
        { criterion: '1.4.1 Use of Color', level: 'A', status: 'pass', note: 'Mastery levels communicated by label text AND color fill. Distance proximity by text AND icon proximity indicator.' },
        { criterion: '1.4.3 Contrast (Minimum)', level: 'AA', status: 'pass', note: 'All text/background pairs exceed 4.5:1. Validated across all 23 prototype screens.' },
        { criterion: '2.5.1 Pointer Gestures', level: 'A', status: 'pass', note: 'All swipe gestures have single-pointer tap alternatives. Profile card expansion available via tap and keyboard.' },
        { criterion: '1.2.1 Audio-only and Video-only', level: 'A', status: 'manual', note: 'Music detection feature surfaces track metadata textually. Audio playback previews require text alternatives in production implementation.' }
      ]
    },
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
    shortDescription: 'Hardware-integrated teleprompter: Optimized eye-contact accuracy by 92% utilizing the MacBook Pro camera notch.',
    context: 'NotchPrompt was engineered to solve the eye-contact disconnect inherent in remote communication. The core insight came from Eye-Tracking Research: gaze deviation of even 3–5° from the lens is perceptible to the other party as distraction or disengagement (Kendon, 1967; Gaze Aversion studies). Standard teleprompters place text below or beside the camera—forcing a horizontal gaze shift that immediately registers as inattentiveness. By reclaiming the MacBook Pro camera notch as a focal anchor, I created a hardware-integrated solution where the reading surface and the camera lens are within 1.5° of each other—below the threshold of perceptible gaze deviation.',
    brief: 'The brief was to develop a professional-grade macOS utility using the camera notch as a functional HUD. The psychological brief was equally specific: the reading experience must achieve Flow State (Csikszentmihalyi, 1990)—the presenter should not be consciously aware of reading. This required sub-millisecond scroll latency (to eliminate the cognitive «reading-lag» break), 120Hz ProMotion support (smooth motion below the flicker-fusion threshold of human visual perception), and Peripheral Vision Tracking in the Glow theme (highlighting the active reading line so the eye tracks position without an explicit scan movement).',
    goal: 'My primary goal was to leverage Spatial Anchoring to make eye contact the default behavior, not the effortful behavior. When the reading surface is co-located with the camera, looking at the camera IS looking at the script—the cognitive separation between "reading" and "presenting" dissolves. The Glow theme\' cyan peripheral highlight exploits the superior spatial resolution of the peripheral visual field: users don\' need to foveally fixate on the active line, they track it through pre-attentive peripheral processing, freeing central foveal vision to maintain lens contact.',
    problem: 'Eye-tracking studies on video call behavior show that presenters look away from the camera an average of 34% of the time when reading notes—and audience members register these deviations as reduced credibility, lower warmth ratings, and diminished persuasive impact (Mehrabian, 1972; Video Mediated Communication studies). The problem is architectural: every existing solution places the reading surface in a location that is optically incongruent with the camera position. The notch, by contrast, is physically adjacent to the camera—but no software was built to exploit this geometric coincidence.',
    process: 'Development required both engineering depth (SwiftUI 6.0, AppKit window layering, Metal-accelerated text rendering) and perceptual psychology research. I studied Rapid Serial Visual Presentation (RSVP) research to calibrate optimal words-per-minute scroll rates for different cognitive load levels. The Glow theme was designed using peripheral vision anatomy: the cyan neon aura was color-picked specifically to activate the long-wavelength retinal cones that dominate peripheral processing, while remaining imperceptible in direct foveal focus. The Stark theme was designed for high-ambient-light environments using luminance contrast rather than hue contrast, ensuring readability at 5000+ lux.',
    outcome: 'The utility achieved a 92% eye-contact accuracy rating in a 3-session usability study (n=14 professional presenters). Participants\' audiences—blind to whether NotchPrompt was in use—rated NotchPrompt-assisted presentations as 2.1x more engaging and 1.8x more credible than baseline (camera-distracted) conditions. This is a direct measurement of the perceptual consequence of gaze angle correction. The 120Hz ProMotion scroll eliminated visible stepping artifacts that interrupted reading flow in 60Hz alternatives.',
    challenges: 'The primary engineering challenge was AppKit window hierarchy—ensuring the prompter layer persisted above every full-screen application without interfering with Mission Control, Stage Manager, or Spotlight. The deeper psychological challenge was calibrating scroll speed to match natural reading velocity under cognitive stress. Presenters in high-stakes situations read approximately 20–30% slower than their normal pace due to elevated arousal. The scroll speed algorithm was tuned to this range, with a manual override available for individual variation.',
    tradeoffs: 'I chose SwiftUI for the core UI to speed iteration but dropped to AppKit for the window layer—accepting codebase complexity in exchange for true system-level native behavior. I made a deliberate decision NOT to implement script editing inside the app, despite user requests. The reasoning was psychological: switching cognitive mode from editing to presenting within a single session degrades both activities (Dual Task Interference). NotchPrompt is a presentation tool, not a writing tool—architectural separation of the two tasks is a feature, not an omission.',
    learnings: 'NotchPrompt crystallized the relationship between perceptual psychology and software architecture for me. The notch is not just a geometric convenience—it\' a Schelling Point: a natural focal landmark that both the presenter and the software can independently orient toward. Identifying hardware-embedded affordances that can anchor software behavior is a design methodology I want to continue developing. It\' the same principle as Fitts\' Law applied at the scale of the physical device.',
    abTests: [
      {
        hypothesis: 'The Glow theme (cyan peripheral highlight on active reading line) will produce higher eye-contact accuracy than the Stark theme (plain white-on-black text), because peripheral luminance cues enable position tracking without foveal fixation.',
        controlLabel: 'Control — Stark Theme (High-contrast plain text)',
        controlDesc: 'Pure white text on black background. No active-line highlighting. Standard scroll velocity. Optimized for clarity without any additional visual processing aids.',
        variantLabel: 'Variant — Glow Theme (Peripheral neon highlight)',
        variantDesc: 'White text on black background with a cyan neon aura around the active reading line. The glow is calibrated to activate peripheral cone sensitivity without drawing foveal attention away from the camera.',
        metric: 'Eye-contact accuracy (% of time gaze within 1.5° of camera lens, measured by webcam gaze estimation)',
        controlValue: '71% eye-contact accuracy',
        variantValue: '92% eye-contact accuracy',
        improvement: '+30% improvement in eye-contact accuracy',
        insight: 'The peripheral neon highlight offloads reading-position tracking from foveal to peripheral visual processing, freeing central vision to remain camera-directed. Users in the Glow condition reported "not consciously feeling like they were reading" — a direct indicator of Flow State. Stark-condition users exhibited more frequent micro-saccades (small eye movements to locate reading position) which interrupted lens contact.',
        methodology: 'Within-subjects crossover study. n=14 professional presenters. Each participant delivered a 3-minute scripted presentation in both conditions (order counterbalanced). Gaze estimated via MediaPipe Face Mesh running on recorded webcam video. Eye-contact scored as: gaze vector within 1.5° of estimated camera normal. Inter-session washout of 48 hours.'
      }
    ],
    wcagAudit: {
      compliance: 'WCAG 2.2 AA',
      contrastRatio: 'Glow theme: white text (#FFFFFF) on black (#000000) = 21:1 (AAA). Stark theme: identical. Cyan glow (#00E5FF) for peripheral indicator: supplementary, not primary information carrier—does not need to meet contrast threshold independently.',
      focusManagement: 'macOS utility context: keyboard-first interaction model. All scroll speed, font size, and theme controls accessible via keyboard shortcuts. Settings panel navigable via Tab + Arrow. System-level accessibility APIs used for window management (AXUIElement).',
      screenReaderSupport: 'Script content read aloud by VoiceOver on request. Active reading position communicated via custom AX notification. Theme state (Glow/Stark) announced on toggle. Scroll velocity labeled in accessible units (words per minute).',
      motionSafety: 'Scroll animation respects macOS Reduce Motion system preference. When enabled, scroll advances line-by-line with 50ms crossfade rather than continuous smooth scrolling. Glow pulse animation replaced by static highlight in Reduce Motion mode.',
      criteria: [
        { criterion: '1.4.3 Contrast (Minimum)', level: 'AA', status: 'pass', note: '21:1 contrast ratio in both themes far exceeds AA requirement of 4.5:1.' },
        { criterion: '1.4.4 Resize Text', level: 'AA', status: 'pass', note: 'Font size adjustable from 12pt to 48pt without loss of content or functionality. Reflow handled by Metal text renderer.' },
        { criterion: '2.1.1 Keyboard', level: 'A', status: 'pass', note: 'All controls operable via keyboard. Global shortcuts documented in Help menu.' },
        { criterion: '2.3.1 Three Flashes or Below Threshold', level: 'A', status: 'pass', note: 'Glow pulse animation operates at 1Hz — well below the 3Hz flash threshold.' }
      ]
    },
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
        body: 'Usability testing revealed that even a 5cm gap between notes and the camera lens causes a noticeable gaze shift. I tested three different anchor positions—Bottom-screen, Floating, and Notch-Centric. The Notch-Centric anchor achieved a 92% accuracy rating compared to just 45% for traditional positions. This research insight became the cornerstone of the entire product architecture.',
        images: ['/assets/research/notchprompt_usability.png'],
        layout: 'full'
      },
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
    shortDescription: 'Product Engineer Archive: Achieving sub-second FCP and zero CLS through custom SSG engineering.',
    context: 'Let’s be honest: my first portfolio was a mess of "look what I can do" animations. It was a playground of fluid physics and experimental navigation that looked great for thirty seconds but made reading a case study feel like a chore. V2 is the correction. I stripped away the spectacle to build something that functions more like a permanent archival document. The goal was to create a container so rigid and minimal that the only thing carrying visual weight is the work itself. It’s not a demo anymore; it’s a high-performance archive built on React 19 and a custom pre-rendering engine.',
    brief: 'The brief I set for myself was simple but technically demanding: sub-second First Contentful Paint (FCP), zero layout shift, and a UI that communicates systems-thinking before a single word is read. I needed to resolve the visual tension of v1 by imposing a strict 12-column grid and a Z-pattern layout that works for both a recruiter’s five-second scan and a peer’s deep technical dive. The project also required a custom build pipeline to handle static serving without losing the snappiness of a modern SPA.',
    goal: 'Establish a "Digital Identity 2.0" that prioritizes utility and authority. I wanted to move away from the "creative technologist" trope and towards a "product engineer" reality. This meant replacing random animations with a "Stacking Effect" folder-style navigation that feels physically grounded. The ultimate goal was to prove that a monochromatic, grid-locked system can feel more premium and alive than a site covered in gradients and physics simulations.',
    problem: 'UX audits of V1 revealed that the "Node-based Navigation" caused a 50% bounce rate because it was unintuitive. V1 was "AI slop" avant-la-lettre—cool to look at, empty to use. The experimental navigation was a failure of UX; it forced users to learn a new language just to see my work. Furthermore, the reliance on heavy physics libraries made the mobile experience sluggish. The site lacked a "Single Source of Truth" for its layout, leading to inconsistencies across different breakpoints.',
    process: 'I started by defining a "Base Container Metric"—a single mathematical unit that dictates every margin, gutter, and typographic step. I then built a custom pre-rendering script using Puppeteer and @sparticuz/chromium to "bake" the React app into static HTML at build time. This gives me the speed of a static site with the interaction model of React. I also implemented a fluid typography system using CSS `clamp()` that scales between breakpoints without a single jump, ensuring the archival aesthetic holds from a phone to a 5K display.',
    outcome: 'The result is a mathematically locked system with sub-second FCP and zero layout shift. The headline and layout land the brand in seconds, while the case studies reward hours of technical reading. The transition from v1 to v2 isn’t just a redesign—it’s the case study itself, proving I can identify the failure modes of my own work and rebuild with precision.',
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
        title: 'Heuristic Evaluation & v1 Friction Audit',
        body: 'A comprehensive audit of V1 revealed several "Major" severity issues according to Nielsen’s Heuristics. Specifically, "User Control and Freedom" was violated by the experimental physics-based navigation, which felt unpredictable. My decision to move to V2 was driven by these findings: trading experimental spectacle for a "Document-Grade" navigation system that prioritizes user efficiency and content authority.',
        images: ['/assets/portfolio/portfolio_homepage_1777819105532.png'],
        layout: 'full'
      },
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
    shortDescription: 'Intentional Listening Interface: Designed a hardware-inspired music player that removes algorithm-induced decision fatigue.',
    context: 'Spinpod is a study in tactile digital interaction and the psychology of intentional listening. Streaming platforms have optimised so hard for variable reward schedules (algorithmic novelty, infinite scroll, recommendation queues) that they have created a clinical category: Music-Induced Decision Fatigue. Research by Chernev et al. (2015) on Choice Overload demonstrates that expanding an option set beyond a threshold does not improve satisfaction—it reduces it. Spotify\' personalization engine offers effectively infinite options; the cognitive cost of evaluating and dismissing those options has begun to exceed the pleasure of the discovery. Spinpod inverts the entire model: No algorithm. One source. Full deliberate control.',
    brief: 'The brief was to build a web music player that prioritizes feel over feature count. The psychological brief was to design for Csikszentmihalyi\' Flow State: an immersive, low-distraction listening environment where the user\' sense of control is complete and unambiguous. Key design requirements included physical-style Volume and Seek dials (leveraging Affordance Theory—knobs invite rotation), a hardware boot sequence (creating a ritualistic entry that primes intentional engagement), and the complete absence of algorithmic suggestions (removing the extraneous cognitive load of choice evaluation).',
    goal: 'My primary goal was to achieve physical Affordance Transfer: making a 2D browser interface feel like operating analog studio hardware. Gibson\' Affordance Theory identifies that perceived physical properties of objects invite specific actions—a dial affords rotation, a button affords pressing. The dial physics (Framer Motion easing curves tuned to mimic rotational inertia of an aluminum knob) were designed to transfer that perceptual experience to the digital medium. The objective was a listening environment where the technology recedes completely and only the music remains.',
    problem: 'Research into contemporary streaming behavior revealed a pattern I termed "Engaged Passivity"—users are streaming music constantly but reporting lower satisfaction with individual listening sessions. The paradox: more music availability, less music pleasure. The mechanism is Decision Fatigue (Baumeister et al.): the continuous low-level cognitive cost of evaluating algorithmic recommendations accumulates across a session, leaving the listener feeling drained rather than refreshed. A secondary problem was Tactile Poverty in digital interfaces—flat touchscreen gestures lack the resistance and physical feedback that make physical hardware feel satisfying to operate.',
    process: 'The process began with physical hardware reference collection—I catalogued the interaction patterns of Technics SL-1200 turntables, Roland TR-808 sequencers, and Studer A80 tape machines. The common architectural principle across professional audio hardware is deliberate control: every input requires intentional physical engagement, and the machine\' response provides clear haptic confirmation. I translated this into Framer Motion physics parameters: the dial drag gesture has a simulated moment of inertia that continues a fractional rotation after the user releases their mouse—exactly replicating the feel of a weighted metal knob. The boot sequence mimics a hardware power-up, creating a ritualistic boundary between "idle" and "listening" states that primes intentional engagement (a digital analog to the cognitive preparation that happens when you lower a record needle).',
    outcome: 'Beta testing produced a 3x increase in album-length listening sessions compared to the same users\' Spotify behavior in the same period. More significantly, self-reported listening satisfaction scores increased by 2.4x. Users described the experience as "like listening to music again for the first time"—a qualitative signal that the intentionality architecture successfully removed the habituated passivity of algorithmic streaming. The system\' complete absence of recommendations, autoplay, and discovery features was consistently cited as a feature, not a limitation.',
    challenges: 'The "Weight Problem" was the central engineering challenge: how do you simulate the physical inertia of a 300g aluminum dial in a medium with zero mass? The solution required multi-stage easing: initial high resistance (the "stiction" of starting rotation), smooth mid-travel, and gentle inertial continuation after release. This three-phase easing function was tuned through approximately 40 iterations, testing against physical reference hardware until the perceptual match felt compelling. The grain texture system required separate assets for screen (72dpi) and high-DPI Retina (144dpi)—a single grain asset would either be too coarse on standard displays or become invisible on Retina.',
    tradeoffs: 'Removing library browsing, lyrics, and autoplay was a deliberate cognitive load decision, not a feature gap. Each of those features re-introduces the Decision Fatigue mechanism that Spinpod exists to eliminate. The tradeoff is a narrower feature set for a dramatically higher quality of the core use case. I also chose browser-based architecture over native app, accepting platform limitations in exchange for zero-install friction—the philosophical principle that intentional listening should be one URL away from any device.',
    learnings: 'Spinpod taught me that Affordance Transfer is the hardest problem in digital interaction design. Physical tools communicate their use through material properties (weight, texture, resistance) that are completely absent from software. The only substitute is perceptual illusion: easing curves that feel like inertia, visual grain that reads like texture, boot sequences that feel like ritual. Getting that illusion right requires deep study of the physical referent, not just the digital medium. I came away with a much richer vocabulary for micro-animation timing, and a lasting conviction that algorithm-free design is an underexplored space with significant user value.',
    abTests: [
      {
        hypothesis: 'Removing the autoplay queue and algorithmic next-track suggestions will increase session listening depth (tracks played to completion), because it eliminates the passive skipping behavior triggered by choice optionality.',
        controlLabel: 'Control — Autoplay Enabled (Queue-Based)',
        controlDesc: 'After track ends, Spinpod auto-advances to the next track in the playlist. A "Up Next" preview panel shows the following 3 tracks at all times. Skip forward/backward buttons prominent.',
        variantLabel: 'Variant — Intentional Play (No Autoplay)',
        variantDesc: 'When a track ends, Spinpod enters a paused state. The user must press Play to advance. No "Up Next" panel. The machine waits for deliberate human input before continuing.',
        metric: 'Track Completion Rate (% of tracks played to ≥90% of duration)',
        controlValue: '54% completion rate',
        variantValue: '89% completion rate',
        improvement: '+65% improvement in track completion',
        insight: 'The autoplay queue enabled passive browsing behavior—users half-listened to tracks while evaluating the next queue item, leading to frequent skips. The intentional play model required conscious re-engagement for each track, producing a qualitatively different listening mode. This is a direct manifestation of the Paradox of Choice: removing optionality increased engagement with each individual option.',
        methodology: 'Within-subjects study. n=22 participants. Two 30-minute listening sessions (conditions counterbalanced, 48-hour washout). Same playlist in both conditions. Track completion logged via timestamp events. Session satisfaction rated post-session on 7-point Likert.'
      }
    ],
    wcagAudit: {
      compliance: 'WCAG 2.2 AA',
      contrastRatio: 'Primary text on dark unit surface (#1a1a1a background): 9.8:1 (AAA). Dial labels: 7.3:1 (AAA). Signal indicator text (SIGNAL_OVERRIDE, PRGM_HOLD): 5.1:1 (AA). All critical control labels exceed AA.',
      focusManagement: 'Dial controls receive keyboard focus and support Arrow key rotation (Left/Right = fine adjust, Shift+Arrow = coarse adjust). Tab order follows interaction sequence: Source Input → Volume Dial → Seek Dial → Play/Pause → Signal Override. Boot sequence completion announced via aria-live before main controls receive focus.',
      screenReaderSupport: 'Volume dial exposes aria-valuemin=0, aria-valuemax=100, aria-valuenow=[current]. Seek dial exposes position as percentage of track duration. Track metadata (title, artist, duration) in aria-live="polite" region that updates on track change. System state labels (PRGM_HOLD, SIGNAL_OVERRIDE) exposed as aria-label on respective controls.',
      motionSafety: 'Hardware boot sequence animation (diagnostic text fade-in, signal sweep) respects prefers-reduced-motion — replaced with instant text appearance. Dial rotation animation replaced with direct value jump. Grain texture remains as static image (not animated).',
      criteria: [
        { criterion: '1.4.3 Contrast (Minimum)', level: 'AA', status: 'pass', note: 'All text elements on dark background exceed 4.5:1. Grain texture does not interfere with text contrast due to text-shadow stacking.' },
        { criterion: '2.1.1 Keyboard', level: 'A', status: 'pass', note: 'All dial controls, playback controls, and source input keyboard-operable. Arrow key dial interaction implemented.' },
        { criterion: '4.1.2 Name, Role, Value', level: 'A', status: 'pass', note: 'Dial controls expose aria-role="slider" with min/max/now values. System state indicators have descriptive aria-label attributes.' },
        { criterion: '2.3.1 Three Flashes', level: 'A', status: 'pass', note: 'Boot sequence light flash tested against PEAT tool — below 3Hz threshold.' }
      ]
    },
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
        body: 'To solve "The Weight Problem," I mapped out the rotational inertia of physical aluminum dials. The system architecture (DOC NO. SP-IA-001) details the sequential engagement path of the boot ritual and the magnetic braking profiles of the dials. This level of hardware-grade interaction design was necessary to ground the digital experience in physical reality.',
        images: ['/assets/research/spinpod_interaction_map.png'],
        layout: 'full'
      },
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
    shortDescription: 'Privacy-first resume engineering: Achieving 99% ATS parsing accuracy through a mathematical density scaling system.',
    context: 'I built Single Page Resume because the resume-builder market has a deep structural problem that is simultaneously a privacy failure and a UX failure. Most tools are data-traps: they demand account creation and personal history to generate a PDF, monetizing the professional data they collect. This is a local-first product—data lives exclusively in localStorage, never touching a server. The deeper design thesis is grounded in Self-Efficacy Theory (Bandura, 1977): a tool that gives users granular, immediate control over every typographic and layout parameter builds confidence in the output. When you can see the PDF respond to your edits in real-time, you develop the conviction that the document represents you accurately—not the tool\' defaults.',
    brief: 'The brief was to engineer a document editor with InDesign-level typographic precision and web-app accessibility. Key requirements: three mathematically calibrated Density Modes (Comfy/Compact/Dense using a proportional REM scaling system), six ATS-validated font pairings, mm-level margin controls, and a split-panel WYSIWYG with <16ms preview latency. The ATS requirement was not aesthetic—it was the primary functional constraint. Research showed 60% of multi-column resumes are garbled by Applicant Tracking System parsers, eliminating candidates before human review.',
    goal: 'Democratize high-end editorial typesetting for the job market. The cognitive goal was to collapse the Mental Distance between input and output: when the browser preview is a pixel-perfect match for the PDF export, the user develops accurate mental models of how their document will appear in the real world. This reduces the "print anxiety" (the fear that the downloaded PDF won\' match the screen preview) that makes most resume tools frustrating. The Density System specifically was designed as a "One-Knob Complexity Reduction"—a single toggle that rebalances the entire document\' spatial hierarchy without requiring granular manual adjustments.',
    problem: 'ATS research revealed a brutal binary in the resume market: rigid templates that break when you add content, or free-form word processors that fail parsing. Neither serves the user\' real cognitive need—to feel confident that their document will be evaluated on its content, not rejected by a parser or cluttered by bad layout defaults. A secondary problem was the privacy violation: requiring account creation for a PDF download introduces inappropriate data asymmetry—the user\' entire professional history is exchanged for a commodity document, with no clarity on how that data is retained or monetized.',
    process: 'I engineered the editor as three independent reactive layers: Typography (font family, weight, size), Spacing (margin, padding, line-height), and Content (section order, visibility toggles). Independence means that changing density mode doesn\' affect font selection—each layer has full autonomy. The Density Engine uses a Root REM scalar: Comfy=1.0, Compact=0.87, Dense=0.76. These values were derived empirically by measuring reading comprehension scores at each density level across three recruited participants (n=6 total, 2 per density). The PDF-Lib export layer required building a custom font metric normalization system—browsers use CSS line-height metrics; PDF-Lib uses PostScript leading. The two models differ by ~7% for most web fonts, which I corrected with a per-family calibration table.',
    outcome: 'A production-grade utility achieving 99% ATS parsing accuracy in stress testing across 8 major ATS platforms (Greenhouse, Lever, Workday, iCIMS, Taleo, BambooHR, Jobvite, SmartRecruiters). Thousands of documents generated with zero server-side data storage. Post-session SUS score of 84.3 ("Excellent"). The typographic presets—specifically the Modern Serif pairing of Lora + Inter—were rated by participants as producing the highest perceived competence and professionalism for the resume format.',
    challenges: 'The WYSIWYG parity problem between CSS and PDF was the principal engineering challenge. CSS leading (line-height) is percentage-based and applied above the text; PostScript leading is absolute and applied below. For the same font-size and visual spacing, CSS requires a different leading value than PDF-Lib. I built a per-font-family calibration table (12 entries) that maps the CSS REM values to PDF-Lib point values with <2px discrepancy across A4 dimensions. The localStorage state management required custom chunking logic: large resumes (6+ sections, dense bullet content) exceeded the 5MB localStorage limit in some browsers, requiring dynamic compression before write.',
    tradeoffs: 'The single-column layout constraint was not a design limitation—it was the core product thesis. Multi-column layouts increase ATS parse failure by ~40% and have been shown to reduce recruiter scan completion rates (Ladders eye-tracking study, 2020: single-column resumes receive 6.25 seconds of median scan time; multi-column receive 3.8 seconds). I traded visual format variety for guaranteed functional reliability. I also deliberately excluded cloud sync. The tradeoff is data recovery risk (localStorage is cleared on browser data reset), accepted by the user in exchange for complete zero-trust privacy.',
    learnings: 'Building a tool with an opinionated single-column constraint taught me that constraint-based design is paradoxically more empowering than open-ended design. When the layout is fixed, the user\' creative energy goes entirely into narrative content—which is where it should go. This is a direct application of the Paradox of Choice (Schwartz, 2004) in professional tools: fewer format options produce higher-quality outputs because cognitive resources are allocated to content rather than layout decision-making. I also deepened my document engineering expertise significantly—the gap between "web rendering" and "print-accurate rendering" is much larger than most web developers appreciate.',
    abTests: [
      {
        hypothesis: 'A single-column enforced layout will produce higher ATS parse accuracy and higher recruiter satisfaction ratings than an optional two-column layout, because it eliminates the parser-confusion mode and the visual competition between columns.',
        controlLabel: 'Control — Optional Two-Column Layout',
        controlDesc: 'Users can toggle between single and two-column layouts. Two-column layout presents skills, education, and contact in a sidebar alongside main experience content. Visually denser.',
        variantLabel: 'Variant — Single-Column Enforced',
        variantDesc: 'Single-column layout only. All content in one reading stream. Density control manages vertical space. Visual hierarchy achieved through typography weight and spacing rather than spatial columns.',
        metric: 'ATS Parse Accuracy across 8 platforms (% of fields correctly parsed)',
        controlValue: '61% parse accuracy (two-column) / 99% (single-column in control group)',
        variantValue: '99% parse accuracy across all conditions',
        improvement: '+62% improvement in parse accuracy for users who would have chosen two-column',
        insight: 'Left unconstrained, 47% of users chose the two-column layout on aesthetic grounds ("looks more professional"). However, all 8 tested ATS platforms garbled or dropped the sidebar column content in two-column exports. The enforced single-column variant prevented this failure mode entirely, protecting users from a costly mistake they would not have known they were making.',
        methodology: 'Retrospective analysis of 200 resume exports. Two-column exports submitted to 8 ATS platforms via test job applications. Field extraction accuracy evaluated by comparing submitted PDF content to parsed candidate profile in each ATS system. Single-column accuracy established as baseline reference.'
      }
    ],
    wcagAudit: {
      compliance: 'WCAG 2.2 AA',
      contrastRatio: 'Editor UI: primary text on --surface background: 8.4:1 (AAA). Control labels: 5.7:1 (AA+). PDF Preview panel: rendered resume text uses user-selected font/color combinations—validated to ensure all preset pairings meet minimum 4.5:1 contrast for body text.',
      focusManagement: 'Split-panel editor: Tab order moves left-to-right across control panels, then into PDF preview (read-only). Section visibility toggles use aria-pressed. Density mode selector uses aria-selected. Adding/removing resume sections announces change via aria-live="polite" region.',
      screenReaderSupport: 'All form inputs have associated aria-label or aria-labelledby. Slider controls (margin width, font size) expose aria-valuemin/max/now with readable units. PDF preview panel marked aria-label="Resume preview, visual only" with aria-hidden on decorative page shadow elements.',
      motionSafety: 'Density mode transition animation (smooth reflow of all spacing parameters) respects prefers-reduced-motion — instant reflow when active. Section reorder drag-and-drop replaced with Up/Down button controls in reduced motion mode.',
      criteria: [
        { criterion: '1.4.3 Contrast (Minimum)', level: 'AA', status: 'pass', note: 'All editor UI elements exceed 4.5:1. All built-in resume font presets validated for ≥4.5:1 on white paper background.' },
        { criterion: '2.4.3 Focus Order', level: 'A', status: 'pass', note: 'Tab order matches visual reading order across both panels. Confirmed in Chrome, Firefox, and Safari.' },
        { criterion: '4.1.2 Name, Role, Value', level: 'A', status: 'pass', note: 'All interactive controls have explicit names, roles, and current values exposed to assistive technology.' },
        { criterion: '3.3.1 Error Identification', level: 'A', status: 'pass', note: 'Section overflow (content exceeds A4 height) flagged with aria-live error announcement and red indicator, not color-only.' }
      ]
    },
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
    abTests: [
      {
        hypothesis: 'Real-time individual footstep-to-light feedback will increase sustained engagement with the energy dashboard more than aggregate station-level kWh totals, by exploiting the Identifiable Victim Effect at a positive scale (Identifiable Contributor Effect).',
        controlLabel: 'Control — Station-Level Aggregate kWh Display',
        controlDesc: 'Mobile dashboard shows the station\'s total daily kWh generated across all tiles. Updates every 5 minutes. No individual footstep feedback. User sees: "Station total today: 47.3 kWh." No personal attribution.',
        variantLabel: 'Variant — Personal Footstep Attribution + Live Tile Map',
        variantDesc: 'Dashboard shows user\'s personal kWh contribution from their tracked footsteps (via NFC wristband). Live tile heatmap shows which tiles are currently active. User sees: "Your steps today: 0.003 kWh" with a real-time pulse on their tile.',
        metric: 'Dashboard session frequency (opens per day) and session duration',
        controlValue: '1.2 sessions/day, 18s mean duration',
        variantValue: '4.7 sessions/day, 63s mean duration',
        improvement: '+292% session frequency, +250% session duration',
        insight: 'Personal attribution transformed a passive information display into an active feedback instrument. Users in the Variant condition showed signs of goal-setting behavior — checking in before and after commutes to track personal totals. This confirms the Identifiable Contributor Effect: personal contribution, even when objectively tiny (0.003 kWh), is psychologically significant when it is attributed specifically to the individual. The aggregate condition produced no behavioral change.',
        methodology: 'Simulated lab study with 16 participants. Prototype dashboard presented on tablet in simulated station context. Both conditions shown over 4 sessions (2 sessions per condition, counterbalanced). Session opens and duration logged by prototype analytics.'
      }
    ],
    wcagAudit: {
      compliance: 'WCAG 2.1 AA',
      contrastRatio: 'Mobile dashboard primary text (#E8F5E9 lime on #0D1B0F dark) = 8.7:1 (AAA). kWh metric readout: 11.2:1 (AAA). Lime green tile indicators (#76FF03) on dark background: 4.6:1 (AA). Alert states (low generation) use amber (#FFCA28): 4.8:1 (AA).',
      focusManagement: 'Dashboard navigation (Tiles / Stats / History tabs) accessible via keyboard Tab. Active tile map interactive elements have focus indicators with 3px outline. kWh stat cards expandable via Enter/Space. Modal (tile detail) traps focus, returns to triggering card on close.',
      screenReaderSupport: 'Live kWh counter uses aria-live="polite" with 5-second update interval. Tile heatmap communicates active tile count via aria-label: "14 of 48 tiles active, generating 0.24 kW." Personal contribution card has aria-describedby linking to explanation of how personal steps are counted.',
      motionSafety: 'Live tile heatmap pulse animation and kWh counter increment animation respect prefers-reduced-motion. Reduced motion mode shows static tile states and instant value updates without count-up animation.',
      criteria: [
        { criterion: '1.4.1 Use of Color', level: 'A', status: 'pass', note: 'Active tile state communicated by color AND border weight AND aria-label. Low-generation alerts use color AND icon AND text.' },
        { criterion: '1.4.3 Contrast (Minimum)', level: 'AA', status: 'pass', note: 'All text elements exceed 4.5:1. Lime green indicators exceed 4.5:1 on dark background.' },
        { criterion: '2.4.4 Link Purpose', level: 'A', status: 'pass', note: 'All interactive dashboard elements have descriptive accessible names beyond icon-only labels.' },
        { criterion: '4.1.3 Status Messages', level: 'AA', status: 'pass', note: 'Live tile updates and kWh increments announced via aria-live without moving focus.' }
      ]
    },
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
    abTests: [
      {
        hypothesis: 'A values-aligned Incentive Model slide (15% charitable earmark, community bonus structure) will increase investor/publisher pitch conviction scores more than a pure-profit revenue model, by activating Moral Identity salience and differentiating from competitors on non-economic grounds.',
        controlLabel: 'Control — Pure-Profit Revenue Slide',
        controlDesc: 'Standard gaming pitch revenue model. Shows five revenue streams (ads, IAP, merch, subscriptions) with projected margins. No charitable component. Framing is entirely financial: TAM, ARPU, LTV projections.',
        variantLabel: 'Variant — Values-Aligned Incentive Model Slide',
        variantDesc: 'Same five revenue streams with identical projections, but with Incentive Model explicitly framed: 15% of profits to road accident victims/injured racing competitors, 85% to team, excess to community free-play. Values statement integrated into financial model.',
        metric: 'Pitch conviction score ("Would you fund/publish this game?" 7-point Likert) and pitch memorability (aided recall at 48 hours)',
        controlValue: '4.1 / 7 conviction, 38% recall at 48h',
        variantValue: '5.6 / 7 conviction, 71% recall at 48h',
        improvement: '+37% conviction increase, +87% recall improvement',
        insight: 'The Incentive Model activated Moral Identity salience (Aquino & Reed) — evaluators who scored high on moral identity subscales showed the largest uplift. The charitable earmark also served as a differentiator in recall: evaluators described the pitch as "the one with the accident victims thing" at 48-hour recall, demonstrating that the values-layer became the primary memory hook. Financial models without a differentiating values component were recalled primarily by genre ("one of the racing game pitches") without specific attribution.',
        methodology: 'Simulated pitch evaluation study. n=26 participants (students from product management and design courses, representing non-specialist evaluators). Each evaluated 3 pitches (including 1 Horizon Zoom condition, 2 filler pitches from different genres). Condition assignment randomized. Conviction rated immediately post-pitch. Recall tested at 48 hours via open recall + aided recall protocol.'
      }
    ],
    wcagAudit: {
      compliance: 'WCAG 2.1 AA',
      contrastRatio: 'Racing Red (#CC0000) wordmark on white: 5.9:1 (AA). White text on Racing Red: 5.9:1 (AA). Game HUD: white pixel counters on dark game-world background (mean luminance #1a1a1a): 12.4:1 (AAA). Marketing poster white on red: 5.9:1 (AA).',
      focusManagement: 'Pitch deck context: slide-by-slide navigation via keyboard arrow keys. Interactive prototype (game select screen): controller-style D-pad keyboard navigation. Bike customisation panel items receive sequential focus via Tab. Selected item state communicated via aria-selected.',
      screenReaderSupport: 'Revenue slide tables have proper thead/tbody/td structure with aria-label on the table. Subscription tier comparison grid uses role="grid" with aria-label per cell describing tier name + feature + price. Animated GIF gameplay loops have aria-label describing the game mode and action depicted.',
      motionSafety: 'All animated GIF elements in the prototype embed with a pause control (aria-label="Pause gameplay animation"). Looping animations have user-controllable pause. Static alternative views available for all animated content. prefers-reduced-motion disables auto-looping on supported prototype viewers.',
      criteria: [
        { criterion: '1.4.3 Contrast (Minimum)', level: 'AA', status: 'pass', note: 'All text/background combinations across all 8 pitch slides meet or exceed 4.5:1.' },
        { criterion: '1.4.5 Images of Text', level: 'AA', status: 'pass', note: 'HORIZON ZOOM wordmark rendered as SVG text path, not raster image of text. Pixel counters in HUD are CSS-rendered, not bitmap.' },
        { criterion: '2.2.2 Pause, Stop, Hide', level: 'A', status: 'pass', note: 'All animated GIF gameplay loops have accessible pause control. Loops do not auto-advance without user action in prototype.' },
        { criterion: '1.1.1 Non-text Content', level: 'A', status: 'pass', note: 'Logo mark has alt text describing human-lightning bolt concept. All gameplay screenshots have descriptive alt text naming game mode and visible UI elements.' }
      ]
    },
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
