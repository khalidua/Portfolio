import { experiences, educationList } from '../data';
import { Calendar, Award, GraduationCap, Briefcase, Terminal } from 'lucide-react';

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="py-16 border-b border-zinc-200/60 dark:border-zinc-900/60 transition-colors duration-300"
      aria-label="Experience and Education"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 border-b border-zinc-200/60 dark:border-zinc-850 pb-2">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 font-mono">
            Experience & Education
          </h3>
          <span className="text-xs text-zinc-450 dark:text-zinc-650 font-mono" aria-hidden="true">
            Building Through Experience
          </span>
        </div>

        {/* Layout split into left and right columns with increased whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Experience */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-400 font-mono flex items-center gap-2 mb-3">
              <Briefcase className="h-4 w-4 text-blue-500" aria-hidden="true" />
              <span>Experience</span>
            </h4>

            <div className="relative border-l border-zinc-200/60 pl-4 space-y-6 dark:border-zinc-850">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline Dot (slightly larger, precisely centered) */}
                  <span 
                    className="absolute -left-[24.5px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-blue-500 dark:border-zinc-950 transition-all group-hover:scale-110 shadow-sm"
                    aria-hidden="true"
                  />

                  <div className="space-y-1.5">
                    {/* Role (Largest) */}
                    <h5 className="text-base font-extrabold text-zinc-900 dark:text-white leading-snug">
                      {exp.role}
                    </h5>

                    {/* Company and Location (Reduced Location emphasis) */}
                    <div className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 flex items-baseline gap-2">
                      <span>{exp.company}</span>
                      {exp.location && (
                        <span className="text-[10px] font-normal text-zinc-400 dark:text-zinc-500 font-sans">
                          ({exp.location})
                        </span>
                      )}
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-1 text-[10.5px] font-mono text-zinc-500 dark:text-zinc-400">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      <span>{exp.duration}</span>
                    </div>

                    {/* Bullet Accomplishments (Max 4 bullet points, sliced dynamically) */}
                    <ul className="space-y-1 pt-1.5 text-xs text-zinc-600 dark:text-zinc-405 leading-relaxed font-sans list-disc pl-4">
                      {exp.description.slice(0, 4).map((bullet, idx) => (
                        <li key={idx} className="marker:text-zinc-400 dark:marker:text-zinc-600 pl-0.5">
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Tag list (Rounded pills, consistent sizing, responsive tag sizes for mobile) */}
                    <div className="flex flex-wrap gap-1.5 pt-2" aria-label="Skills used">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[8.5px] sm:text-[9.5px] font-mono font-semibold bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Education */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-400 font-mono flex items-center gap-2 mb-3">
              <GraduationCap className="h-4.5 w-4.5 text-emerald-500" aria-hidden="true" />
              <span>Education</span>
            </h4>

            <div className="relative border-l border-zinc-200/60 pl-4 space-y-6 dark:border-zinc-850">
              {educationList.map((edu, idx) => {
                // Parse coursework and remaining details
                const courseworkDetail = edu.details.find(d => d.startsWith("Relevant Coursework:") || d.startsWith("Key coursework:"));
                const otherDetails = edu.details.filter(d => !d.startsWith("Relevant Coursework:") && !d.startsWith("Key coursework:"));
                
                let courseworkList: string[] = [];
                if (courseworkDetail) {
                  const content = courseworkDetail.includes(":") ? courseworkDetail.split(":")[1] : courseworkDetail;
                  courseworkList = content.split(",").map(c => c.trim()).filter(Boolean);
                }

                return (
                  <div key={idx} className="relative group">
                    {/* Timeline Dot (slightly larger, precisely centered) */}
                    <span 
                      className="absolute -left-[24.5px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-zinc-950 transition-all group-hover:scale-110 shadow-sm"
                      aria-hidden="true"
                    />

                    <div className="space-y-1.5">
                      {/* Degree */}
                      <h5 className="text-base font-extrabold text-zinc-900 dark:text-white leading-snug">
                        {edu.degree}
                      </h5>

                      {/* University and Location (Reduced Location emphasis) */}
                      <div className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 flex items-baseline gap-2">
                        <span>{edu.institution}</span>
                        {edu.location && (
                          <span className="text-[10px] font-normal text-zinc-400 dark:text-zinc-500 font-sans">
                            ({edu.location})
                          </span>
                        )}
                      </div>

                      {/* GPA (Stronger contrast) and Duration */}
                      <div className="flex flex-wrap items-center gap-2 pt-0.5">
                        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 text-[9.5px] font-mono font-extrabold text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20">
                          <Award className="h-3 w-3 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                          <span>GPA: {edu.gpa}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 text-[9.5px] font-mono font-medium text-zinc-600 dark:text-zinc-400">
                          <Calendar className="h-2.5 w-2.5" aria-hidden="true" />
                          <span>{edu.duration}</span>
                        </span>
                      </div>

                      {/* Relevant Coursework (Highlighted as its own subsection) */}
                      {courseworkList.length > 0 && (
                        <div className="mt-3 space-y-1">
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-400 font-mono">
                            Relevant Coursework
                          </span>
                          <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] text-zinc-550 dark:text-zinc-400">
                            {courseworkList.map((course, cIdx) => (
                              <li key={cIdx} className="flex items-center gap-1.5 leading-normal">
                                <span className="text-emerald-500 text-[10px]" aria-hidden="true">•</span>
                                <span>{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Remaining Details */}
                      <ul className="space-y-1 pt-1.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans list-disc pl-4">
                        {otherDetails.map((detail, dIdx) => (
                          <li key={dIdx} className="marker:text-zinc-400 dark:marker:text-zinc-600 pl-0.5">
                            {detail}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Currently Exploring highlight */}
            <div className="border border-zinc-200/60 dark:border-zinc-850 rounded-lg p-5 bg-zinc-50/50 dark:bg-zinc-900/10 mt-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-blue-650 dark:text-blue-400">
                <Terminal className="h-4.5 w-4.5" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">
                  Currently Exploring
                </span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 font-sans list-none pl-1">
                {[
                  "Distributed Systems",
                  "Software Architecture",
                  "Cloud Infrastructure",
                  "DevOps & CI/CD",
                  "Backend Performance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
