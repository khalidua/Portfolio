import { useState } from 'react';
import { Project } from '../types';
import { getAssetPath } from '../utils/path';
import {
  Github,
  ExternalLink,
  ArrowRight,
  Shield,
  Cpu,
  Play,
  MessageSquare,
  Trophy,
  Network,
  Search,
  Database,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (slug: string) => void;
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
      <div className="w-full shrink-0 snap-center aspect-video relative overflow-hidden bg-zinc-950">
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
    <div className="w-full shrink-0 snap-center aspect-video relative flex flex-col items-center justify-center p-6 bg-zinc-50/50 dark:bg-zinc-900/30 select-none text-center">
      <div className="flex flex-col items-center gap-2.5 max-w-[80%]">
        <h4 className="text-lg sm:text-2xl font-bold text-zinc-800 dark:text-zinc-200 font-sans tracking-tight">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-405 font-sans leading-normal">
          {subtitle}
        </p>
        <span className="text-[8px] font-mono text-zinc-350 dark:text-zinc-650 uppercase tracking-widest mt-2">
          Future Screenshot
        </span>
      </div>
    </div>
  );
};

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [activeSlide, setActiveSlide] = useState(0);

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
          { title: "Message Expiration", subtitle: "Automatic message expiration (TTL)", icon: Cpu, imageSrc: "/images/projects/messenger/auto-delete-messages.webp" },
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
          { title: "Live Match Control", subtitle: "Real-time score entry with goal, card, and MVP logging", icon: Cpu, imageSrc: "/images/projects/zc-league/live-match.webp" },
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

  return (
    <div className="group flex flex-col h-full border border-zinc-200 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-900/10 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-0.5">

      {/* Screenshot Gallery Carousel */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-200 dark:border-zinc-800 bg-zinc-950 select-none group/gallery">
        <div
          id={`gallery-${project.id}`}
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

        {/* Carousel controls - visible on hover */}
        {slides.length > 1 && (
          <>
            {/* Left arrow */}
            {activeSlide > 0 && (
              <button
                onClick={() => {
                  const container = document.getElementById(`gallery-${project.id}`);
                  if (container) {
                    container.scrollTo({
                      left: container.scrollLeft - container.clientWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label="Previous screenshot"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-700 shadow-xs hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-zinc-900 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 cursor-pointer focus-visible:opacity-100"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}

            {/* Right arrow */}
            {activeSlide < slides.length - 1 && (
              <button
                onClick={() => {
                  const container = document.getElementById(`gallery-${project.id}`);
                  if (container) {
                    container.scrollTo({
                      left: container.scrollLeft + container.clientWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label="Next screenshot"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-700 shadow-xs hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-zinc-900 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 cursor-pointer focus-visible:opacity-100"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}

            {/* Pagination dots indicator */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-zinc-950/40 backdrop-blur-xs px-2 py-1 rounded-full border border-white/5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const container = document.getElementById(`gallery-${project.id}`);
                    if (container) {
                      container.scrollTo({
                        left: idx * container.clientWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  aria-label={`Go to screenshot ${idx + 1}`}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === idx
                      ? 'bg-blue-500 w-3'
                      : 'bg-zinc-450 dark:bg-zinc-600'
                    }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project Meta Information */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-3">

          {/* Project Header details */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
              {project.projectType}
            </span>
            <span className="text-xs font-mono text-zinc-450 dark:text-zinc-500">
              {project.duration}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-sans">
            {project.name}
          </h3>

          {/* Short description pitch */}
          <p className="text-base leading-relaxed text-zinc-650 dark:text-zinc-400 font-sans line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack section (4-6 technologies) */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {project.tags.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-[12px] font-mono rounded-md bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 select-none"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Action Link Footer */}
        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">

          {/* External repositories and demos */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                title="View Repository"
                className="text-zinc-450 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors cursor-pointer"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                title="View Sandbox"
                className="text-zinc-450 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors cursor-pointer"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Case study trigger */}
          <button
            onClick={() => onSelect(project.slug)}
            className="flex items-center gap-1.5 text-xs font-bold text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 group-hover:underline cursor-pointer font-mono"
          >
            <span>Explore Project</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
