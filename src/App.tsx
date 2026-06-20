import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExtraSections from './components/ExtraSections';
import { projects } from './data';
import { Terminal, Shield, Zap, Layers } from 'lucide-react';

export default function App() {
  // Store default dark theme and allow recruiter to swap
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Default to dark system look
  });

  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);

  // Sync theme changes with DOM node
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Find active project if any
  const activeProject = projects.find((p) => p.slug === selectedProjectSlug);

  const scrollSection = (selector: string) => {
    // If inside a project detail page, clear state to go back home first
    if (selectedProjectSlug) {
      setSelectedProjectSlug(null);
      setTimeout(() => {
        const el = document.querySelector(selector);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(selector);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-[#09090b] dark:text-[#fafafa] selection:bg-blue-500/20 selection:text-blue-500 transition-colors duration-300 font-sans">
      
      {/* Navigation Layer */}
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        selectedProjectSlug={selectedProjectSlug}
        onBackToHome={() => setSelectedProjectSlug(null)}
      />

      {/* Primary Container */}
      <main className="mx-auto max-w-6xl">
        <AnimatePresence mode="wait">
          {selectedProjectSlug && activeProject ? (
            // Dedicated detailed project case study
            <ProjectDetail
              key="detail"
              project={activeProject}
              onBack={() => setSelectedProjectSlug(null)}
            />
          ) : (
            // Single-page primary scrolling index
            <div key="home" className="animate-in fade-in slide-in-from-bottom-3 duration-300">
              
              {/* Hero introduction block */}
              <Hero
                onViewProjects={() => scrollSection('#projects')}
                onContactClick={() => scrollSection('#contact')}
              />

              {/* Grid Projects block */}
              <section id="projects" className="py-16 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-6">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                  
                  {/* Section Header */}
                  <div className="flex items-center justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 font-mono">Featured Projects</h3>
                  </div>

                  {/* Direct Cards Layout Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onSelect={(slug) => setSelectedProjectSlug(slug)}
                      />
                    ))}
                  </div>

                </div>
              </section>

              {/* About Me */}
              <section id="about" className="py-16 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-6">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                  
                  {/* Section Header */}
                  <div className="flex items-center justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 font-mono">About Me</h3>
                  </div>

                  {/* High-credibility backend and full stack cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                    
                    <div className="border border-zinc-200 dark:border-zinc-850 p-5 rounded-lg bg-white/40 dark:bg-zinc-900/10 space-y-2">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-4.5 w-4.5 text-blue-500" />
                        <h4 className="font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">Backend Development</h4>
                      </div>
                      <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                        I enjoy building REST APIs, designing backend logic, and learning how scalable web applications are structured. Most of my projects focus on creating reliable and maintainable backend systems.
                      </p>
                    </div>

                    <div className="border border-zinc-200 dark:border-zinc-850 p-5 rounded-lg bg-white/40 dark:bg-zinc-900/10 space-y-2">
                      <div className="flex items-center gap-2">
                        <Layers className="h-4.5 w-4.5 text-emerald-500" />
                        <h4 className="font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">Full-Stack Development</h4>
                      </div>
                      <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                        I like building complete web applications, from responsive user interfaces to backend services and databases. Working across the entire stack helps me understand how all parts of a system fit together.
                      </p>
                    </div>

                    <div className="border border-zinc-200 dark:border-zinc-850 p-5 rounded-lg bg-white/40 dark:bg-zinc-900/10 space-y-2">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4.5 w-4.5 text-amber-500" />
                        <h4 className="font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">Tools & Workflows</h4>
                      </div>
                      <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                        I use tools like Docker, Git, and Linux command line interfaces to keep my development environments predictable and repeatable. I enjoy building structured workflows that make development fast and reliable.
                      </p>
                    </div>

                  </div>

                  <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                    I'm a Computer Science and Artificial Intelligence student at Zewail City with a strong interest in backend engineering and full-stack software development. I enjoy taking ideas and building them into functional applications, learning how databases, servers, and clients interact. Through my coursework and personal projects, I try to focus on writing clean, readable code and understanding the fundamental concepts behind the frameworks I use. I'm always looking to grow my skills and take on new challenges that help me become a better software engineer.
                  </p>
                </div>
              </section>

              {/* Render separate skills details */}
              <Skills />

              {/* Systems Design & Technical Writing Extra Sections */}
              <ExtraSections />

              {/* Timeline education and experiences blocks */}
              <Experience />

              {/* Direct callbacks contact cards */}
              <Contact />

            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Standard footer linking */}
      <Footer
        onContactClick={() => scrollSection('#contact')}
        onProjectsClick={() => scrollSection('#projects')}
      />

    </div>
  );
}
