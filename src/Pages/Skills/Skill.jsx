import React from "react";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const SKILLS = [
  {
    id: "01",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "EXPERT",
    experience: "2 Years",
    className: "lg:col-span-2",
  },
  {
    id: "02",
    name: "Next.js",
    icon: SiNextdotjs,
    level: "EXPERT",
    experience: "2 Years",
  },
  {
    id: "03",
    name: "React",
    icon: FaReact,
    level: "EXPERT",
    experience: "2 Years",
    className: "lg:row-span-2 lg:min-h-[420px]",
    featured: true,
  },
  {
    id: "04",
    name: "Node.js",
    icon: FaNodeJs,
    level: "ADVANCED",
    experience: "1.5 Years",
  },
  {
    id: "05",
    name: "Express.js",
    icon: SiExpress,
    level: "ADVANCED",
    experience: "1.5 Years",
  },
  {
    id: "06",
    name: "MongoDB",
    icon: SiMongodb,
    level: "PROFICIENT",
    experience: "1.5 Years",
    className: "lg:col-span-2",
  },
  {
    id: "07",
    name: "Mongoose",
    icon: SiMongoose,
    level: "ADVANCED",
    experience: "1.5 Years",
  },
  {
    id: "08",
    name: "PostgreSQL",
    icon: SiPostgresql,
    level: "PROFICIENT",
    experience: "1 Years",
  },
  {
    id: "09",
    name: "Prisma",
    icon: SiPrisma,
    level: "ADVANCED",
    experience: "1 Years",
  },
  {
    id: "10",
    name: "Docker",
    icon: FaDocker,
    level: "ADVANCED",
    experience: "1 Years",
    className: "lg:col-span-2",
  },
  {
    id: "11",
    name: "AWS",
    icon: FaAws,
    level: "LEARNING",
    experience: "1 Years",
  },
];

export default function SkillsMeshSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:50px_50px]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-violet-300">
              Tech Stack
            </span>

            <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Skills &
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Technologies
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-400">
            Modern technologies and tools I use to build scalable and premium
            digital experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 auto-rows-[200px]">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.id}
                className={`group relative overflow-hidden rounded-[28px] border border-violet-500/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-[0_0_45px_rgba(139,92,246,0.16)] ${skill.className || ""}`}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-fuchsia-500/[0.04]" />

                {/* Inner Border */}
                <div className="absolute inset-[1px] rounded-[27px] border border-white/[0.04]" />

                {/* Hover Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div
                  className={`relative z-10 flex h-full flex-col ${
                    skill.featured
                      ? "items-center justify-center text-center"
                      : "justify-between"
                  }`}
                >
                  {/* Main */}
                  <div
                    className={
                      skill.featured ? "flex flex-col items-center" : ""
                    }
                  >
                    <div
                      className={`mb-4 flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:scale-110 group-hover:border-violet-400/30 group-hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]
                      
                      ${skill.featured ? "h-24 w-24" : "h-14 w-14"}`}
                    >
                      <Icon
                        className={`text-white transition-transform duration-500 group-hover:rotate-6
                        
                        ${skill.featured ? "text-5xl" : "text-3xl"}`}
                      />
                    </div>

                    <h3
                      className={`font-black tracking-tight text-white
                      
                      ${skill.featured ? "text-4xl" : "text-xl sm:text-2xl"}`}
                    >
                      {skill.name}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-400">
                      {skill.experience} Experience
                    </p>
                  </div>
                </div>

                {/* Shine */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
