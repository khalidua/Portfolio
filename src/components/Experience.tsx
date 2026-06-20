import { experiences, educationList } from '../data';
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex items-center justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">History & Academic Standard</h3>
          <span className="text-xs text-zinc-400 dark:text-zinc-600 font-mono">[Chronological Registry]</span>
        </div>

        {/* Chronological Grid Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT: Experience Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 font-mono flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-blue-500" />
              <span>Professional Experience</span>
            </h3>

            <div className="relative border-l border-zinc-200 pl-4 space-y-8 dark:border-zinc-800">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Bullet Dot */}
                  <span className="absolute -left-[20.5px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-blue-500 dark:border-zinc-950 transition-transform group-hover:scale-110" />

                  <div className="space-y-1.5">
                    {/* Role Title */}
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white leading-snug">
                      {exp.role}
                    </h4>

                    {/* Company and Meta */}
                    <div className="flex flex-wrap items-center gap-x-2 text-[11px] font-mono text-zinc-405 dark:text-zinc-400">
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">{exp.company}</span>
                      <span className="text-zinc-300 dark:text-zinc-700">|</span>
                      <span className="flex items-center gap-0.5">
                        <MapPin className="h-3 w-3" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <span className="inline-flex items-center gap-1 leading-none rounded-full bg-zinc-100 px-2 py-0.5 text-[9.5px] font-mono font-medium text-zinc-650 dark:bg-zinc-850 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-800">
                      <Calendar className="h-2.5 w-2.5" />
                      <span>{exp.duration}</span>
                    </span>

                    {/* Accomplishments Bullet Point list */}
                    <ul className="space-y-2 pt-2.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                      {exp.description.map((bullet, idx) => {
                        // Highlight first portion of bullet (bold text preceding a comma or specific word)
                        const splitPoint = bullet.indexOf('", "'); // simple or just render
                        return (
                          <li key={idx} className="list-disc pl-1 ml-3 marker:text-zinc-400">
                            {bullet}
                          </li>
                        );
                      })}
                    </ul>

                    {/* Role Tech badging list */}
                    <div className="flex flex-wrap gap-1 pt-3">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-zinc-50 border border-zinc-200/60 text-zinc-500 rounded dark:bg-zinc-900/40 dark:border-zinc-850 dark:text-zinc-405"
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

          {/* RIGHT: Education Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 font-mono flex items-center gap-2">
              <GraduationCap className="h-4.5 w-4.5 text-emerald-500" />
              <span>Academic Education</span>
            </h3>

            <div className="relative border-l border-zinc-200 pl-4 space-y-8 dark:border-zinc-800">
              {educationList.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Bullet dot */}
                  <span className="absolute -left-[20.5px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-zinc-950 transition-transform group-hover:scale-110" />

                  <div className="space-y-1.5">
                    
                    {/* Degree */}
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white leading-snug">
                      {edu.degree}
                    </h4>

                    {/* Institution */}
                    <div className="flex flex-wrap items-center gap-x-2 text-[11px] font-mono text-zinc-405 dark:text-zinc-400">
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">{edu.institution}</span>
                      <span className="text-zinc-300 dark:text-zinc-700">|</span>
                      <span className="flex items-center gap-0.5">
                        <MapPin className="h-3 w-3" />
                        <span>{edu.location}</span>
                      </span>
                    </div>

                    {/* Meta Indicators: GPA & Date */}
                    <div className="flex flex-wrap items-center gap-2 pt-0.5">
                      <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[9.5px] font-mono font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400 border border-emerald-500/15">
                        <Award className="h-3 w-3" />
                        <span>GPA: {edu.gpa}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 rounded bg-zinc-100 px-2 py-0.5 text-[9.5px] font-mono font-medium text-zinc-650 dark:bg-zinc-850 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-800">
                        <Calendar className="h-2.5 w-2.5" />
                        <span>{edu.duration}</span>
                      </span>
                    </div>

                    {/* Detailed Academic bullets */}
                    <ul className="space-y-2 pt-3.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                      {edu.details.map((detail, dIdx) => {
                        // Bold specific headers in education list
                        if (detail.startsWith("Key coursework") || detail.startsWith("Specialising in")) {
                          const separatorIdx = detail.indexOf(':') !== -1 ? detail.indexOf(':') : detail.indexOf(' in');
                          const headerText = detail.substring(0, separatorIdx + 1);
                          const remainingText = detail.substring(separatorIdx + 1);
                          return (
                            <li key={dIdx} className="list-disc pl-1 ml-3 marker:text-zinc-400">
                              <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{headerText}</strong>
                              <span>{remainingText}</span>
                            </li>
                          );
                        }
                        return (
                          <li key={dIdx} className="list-disc pl-1 ml-3 marker:text-zinc-400">
                            {detail}
                          </li>
                        );
                      })}
                    </ul>

                  </div>
                </div>
              ))}
            </div>

            {/* Quick quote highlight */}
            <div className="border border-zinc-200/60 rounded bg-white p-4 text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/10 dark:text-zinc-400 leading-relaxed font-sans">
              "Being educated inside Zewail City’s rigorous academic climate demands excellence. The foundational mathematics, network protocols, operating systems, and distributed structures form the direct backbone of my clean production code."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
