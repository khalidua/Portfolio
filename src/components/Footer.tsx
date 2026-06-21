import { ChevronUp, Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FooterProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function Footer({ onContactClick, onProjectsClick }: FooterProps) {
  const { ref, isInView } = useScrollReveal(0.2);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-100 py-16 dark:bg-zinc-950 font-sans border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <motion.div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        ref={ref}
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand/Identity */}
          <div className="space-y-1.5 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-sans">
              Khalid Mohamed
            </h4>
            <p className="text-[11px] text-zinc-500 font-mono">
              Computer Science & AI Student
            </p>
          </div>

          {/* Quick-Action Navigation Footer Blocks */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-mono font-semibold">
            <button
              onClick={onProjectsClick}
              aria-label="Navigate to work section"
              className="text-zinc-550 hover:text-zinc-955 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={onContactClick}
              aria-label="Navigate to contact section"
              className="text-zinc-550 hover:text-zinc-955 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Social icons & scroll back button */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/khalidua"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Khalid Mohamed's GitHub profile"
              className="h-8 w-8 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/khalidmodev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Khalid Mohamed's LinkedIn profile"
              className="h-8 w-8 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <button
              onClick={handleScrollToTop}
              aria-label="Scroll to top of page"
              className="h-8 w-8 rounded-full bg-zinc-900 text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center justify-center"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>

        </div>

        {/* Divider and Copyright */}
        <div className="mt-12 border-t border-zinc-200 dark:border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-400 dark:text-zinc-550">
          <div>
            &copy; 2026 Khalid Mohamed &bull; Built with React, TypeScript & Tailwind CSS.
          </div>
        </div>

      </motion.div>
    </footer>
  );
}
