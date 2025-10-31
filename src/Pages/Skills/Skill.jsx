import React, { useState } from "react";
import Title from "../../Components/Shared/Title";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // You'll need to install react-icons

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



 const ALL_SKILLS = [

  
  {
    name: "HTML",
    img: html,
    sum: "Semantic structure & accessible markup for web content.",
    level: "Advanced",
  },
  {
    name: "CSS",
    img: css,
    sum: "Styling with modern techniques like Flexbox & Grid for responsive designs.",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    img: js,
    sum: "Core language fundamentals, ES6+, and DOM manipulation.",
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    img: tailwind,
    sum: "Utility-first CSS framework for rapid UI development.",
    level: "Advanced",
  },
  {
    name: "React",
    img: reactImg,
    sum: "Building interactive UIs with components, hooks, and state management.",
    level: "Advanced",
  },
  {
    name: "Redux",
    img: redux,
    sum: "Predictable state container for JavaScript apps, often with Redux Toolkit.",
    level: "Intermediate",
  },
  {
    name: "Node.js",
    img: node,
    sum: "JavaScript runtime for building scalable server-side applications.",
    level: "Intermediate",
  },
  {
    name: "Express.js",
    img: express,
    sum: "Minimalist web framework for Node.js to build robust APIs.",
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    img: mongodb,
    sum: "NoSQL database for flexible, document-based data storage.",
    level: "Intermediate",
  },
  {
    name: "Mongoose",
    img: mongoose,
    sum: "MongoDB object data modeling (ODM) for Node.js.",
    level: "Intermediate",
  },
  {
    name: "Firebase",
    img: firebase,
    sum: "Google's mobile and web application development platform.",
    level: "Intermediate",
  },
  {
    name: "Next.js",
    img: nextjs,
    sum: "React framework for production-grade applications with SSR/SSG.",
    level: "Intermediate",
  },
];

export default function OrbitalSkillsSection() {
  const [activeSkill, setActiveSkill] = useState(ALL_SKILLS[0]);
  const [rotationAngle, setRotationAngle] = useState(0);

  const numSkills = ALL_SKILLS.length;
  const angleIncrement = 360 / numSkills;

  // Change active skill based on click direction
  const handleRotate = (direction) => {
    let newIndex;
    let newAngle;

    // Determine the next skill based on the current active skill's index
    const currentIndex = ALL_SKILLS.findIndex(
      (skill) => skill.name === activeSkill.name
    );

    if (direction === "left") {
      newIndex = (currentIndex - 1 + numSkills) % numSkills;
    } else {
      newIndex = (currentIndex + 1) % numSkills;
    }

    // Update state to the new skill and calculate the new rotation angle
    setActiveSkill(ALL_SKILLS[newIndex]);

    // Smoothly transition the angle to place the new active skill at the top center
    // This is more complex than a simple +/- and ensures a clean, predictable rotation
    const targetAngle = -newIndex * angleIncrement + 90;
    setRotationAngle(targetAngle);
  };

  // To handle hover for individual skill display without affecting the main rotation
  const handleSkillHover = (skill) => {
    setActiveSkill(skill);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-[#2a0c4f] via-black to-black opacity-30"></div>

      <Title
        title="My Skills Arsenal"
        des="Explore the technologies I wield to craft robust and engaging web experiences. Click the arrows to rotate!"
        className="relative z-10"
      />

      <div className="relative mx-auto mt-16 flex h-[400px] w-full max-w-7xl items-center justify-center lg:h-[700px]">
        {/* Central Display Card */}
        <div className="relative z-20 flex h-[280px] w-[320px] flex-col items-center justify-center rounded-3xl border border-purple-700/30 bg-gradient-to-br from-gray-900/80 to-black/80 p-6 text-center shadow-lg backdrop-blur-md md:h-[300px] md:w-[380px]">
          <div className="absolute -inset-px rounded-3xl ring-1 ring-purple-500/10" />
          <img
            src={activeSkill.img}
            alt={activeSkill.name}
            className="mb-4 h-20 w-20 rounded-full object-contain p-2 bg-gray-800 border border-purple-500/20 shadow-xl"
          />
          <h3 className="mb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
            {activeSkill.name}
          </h3>
          <p className="text-sm text-gray-300 mb-2">{activeSkill.sum}</p>
          <span className="inline-block rounded-full bg-purple-800/30 px-3 py-1 text-xs text-purple-200">
            {activeSkill.level}
          </span>
        </div>

        {/* Orbital Path */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out" // Added transition
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        >
          {ALL_SKILLS.map((skill, index) => {
            const angle = index * angleIncrement;
            const radius = window.innerWidth < 768 ? 160 : 250;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={skill.name}
                className="absolute"
                style={{
                  transform: `translate(${x}px, ${y}px) rotate(-${rotationAngle}deg)`,
                }}
                onMouseEnter={() => handleSkillHover(skill)}
              >
                <div
                  className={`group relative flex size-16 cursor-pointer items-center justify-center rounded-full border-2 border-transparent bg-gray-800 p-2 shadow-md transition-all duration-200 hover:scale-110 hover:border-purple-500/50 hover:bg-purple-900/30 ${
                    activeSkill.name === skill.name
                      ? "border-purple-500/50 ring-2 ring-purple-500 bg-purple-900/30 shadow-purple-500/40"
                      : ""
                  }`}
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="size-full object-contain"
                  />
                  {activeSkill.name === skill.name && (
                    <div className="absolute inset-0 rounded-full blur-sm bg-purple-500/30 animate-pulse-slow"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Left and Right Buttons */}
        <div className="absolute z-30 flex w-full max-w-lg justify-between px-4 sm:px-8">
          <button
            className="group size-12 rounded-full bg-gray-800/50 text-white backdrop-blur-sm transition-all duration-300 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={() => handleRotate("left")}
          >
            <FaChevronLeft className="mx-auto text-xl transition-transform duration-300 group-hover:-translate-x-1" />
          </button>
          <button
            className="group size-12 rounded-full bg-gray-800/50 text-white backdrop-blur-sm transition-all duration-300 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={() => handleRotate("right")}
          >
            <FaChevronRight className="mx-auto text-xl transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}