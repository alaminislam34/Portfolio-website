import { useEffect, useRef, useState } from "react";
import Title from "../../Components/Shared/Title";

// ==== ASSETS (keep your paths) ====
import html from "../../assets/logo/html.jpg";
import css from "../../assets/logo/css.jpg";
import js from "../../assets/logo/js.jpg";
import tailwind from "../../assets/logo/tailwind-css.jpg";
import reactImg from "../../assets/logo/react.jpg";
import redux from "../../assets/logo/redux.png";
import node from "../../assets/logo/node-js.jpg";
import express from "../../assets/logo/expressjs.jpg";
import mongodb from "../../assets/logo/mongodb.jpg";
import mongoose from "../../assets/logo/mongoose.png";
import firebase from "../../assets/logo/firebase.jpg";
import nextjs from "../../assets/logo/nextjs.jpg";

// ==== DATA (proper learning order) ====
const ROADMAP = [
  { step: 1, name: "HTML", img: html, sum: "Semantic structure & accessible markup." },
  { step: 2, name: "CSS", img: css, sum: "Layout, responsive design, animations." },
  { step: 3, name: "JavaScript", img: js, sum: "Language fundamentals & DOM." },
  { step: 4, name: "Tailwind CSS", img: tailwind, sum: "Utility-first styling at scale." },
  { step: 5, name: "React", img: reactImg, sum: "Components, hooks, state & effects." },
  { step: 6, name: "Redux", img: redux, sum: "Global state & predictable flows." },
  { step: 7, name: "Node.js", img: node, sum: "Runtime, modules, async patterns." },
  { step: 8, name: "Express.js", img: express, sum: "API routing & middleware." },
  { step: 9, name: "MongoDB", img: mongodb, sum: "NoSQL modeling & queries." },
  { step: 10, name: "Mongoose", img: mongoose, sum: "Schemas & validation." },
  { step: 11, name: "Firebase", img: firebase, sum: "Auth, hosting & quick backend." },
  { step: 12, name: "Next.js", img: nextjs, sum: "SSR/SSG, routing & performance." },
];

// simple in-view hook (no extra libs)
function useInView(options = { threshold: 0.2 }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return { ref, inView };
}

export default function SkillsRoadmap() {
  return (
    <section>
      <Title
        title="My Skills Roadmap"
        des="A clean, step-by-step path from fundamentals to full-stack. Hover any step to preview."
      />

      <div className="relative mx-auto mt-12 w-full max-w-6xl px-2 sm:px-4">
        {/* glowing timeline spine */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-[4px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#a78bfa] via-[#7c3aed] to-[#60a5fa] opacity-70" />
          <div className="absolute -inset-[10px] rounded-full blur-2xl bg-gradient-to-b from-[#a78bfa44] via-[#7c3aed33] to-[#60a5fa33]" />
          {/* subtle animated pulse moving down */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[6px] h-16 rounded-full bg-white/40 animate-[slideDown_2.2s_linear_infinite]" />
        </div>

        {/* list */}
        <ul className="relative space-y-10 sm:space-y-12">
          {ROADMAP.map((item, idx) => (
            <TimelineItem key={item.step} item={item} index={idx} />
          ))}
        </ul>
      </div>

      {/* tiny keyframes (works fine with Tailwind) */}
      <style>{`
        @keyframes slideDown {
          0% { top: 0%; opacity: .0 }
          10% { opacity: .6 }
          100% { top: 100%; opacity: 0 }
        }
      `}</style>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const alignRight = index % 2 === 0; // alternate sides
  const { ref, inView } = useInView();

  return (
    <li
      ref={ref}
      className={`relative flex ${alignRight ? "justify-start" : "justify-end"}`}
    >
      {/* connector dot on the spine */}
      <span
        className="absolute left-1/2 top-8 z-10 -translate-x-1/2 h-4 w-4 rounded-full bg-white/20 border border-white/30"
        aria-hidden
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] opacity-80"></span>
        <span className="absolute -inset-2 rounded-full blur-md bg-[#a78bfa55]"></span>
      </span>

      {/* card */}
      <div
        className={`
          w-full sm:w-[calc(50%-2.25rem)] 
          ${alignRight ? "pl-8 sm:pl-0 sm:pr-8" : "pr-8 sm:pr-0 sm:pl-8"}
          transition
        `}
      >
        <div
          className={`
            group relative overflow-hidden rounded-2xl border border-white/10 
            bg-gradient-to-br from-[#120f1a] via-[#161329] to-[#0f0b17] 
            shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            transition-all duration-700
            ${alignRight ? "origin-right" : "origin-left"}
          `}
        >
          {/* soft gradient edge glow */}
          <div className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-white/10" />
          <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(200px_120px_at_var(--x,70%)_50%,rgba(124,58,237,0.18),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* content */}
          <div className="flex items-center gap-4 p-4 sm:p-5">
            {/* icon bubble */}
            <div className="relative shrink-0">
              <div className="size-14 sm:size-[68px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-inner shadow-black/30 overflow-hidden grid place-items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-11 h-11 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <span className="absolute -top-2 -left-2 text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white shadow">
                #{item.step}
              </span>
            </div>

            {/* text */}
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
                {item.name}
              </h3>
              <p className="mt-1 text-[12px] sm:text-sm text-white/70 leading-relaxed">
                {item.sum}
              </p>

              {/* mini tags that hint the next move */}
              <div className="mt-3 flex flex-wrap gap-2">
                {getTags(item.name).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] sm:text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* underline accent */}
          <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent opacity-40 group-hover:opacity-80 transition-opacity"></div>
        </div>
      </div>
    </li>
  );
}

// optional: dynamic tag hints per step (just for a smarter look)
function getTags(name) {
  switch (name) {
    case "HTML":
      return ["Semantic", "SEO", "Accessibility"];
    case "CSS":
      return ["Flex/Grid", "Responsive", "Transitions"];
    case "JavaScript":
      return ["ES6+", "Async", "DOM"];
    case "Tailwind CSS":
      return ["Utilities", "Design System"];
    case "React":
      return ["Hooks", "SPA", "Routing"];
    case "Redux":
      return ["Store", "Slices", "RTK"];
    case "Node.js":
      return ["FS/Path", "Events", "Async IO"];
    case "Express.js":
      return ["REST", "Middleware", "Auth"];
    case "MongoDB":
      return ["Collections", "Indexes"];
    case "Mongoose":
      return ["Schemas", "Validation"];
    case "Firebase":
      return ["Auth", "Storage", "Hosting"];
    case "Next.js":
      return ["SSR/SSG", "App Router"];
    default:
      return [];
  }
}


