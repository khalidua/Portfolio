import { Project, Experience, Education, SkillGroup } from './types';
import { getAssetPath } from './utils/path';

export const projects: Project[] = [
  {
    id: "1",
    name: "ClipSphere",
    slug: "clipsphere",
    tagline: "A modular, full-stack short-form video sharing platform with presigned S3 uploads, background workers, and Stripe creator tipping.",
    description: "ClipSphere is a video sharing social platform built with Next.js and Node.js. It offloads CPU-intensive media processing to BullMQ background workers, stores media securely using S3-compatible MinIO presigned URLs, and enables content monetization via integrated Stripe Checkout webhooks.",
    image: "clipsphere.png",
    category: "fullstack",
    projectType: "Full-Stack Video Platform",
    duration: "2026",
    role: "Full-Stack Developer",
    github: "https://github.com/Abdelrahmann-Abdelrassoul/WEB-Project",
    live: "",
    tags: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "MinIO (S3)",
      "Redis",
      "BullMQ",
      "Socket.io",
      "Stripe API",
      "Docker",
      "Nginx",
      "Tailwind CSS",
      "JWT",
      "fluent-ffmpeg"
    ],
    cardHighlights: [
      "Direct S3 upload via presigned URLs",
      "Asynchronous background queues",
      "Stripe monetization & webhook ledger"
    ],
    cardChallenge: "Preventing server blockages and timeouts during large media uploads.",
    summary: "A full-stack creator platform featuring S3 video uploads, background transcoding queues, real-time alerts, and Stripe monetization.",
    problem: "Uploading large video files directly through a web server blocks the single-threaded Node.js event loop, resulting in memory exhaustion and request timeouts for other concurrent users.",
    solution: "I built a three-layer backend that bypasses the app server by generating MinIO S3 presigned URLs for direct browser uploads. Transcoding and email alerts are queued asynchronously in Redis and handled by BullMQ workers.",
    features: [
      "Secure JWT user authentication and Role-Based Access Control",
      "Direct video upload using secure MinIO presigned S3 URLs",
      "Real-time notifications for likes and follows via Socket.io",
      "Creator tipping integration using Stripe Checkout",
      "Automatic video duration validation using ffmpeg",
      "Interactive dashboard for tracking tips and transaction ledgers"
    ],
    challenges: "Handling partial and failed video uploads to prevent orphaned files in S3 and clean up database records, and handling Stripe webhooks locally during development.",
    learning: "Offloading file uploads directly to object storage drastically reduces server workload. It also highlighted the value of structured background queues for CPU-heavy media workflows.",
    teamSize: "Group Project (4 members)",
    status: "Completed"
  },
  {
    id: "2",
    name: "Hybrid Ephemeral Messenger",
    slug: "hybrid-ephemeral-messenger",
    tagline: "A privacy-first chat application featuring Google auth, Twilio SMS MFA, and client-side AES encrypted messaging with Redis TTL auto-destruct.",
    description: "A real-time chat application with permanent identity structures but volatile messages. Built with Next.js, Express, and Socket.IO, it uses a hybrid storage model (MongoDB for user profiles, Redis for chats) and implements client-side encryption alongside Redis keyspace notification events to automatically sync message purges.",
    image: "messenger.png",
    category: "backend",
    projectType: "Real-Time Messaging Platform",
    duration: "2026",
    role: "Backend & Full-Stack Developer",
    github: "https://github.com/Abdelrahmann-Abdelrassoul/Hybrid-Ephemeral-Messenger",
    live: "",
    tags: [
      "Next.js",
      "Express",
      "Socket.IO",
      "Redis",
      "MongoDB",
      "Firebase Auth",
      "Twilio MFA",
      "Docker",
      "TypeScript",
      "AES Encryption"
    ],
    cardHighlights: [
      "Volatile messaging with Redis TTL",
      "Client-side AES message encryption",
      "Twilio SMS multi-factor authentication"
    ],
    cardChallenge: "Synchronizing UI deletions immediately when messages expire in Redis memory.",
    summary: "A messaging app built to ensure absolute privacy by deleting messages after a configurable Redis TTL and encrypting them on the client.",
    problem: "Popular messaging services store texts permanently, exposing user data to leakage. Standard databases lack native TTL deletion mechanisms that notify the user interface in real time.",
    solution: "I separated data lifetimes: user profiles reside in MongoDB, while messages exist exclusively in Redis with TTLs. By subscribing to Redis expired events, the server instantly notifies clients via Socket.IO to wipe expired text from the UI.",
    features: [
      "Secure Google Sign-In with popup auth flow",
      "Two-factor verification via Twilio SMS Verify",
      "Volatile messaging with 10s to 120s TTL selection",
      "Client-side AES encryption via crypto-js before socket delivery",
      "Real-time user presence roster and typing indicators",
      "Live system pulse stream tracking auth and database logs"
    ],
    challenges: "Synchronizing UI states when Redis deletes keys in the background, and resolving Docker port allocation conflicts with host-level services on Windows.",
    learning: "Redis keyspace notifications enable real-time UI state sync for volatile data. Encrypting data on the client means database leaks cannot expose raw plain text.",
    teamSize: "Group Project (4 members)",
    status: "Completed"
  },
  {
    id: "3",
    name: "INKIX",
    slug: "inkix",
    tagline: "An award-winning mobile-first custom shoe design app and interactive prototype — awarded 1st place in our university UI/UX competition.",
    description: "INKIX is a UI/UX-focused custom shoe design application built to provide users with an engaging product personalization workflow. Designed using user-centered design methodologies and interactive wireframes in Figma, this project won 1st place among competing teams in the UI/UX design course.",
    image: "inkix.png",
    category: "fullstack",
    projectType: "Mobile App UI/UX Design • Figma Prototype",
    duration: "2025",
    role: "Lead UI/UX Designer",
    github: "",
    live: "https://www.figma.com/proto/AvIseupe9DKAvAt67s0APG/INKIX?node-id=75-2068&starting-point-node-id=75%3A1981",
    tags: [
      "Figma",
      "UI/UX Design",
      "Design Thinking",
      "Interactive Prototyping",
      "Usability Testing",
      "Responsive Design"
    ],
    cardHighlights: [
      "Iterative usability testing cycles",
      "Custom step-by-step product customizer",
      "Awarded 1st place in UI/UX competition"
    ],
    cardChallenge: "Creating clean interactive layouts that support multiple customization options.",
    summary: "A mobile-first shoe customization app designed in Figma, featuring interactive prototyping and user-centered design, winning 1st place in a UI/UX competition.",
    problem: "Most online visual customization tools feel cluttered and overwhelm shoppers, leading to user friction and high cart abandonment rates.",
    solution: "I designed an interactive shoe customization workflow that separates customization stages into intuitive steps, featuring real-time visual previews and a clean order checkout path.",
    features: [
      "Interactive step-by-step shoe customizer",
      "Real-time visual design preview wireframe",
      "Responsive mobile and desktop high-fidelity prototype layouts",
      "Seamless user onboarding and visual design prompts",
      "Fully integrated shopping cart and order summary screen",
      "Branding guidelines and typography style system"
    ],
    challenges: "Designing a complex customization flow that remains clean and uncluttered, and building interactive Figma prototypes that realistically simulate product personalization flows.",
    learning: "Creating design systems before wireframing saves production time. Usability testing is key to locating and eliminating interface friction.",
    teamSize: "Group Project (5 members)",
    status: "Completed"
  },
  {
    id: "4",
    name: "ZC League",
    slug: "zc-league",
    tagline: "A football league management platform with automated standings calculations and role-based access control.",
    description: "ZC League is a full-stack football league management platform built with React and FastAPI (Python). It replaces manual spreadsheets with automated group scheduling, team rosters, matches, and real-time standings calculations, deployed on Azure Web Apps using GitHub Actions CI/CD.",
    image: "zcleague.png",
    category: "fullstack",
    projectType: "Sports League Management System",
    duration: "2025",
    role: "Solo Full-Stack Developer",
    github: "https://github.com/khalidua/league",
    live: "https://khalidua.github.io/league/",
    tags: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "PostgreSQL",
      "Cloudinary",
      "Azure",
      "CI/CD",
      "GitHub Actions",
      "React Bootstrap"
    ],
    cardHighlights: [
      "FastAPI & SQLAlchemy relational engine",
      "Role-based routing & invitations",
      "CI/CD deployment to Azure"
    ],
    cardChallenge: "Ensuring standings and stats recalculate atomically when scores are submitted.",
    summary: "An independent full-stack tournament organizer replacing manual league tracking with automated fixture scheduling and relational database standings.",
    problem: "Organizing university sports leagues using spreadsheets and group chat logs led to scheduling errors, double-booked stadiums, and delayed standings calculations.",
    solution: "I built ZC League. Organizers input teams, and the FastAPI backend generates schedules. Organizers log score updates, and SQLAlchemy models automatically update group tables and player statistics in PostgreSQL.",
    features: [
      "JWT authentication and email verification flows",
      "Role-Based Access Control (Admin, Organizer, Player)",
      "Automated round-robin match scheduling",
      "Interactive tournament bracket and standing tables",
      "Cloudinary integration for team logo and player photo uploads",
      "In-app notification system and match invitation flows"
    ],
    challenges: "Designing database models and SQLAlchemy relationships that cleanly calculate standings and goals in real time while preventing double-bookings.",
    learning: "Structuring relational database constraints saves validation code. Using SQLite locally and PostgreSQL on Azure made managing multi-environment database pipelines easy.",
    teamSize: "Solo Project",
    status: "Completed"
  },
  {
    id: "5",
    name: "Social Networking Platform",
    slug: "social-network",
    tagline: "A scalable microservices-based social network built with Go, Kafka, Redis, PostgreSQL, and OpenSearch/Grafana observability.",
    description: "A distributed 6-service social network engineered in Go to eliminate scaling bottlenecks. It decouples posts, profiles, and notifications using Kafka asynchronous event pipelines, caches user feeds in Redis, and runs centralized OpenSearch logging and Grafana dashboards.",
    image: "social-network.png",
    category: "backend",
    projectType: "Microservices Architecture & Observability",
    duration: "2026",
    role: "Backend & Infrastructure Developer",
    github: "https://github.com/Abdelrahmann-Abdelrassoul/Social-Networking-Platform",
    live: "",
    tags: [
      "Go",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "OpenSearch",
      "Grafana",
      "Google OAuth2",
      "JWT",
      "Microservices"
    ],
    cardHighlights: [
      "Go microservices Isolation",
      "Async event piping with Kafka",
      "Centralized OpenSearch logging"
    ],
    cardChallenge: "Balancing synchronous REST calls and asynchronous message queues across services.",
    summary: "A Go-based microservices social network designed to explore asynchronous communication, distributed caching, and containerized deployment.",
    problem: "Monolithic architectures suffer from database congestion and cascading service failures when heavy traffic flows to central data endpoints.",
    solution: "We divided the app into Go microservices. Writes are pushed to Kafka topics to decouple compute loads, user feeds are cached in Redis, and Kubernetes manages deployment container state.",
    features: [
      "Decoupled post and user profile CRUD operations",
      "Asynchronous activity feeds driven by Kafka message streams",
      "Centralized logging via OpenSearch",
      "Google OAuth2 and JWT-based authentication",
      "Distributed caching using Redis clusters",
      "Kubernetes deployment manifests for container orchestration"
    ],
    challenges: "Coordinating distributed transactions, managing authentication tokens across isolated services, and preventing metrics overlap in monitoring panels.",
    learning: "Kafka event pipelines make writes highly resilient. Standardizing API contracts with OpenAPI saves debugging hours when integrating decoupled systems.",
    teamSize: "Group Project (4 members)",
    status: "Completed"
  },
  {
    id: "6",
    name: "BingeBox",
    slug: "bingebox",
    tagline: "A Netflix-inspired movie streaming frontend featuring Redux Toolkit state management, Chart.js viewing analytics, and Vitest suite coverage.",
    description: "BingeBox is a streaming platform frontend built with React and Redux Toolkit. It implements watchlist caching, route protection guards, interactive Chart.js analytics, and complete Vitest/React Testing Library unit testing.",
    image: "bingebox.png",
    category: "frontend",
    projectType: "Frontend Web Application",
    duration: "2025",
    role: "Frontend Developer",
    github: "https://github.com/khalidua/BingeBox",
    live: "https://khalidua.github.io/BingeBox/",
    tags: [
      "React 19",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
      "Chart.js",
      "JSON Server",
      "Vitest",
      "TypeScript"
    ],
    cardHighlights: [
      "Redux Toolkit watchlist caching",
      "Chart.js viewing activity graphs",
      "Unit tested with Vitest & RTL"
    ],
    cardChallenge: "Structuring route guards and synchronizing local state with a mock REST server.",
    summary: "A Netflix-style media browser built to practice client-side state slices, analytical charts, and component unit testing.",
    problem: "Streaming catalogs require complicated state handling for watchlists, dynamic search filters, and user routing patterns, which can lag without optimized state slices.",
    solution: "I built a responsive interface using Redux Toolkit to manage slices of watchlist and authentication state, Framer Motion for animations, and Chart.js to graph viewing stats.",
    features: [
      "Dynamic movie catalog browse and search feeds",
      "Centralized watchlist state using Redux Toolkit",
      "Route protection guards for general and admin views",
      "Viewing analytics charts with dynamic metrics visualization",
      "Mock API integration using JSON Server",
      "Responsive layout matching Netflix-style branding"
    ],
    challenges: "Managing complex state across user settings and lists, and writing robust routing guard logic for admin pages.",
    learning: "Redux Toolkit simplifies state logic in large applications. Writing Vitest tests forces you to decouple presentation views from state actions.",
    teamSize: "Group Project (4 members)",
    status: "Completed"
  }
];

