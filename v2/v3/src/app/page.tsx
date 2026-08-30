import { Hero } from "@/components/ui/animated-hero";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import MultiOrbitSemiCircle from "@/components/ui/multi-orbit-semi-circle";
import { SmokeCard } from "@/components/ui/smoke-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { Film, PlayCircle, Search, Sparkles, Mail, Linkedin, Github, Instagram, FileText, Award, Terminal, Briefcase, GraduationCap, MapPin, Calendar, Heart, Share2, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const projects = [
    { title: "Lucent", type: "AI Multi-Parameter", tech: "Python, PyTorch, Multi-Modal Fusion", desc: "Deepfake Detection framework fusing spatial & frequency-domain analysis with Celery & Redis for async high-compute processing." },
    { title: "IMS Enterprise", type: "Full-Stack Inventory", tech: "Node.js, PostgreSQL, React", desc: "Real-time analytical dashboards optimizing inbound/outbound logistics. Manages 1,000+ SKUs for a 20M+ AED food supply chain." },
    { title: "MassEd.ex", type: "Computer Vision", tech: "Python, YOLOv8, OpenCV, DeepSORT", desc: "Crowd intelligence system tracking 50+ concurrent objects at 30 FPS. Identifies 4 distinct behavioral anomaly patterns." },
    { title: "NetRecon", type: "LAN & Topology Scanner", tech: "C, Unix Sockets, Bash", desc: "Deep-analysis reconnaissance mapping /24 local subnets in under 12s. Custom ARP/ICMP analysis identified 100% of rogue devices." },
    { title: "VisionEX", type: "Security Suite", tech: "Minimax, Diffie-Hellman", desc: "Web-based cybersecurity suite with enterprise-grade digital certification tools and robust system encryption protocols." },
    { title: "Ouch My Brain", type: "Study Companion", tech: "React, AI Integration", desc: "Runners-Up at Acethon. AI & voice-enabled super study companion app making learning smarter and personalized." }
  ];

  const memoirs = [
    {
      author: "Calvin Dsouza",
      role: "Second-Year Cybersecurity Explorer",
      time: "3mo",
      content: "On the 21th and 22nd, I took part in Innovex, the 24-hour hackathon hosted by NITTE — and it turned out to be one of the best learning experiences. Our team built MassEd.ex, a real-time crowd-safety system using AI-powered people detection.",
      img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
      likes: "42",
      comments: "3"
    },
    {
      author: "Calvin Dsouza",
      role: "Second-Year Cybersecurity Explorer",
      time: "3mo",
      content: "I recently wrapped up a two-day Ethical Hacking Workshop with Ethical Edufabrica at IISc Bangalore. An intense but fun deep dive into Kali Linux, core cybersecurity concepts, phishing, and SQL injection.",
      img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800&auto=format&fit=crop",
      likes: "23",
      comments: "1"
    },
    {
      author: "Calvin Dsouza",
      role: "Second-Year Cybersecurity Explorer",
      time: "1mo",
      content: "Built my first browser extension today — 🎬✨ VibeAlchemy. A super cool experiment that lets you discover movies based on pure vibes — moods, aesthetics, or even the webpage you're currently browsing.",
      img: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=800&auto=format&fit=crop",
      likes: "15",
      comments: "2"
    }
  ];

  const skills = [
    { category: "Cybersecurity", items: "Digital Forensics, OSINT, Network Security (Nmap, Wireshark, Gobuster), Steganography, Encryption" },
    { category: "AI & Machine Learning", items: "Multi-Modal Fusion Models, Computer Vision (YOLOv8), LLM Integration, Pattern Recognition" },
    { category: "Languages & Frameworks", items: "Python, JavaScript, Node.js, FastAPI, Flask, SQL, HTML/CSS" },
    { category: "Developer Tools", items: "Linux (Kali/Ubuntu), Git, Docker, Bash Scripting, Chrome Extension Dev" }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 font-sans">
      <Hero />

      {/* Experience & Education Section */}
      <section className="py-24 relative border-t border-zinc-900" id="experience">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-cyan-400" />
                <h2 className="text-3xl font-bold font-heading">Experience</h2>
              </div>
              <div className="relative pl-8 border-l border-zinc-800 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[41px] bg-black p-1 rounded-full border border-zinc-800">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full blur-[2px]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Cybersecurity Developer Intern & Team Lead</h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1 mb-3">
                    <MapPin className="w-4 h-4" /> NMAMIT (Vision)
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4" /> Jan 2025 – May 2025
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Directed a 6-member team to engineer &quot;VisionEX,&quot; establishing rigorous system encryption utilizing Diffie-Hellman protocols. Integrated Minimax algorithms to optimize the core cryptographic engine.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] bg-black p-1 rounded-full border border-zinc-800">
                    <div className="w-3 h-3 bg-zinc-600 rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Leadership Roles</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm mt-2">
                    <strong className="text-zinc-200">Junior Branch Representative</strong> (Jan 2026 – 2027) orchestrating branch-level festival logistics.<br /><br />
                    <strong className="text-zinc-200">Core Member - PROTON</strong> (Aug 2025 – 2026) facilitating collegiate CTF competitions and events like &quot;Game of Conquest&quot;.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
                <h2 className="text-3xl font-bold font-heading">Education</h2>
              </div>
              <div className="relative pl-8 border-l border-zinc-800 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[41px] bg-black p-1 rounded-full border border-zinc-800">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full blur-[2px]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">B.Tech in Cybersecurity</h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1 mb-3">
                    <MapPin className="w-4 h-4" /> NMAMIT (9.26 CGPA)
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4" /> Aug 2024 – May 2028
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] bg-black p-1 rounded-full border border-zinc-800">
                    <div className="w-3 h-3 bg-zinc-600 rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Higher Secondary Education</h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1 mb-3">
                    <MapPin className="w-4 h-4" /> Indian High School, Dubai (8.91)
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4" /> Apr 2010 – Apr 2022
                  </div>
                </div>
              </div>

              {/* Competitions spotlight */}
              <div className="mt-12 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold mb-4"><Award className="w-5 h-5 text-yellow-500" /> Commendations</h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2"><span className="text-cyan-400">▹</span> 7th Place @ Code Intrusion CTF</li>
                  <li className="flex gap-2"><span className="text-cyan-400">▹</span> 14th Place @ Enyugma CTF (200+ teams)</li>
                  <li className="flex gap-2"><span className="text-cyan-400">▹</span> Runners-Up @ Acethon</li>
                  <li className="flex gap-2"><span className="text-cyan-400">▹</span> Special Commendation @ Innovex Hackathon</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 relative bg-zinc-950/50 border-y border-zinc-900 overflow-hidden" id="skills">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-white">Technical Arsenal</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Mastering the intersection of deep-dive security and artificial intelligence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-[#050505] border border-zinc-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{skill.category}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 relative" id="projects">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-white">Featured <span className="text-cyan-400">Projects</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Selected high-impact works spanning intelligent recommendation, networking bounds, and computer vision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div key={idx} className="border border-zinc-800/60 bg-[#060606] rounded-2xl p-4 flex flex-col group relative overflow-hidden min-h-[420px] hover:border-zinc-700 transition-colors">
                {/* Evervault Card Container */}
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 flex-shrink-0">
                  <EvervaultCard text={proj.title.substring(0, 3).toUpperCase()} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="pointer-events-none absolute inset-0">
                    <Icon className="absolute h-6 w-6 -top-3 -left-3 text-cyan-500/50" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-cyan-500/50" />
                    <Icon className="absolute h-6 w-6 -top-3 -right-3 text-cyan-500/50" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-cyan-500/50" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col z-10 p-2">
                  <div className="text-cyan-400 text-xs font-mono mb-2">{proj.tech}</div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-cyan-400 transition-colors">{proj.title}</h3>
                  <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">{proj.type}</div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memoir Section with Spooky Smoke Background */}
      <section className="py-32 relative overflow-hidden border-t border-zinc-900" id="memoirs">
        {/* The Animated Smoke Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <SmokeBackground smokeColor="#4f46e5" /> {/* Indigo tint matching the vibe */}
        </div>

        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-0 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-white">Memoir <span className="text-indigo-400">&</span> Milestones</h2>
            <p className="text-zinc-300/80 max-w-2xl mx-auto backdrop-blur-sm">A visual log of hackathons, workshops, and building in public.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memoirs.map((post, idx) => (
              <div key={idx} className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/80 rounded-xl overflow-hidden shadow-2xl hover:border-indigo-500/30 transition-all group flex flex-col h-full">

                {/* LinkedIn style header */}
                <div className="p-4 flex gap-3 items-center border-b border-zinc-800/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center font-bold">CD</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-zinc-100 flex items-center gap-1">
                      {post.author} <span className="w-3 h-3 bg-zinc-700/50 rounded-full flex items-center justify-center"><CheckBadge className="w-2 h-2 text-zinc-300" /></span>
                    </h4>
                    <p className="text-xs text-zinc-500 line-clamp-1">{post.role}</p>
                    <p className="text-[10px] text-zinc-600">{post.time} • 🌎</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1">
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">{post.content}</p>
                </div>

                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.img} alt="Post content" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Footer metrics */}
                <div className="px-4 py-3 bg-zinc-950 flex gap-4 text-xs font-medium text-zinc-500 border-t border-zinc-800/50">
                  <div className="flex items-center gap-1.5 hover:text-indigo-400 cursor-pointer transition-colors">
                    <Heart className="w-4 h-4" /> {post.likes}
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-indigo-400 cursor-pointer transition-colors">
                    <MessageCircle className="w-4 h-4" /> {post.comments}
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-indigo-400 cursor-pointer transition-colors ml-auto">
                    <Share2 className="w-4 h-4" /> Share
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-black pt-12 border-t border-zinc-900 border-t-indigo-500/20">
        <MultiOrbitSemiCircle />
      </section>

      {/* Contact Section */}
      <section className="py-24 relative bg-black" id="contact">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-white">Let&apos;s <span className="text-cyan-400">Connect</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Looking to elevate your security posture or need a full-stack architect? Reach out today.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <GradientButton variant="variant" className="gap-2 w-full md:w-auto">
              <Mail className="w-5 h-5" /> Email
            </GradientButton>
            <GradientButton className="gap-2 w-full md:w-auto">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </GradientButton>
            <GradientButton variant="variant" className="gap-2 w-full md:w-auto">
              <Github className="w-5 h-5" /> GitHub
            </GradientButton>
            <GradientButton className="gap-2 w-full md:w-auto">
              <Instagram className="w-5 h-5" /> Instagram
            </GradientButton>
            <GradientButton variant="variant" className="gap-2 w-full md:w-auto">
              <FileText className="w-5 h-5" /> Resume
            </GradientButton>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-zinc-900 text-center text-zinc-600 text-xs bg-black relative z-10">
        <p>&copy; {new Date().getFullYear()} MNC-Grade Systems & Security. All rights reserved.</p>
      </footer>
    </main >
  );
}

const CheckBadge = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);
