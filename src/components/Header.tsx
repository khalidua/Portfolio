import { Sun, Moon, Download, Menu, X, ArrowLeft, Terminal } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  selectedProjectSlug: string | null;
  onBackToHome: () => void;
}

export default function Header({
  isDarkMode,
  setIsDarkMode,
  selectedProjectSlug,
  onBackToHome,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (selectedProjectSlug) {
      onBackToHome();
      // Wait for re-render before scrolling
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-zinc-50/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          
          {/* Logo / Left side */}
          <div className="flex items-center gap-4">
            {selectedProjectSlug ? (
              <button
                onClick={onBackToHome}
                id="btn-nav-back"
                className="group h-8 px-3 rounded-md border border-zinc-200 bg-white text-xs font-semibold text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-805 flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                <span>Back to Home</span>
              </button>
            ) : (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                id="header-brand"
                className="flex items-center gap-2 font-sans text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                <Terminal className="h-4 w-4 text-blue-500" />
                <span>Khalid Mohamed</span>
              </a>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {!selectedProjectSlug && (
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm font-semibold text-zinc-650 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

            {/* Utility buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                id="btn-theme-switcher"
                aria-label="Toggle theme"
                className="h-8 w-8 rounded-md flex items-center justify-center text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-header-resume"
                className="h-9 px-4 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-98 transition-all cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Mobile actions & hamburger indicator */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              id="btn-theme-switcher-mobile"
              aria-label="Toggle theme"
              className="h-8 w-8 rounded-md flex items-center justify-center text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="btn-header-resume-mobile"
              aria-label="Resume"
              className="h-8 w-8 rounded-md flex items-center justify-center text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              <Download className="h-4 w-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="btn-mobile-menu-toggle"
              aria-label="Toggle mobile menu"
              className="h-8 w-8 rounded-md flex items-center justify-center text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu expanded list */}
      {isMobileMenuOpen && !selectedProjectSlug && (
        <div className="md:hidden border-t border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950 transition-all">
          <div className="flex flex-col gap-2.5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left py-2 text-sm font-semibold text-zinc-650 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
