import { Project } from '../types';
import { Github, ExternalLink, ArrowRight, Shield, Cpu, Play, MessageSquare, Trophy, Network } from 'lucide-react';

interface ProjectCardProps {
  key?: string;
  project: Project;
  onSelect: (slug: string) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  
  // Custom interactive CSS mockup layouts based on each specific project
  const renderInteractiveMockup = () => {
    switch (project.slug) {
      case 'microservices-social-platform':
        return (
          <div className="relative h-full w-full bg-zinc-950 p-4 font-mono text-[9px] text-zinc-400 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-1.5 mb-1.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-zinc-500 text-[8px] ml-1">Go Orchestrator Pipeline v1.2</span>
              </div>
              <span className="text-emerald-500 bg-emerald-500/10 px-1 rounded text-[8px]">ACTIVE</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-2">
              <div className="flex items-center justify-center gap-2">
                <div className="rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-center shadow-sm">
                  <div className="text-white font-bold font-mono">Gateway</div>
                  <div className="text-[7.5px] text-blue-400">gRPC proxy</div>
                </div>
                <div className="text-zinc-500">→</div>
                <div className="rounded border border-blue-500 bg-blue-950 px-2 py-1 text-center shadow-sm relative">
                  <div className="text-blue-400 font-bold font-mono">Kafka Broker</div>
                  <div className="text-[7.5px] text-blue-300">"PostCreated"</div>
                  <span className="absolute -top-1 -right-1 flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span></span>
                </div>
                <div className="text-zinc-500">→</div>
                <div className="rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-center shadow-sm">
                  <div className="text-white font-bold font-mono">Feed Worker</div>
                  <div className="text-[7.5px] text-emerald-400">Redis write</div>
                </div>
              </div>
              
              <div className="text-center font-mono text-[7.5px] text-zinc-500 mt-1">
                [Load test] Concurrency: 12,000 req/sec | Avg latency: <span className="text-emerald-400">28.4ms</span>
              </div>
            </div>
            
            <div className="border-t border-zinc-900 pt-1 text-[8px] text-zinc-600 flex justify-between">
              <span>Port: :3000/api/social</span>
              <span>Worker Node: #1-A</span>
            </div>
          </div>
        );

      case 'clipsphere-pro':
        return (
          <div className="relative h-full w-full bg-zinc-900/90 dark:bg-zinc-950 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-zinc-200/50 dark:border-zinc-800 pb-2">
              <div className="flex items-center gap-1.5">
                <Play className="h-3 w-3 text-emerald-500 fill-emerald-500/20" />
                <span className="text-zinc-800 dark:text-zinc-300 font-mono text-[10px] font-bold">ClipSphere Engine</span>
              </div>
              <span className="text-[8px] text-zinc-400 dark:text-zinc-500 font-mono">AWS S3 Uplink</span>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-2.5 py-1">
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[9px] font-mono text-zinc-600 dark:text-zinc-400">
                  <span>Uploading: raw_product_promo.mov</span>
                  <span className="text-blue-500 font-bold">100%</span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[9px] font-mono text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1"><Cpu className="h-3 w-3 inline text-emerald-500 animate-spin" /> Transcoding 1080p Profile...</span>
                  <span className="text-emerald-500 font-bold">78%</span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-[8px] border-t border-zinc-200/50 dark:border-zinc-805 pt-2 text-zinc-500 font-mono">
              <span>Transcoder: BullMQ</span>
              <span className="text-emerald-500 font-medium">Stripe webhook READY</span>
            </div>
          </div>
        );

      case 'ephemeral-hybrid-messenger':
        return (
          <div className="relative h-full w-full bg-zinc-950 p-4 font-mono text-[9px] text-zinc-400 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-1.5 mb-1 bg-zinc-950">
              <div className="flex items-center gap-1">
                <MessageSquare className="h-3 w-3 text-amber-500" />
                <span className="text-[8.5px] font-bold text-zinc-300">E2EE Chat Tunnel</span>
              </div>
              <span className="text-[8px] text-amber-500 bg-amber-500/10 px-1 rounded">SECURE SOCKETS</span>
            </div>

            <div className="flex-1 flex flex-col gap-2.5 justify-center py-2 text-[8px]">
              {/* Alice Msg */}
              <div className="space-y-0.5">
                <div className="text-zinc-500 flex justify-between">
                  <span>From: Alice (RSA-2048)</span>
                  <span className="text-zinc-600">10:06:54 AM</span>
                </div>
                <div className="bg-zinc-900 text-zinc-200 rounded p-1 border border-zinc-800 text-[7.5px] overflow-hidden whitespace-nowrap text-ellipsis">
                  U2FsdGVkX19tMyU2Y+8ZkWY77rR9O2NlC6V...
                </div>
              </div>

              {/* Bob Msg */}
              <div className="space-y-0.5">
                <div className="text-amber-400 flex justify-between">
                  <span>To: Bob (AES Decrypted)</span>
                  <span className="text-zinc-600">TTL: <span className="text-rose-500 font-bold animate-pulse">4s</span></span>
                </div>
                <div className="bg-amber-500/10 text-amber-300 rounded p-1 border border-amber-500/20 text-[8px]">
                  "Zero metadata logs saved on server RAM."
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-1 text-[8px] text-zinc-600 flex justify-between items-center font-mono">
              <span className="flex items-center gap-1"><Shield className="h-2.5 w-2.5 text-zinc-505" /> AES-256 GCM</span>
              <span>Redis Cache TTL</span>
            </div>
          </div>
        );

      case 'threat-flow-ml-classifier':
        return (
          <div className="relative h-full w-full bg-zinc-950 p-4 font-mono text-[9px] text-zinc-400 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-1.5 relative">
              <div className="flex items-center gap-1">
                <Network className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-[8.5px] font-bold text-zinc-300">Intrusion Auditing Model</span>
              </div>
              <span className="text-rose-400 bg-rose-500/10 px-1 border border-rose-505/20 rounded text-[7.5px]">ATTACK FLAGGED</span>
            </div>

            <div className="flex-1 flex items-center justify-between gap-2.5 my-1">
              <div className="space-y-1 flex-1 text-[8px]">
                <div className="flex justify-between">
                  <span>ROC-AUC:</span>
                  <span className="text-emerald-400 font-bold">0.992</span>
                </div>
                <div className="flex justify-between">
                  <span>SMOTE over-sample:</span>
                  <span className="text-blue-400 font-bold">Rescaled</span>
                </div>
                <div className="flex justify-between">
                  <span>Classifier Mode:</span>
                  <span className="text-zinc-300 font-bold">DNN + RF</span>
                </div>
              </div>

              {/* Minimal SVG Grid Visualization */}
              <div className="h-14 w-18 border border-zinc-905 bg-zinc-900/50 rounded flex items-center justify-center p-0.5 relative overflow-hidden">
                <svg viewBox="0 0 100 50" className="w-full h-full text-blue-500">
                  <path
                    d="M 0 45 L 20 40 L 40 45 L 60 10 L 80 8 L 100 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                  <line x1="60" y1="0" x2="60" y2="50" stroke="#f43f5e" strokeWidth="1" strokeDasharray="2" />
                </svg>
                <span className="absolute top-1 right-1 text-[6.5px] text-rose-500 font-bold bg-rose-950/80 px-0.5 rounded">DDoS</span>
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-1 text-[8.5px] text-zinc-500 flex justify-between">
              <span>Accuracy: <span className="text-emerald-400 font-bold">98.4%</span></span>
              <span>Features PCA: 12/40</span>
            </div>
          </div>
        );

      case 'zc-league-hub':
        return (
          <div className="relative h-full w-full bg-zinc-90 bg-white dark:bg-zinc-950 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-zinc-200/50 dark:border-zinc-800 pb-2">
              <div className="flex items-center gap-1">
                <Trophy className="h-3 w-3 text-amber-500" />
                <span className="text-zinc-800 dark:text-zinc-300 font-mono text-[9.5px] font-bold">ZC Tournament Bracket</span>
              </div>
              <span className="text-[7.5px] text-zinc-400 font-mono flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 bg-green-500 rounded-full animate-ping" /> Live Sync
              </span>
            </div>

            {/* Bracket Mock diagram */}
            <div className="flex-1 flex items-center justify-center gap-3.5 text-[8.5px]">
              {/* Semi-finals */}
              <div className="space-y-2 font-mono">
                <div className="border border-zinc-200 dark:border-zinc-800 rounded bg-white/60 dark:bg-zinc-900 p-1 flex justify-between w-18">
                  <span className="text-zinc-500">CS Pirates</span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">3</span>
                </div>
                <div className="border border-pink-500/20 rounded bg-zinc-100 dark:bg-pink-950/20 p-1 flex justify-between w-18 border-l-2 border-l-pink-500">
                  <span className="text-zinc-500 truncate">MECH Titans</span>
                  <span className="font-bold text-pink-500">1</span>
                </div>
              </div>

              <div className="w-4 h-px bg-zinc-200 dark:bg-zinc-800 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>

              {/* Finals winner */}
              <div className="font-mono">
                <div className="border border-blue-500 rounded bg-blue-950/10 dark:bg-blue-900/10 p-1.5 flex flex-col items-center w-18 border-t-2 border-t-blue-500 shadow-sm shadow-blue-500/10">
                  <span className="text-[7px] text-blue-500 font-bold uppercase tracking-wider">CHAMPION</span>
                  <span className="font-medium text-zinc-800 dark:text-zinc-100 truncate w-full text-center">CS Pirates</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-[8px] border-t border-zinc-200/50 dark:border-zinc-805 pt-2 text-zinc-500 font-mono">
              <span>Sockets: Active</span>
              <span className="text-zinc-400">100+ Live Users</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-full w-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center font-mono text-zinc-400">
            [Technical Outline Placeholder]
          </div>
        );
    }
  };

