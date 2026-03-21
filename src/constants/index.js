import {
  astroPixel,
  backend,
  creator,
  mobile,
  web,
  malariadetectionsystem,
  novalearn,
  ponggame,
  portfolio,
  code,
  concepts,
  designs,
  ideas,
} from "../assets";

export const navLinks = [
  { id: "about",        title: "About"    },
  { id: "projects",     title: "Projects" },
  { id: "achievements", title: "Achieve"  },
  { id: "skills",       title: "Skills"   },
  { id: "contact",      title: "Contact"  },
];

const services = [
  { title: "Frontend Engineering", icon: web     },
  { title: "Cybersecurity",        icon: mobile  },
  { title: "AI / ML Systems",      icon: backend },
  { title: "DevOps & Cloud",       icon: creator },
];

const achievements = [
  {
    title: ["CTF — Code Intrusion"],
    company_name: "Code Intrusion",
    icon: backend,
    iconBg: "#1a1a2e",
    date: "2025",
    points: ["7th Place out of 200+ participants", "Specialised in digital forensics & web exploits"],
    credential: [],
  },
  {
    title: ["CTF — Enyugma"],
    company_name: "Enyugma",
    icon: mobile,
    iconBg: "#0d0d1a",
    date: "2025",
    points: ["14th Place out of 200+ participants", "Reverse engineering & OSINT categories"],
    credential: [],
  },
  {
    title: ["CTF — CYSECK NITK"],
    company_name: "CYSECK NITK",
    icon: creator,
    iconBg: "#1a1a2e",
    date: "2025",
    points: ["14th Place out of 60+ participants", "Network security & cryptography categories"],
    credential: [],
  },
  {
    title: ["🥈 ACEathon Hackathon"],
    company_name: "ACEathon",
    icon: web,
    iconBg: "#0d0d1a",
    date: "2025",
    points: ["2nd Place — OuchMyBrain.io", "AI-powered study companion with spaced repetition"],
    credential: [],
  },
  {
    title: ["Protothon 2025"],
    company_name: "Protothon",
    icon: backend,
    iconBg: "#1a1a2e",
    date: "2025",
    points: ["VaidikaAI v3 — built end-to-end in 48 hours", "National-level hackathon, multi-LLM hospital AI"],
    credential: [],
  },
  {
    title: ["Special Commendation — Innovex"],
    company_name: "Innovex Hackathon",
    icon: mobile,
    iconBg: "#0d0d1a",
    date: "2025",
    points: ["Commended by judges for strategic thinking and execution"],
    credential: [],
  },

  {
    title: ["IISc Cybersecurity Workshop"],
    company_name: "IISc Bangalore",
    icon: backend,
    iconBg: "#1a1a2e",
    date: "2025",
    points: [
      "Intensive 2-day advanced security training",
      "Covered threat vectors, forensics frameworks, offensive security",
    ],
    credential: [],
  },
];

