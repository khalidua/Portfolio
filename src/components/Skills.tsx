import { skillGroups } from '../data';
import { Network, FileCode2, Code2, Database, Terminal, Cloud, GitBranch, ShieldCheck, Workflow } from 'lucide-react';

export default function Skills() {
  
  // Custom Icon selector based on the expertise category
  const selectCategoryIcon = (category: string) => {
    const term = category.toLowerCase();
    if (term.includes('language')) return <FileCode2 className="h-4 w-4 text-blue-500" />;
    if (term.includes('backend')) return <Network className="h-4 w-4 text-emerald-500" />;
    if (term.includes('frontend')) return <Code2 className="h-4 w-4 text-indigo-500" />;
    if (term.includes('database')) return <Database className="h-4 w-4 text-amber-500" />;
    if (term.includes('cloud')) return <Cloud className="h-4 w-4 text-sky-500" />;
    if (term.includes('devops')) return <GitBranch className="h-4 w-4 text-pink-500" />;
    if (term.includes('testing')) return <ShieldCheck className="h-4 w-4 text-rose-500" />;
    if (term.includes('architecture') || term.includes('learning')) return <Workflow className="h-4 w-4 text-violet-500" />;
    return <Terminal className="h-4 w-4 text-zinc-500" />;
  };

  return (
    <section id="skills" className="py-16 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 font-mono">Technical Skills</h3>
          <span className="text-xs text-zinc-400 dark:text-zinc-650 font-mono">Technologies I Work With</span>
        </div>

        {/* Bento Grid layout representing 9 categorized skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="border border-zinc-200 bg-white/30 rounded-lg p-5 dark:border-zinc-800/60 dark:bg-zinc-900/10 hover:border-blue-500/20 transition-all duration-300 shadow-xs"
            >
              {/* Box Header */}
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-100 dark:border-zinc-850">
                {selectCategoryIcon(group.category)}
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  {group.category}
                </h4>
              </div>

              {/* Box Tags List */}
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded border border-zinc-200/60 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-950/40 text-[9.5px] font-mono text-zinc-650 dark:text-zinc-400 px-2 py-0.5 select-none transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