  return (
    <div className="group flex flex-col h-full border border-zinc-200 dark:border-zinc-800 bg-white/30 dark:bg-zinc-900/20 rounded-lg overflow-hidden hover:border-blue-500/50 focus-within:border-blue-500/50 transition-all duration-300 hover:-translate-y-0.5">
      
      {/* Dynamic Terminal / Dashboard representation of project code */}
      <div className="aspect-video w-full overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 select-none">
        {renderInteractiveMockup()}
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          
          {/* Tag Category indicators & Meta details */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
              {project.category === 'backend' ? 'Backend Architecture' :
               project.category === 'fullstack' ? 'Full-Stack Hub' :
               project.category === 'security' ? 'Security & Encryption' :
               project.category === 'ml' ? 'AI & Data Science' : 'Systems & Sockets'}
            </span>
            <span className="text-[10px] font-mono text-zinc-500">
              {project.duration}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>

          {/* Core short description */}
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
            {project.tagline}
          </p>

          {/* Monospace stack badges */}
          <div className="flex flex-wrap gap-1.5 pt-1.5 pb-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-[9px] font-mono bg-zinc-100 border border-zinc-200 text-zinc-650 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 rounded transition-colors"
               >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-1.5 py-0.5 text-[9px] font-mono text-zinc-400 font-semibold">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>

        </div>

        {/* Action item buttons */}
        <div className="mt-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub page for ${project.name}`}
              className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-450 dark:hover:text-zinc-100 transition-colors"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo of ${project.name}`}
                className="text-zinc-400 hover:text-zinc-950 dark:text-zinc-450 dark:hover:text-zinc-100 transition-colors"
              >
                <ExternalLink className="h-4.5 w-4.5" />
              </a>
            )}
          </div>

          <button
            onClick={() => onSelect(project.slug)}
            className="flex items-center gap-1 text-[10px] font-bold text-blue-500 group-hover:underline cursor-pointer"
          >
            <span>View Details →</span>
          </button>
        </div>

      </div>
    </div>  );
}