const testimonials = [
  {
    testimonial: "Calvin's security instincts and frontend polish are rare — he built a system that is both unbreakable and beautiful.",
    name: "Prof. Mentor",
    designation: "Faculty Advisor",
    company: "NMAMIT",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    testimonial: "VaidikaAI was the best-architected project at Protothon. Calvin led the full-stack AI pipeline flawlessly.",
    name: "Hackathon Judge",
    designation: "Tech Lead",
    company: "Protothon 2025",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    testimonial: "The kind of engineer who can exploit a system in the morning and ship a beautiful UI by the evening.",
    name: "Team Member",
    designation: "Co-developer",
    company: "VisionEX Project",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

// ── Placeholder images reused from existing assets until Calvin replaces them ──
const projects = [
  {
    name: "VaidikaAI v3",
    description:
      "Multilingual AI hospital workflow system with real-time bilingual voice (Hindi ↔ English). Multi-LLM pipeline (Gemini, Llama 3.2, Claude 3.5), QR patient tracking, and Twilio triage alerts. Built end-to-end in 48h at Protothon 2025.",
    tags: [
      { name: "FastAPI",  color: "blue-text-gradient"   },
      { name: "Next.js",  color: "green-text-gradient"  },
      { name: "Ollama",   color: "pink-text-gradient"   },
      { name: "Docker",   color: "violet-text-gradient" },
    ],
    image: astroPixel,
    images: [astroPixel],
    source_code_link: "https://github.com/Cal2-0",
    live_demo_link: null,
    metrics: { stars: 0, forks: 0, views: "Protothon 2025" },
    features: [
      "Real-time bilingual voice interface (Hindi ↔ English)",
      "Multi-LLM intelligence pipeline — Gemini, Llama 3.2, Claude 3.5",
      "QR-based patient tracking and clinical PDF generation",
      "Twilio emergency SMS alerts for triage automation",
      "Docker deployment with Airflow DAG parallel processing",
      "PySpark + Delta Lake analytics layer",
    ],
  },
  {
    name: "OuchMyBrain.io",
    description:
      "AI-powered learning platform that transforms study materials (PDFs, notes, images) into summaries, flashcards, quizzes, and adaptive audio lessons using spaced repetition. Won 🥈 2nd Place at ACEathon 2025.",
    tags: [
      { name: "Flask",       color: "blue-text-gradient"   },
      { name: "OpenAI/OR",   color: "green-text-gradient"  },
      { name: "ElevenLabs",  color: "pink-text-gradient"   },
      { name: "TailwindCSS", color: "violet-text-gradient" },
    ],
    image: novalearn,
    images: [novalearn],
    source_code_link: "https://github.com/Cal2-0",
    live_demo_link: null,
    metrics: { stars: 0, forks: 0, views: "🥈 ACEathon 2025" },
    features: [
      "PDF, image, and scanned-notes OCR ingestion pipeline",
      "AI summarisation with layered concept extraction",
      "Flashcard generator with spaced repetition scheduling",
      "Professor Mode — adaptive audio lessons and contextual Q&A",
      "Interactive quizzes and AI-assisted note generation",
    ],
  },
  {
    name: "MassEd.ex",
    description:
      "Computer-vision crowd monitoring platform tracking 50+ concurrent objects at 30 FPS with YOLOv8 + DeepSORT. Automated danger-zone detection and crowd behavioural analytics for public safety.",
    tags: [
      { name: "YOLOv8",  color: "blue-text-gradient"   },
      { name: "OpenCV",  color: "green-text-gradient"  },
      { name: "DeepSORT",color: "pink-text-gradient"   },
      { name: "Python",  color: "violet-text-gradient" },
    ],
    image: malariadetectionsystem,
    images: [malariadetectionsystem],
    source_code_link: "https://github.com/Cal2-0",
    live_demo_link: null,
    metrics: { stars: 0, forks: 0, views: "50+ obj @ 30FPS" },
    features: [
      "Real-time YOLOv8 object detection and DeepSORT tracking",
      "Density heatmap and crowd movement analytics",
      "Danger-zone detection with ROI monitoring",
      "4 behavioural anomaly patterns identified in test footage",
      "Visualisation dashboard for crowd statistics and alerts",
    ],
  },
  {
    name: "NetRecon",
    description:
      "Raw-socket LAN reconnaissance tool that maps a full /24 subnet (254 hosts) in under 12 seconds using custom ARP & ICMP traffic analysis. Achieved 100% rogue-device detection in simulated intrusion tests.",
    tags: [
      { name: "C",           color: "blue-text-gradient"   },
      { name: "Unix Sockets",color: "green-text-gradient"  },
      { name: "ARP/ICMP",    color: "pink-text-gradient"   },
      { name: "Bash",        color: "violet-text-gradient" },
    ],
    image: ponggame,
    images: [ponggame],
    source_code_link: "https://github.com/Cal2-0",
    live_demo_link: null,
    metrics: { stars: 0, forks: 0, views: "254 hosts / 12s" },
    features: [
      "Custom ARP and ICMP packet construction from raw sockets",
      "Full /24 subnet scan completed in under 12 seconds",
      "100% rogue-device detection accuracy in test environments",
      "Topology visualisation of discovered hosts",
    ],
  },
  {
    name: "CalHive",
    description:
      "AI-driven productivity platform combining calendar scheduling, goal tracking, and intelligent task organisation. NLP-based task classification using SpaCy embeddings with AI prioritisation engine.",
    tags: [
      { name: "React/Vite",  color: "blue-text-gradient"   },
      { name: "FastAPI",     color: "green-text-gradient"  },
      { name: "SpaCy",       color: "pink-text-gradient"   },
      { name: "TypeScript",  color: "violet-text-gradient" },
    ],
    image: portfolio,
    images: [portfolio],
    source_code_link: "https://github.com/Cal2-0",
    live_demo_link: null,
    metrics: { stars: 0, forks: 0, views: "AI task planner" },
    features: [
      "SPA frontend with calendar, roadmap, and task interfaces",
      "NLP task classification with SpaCy sentence-transformer embeddings",
      "REST APIs for jots, goals, and scheduling operations",
      "AI prioritisation engine for intelligent task ordering",
      "APScheduler for automated deadline reminders",
    ],
  },
  {
    name: "Lucent.ai",
    description:
      "Multi-layer deepfake forensic detection system using visual models, FFT analysis, and reverse-diffusion checks. Generates legal-grade audit reports with a meta-classifier combining all detection signals.",
    tags: [
      { name: "PyTorch",   color: "blue-text-gradient"   },
      { name: "FastAPI",   color: "green-text-gradient"  },
      { name: "Docker",    color: "pink-text-gradient"   },
      { name: "OpenCV",    color: "violet-text-gradient" },
    ],
    image: astroPixel,
    images: [astroPixel],
    source_code_link: "https://github.com/Cal2-0",
    live_demo_link: null,
    metrics: { stars: 0, forks: 0, views: "Forensics AI" },
    features: [
      "Visual detection models + FFT frequency analysis",
      "Reverse-diffusion consistency checks",
      "Meta-classifier combining multiple detection pipelines",
      "Forensic audit reports for legal and enterprise use",
      "Redis-backed microservice architecture with Docker",
    ],
  },
];

const words = [
  { text: "Ideas",    imgPath: ideas,    font: "Arial, sans-serif"              },
  { text: "Concepts", imgPath: concepts, font: "'Courier New', Courier, monospace" },
  { text: "Designs",  imgPath: designs,  font: "'Times New Roman', Times, serif"  },
  { text: "Code",     imgPath: code,     font: "'Fira Mono', monospace"           },
  { text: "Ideas",    imgPath: ideas,    font: "'Comic Sans MS', cursive, sans-serif" },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif"              },
  { text: "Designs",  imgPath: designs,  font: "'Georgia', serif"                  },
  { text: "Code",     imgPath: code,     font: "'Source Code Pro', monospace"      },
];

export { achievements, projects, services, testimonials, words };
