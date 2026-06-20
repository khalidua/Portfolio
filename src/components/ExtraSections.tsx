import { Award, BookOpen, Check } from 'lucide-react';

export default function ExtraSections() {
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
      className="py-16 border-b border-zinc-200/60 dark:border-zinc-900/60 transition-colors duration-300"
      aria-label="Achievements and currently learning progress"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 border-b border-zinc-200/60 dark:border-zinc-850 pb-2">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-550 dark:text-zinc-400 font-mono">
            Achievements & Currently Learning
          </h3>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 — Achievements */}
          <div className="border border-zinc-200 bg-white/40 dark:border-zinc-800 dark:bg-zinc-900/10 p-8 rounded-xl shadow-xs space-y-4 transition-all duration-500 ease-out hover:border-zinc-400/80 dark:hover:border-zinc-600/80 hover:shadow-md dark:hover:shadow-zinc-950/30 focus-within:ring-2 focus-within:ring-blue-500/50 outline-hidden">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 font-mono flex items-center gap-2.5">
              <Award className="h-5 w-5 text-blue-500" aria-hidden="true" />
              <span>Achievements</span>
            </h4>
            
            <ul className="space-y-4 pt-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans">
              {achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <Check className="h-4 w-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — Currently Learning */}
          <div className="border border-zinc-200 bg-white/40 dark:border-zinc-800 dark:bg-zinc-900/10 p-8 rounded-xl shadow-xs space-y-4 transition-all duration-500 ease-out hover:border-zinc-400/80 dark:hover:border-zinc-600/80 hover:shadow-md dark:hover:shadow-zinc-950/30 focus-within:ring-2 focus-within:ring-blue-500/50 outline-hidden">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 font-mono flex items-center gap-2.5">
              <BookOpen className="h-5 w-5 text-emerald-500" aria-hidden="true" />
              <span>Currently Learning</span>
            </h4>
            
            <div className="pt-4 space-y-4">
              <span className="block text-[10px] font-medium uppercase tracking-wider text-zinc-450 dark:text-zinc-500 font-mono">
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

        </div>

      </div>
    </section>
  );
}

