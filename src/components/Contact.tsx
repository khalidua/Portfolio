import { Mail, Github, Linkedin, Send, FileText, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollReveal, fadeUpVariants, slideFromLeftVariants, slideFromRightVariants, staggerContainer } from '../hooks/useScrollReveal';
import { getAssetPath } from '../utils/path';

export default function Contact() {
  const { ref, isInView } = useScrollReveal(0.1);

  const contactOptions = [
    {
      name: 'Email',
      description: 'Best way to reach me',
      value: 'kh.mohamed.dev@gmail.com',
      href: 'mailto:kh.mohamed.dev@gmail.com?subject=Inquiry',
      icon: <Mail className="h-5 w-5 text-blue-500" aria-hidden="true" />
    },
    {
      name: 'LinkedIn',
      description: 'Professional profile',
      value: 'linkedin.com/in/khalidmodev',
      href: 'https://linkedin.com/in/khalidmodev',
      icon: <Linkedin className="h-5 w-5 text-blue-500" aria-hidden="true" />
    },
    {
      name: 'GitHub',
      description: 'Projects & source code',
      value: 'github.com/khalidua',
      href: 'https://github.com/khalidua',
      icon: <Github className="h-5 w-5 text-blue-500" aria-hidden="true" />
    },
    {
      name: 'Location',
      description: 'Based in',
      value: 'Giza, Egypt',
      icon: <MapPin className="h-5 w-5 text-blue-500" aria-hidden="true" />
    }
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-20 border-b border-zinc-200/60 dark:border-zinc-900/60 transition-colors duration-300"
      aria-label="Contact information and connections"
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
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mt-1 font-sans">
            Let's Connect
          </h2>
          <p className="text-base/relaxed text-zinc-500 dark:text-zinc-400 font-sans max-w-2xl leading-relaxed mt-2">
            I'm always happy to discuss software engineering, backend development, internship opportunities, or interesting projects. Feel free to reach out.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* LEFT: Contact Info Cards (Covers 2 columns) */}
          <motion.div
            className="md:col-span-2 space-y-5"
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h4
              className="text-xs font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-500 font-mono flex items-center gap-2 mb-3"
              variants={fadeUpVariants}
              transition={{ duration: 0.4 }}
            >
              <Mail className="h-4 w-4 text-blue-500" aria-hidden="true" />
              <span>Contact</span>
            </motion.h4>

            {/* Clean Info Cards with Hover Improvements */}
            <div className="space-y-4" aria-label="Contact options">
              {contactOptions.map((opt) => {
                const cardContent = (
                  <>
                    <div className="rounded-lg p-2 bg-zinc-100 dark:bg-zinc-900 dark:group-hover:bg-zinc-800 transition-colors shrink-0">
                      {opt.icon}
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="block text-sm font-bold text-zinc-900 dark:text-white">
                        {opt.name}
                      </span>
                      <span className="block text-xs text-zinc-400 dark:text-zinc-500 font-sans">
                        {opt.description}
                      </span>
                      <span className="block text-sm font-bold text-zinc-800 dark:text-zinc-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pt-0.5">
                        {opt.value}
                      </span>
                    </div>
                  </>
                );

                if (opt.href) {
                  return (
                    <motion.a
                      key={opt.name}
                      href={opt.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-5 rounded-xl border border-zinc-200 bg-white/50 hover:bg-zinc-50/80 hover:border-blue-500/40 dark:border-zinc-800 dark:bg-zinc-900/10 dark:hover:bg-zinc-900/30 dark:hover:border-blue-500/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                      aria-label={`${opt.name}: ${opt.description}. ${opt.value}`}
                      variants={slideFromLeftVariants}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                    >
                      {cardContent}
                    </motion.a>
                  );
                }

                return (
                  <motion.div
                    key={opt.name}
                    className="flex items-start gap-4 p-5 rounded-xl border border-zinc-200 bg-white/50 dark:border-zinc-800 dark:bg-zinc-900/10 transition-all duration-300 shadow-xs"
                    aria-label={`${opt.name}: ${opt.description}. ${opt.value}`}
                    variants={slideFromLeftVariants}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  >
                    <div className="rounded-lg p-2 bg-zinc-100 dark:bg-zinc-900 transition-colors shrink-0">
                      {opt.icon}
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="block text-sm font-bold text-zinc-900 dark:text-white">
                        {opt.name}
                      </span>
                      <span className="block text-xs text-zinc-400 dark:text-zinc-500 font-sans">
                        {opt.description}
                      </span>
                      <span className="block text-sm font-bold text-zinc-800 dark:text-zinc-200 truncate pt-0.5">
                        {opt.value}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: Call-to-Action Card (Covers 3 columns) */}
          <motion.div
            className="md:col-span-3"
            variants={slideFromRightVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="border border-zinc-200 bg-white rounded-xl p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/20 flex flex-col justify-between h-full space-y-8">

              <div className="space-y-4 flex flex-col">
                {/* Availability Badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/15 rounded-full text-[11px] font-semibold text-emerald-850 dark:text-emerald-400 w-fit mb-3"
                  role="status"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span>Open to Software Engineering Internships</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-snug">
                  Interested in working together?
                </h3>

                <p className="text-base/relaxed text-zinc-650 dark:text-zinc-400 leading-relaxed font-sans">
                  I'm currently looking for Software Engineering internship opportunities where I can contribute, learn from experienced engineers, and continue growing as a backend and full-stack developer. If you think we'd be a good fit, I'd love to hear from you.
                </p>
              </div>

              {/* Action Buttons with standardized height */}
              <div className="pt-6 space-y-3">
                <a
                  href="mailto:kh.mohamed.dev@gmail.com?subject=Inquiry"
                  className="group/btn flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-505 font-bold text-white shadow hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 active:scale-[0.99] text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                  aria-label="Send email to kh.mohamed.dev@gmail.com"
                >
                  <span>Email Me</span>
                  <Send className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" aria-hidden="true" />
                </a>

                {/* Secondary CTA (outlined resume link) */}
                <a
                  href={getAssetPath("/resume.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 bg-transparent font-bold text-zinc-800 dark:text-white transition-all duration-300 active:scale-[0.99] text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900/40 focus:outline-hidden focus:ring-2 focus:ring-blue-500/10 cursor-pointer"
                  aria-label="Resume"
                >
                  <span>Resume</span>
                  <FileText className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
