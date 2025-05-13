import { useEffect, useRef } from "react";
import gsap from "gsap";
import html from "../../assets/logo/html.png";
import css from "../../assets/logo/css.png";
import js from "../../assets/logo/js.png";
import mongodb from "../../assets/logo/mongodb.png";
import tailwind from "../../assets/logo/tailwind-css.png";
import react from "../../assets/logo/react.png";
import node from "../../assets/logo/node-js.png";
import firebase from "../../assets/logo/firebase.png";
import nextjs from "../../assets/logo/nextjs.png";
import express from "../../assets/logo/expressjs.png";
import Title from "../../Components/Shared/Title";

const skills = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: js },
  { name: "Tailwind", img: tailwind },
  { name: "React", img: react },
  { name: "MongoDB", img: mongodb },
  { name: "Firebase", img: firebase },
  { name: "Node.js", img: node },
  { name: "Next.js", img: nextjs },
  { name: "Express.js", img: express },
];

export default function Skill() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      x: "-100%",
      duration: 18,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div>
      <Title
        title={"My Skills"}
        des={
          "Passionate front-end developer specializing in React, Tailwind CSS, and JavaScript to build clean, interactive web apps."
        }
      />
      <div className="overflow-hidden relative">
        <div
          ref={containerRef}
          className="flex gap-6 lg:gap-12 items-center justify-start mt-12 py-12"
        >
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 200}
              data-aos-anchor-placement="top-bottom"
              className="px-8 py-6 cursor-pointer border-2 rounded-2xl bg-purple-950/5 border-purple-800/30 shadow-xl hover:shadow-purple-700/10 hover:scale-105 duration-500 group"
            >
              <div className="w-24 h-24 mx-auto relative">
                <img
                  className="w-full h-full object-cover p-4 lg:p-6"
                  src={skill.img}
                  alt={skill.name}
                />
                <div className="absolute inset-0 bg-purple-700/40 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
              </div>
              <h2 className="text-lg md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-purple-500 text-center">
                {skill.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
