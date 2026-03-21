// ExpandingCards.jsx — ported from Resume-main v3 ExpandingCards component
// Used for the Projects and Research sections as a horizontal expanding carousel
import React, { useState, useEffect, useMemo } from "react";

export function ExpandingCards({ items, defaultActiveIndex = 0, className }) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridStyle = useMemo(() => {
    if (activeIndex === null) return {};
    if (isDesktop) {
      const columns = items.map((_, i) => (i === activeIndex ? "5fr" : "1fr")).join(" ");
      return { gridTemplateColumns: columns };
    } else {
      const rows = items.map((_, i) => (i === activeIndex ? "5fr" : "1fr")).join(" ");
      return { gridTemplateRows: rows };
    }
  }, [activeIndex, items, isDesktop]);

  return (
    <ul
      className={`w-full max-w-6xl gap-2 grid h-[520px] md:h-[440px] transition-[grid-template-columns,grid-template-rows] duration-500 ease-out ${className || ""}`}
      style={{
        ...gridStyle,
        ...(isDesktop ? { gridTemplateRows: "1fr" } : { gridTemplateColumns: "1fr" }),
      }}
    >
      {items.map((item, index) => (
        <li
          key={item.id}
          className="group relative cursor-pointer overflow-hidden rounded-xl border bg-zinc-900 border-zinc-800 shadow-sm md:min-w-[70px] min-h-0 min-w-0"
          onMouseEnter={() => setActiveIndex(index)}
          onClick={() => setActiveIndex(index)}
          data-active={activeIndex === index}
          style={{ outline: "none" }}
        >
          <img
            src={item.imgSrc}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out"
            style={{
              transform: activeIndex === index ? "scale(1)" : "scale(1.08)",
              filter: activeIndex === index ? "grayscale(0%)" : "grayscale(60%)",
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          {/* Orange glow when active */}
          {activeIndex === index && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: "inset 0 0 60px rgba(212,81,42,0.15)" }}
            />
          )}

          <article className="absolute inset-0 flex flex-col justify-end gap-2 p-4 md:p-5">
            {/* Rotated title shown when collapsed (desktop) */}
            <h3
              className="hidden origin-left text-sm font-light uppercase tracking-wider text-white/70 md:block whitespace-nowrap"
              style={{
                transform: "rotate(90deg) translateX(-100%)",
                transformOrigin: "left bottom",
                opacity: activeIndex === index ? 0 : 1,
                transition: "opacity 0.3s",
              }}
            >
              {item.title}
            </h3>

            {/* Expanded content */}
            <div
              style={{
                opacity: activeIndex === index ? 1 : 0,
                transition: "opacity 0.3s 0.1s",
              }}
            >
              {item.icon && (
                <div className="text-orange-400 mb-2">{item.icon}</div>
              )}
              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="w-full max-w-xs text-sm text-zinc-300 leading-relaxed mb-3">
                {item.description}
              </p>
              {item.tags && (
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs font-mono border border-orange-500/30 text-orange-400"
                      style={{ background: "rgba(212,81,42,0.08)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {(item.github || item.live) && (
                <div className="flex gap-3 mt-3">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      ⌥ GitHub
                    </a>
                  )}
                  {item.live && (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      → Live
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default ExpandingCards;
