import { motion } from "framer-motion";
import React from "react";
import { RiBriefcase4Fill } from "react-icons/ri";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import useMagnetic from "../reactbits/hooks/useMagnetic";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// ── Calvin D'Souza · About Section ─────────────────────────────────────────

const StatCard = ({ number, label }) => (
  <div
    className="flex flex-col items-center justify-center px-6 py-5 rounded-2xl border"
    style={{
      background: "rgba(13,13,26,0.8)",
      borderColor: "rgba(212,81,42,0.25)",
      minWidth: 130,
    }}
  >
    <span
      className="text-3xl font-black"
      style={{ color: "#e8622a" }}
    >
      {number}
    </span>
    <span className="text-xs text-white/50 mt-1 text-center tracking-wide uppercase">
      {label}
    </span>
  </div>
);

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[220px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-card"
      style={{
        background: "linear-gradient(135deg, rgba(212,81,42,0.3), rgba(61,214,214,0.15))",
      }}
    >
      <div
        className="rounded-[20px] py-5 px-8 min-h-[200px] flex justify-evenly items-center flex-col"
        style={{ background: "#111522" }}
      >
        <img src={icon} alt={title} className="w-14 h-14 object-contain" />
        <h3 className="text-white text-[16px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { ref: resumeButtonRef, style: magneticStyle } = useMagnetic({ radius: 100, strength: 0.3 });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>The Engineer Behind the Code.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a B.Tech Cybersecurity student at NMAMIT (CGPA 9.26), building at the intersection of frontend
        engineering, cybersecurity, and artificial intelligence. I believe the best systems are invisible —
        they just work, <span className="text-white font-semibold">seamlessly and securely</span>.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        When I'm not writing code, I'm breaking it. CTF competitions, security research, and AI model
        experiments keep me sharp. Every vulnerability found is a{" "}
        <span className="text-white font-semibold">better product shipped</span>.
      </motion.p>

      {/* Resume button */}
      <button
        ref={resumeButtonRef}
        style={{
          background: "linear-gradient(135deg, #d4512a, #e8622a)",
          boxShadow: "0 4px 20px rgba(212,81,42,0.3)",
          ...magneticStyle,
        }}
        className="mt-8 px-6 py-3 text-white rounded-md focus:outline-none focus:ring-2 flex items-center gap-2 font-semibold text-sm transition-all duration-300 hover:scale-105"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1JXxclNaQDOGD9BauEy1jS9XDYk5QsaMa/view",
            "_blank"
          )
        }
      >
        <RiBriefcase4Fill />
        View Resume
      </button>

      {/* Stat cards */}
      <div className="mt-10 flex flex-wrap gap-4">
        <StatCard number="2+"  label="Years of Building" />
        <StatCard number="15+" label="Projects Shipped" />
        <StatCard number="10+" label="CTFs Competed" />
        <StatCard number="5+"  label="AI Models Deployed" />
      </div>

      {/* Service cards */}
      <div className="mt-12 flex flex-wrap gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