// ======================================================
// PROFILE
// ======================================================

export const profile = {
  name: "Khalid Mohamed",

  title: "Software Engineer",

  subtitle:
    "Computer Science & AI student passionate about backend engineering, scalable APIs, distributed systems, and modern full-stack applications.",

  location: "Giza, Egypt",

  email: "kh.mohamed.dev@gmail.com",

  github: "https://github.com/khalidua",

  linkedin: "https://linkedin.com/in/khalidmodev",

  resume: getAssetPath("/resume.pdf"),

  availability: "Open to Software Engineering Internships",

  heroButtons: [
    {
      label: "View Projects",
      href: "#projects",
      primary: true,
    },
    {
      label: "Download Resume",
      href: getAssetPath("/resume.pdf"),
      primary: false,
    },
  ],
};

// ======================================================
// ABOUT
// ======================================================

export const about = {
  title: "About",

  description: `
I'm a Computer Science & Artificial Intelligence student at Zewail City who enjoys turning ideas into reliable software.

My primary focus is backend engineering, but I enjoy working across the full stack—from designing databases and REST APIs to building responsive React applications and deploying them using modern development workflows.

Through personal and academic projects, I've built authentication systems, real-time apps, distributed projects, and interactive full-stack websites.

I'm constantly learning, building, and refining my engineering skills with the goal of becoming a world-class software engineer.
`,

  highlights: [
    "Backend Engineering",
    "Full-Stack Development",
    "REST API Design",
    "Authentication & RBAC",
    "Distributed Systems",
    "Real-Time Applications",
    "Docker & DevOps",
    "System Design",
  ],
};

