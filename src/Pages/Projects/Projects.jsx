import { useEffect, useState } from "react";
import Title from "../../Components/Shared/Title";
import { FaGithub } from "react-icons/fa6";
import { ScanEye } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-[150%] h-[110%] bg-[#100D1F] blur-2xl border-8 border-[#100D1F]"></div>
      <Title
        title={"My Projects"}
        des={
          "Showcases my web development skills, including HTML, CSS, JavaScript, and React-based projects."
        }
      />

      <div className="max-w-[1440px] w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {projects?.map((project, i) => (
          <div
            // Container: Very subtle lift, focus on clean borders and shadowless depth
            data-aos="fade-up"
            data-aos-delay={i * 100}
            key={project.id}
            className="rounded-xl bg-gray-900 duration-500 transition-all ease-in-out flex justify-between flex-col group overflow-x-hidden"
          >
            <div className="w-12 h-12 absolute bottom-0 left-0 z-10 rounded-bl-3xl border-l-2 border-b-2 border-gray-900 group-hover:border-l-gray-700 group-hover:border-b-gray-700"></div>
            {/* Image: Softer transition, slight opacity change on hover */}
            <div className="overflow-hidden h-[45%] bg-gray-950">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                width="800"
                // Reduced scale, slower transition, and a slight darkening (opacity reduction) on the image itself
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-in-out 
                 group-hover:scale-105 opacity-50 group-hover:opacity-100"
              />
            </div>

            {/* Content Area: Clean padding and clear separation */}
            <div className="flex flex-col p-5 sm:p-6 space-y-4">
              {/* Project Name: Muted Gradient - less intense color stops */}
              <h1
                className="text-xl sm:text-2xl font-bold leading-tight 
                   text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-fuchsia-600 to-fuchsia-500 tracking-tight"
              >
                {project.name}
              </h1>

              {/* Stack Section */}
              <div className="space-y-3 pt-1">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t, idx) => (
                    <p
                      key={idx}
                      // Cleaner, soft border/background pill - less saturated color
                      className="px-3 py-0.5 rounded-lg text-xs font-medium 
                       text-gray-300 bg-gray-800 border border-gray-700 transition duration-200 
                       hover:bg-gray-700 hover:text-white"
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {/* Action Buttons: Simplified hover effects, more consistent primary/secondary look */}
            <div className="flex justify-between gap-3 pt-4 border-t border-gray-800 mt-auto p-4">
              <div></div>

              {/* GitHub Button (Secondary) - Subtle outline on hover */}
              <div className="border-2 border-transparent bg-gray-800 rounded-lg hover:ring-2 hover:ring-fuchsia-500 transition duration-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 transition duration-300 text-white active:scale-95"
                >
                  <FaGithub className="text-xl duration-500" />
                </a>
              </div>
            </div>

            <div className="absolute shadow-[-6px_6px_0px_5px_#100D1F] top-[82%] md:-top-[30%] rounded-bl-3xl left-0 w-6 h-6 bg-transparent"></div>

            <div className="absolute shadow-[-6px_6px_0px_5px_#100D1F] rounded-bl-3xl bottom-0 right-[32%] w-5 h-5 bg-transparent"></div>

            <div className="flex justify-start items-end absolute rounded-tr-3xl bottom-0 left-0 w-[65%] bg-[#100D1F] h-[14%]">
              <div className="ml-4 mb-4 w-[88%] md:w-[85%] lg:w-[87%] xl:w-[89%] g">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center py-2 px-9 text-sm font-semibold transition duration-300 rounded-lg 
                   text-white bg-gray-900 
                    active:scale-95 shadow-md shadow-indigo-900/50 hover:ring-2 ring-fuchsia-500"
                >
                  Preview
                  <ScanEye size={18} className="ml-2 text-sm duration-75 ease-out" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
