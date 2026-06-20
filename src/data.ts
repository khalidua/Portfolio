import { Project, Experience, Education, SkillGroup } from './types';

export const projects: Project[] = [
{
  id: "1",

  name: "ClipSphere",

  slug: "clipsphere",

  tagline:
    "A video sharing platform where files upload and process in the background so the website stays fast and responsive.",

  description:
    "I built ClipSphere because I wanted to understand how video sites like YouTube handle huge file uploads without freezing the user interface. When a user uploads a video, processing it (like converting formats or generating thumbnails) takes too much time to handle inside a standard HTTP request.\n\nTo solve this, I built a frontend in React and a backend using Node.js and Express. Instead of making the user wait, the API receives the upload, schedules the heavy processing work in the background, and immediately lets the user know the video is processing.\n\nThis project was a great way to learn how to separate a fast user-facing API from slow background tasks using a job queue.",

  image: "clipsphere.png",

  category: "fullstack",

  projectType: "Full-Stack Video Sharing Platform",

  duration: "2026",

  role: "Full-Stack Developer",

  github: "YOUR_GITHUB_LINK",

  live: "",

  tags: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Redis",
    "Docker",
    "JWT",
    "Cloudinary"
  ],

  cardHighlights: [
    "Secure authentication using JWT.",
    "Background processing for media-related tasks.",
    "Containerized development using Docker."
  ],

  cardChallenge:
    "Handling large video uploads while keeping the application responsive.",

  summary:
    "A video platform project built to learn how to handle large file uploads and slow background tasks without blocking the main website.",

  problem:
    "I've always been curious about how sites like YouTube process videos. When I tried building a basic video upload feature in a simple backend, it was a disaster. Any video larger than a few megabytes would freeze the server, causing it to time out and lock out anyone else trying to use the app. I realized I couldn't just process uploads in the main request loop; I needed a setup where the server accepts the file quickly, lets the user know it's being worked on, and processes it in the background.",

  solution:
    "I built a Node.js and Express API coupled with a React frontend that offloads video processing to a background worker queue. When a user drops a video in the UI, the frontend sends it directly to the Express server, which writes the file metadata to MongoDB, uploads the raw video file to Cloudinary, and drops a processing job into Redis.\n\nA separate background worker running BullMQ picks up the job, handles the slow conversion and thumbnail generation, and updates the database once it's done. This ensures the main web server never blocks.",

  features: [
    "Log in securely to see your own video dashboard",
    "Drag and drop video files to start an upload",
    "Track processing progress with a live status loader",
    "Browse, watch, and play uploaded videos on your home feed",
    "Download processed videos in different formats"
  ],

  challenges:
    "The biggest headache was handling huge file uploads without crashing the Node.js server process. Originally, Express would try to buffer the entire file in RAM before saving it, which caused the server to run out of memory and crash on 200MB videos. I had to rewrite the upload handler using multer to stream the files directly to a temporary local disk directory instead of keeping them in memory, before sending them to Cloudinary. It was a tedious process of debugging stream errors and clean-up functions, but it taught me a lot about memory management in Node.",

  learning:
    "This project completely changed how I think about server resources. I originally thought a single server could do everything if it was fast enough. Now, I realize that any task taking more than a few hundred milliseconds must be handled asynchronously. If I rebuilt this today, I would use direct client-to-cloud uploads (presigned URLs) so that files go straight from the browser to Cloudinary, bypassing my Express server entirely to save bandwidth and CPU cycles.",

  teamSize: "Solo Project",

  status: "Completed"
}
,
{
  id: "2",

  name: "Hybrid Ephemeral Messenger",

  slug: "hybrid-ephemeral-messenger",

  tagline:
    "A real-time messaging app where chat rooms and messages automatically self-destruct after a set timer.",

  description:
    "I built this chat app to explore real-time communication and how to handle data that shouldn't live forever. I wanted to create a simple, privacy-focused messaging platform where rooms and messages disappear automatically after a set period.\n\nThe app uses React for the UI, Node.js and Express for the API, and Socket.IO to keep the chats in sync. The real magic happens in Redis, where I set up automatic expiration times for messages so they disappear from the cache and database without manual cleanup.\n\nIt was a great project for learning how web sockets keep users connected and how to work with memory-efficient key-value stores.",

  image: "messenger.png",

  category: "backend",

  projectType: "Real-Time Messaging Platform",

  duration: "2026",

  role: "Backend & Full-Stack Developer",

  github: "YOUR_GITHUB_LINK",

  live: "",

  tags: [
    "React",
    "Node.js",
    "Express",
    "Socket.IO",
    "Redis",
    "MongoDB",
    "Docker",
    "Firebase Authentication"
  ],

  cardHighlights: [
    "Real-time communication using Socket.IO.",
    "Automatic message expiration using Redis TTL.",
    "Dockerized multi-service architecture."
  ],

  cardChallenge:
    "Building a messaging system that feels instant while ensuring expired messages are automatically removed.",

  summary:
    "A chat application that uses WebSockets for real-time messaging and Redis to automatically delete messages after their expiration time.",

  problem:
    "I wanted to build a real-time messaging app, but I was uncomfortable with how most messaging platforms store every single text message forever. I wanted a private space where I could chat with friends, knowing that my rooms and conversations would completely self-destruct after a short timer, without leaving leftovers in database backups.",

  solution:
    "I used Redis to cache active chats and set a TTL (Time-To-Live) on each message key. When the TTL expires, Redis automatically deletes the key. I also integrated Firebase Authentication to make signup secure, and Socket.IO to push messages to active users instantly. If a user joins later, the app fetches whatever unexpired messages are left in the database.",

  features: [
    "Create a temporary chat room with a custom destruction timer",
    "Send instant messages that disappear for everyone once the timer runs out",
    "See typing indicators when a friend is drafting a message",
    "Check who is currently online in the chat room",
    "Log in securely using a Google account via Firebase"
  ],

  challenges:
    "I ran into a tough sync issue when messages expired in Redis. While Redis deleted the keys, the users' browser screens didn't update automatically, meaning expired messages stayed visible until the page refreshed. To fix this, I had to configure Redis keyspace notifications in my Docker database configuration. This let my Node.js server listen for Redis expired events and immediately emit a Socket.IO message to delete the text from the screens of all connected clients in real time.",

  learning:
    "I realized that memory is a precious resource and databases don't always need to write to disk. Prior to this, I used MongoDB for everything. Working with Redis taught me how to structure data entirely in memory. If I rebuilt this today, I would implement End-to-End Encryption (E2EE) using the Web Crypto API so that even the Node.js server cannot read the messages while they are transit or sitting in Redis.",

  teamSize: "Solo Project",

  status: "Completed"
}
,
{
  id: "3",

  name: "INKIX",

  slug: "inkix",

  tagline:
    "A custom shoe design platform that lets users personalize sneakers through an interactive web interface before placing an order.",

  description:
    "INKIX is a web application that allows users to customize shoes by selecting colors, materials, and design elements through an intuitive interface. The project focused on creating a smooth user experience while combining modern frontend development with backend functionality.\n\nThis project was built to explore how customization platforms work while improving my frontend and full-stack development skills. The main goal was to create a responsive application that makes designing personalized shoes simple and enjoyable.",

  image: "inkix.png",

  category: "fullstack",

  projectType: "Full-Stack Web Application • UI/UX Design",

  duration: "2026",

  role: "Full-Stack Developer",

  github: "YOUR_GITHUB_LINK",

  live: "",

  tags: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB"
  ],

  cardHighlights: [
    "Interactive shoe customization.",
    "Live visual updates.",
    "Order placement workflow."
  ],

  cardChallenge:
    "Managing state as users continuously modified their design.",

  summary:
    "Build an interactive shoe customization platform where users can personalize products through a clean interface while learning full-stack development and UI/UX principles.",

  problem:
    "Many online customization tools feel cluttered or difficult to use. I wanted to design a cleaner experience where users could experiment with different shoe designs without feeling overwhelmed.",

  solution:
    "I designed and developed a responsive web application that provides an interactive customization workflow. Users can modify different parts of a shoe, preview their design, and manage their selections through a clean interface.",

  features: [
    "Interactive shoe customization",
    "Live visual updates",
    "Responsive user interface",
    "User authentication",
    "Product management",
    "Order workflow"
  ],

  challenges:
    "Keeping the customization interface intuitive while supporting multiple design options was tough. I also had to manage application state as users continuously modified their design, and make sure the layout worked well on both desktop and mobile screens.",

  learning:
    "This project strengthened my understanding of UI/UX design principles and showed me how important state management becomes in interactive applications. It also helped me improve communication between the frontend and backend while building a complete user-facing product.",

  teamSize: "Solo Project",

  status: "Completed"
}
,
{
  id: "4",

  name: "ZC League",

  slug: "zc-league",

  tagline:
    "A sports league manager that helps organizers schedule university matches and update live scores.",

  description:
    "Our university tournaments were always organized using static Excel sheets and chaotic WhatsApp group chats, which made it hard to keep track of schedules and live scores. I decided to build ZC League to centralize everything in one place.\n\nI built a web platform where tournament administrators can create leagues, input teams, and generate match schedules automatically. Referees have special access to update match scores live, and players can log in to view the latest standings, upcoming matches, and stats.\n\nThis project helped me learn database design and how to manage different user permissions in a real web application.",

  image: "zcleague.png",

  category: "fullstack",

  projectType: "Sports League Management System",

  duration: "2026",

  role: "Lead Full-Stack Developer",

  github: "YOUR_GITHUB_LINK",

  live: "",

  tags: [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Socket.IO",
    "Docker",
    "JWT",
    "Tailwind CSS"
  ],

  cardHighlights: [
    "Tournament scheduling and fixture management.",
    "Real-time score updates using Socket.IO.",
    "Role-based access for administrators, referees, and players."
  ],

  cardChallenge:
    "Keeping match information synchronized across connected users while maintaining a clean and scalable backend architecture.",

  summary:
    "A tournament web app replacing manual spreadsheets with automated scheduling, standing tables, and live score updates.",

  problem:
    "Our university sports league was organized entirely via messy spreadsheets and WhatsApp group chats. It was a nightmare. Organizers would accidentally schedule two games on the same field at the same time, referees didn't know which games they were assigned to, and players had to wait hours for standings to be updated manually. I wanted to build a web app to automate all of this.",

  solution:
    "I developed ZC League, a full-stack tournament manager. I wrote a scheduling script that automatically generates round-robin fixtures ensuring no team or referee is double-booked. I built a PostgreSQL database with strict foreign key constraints to model leagues, teams, matches, and players, and created a dashboard where referees can update game scores live, immediately updating standings tables across the app via Socket.IO.",

  features: [
    "Generate complete, conflict-free match schedules with one click",
    "Track live scores and goal scorers as they happen",
    "View automatically updated league standings and goal statistics",
    "Log in as a referee to enter match events directly from the sideline",
    "Browse teams, player profiles, and match histories"
  ],

  challenges:
    "The hardest part was maintaining data consistency during live score updates. If a referee recorded a goal, the database had to update the match score, increment the player's goal count, recalculate both teams' points and goal differences, and update the league table. If any of those queries failed, the tables would mismatch. I had to learn how to write SQL database transactions in PostgreSQL using knex/pg to group these queries. If one step failed, the entire transaction rolled back, preventing corrupted tournament standings.",

  learning:
    "I originally thought NoSQL databases were always better because they are easy to start with, but this project made me realize the massive value of SQL constraints. Setting up relational integrity saved me from writing hundreds of lines of validation checks in Javascript. If I rebuilt this today, I would add a double-blind score reporting system where both team captains must agree on the final score before the standings update, reducing the admin workload even further.",

  teamSize: "Solo Project",

  status: "Completed"
}
,
{
  id: "5",

  name: "Social Media Platform",

  slug: "social-network",

  tagline:
    "A social media website featuring user profiles, posts, friendships, and live notifications.",

  description:
    "I wanted to build a social media site to learn how to handle complex relationships between users, like friends, likes, and comments. The backend is built with Express and MongoDB, while the frontend is a React application.\n\nThe app supports user signup, creating posts with text and images, commenting, liking, sending friend requests, and getting real-time notifications when someone interacts with your profile.\n\nIt was a challenging project because of how many features are connected. It taught me how to keep my code organized and modular.",

  image: "social-network.png",

  category: "fullstack",

  projectType: "Social Media Platform",

  duration: "2026",

  role: "Backend & Full-Stack Developer",

  github: "YOUR_GITHUB_LINK",

  live: "",

  tags: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.IO",
    "JWT",
    "Docker",
    "Tailwind CSS"
  ],

  cardHighlights: [
    "Secure authentication using JWT.",
    "Real-time notifications and messaging.",
    "RESTful API with modular backend architecture."
  ],

  cardChallenge:
    "Designing a backend capable of managing multiple social features while keeping the codebase modular and maintainable.",

  summary:
    "A full-stack social network built to learn database relationships, user-to-user interactions, and real-time feeds.",

  problem:
    "I wanted to understand how social media backends work behind the scenes. Specifically, I wanted to learn how to model complex relationships—like following a user, commenting on a thread, and displaying dynamic feeds—without making my API slow down as the database grew.",

  solution:
    "I built a social media backend using Node.js, Express, and MongoDB, complete with a React frontend. The platform supports user profiles, posts with image uploads, likes, nested comments, and a friend request system. To make the app feel alive, I added Socket.IO to push instant notifications whenever someone likes your post or sends you a friend request.",

  features: [
    "Personalize your profile page with a bio and avatar",
    "Share posts with text and image uploads",
    "Like and comment on posts to interact with friends",
    "Send, accept, or decline friend requests",
    "Get instant visual notifications when someone interacts with your posts"
  ],

  challenges:
    "I ran into major performance issues when fetching the home feed. Originally, my feed query did multiple separate database queries: getting the user's friends, finding their posts, and lookup info for likes. It was incredibly slow. I had to learn MongoDB aggregation pipelines, using $lookup and $project to fetch all posts, join user details, check if the current user liked each post, and paginate the results in a single database roundtrip. This cut my API response times from 800ms to under 50ms.",

  learning:
    "The biggest mistake I made was not paginating the API responses from day one. I originally fetched all comments for a post at once, which worked fine with 5 comments but crashed the UI when I tested it with 100 comments. Now, I paginate every list query by default. If I rebuilt this today, I would use PostgreSQL instead of MongoDB. Modeling friendships and friend-of-friend relations is much cleaner and faster with relational tables and joins than NoSQL arrays.",

  teamSize: "Solo Project",

  status: "Completed"
}
,
{
  id: "6",

  name: "BingeBox",

  slug: "bingebox",

  tagline:
    "Movie & TV Streaming Platform",

  description:
    "BingeBox is a full-stack streaming platform inspired by modern entertainment services. The goal was to design a polished user experience while building a scalable application structure with reusable components, API integration, authentication, and responsive layouts.\n\nThis project was built to recreate the experience of a modern streaming platform while improving my frontend architecture and full-stack development skills. The application allows users to browse movies and TV shows, search content, view detailed information, and manage a personalized watchlist through a clean and responsive interface.",

  image: "bingebox.png",

  category: "fullstack",

  projectType: "Full-Stack Web Application",

  duration: "2025",

  role: "Full-Stack Developer",

  github: "YOUR_GITHUB_LINK",

  live: "",

  tags: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Docker"
  ],

  cardHighlights: [
    "Browse movies and TV shows.",
    "Detailed movie pages and search.",
    "Personal watchlist management."
  ],

  cardChallenge:
    "Organizing the frontend into reusable components while keeping state management simple.",

  summary:
    "I built BingeBox to recreate the experience of a modern streaming platform while improving my frontend architecture and full-stack development skills. The application allows users to browse movies and TV shows, search content, view detailed information, and manage a personalized watchlist through a clean and responsive interface.",

  problem:
    "I wanted to understand how streaming platforms organize large collections of content while maintaining a smooth and intuitive user experience. This project allowed me to practice designing a frontend that remains fast and organized as the application grows.",

  solution:
    "I designed and built a responsive web application where users can browse movies, search content, view detailed information, and manage their watchlist. The application communicates with a backend API while keeping the interface modular and easy to maintain.",

  features: [
    "Browse movies and TV shows",
    "Search functionality",
    "Detailed movie pages",
    "User authentication",
    "Personal watchlist",
    "Responsive design"
  ],

  challenges:
    "One of the biggest challenges was organizing the frontend into reusable components while keeping state management simple. Another challenge was designing an interface that remained responsive and easy to navigate across different screen sizes.",

  learning:
    "This project strengthened my understanding of frontend architecture, reusable component design, routing, API integration, and building responsive user interfaces. It also reinforced the importance of organizing code as applications become larger.",

  teamSize: "Solo Project",

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

  resume: "/resume.pdf",

  availability: "Open to Software Engineering Internships",

  heroButtons: [
    {
      label: "View Projects",
      href: "#projects",
      primary: true,
    },
    {
      label: "Download Resume",
      href: "/resume.pdf",
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

