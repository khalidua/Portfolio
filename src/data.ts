import { Project, Experience, Education, SkillGroup } from './types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Microservices Social Platform',
    slug: 'microservices-social-platform',
    tagline: 'High-performance microservices architecture handling real-time social networking workloads.',
    description: 'Designed and engineered a scalable decentralised social networking backend, leveraging Go gRPC services, Apache Kafka for event-driven distribution, and PostgreSQL with Redis caching to support concurrent client activities.',
    image: 'social_network.png',
    tags: ['Go (Golang)', 'gRPC', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Docker', 'Protobuf'],
    github: 'https://github.com/kh522004/microservices-social-backend',
    live: 'https://social-engine.demo',
    role: 'Core Backend Architect',
    duration: 'Sep 2025 - Jan 2026',
    category: 'backend',
    summary: 'A robust, distributed event-driven social networking system built from the ground up to solve synchronous scaling limits, providing ultra-low latencies for user operations under heavy mock workloads.',
    problem: 'Traditional monolithic social systems suffer from cascade failures and high web-server thread locking under concurrent write events, such as bulk notification distribution and real-time feed updates.',
    solution: 'Deconstructed the platform into dedicated high-efficiency microservices (User, Post, Feed, Notification) utilizing gRPC for lightweight, strongly-typed internal communication. Integrated Apache Kafka as an asynchronous transaction broker to guarantee notification delivery without blocking client user-agent loops. Applied a Write-Back caching topology with Redis to serve user timelines in sub-35ms.',
    features: [
      'Event-Driven Feed Aggregation: Decoupled post-publishing from feed generation via Kafka partition-aware consumers.',
      'gRPC Internal Fabric: Enabled strict protobuf schema compilation, slashing HTTP header overhead by 70%.',
      'Optimised Fan-Out Workers: Designed efficient Go routine worker groups to deliver notifications globally.',
      'Highly Available Database Layers: Designed PostgreSQL replica configurations with separate read-write connection pool limits.',
      'Containerised Testing Suites: Docker-packaged services with pre-configured mock telemetry for localized end-to-end load testing.'
    ],
    architecture: {
      title: 'Distributed Event-Driven Architecture',
      description: 'The social backend is split into 4 containerized Go services that communicate with each other over gRPC and exchange events asynchronously through an Apache Kafka broker cluster.',
      steps: [
        'Client Application sends a REST request to the API Gateway.',
        'API Gateway processes, validates, and routes the request into internal gRPC microservices.',
        'Post Service writes the new content to the PostgreSQL master instance and publishes a "PostCreated" message to Kafka.',
        'Feed Worker and Notification Worker processes consume the event loop concurrently.',
        'Notification Worker updates the user notifications log, while Feed Worker updates relevant user caches in Redis, which is kept in-memory.'
      ]
    },
    challenges: 'Designing transactional consistency across separate PostgreSQL and Redis instances. In Go, an uncompleted partition upload to Kafka could cause a database record to become public without triggering notification. I resolved this by enacting the Transactional Outbox pattern, storing events in Postgres and dispatching them with a dedicated background relay service to confirm atomic updates.',
    learning: 'Discovered the sheer speed of compiled Go gRPC endpoints over REST, mastered event-driven orchestration dynamics, and learned how to configure partition keys in Apache Kafka for sequence-guaranteed message streams.'
  },
  {
    id: '2',
    name: 'ClipSphere Pro',
    slug: 'clipsphere-pro',
    tagline: 'Cloud-native, automated video processing and secure distribution hub with BullMQ workers and Stripe integration.',
    description: 'Built a full-stack media platform featuring automated multi-format transcoding pipelines, chunked cloud uploads, secure payment checkouts, and a content distribution system.',
    image: 'clipsphere.png',
    tags: ['TypeScript', 'Node.js', 'React', 'Redis', 'BullMQ', 'FFmpeg', 'MinIO/S3', 'Stripe'],
    github: 'https://github.com/kh522004/clipsphere-video-engine',
    live: 'https://clipsphere.dev',
    role: 'Lead Full-Stack Developer',
    duration: 'May 2025 - Aug 2025',
    category: 'fullstack',
    summary: 'A completely autonomous video ingestion, analytics, and paywalled-access SaaS container that offloads heavy video encoding off the main server thread to a distributed background workforce.',
    problem: 'Video ingestion suffers from direct payload timeout on standard HTTP servers, and dynamic processing tasks (like generating multiple resolutions) exhaust server CPU capacities, leading to unresponsive user interfaces.',
    solution: 'Designed and implemented an AWS-compatible S3 uploading system utilizing secure client presigned chunk, skipping server bandwidth. Leveraged Node.js background processors managed by BullMQ and Redis on distinct host nodes. Integrated FFmpeg within sandboxed containers to generate customizable H.264 profiles. Integrated Stripe Webhooks to unlock premium downloads and analytical metrics securely.',
    features: [
      'Multi-Format Transcoding Pipeline: Automatic generation of 1080p, 720p, and 480p streams plus thumbnail posters using Fluent-FFmpeg.',
      'Resilient Chunked Parallel Uploads: Secure pre-signed uploads straight to object storage with support for paused and resumed flows.',
      'Distributed Job Workers: Redis-backed state machine (BullMQ) gracefully handles background process retries and progress trackers.',
      'Subscription Monetization Model: Integrated Stripe Checkout APIs and strict Webhook listeners to instantly authorize premium content.',
      'Interactive Media Dashboard: Clean analytics dashboard visually displaying video bandwidth, views, watch-times, and earnings.'
    ],
    architecture: {
      title: 'Ingestion, Queuing, and Transcoding Pipeline',
      description: 'Offloads video manipulation from clients straight to remote S3 buckets and processes files with horizontal-scalable workers.',
      steps: [
        'React UI commands API server for a secure storage signature.',
        'Client browser uploads video directly to Cloud S3 bucket via presigned URL chunks.',
        'Storage trigger publishes "UploadComplete_Event", prompting API server to enqueue a video transcode task into BullMQ.',
        'A dedicated FFmpeg Worker pulls the job from BullMQ, downloads the source file, and processes 3 output definitions.',
        'S3 bucket stores the segmented outputs, publishes progress markers to Redis, and emits SSE pushes to update the user in real-time.'
      ]
    },
    challenges: 'File cleanups following interrupted or failed transcode operations. Abandoned source files on local storage or raw objects in the cloud quickly expanded billings. Solving this required writing a custom automated GC (Garbage Collector) routine that monitors failed events in BullMQ and leverages S3 lifecycle parameters to auto-destruct unreferenced temporary folders.',
    learning: 'Mastered stream-based Node.js backends, S3 presigned-url constraints, Stripe subscription workflows, and gained critical hands-on knowledge of asynchronous background queues and micro-analytics tracking.'
  },
  {
    id: '3',
    name: 'Ephemeral Hybrid Messenger',
    slug: 'ephemeral-hybrid-messenger',
    tagline: 'Zero-trace, E2EE instant messenger utilizing WebSockets and instant Redis message TTL pruning.',
    description: 'Created an isolated messaging interface that pairs React-Crypto secure keys with instantaneous WebSockets, Redis pub/sub messaging channels, and TTL-governed ephemeral records.',
    image: 'messenger.png',
    tags: ['TypeScript', 'Node.js', 'WebSockets', 'Redis pub/sub', 'E2EE Web-Crypto', 'Docker', 'Express'],
    github: 'https://github.com/kh522004/ephemeral-hybrid-messenger',
    live: 'https://secure-chat.demo',
    role: 'Security & Lead Engineer',
    duration: 'Mar 2025 - May 2025',
    category: 'security',
    summary: 'A secure, anonymous communication app designed for zero metadata retention. Private keys never leave the client browser, and all messages vanish from remote RAM within custom user-configurable seconds.',
    problem: 'Regular instant messaging applications retain communication files long-term on vulnerable servers, making them persistent targets for data breaches and regulatory liabilities.',
    solution: 'Designed and deployed an End-to-End Cryptographic (E2EE) communication channel. Handled client connections utilizing standard WebSockets. Developed the routing core with Node.js and synchronized multi-user chat boxes using a high-efficiency Redis Pub/Sub cluster. Enforced a hard expiration epoch in Redis, guaranteeing all records are instantly wiped from server RAM without writing physical logs to disks.',
    features: [
      'In-Browser Cryptographic Suite: Fully encrypted content utilizing RSA-OAEP and AES-GCM 256 keys via browser-native Web Crypto API.',
      'Sub-Millisecond Message Broker: Real-time message distribution across multiple Express clusters via Redis Pub/Sub channels.',
      'Configurable Message Lifespans: Custom TTL settings (e.g., 5 seconds, 5 mins, 1 hour) that are executed strictly via Redis cache sweeps.',
      'Anonymous Key Exchange: Simple secure identity codes to swap session parameters without gathering emails or mobile phone numbers.',
      'Active Client Synchronization: Instant user online/typing status triggers and connection status reconnect hooks.'
    ],
    architecture: {
      title: 'Decoupled E2EE WebSocket Lifecycle',
      description: 'WebSockets facilitate real-time relaying while Redis coordinates synchronization across detached server processes.',
      steps: [
        'User Alice generates an RSA/AES keypair inside her browser and shares her public hash with Bob.',
        'Bob encrypts his chat packet locally using Alices public key and writes it out to the WebSocket.',
        'WebSocket Server processes the secure envelope and broadcasts it instantly over the Redis Pub/Sub broker channel.',
        'Target WebSocket Server retrieves the message, routes the envelope to Alice, and writes the encrypted payload to Redis Cache with a customized TTL.',
        'Alice decrypts the package in-memory. Redis automatically purges the key immediately upon the expiratory timeout.'
      ]
    },
    challenges: 'Handling client disconnects without losing ephemeral data logs. WebSockets are inherently stateful, meaning a brief mobile network drop breaks active memory buffers. I solved this by implementing a short-lived, encrypted, Redis-cached user stream where clients can safely pull missed ephemeral blocks inside their TTL window using local sequence indexes, bridging the disconnect elegantly.',
    learning: 'Gained absolute appreciation for network security standards, WebSocket heartbeat mechanisms, and learned how to build resilient multi-process systems without any persistent storage state.'
  },
  {
    id: '4',
    name: 'Threat-Flow ML Classifier',
    slug: 'threat-flow-ml-classifier',
    tagline: 'Neural Network classifier auditing high-dimensional routing streams to flag cyber intrusions with 98.4% accuracy.',
    description: 'Designed an intelligent machine learning system processing live transaction logs, executing feature reduction, and classifying attack vectors with neural networks.',
    image: 'analytics.png',
    tags: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Network-Logs', 'Matplotlib'],
    github: 'https://github.com/kh522004/network-threat-classifier',
    live: 'https://ml-intrusion-dashboard.demo',
    role: 'Machine Learning / Data Eng.',
    duration: 'Dec 2024 - Feb 2025',
    category: 'ml',
    summary: 'A comprehensive cyber intrusion auditing system built to process millions of network activity packets and accurately map attack vectors like DDoS, Port Scans, and Brute Force incursions.',
    problem: 'Network operators are flooded with logs. Sifting out true malicious attack footprints is a needle-in-a-haystack problem with severe consequences, especially given massive log class imbalances (99.9% normal traffic).',
    solution: 'Designed and trained an advanced Deep Neural Network (DNN) and complementary Random Forest ensemble models. Preprocessed big dataset pipelines using Pandas and NumPy. Remedied extreme threat sample sparsity using SMOTE (Synthetic Minority Over-sampling Technique). Reduced over 40 feature metrics down to 12 vital dimensions via Principal Component Analysis (PCA) to drive high inference speeds on edge router processors.',
    features: [
      'Multi-Class Intrusion Classifier: High-accuracy categorization of 8 different cyber security attack patterns.',
      'Extreme Imbalance Handling: Driven detection rate of sparse indicators via advanced over-sampling and Focal-Loss training metrics.',
      'Feature Engineering Pipeline: Custom python processors mapping raw IP, ports, and payload sizes into high-signal feature matrices.',
      'Interactive Prediction Panel: Built a diagnostic Tkinter / Web-stub wrapper allowing operators to upload live flows and view threat reports.',
      'Detailed Performance Visuals: Full analysis detailing Confusion Matrices, ROC curves, and precision-recall trade-offs.'
    ],
    challenges: 'Preventing classifier overfitting on local lab logs that would result in poor detection rates on open, real-world networks. I resolved this by applying Strict L2 Regularization constraints, introducing Dropout layers, and training using the standardized, high-variance CICIDS2017 intrusion dataset containing real modern network behaviors.',
    learning: 'Mastered mathematical feature scaling, deep learning parameter tuning inside TensorFlow, and developed a strong appreciation for the practical constraints of deploying ML models onto raw infrastructure components.'
  },
  {
    id: '5',
    name: 'ZC League Hub',
    slug: 'zc-league-hub',
    tagline: 'Multi-tenant athletic scheduler and tournament organizer built custom for the Zewail City student community.',
    description: 'Coordinated and currently maintain the city sports community organizer, supporting deterministic bracket generators, live score updates, and a dynamic student leader board.',
    image: 'zcleague.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Socket.io', 'Vite', 'Express'],
    github: 'https://github.com/kh522004/zc-league-hub',
    live: 'https://zcleague.com',
    role: 'Lead Architect & Core Maintainer',
    duration: 'Jan 2024 - Present',
    category: 'systems',
    summary: 'A community-driven digital matches dashboard deployed live to manage, schedule, and broadcast scores for all inter-departmental athletic matches at Zewail City.',
    problem: 'Student sport activities relied heavily on complex, manually updated spreadsheets that resulted in scheduling friction, coordinate losses, and lack of player-facing real-time progress monitors.',
    solution: 'Developed a responsive full-stack platform built utilizing PostgreSQL with a custom React front-end. Programmed standard deterministic brackets (Single Elimination, Double Elimination, and Round Robin) that auto-update as match outputs are recorded. Established real-time sockets through Socket.io, allowing on-field referees to instantly broadcast live goals and card penalties directly to students.',
    features: [
      'Interactive Bracket Visualiser: Fully responsive bracket tree displaying team movements, current runs, and historical scores.',
      'Live Score Broadcaster: Instant push server syncs referees on-field reports to thousands of connected student dashboards.',
      'Academic Multi-Tenancy: Clean organization of departments (Engineering, Science, etc.) with dedicated leaderboards.',
      'Deterministic Scheduler: Algorithmic match-maker scheduling games to prevent team burnout and field conflicts.',
      'Role-Based Authorization: Strong JWT logins and RBAC separating Referees, League Admins, and Student viewers.'
    ],
    challenges: 'Handling real-time synchronization during peak tournament hours, where concurrent player viewing crashed database connections. I resolved this by writing an Express-side caching middleware layer, bypassing repetitive DB queries for index screens, and wrapping write processes inside strict PostgreSQL isolation levels to avoid double-update conflicts.',
    learning: 'Gained priceless practical skills on deploying, hosting, and maintaining a live software product with real users, dealing with instant user feedback, and tweaking server logic to optimize performance on tight server budgets.'
  }
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Full Stack Software Engineer & Tech Lead',
    company: 'ZC Academic Coding Guild / Freelance',
    location: 'Zewail City, Egypt',
    duration: 'Jan 2024 - Present',
    description: [
      'Architected and deployed "ZC League Hub", a scalable league organizer currently managing tournaments for 150+ student athletes, achieving a 100% reduction in manual coordination overhead.',
      'Mentored 40+ sophomore students on advanced software design principles, microservices architectures, database pool optimization, and Docker orchestration workflows.',
      'Built custom client-facing applications for local tech projects with secure Stripe checkouts and custom analytical logs.'
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Docker', 'JWT/RBAC']
  },
  {
    id: 'exp2',
    role: 'Undergraduate Systems Researcher',
    company: 'Zewail City of Science and Technology',
    location: 'Zewail City, Egypt',
    duration: 'Sep 2023 - Dec 2024',
    description: [
      'Collaborated with computer engineering faculty on research focusing on low-latency microservice communication models, benchmarking gRPC and Protobuf structures against traditional REST endpoints.',
      'Refactored academic cluster configurations to use specialized Docker environments, speeding up student simulation replication times by 85%.',
      'Coded high-performance system parsers in C++ and Python to analyze memory and processing bottlenecks under simulated multi-threaded concurrent loads.'
    ],
    tags: ['Go', 'gRPC', 'C++', 'Python', 'Docker', 'Benchmarking']
  }
];

