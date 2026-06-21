import { Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { getAssetPath } from '../utils/path';

interface HeroProps {
  onViewProjects: () => void;
  onContactClick: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

export default function Hero({ onViewProjects, onContactClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 py-20 md:py-24 dark:border-zinc-800 transition-colors duration-300">

      {/* Premium Vercel-like grid background overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-start gap-8"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >

          {/* Quick-scan metrics metadata */}
          <motion.div className="flex flex-wrap items-center gap-3" variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">
                Open to Software Engineering Internships
              </span>
            </div>
          </motion.div>

          {/* Core branding title */}
          <motion.div className="space-y-3" variants={fadeUp} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
              Khalid Mohamed
            </h1>
            <h2 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-mono font-bold tracking-tight">
              Backend & Full-Stack Software Engineer
            </h2>
          </motion.div>

          {/* Short, high-credibility engineering pitch */}
          <motion.p
            className="max-w-2xl text-base sm:text-lg/relaxed text-zinc-650 dark:text-zinc-400 font-sans"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            I design and build high-performance, fault-tolerant backend systems and distributed architectures. Focused on developing scalable APIs, event-driven message queues, and reliable services.
          </motion.p>

          {/* Value proposition badges */}
          <motion.div className="w-full" variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Backend Engineering',
                'Distributed Systems',
                'Full-Stack Development',
              ].map((prop) => (
                <span
                  key={prop}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold rounded-md border border-zinc-200 bg-white/50 text-zinc-650 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400 select-none hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
                  <span>{prop}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA Row */}
          <motion.div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto" variants={fadeUp} transition={{ duration: 0.5 }}>
            <button
              onClick={onViewProjects}
              id="btn-hero-projects"
              className="flex-1 sm:flex-initial h-11 px-6 bg-blue-600 hover:bg-blue-505 text-white rounded-lg font-semibold text-sm transition-all shadow-xs hover:shadow-sm hover:shadow-blue-500/10 active:scale-98 cursor-pointer text-center flex items-center justify-center"
            >
              <span>View Projects</span>
            </button>

            <a
              href={getAssetPath("/resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-hero-resume"
              className="flex-1 sm:flex-initial h-11 px-6 bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-white dark:border-zinc-800 rounded-lg font-semibold text-sm transition-all shadow-xs active:scale-98 cursor-pointer text-center flex items-center justify-center"
            >
              <span>Resume</span>
            </a>

            <button
              onClick={onContactClick}
              id="btn-hero-contact"
              className="group h-11 px-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-blue-600 dark:text-zinc-50 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer font-sans"
            >
              <span>Contact me</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]" aria-hidden="true">→</span>
            </button>
          </motion.div>

          {/* Social links row */}
          <motion.div
            className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-8 w-full"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-zinc-400 dark:text-zinc-650">Find me on</span>
            <a href="https://github.com/khalidua" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors flex items-center gap-1 cursor-pointer">
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/khalidmodev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors flex items-center gap-1 cursor-pointer">
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
