import { skillGroups } from '../data';
import { Network, FileCode2, Code2, Database, BrainCircuit, Terminal } from 'lucide-react';

export default function Skills() {
  
  // Custom Icon selector based on the expertise category
  const selectCategoryIcon = (category: string) => {
    const term = category.toLowerCase();
    if (term.includes('language')) return <FileCode2 className="h-4.5 w-4.5 text-blue-500" />;
    if (term.includes('backend') || term.includes('system')) return <Network className="h-4.5 w-4.5 text-emerald-500" />;
    if (term.includes('frontend') || term.includes('ui')) return <Code2 className="h-4.5 w-4.5 text-indigo-500" />;
    if (term.includes('storage') || term.includes('data')) return <Database className="h-4.5 w-4.5 text-amber-500" />;
    if (term.includes('ai') || term.includes('science')) return <BrainCircuit className="h-4.5 w-4.5 text-purple-500" />;
    return <Terminal className="h-4.5 w-4.5 text-zinc-500" />;
  };

  return (
    <section id="skills" className="py-16 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex items-center justify-between mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Engineered Skills & Expertise</h3>
          <span className="text-xs text-zinc-400 dark:text-zinc-600 font-mono">[05 Core Realms]</span>
        </div>

        {/* Detailed High-Density Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="border border-zinc-200 bg-white/30 rounded-lg p-5 dark:border-zinc-800 dark:bg-zinc-900/20 transition-all shadow-xs"
            >
              {/* Box Header */}
              <div className="flex items-center gap-2 mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                {selectCategoryIcon(group.category)}
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  {group.category}
                </h3>
              </div>

              {/* Box Tags List */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded border border-zinc-200 hover:border-zinc-300 dark:border-zinc-850 dark:hover:border-zinc-700 bg-zinc-100 hover:bg-zinc-200/50 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 text-[10px] font-mono font-medium text-zinc-700 select-none transition-colors px-2 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Rapid Systems Integration Check Info for Recruiter */}
        <div className="mt-8 rounded-lg border border-blue-500/10 bg-blue-500/5 p-4 text-xs flex flex-col sm:flex-row items-center gap-3 text-blue-800 dark:text-blue-300 leading-normal">
          <Terminal className="h-5 w-5 text-blue-500 shrink-0" />
          <div>
            <strong className="font-semibold">Recruiter Quick-Scan Sync:</strong> These technical keywords align exactly with typical DevOps, distributed cloud backends, and full-stack software requirements. Clean container environments are verified with isolated, reproducible Docker Compose frameworks.
          </div>
        </div>

      </div>
    </section>
  );
}
