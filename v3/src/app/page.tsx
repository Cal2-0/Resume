import { ExpandingCards, CardItem } from "@/components/ui/expanding-cards";
import HoverRevealCards from "@/components/ui/cards";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import MemoirInfiniteScroll from "@/components/ui/memoirs-infinite-scroll";
import { BrutalistHero } from "@/components/ui/brutalist-hero";
import MagneticDock from "@/components/ui/magnetic-dock";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import MultiOrbitSemiCircle from "@/components/ui/multi-orbit-semi-circle";
import { SmokeCard } from "@/components/ui/smoke-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { NebulaZoomShowcase } from "@/components/ui/nebula-zoom-showcase";
import LivingNebulaShader from "@/components/ui/living-nebula";
import { Film, PlayCircle, Search, Sparkles, Mail, Linkedin, Github, Instagram, FileText, Award, Terminal, Briefcase, GraduationCap, MapPin, Calendar, Heart, Share2, MessageCircle, Shield, Code, Cpu, ShieldAlert, CpuIcon, AwardIcon, HardDrive } from "lucide-react";
import Image from "next/image";
import { Waves } from "@/components/ui/wave-background";
import { CTASection } from "@/components/ui/hero-dithering-card";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { PPTXSlideshow } from "@/components/ui/pptx-slideshow";
import CalvinPosts3D from "@/components/ui/calvin-posts-3d";
import { GlitchText } from "@/components/ui/glitch-text";
import { GithubTerminal } from "@/components/ui/github-terminal";
import { SpotifyWidget } from "@/components/ui/spotify-widget";

