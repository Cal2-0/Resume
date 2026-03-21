import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import useMagnetic from "../reactbits/hooks/useMagnetic";
import useSoundCue from "../reactbits/hooks/useSoundCue";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import Toast from "./ui/toast";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    type: "success",
  });
  const { play } = useSoundCue("notification");
  const { ref: submitButtonRef, style: magneticStyle } = useMagnetic({
    radius: 90,
    strength: 0.35,
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      play("notification");
      setToast({
        open: true,
        message: "Please fill in all fields before submitting.",
        type: "error",
      });
      return;
    }
    setLoading(true);

    // Check if EmailJS environment variables are configured
    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      play("error");
      setToast({
        open: true,
        message:
          "EmailJS configuration is missing. Please check your environment variables.",
        type: "error",
      });
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          user_name: form.name,
          my_name: "Calvin D'Souza",
          user_email: form.email,
          my_email: "nm24cb015@nmamit.in",
          user_message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          play("success");
          setToast({
            open: true,
            message: "Thank you. I will get back to you as soon as possible.",
            type: "success",
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          play("error");
          setToast({
            open: true,
            message: "Ahh, something went wrong. Please try again.",
            type: "error",
          });
        }
      );
  };

  return (
    <>
      {toast.open && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, open: false })}
        />
      )}
      <div className="w-full min-h-screen py-10" id="contact">
        <h2 className="text-white text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] px-4">
          Let's Build Something
        </h2>
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-6 lg:gap-10 overflow-hidden text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] w-full xl:w-[40rem] p-4 sm:p-6 lg:p-8 rounded-2xl border"
            style={{ background: "#0c0d15", borderColor: "rgba(255,255,255,0.05)" }}
          >
            <p className={`text-orange-400 ${styles.sectionSubText}`}>
              Open to roles · freelance · research · hard problems
            </p>
            <h3 className={`${styles.sectionHeadText} text-[28px] sm:text-[32px] lg:text-[36px] mb-6`}>
              Contact.
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
              <label className="flex flex-col">
                <span className="font-medium text-zinc-300 mb-2 sm:mb-4 text-sm sm:text-base">Full name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-[#050505] border border-zinc-800 focus:border-orange-500 py-3 sm:py-4 px-4 sm:px-6 placeholder-zinc-500 rounded-lg outline-none font-medium text-sm sm:text-base w-full transition-colors duration-200"
                />
              </label>
              <label className="flex flex-col">
                <span className="font-medium text-zinc-300 mb-2 sm:mb-4 text-sm sm:text-base">Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-[#050505] border border-zinc-800 focus:border-orange-500 py-3 sm:py-4 px-4 sm:px-6 placeholder-zinc-500 rounded-lg outline-none font-medium text-sm sm:text-base w-full transition-colors duration-200"
                />
              </label>
              <label className="flex flex-col">
                <span className="font-medium text-zinc-300 mb-2 sm:mb-4 text-sm sm:text-base">Your Message</span>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="bg-[#050505] border border-zinc-800 focus:border-orange-500 py-3 sm:py-4 px-4 sm:px-6 placeholder-zinc-500 rounded-lg outline-none font-medium text-sm sm:text-base w-full resize-none transition-colors duration-200"
                />
              </label>

              <button
                ref={submitButtonRef}
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #d4512a, #e8622a)",
                  boxShadow: "0 4px 20px rgba(212,81,42,0.3)",
                  ...magneticStyle,
                }}
                className="py-3 px-8 rounded-full outline-none w-fit text-white font-bold transition-transform duration-300 hover:scale-105"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 my-auto h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] w-full"
          >
            <EarthCanvas />
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-20 md:mt-32 border-t border-zinc-900 pt-16">
          {[
            { label: "Email", href: "mailto:nm24cb015@nmamit.in", icon: "✉" },
            { label: "LinkedIn", href: "https://linkedin.com/in/calvin-dsouza", icon: "in" },
            { label: "GitHub", href: "https://github.com/Cal2-0", icon: "⌥" },
            { label: "Instagram", href: "https://www.instagram.com/_______.cal/", icon: "@" },
            { label: "Resume", href: "/assets/Calvin_Dsouza_Resume.docx", icon: "📄" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border bg-zinc-900"
              style={{ borderColor: "rgba(255,255,255,0.08)", color: "#a1a1aa" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(212,81,42,0.6)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#a1a1aa"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <span className="text-orange-400 font-mono">{link.icon}</span>
              <span className="font-medium text-sm tracking-wide">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Phone numbers */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-4 text-zinc-500 font-mono text-sm tracking-widest pb-10">
          <span>+971-505253861</span>
          <span className="hidden md:inline text-orange-500">|</span>
          <span>+91-8971192706</span>
        </div>

        {/* Minimal Footer integrated into Contact to match user request */}
        <footer className="pt-8 pb-10 border-t border-zinc-900 flex flex-col items-center justify-center text-zinc-600 text-xs">
          <p>&copy; {new Date().getFullYear()} MNC-Grade Systems & Security. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "");
