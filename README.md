# Khalid Mohamed — Portfolio

Welcome to my personal developer portfolio! This repository showcases my engineering journey, technical projects, and skills specializing in backend engineering, distributed systems, and full-stack software development.

Live Demo: [khalidua.github.io/league/](https://khalidua.github.io/league/) (Featured Project)

---

## 🚀 About Me

I am a Computer Science & Artificial Intelligence student at Zewail City who enjoys building high-performance, fault-tolerant backend systems and interactive full-stack web applications. I design clean APIs, structure relational and volatile databases, and write maintainable, modular code.

---

## 🛠️ Tech Stack & Skills

- **Programming Languages**: Go, Python, TypeScript, JavaScript, C++, SQL, HTML, CSS
- **Backend Architecture**: Node.js, Express, FastAPI, REST APIs, WebSockets (Socket.io), API Gateway, Microservices
- **Databases & Caching**: PostgreSQL, SQLite, MongoDB, Redis (TTL, Keyspace Notifications, lists, queues), Apache Kafka
- **Frontend Development**: React, Next.js, Redux Toolkit, Tailwind CSS, React Router, Figma (UI/UX prototyping)
- **DevOps & Cloud**: Docker, Docker Compose, Kubernetes, GitHub Actions CI/CD, Azure Web Apps, Cloudinary, Nginx
- **Observability & Testing**: OpenSearch, Grafana, Vitest, React Testing Library, Postman API Testing

---

## 📁 Featured Projects

### 1. ClipSphere — Full-Stack Video Social Platform
*A Next.js and Node.js video sharing platform designed to handle large file uploads and asynchronous transcoding.*
- **Problem**: Uploading and transcoding large video files directly in the main request loop blocks the API thread and crashes server processes.
- **Solution**: Bypasses the application server by generating MinIO S3 presigned URLs for direct client uploads. Background worker queues (Redis & BullMQ) handle transcoding and notifications asynchronously.
- **Key Features**: Secure JWT Auth, Stripe Checkout integration for creator tips, live notifications via Socket.io, and auto-generated video duration validation.

### 2. Hybrid Ephemeral Messenger — Real-Time Volatile Chat
*A privacy-first 1-on-1 messaging platform built around the concept of permanent identity and temporary data.*
- **Problem**: Traditional chat platforms store message history indefinitely. Volatile chats require native real-time UI state sync when database records expire.
- **Solution**: Implemented a hybrid database split (MongoDB for profile records, Redis lists with TTL settings for chats). The Express server subscribes to Redis keyspace notification events and signals clients via Socket.IO to purge expired messages from screens.
- **Key Features**: Google popup authentication, Twilio SMS MFA session validation, client-side AES messaging encryption, online presence tracking, and a live System Pulse monitoring panel.

### 3. ZC League — Football Tournament Organizer
*An automated sports league manager replacing spreadsheets with automated round-robin matches and relational tables.*
- **Problem**: Organizing sports leagues via manual spreadsheets causes scheduling overlaps, double-booked fields, and slow standings updates.
- **Solution**: Built a React frontend and FastAPI (Python) backend using SQLAlchemy to map relational models. Organizers create teams, schedules generate automatically, and referee score submissions trigger atomic standings recalculations.
- **Key Features**: Role-Based Access Control (RBAC), team rosters, Group Stage standings, in-app notifications, and Cloudinary media upload integration.

### 4. Social Networking Platform — Go Microservices Architecture
*A decoupled social networking system designed in Go to prevent write bottlenecks and database congestion under load.*
- **Problem**: Single-point database congestion and synchronous API timeouts quickly compromise server uptime at scale.
- **Solution**: decomposed business domains into 6 Go microservices communicating asynchronously via Kafka event queues, caching user feeds in Redis clusters, and deploying containers inside Kubernetes.
- **Key Features**: Google OAuth2, decentralized API gateway routing, and OpenSearch log aggregation visualized inside Grafana metrics dashboards.

### 5. BingeBox — Netflix-Inspired Media App
*A responsive movie and series catalog designed to showcase modular components, state management, and unit testing.*
- **Problem**: Heavy search, filter, and watchlist manipulations in frontend catalogs lag without structured state management slices.
- **Solution**: Engineered a React 19 app using Redux Toolkit to cache watchlist slices, Framer Motion for smooth visual animations, and Chart.js dashboards for user viewing stats.
- **Key Features**: Watchlist persistence, admin-protected routing guards, and complete Vitest/React Testing Library unit testing.

### 6. INKIX — Shoe Personalization Figma Prototype
*An award-winning custom sneaker customization app focusing on user experience layout and visual hierarchy.*
- **Achievements**: Awarded **1st Place** among course teams in the university UI/UX design competition.
- **Solution**: Designed using design thinking methodologies, constructing responsive wireframes, iterative user testing models, and interactive high-fidelity prototypes.

---

## ⚙️ Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/khalidua/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```
