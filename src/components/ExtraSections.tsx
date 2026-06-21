import { Award, BookOpen, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollReveal, slideFromLeftVariants, slideFromRightVariants, fadeUpVariants, staggerContainer } from '../hooks/useScrollReveal';

export default function ExtraSections() {
  const { ref, isInView } = useScrollReveal(0.1);

  const achievements = [
    <>GPA: <strong className="font-semibold text-zinc-900 dark:text-zinc-100">3.89 / 4.00</strong></>,
    <>Academic Excellence <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Scholarship Recipient</strong></>,
    <>Selected for the <strong className="font-semibold text-zinc-900 dark:text-zinc-100">CIB Green Leap Program</strong></>,
    <>Earned the <strong className="font-semibold text-zinc-900 dark:text-zinc-100">SAS AI Digital Badge</strong></>,
    <><strong className="font-semibold text-zinc-900 dark:text-zinc-100">First Place</strong> — University UI/UX Design Competition (INKIX Project)</>
  ];

  const learningTopics = [
    "Distributed Systems",
    "Software Architecture",
    "Cloud Infrastructure",
    "System Design",
    "DevOps"
  ];

  return (
    <section
      id="achievements-learning"
      className="py-16 md:py-20 border-b border-zinc-200/60 dark:border-zinc-900/60 transition-colors duration-300"
      aria-label="Achievements and currently learning progress"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Section Header */}
        <motion.div
          className="mb-10 pb-4 border-b border-zinc-200/60 dark:border-zinc-800/80"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              Highlights
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mt-1 font-sans">
            Achievements & Focus
          </h2>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">

          {/* Card 1 — Achievements (slides from left) */}
          <motion.div
            className="border border-zinc-200 bg-white/40 dark:border-zinc-800 dark:bg-zinc-900/10 p-6 md:p-8 rounded-xl shadow-xs space-y-4 transition-all duration-500 ease-out hover:border-zinc-400/80 dark:hover:border-zinc-600/80 hover:shadow-md dark:hover:shadow-zinc-950/30 focus-within:ring-2 focus-within:ring-blue-500/50 outline-hidden h-full flex flex-col justify-between"
            variants={slideFromLeftVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 font-mono flex items-center gap-2.5 mb-4 pb-2 border-b border-zinc-100 dark:border-zinc-850">
                <Award className="h-5 w-5 text-blue-500" aria-hidden="true" />
                <span>Achievements</span>
              </h4>

              <motion.ul
                className="space-y-4 text-sm md:text-base/relaxed text-zinc-650 dark:text-zinc-350 font-sans"
                variants={staggerContainer(0.08)}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {achievements.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2.5 leading-relaxed"
                    variants={fadeUpVariants}
                    transition={{ duration: 0.35 }}
                  >
                    <Check className="h-4 w-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* Card 2 — Currently Learning (slides from right) */}
          <motion.div
            className="border border-zinc-200 bg-white/40 dark:border-zinc-800 dark:bg-zinc-900/10 p-6 md:p-8 rounded-xl shadow-xs space-y-4 transition-all duration-500 ease-out hover:border-zinc-400/80 dark:hover:border-zinc-600/80 hover:shadow-md dark:hover:shadow-zinc-950/30 focus-within:ring-2 focus-within:ring-blue-500/50 outline-hidden h-full flex flex-col justify-between"
            variants={slideFromRightVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 font-mono flex items-center gap-2.5 mb-4 pb-2 border-b border-zinc-100 dark:border-zinc-850">
                <BookOpen className="h-5 w-5 text-emerald-500" aria-hidden="true" />
                <span>Currently Learning</span>
              </h4>

              <div className="space-y-4">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-500 font-mono">
                  Current Focus
                </span>
                <div className="flex flex-wrap gap-2">
                  {learningTopics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center justify-center h-9 px-4 text-xs font-mono font-bold bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-zinc-600 dark:text-zinc-350 rounded-md hover:border-emerald-500/40 hover:text-emerald-500 dark:hover:text-emerald-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500/50 transition-colors duration-300 cursor-default select-none"
                      tabIndex={0}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
