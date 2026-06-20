import { ArrowDown, FileText, Mail, Terminal, GraduationCap } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onResumeClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onViewProjects, onResumeClick, onContactClick }: HeroProps) {
  const topTech = [
    { name: 'Python', bg: 'bg-zinc-100 hover:bg-zinc-200/50 border border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400' },
    { name: 'Go', bg: 'bg-zinc-100 hover:bg-zinc-200/50 border border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400' },
    { name: 'Next.js', bg: 'bg-zinc-100 hover:bg-zinc-200/50 border border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400' },
    { name: 'PostgreSQL', bg: 'bg-zinc-100 hover:bg-zinc-200/50 border border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400' },
    { name: 'Docker', bg: 'bg-zinc-100 hover:bg-zinc-200/50 border border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400' },
    { name: 'Kafka', bg: 'bg-zinc-100 hover:bg-zinc-200/50 border border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400' },
  ];

  return (
    <section className="relative overflow-hidden border-b border-zinc-200 py-16 sm:py-24 dark:border-zinc-800 transition-colors duration-300">
      
      {/* Subtle modern Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6">

          {/* Recruiter fast-indicator info */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Open for Internships 2026
              </span>
            </div>

            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-400 border border-blue-500/25 font-mono">
              <GraduationCap className="h-3 w-3 text-blue-500" />
              <span>GPA 3.88 • CS Specialist</span>
            </span>
          </div>

          {/* Primary Titles */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">
              Khalid Mohamed
            </h1>
            <h2 className="text-xl text-zinc-600 dark:text-zinc-450 font-medium">
              Full-Stack Software Engineer
            </h2>
          </div>

          {/* Action-Oriented Summary Card */}
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Computer Science student at Zewail City. Specializing in <span className="text-zinc-900 dark:text-zinc-300 font-medium">high-performance backend architectures</span>, microservices, and real-time systems. Building scalable solutions for production environments.
          </p>

          {/* Main Technologies Pills */}
          <div className="w-full pt-2">
            <div className="flex flex-wrap gap-2">
              {topTech.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-2 py-1 text-[10px] font-mono rounded ${tech.bg}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3 pt-4">
            <button
              onClick={onViewProjects}
              id="btn-hero-projects"
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded font-semibold text-xs transition-colors cursor-pointer text-center"
            >
              <span>View Core Projects</span>
            </button>

            <button
              onClick={onResumeClick}
              id="btn-hero-resume"
              className="px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-805 border border-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white dark:border-zinc-700 rounded font-semibold text-xs transition-colors cursor-pointer text-center"
            >
              <span>Download Resume</span>
            </button>

            <button
              onClick={onContactClick}
              id="btn-hero-contact"
              className="px-4 py-2.5 bg-transparent border border-zinc-200 hover:bg-zinc-50 text-zinc-600 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:text-zinc-400 rounded font-semibold text-xs transition-colors cursor-pointer text-center"
            >
              <span>Contact Me</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