// ======================================================
// QUICK STATS
// ======================================================

export const stats = [
  {
    label: "Featured Projects",
    value: "8",
  },
  {
    label: "GPA",
    value: "3.89",
  },
  {
    label: "Languages",
    value: "7+",
  },
  {
    label: "Technologies",
    value: "30+",
  },
];

// ======================================================
// CURRENT FOCUS
// ======================================================

export const currentlyLearning = [
  "Distributed Systems",
  "Software Architecture",
  "Microservices",
  "Cloud & DevOps",
  "Backend Performance",
  "Scalable System Design",
];

// ======================================================
// CONTACT
// ======================================================

export const contact = {
  email: "kh.mohamed.dev@gmail.com",

  location: "Giza, Egypt",

  github: "https://github.com/khalidua",

  linkedin: "https://linkedin.com/in/khalidmodev",

  message:
    "Whether you have an internship opportunity, an interesting project, or simply want to connect, I'd be happy to hear from you.",
};

// ======================================================
// EXPERIENCE
// ======================================================

export const experiences: Experience[] = [
  {
    id: "ta",

    role: "Junior Teaching Assistant",

    company: "Zewail City of Science and Technology",

    location: "Giza, Egypt",

    duration: "Sep 2025 – Present",

    description: [
      "Assist undergraduate students in Data Structures, Algorithms, and Object-Oriented Programming labs.",
      "Guide students through debugging sessions and help them improve problem-solving and coding practices.",
      "Support instructors in preparing lab materials, assignments, and programming exercises.",
      "Mentor students during office hours by explaining software engineering concepts and best coding practices."
    ],

    tags: [
      "C++",
      "Algorithms",
      "Data Structures",
      "OOP",
      "Teaching",
      "Mentoring"
    ]
  },

  {
    id: "projects",

    role: "Personal Software Engineering Projects",

    company: "Independent",

    location: "Remote",

    duration: "2024 – Present",

    description: [
      "Designed and developed multiple full-stack web applications using React, Node.js, Express, FastAPI, and PostgreSQL.",
      "Built secure authentication systems using JWT, OAuth, Firebase Authentication, and role-based access control.",
      "Developed real-time applications using Socket.IO and Redis for live communication and synchronization.",
      "Containerized applications with Docker and deployed projects using modern development workflows."
    ],

    tags: [
      "React",
      "Node.js",
      "FastAPI",
      "Docker",
      "Redis",
      "PostgreSQL"
    ]
  }
];

