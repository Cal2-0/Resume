"use client";

interface PageNumberProps {
  number: number;
  align?: "left" | "right";
}

export default function PageNumber({ number, align = "left" }: PageNumberProps) {
  return (
    <div
      className={`absolute bottom-8 ${
        align === "left" ? "left-8" : "right-8"
      } font-mono-editorial text-xs tracking-[0.3em] opacity-40 select-none`}
    >
      — {String(number).padStart(2, "0")} —
    </div>
  );
}