export default function Home() {
  const builtProjects: CardItem[] = [
    {
      id: "ouchmybrain",
      title: "OuchMyBrain.io",
      description: "AI study companion (🥈 2nd Place ACEathon). Transforms materials into summaries, flashcards, & adaptive audio lessons.",
      imgSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
      icon: <Cpu size={24} />,
      linkHref: "#",
    },
    {
      id: "massed",
      title: "MassEd.ex",
      description: "Computer-vision crowd monitoring platform built for real-time safety analysis via OpenCV and YOLOv8.",
      imgSrc: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2000&auto=format&fit=crop",
      icon: <Search size={24} />,
      linkHref: "#",
    },
    {
      id: "calhive",
      title: "CalHive",
      description: "Intelligent productivity system combining calendar scheduling with NLP-based SpaCy task classification.",
      imgSrc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2000&auto=format&fit=crop",
      icon: <Calendar size={24} />,
      linkHref: "#",
    },
    {
      id: "vibealchemy",
      title: "VibeAlchemy",
      description: "AI Chrome extension recommending movies via Together AI inference based on semantic mood & webpage context.",
      imgSrc: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop",
      icon: <Film size={24} />,
      linkHref: "#",
    },
    {
      id: "warehouse",
      title: "Warehouse Inventory",
      description: "Full-stack inventory management platform tracking item allocation, bulk imports, and stock analytics.",
      imgSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
      icon: <Briefcase size={24} />,
      linkHref: "#",
    },
    {
      id: "melkit",
      title: "Melkit",
      description: "Data forensics suite parsing and visualizing GPS coordinates alongside EXIF metadata from raw images.",
      imgSrc: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop",
      icon: <MapPin size={24} />,
      linkHref: "#",
    },
    {
      id: "aico",
      title: "ai.co",
      description: "Modular application featuring chatbots, movie assistants, and planners powered by grouped LLM APIs.",
      imgSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
      icon: <CpuIcon size={24} />,
      linkHref: "#",
    },
    {
      id: "cipherlab",
      title: "Cipher Lab",
      description: "Interactive cryptography playground experimenting with encoding and decoding historic classical algorithms.",
      imgSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop",
      icon: <Shield size={24} />,
      linkHref: "#",
    },
    {
      id: "snapshop",
      title: "SnapShop",
      description: "Vision-based product search encoding UI images into CLIP vector space to perform similarity matches.",
      imgSrc: "https://images.unsplash.com/photo-1512418490979-9ce91d4dc622?q=80&w=2000&auto=format&fit=crop",
      icon: <Search size={24} />,
      linkHref: "#",
    },
    {
      id: "securerooms",
      title: "Secure Rooms",
      description: "Socket-based authenticated environment allowing users to launch AES-encrypted real-time chat spaces.",
      imgSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
      icon: <MessageCircle size={24} />,
      linkHref: "#",
    }
  ];

  const researchProjects: CardItem[] = [
    {
      id: "lucent",
      title: "Lucent.ai",
      description: "Multi-layer forensic detection system identifying deepfakes via visual, mathematical (FFT), and reverse-diffusion analysis.",
      imgSrc: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2000&auto=format&fit=crop",
      icon: <Shield size={24} />,
      linkHref: "#",
    },
    {
      id: "kensho",
      title: "Kensho",
      description: "Autonomous network intelligence platform monitoring telemetry streams for real-time anomaly and threat detection.",
      imgSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
      icon: <Terminal size={24} />,
      linkHref: "#",
    },
    {
      id: "neurometric",
      title: "NeuroMetric",
      description: "Multimodal AI extracting behavioral biomarkers from psychiatric consultations using video, audio, and language analysis.",
      imgSrc: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000&auto=format&fit=crop",
      icon: <Cpu size={24} />,
      linkHref: "#",
    },
    {
      id: "netsentry",
      title: "NetSentry",
      description: "Experimental infrastructure for ingesting and analyzing network telemetry and security logs within a WSL environment.",
      imgSrc: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2000&auto=format&fit=crop",
      icon: <ShieldAlert size={24} />,
      linkHref: "#",
    },
    {
      id: "healthcompass",
      title: "Health Compass",
      description: "AI-driven predictive health dashboard tracking nutrition via CV and maintaining emergency health diagnostics.",
      imgSrc: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2000&auto=format&fit=crop",
      icon: <Heart size={24} />,
      linkHref: "#",
    },
    {
      id: "fintera",
      title: "Fintera",
      description: "Financial modeling dashboards focused on interactive calculators for SIP, EMI, and tax algorithms.",
      imgSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop",
      icon: <Code size={24} />,
      linkHref: "#",
    }
  ];

  const skills = [
    { category: "Cybersecurity", items: "Digital Forensics, OSINT, Network Security (Nmap, Wireshark, Gobuster), Steganography, Encryption" },
    { category: "AI & Machine Learning", items: "Multi-Modal Fusion Models, Computer Vision (YOLOv8), LLM Integration, Pattern Recognition" },
    { category: "Languages & Frameworks", items: "Python, JavaScript, Node.js, FastAPI, Flask, SQL, HTML/CSS" },
    { category: "Developer Tools", items: "Linux (Kali/Ubuntu), Git, Docker, Bash Scripting, Chrome Extension Dev" }
  ];



  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-200">
      <LivingNebulaShader />

      {/* Primary Hero: Integrated "Hi I'm Calvin" with Mosaic */}
      <CTASection />

      {/* Experience & Education Section */}
      <section className="py-24 relative border-t border-zinc-900" id="experience">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-orange-500" />
                <h2 className="text-3xl font-bold font-heading">
                  <GlitchText text="Experience" />
                </h2>
              </div>
              <div className="relative pl-8 border-l border-zinc-800 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[41px] bg-black p-1 rounded-full border border-zinc-800">
                    <div className="w-3 h-3 bg-orange-500 rounded-full blur-[2px]" />
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
                <GraduationCap className="w-6 h-6 text-orange-500" />
                <h2 className="text-3xl font-bold font-heading">Education</h2>
              </div>
              <div className="relative pl-8 border-l border-zinc-800 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[41px] bg-black p-1 rounded-full border border-zinc-800">
                    <div className="w-3 h-3 bg-orange-600 rounded-full blur-[2px]" />
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
                  <li className="flex gap-2"><span className="text-orange-500">▹</span> 7th Place @ Code Intrusion CTF</li>
                  <li className="flex gap-2"><span className="text-orange-500">▹</span> 14th Place @ Enyugma CTF (200+ teams)</li>
                  <li className="flex gap-2"><span className="text-orange-500">▹</span> Runners-Up @ Acethon</li>
                  <li className="flex gap-2"><span className="text-orange-500">▹</span> Special Commendation @ Innovex Hackathon</li>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-white">
              <GlitchText text="Technical Arsenal" />
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Mastering the intersection of deep-dive security and artificial intelligence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-[#050505] border border-zinc-800 rounded-xl p-6 hover:border-orange-500/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-orange-500 group-hover:bg-orange-500/10 transition-colors">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{skill.category}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calvin Posts 3D Segment */}
      <section className="relative z-10 w-full bg-black">
        <CalvinPosts3D />
      </section>

      {/* Projects Built Section */}
      <section className="py-24 relative overflow-hidden border-t border-zinc-900" id="projects">
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-white">
              <GlitchText text="Projects" /> <span className="text-orange-500">Built</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto backdrop-blur-sm">Showcasing high-impact full-stack and AI-driven platforms I&apos;ve developed.</p>
          </div>

          <div className="flex w-full items-center justify-center">
            <ExpandingCards items={builtProjects} defaultActiveIndex={0} />
          </div>

          {/* GitHub Live Terminal */}
          <div className="mt-24">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold font-heading text-white mb-2">Live <span className="text-green-500">Telemetry</span></h3>
              <p className="text-zinc-500 text-sm">Real-time repository commits and events via GitHub API.</p>
            </div>
            <GithubTerminal username="Cal2-0" />
          </div>
        </div>
      </section>

      {/* Research & Experimental Work Section */}
      <section className="py-24 relative overflow-hidden border-t border-zinc-900 bg-zinc-950/20" id="research">
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-white">Research & <span className="text-orange-500">Experimental Work</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto backdrop-blur-sm">Exploring cutting-edge intersections of cybersecurity, multimodal AI, and behavioral analysis.</p>
          </div>

          <div className="flex w-full items-center justify-center">
            <ExpandingCards items={researchProjects} defaultActiveIndex={1} />
          </div>
        </div>
      </section>

      {/* 3D Scrollable Feature Component */}
      <section className="bg-black relative overflow-hidden hidden md:block" id="highlight">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white">
                Deepfake forensics powered by <br />
                <span className="text-4xl md:text-[6rem] text-cyan-400 font-bold mt-1 leading-none">
                  Lucent AI Platform
                </span>
              </h1>
            </>
          }
        >
          <PPTXSlideshow
            slides={[
              "/images/fluent/Slide1.JPG",
              "/images/fluent/Slide2.JPG",
              "/images/fluent/Slide3.JPG",
              "/images/fluent/Slide4.JPG",
              "/images/fluent/Slide5.JPG",
              "/images/fluent/Slide6.JPG",
              "/images/fluent/Slide7.JPG",
              "/images/fluent/Slide8.JPG"
            ]}
            interval={4000}
            className="w-full h-full"
          />
        </ContainerScroll>
      </section>

      {/* Memoirs Infinite Scroll Photo Wall */}
      <section className="py-24 bg-black border-t border-zinc-900 border-t-indigo-500/20 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-white">Moments & <span className="text-orange-500">Memoirs</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">A visual journey through building, hacking, and creating.</p>
        </div>
        <MemoirInfiniteScroll />
      </section>

      <section className="relative z-10 bg-black pt-12 border-t border-zinc-900 border-t-indigo-500/20">
        <MultiOrbitSemiCircle />
      </section>

      {/* Contact Section */}
      <section className="py-24 relative bg-black border-t border-zinc-900" id="contact">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-white">
              <GlitchText text="Let's" /> <span className="text-orange-500">Connect</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Looking to collaborate or need a full-stack AI developer? Reach out today.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 w-full">
            <GradientButton variant="variant" className="gap-2 shrink-0" asChild>
              <a href="mailto:nm24cb015@gmail.com"><Mail className="w-5 h-5" /> Email</a>
            </GradientButton>
            <GradientButton className="gap-2 shrink-0" asChild>
              <a href="https://linkedin.com/in/calvin-dsouza" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /> LinkedIn</a>
            </GradientButton>
            <GradientButton variant="variant" className="gap-2 shrink-0" asChild>
              <a href="https://github.com/Cal2-0" target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5" /> GitHub</a>
            </GradientButton>
            <GradientButton className="gap-2 shrink-0" asChild>
              <a href="https://www.instagram.com/_______.cal/" target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5" /> Instagram</a>
            </GradientButton>
            <GradientButton variant="variant" className="gap-2 shrink-0" asChild>
              <a href="https://drive.google.com/drive/folders/1gNPyJx2IGMiuiAnxAsXEFTsWFY19vUZs?usp=sharing" target="_blank" rel="noopener noreferrer"><HardDrive className="w-5 h-5" /> Drive</a>
            </GradientButton>
            <GradientButton className="gap-2 shrink-0" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer"><FileText className="w-5 h-5" /> Resume</a>
            </GradientButton>
          </div>

          <div className="flex lg:flex-row flex-col items-center justify-center mt-12 gap-4 text-zinc-500 font-mono text-sm tracking-widest">
            <span>+971-505253861</span>
            <span className="hidden lg:inline text-orange-500">|</span>
            <span>+91-8971192706</span>
          </div>
        </div>
      </section>

      <footer className="pt-8 pb-16 border-t border-zinc-900 flex flex-col items-center justify-center text-zinc-600 text-xs bg-black relative z-10">
        <p className="mb-6">&copy; {new Date().getFullYear()} MNC-Grade Systems & Security. All rights reserved.</p>
        
        <SpotifyWidget />
      </footer>
    </main >
  );
}

const CheckBadge = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);