// ======================================================
// EDUCATION
// ======================================================

export const educationList: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science & Artificial Intelligence",

    institution: "Zewail City of Science and Technology",

    location: "Giza, Egypt",

    gpa: "3.89 / 4.00",

    duration: "2023 – Expected 2027",

    details: [
      "Relevant Coursework: Data Structures & Algorithms, Software Engineering, Operating Systems, Database Systems, Computer Networks, Web Development.",
      "Actively building backend and full-stack applications through academic and personal projects.",
      "Passionate about backend engineering, software architecture, distributed systems, and modern web technologies.",
      "Continuously expanding knowledge through hands-on projects, technical courses, and software engineering internships."
    ]
  }
];

// ======================================================
// SKILLS
// ======================================================

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "C#",
      "SQL",
      "HTML",
      "CSS"
    ]
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design"
    ]
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "ASP.NET",
      "REST APIs",
      "Socket.IO",
      "API Design"
    ]
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "SQL Server",
      "Entity Framework",
      "SQLAlchemy"
    ]
  },
  {
    category: "DevOps",
    items: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "CI/CD",
      "Linux"
    ]
  },
  {
    category: "Cloud",
    items: [
      "Azure",
      "Cloudinary",
      "Firebase"
    ]
  },
  {
    category: "Testing",
    items: [
      "Postman",
      "API Testing",
      "Unit Testing",
      "Integration Testing",
      "Debugging"
    ]
  },
  {
    category: "Software Engineering",
    items: [
      "Object-Oriented Programming",
      "SOLID Principles",
      "Design Patterns",
      "Agile",
      "Scrum"
    ]
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Figma"
    ]
  }
];

