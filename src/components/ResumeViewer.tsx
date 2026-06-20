import { X, Printer, Download, Mail, MapPin, Award, Terminal, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

interface ResumeViewerProps {
  onClose: () => void;
}

export default function ResumeViewer({ onClose }: ResumeViewerProps) {
  
  // Disable body scroll when viewing the resume document modal
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/70 p-4 backdrop-blur-xs overflow-y-auto">
      
      {/* Printable page layout container */}
      <div className="relative flex flex-col w-full max-w-4xl h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Dynamic upper action line - Hidden when print occurs */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-200 bg-zinc-50 print:hidden shrink-0">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-900">
            <Terminal className="h-4 w-4 text-blue-600" />
            <span>Interactive Recruiter Résumé v2026</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              id="btn-print-resume"
              className="flex items-center gap-1.5 rounded-md bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-blue-500 active:scale-95 transition-all cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Save / Print as PDF</span>
            </button>

            <button
              onClick={onClose}
              id="btn-close-resume"
              aria-label="Close modal"
              className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-650 transition-colors cursor-pointer"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* Paper Document Layout Scroll Area */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12 print:p-0 print:overflow-visible bg-zinc-100 dark:bg-zinc-900/10 min-h-0">
          
          <div className="mx-auto max-w-3xl bg-white border border-zinc-200/60 p-8 sm:p-12 print:p-0 print:border-none shadow-sm print:shadow-none rounded-sm text-zinc-900 text-xs leading-relaxed font-sans" id="resume-sheet">
            
            {/* Header Resume Contact bar */}
            <div className="text-center border-b-2 border-zinc-900 pb-5 mb-5 space-y-2">
              <h1 className="text-2xl font-bold tracking-tight uppercase text-zinc-900">
                Khalid Mohamed
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-4 text-[10.5px] font-mono text-zinc-600 dark:text-zinc-600">
                <span className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  <span>kh522004@gmail.com</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>Giza, Egypt</span>
                </span>
                <span>•</span>
                <span className="font-bold flex items-center gap-1 text-zinc-900">
                  <Award className="h-3.5 w-3.5" />
                  <span>3.88 Honours GPA (CS)</span>
                </span>
              </div>
            </div>

            {/* Resume Summary */}
            <div className="space-y-1.5 mb-5 pb-5 border-b border-zinc-200">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono">
                Professional Profile
              </h2>
              <p className="text-zinc-700">
                High-honors Computer Science senior at Zewail City specializing in high-performance distributed architectures, secure inter-process communications over microservices frameworks (Go, gRPC, REST), event streaming, and custom full-stack solutions. Experienced in deploying, scaling, and managing containerized applications with automated background worker distributions.
              </p>
            </div>

            {/* Academic Education */}
            <div className="space-y-3 mb-5 pb-5 border-b border-zinc-200">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono">
                Education
              </h2>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-zinc-900 text-xs">
                      Bachelor of Science in Computer Science
                    </h3>
                    <div className="font-mono text-[10.5px] text-zinc-600">
                      Zewail City of Science, Technology and Innovation | Giza, Egypt
                    </div>
                  </div>
                  <div className="text-right font-mono text-[10.5px] text-zinc-650 shrink-0">
                    <div>Expected June 2026</div>
                    <div className="font-bold text-zinc-900">GPA: 3.88 / 4.00</div>
                  </div>
                </div>
                
                <ul className="list-disc pl-4 space-y-1 text-zinc-700 text-[11px]">
                  <li>Elected Lead Computer Science Academic Tutor & Mentor for Sophomore cohorts (Distributed Systems & Algorithms).</li>
                  <li>Academic Excellence full-tuition scholarship recipient (4 consecutive years, based strictly on GPA performance).</li>
                  <li>Relevant study: Distributed Systems, Advanced Databases, Network Security, Operating Systems, Systems Architecture.</li>
                </ul>
              </div>
            </div>

            {/* Specialized Skill Sets */}
            <div className="space-y-3 mb-5 pb-5 border-b border-zinc-200">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono">
                Technical Expertise Framework
              </h2>
              
              <div className="grid grid-cols-5 gap-4 text-[10.5px]">
                <div className="col-span-1 font-mono font-bold uppercase text-zinc-800">
                  Languages:
                </div>
                <div className="col-span-4 text-zinc-700">
                  Go, Python, TypeScript, JavaScript, SQL, C++, Bash
                </div>

                <div className="col-span-1 font-mono font-bold uppercase text-zinc-800">
                  Backend/Architecture:
                </div>
                <div className="col-span-4 text-zinc-700">
                  Node.js (Express), gRPC, Apache Kafka, Redis Caching, BullMQ Queues, FastAPI, REST APIs, WebSockets
                </div>

                <div className="col-span-1 font-mono font-bold uppercase text-zinc-800">
                  Frontend/UX:
                </div>
                <div className="col-span-4 text-zinc-700">
                  React.js, Tailwind CSS, Next.js, Motion, Recharts
                </div>

                <div className="col-span-1 font-mono font-bold uppercase text-zinc-800">
                  DevOps/Storage:
                </div>
                <div className="col-span-4 text-zinc-700">
                  PostgreSQL, Docker Containers, MinIO/AWS S3 Object Storage, MongoDB, Git, CI/CD pipelines
                </div>
              </div>
            </div>

            {/* Industry Work experience */}
            <div className="space-y-4 mb-5 pb-5 border-b border-zinc-200">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono">
                Professional & Research Experience
              </h2>

              {/* Experience Item #1 */}
              <div className="space-y-1.5 font-sans">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-zinc-900 text-xs">
                      Full Stack Software Engineer & Technical Lead
                    </h3>
                    <div className="font-mono text-[10.5px] italic text-zinc-650">
                      ZC Academic Coding Guild / Freelance
                    </div>
                  </div>
                  <div className="text-right font-mono text-[10.5px] text-zinc-600 shrink-0">
                    <div>Jan 2024 - Present</div>
                    <div>Zewail City, Egypt</div>
                  </div>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-zinc-700 text-[11px]">
                  <li>Architected, deployed, and maintain <strong>"ZC League Hub"</strong>, managing community tournaments for 150+ campus athletes, successfully reducing manual admin overhead to 0%.</li>
                  <li>Mentored 40+ sophomore students on advanced software design principles, PostgreSQL query pooling, and containerized deployment models.</li>
                  <li>Delivered client products with secure payment interfaces, achieving sub-1.5s interactive paint benchmarks.</li>
                </ul>
              </div>

              {/* Experience Item #2 */}
              <div className="space-y-1.5 font-sans">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-zinc-900 text-xs">
                      Undergraduate Systems Researcher
                    </h3>
                    <div className="font-mono text-[10.5px] italic text-zinc-650">
                      Zewail City of Science and Technology
                    </div>
                  </div>
                  <div className="text-right font-mono text-[10.5px] text-zinc-600 shrink-0">
                    <div>Sep 2023 - Dec 2024</div>
                    <div>Zewail City, Egypt</div>
                  </div>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-zinc-700 text-[11px]">
                  <li>Collaborated with computer engineering faculty on benchmarking gRPC Protobuf structures against classic HTTP REST layers.</li>
                  <li>Refactored lab infrastructure using Docker container layouts, cutting simulation startup delays by 85%.</li>
                  <li>Coded analysis scripting in C++ and Python to monitor CPU thread allocations under intensive test suites.</li>
                </ul>
              </div>
            </div>

            {/* Academic Core Projects */}
            <div className="space-y-3 print:break-before-page">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono">
                Core Engineering Projects
              </h2>

              {/* Project 1 */}
              <div>
                <div className="flex justify-between">
                  <span className="font-bold text-zinc-900 text-xs">Microservices Social Networking Backend</span>
                  <span className="font-mono text-[10.5px] text-zinc-600">Go, Kafka, gRPC, Redis, Postgres</span>
                </div>
                <p className="text-zinc-700 text-[11px] pl-2 mt-0.5 border-l border-zinc-200">
                  Deconstructed social modules into four standalone high-efficiency Go services interacting via gRPC. Optimized notification broadcasts by integrating Apache Kafka brokers, resulting in a sub-30ms average retrieval latency.
                </p>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between">
                  <span className="font-bold text-zinc-900 text-xs">ClipSphere Media Transcoding Hub</span>
                  <span className="font-mono text-[10.5px] text-zinc-600">React, TypeScript, BullMQ, FFmpeg, S3</span>
                </div>
                <p className="text-zinc-700 text-[11px] pl-2 mt-0.5 border-l border-zinc-200">
                  Created chunked cloud-storage uploading pipelines using presigned URL constraints. Distributed heavy video encoding sequences to localized BullMQ nodes with horizontal scaling profiles.
                </p>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex justify-between">
                  <span className="font-bold text-zinc-900 text-xs">Zero-Metadata Cryptographic Messenger</span>
                  <span className="font-mono text-[10.5px] text-zinc-600">WebSockets, Redis pub/sub, WebCrypto E2EE</span>
                </div>
                <p className="text-zinc-700 text-[11px] pl-2 mt-0.5 border-l border-zinc-200">
                  Developed instant E2EE browser messengers with WebSocket connections. Handled cluster nodes using Redis pub/sub brokers while physical messages expire directly from server RAM via strict TTL caching.
                </p>
              </div>
            </div>

          </div>

          {/* Minimal print directions guide - Hidden when printed */}
          <div className="mt-6 text-center text-[10.5px] font-mono text-zinc-500 print:hidden flex items-center justify-center gap-1.5">
            <CheckCircle className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
            <span>To save as local PDF: click <strong>Save / Print</strong> and confirm "Save as PDF" relative to your active printer software.</span>
          </div>

        </div>

      </div>
    </div>
  );
}
