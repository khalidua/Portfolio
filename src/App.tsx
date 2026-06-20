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
import ResumeViewer from './components/ResumeViewer';
import { projects } from './data';
import { Briefcase, FolderGit2 } from 'lucide-react';

export default function App() {
  // Store default dark theme and allow recruiter to swap
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Default to dark system look
  });

  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Sync theme changes with DOM node
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Find active project if any
  const activeProject = projects.find((p) => p.slug === selectedProjectSlug);

  const scrollSection = (selector: string) => {
    // If we are currently inside a project detail page, clear state to go back home first
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
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-[#09090b] dark:text-[#fafafa] selection:bg-blue-500/20 selection:text-blue-500 transition-colors duration-300 font-sans">
        
        {/* Navigation Layer */}
        <Header
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          selectedProjectSlug={selectedProjectSlug}
          onBackToHome={() => setSelectedProjectSlug(null)}
          onResumeClick={() => setIsResumeOpen(true)}
        />

        {/* Dynamic Route View Transitions */}
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
                  onResumeClick={() => setIsResumeOpen(true)}
                  onContactClick={() => scrollSection('#contact')}
                />

                {/* Grid Projects block */}
                <section id="projects" className="py-16 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-6">
                  <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    
                    {/* Editorial Header */}
                    <div className="flex items-center justify-between mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Featured Engineering Projects</h3>
                      <span className="text-xs text-zinc-400 dark:text-zinc-600 font-mono">[0{projects.length} Total Artifacts]</span>
                    </div>

                    {/* Direct Cards Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                {/* Render separate skills details */}
                <Skills />

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
          onResumeClick={() => setIsResumeOpen(true)}
          onContactClick={() => scrollSection('#contact')}
          onProjectsClick={() => scrollSection('#projects')}
        />

        {/* Printable vector CV overlay */}
        {isResumeOpen && (
          <ResumeViewer onClose={() => setIsResumeOpen(false)} />
        )}

      </div>
    </div>
  );
}
