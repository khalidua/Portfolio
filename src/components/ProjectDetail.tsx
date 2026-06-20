import { Project } from '../types';
import { ArrowLeft, Github, ExternalLink, ShieldCheck, Cpu, Code2, AlertTriangle, Lightbulb, Workflow } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';

interface ProjectDetailProps {
  key?: string;
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  
  // Instantly scroll to the top when we render a detail case study
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.slug]);

  return (
    <motion.article 
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      {/* Dynamic Back Navigation Header */}
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={onBack}
          id="btn-detail-back"
          className="group flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-xs transition-all hover:bg-zinc-50 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Grid</span>
        </button>

        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
          Case Study: {project.slug}
        </span>
      </div>

      {/* Case Study Cover Title Block */}
      <header className="mb-10 space-y-4">
        <div className="space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
            {project.category.toUpperCase()} WORK
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            {project.name}
          </h1>
        </div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Dense Technical Meta Block */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-b border-zinc-200/80 dark:border-zinc-800/80 py-5 mt-6 font-mono text-xs">
          <div>
            <span className="block text-zinc-405 dark:text-zinc-500 mb-1">My Role:</span>
            <span className="font-bold text-zinc-800 dark:text-zinc-200">{project.role}</span>
          </div>
          <div>
            <span className="block text-zinc-405 dark:text-zinc-500 mb-1">Duration:</span>
            <span className="font-bold text-zinc-800 dark:text-zinc-200">{project.duration}</span>
          </div>
          <div>
            <span className="block text-zinc-405 dark:text-zinc-500 mb-1">Code Repository:</span>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center gap-1"
            >
              <Github className="h-3 w-3" />
              <span>GitHub Core</span>
            </a>
          </div>
          <div>
            <span className="block text-zinc-405 dark:text-zinc-500 mb-1">Live Endpoint:</span>
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                <span>Demo Sandbox</span>
              </a>
            ) : (
              <span className="font-bold text-zinc-550 dark:text-zinc-400 italic">Self-Hosted Only</span>
            )}
          </div>
        </div>
      </header>

      {/* Main Study Body Content */}
      <div className="space-y-10">
        
        {/* Project Summary Block */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <Code2 className="h-4 w-4 text-blue-500" />
            <span>Executive Executive Summary</span>
          </h2>
          <div className="rounded-lg border border-zinc-200/60 bg-zinc-50/50 p-5 leading-relaxed text-zinc-650 dark:border-zinc-805 dark:bg-zinc-900/40 text-sm text-zinc-600 dark:text-zinc-300">
            {project.summary}
          </div>
        </section>

        {/* The Problem Statement */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-rose-500" />
            <span>The Core Engineering Problem</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.problem}
          </p>
        </section>

        {/* The Engineered Solution */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>The Solution & Architecture Blueprint</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.solution}
          </p>
        </section>

        {/* High-Signal Architecture Diagram Step Tracer */}
        {project.architecture && (
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Workflow className="h-4.5 w-4.5 text-blue-500" />
              <h3 className="text-md font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                System Workflow: {project.architecture.title}
              </h3>
            </div>
            
            <div className="border border-zinc-205 bg-zinc-50 p-5 rounded-lg dark:border-zinc-800 dark:bg-zinc-950/80">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-sans">
                {project.architecture.description}
              </p>

              <div className="space-y-3 font-mono text-[11px]">
                {project.architecture.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-[10px] font-bold text-zinc-800 dark:text-zinc-300">
                      {idx + 1}
                    </span>
                    <div className="flex-1 text-zinc-600 dark:text-zinc-300 leading-normal pt-0.5">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key Operational Features list */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white">
            Core Features & Functional Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => {
              const [title, desc] = feature.split(': ');
              return (
                <div key={idx} className="border border-zinc-200/70 p-4 rounded bg-white dark:border-zinc-850 dark:bg-zinc-900/10 hover:border-zinc-300 dark:hover:border-zinc-800 transition-colors">
                  <div className="font-semibold text-xs font-mono text-blue-600 dark:text-blue-400 mb-1">
                    {title}
                  </div>
                  <div className="text-xs text-zinc-605 dark:text-zinc-400 leading-normal">
                    {desc}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Specific Engineering Challenges */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <Cpu className="h-4 w-4 text-amber-500" />
            <span>Key Engineering Challenge & Mitigations</span>
          </h2>
          <div className="p-4 border-l-2 border-amber-500 bg-amber-500/5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-sans">
            {project.challenges}
          </div>
        </section>

        {/* Key Learnings and Takeaways */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <Lightbulb className="h-4.5 w-4.5 text-indigo-500" />
            <span>Primary Takeaway & Advanced Learnings</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.learning}
          </p>
        </section>

        {/* Full Technology Stack Grid for visual scans */}
        <section className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 font-mono">
            Detailed project technology footprint:
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono font-bold border border-zinc-200 bg-white text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Footer Actions inside details */}
        <div className="flex justify-between items-center bg-zinc-50 border border-zinc-200 rounded-lg p-5 dark:border-zinc-805 dark:bg-zinc-950/80 mt-12">
          <div className="space-y-1">
            <div className="text-xs font-bold font-sans text-zinc-900 dark:text-zinc-100">
              Satisfious with the architectural layout?
            </div>
            <div className="text-[11px] font-mono text-zinc-450 dark:text-zinc-450">
              Code is open for analysis. View repositories directly.
            </div>
          </div>
          
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>Full Repo</span>
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-350 dark:hover:bg-zinc-800 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Sandbox</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.article>
  );
}
