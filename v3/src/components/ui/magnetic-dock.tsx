"use client";

import React, {
  useState,
  useRef,
  useContext,
  createContext,
  useEffect
} from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring
} from "framer-motion";
import { GithubIcon, LinkedinIcon, InstagramIcon, MailIcon } from "lucide-react";

// shared mouse position
const MouseContext = createContext({ x: 0, y: 0 });

// individual icon with magnetic effect
function DockIcon({ icon, label, link }: { icon: React.ReactNode, label: string, link: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mouse = useContext(MouseContext);
  const distance = useMotionValue(Infinity);

  useEffect(() => {
    if (!ref.current || mouse.x === 0) {
      distance.set(Infinity);
      return;
    }
    const iconRect = ref.current.getBoundingClientRect();
    const containerRect = ref.current.parentElement!.getBoundingClientRect();
    const iconCenterX = iconRect.left + iconRect.width / 2;
    const mouseXAbsolute = containerRect.left + mouse.x;
    distance.set(Math.abs(mouseXAbsolute - iconCenterX));
  }, [mouse, distance]);

  const width = useTransform(distance, [0, 100], [60, 48]);
  const springW = useSpring(width, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      style={{ width: springW }}
      className="aspect-square rounded-full bg-zinc-800 border border-zinc-700 grid place-items-center text-zinc-300 hover:text-cyan-400 hover:bg-zinc-700 transition-colors cursor-pointer relative group shadow-xl"
    >
      {icon}

      {/* Tooltip */}
      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded border border-zinc-800 font-medium">
        {label}
      </div>
    </motion.a>
  );
}

// main dock
export default function MagneticDock({ className }: { className?: string }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = e;
    const { left } = currentTarget.getBoundingClientRect();
    setPos({ x: clientX - left, y: 0 });
  };

  const onMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <MouseContext.Provider value={pos}>
      <div className={`relative w-full flex flex-col items-center justify-center ${className || ''}`}>


        <div
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="flex h-20 items-end gap-3 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 px-4 pb-3 backdrop-blur-xl relative z-10"
        >
          <DockIcon icon={<MailIcon className="w-6 h-6" />} label="Email" link="mailto:nm24cb015@gmail.com" />
          <DockIcon icon={<LinkedinIcon className="w-6 h-6" />} label="LinkedIn" link="https://linkedin.com/in/calvin-dsouza" />
          <DockIcon icon={<GithubIcon className="w-6 h-6" />} label="GitHub" link="https://github.com/Cal2-0" />
          <DockIcon icon={<InstagramIcon className="w-6 h-6" />} label="Instagram" link="https://www.instagram.com/_______.cal/" />
        </div>
      </div>
    </MouseContext.Provider>
  );
}
