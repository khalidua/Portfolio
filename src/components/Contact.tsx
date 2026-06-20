import { useState, FormEvent } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, MessageSquareText, Terminal } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    
    // Simulate real database or API endpoint sending
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form variables
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Auto-expire success alert after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const contactOptions = [
    {
      name: 'Primary EmailAddress',
      value: 'kh522004@gmail.com',
      href: 'mailto:kh522504@gmail.com?subject=Recruitment%20Inquiry',
      icon: <Mail className="h-4.5 w-4.5 text-blue-500" />
    },
    {
      name: 'Professional LinkedIn',
      value: 'linkedin.com/in/khalid-mohamed',
      href: 'https://linkedin.com',
      icon: <Linkedin className="h-4.5 w-4.5 text-blue-500" />
    },
    {
      name: 'Core GitHub Repository',
      value: 'github.com/kh522004',
      href: 'https://github.com',
      icon: <Github className="h-4.5 w-4.5 text-blue-500" />
    }
  ];

  return (
    <section id="contact" className="py-16 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex items-center justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Secure Transmission Portal</h3>
          <span className="text-xs text-zinc-400 dark:text-zinc-600 font-mono">[Online Channel]</span>
        </div>

        {/* Form and Contact Lists Wrapper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* LEFT: Contact Lists (Covers 2 columns) */}
          <div className="md:col-span-2 space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono flex items-center gap-1.5">
              <Terminal className="h-4 w-4" />
              <span>Identity Endpoints</span>
            </h3>

            <div className="space-y-4">
              {contactOptions.map((opt) => (
                <a
                  key={opt.name}
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-4 rounded-lg border border-zinc-200/80 bg-white/50 hover:bg-zinc-50/85 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/10 dark:hover:bg-zinc-900/30 dark:hover:border-zinc-800 transition-all group"
                >
                  <div className="rounded p-1.5 bg-zinc-100 dark:bg-zinc-900 dark:group-hover:bg-zinc-800 transition-colors">
                    {opt.icon}
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <span className="block text-[10px] font-mono font-bold uppercase text-zinc-400 dark:text-zinc-500">
                      {opt.name}
                    </span>
                    <span className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {opt.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-lg border border-zinc-200 bg-zinc-50/50 p-4 font-mono text-[11px] text-zinc-500 leading-normal dark:border-zinc-800 dark:bg-zinc-950/20">
              <div className="font-bold text-zinc-700 dark:text-zinc-300 mb-1 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Response SLA Indicator:</span>
              </div>
              <p className="pl-3.5">
                Recruiter inbounds are processed automatically. Response time averages &lt; 8 hours. Summer 2026 scheduling is open.
              </p>
            </div>
          </div>

          {/* RIGHT: Direct Message Contact Form (Covers 3 columns) */}
          <div className="md:col-span-3">
            <div className="border border-zinc-200 bg-white rounded-lg p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/20">
              
              <div className="flex items-center gap-1.5 mb-5 border-b border-zinc-200 dark:border-zinc-800 pb-2.5">
                <MessageSquareText className="h-4 w-4 text-blue-500" />
                <h3 className="text-xs font-bold font-mono uppercase text-zinc-700 dark:text-zinc-300">
                  Send Direct Routing Message
                </h3>
              </div>

              {submitSuccess ? (
                <div className="rounded-md bg-emerald-500/10 p-4 border border-emerald-500/20 flex gap-3 text-emerald-800 dark:text-emerald-400">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5 animate-bounce" />
                  <div className="space-y-1 font-sans">
                    <div className="font-semibold text-xs font-mono uppercase tracking-wider">Message Relayed Successfully!</div>
                    <p className="text-xs leading-normal font-sans">
                      Thank you for connecting. Your transmission has been queued. I will retrieve your credentials and respond shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  
                  {/* Name and Email input row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 col-span-1">
                      <label htmlFor="input-name" className="text-[10px] uppercase font-bold text-zinc-500">
                        Full Name *
                      </label>
                      <input
                        id="input-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded border border-zinc-200 bg-transparent px-3 py-2 text-zinc-800 focus:border-blue-500 focus:outline-hidden dark:border-zinc-800 dark:text-zinc-100 transition-colors placeholder:text-zinc-400"
                      />
                    </div>

                    <div className="space-y-1.5 col-span-1">
                      <label htmlFor="input-email" className="text-[10px] uppercase font-bold text-zinc-500">
                        Email Address *
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@organization.com"
                        className="w-full rounded border border-zinc-200 bg-transparent px-3 py-2 text-zinc-800 focus:border-blue-500 focus:outline-hidden dark:border-zinc-800 dark:text-zinc-100 transition-colors placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="input-subject" className="text-[10px] uppercase font-bold text-zinc-505">
                      Subject
                    </label>
                    <input
                      id="input-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Opportunity / Technical Inquiry"
                      className="w-full rounded border border-zinc-200 bg-transparent px-3 py-2 text-zinc-800 focus:border-blue-500 focus:outline-hidden dark:border-zinc-800 dark:text-zinc-100 transition-colors placeholder:text-zinc-400"
                    />
                  </div>

                  {/* Message content */}
                  <div className="space-y-1.5">
                    <label htmlFor="input-message" className="text-[10px] uppercase font-bold text-zinc-505">
                      Message Content *
                    </label>
                    <textarea
                      id="input-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify your vacancy parameters, distributed systems requirements, or core stack goals..."
                      className="w-full rounded border border-zinc-200 bg-transparent px-3 py-2 text-zinc-800 focus:border-blue-500 focus:outline-hidden dark:border-zinc-800 dark:text-zinc-100 transition-colors resize-y placeholder:text-zinc-400 font-sans"
                    />
                  </div>

                  {/* Trigger submit */}
                  <button
                    id="btn-contact-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded bg-blue-600 py-2.5 font-bold uppercase tracking-wider text-white shadow hover:bg-blue-500 disabled:opacity-50 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Relaying Message...' : 'Transmit Connection'}</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
