import { Download, Terminal, ChevronUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onResumeClick: () => void;
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function Footer({ onResumeClick, onContactClick, onProjectsClick }: FooterProps) {
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-100 py-12 dark:bg-zinc-950 font-sans border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand/Identity */}
          <div className="space-y-1.5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100">
              <Terminal className="h-4 w-4 text-blue-500" />
              <span>khalid.mohamed( )</span>
            </div>
            <p className="text-[11px] text-zinc-500 font-mono">
              Computer Science @ Zewail City | GPA 3.88
            </p>
          </div>

          {/* Quick-Action Navigation Footer Blocks */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono font-medium">
            <button
              onClick={onProjectsClick}
              className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={onContactClick}
              className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onResumeClick}
              className="flex items-center gap-1.5 text-zinc-800 hover:text-zinc-950 dark:text-zinc-250 dark:hover:text-white transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social icons & scroll back button */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Account"
              className="rounded p-1.5 border border-zinc-200 hover:bg-zinc-200/50 dark:border-zinc-800 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Account"
              className="rounded p-1.5 border border-zinc-200 hover:bg-zinc-200/50 dark:border-zinc-800 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <button
              onClick={handleScrollToTop}
              aria-label="Scroll to top of page"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all shadow-xs"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>

        </div>

        {/* Divider and Copyright */}
        <div className="mt-8 border-t border-zinc-200 dark:border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
          <div>
            &copy; 2026 Khalid Mohamed. All rights reserved. Deployed to Cloud Run.
          </div>
          <div className="flex items-center gap-1">
            <span>High-Signal developer portfolio optimized for recruiter metrics.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
