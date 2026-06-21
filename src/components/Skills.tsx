import { skillGroups } from '../data';
import { Network, FileCode2, Code2, Database, Terminal, Cloud, GitBranch, ShieldCheck, Workflow } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollReveal, fadeUpVariants, staggerContainer } from '../hooks/useScrollReveal';

export default function Skills() {
  const { ref, isInView } = useScrollReveal(0.1);

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
    <section id="skills" className="py-16 md:py-20 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Section Header */}
        <motion.div
          className="mb-10 pb-4 border-b border-zinc-200 dark:border-zinc-800/80"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between items-end flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                  My Toolkit
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mt-1 font-sans">
                Technical Skills
              </h2>
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              Technologies I Work With
            </span>
          </div>
        </motion.div>

        {/* Bento Grid layout representing 9 categorized skill cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={staggerContainer(0.06)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              className="border border-zinc-200 bg-white/30 rounded-xl p-6 dark:border-zinc-800/60 dark:bg-zinc-900/10 hover:border-blue-500/20 transition-all duration-300 shadow-xs h-full flex flex-col justify-between"
              variants={fadeUpVariants}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div>
                {/* Box Header */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-100 dark:border-zinc-850">
                  {selectCategoryIcon(group.category)}
                  <h4 className="font-mono text-xs font-extrabold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                    {group.category}
                  </h4>
                </div>

                {/* Box Tags List */}
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-zinc-200/60 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-950/40 text-[12px] font-mono text-zinc-650 dark:text-zinc-400 px-2.5 py-1 select-none transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-zinc-100 hover:scale-[1.04]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
