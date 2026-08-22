# CALVINKLEIN.COM — COMPLETE CREATIVE DIRECTION RULEBOOK

> **What this is:** The single source of truth for the entire website overhaul. Every creative decision, every technical specification, every prompt, every asset brief, every interaction — documented here so that Claude Code + Higgsfield can execute scene-by-scene without re-inventing the world each time.

---

## TABLE OF CONTENTS

1. [Current State Audit](#01--current-state-audit)
2. [Calvin Dsouza — The Complete Profile](#02--calvin-dsouza--the-complete-profile)
3. [The Reference Image — Decomposed](#03--the-reference-image--decomposed)
4. [The Design Bible — Distilled](#04--the-design-bible--distilled)
5. [Five Creative Directions](#05--five-creative-directions)
6. [The Chosen Direction: THE BUREAU](#06--the-chosen-direction-the-bureau)
7. [Design System Specification](#07--design-system-specification)
8. [Site Architecture & Scenes](#08--site-architecture--scenes)
9. [Project World Specifications](#09--project-world-specifications)
10. [The Field Notes / Magazine System](#10--the-field-notes--magazine-system)
11. [Signature Interactions](#11--signature-interactions)
12. [Higgsfield Production Plan](#12--higgsfield-production-plan)
13. [Claude Code Prompt Library](#13--claude-code-prompt-library)
14. [Technical Architecture](#14--technical-architecture)
15. [Performance & Accessibility](#15--performance--accessibility)
16. [Milestone Execution Plan](#16--milestone-execution-plan)

---

## 01 — CURRENT STATE AUDIT

### What exists now

| Component | File | Status |
|---|---|---|
| **Stack** | Vite + React 19 + GSAP + Framer Motion + Lenis | ✅ Good foundation |
| **Hero** | `Hero.jsx` — "THE CALVIN CHRONICLES" with character-split animation | ⚠️ Scrapbook/magazine aesthetic, polaroid photo |
| **Table of Contents** | `TableOfContents.jsx` — pinned cards with rotation | ⚠️ Cute but not editorial |
| **About** | `AboutSpread.jsx` — 2-page spread with polaroids, sticky notes, stats | ⚠️ Scrapbook feel, fabricated stats ("150+ projects", "8 years experience", "50+ clients") |
| **Projects** | `ProjectsSection.jsx` + `ProjectSpread.jsx` — Only VisionEX shown | 🔴 Only 1 of 12+ projects |
| **Gallery** | `Gallery.jsx` — 12 polaroids with placeholder names | 🔴 All placeholder, wrong project names |
| **Skills** | `Skills.jsx` — 4-category grid with rotation | ⚠️ Generic skills grid |
| **Awards** | `Awards.jsx` — certificate cards with pins | ⚠️ Functional but templated |
| **Contact** | `Contact.jsx` — "SUBSCRIBE TO THE CHRONICLE" | ⚠️ Wrong email, template feel |
| **Shared** | Polaroid, Sticker, StickyNote components | 🔴 Scrapbook metaphor — needs complete rethink |

### Current design language

The existing site uses a **handmade scrapbook / zine** aesthetic:
- `Permanent Marker` display font
- `Caveat` + `Patrick Hand` handwritten fonts
- Warm cream (`#FFF8E7`) background
- Polaroid photo components
- Sticky notes
- Tape effects
- Dashed borders
- Emoji badges
- Highlighter text effects

### Verdict

| Keep | Transform | Remove | Invent |
|---|---|---|---|
| Vite + React 19 stack | GSAP animations → editorial choreography | Polaroid component | Editorial portrait system |
| Lenis smooth scroll | Section structure → scene system | Sticky notes | Project world system |
| GSAP + Framer Motion | Character-split title animation → refined | Tape effects | Field Notes / MDX blog |
| Responsive breakpoints | Award data → editorial presentation | Scrapbook fonts | Dossier / resume system |
| Component architecture | Stats → real verified numbers | Fabricated statistics | Interactive data visualisations |
| | Color system → editorial palette | Wrong project data | Higgsfield visual assets |
| | | Emoji decorations | Easter eggs |
| | | Generic gallery | Archive / graveyard |

---

## 02 — CALVIN DSOUZA — THE COMPLETE PROFILE

### Identity

| Field | Value |
|---|---|
| **Full Name** | Calvin Jude Dsouza |
| **Education** | B.Tech Computer Science (Cybersecurity), NMAM Institute of Technology — Class of 2028 |
| **CGPA** | 9.26 / 10 |
| **Current Role** | Team Lead, Cybersecurity Intern — Army Cyber Group, New Delhi |
| **Email** | calvinja320@gmail.com |
| **LinkedIn** | [linkedin.com/in/calvin-jude-dsouza](https://linkedin.com/in/calvin-jude-dsouza) |
| **GitHub** | [@Cal2-0](https://github.com/Cal2-0) |
| **Portfolio** | [courageous-pithivier-cb9e32.netlify.app](https://courageous-pithivier-cb9e32.netlify.app/) |
| **Focus Areas** | Digital Forensics · Applied AI · Post-Quantum Cryptography · Network Security |

### Core Thesis

> **"I build systems that establish what happened — not just that something did."**

Calvin is not a generic developer. He builds **investigation platforms** — systems concerned with evidence, proof, signals, and provenance. His work sits at the intersection of cybersecurity, AI research, and forensic analysis.

### Technical Arsenal

- **Languages:** Python · C/C++ · Solidity · JavaScript · TypeScript · Bash · SQL
- **Frameworks & AI:** React · FastAPI · Flask · D3.js · PyTorch · TensorFlow · OpenCV · Streamlit
- **Infrastructure:** Linux · Docker · PostgreSQL · Redis · Git · Cloudflare
- **Security & Forensics:** Scapy · Wireshark · ML-KEM-1024 · SPHINCS+ · Nmap · Metasploit

---

### The 12 Major Projects

#### Tier 1 — Flagship Systems

| # | Project | Core Question | Stack | Visual World |
|---|---|---|---|---|
| 01 | **AXON** | What does a wallet actually do? | React · FastAPI · Etherscan · D3.js | Forensic evidence room / network graph |
| 02 | **SentinelAI** | Can three independent analyses converge into one security verdict? | Python · FastAPI · NLP · ML | Incident response / telemetry stream |
| 03 | **SecureCI** | How do you prove a CI/CD pipeline is safe? | GitHub Actions · YAML · Static Analysis | Pipeline provenance / workflow graph |
| 04 | **KALERA** | What happens when today's cryptographic assumptions stop being enough? | ML-KEM-1024 · SPHINCS+ · Chaos Theory | Cryptographic manuscript / mathematical artefact |

#### Tier 2 — Significant Systems

| # | Project | Core Question | Stack | Visual World |
|---|---|---|---|---|
| 05 | **NetScope X** | Can you observe a network without disturbing it? | Scapy · D3.js · Python | Network observatory / live telemetry |
| 06 | **NetRecon** | How low can you go and still build useful things? | C · Raw Sockets · ICMP/ARP/TCP | Systems laboratory |
| 07 | **MASSED.EX** | Can machines understand crowd danger before humans do? | YOLOv8 · D3.js · Computer Vision | Spatial intelligence / crowd simulation |
| 08 | **Lucent.AI** | Can mathematically interpretable signals explain why media is synthetic? | PyTorch · FFT · Frequency Analysis | Forensic signal laboratory |

#### Tier 3 — Research & Tools

| # | Project | Core Question | Stack | Visual World |
|---|---|---|---|---|
| 09 | **Kenshō** | How do organisations remember what their experts know? | LLaMA · PostgreSQL · ElasticSearch | Memory archive / library |
| 10 | **NeuroMetric** | What can multimodal human signals reveal? | React Native · MediaPipe | Scientific observation / portraiture |
| 11 | **Lyra** | What if discovering dev tools felt like browsing a library? | React 19 · Vite · Fuse.js | Library catalogue |
| 12 | **VibeAlchemy** | Can mood become a search query? | Chrome Extension · LLM | Cinema / mood / discovery |

#### Additional Projects

| Project | What | Stack |
|---|---|---|
| **VisionEX** | Zero-trust auth suite — led 6-engineer team, 3 audits, zero criticals | OAuth2 · RBAC · IAM |
| **OuchMyBrain.io** | Notes → flashcards/audio, "Professor Mode" — 🥈 2nd ACEathon | OCR · OpenAI · ElevenLabs |
| **VaidikaAI** | Multilingual hospital triage — 48h hackathon | LLMs · Prompt Engineering |

---

### Awards & Honours

| Event | Result | Category | Date |
|---|---|---|---|
| **Code Intrusion CTF** | 7th / 200+ teams | CTF | Oct 2025 |
| **ACEathon Hackathon** | 2nd Place | Hackathon | Aug 2025 |
| **Enyugma CTF** | 14th / 200+ teams | CTF | Sep 2025 |
| **CYSECK NITK CTF** | 14th / 60+ teams | CTF | Nov 2025 |
| **Innovex Hackathon** | Special Commendation | Hackathon | Feb 2026 |
| **SIH National** | Participant | National Hackathon | Dec 2025 |

### Certifications

- Google IT Support Professional Certificate
- Certified AppSec Practitioner (CAP)
- EC-Council Ethical Hacking Essentials
- Cisco Introduction to Cybersecurity
- ISO 27001 Lead Implementer
- Relevant Coursera/NPTEL specializations

### Leadership

- Team Lead, Cybersecurity Intern — Army Cyber Group
- Junior Branch Representative — NMAMIT 2026
- Class Representative — NMAMIT
- Core Member — PROTON Association

---

### Personality the site must project

```
curious · serious · playful · technical · ambitious · artistic
precise · research-driven · slightly mysterious · human · young
unusually thoughtful
```

### Personality the site must NOT project

```
corporate · overwritten · pretentious · generic · AI-generated
"tech bro" · cyberpunk cliché · fashion clone · Framer template
```

---

## 03 — THE REFERENCE IMAGE — DECOMPOSED

### Source
Rotaract District 3142 — Director Series editorial portrait poster.

### REFERENCE BREAKDOWN

| Attribute | Analysis |
|---|---|
| **Primary Visual Idea** | A person presented as the cover of a cultural publication — not a profile, not a resume, but an editorial subject |
| **Layout** | Asymmetric magazine cover: oversized masthead at top, large central portrait, information blocks at left/right margins, bottom strip with subject name |
| **Typography** | Uses **oversized editorial serif** ("ROTARACT") as the primary spatial anchor, occupying more visual area than any other element. Second display serif ("THE DIRECTOR") at medium scale creates hierarchy. Small sans-serif metadata creates information density. Large numeral ("06") establishes scale and series identity. Script typeface at bottom for title/subtitle distinction |
| **Image Language** | Central figure occupies ~50% of the composition. Portrait crosses no grid boundary — it sits inside a soft-edged frame with a muted lavender background tint. The person is the hero object, not an icon. Studio lighting, natural pose, eye-level camera |
| **Content Hierarchy** | 1) Masthead/institution 2) Role title 3) Portrait 4) Pull quote 5) Series metadata 6) Subject name. Reading order is top→center→margins→bottom |
| **Compositional Devices** | Thin horizontal rules as separators · Star/diamond ornamental marks · Large numeral as visual anchor · VOL/ISSUE numbering · Taglines in margins · Bottom strip as identity bar |
| **Colour** | Warm ivory paper `#F4F0EA` · Deep purple/plum accent `#51385F` · Muted lavender `#B9A8D1` · Dark ink for titles `#161616` · Limited palette — maximum 4 colours |
| **What Makes It Memorable** | The person is presented with the visual gravity of a magazine cover — not a LinkedIn profile. Typography DOMINATES. The portrait is compositionally integrated. Information is layered: macro → micro. Whitespace is generous |
| **What Should Never Be Copied** | The literal Rotaract branding, the specific institutional framing, the script title treatment |
| **What Principle Should Be Reinterpreted** | Person-as-publication-cover. Typography-as-architecture. Information-as-composition. Portrait-as-design-element. Metadata-as-texture. Restraint-as-luxury |

---

## 04 — THE DESIGN BIBLE — DISTILLED

The `calvinklein_design_bible.md` establishes 44 rules. The 10 most critical:

- **Rule 1: Publication, Not Portfolio** — The website is a personal magazine / digital exhibition / technical archive / research journal — not a résumé.
- **Rule 2: Person Presented Like a Publication** — Treat Calvin like the subject of an independently published technical-cultural magazine.
- **Rule 3: Three-Act First Impression** — "What is this?" (IMPACT) → "Who made this?" (CURIOSITY) → "Oh. He actually builds serious systems." (CREDIBILITY).
- **Rule 4: Editorial Typography** — Display serif + modern sans + technical mono. Typography is a visual object. Large type dominates. Whitespace is part of the design.
- **Rule 5: Mature Palette** — Paper `#F4F0EA` · Ink `#161616` · Muted Lavender `#B9A8D1` · Deep Plum `#51385F` · Muted Gold `#B59661` · Technical Blue `#5B8EA3`.
- **Rule 6: Asymmetric Editorial Grid** — 12 columns. Generous margins. Intentional overflow. Elements breaking the grid. NOT centered-card-centered-card.
- **Rule 7: One WOW Per Scene** — Every major scene gets one signature idea. No competing effects.
- **Rule 8: Motion Is Content** — Motion should communicate transformation, hierarchy, cause/effect, comparison, attention, discovery. Not decoration.
- **Rule 9: Image Is Content** — Every image must answer: "What does the visitor learn from this?" If only "it looks cool" → decorative → remove.
- **Rule 10: Scroll As Camera** — Scroll can push in, pull out, pan, reveal, pin, transform, focus, transition, change scene. Not every scroll simply moves content upward.

---

## 05 — FIVE CREATIVE DIRECTIONS

### Direction 1: THE BUREAU
- **Core Metaphor:** A private investigation bureau — part forensic lab, part research archive, part editorial office.
- **Emotional Feel:** Meticulous. Authoritative. Quietly intense. Like walking into a senior investigator's private office where every wall tells a story.
- **Hero:** Calvin's portrait treated as an archival identification photograph — oversized, editorial crop, behind massive serif typography. Name + thesis + discipline metadata arranged asymmetrically.
- **Navigation:** THE PERSON · THE WORKS · THE LAB · FIELD NOTES · THE DOSSIER · CORRESPONDENCE
- **Project Presentation:** Each project is a "case file" — opened with a research question, revealed through evidence layers, resolved with findings.
- **Motion Language:** REVEAL (clip-path unmasking) · DRIFT (subtle ambient movement) · PIN (scroll-locked evidence scenes) · SCRUB (scroll-controlled data sequences).
- **Signature Interaction:** Scroll through a project and the viewport transforms into an evidence wall — fragments of the project's visual world appear, rearrange, and resolve into the project's key insight.
- **Score:** Originality 9 · Technical Sophistication 9 · Emotional Impact 9 · Recruiter Usability 8 · Frontend Showcase 9 · Art Direction 10 · Memorability 9

### Direction 2: THE OBSERVATORY
- **Core Metaphor:** A mountaintop observatory where Calvin studies digital systems the way astronomers study stars.
- **Emotional Feel:** Vast. Contemplative. Scientific. Like being in a space where instruments are pointed at invisible phenomena.
- **Hero:** Dark navy environment. Calvin's name in massive sans-serif. A subtle particle system representing network signals. First interaction reveals data.
- **Navigation:** OBSERVER · INSTRUMENTS · SIGNALS · LOG · TRANSMISSIONS
- **Project Presentation:** Each project is an "instrument" pointed at a different phenomenon. The project page shows what the instrument detects.
- **Motion Language:** Slow orbital movements. Data emerging from darkness. Typographic reveals that feel like readings appearing on a display.
- **Signature Interaction:** As user scrolls, background shifts from dark to light — night to day — representing the progression from raw signal to clear understanding.
- **Score:** Originality 8 · Technical Sophistication 8 · Emotional Impact 8 · Recruiter Usability 6 · Frontend Showcase 8 · Art Direction 8 · Memorability 8

### Direction 3: THE JOURNAL
- **Core Metaphor:** An independent research journal — each section is an "issue" of Calvin's ongoing publication.
- **Emotional Feel:** Intellectual. Warm. Like discovering someone's private research notebooks in a university library.
- **Hero:** Full-bleed editorial portrait. Massive serif title. Issue number. Date. Reading time for the whole site. Feels exactly like a journal cover.
- **Navigation:** ISSUE 001 · CONTENTS · STUDIES · FIELD WORK · NOTES · COLOPHON
- **Project Presentation:** Each project is a "paper" — abstract, methodology, findings, references. But designed beautifully, not academically.
- **Motion Language:** Page-turn transitions. Footnote reveals. Margin annotations that appear on scroll.
- **Signature Interaction:** Pull quotes from projects float in the margins and connect to their source when hovered.
- **Score:** Originality 7 · Technical Sophistication 7 · Emotional Impact 8 · Recruiter Usability 7 · Frontend Showcase 7 · Art Direction 9 · Memorability 7

### Direction 4: THE SPECIMEN ROOM
- **Core Metaphor:** A natural history museum's specimen room — but the specimens are Calvin's projects, preserved and labelled.
- **Emotional Feel:** Curious. Precise. Reverent. Like walking through a room where everything has been carefully catalogued.
- **Hero:** White/ivory background. Calvin's portrait as a "specimen photograph" — labeled, numbered, catalogued. Surrounding metadata arranged like museum labels.
- **Navigation:** CURATOR · SPECIMENS · INVESTIGATIONS · NOTEBOOK · PROVENANCE · INQUIRY
- **Project Presentation:** Each project displayed like a museum specimen — mounted, labeled with taxonomy (domain, technique, status), with a detailed description card beside it.
- **Motion Language:** Drawer-opening reveals. Zoom-in on specimens. Label text appearing letter-by-letter.
- **Signature Interaction:** A project "specimen" can be "examined" — user interaction reveals hidden layers, internal mechanisms, underlying data.
- **Score:** Originality 8 · Technical Sophistication 7 · Emotional Impact 7 · Recruiter Usability 7 · Frontend Showcase 7 · Art Direction 8 · Memorability 8

### Direction 5: THE BROADCAST
- **Core Metaphor:** A private broadcast network — Calvin is the host of a technical channel that presents ideas.
- **Emotional Feel:** Confident. Modern. Cinematic. Like tuning into a channel that presents technology with the visual quality of a streaming platform.
- **Hero:** Cinematic widescreen. Calvin's portrait in motion (video loop). Channel name in clean sans-serif. "Now showing" metadata.
- **Navigation:** CHANNEL · PROGRAMME · ARCHIVE · LIVE · SIGNAL · CONTACT
- **Project Presentation:** Each project is an "episode" — cold open, investigation, revelation, credits.
- **Motion Language:** Cinematic transitions. Split-screen reveals. Text that behaves like broadcast graphics.
- **Signature Interaction:** Project transitions feel like channel changes — brief static/interference, then the new project's world loads.
- **Score:** Originality 7 · Technical Sophistication 8 · Emotional Impact 8 · Recruiter Usability 7 · Frontend Showcase 8 · Art Direction 7 · Memorability 7

### COMPARATIVE SCORING

| Criterion | THE BUREAU | THE OBSERVATORY | THE JOURNAL | THE SPECIMEN ROOM | THE BROADCAST |
|---|:---:|:---:|:---:|:---:|:---:|
| Originality | **9** | 8 | 7 | 8 | 7 |
| Technical Sophistication | **9** | 8 | 7 | 7 | 8 |
| Emotional Impact | **9** | 8 | 8 | 7 | 8 |
| Recruiter Usability | **8** | 6 | 7 | 7 | 7 |
| Frontend Showcase | **9** | 8 | 7 | 7 | 8 |
| Art Direction | **10** | 8 | 9 | 8 | 7 |
| Memorability | **9** | 8 | 7 | 8 | 7 |
| **TOTAL** | **63** | 54 | 52 | 52 | 52 |

> **Recommendation: THE BUREAU** — It perfectly aligns with Calvin's identity (investigation, forensics, evidence, proof), supports the editorial magazine reference, allows each project to have a unique visual world while remaining coherent, and creates the strongest "wait — this is a personal website?" reaction.

---

## 06 — THE CHOSEN DIRECTION: THE BUREAU

### Concept

**THE BUREAU** is Calvin Dsouza's private investigation office — a digital space where evidence is collected, experiments are documented, research is published, and systems are built. It is simultaneously:
- A forensic evidence room (projects)
- An editorial office (field notes / blog)
- A research laboratory (experiments)
- A private archive (dossier / resume)
- A correspondence desk (contact)

### Design Thesis

> **"A person presented like the lead investigator of a private technical bureau — where every project is a case, every blog post is a field report, and every skill is an instrument."**

### Visual Language

| Element | Treatment |
|---|---|
| **Surfaces** | Warm ivory paper, crisp white panels, muted graphite borders |
| **Typography** | Oversized editorial serif headlines, clean sans body, monospace metadata |
| **Images** | Editorial portraits, forensic-style project visuals, archival photography |
| **Data** | Clean SVG graphs, network diagrams, signal visualisations |
| **Decorative marks** | `✦` `—` `01` `/` `○` `↗` — a controlled symbol grammar |
| **Motion** | Clip-path reveals, editorial drift, pinned scroll scenes, typographic choreography |
| **Spacing** | Extremely generous whitespace — premium feel through restraint |

### Information Architecture

```text
THE BUREAU — calvinklein.com
│
├── ENTRY (Hero)
│   └── Editorial cover: portrait + name + thesis + disciplines
│
├── THE PERSON (About)
│   └── Editorial profile: biography + currently + beliefs
│
├── THE WORKS (Projects)
│   ├── AXON — Case 001
│   ├── SentinelAI — Case 002
│   ├── SecureCI — Case 003
│   ├── KALERA — Case 004
│   ├── NetScope X — Case 005
│   ├── NetRecon — Case 006
│   ├── MASSED.EX — Case 007
│   ├── Lucent.AI — Case 008
│   ├── Kenshō — Case 009
│   ├── NeuroMetric — Case 010
│   ├── Lyra — Case 011
│   └── VibeAlchemy — Case 012
│
├── THE LAB (Skills + Instruments)
│   └── Technical capabilities as instruments / tools
│
├── FIELD NOTES (Blog / Magazine)
│   └── Editorial articles with interactive components
│
├── THE DOSSIER (Resume / CV)
│   └── Beautifully designed but ATS-downloadable
│
├── THE ARCHIVE (Awards + Graveyard)
│   ├── Honours & Record
│   └── Unfinished / Abandoned projects
│
└── CORRESPONDENCE (Contact)
    └── Email + GitHub + LinkedIn + social
```

---

## 07 — DESIGN SYSTEM SPECIFICATION

### Typography

| Role | Font | Fallback | Weight | Usage |
|---|---|---|---|---|
| **Display Serif** | Cormorant Garamond | Georgia, serif | 300, 400, 600, 700 | Name, hero, major titles, article titles, large numbers |
| **Body Sans** | Inter | system-ui, sans-serif | 400, 500, 600 | Navigation, descriptions, body, labels, buttons |
| **Technical Mono** | JetBrains Mono | monospace | 400 | Project IDs, status, tech stacks, timestamps, code |

### Typographic Scale

```css
--type-hero:     clamp(80px, 12vw, 180px);    /* Name / masthead */
--type-display:  clamp(48px, 8vw, 140px);     /* Major titles */
--type-heading:  clamp(36px, 5vw, 80px);      /* Section titles */
--type-subhead:  clamp(24px, 3vw, 48px);      /* Subsection */
--type-large:    clamp(20px, 2vw, 28px);       /* Lead paragraphs */
--type-body:     clamp(16px, 1.2vw, 19px);     /* Body text */
--type-caption:  clamp(12px, 1vw, 14px);       /* Captions */
--type-label:    clamp(10px, 0.8vw, 12px);     /* Micro labels */
--type-stat:     clamp(48px, 7vw, 120px);      /* Large numbers */
```

### Colour System

```css
/* === THE BUREAU PALETTE === */

/* Paper */
--color-paper:        #F4F0EA;
--color-white:        #FBF9F6;
--color-cream:        #EDE8DF;

/* Ink */
--color-ink:          #161616;
--color-graphite:     #363636;
--color-ash:          #6B6B6B;
--color-silver:       #9B9B9B;

/* Accents */
--color-plum:         #51385F;
--color-lavender:     #B9A8D1;
--color-gold:         #B59661;
--color-blue:         #5B8EA3;
--color-burgundy:     #6B3A3A;

/* Functional */
--color-rule:         #D4CFC7;
--color-hover:        rgba(81, 56, 95, 0.08);
--color-selection:    rgba(185, 168, 209, 0.3);
--color-overlay:      rgba(22, 22, 22, 0.6);
```

### Colour Modes (per scene)

| Mode | Background | Text | Accent | Rule |
|---|---|---|---|---|
| **Editorial** (default) | `paper` | `ink` | `plum` + `gold` | `rule` |
| **Research** | `white` | `graphite` | `blue` | `rule` |
| **Security** | `ink` | `white` | `blue` + `lavender` | `graphite` |
| **Archive** | `cream` | `graphite` | `burgundy` + `gold` | `rule` |

### Grid System

```css
--grid-columns: 12;
--grid-gutter: clamp(16px, 2vw, 32px);
--grid-margin: clamp(20px, 5vw, 120px);
--grid-max-width: 1440px;
```

### Spacing Scale

```css
--space-1:  4px;
--space-2:  8px;
--space-3:  16px;
--space-4:  24px;
--space-5:  32px;
--space-6:  48px;
--space-7:  64px;
--space-8:  96px;
--space-9:  128px;
--space-10: 200px;
```

### Motion Tokens

```css
/* Durations */
--duration-micro:     150ms;     /* hover, focus */
--duration-interface: 400ms;     /* nav, text reveals */
--duration-editorial: 800ms;     /* large titles, images */
--duration-cinematic: 2000ms;    /* scene transitions */
--duration-ambient:   8000ms;    /* atmospheric loops */

/* Easings */
--ease-out:    cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Decorative Symbol Grammar

```text
✦  Section marker / bullet
—  Separator
01 Catalogue number
/  Divider
○  Status indicator
↗  External link
·  Inline separator
```

---

## 08 — SITE ARCHITECTURE & SCENES

### Scene 01 — ENTRY (Hero)

**Purpose:** Establish identity. Create the "Wait — this is a personal website?" reaction.

**Initial Viewport (first 3 seconds):**
```text
┌──────────────────────────────────────────────┐
│                                              │
│  THE BUREAU              EST. 2024    ✦ 001  │
│  ──────────────────────────────────────────  │
│                                              │
│        C A L V I N                           │
│           D S O U Z A                        │
│                                              │
│    ┌─────────────┐                           │
│    │             │    "I BUILD SYSTEMS       │
│    │  PORTRAIT   │     THAT LOOK FOR PROOF." │
│    │             │                           │
│    │             │    CYBERSECURITY          │
│    │             │    AI · FORENSICS         │
│    └─────────────┘    RESEARCH               │
│                                              │
│  ✦ ARMY CYBER GROUP   ✦ NMAMIT · 9.26 CGPA   │
│                                              │
│                  ↓ SCROLL                    │
└──────────────────────────────────────────────┘
```

**Typography:** Name in massive `Cormorant Garamond` (clamp 80px–180px). Thesis in `Inter`. Metadata in `JetBrains Mono`.

**Motion:**
1. Name letters reveal via clip-path (left-to-right, 800ms stagger 40ms)
2. Portrait fades in with subtle scale (1.02 → 1.0, 1200ms)
3. Thesis text reveals word-by-word (600ms)
4. Metadata appears (opacity, 400ms)

**Desktop Composition:** Asymmetric — portrait occupies columns 2–5, typography occupies columns 6–11. Metadata pinned to left margin.

**Mobile Composition:** Vertical magazine cover — large name stacked, portrait below, thesis below portrait, metadata at bottom.

---

### Scene 02 — THE PERSON (About)

**Purpose:** Make Calvin feel human. Not corporate. Not a resume.

**Content:**
- Editorial biography (3 paragraphs, real voice)
- "CURRENTLY" section: Building / Investigating / Reading / Learning
- Leadership roles (editorial, not sticky notes)
- Real statistics with provenance:
  - `12` SELECTED WORKS
  - `01` ACTIVE DEPLOYMENT (Army Cyber Group)
  - `9.26` CUMULATIVE GPA
  - `6` COMPETITIONS PLACED

**Motion:** Scroll-driven reveal. Biography text appears in editorial paragraph-by-paragraph reveals.

**Visual:** Large editorial portrait (different crop from hero). Text wrapping around image. Pull quote in large serif.

---

### Scene 03 — THE WORKS (Projects)

**Purpose:** This is the portfolio's gravitational centre. Each project is a case.

**Structure:**
1. Section opens with a large `THE WORKS` title and catalogue count: `12 SELECTED SYSTEMS`
2. Horizontal exhibition scroll or vertical pinned sequence for flagship projects
3. Each flagship project gets a full-viewport scene
4. Secondary projects in a denser grid

**Each Flagship Project Scene:**
```text
┌──────────────────────────────────────────────┐
│                                              │
│  CASE 001              BLOCKCHAIN FORENSICS  │
│                                              │
│          A X O N                             │
│                                              │
│  "What does a wallet                         │
│   actually do?"          ┌──────────────┐    │
│                          │  NETWORK     │    │
│  ─────────────────────── │  GRAPH /     │    │
│  React · FastAPI         │  FORENSIC    │    │
│  Etherscan · D3.js       │  VISUAL      │    │
│                          └──────────────┘    │
│  Behavioural clustering                      │
│  Transaction trace                           │
│  On-chain forensics                          │
│                                              │
│  → VIEW CASE    → REPOSITORY                 │
└──────────────────────────────────────────────┘
```

---

### Scene 04 — THE LAB (Skills / Instruments)

**Purpose:** Present technical capabilities as instruments — not a grid of badges.

**Concept:** The Lab is where Calvin's instruments live. Organised by discipline:

```text
INSTRUMENTS

FORENSICS & SECURITY
  Scapy · Wireshark · Nmap · Metasploit
  ML-KEM-1024 · SPHINCS+
  Digital Forensics · OSINT

MACHINE INTELLIGENCE
  PyTorch · TensorFlow · OpenCV
  YOLOv8 · Computer Vision · NLP
  LLM Integration · Multi-Modal Fusion

SYSTEMS & LANGUAGES
  Python · C/C++ · JavaScript · TypeScript
  Solidity · Bash · SQL

FRAMEWORKS & PLATFORMS
  React · FastAPI · Flask · D3.js
  Docker · Linux · PostgreSQL · Redis
```

**Visual:** Each category is a panel. Clean typography. No emoji. Monospace labels. Lines and rules separate categories. Subtle data visualisation showing skill depth.

---

### Scene 05 — FIELD NOTES (Blog)

**Purpose:** A real editorial publication. Not "Blog Cards."

See: [Section 10 — The Field Notes / Magazine System](#10--the-field-notes--magazine-system).

---

### Scene 06 — THE DOSSIER (Resume)

**Purpose:** Make the resume immediately accessible while matching the site's identity.

**Content:**
- `VIEW DOSSIER` — opens a beautifully designed web resume
- `DOWNLOAD PDF` — provides ATS-friendly conventional resume
- Timeline of experience
- Education
- Certifications

**Visual:** Print-style editorial layout. Like an archival personnel file. Clean, structured, serious.

---

### Scene 07 — THE ARCHIVE (Awards + Graveyard)

**Purpose:** Show the record. Show the failures. Show engineering maturity.

**Honours Section:**
- Award entries styled as archival records
- Numbered, dated, categorised
- Clean typography, no emoji badges

**The Graveyard:**
- 3–5 abandoned/failed projects
- Each entry: what was attempted, why it failed, what was learned, what replaced it
- Shows intellectual honesty and engineering depth

---

### Scene 08 — CORRESPONDENCE (Contact)

**Purpose:** Professional contact. Not "SUBSCRIBE TO THE CHRONICLE."

**Content:**
```text
CORRESPONDENCE

For research collaborations, internship discussions,
or security work inquiries.

calvinja320@gmail.com

GitHub  ·  LinkedIn  ·  Twitter
```

**Visual:** Minimal. Large email address in serif. Social links in monospace. Generous whitespace.

---

## 09 — PROJECT WORLD SPECIFICATIONS

### AXON — FORENSIC EVIDENCE ROOM
- **Visual Language:** Network graphs · connections · behaviour · capital flow · risk layers · case files · threat intelligence
- **Core Interaction:** Wallet → graph → signals → risk → conclusion. The interface should feel like an investigation being performed.
- **Higgsfield Asset:** Dark environment with luminous network graph nodes connected by thin glowing lines. Camera slowly orbiting. No faces. Forensic blue + gold palette.
- **Desktop:** Split — left side shows the research question + metadata, right side shows the network graph visual.

### SENTINELAI — INCIDENT RESPONSE STREAM
- **Visual Language:** Telemetry · logs · parallel analysis · security state · signals · verdict
- **Core Interaction:** Three independent analytical streams (AUTH / VULN / CODE) converge into one final security verdict.
- **Higgsfield Asset:** Three parallel data streams — text/code cascading downward — merging into a single point of light. Cool blue palette.

### SECURECI — PIPELINE PROVENANCE
- **Visual Language:** Source code · CI/CD pipelines · rules · diffs · workflow graphs · provenance
- **Core Interaction:** Unsafe workflow → detected rule → highlighted vulnerability → proposed fix → corrected workflow.
- **Higgsfield Asset:** A workflow diagram with nodes and edges, one node pulsing red (vulnerability), then resolving to green. Clean white background.

### KALERA — CRYPTOGRAPHIC MANUSCRIPT
- **Visual Language:** Mathematics · keys · layers · secure communication · hidden information · steganography
- **Core Interaction:** Ordinary image → reveal hidden layer → encryption layers → key exchange → signature. Should feel like a mathematical artefact.
- **Higgsfield Asset:** Layered translucent sheets with mathematical notation, slowly separating to reveal hidden patterns beneath. Gold + ink palette.

### LUCENT.AI — FORENSIC SIGNAL LABORATORY
- **Visual Language:** Scientific specimen · frequency analysis · diffusion reconstruction · anomaly maps · research annotation
- **Core Interaction:** Image → spatial signal → frequency spectrum → reconstruction → anomaly → fusion → confidence
- **Higgsfield Asset:** A portrait slowly transforming into a frequency spectrum visualization — the face dissolving into mathematical signals. Research blue palette.

### MASSED.EX — SPATIAL INTELLIGENCE
- **Visual Language:** Particles · crowds · movement · density · zones · routes
- **Core Interaction:** Empty space → people appear → density increases → risk zone emerges → safe path calculated
- **Higgsfield Asset:** Bird's-eye view of a crowd, particles moving, density heatmap emerging. Warm palette with danger zones in red.

*Additional projects (Kenshō, NeuroMetric, NetScope, NetRecon, Lyra, VibeAlchemy) receive simpler presentations — editorial card with typography, research question, and tech stack — without full-viewport scenes.*

---

## 10 — THE FIELD NOTES / MAGAZINE SYSTEM

### Editorial Identity

Every article is a "Field Note" — numbered, categorised, dated.

```text
FIELD NOTE 018

WHY I STOPPED TRUSTING BLACKLISTS

BLOCKCHAIN · FORENSICS

07 MIN READ                     22 AUGUST 2026
```

### Article Layout

Large editorial title → Hero artwork → Body with margin annotations → Code blocks → Interactive components → Pull quotes → Related projects → Related notes

### Planned Articles

| # | Title | Category | Interactive Component |
|---|---|---|---|
| 001 | WHY I STOPPED TRUSTING BLACKLISTS | Blockchain / Forensics | AXON graph embed |
| 002 | CAN A MACHINE EXPLAIN WHY AN IMAGE IS FAKE? | AI / Research | Lucent signal visualisation |
| 003 | I BUILT A NETWORK SCANNER FROM RAW SOCKETS | Systems / C | Packet anatomy diagram |
| 004 | WHAT BUILDING TOO MANY PROJECTS TAUGHT ME | Engineering | Project timeline |
| 005 | THE WORST BUG I EVER SHIPPED | Engineering | Before/after code diff |
| 006 | HOW I THINK ABOUT SECURITY | Philosophy | — |
| 007 | WHAT A CTF ACTUALLY TAUGHT ME | Competition | — |

### Technical Architecture

Use **MDX** (or MDX-equivalent with Vite) so articles can contain actual React components.

```text
content/
  field-notes/
    001-blacklists.mdx
    002-deepfake-signals.mdx
    003-raw-sockets.mdx
```

---

## 11 — SIGNATURE INTERACTIONS

### Interaction 1: THE EVIDENCE WALL (Project Reveals)
- **What the user does:** Scrolls through a flagship project scene.
- **What happens:** Fragments of the project's visual world (graphs, code snippets, diagrams) appear from the edges, drift into position, and assemble into the project's key visual.
- **Why it exists:** Communicates how investigation works — fragments → evidence → conclusion.
- **Technique:** GSAP ScrollTrigger + clip-path + staggered transforms.
- **Performance cost:** Low (CSS transforms only).
- **Mobile alternative:** Vertical card stack with sequential reveals.

### Interaction 2: THE FREQUENCY SHIFT (Lucent Project)
- **What the user does:** Hovers over / scrolls past the Lucent project.
- **What happens:** The project's hero image slowly transforms from a normal photograph into its frequency-domain representation — revealing hidden anomalies.
- **Why it exists:** Demonstrates the project's actual mechanism — signal decomposition.
- **Technique:** CSS blend modes + opacity transitions between layered images, or canvas-based WebGL shader.
- **Performance cost:** Medium (2 image layers).
- **Mobile alternative:** Tap-to-toggle between normal and frequency views.

### Interaction 3: THE CATALOGUE NUMBER (Typography)
- **What the user does:** Scrolls between sections.
- **What happens:** A persistent catalogue number in the margin increments (`001` → `002` → `003`), and the section label changes with a clip-path text transition.
- **Why it exists:** Maintains the "publication" metaphor. Creates reading progress awareness.
- **Technique:** GSAP ScrollTrigger + CSS clip-path text mask.
- **Performance cost:** Minimal.
- **Mobile alternative:** Sticky header with section number.

### Interaction 4: THE DOSSIER DRAWER (Resume)
- **What the user does:** Clicks "VIEW DOSSIER."
- **What happens:** A panel slides in from the right like a filing cabinet drawer, revealing Calvin's complete CV in editorial layout.
- **Why it exists:** Metaphor consistency — the dossier is a physical document being retrieved from an archive.
- **Technique:** Framer Motion layoutId + transform.
- **Performance cost:** Low.
- **Mobile alternative:** Full-screen overlay slide-up.

### Interaction 5: THE NETWORK PULSE (Cross-Project Relationships)
- **What the user does:** Hovers over a technology tag (e.g., "Python") in any project.
- **What happens:** Other projects using the same technology subtly illuminate — showing connections between projects.
- **Why it exists:** Demonstrates that Calvin's work forms a connected system, not isolated projects.
- **Technique:** React state + CSS transitions.
- **Performance cost:** Minimal.
- **Mobile alternative:** Tap to highlight related projects.

---

## 12 — HIGGSFIELD PRODUCTION PLAN

### Setup

```bash
npm i -g @higgsfield/cli
higgsfield auth login
npx skills add higgsfield-ai/skills
```

### Visual Asset Manifest

| # | Asset | Purpose | Aspect Ratio | Format | Placement |
|---|---|---|---|---|---|
| 01 | **Hero Portrait** | Establish identity | 3:4 | Still + 4s loop | Hero section background |
| 02 | **AXON Network** | Forensic graph visual | 16:9 | Still + 6s loop | AXON project scene |
| 03 | **Lucent Signal** | Frequency decomposition | 16:9 | Still + 4s loop | Lucent project scene |
| 04 | **KALERA Layers** | Cryptographic layers | 1:1 | Still | KALERA project scene |
| 05 | **NetScope Topology** | Network observatory | 16:9 | Still | NetScope project card |
| 06 | **MASSED Crowd** | Crowd density | 16:9 | Still | MASSED project card |
| 07 | **Field Notes Covers** | Article hero system | 3:2 | Still (set of 3) | Blog article headers |
| 08 | **Dossier Texture** | Archive background | 16:9 | Still | Dossier section |
| 09 | **Footer Mark** | Closing visual identity | 4:1 | Still | Footer |

### Art Direction Constraints for ALL Assets

```text
VISUAL UNIVERSE:
- Warm editorial lighting (not cold/clinical)
- Muted palette matching the design system
- Paper/archival texture undertones
- NO generic AI aesthetic
- NO cyberpunk neon
- NO floating geometric shapes
- NO abstract gradient blobs

CONSISTENCY:
- Same lighting temperature across all assets
- Same grain/texture level
- Same colour grading
- Same sense of depth and materiality
```

### Example Higgsfield Prompt: HERO PORTRAIT

```text
PURPOSE: Establish Calvin's identity as the lead of "The Bureau"

VISUAL IDEA: Contemporary editorial portrait, treated like an archival
identification photograph. The subject should feel like a young
investigator — serious, curious, human.

COMPOSITION: Head and shoulders, slightly off-centre (rule of thirds).
Clean background — warm ivory/cream with subtle paper texture.
Strong but soft lighting from camera-left.

CAMERA: Medium telephoto, shallow depth of field.
Eye-level or slightly below.

LIGHTING: Soft key light camera-left. Gentle fill.
Warm colour temperature. No harsh shadows.

PALETTE: Ivory background. Warm skin tones. Deep plum/graphite clothing.

TEXTURE: Subtle film grain. Archival quality.

MOTION (if video): Camera holds still. Subject breathes naturally.
Hair moves imperceptibly. No face distortion. No morphing.
Very slow — 4 second loop.

ASPECT RATIO: 3:4 (portrait)

DO NOT: Generate cyberpunk lighting. Generate neon. Generate
floating particles. Generate abstract backgrounds. Distort the face.
```

---

## 13 — CLAUDE CODE PROMPT LIBRARY

### PROMPT 01 — MISSION BRIEFING

> *Paste this before any implementation work begins:*

```text
You are the Creative Technology Director for calvinklein.com.

Read the design bible: calvinklein_design_bible.md
Read the creative direction rulebook: [this document]

The concept is THE BUREAU — a private investigation office that
is simultaneously a forensic evidence room, editorial office,
research laboratory, and private archive.

Design system:
- Cormorant Garamond (display serif)
- Inter (body sans)
- JetBrains Mono (technical mono)
- Palette: paper #F4F0EA, ink #161616, plum #51385F,
  lavender #B9A8D1, gold #B59661, blue #5B8EA3
- 12-column editorial grid
- Asymmetric layouts
- Generous whitespace
- Clip-path reveals, editorial drift, pinned scroll scenes

Before implementing any section:
1. State the scene's purpose
2. State the visual composition
3. State the motion language
4. State the mobile adaptation
5. Then implement
```

### PROMPT 02 — HERO PROTOTYPE

```text
Build the ENTRY scene (hero).

Requirements:
- Full viewport height
- Cormorant Garamond for "CALVIN DSOUZA" at --type-hero scale
- Inter for thesis: "I BUILD SYSTEMS THAT LOOK FOR PROOF."
- JetBrains Mono for metadata: disciplines, current role, CGPA
- Asymmetric layout: portrait left (columns 2-5), text right (columns 6-11)
- Subtle clip-path text reveal animation (GSAP, 800ms, stagger 40ms)
- Portrait placeholder with editorial crop styling
- Scroll indicator: subtle animated arrow
- Paper #F4F0EA background
- Ink #161616 text
- Plum #51385F for decorative marks (✦)

Do NOT use:
- Polaroid component
- Scrapbook fonts
- Emoji
- Generic hero button
- Gradient backgrounds
```

### PROMPT 03 — PROJECT WORLD (Template)

```text
Build the [PROJECT_NAME] case scene.

CASE NUMBER: [XX]
CATEGORY: [CATEGORY]
RESEARCH QUESTION: "[QUESTION]"
TECH: [STACK]
VISUAL WORLD: [DESCRIPTION]

Requirements:
- Full viewport pinned scroll scene
- Large Cormorant Garamond title
- Research question in Inter italic
- Tech stack in JetBrains Mono
- [SPECIFIC VISUAL/INTERACTION]
- Colour mode: [EDITORIAL/RESEARCH/SECURITY]
- Case number as large compositional anchor

Include: VIEW CASE link + REPOSITORY link
```

### PROMPT 04 — FIELD NOTES ARTICLE

```text
Build the Field Notes article system.

Requirements:
- MDX-compatible article renderer
- Editorial article layout:
  - Issue number (FIELD NOTE XXX)
  - Large serif title
  - Category + date + reading time metadata
  - Hero artwork area
  - Body text with margin annotations
  - Code blocks with syntax highlighting
  - Pull quotes in large serif
  - Related projects section
  - Related notes section
- Each article should feel like a magazine feature
- Generous whitespace
- Editorial paragraph spacing
```

### PROMPT 05 — HIGGSFIELD ASSET GENERATION

```text
Generate the [ASSET_NAME] using Higgsfield.

[Paste specific asset brief from Section 12]

After generation:
1. Save to public/assets/[category]/
2. Optimize for web (WebP, compressed)
3. Create poster frame if video
4. Integrate into the relevant component
5. Log in the asset manifest
```

---

## 14 — TECHNICAL ARCHITECTURE

### Current Stack (Keep)

| Tool | Version | Purpose |
|---|---|---|
| Vite | 8.x | Build tool |
| React | 19.x | UI framework |
| GSAP | 3.14 | Scroll & animation |
| Framer Motion | 12.x | Component animation |
| Lenis | 1.x | Smooth scroll |

### Required Additions

| Tool | Purpose |
|---|---|
| **React Router** | Page routing (projects, field notes, dossier) |
| **MDX** (via `@mdx-js/rollup`) | Interactive blog articles |
| **Prism.js** or **Shiki** | Code syntax highlighting |
| **sharp** or image pipeline | Image optimization |

### File Structure (Target)

```text
portfolio/
├── public/
│   ├── assets/
│   │   ├── hero/
│   │   ├── axon/
│   │   ├── lucent/
│   │   ├── kalera/
│   │   ├── field-notes/
│   │   └── ...
│   └── fonts/
├── content/
│   └── field-notes/
│       ├── 001-blacklists.mdx
│       └── ...
├── src/
│   ├── styles/
│   │   ├── tokens.css          (design tokens)
│   │   ├── base.css            (reset + globals)
│   │   ├── typography.css      (type system)
│   │   ├── grid.css            (editorial grid)
│   │   └── scenes/
│   │       ├── entry.css
│   │       ├── person.css
│   │       ├── works.css
│   │       ├── lab.css
│   │       ├── field-notes.css
│   │       ├── dossier.css
│   │       ├── archive.css
│   │       └── correspondence.css
│   ├── components/
│   │   ├── scenes/
│   │   │   ├── Entry.jsx
│   │   │   ├── Person.jsx
│   │   │   ├── Works.jsx
│   │   │   ├── ProjectScene.jsx
│   │   │   ├── Lab.jsx
│   │   │   ├── FieldNotes.jsx
│   │   │   ├── Dossier.jsx
│   │   │   ├── Archive.jsx
│   │   │   └── Correspondence.jsx
│   │   ├── editorial/
│   │   │   ├── CatalogueNumber.jsx
│   │   │   ├── SectionLabel.jsx
│   │   │   ├── EditorialRule.jsx
│   │   │   └── DecoMark.jsx
│   │   ├── navigation/
│   │   │   └── BureauNav.jsx
│   │   └── article/
│   │       ├── ArticleLayout.jsx
│   │       ├── PullQuote.jsx
│   │       ├── MarginNote.jsx
│   │       └── CodeBlock.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── awards.js
│   │   └── profile.js
│   ├── hooks/
│   │   ├── useScrollProgress.js
│   │   └── useReducedMotion.js
│   ├── utils/
│   │   ├── animations.js
│   │   └── smoothScroll.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 15 — PERFORMANCE & ACCESSIBILITY

### Performance Targets

| Metric | Target |
|---|---|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Bundle Size (initial) | < 200KB JS |
| Image Format | WebP / AVIF with fallback |
| Video Format | WebM with MP4 fallback, <2MB per loop |

### Performance Rules

1. Lazy-load all media below the fold
2. Dynamic import GSAP ScrollTrigger
3. Use `loading="lazy"` on all images
4. Compress all Higgsfield outputs aggressively
5. Use poster frames for video loops
6. Pause offscreen animations
7. Prefer CSS transforms over layout-triggering properties
8. Use `will-change` sparingly

### Accessibility Requirements

| Requirement | Implementation |
|---|---|
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` |
| Keyboard navigation | All interactive elements focusable with visible focus rings |
| Reduced motion | `prefers-reduced-motion` media query — disable all animation |
| Alt text | Every image has descriptive alt text |
| Contrast | WCAG AA minimum (4.5:1 for body, 3:1 for large text) |
| Screen readers | ARIA labels on non-obvious interactive elements |
| Mobile readability | Minimum 16px body text on mobile |

---

## 16 — MILESTONE EXECUTION PLAN

### MILESTONE 1 — Creative Direction ✅
- [x] Audit existing codebase
- [x] Compile Calvin's complete profile
- [x] Decompose reference image
- [x] Distill design bible
- [x] Develop 5 creative directions
- [x] Select THE BUREAU
- [x] Create this rulebook

### MILESTONE 2 — Design System
- [ ] Create `tokens.css` with all design tokens
- [ ] Create `base.css` with reset + globals
- [ ] Create `typography.css` with type system
- [ ] Create `grid.css` with editorial grid
- [ ] Import Google Fonts (Cormorant Garamond, Inter, JetBrains Mono)
- [ ] Create editorial utility components (`CatalogueNumber`, `SectionLabel`, `EditorialRule`, `DecoMark`)
- [ ] **BUILD → RUN → INSPECT → REFINE**

### MILESTONE 3 — Hero / Entry Scene
- [ ] Build `Entry.jsx` with editorial portrait composition
- [ ] Implement clip-path text reveal animation
- [ ] Implement editorial layout (asymmetric grid)
- [ ] Create `entry.css`
- [ ] Integrate Calvin's real identity data
- [ ] Mobile composition
- [ ] **BUILD → RUN → INSPECT → REFINE**

### MILESTONE 4 — Navigation + The Person
- [ ] Build `BureauNav.jsx`
- [ ] Build `Person.jsx` (editorial About)
- [ ] Integrate real biography
- [ ] Integrate "CURRENTLY" section
- [ ] Real statistics only
- [ ] **BUILD → RUN → INSPECT → REFINE**

### MILESTONE 5 — One Extraordinary Project Page (AXON)
- [ ] Build `ProjectScene.jsx` template
- [ ] Build AXON as the first case
- [ ] Create the evidence-wall interaction
- [ ] Research question → visual → findings flow
- [ ] **BUILD → RUN → INSPECT → REFINE**

### MILESTONE 6 — All Projects
- [ ] Build remaining 11 project scenes
- [ ] Flagship projects get full scenes
- [ ] Secondary projects get editorial cards
- [ ] **BUILD → RUN → INSPECT → REFINE**

### MILESTONE 7 — The Lab (Skills)
- [ ] Build `Lab.jsx` with instrument categories
- [ ] Editorial typography, no emoji
- [ ] **BUILD → RUN → INSPECT → REFINE**

### MILESTONE 8 — Field Notes (Blog)
- [ ] Set up MDX pipeline
- [ ] Build `ArticleLayout.jsx`
- [ ] Create sample articles
- [ ] Interactive component embedding
- [ ] **BUILD → RUN → INSPECT → REFINE**

### MILESTONE 9 — Dossier + Archive + Correspondence
- [ ] Build `Dossier.jsx` (web CV + PDF download)
- [ ] Build `Archive.jsx` (awards + graveyard)
- [ ] Build `Correspondence.jsx` (contact)
- [ ] **BUILD → RUN → INSPECT → REFINE**

### MILESTONE 10 — Higgsfield Visual Assets
- [ ] Install Higgsfield CLI + Skills
- [ ] Generate hero portrait
- [ ] Generate AXON visual
- [ ] Generate Lucent visual
- [ ] Generate remaining assets per manifest
- [ ] Optimize and integrate all assets
- [ ] **BUILD → RUN → INSPECT → REFINE**

### MILESTONE 11 — Mobile + Performance + Polish
- [ ] Mobile-first review of all scenes
- [ ] Performance audit (Lighthouse)
- [ ] Reduced motion support
- [ ] Accessibility audit
- [ ] Easter eggs (3–5)
- [ ] SEO: metadata, Open Graph, sitemap
- [ ] **BUILD → RUN → INSPECT → REFINE**

---

*This document is the single source of truth. Every Claude Code prompt, every Higgsfield generation, every design decision should reference it. When in doubt, return here.*