export const educationList: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Zewail City of Science, Technology and Innovation',
    location: 'Giza, Egypt',
    gpa: '3.88 / 4.00 (High Honors)',
    duration: 'Sep 2022 - Jun 2026 (Expected)',
    details: [
      "Specialising in Distributed Systems, High-Performance Backends, and Microservices.",
      "Recipient of Academic Excellence Scholarships (Full Tuition, 4 consecutive years).",
      "Dean's List Award (All consecutive semesters), Elected Academic Computer Science Tutor.",
      "Key coursework: Distributed Systems, Advanced Databases, Network Security, Operating Systems, Machine Learning."
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages & Core syntax',
    items: ['Go (Golang)', 'Python', 'TypeScript', 'JavaScript (ES6+)', 'C++', 'SQL', 'Bash / Shell']
  },
  {
    category: 'Backend & Systems Architecture',
    items: ['Node.js (Express)', 'gRPC', 'Apache Kafka', 'Redis Caching', 'BullMQ Queueing', 'FastAPI', 'REST APIs', 'WebSockets']
  },
  {
    category: 'Frontend & UI Craft',
    items: ['React.js', 'Tailwind CSS', 'Vite', 'Next.js', 'HTML5 / Modern JSX', 'Motion animations', 'Recharts']
  },
  {
    category: 'Storage & Persistent Databases',
    items: ['PostgreSQL', 'Docker Containers', 'MinIO / AWS S3', 'MongoDB', 'Drizzle ORM', 'SQL transaction models']
  },
  {
    category: 'AI & Data Science Tooling',
    items: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Math Feature Scaling', 'Principal Component Analysis (PCA)']
  }
];
