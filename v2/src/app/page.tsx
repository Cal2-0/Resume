"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  ArrowDown,
  Terminal,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const MEMOIR_IMAGES = [
  "/images/pics/1000004107-01.jpeg",
  "/images/pics/1000055256-01.jpeg",
  "/images/pics/23323.jpeg",
  "/images/pics/IMG_20240823_160940.jpg",
  "/images/pics/IMG_20240823_161605.jpg",
  "/images/pics/IMG_20240823_162852.jpg",
  "/images/pics/IMG_20240923_142951.jpg",
  "/images/pics/IMG_20250228_201719.jpg",
  "/images/pics/IMG_20250301_193951.jpg",
  "/images/pics/IMG_20250301_194225.jpg",
  "/images/pics/IMG_20250301_194747.jpg",
  "/images/pics/IMG_20250326_182130.jpg",
  "/images/pics/IMG_20250830_115313.jpg",
];

const TOC_ITEMS = [
  { num: "01", title: "About Me", id: "about" },
  { num: "02", title: "Experience", id: "experience" },
  { num: "03", title: "Projects", id: "projects" },
  { num: "04", title: "Awards", id: "awards" },
  { num: "05", title: "Skills", id: "skills" },
  { num: "06", title: "Gallery", id: "gallery" },
  { num: "07", title: "Contact", id: "contact" },
];

