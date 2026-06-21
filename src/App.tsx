import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
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
import { useScrollReveal, fadeUpVariants, staggerContainer } from './hooks/useScrollReveal';

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

  // Scroll reveal hooks for each section
  const projectsReveal = useScrollReveal(0.1);
  const aboutReveal = useScrollReveal(0.15);

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
              <section id="projects" className="py-16 md:py-20 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-6">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

                  {/* Section Header */}
                  <motion.div
                    ref={projectsReveal.ref}
                    className="mb-10 pb-4 border-b border-zinc-200 dark:border-zinc-800/80"
                    initial={{ opacity: 0, y: 16 }}
                    animate={projectsReveal.isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                        Work Showcase
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mt-1 font-sans">
                      Featured Projects
                    </h2>
                  </motion.div>

                  {/* Direct Cards Layout Grid */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                    variants={staggerContainer(0.1)}
                    initial="hidden"
                    animate={projectsReveal.isInView ? 'visible' : 'hidden'}
                  >
                    {projects.map((project) => (
                      <motion.div key={project.id} className="h-full" variants={fadeUpVariants} transition={{ duration: 0.45, ease: 'easeOut' }}>
                        <ProjectCard
                          project={project}
                          onSelect={(slug) => setSelectedProjectSlug(slug)}
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                </div>
              </section>

              {/* About Me */}
              <section id="about" className="py-16 md:py-20 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-6">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

                  {/* Section Header */}
                  <motion.div
                    ref={aboutReveal.ref}
                    className="mb-10 pb-4 border-b border-zinc-200 dark:border-zinc-800/80"
                    initial={{ opacity: 0, y: 16 }}
                    animate={aboutReveal.isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                        My Story
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mt-1 font-sans">
                      About Me
                    </h2>
                  </motion.div>

                  {/* High-credibility backend and full stack cards */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={staggerContainer(0.1)}
                    initial="hidden"
                    animate={aboutReveal.isInView ? 'visible' : 'hidden'}
                  >

                    <motion.div
                      className="border border-zinc-200 dark:border-zinc-850 p-6 rounded-xl bg-white/40 dark:bg-zinc-900/10 hover:border-blue-500/20 transition-all duration-300 h-full flex flex-col justify-between"
                      variants={fadeUpVariants}
                      transition={{ duration: 0.45 }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Terminal className="h-5 w-5 text-blue-500" />
                          <h3 className="font-sans text-xl font-bold text-zinc-850 dark:text-zinc-200">Backend Systems</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-sans">
                          I enjoy building REST APIs, designing backend logic, and learning how scalable web applications are structured. Most of my projects focus on creating reliable and maintainable backend systems.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="border border-zinc-200 dark:border-zinc-850 p-6 rounded-xl bg-white/40 dark:bg-zinc-900/10 hover:border-emerald-500/20 transition-all duration-300 h-full flex flex-col justify-between"
                      variants={fadeUpVariants}
                      transition={{ duration: 0.45 }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Layers className="h-5 w-5 text-emerald-500" />
                          <h3 className="font-sans text-xl font-bold text-zinc-850 dark:text-zinc-200">Full-Stack Apps</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-sans">
                          I like building complete web applications, from responsive user interfaces to backend services and databases. Working across the entire stack helps me understand how all parts of a system fit together.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="border border-zinc-200 dark:border-zinc-850 p-6 rounded-xl bg-white/40 dark:bg-zinc-900/10 hover:border-amber-500/20 transition-all duration-300 h-full flex flex-col justify-between"
                      variants={fadeUpVariants}
                      transition={{ duration: 0.45 }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Zap className="h-5 w-5 text-amber-500" />
                          <h3 className="font-sans text-xl font-bold text-zinc-850 dark:text-zinc-200">Tools & DevOps</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-sans">
                          I use tools like Docker, Git, and Linux command line interfaces to keep my development environments predictable and repeatable. I enjoy building structured workflows that make development fast and reliable.
                        </p>
                      </div>
                    </motion.div>

                  </motion.div>

                  <motion.p
                    className="mt-8 text-base md:text-lg/relaxed text-zinc-650 dark:text-zinc-400 font-sans"
                    initial={{ opacity: 0, y: 12 }}
                    animate={aboutReveal.isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    I'm a Computer Science and Artificial Intelligence student at Zewail City with a strong interest in backend engineering and full-stack software development. I enjoy taking ideas and building them into functional applications, learning how databases, servers, and clients interact. Through my coursework and personal projects, I try to focus on writing clean, readable code and understanding the fundamental concepts behind the frameworks I use. I'm always looking to grow my skills and take on new challenges that help me become a better software engineer.
                  </motion.p>
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
