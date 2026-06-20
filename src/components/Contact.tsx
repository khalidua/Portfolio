import { Mail, Github, Linkedin, Send, FileText, MapPin } from 'lucide-react';

export default function Contact() {
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
      className="py-16 border-b border-zinc-200/60 dark:border-zinc-900/60 transition-colors duration-300"
      aria-label="Contact information and connections"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 border-b border-zinc-200/60 dark:border-zinc-850 pb-4 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 font-mono">
            Let's Connect
          </h3>
          <p className="text-sm text-zinc-550 dark:text-zinc-405 font-sans max-w-2xl leading-relaxed">
            I'm always happy to discuss software engineering, backend development, internship opportunities, or interesting projects. Feel free to reach out.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* LEFT: Contact Info Cards (Covers 2 columns) */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-500 font-mono flex items-center gap-2 mb-3">
              <Mail className="h-4 w-4 text-blue-500" aria-hidden="true" />
              <span>Contact</span>
            </h4>

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
                      <span className="block text-[10px] text-zinc-400 dark:text-zinc-500 font-sans">
                        {opt.description}
                      </span>
                      <span className="block text-xs sm:text-sm font-extrabold text-zinc-805 dark:text-zinc-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pt-0.5">
                        {opt.value}
                      </span>
                    </div>
                  </>
                );

                if (opt.href) {
                  return (
                    <a
                      key={opt.name}
                      href={opt.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-xl border border-zinc-205 bg-white/50 hover:bg-zinc-50/80 hover:border-blue-500/40 dark:border-zinc-800 dark:bg-zinc-900/10 dark:hover:bg-zinc-900/30 dark:hover:border-blue-500/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
                      aria-label={`${opt.name}: ${opt.description}. ${opt.value}`}
                    >
                      {cardContent}
                    </a>
                  );
                }

                return (
                  <div
                    key={opt.name}
                    className="flex items-start gap-4 p-4 rounded-xl border border-zinc-205 bg-white/50 dark:border-zinc-800 dark:bg-zinc-900/10 transition-all duration-300 shadow-xs"
                    aria-label={`${opt.name}: ${opt.description}. ${opt.value}`}
                  >
                    <div className="rounded-lg p-2 bg-zinc-100 dark:bg-zinc-900 transition-colors shrink-0">
                      {opt.icon}
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="block text-sm font-bold text-zinc-900 dark:text-white">
                        {opt.name}
                      </span>
                      <span className="block text-[10px] text-zinc-400 dark:text-zinc-500 font-sans">
                        {opt.description}
                      </span>
                      <span className="block text-xs sm:text-sm font-extrabold text-zinc-805 dark:text-zinc-200 truncate pt-0.5">
                        {opt.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Call-to-Action Card (Covers 3 columns) */}
          <div className="md:col-span-3">
            <div className="border border-zinc-200 bg-white rounded-xl p-6 md:p-8 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/20 flex flex-col justify-between h-full space-y-8">
              
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
                
                <p className="text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed font-sans">
                  I'm currently looking for Software Engineering internship opportunities where I can contribute, learn from experienced engineers, and continue growing as a backend and full-stack developer. If you think we'd be a good fit, I'd love to hear from you.
                </p>
              </div>

              {/* Action Buttons with increased spacing */}
              <div className="pt-6 space-y-3">
                <a
                  href="mailto:kh.mohamed.dev@gmail.com?subject=Inquiry"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-505 py-3.5 font-bold text-white shadow hover:shadow-md transition-all duration-300 active:scale-[0.99] text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
                  aria-label="Send email to kh.mohamed.dev@gmail.com"
                >
                  <span>Email Me</span>
                  <Send className="h-4 w-4" aria-hidden="true" />
                </a>

                {/* Secondary CTA (outlined resume link) */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 bg-transparent py-3.5 font-semibold text-zinc-805 dark:text-zinc-200 transition-all duration-300 active:scale-[0.99] text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900/40 focus:outline-hidden focus:ring-2 focus:ring-blue-500/10"
                  aria-label="Resume"
                >
                  <span>Resume</span>
                  <FileText className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
