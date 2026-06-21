import { Project } from '../types';
import { getAssetPath } from '../utils/path';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  Sparkles,
  Code2,
  Zap,
  ChevronLeft,
  ChevronRight,
  Play,
  Cpu,
  Database,
  Shield,
  MessageSquare,
  Trophy,
  Network,
  Search
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

interface SlideInfo {
  title: string;
  subtitle: string;
  icon: any;
  imageSrc?: string;
}

const PlaceholderCard = ({ title, subtitle, icon: Icon, imageSrc }: { title: string, subtitle: string, icon: any, imageSrc?: string }) => {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageSrc && imageSrc !== '' && !imageFailed) {
    return (
      <div className="w-full shrink-0 snap-center aspect-video relative rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950">
        <img
          src={getAssetPath(imageSrc)}
          alt={title}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="w-full shrink-0 snap-center aspect-video relative flex flex-col items-center justify-center p-6 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-lg select-none text-center">
      <div className="flex flex-col items-center gap-2.5 max-w-[80%]">
        <h4 className="text-lg sm:text-2xl font-bold text-zinc-800 dark:text-zinc-200 font-sans tracking-tight">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans leading-normal">
          {subtitle}
        </p>
        <span className="text-[8px] font-mono text-zinc-300 dark:text-zinc-700 uppercase tracking-widest mt-2">
          Future Screenshot
        </span>
      </div>
    </div>
  );
};

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.slug]);

  const getProjectSlides = (slug: string): SlideInfo[] => {
    switch (slug) {
      case 'clipsphere':
        return [
          { title: "Homepage Dashboard", subtitle: "Video feed with infinite scroll and tabs", icon: Play, imageSrc: "/images/projects/clipsphere/homepage-dashboard.webp" },
          { title: "Video Player", subtitle: "Dedicated video playback page", icon: Play, imageSrc: "/images/projects/clipsphere/video-player.webp" },
          { title: "Ratings & Comments", subtitle: "Video details, reviews and rating system", icon: Database, imageSrc: "/images/projects/clipsphere/video-details-rating.webp" },
          { title: "Tip the Creator", subtitle: "Stripe-powered creator tipping modal", icon: Database, imageSrc: "/images/projects/clipsphere/tip-creator.webp" },
          { title: "Stripe Payment", subtitle: "Integrated Stripe checkout for tipping", icon: Database, imageSrc: "/images/projects/clipsphere/stripe-payment.webp" },
          { title: "Upload Interface", subtitle: "Drag & drop video upload with metadata", icon: Cpu, imageSrc: "/images/projects/clipsphere/upload-interface.webp" },
          { title: "My Videos", subtitle: "Creator's own uploaded video library", icon: Play, imageSrc: "/images/projects/clipsphere/own-videos.webp" },
          { title: "Earnings Dashboard", subtitle: "Creator tips and pending balance", icon: Database, imageSrc: "/images/projects/clipsphere/earnings.webp" },
          { title: "Account & Info", subtitle: "User profile and settings panel", icon: Cpu, imageSrc: "/images/projects/clipsphere/account-info.webp" },
        ];
      case 'hybrid-ephemeral-messenger':
        return [
          { title: "Chat Interface", subtitle: "Real-time conversation room", icon: MessageSquare, imageSrc: "/images/projects/messenger/chat-interface.webp" },
          { title: "Login Screen", subtitle: "Secure login and account access", icon: Shield, imageSrc: "/images/projects/messenger/login-screen.webp" },
          { title: "Phone Verification", subtitle: "Two-factor SMS auth via Twilio", icon: Cpu, imageSrc: "/images/projects/messenger/auto-delete-messages.webp" },
        ];
      case 'zc-league':
        return [
          { title: "Home Hero Showcase", subtitle: "Dynamic upcoming matches spotlight and navigation hub", icon: Play, imageSrc: "/images/projects/zc-league/home-hero.webp" },
          { title: "Matches Schedule", subtitle: "Upcoming fixtures grouped by date with search & filters", icon: Trophy, imageSrc: "/images/projects/zc-league/matches-schedule.webp" },
          { title: "Tournaments", subtitle: "Available tournaments with registration status", icon: Network, imageSrc: "/images/projects/zc-league/tournaments.webp" },
          { title: "Teams Directory", subtitle: "All teams browseable by group with logo support", icon: Database, imageSrc: "/images/projects/zc-league/teams.webp" },
          { title: "Players Roster", subtitle: "Full player list with team, position, and status filters", icon: Search, imageSrc: "/images/projects/zc-league/players.webp" },
          { title: "Player Profile", subtitle: "Individual player stats tracking cards, goals, and positions", icon: Search, imageSrc: "/images/projects/zc-league/player-profile.webp" },
          { title: "Team Management", subtitle: "Captain portal to add or remove players and upload logo", icon: Trophy, imageSrc: "/images/projects/zc-league/manage-team.webp" },
          { title: "Admin Dashboard", subtitle: "System overview with live player, team, and match stats", icon: Cpu, imageSrc: "/images/projects/zc-league/admin-dashboard.webp" },
          { title: "Live Match Control", subtitle: "Real-time score entry with goal, card, and MVP logging", icon: Zap, imageSrc: "/images/projects/zc-league/live-match.webp" },
        ];
      case 'inkix':
        return [
          { title: "Splash & Login", subtitle: "Brand splash and auth entry screens", icon: Play, imageSrc: "/images/projects/inkix/home-page.webp" },
          { title: "Home & Categories", subtitle: "Featured deals and design category menu", icon: Cpu, imageSrc: "/images/projects/inkix/shoe-customizer.webp" },
          { title: "Product & Customizer", subtitle: "Product detail and interactive customizer", icon: Database, imageSrc: "/images/projects/inkix/product-preview.webp" },
        ];
      case 'bingebox':
        return [
          { title: "Featured Movies Hero", subtitle: "Landing page presenting trending movies and features", icon: Play, imageSrc: "/images/projects/bingebox/HeroPage.webp" },
          { title: "Explore Content Grid", subtitle: "Explore and search categories, genres, and shows", icon: Cpu, imageSrc: "/images/projects/bingebox/ExplorePage.webp" },
          { title: "Trending & Top Charts", subtitle: "Dynamic carousel feeds of the top-rated and trending media", icon: Play, imageSrc: "/images/projects/bingebox/trendingAndTop.webp" },
          { title: "Subscription Plans", subtitle: "Polished pricing structures and plans page", icon: Database, imageSrc: "/images/projects/bingebox/SubscriptionsPage.webp" },
          { title: "Secure Portal Login", subtitle: "Custom themed gateway entry screen", icon: Shield, imageSrc: "/images/projects/bingebox/SpecialLoginPage.webp" },
        ];
      case 'social-network':
        return [
          { title: "Grafana Overview", subtitle: "Real-time request rate monitoring by service", icon: Network, imageSrc: "/images/projects/social-network/grafana-request-rate.webp" },
          { title: "Load Test Traffic", subtitle: "Live traffic metrics visualization under load", icon: Cpu, imageSrc: "/images/projects/social-network/grafana-request-rate-spike.webp" },
          { title: "p95 Latency", subtitle: "Latency tracking per microservice endpoint", icon: Database, imageSrc: "/images/projects/social-network/grafana-latency.webp" },
          { title: "Prometheus Targets", subtitle: "Scraping endpoints for microservices and databases", icon: Database, imageSrc: "/images/projects/social-network/prometheus-targets-1.webp" },
          { title: "Scrape Target Health", subtitle: "Dynamic service state check and health history", icon: Network, imageSrc: "/images/projects/social-network/grafana-target-health.webp" },
        ];
      default:
        return [];
    }
  };

  const slides = getProjectSlides(project.slug);

  const groupTechnologies = (tags: string[]) => {
    const groups: { [key: string]: string[] } = {
      Languages: [], Backend: [], Frontend: [], Database: [], 'Infrastructure & Cloud': [], Security: [], Tools: []
    };

    tags.forEach(tag => {
      const lower = tag.toLowerCase();
      if (['javascript', 'typescript', 'python', 'c++', 'c#', 'sql', 'html', 'css', 'go', 'golang', 'bash'].includes(lower)) groups.Languages.push(tag);
      else if (['postgres', 'postgresql', 'mongodb', 'redis', 'sql server', 'sqlite', 'vector database', 'pgvector', 's3', 'db', 'databases'].some(t => lower.includes(t))) groups.Database.push(tag);
      else if (['docker', 'docker compose', 'kubernetes', 'azure', 'aws', 'gcp', 'cloud run', 'cloudinary', 'github actions', 'ci/cd', 'devops', 'firebase', 'nginx', 'apache kafka', 'kafka', 'infrastructure'].some(term => lower.includes(term))) groups['Infrastructure & Cloud'].push(tag);
      else if (['react', 'next.js', 'vite', 'tailwind css', 'bootstrap', 'responsive design', 'sass', 'css'].some(term => lower.includes(term))) groups.Frontend.push(tag);
      else if (['jwt', 'oauth', 'auth', 'authentication', 'rbac', 'security', 'crypto', 'e2ee', 'encryption', 'rsa', 'aes'].some(term => lower.includes(term))) groups.Security.push(tag);
      else if (['node.js', 'express', 'fastapi', 'asp.net', 'rest', 'grpc', 'sockets', 'socket.io', 'bullmq', 'webcrypto', 'drizzle', 'sqlalchemy', 'entity framework'].some(term => lower.includes(term))) groups.Backend.push(tag);
      else {
        if (['pandas', 'scikit-learn', 'tensorflow', 'numpy', 'keras', 'machine learning', 'ml'].some(term => lower.includes(term))) {
          if (!groups['AI & ML']) groups['AI & ML'] = [];
          groups['AI & ML'].push(tag);
        } else groups.Tools.push(tag);
      }
    });

    return Object.keys(groups).reduce((acc, key) => {
      if (groups[key].length > 0) acc[key] = groups[key];
      return acc;
    }, {} as { [key: string]: string[] });
  };

  const groupedTech = groupTechnologies(project.tags);

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="mx-auto max-w-5xl px-4 py-16 md:py-20 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group h-9 px-4 rounded-lg border border-zinc-200 bg-white text-xs font-semibold text-zinc-700 shadow-xs hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-805 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back</span>
        </button>
        <span className="font-mono text-xs text-zinc-450 dark:text-zinc-500 uppercase tracking-widest">
          Project Case Study
        </span>
      </div>

      <header className="mb-10 space-y-5">
        <div className="space-y-1.5">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
            {project.projectType}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
            {project.name}
          </h1>
        </div>
        <p className="text-lg sm:text-xl text-zinc-650 dark:text-zinc-400 font-medium leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-b border-zinc-200 dark:border-zinc-800/80 py-5 mt-6 font-mono text-xs">
          <div>
            <span className="block text-zinc-400 dark:text-zinc-500 mb-1">Role:</span>
            <span className="font-bold text-zinc-800 dark:text-zinc-200">{project.role}</span>
          </div>
          <div>
            <span className="block text-zinc-400 dark:text-zinc-500 mb-1">Duration:</span>
            <span className="font-bold text-zinc-800 dark:text-zinc-200">{project.duration}</span>
          </div>
          {project.github && (
            <div>
              <span className="block text-zinc-400 dark:text-zinc-500 mb-1">Source Code:</span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center gap-1 cursor-pointer"
              >
                <Github className="h-3.5 w-3.5" />
                <span>Source Code</span>
              </a>
            </div>
          )}
          <div>
            <span className="block text-zinc-400 dark:text-zinc-500 mb-1">Live Demo:</span>
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center gap-1 cursor-pointer"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="font-bold text-zinc-400 dark:text-zinc-500 italic">Private Deployment</span>
            )}
          </div>
        </div>
      </header>

      <div className="relative aspect-video w-full overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 rounded-xl select-none group/gallery mb-12">
        <div
          id={`gallery-detail-${project.slug}`}
          className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none"
          onScroll={(e) => {
            const container = e.currentTarget;
            const slideWidth = container.clientWidth;
            const currentSlide = Math.round(container.scrollLeft / slideWidth);
            setActiveSlide(currentSlide);
          }}
        >
          {slides.map((slide, idx) => (
            <PlaceholderCard
              key={idx}
              title={slide.title}
              subtitle={slide.subtitle}
              icon={slide.icon}
              imageSrc={slide.imageSrc}
            />
          ))}
        </div>
        {slides.length > 1 && (
          <>
            {activeSlide > 0 && (
              <button
                onClick={() => {
                  const container = document.getElementById(`gallery-detail-${project.slug}`);
                  if (container) container.scrollTo({ left: container.scrollLeft - container.clientWidth, behavior: 'smooth' });
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-700 shadow-xs hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/95 dark:text-zinc-300 opacity-0 group-hover/gallery:opacity-100 transition-opacity cursor-pointer"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
              </button>
            )}
            {activeSlide < slides.length - 1 && (
              <button
                onClick={() => {
                  const container = document.getElementById(`gallery-detail-${project.slug}`);
                  if (container) container.scrollTo({ left: container.scrollLeft + container.clientWidth, behavior: 'smooth' });
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-700 shadow-xs hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/95 dark:text-zinc-300 opacity-0 group-hover/gallery:opacity-100 transition-opacity cursor-pointer"
              >
                <ChevronRight className="h-4.5 w-4.5" />
              </button>
            )}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-zinc-950/40 backdrop-blur-xs px-2.5 py-1.5 rounded-full border border-white/5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const container = document.getElementById(`gallery-detail-${project.slug}`);
                    if (container) container.scrollTo({ left: idx * container.clientWidth, behavior: 'smooth' });
                  }}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === idx ? 'bg-blue-500 w-3.5' : 'bg-zinc-450 dark:bg-zinc-650'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project at a Glance */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 mb-12 rounded-xl border border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/10 font-sans text-xs">
        <div>
          <span className="block text-zinc-400 dark:text-zinc-500 font-semibold mb-0.5 uppercase tracking-wider font-mono text-[9px] sm:text-[10px]">Duration</span>
          <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{project.duration}</span>
        </div>
        <div>
          <span className="block text-zinc-400 dark:text-zinc-500 font-semibold mb-0.5 uppercase tracking-wider font-mono text-[9px] sm:text-[10px]">Team Size</span>
          <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{project.teamSize}</span>
        </div>
        <div>
          <span className="block text-zinc-400 dark:text-zinc-500 font-semibold mb-0.5 uppercase tracking-wider font-mono text-[9px] sm:text-[10px]">Role</span>
          <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{project.role}</span>
        </div>
        <div>
          <span className="block text-zinc-400 dark:text-zinc-500 font-semibold mb-0.5 uppercase tracking-wider font-mono text-[9px] sm:text-[10px]">Status</span>
          <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{project.status}</span>
        </div>
      </div>

      <div className="space-y-12">
        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-400 font-mono flex items-center gap-2">
            <div className="p-1.5 rounded bg-blue-500/10 text-blue-500 dark:bg-blue-500/20"><BookOpen className="h-4 w-4" /></div>
            <span>Overview</span>
          </h3>
          <div className="space-y-4">
            <div className="space-y-1.5 bg-zinc-50 dark:bg-zinc-900/40 p-5 border-l-4 border-blue-500 rounded-r-lg">
              <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Project Summary</span>
              <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 font-sans">{project.summary}</p>
            </div>
            <p className="text-base md:text-lg/relaxed leading-relaxed text-zinc-655 dark:text-zinc-400 font-sans whitespace-pre-line">{project.description}</p>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-400 font-mono">
            Problem
          </h3>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/10 leading-relaxed text-zinc-650 dark:text-zinc-400 text-base md:text-lg/relaxed font-sans">{project.problem}</div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-400 font-mono">
            Solution
          </h3>
          <p className="text-base md:text-lg/relaxed leading-relaxed text-zinc-650 dark:text-zinc-400 font-sans">{project.solution}</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-400 font-mono flex items-center gap-2">
            <div className="p-1.5 rounded bg-violet-500/10 text-violet-500 dark:bg-violet-500/20"><Sparkles className="h-4 w-4" /></div>
            <span>Features</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-zinc-200/80 bg-white/40 dark:border-zinc-800/80 dark:bg-zinc-900/25 transition-all duration-300 hover:border-violet-500/20">
                <div className="p-1.5 rounded-md bg-violet-500/10 text-violet-500 dark:bg-violet-500/20 shrink-0"><Sparkles className="h-4 w-4" /></div>
                <span className="text-sm/relaxed text-zinc-650 dark:text-zinc-300 leading-relaxed font-sans">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-400 font-mono flex items-center gap-2">
            <div className="p-1.5 rounded bg-sky-500/10 text-sky-500 dark:bg-sky-500/20"><Code2 className="h-4 w-4" /></div>
            <span>Tech Stack</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(groupedTech).map(([category, items]) => (
              <div key={category} className="space-y-3 border border-zinc-200/85 dark:border-zinc-850 p-5 rounded-xl bg-zinc-50/30 dark:bg-zinc-900/10">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-500">{category}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span key={item} className="px-2.5 py-0.5 text-[12px] font-mono bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-855 text-zinc-650 dark:text-zinc-400 rounded-md select-none">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-400 font-mono">
            Challenges
          </h3>
          <div className="p-6 border-l-4 border-amber-500 bg-amber-500/5 text-base md:text-lg/relaxed leading-relaxed text-zinc-650 dark:text-zinc-400 font-sans rounded-r-xl">{project.challenges}</div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-400 font-mono">
            What I Learned
          </h3>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50/20 p-6 dark:border-zinc-800 dark:bg-zinc-900/5 leading-relaxed text-zinc-650 dark:text-zinc-400 text-base md:text-lg/relaxed font-sans">{project.learning}</div>
        </section>

        <div className="flex justify-between items-center bg-zinc-50 border border-zinc-200 rounded-xl p-6 dark:border-zinc-800/80 dark:bg-zinc-900/10 mt-16">
          <div className="space-y-1">
            <div className="text-sm font-bold font-sans text-zinc-900 dark:text-zinc-100">Explore more projects</div>
            <div className="text-xs font-mono text-zinc-500">Return to the projects section.</div>
          </div>
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 h-9 px-4 rounded-lg bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 text-xs font-semibold shadow-xs hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-95 transition-all cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>All Projects</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
