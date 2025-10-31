import { useEffect, useRef, useState } from "react";
import Title from "../../Components/Shared/Title";

// ==== ASSETS ====
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

// ==== DATA ====
const ROADMAP = [
  { step: 1, name: "HTML", img: html },
  { step: 2, name: "CSS", img: css },
  { step: 3, name: "JavaScript", img: js },
  { step: 4, name: "Tailwind CSS", img: tailwind },
  { step: 5, name: "React", img: reactImg },
  { step: 6, name: "Redux", img: redux },
  { step: 7, name: "Node.js", img: node },
  { step: 8, name: "Express.js", img: express },
  { step: 9, name: "MongoDB", img: mongodb },
  { step: 10, name: "Mongoose", img: mongoose },
  { step: 11, name: "Firebase", img: firebase },
  { step: 12, name: "Next.js", img: nextjs },
];

// simple in-view hook
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
        title="My Skills"
        des="Step-by-step roadmap of my web development journey."
      />

      {/* grid layout */}
      <div className="mt-10 mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {ROADMAP.map((item) => (
          <SkillCard key={item.step} item={item} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ item }) {
  const { ref, inView } = useInView();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`group relative overflow-hidden flex flex-row gap-4 justify-center items-center rounded-xl border border-white/10 
        bg-gradient-to-br from-[#120f1a] via-[#161329] to-[#0f0b17] 
        shadow-[0_6px_18px_rgba(0,0,0,0.35)] backdrop-blur-sm 
        p-4 transition-all duration-700
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {/* spotlight effect */}
      {isHover && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(180px circle at ${pos.x}px ${pos.y}px, rgba(255,45,255,0.25), transparent 70%)`,
            transition: "background 0.2s ease",
          }}
        />
      )}

      {/* content */}
      <div className="relative flex flex-row gap-4 items-center z-10">
        <div className="grid place-items-center">
          <img
            src={item.img}
            alt={item.name}
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
        </div>
        <h3 className="font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
          {item.name}
        </h3>
      </div>
    </div>
  );
}