const SKILLS = [
  {
    category: "Cybersecurity",
    items: ["Digital Forensics", "OSINT", "Network Security", "Cryptography", "Nmap", "Wireshark"],
  },
  {
    category: "AI & ML",
    items: ["PyTorch", "YOLOv8", "Computer Vision", "LLM Integration", "OpenCV"],
  },
  {
    category: "Languages",
    items: ["Python", "C", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    category: "Tools",
    items: ["Linux (Kali/Ubuntu)", "Git", "Docker", "Chrome Ext Dev"],
  },
];

const FEATURED_PROJECTS = [
  {
    title: "VaidikaAI v3",
    subtitle: "Protothon Hackathon 2025",
    tech: ["FastAPI", "Next.js", "Ollama", "Claude 3.5"],
    description: [
      "Architected a multilingual AI hospital workflow system with real-time bilingual voice (Hindi ↔ English), supporting patient registration, doctor consultations, lab, and pharmacy workflows.",
      "Implemented multi-LLM intelligence pipeline, QR-based patient tracking, clinical PDF generation, and Twilio emergency SMS alerts for triage automation.",
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
    achievement: "🏆 Cover Story",
  },
  {
    title: "OuchMyBrain.io",
    subtitle: "2nd Place ACEathon",
    tech: ["Python", "Flask", "OpenAI", "ElevenLabs"],
    description: [
      "AI-powered learning platform that transforms study materials into structured summaries, flashcards, quizzes, and adaptive audio lessons.",
      "Built document ingestion pipeline supporting PDFs, images, and scanned notes with OCR processing.",
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    achievement: "🥈 2nd Place",
  },
  {
    title: "NetRecon",
    subtitle: "LAN & Topology Scanner",
    tech: ["C", "Unix Sockets", "Bash"],
    description: [
      "Built a raw-socket reconnaissance tool that autonomously maps a /24 subnet (254 hosts) in under 12 seconds using custom ARP and ICMP traffic analysis.",
      "Achieved 100% rogue-device detection accuracy during simulated local network intrusion tests.",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
    achievement: "⭐ 100% Accuracy",
  },
];

const AWARDS = [
  { place: "7TH / 200+", event: "Code Intrusion CTF", type: "🏆" },
  { place: "14TH / 200+", event: "Enyugma CTF", type: "🏅" },
  { place: "14TH / 60+", event: "CYSECK NITK CTF", type: "⭐" },
  { place: "2ND PLACE", event: "ACEathon Hackathon", type: "🥈" },
];

const EXPERIENCES = [
  {
    role: "AI Security Intern",
    organization: "Cyber Innovations Lab",
    period: "Jun 2025 - Present",
    description: "Building AI-powered threat detection systems and securing LLM pipelines against prompt injection attacks.",
    highlight: "🔐",
  },
  {
    role: "Junior Developer",
    organization: "TechStart Solutions",
    period: "Jan 2025 - May 2025",
    description: "Full-stack development using Next.js and Python. Built customer-facing dashboards and API integrations.",
    highlight: "💻",
  },
  {
    role: "PROTON Core Team",
    organization: "College Tech Club",
    period: "Aug 2023 - Present",
    description: "Leading cybersecurity workshops, organizing CTF competitions, and mentoring juniors in ethical hacking.",
    highlight: "🎯",
  },
  {
    role: "Class Representative",
    organization: "CR Council",
    period: "Jun 2023 - Present",
    description: "Bridging students and faculty, organizing events, and representing the class in academic committees.",
    highlight: "🎤",
  },
];

/* ═══════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════ */

const PolaroidVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, type: "spring", stiffness: 100, damping: 15 },
  }),
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Parallax effects
    const photos = document.querySelectorAll(".parallax-photo");
    photos.forEach((photo) => {
      const speed = photo.getAttribute("data-speed") || "1";
      gsap.to(photo, {
        y: () => -100 * parseFloat(speed),
        ease: "none",
        scrollTrigger: {
          trigger: photo,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Reveal text
    gsap.utils.toArray<HTMLElement>(".reveal-text").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="bg-[var(--cream)] min-h-screen font-patrick text-[var(--ink)] overflow-x-hidden">
      
      {/* ─────────────────────────────────────────────────────────
          1. HERO / COVER PAGE
          ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-4 md:px-8 overflow-hidden">
        {/* Torn edge bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[var(--beige)] torn-edge z-10 translate-y-8" />
        
        <div className="max-w-6xl w-full mx-auto relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left reveal-text">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <h1 className="font-marker text-7xl md:text-8xl lg:text-[140px] leading-[0.8] mb-6 transform -rotate-2">
                THE<br/>CALVIN<br/>CHRONICLES
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4"
            >
              <span className="font-caveat text-3xl md:text-4xl text-[var(--red-marker)] handwritten-underline transform rotate-2 inline-block">
                Issue 01 — Spring 2026 ✨
              </span>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-16 sticker px-8 py-3 text-xl bg-[var(--yellow-highlight)] border-4 shadow-[5px_5px_0_rgba(0,0,0,0.8)] flex items-center gap-2"
              onClick={() => {
                document.getElementById('toc')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Open Magazine <ArrowDown size={24} />
            </motion.button>
          </div>

          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, x: 100, rotate: 20 }}
              animate={{ opacity: 1, x: 0, rotate: 8 }}
              transition={{ type: "spring", damping: 15, delay: 0.4 }}
              className="polaroid max-w-[400px] mx-auto z-10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              <div className="tape"></div>
              <img src="/images/pics/23323.jpeg" alt="Calvin" className="aspect-[3/4] object-cover" />
              <div className="polaroid-caption">Me acting like I code 👨‍💻</div>
            </motion.div>
            
            {/* Doodles & Decor */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 text-6xl text-[var(--blue-accent)] opacity-40 select-none z-0"
            >
              ✺
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. TABLE OF CONTENTS
          ───────────────────────────────────────────────────────── */}
      <section id="toc" className="py-32 bg-[var(--beige)] relative z-0">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-marker text-5xl md:text-7xl text-center mb-20 reveal-text transform -rotate-1">
            WHAT'S INSIDE 📌
          </h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {TOC_ITEMS.map((item, i) => (
              <motion.a
                href={`#${item.id}`}
                key={item.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={PolaroidVariants}
                whileHover={{ y: -15, rotate: 0, scale: 1.05 }}
                className="bg-white p-6 pb-12 shadow-lg w-[200px] md:w-[240px] flex flex-col items-center justify-between border border-[#e0dcd3] relative"
                style={{ rotate: `${Math.random() * 10 - 5}deg` }}
              >
                {/* Pin */}
                <div className="absolute top-3 w-4 h-4 rounded-full bg-[var(--red-marker)] shadow-md shadow-[var(--red-marker)]/50 z-10" />
                <span className="font-special text-5xl text-[var(--ink)] opacity-30 mt-6">{item.num}</span>
                <span className="font-courier font-bold text-xl uppercase mt-4 text-center">{item.title}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. ABOUT ME SPREAD
          ───────────────────────────────────────────────────────── */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Page: Collage */}
          <div className="relative h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ rotate: -15, opacity: 0 }}
              whileInView={{ rotate: -8, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute left-0 top-10 polaroid w-[280px] z-10"
            >
              <div className="tape"></div>
              <img src="/images/pics/IMG_20250326_182130.jpg" alt="" className="aspect-square object-cover" />
            </motion.div>

            <motion.div
              initial={{ rotate: 10, opacity: 0 }}
              whileInView={{ rotate: 5, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute right-0 bottom-10 polaroid w-[320px] z-20"
            >
               <div className="washi-tape-edge inline-block">
                <img src="/images/pics/IMG_20240823_161605.jpg" alt="" className="aspect-[4/3] object-cover" />
              </div>
              <div className="polaroid-caption">Building stuff</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 polaroid w-[350px] z-30 shadow-2xl"
              style={{ rotate: "-2deg" }}
            >
              <div className="tape" style={{ rotate: "2deg" }}></div>
              <img src="/images/pics/IMG_20251122_001007.jpg" alt="" className="aspect-[3/4] object-cover" />
            </motion.div>
          </div>

          {/* Right Page: Story */}
          <div className="reveal-text relative">
            <h2 className="font-marker text-6xl mb-8 transform rotate-1">
              THE DEVELOPER
            </h2>
            <div className="font-patrick text-xl leading-relaxed space-y-6">
              <p className="drop-cap">
                Cybersecurity dev passionate about building secure systems and AI tools. 
                I don't just write code; I <span className="highlight">build experiences</span> that matter. Every vulnerability is a puzzle, 
                every model a hypothesis, and every deployment a statement.
              </p>
              <p>
                From building raw-socket network scanners in C to orchestrating multi-LLM 
                hospital workflows, I approach every problem with the same energy: understand 
                deeply, build aggressively, ship fearlessly.
              </p>
            </div>

            {/* Leadership Sticky Notes */}
            <div className="flex gap-6 mt-16 flex-wrap">
              {[
                { r: "-4deg", t: "JR", d: "Junior Rep" },
                { r: "3deg", t: "CR", d: "Class Rep" },
                { r: "-2deg", t: "PT", d: "PROTON Core" },
              ].map((note, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  className="sticky-note w-[160px] cursor-pointer"
                  style={{ rotate: note.r }}
                >
                  <div className="font-marker text-3xl text-[var(--red-marker)] mb-2">{note.t}</div>
                  <div className="font-courier text-sm leading-tight font-bold">{note.d}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Doodle */}
            <div className="absolute top-0 right-0 font-caveat text-3xl text-[var(--blue-accent)] transform rotate-12 opacity-60">
              Wait, I wrote this? 😅
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. PROJECTS (2-Page Spreads)
          ───────────────────────────────────────────────────────── */}
      <section id="projects" className="py-20 bg-[var(--beige)] relative z-0">
        {/* Torn edge top */}
        <div className="absolute top-0 left-0 w-full h-16 bg-[var(--cream)] torn-edge z-10 -translate-y-8" style={{ transform: "rotate(180deg)" }} />
        
        <h2 className="font-marker text-6xl text-center mb-20 pt-10 reveal-text">
          LATEST WORK 🛠️
        </h2>

        {FEATURED_PROJECTS.map((project, idx) => (
          <div key={idx} className="max-w-7xl mx-auto px-4 mb-32 last:mb-10">
            <div className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}>
              
              {/* Left Side: Images & Stack */}
              <div className="flex-1 w-full relative">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-marker text-5xl md:text-6xl mb-6 transform -rotate-2">
                    {project.title} <span className="text-[var(--red-marker)] font-special text-2xl rotate-12 inline-block">✨</span>
                  </h3>
                  
                  <div className="polaroid shadow-2xl z-10 relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="tape"></div>
                    <img src={project.image} alt={project.title} className="aspect-[16/10] object-cover" />
                    <div className="polaroid-caption">{project.subtitle}</div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
                    {project.tech.map((t, i) => (
                      <span key={i} className="sticker text-[var(--ink)] border-2 border-[var(--ink)]" style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Side: Description */}
              <div className="flex-1 w-full space-y-6 text-xl">
                <div className="font-marker text-3xl mb-4 text-[var(--blue-accent)] transform rotate-1">"THE CHALLENGE"</div>
                
                {project.description.map((desc, i) => (
                  <p key={i} className="leading-relaxed reveal-text">
                    {desc.split(' ').map((word, wIdx) => {
                      // Randomly highlight some important looking words
                      if (word.length > 8 && Math.random() > 0.5) {
                        return <span key={wIdx} className="highlight">{word} </span>;
                      }
                      return word + " ";
                    })}
                  </p>
                ))}

                <div className="mt-10 reveal-text">
                  <span className="font-marker text-2xl bg-[var(--ink)] text-[var(--cream)] px-4 py-2 transform -rotate-3 inline-block shadow-lg">
                    {project.achievement}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Divider between projects */}
            {idx < FEATURED_PROJECTS.length - 1 && (
               <div className="w-full h-8 mt-24 flex items-center justify-center opacity-30">
                 <div className="w-full max-w-md border-b-4 border-dashed border-[var(--ink)]"></div>
               </div>
            )}
          </div>
        ))}
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. AWARDS & HONORS
          ───────────────────────────────────────────────────────── */}
      <section id="awards" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-marker text-6xl text-center mb-20 reveal-text">
            TROPHY CASE 🏆
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AWARDS.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[var(--beige)] border-4 border-[#d4af37] p-6 text-center shadow-xl relative"
                style={{ rotate: `${Math.random() * 8 - 4}deg` }}
              >
                {/* Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black shadow-md z-10" />
                
                <div className="text-5xl mb-4">{award.type}</div>
                <div className="font-courier font-bold text-xl uppercase mb-6 h-12 flex items-center justify-center">{award.event}</div>
                <div className="font-marker text-3xl text-[var(--red-marker)] handwritten-underline pb-2">{award.place}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. PHOTO GALLERY (CORKBOARD)
          ───────────────────────────────────────────────────────── */}
      <section id="gallery" className="py-32 bg-[#e0dcd3] relative border-y-[10px] border-dashed border-[var(--ink)]">
        <h2 className="font-marker text-6xl text-center mb-16 reveal-text">
          THE MEMOIRS 📸
        </h2>
        
        <div className="max-w-[1400px] mx-auto overflow-hidden px-4">
           <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              {MEMOIR_IMAGES.map((src, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, zIndex: 100, rotate: 0 }}
                  className="polaroid break-inside-avoid relative inline-block w-full cursor-pointer"
                  style={{ rotate: `${Math.random() * 12 - 6}deg` }}
                >
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-600 shadow z-10 border border-red-800" />
                  <img src={src} alt="" className="w-full h-auto object-cover" loading="lazy" />
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          7. CONTACT / BACK COVER
          ───────────────────────────────────────────────────────── */}
      <section id="contact" className="py-32 relative bg-[var(--cream)] min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center z-10 w-full relative">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-marker text-[80px] md:text-[120px] leading-[0.8] mb-6 transform -rotate-3 text-[var(--charcoal)]">
              SUBSCRIBE
            </h2>
            <h3 className="font-marker text-4xl md:text-6xl text-[var(--red-marker)] transform rotate-2">
              TO THE CHRONICLE! 📰
            </h3>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-20">
            {/* Contact Sticky Note */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="sticky-note w-[300px] text-left transform -rotate-3"
            >
              <div className="font-courier font-bold text-2xl mb-4 border-b-2 border-dashed border-[var(--ink)] pb-2 flex items-center gap-2">
                <Mail size={24} /> Email Me
              </div>
              <a href="mailto:hello@calvin.dev" className="font-patrick text-3xl text-[var(--blue-accent)] handwritten-underline hover:text-[var(--red-marker)] transition-colors">
                hello@calvin.dev
              </a>
            </motion.div>

            {/* Social Stickers */}
            <div className="flex gap-4">
              {[
                { icon: <Github size={32}/>, link: "https://github.com/Cal2-0", rot: "rotate(-10deg)" },
                { icon: <Linkedin size={32}/>, link: "https://linkedin.com/in/calvin-dsouza", rot: "rotate(5deg)" },
                { icon: <Instagram size={32}/>, link: "https://www.instagram.com/_______.cal/", rot: "rotate(-5deg)" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  whileHover={{ scale: 1.2, rotate: 0 }}
                  className="w-20 h-20 rounded-full bg-white border-4 border-[var(--ink)] flex items-center justify-center shadow-[4px_4px_0_rgba(0,0,0,1)] text-[var(--ink)] transition-transform"
                  style={{ transform: social.rot }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <p className="font-caveat text-4xl mt-32 text-[var(--muted)] transform -rotate-2">
            "Every great project starts with a conversation." ✨
          </p>
        </div>

        {/* Squiggles bottom */}
        <div className="absolute bottom-4 left-4 font-special opacity-30 text-2xl">
          End of Issue 01.
        </div>
      </section>

    </div>
  );
}
