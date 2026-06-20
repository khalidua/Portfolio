import { Github, Linkedin } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onContactClick: () => void;
}

export default function Hero({ onViewProjects, onContactClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 py-20 sm:py-28 dark:border-zinc-800 transition-colors duration-300">
      
      {/* Premium Vercel-like grid background overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8">

          {/* Quick-scan metrics metadata */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">
                Open to Software Engineering Internships
              </span>
            </div>
          </div>

          {/* Core branding title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
              Khalid Mohamed
            </h1>
            <h2 className="text-xl sm:text-2xl text-zinc-800 dark:text-zinc-300 font-mono font-medium tracking-tight">
              Backend & Full-Stack Software Engineer
            </h2>
          </div>

          {/* Short, high-credibility engineering pitch */}
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-650 dark:text-zinc-405 font-sans">
            I'm a Computer Science & AI student at Zewail City who enjoys building reliable backend systems and full-stack applications. I like designing clean APIs, working with databases, and turning ideas into practical software through hands-on projects.
          </p>

          {/* Value proposition badges */}
          <div className="w-full">
            <div className="flex flex-wrap gap-2.5">
              {[
                'Backend Engineering',
                'Full-Stack Development',
                'Software Architecture'
              ].map((prop) => (
                <span
                  key={prop}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-full border border-zinc-200 bg-white/50 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400 select-none hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
                  <span>{prop}</span>
                </span>
              ))}
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-3 pt-4 w-full sm:w-auto">
            <button
              onClick={onViewProjects}
              id="btn-hero-projects"
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-blue-600 hover:bg-blue-505 text-white rounded-md font-semibold text-xs transition-all shadow-sm active:scale-98 cursor-pointer text-center"
            >
              <span>View Projects</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="btn-hero-resume"
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-white dark:border-zinc-800 rounded-md font-semibold text-xs transition-all shadow-xs active:scale-98 cursor-pointer text-center flex items-center justify-center"
            >
              <span>Resume</span>
            </a>

            <button
              onClick={onContactClick}
              id="btn-hero-contact"
              className="group inline-flex items-center gap-1 text-xs font-semibold text-zinc-905 hover:text-blue-600 dark:text-zinc-50 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer font-sans pl-1"
            >
              <span>Contact me</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]" aria-hidden="true">→</span>
            </button>
          </div>

          {/* Social links row */}
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 dark:text-zinc-500 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-6 w-full">
            <span className="text-[10px] uppercase font-bold tracking-wider">Find me on</span>
            <a href="https://github.com/khalidua" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors flex items-center gap-1">
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/khalidmodev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors flex items-center gap-1">
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

