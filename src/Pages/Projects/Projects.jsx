import { useEffect, useState } from "react";
import Title from "../../Components/Shared/Title";
import { FaGithub } from "react-icons/fa6";
import { ScanEye, SquareArrowOutUpRight } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="relative">
      <Title
        title={"My Projects"}
        des={
          "Showcases my web development skills, including HTML, CSS, JavaScript, and React-based projects."
        }
      />

      <div className="max-w-[1440px] w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {projects?.map((project, i) => (
          <div
            // Container: Focus on clean borders and standard elevation
            data-aos="fade-up"
            data-aos-delay={i * 100}
            key={project.id}
            // Removed custom corner shadows and absolute positioning elements for a cleaner layout
            className="rounded-xl duration-500 transition-all ease-in-out flex justify-between flex-col group overflow-hidden
             shadow-xl shadow-gray-950/50 backdrop-blur-2xl border border-white/10 bg-gray-600/20"
          >
            {/* Image: Standardized, softer hover effect */}
            <div className="overflow-hidden h-[300px] bg-gray-950">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                width="800"
                // Image scale and opacity settings
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-in-out 
                 group-hover:scale-105 opacity-50 group-hover:opacity-100"
              />
            </div>

            {/* Content Area: Clean padding and clear separation */}
            <div className="flex flex-col p-5 sm:p-6 space-y-4">
              {/* Project Name: Retaining the gradient for visual interest */}
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
                      // Standard professional pill style
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

            {/* Action Buttons: Unified, professional bar at the bottom */}
            <div className="flex justify-between gap-3 pt-4 border-t border-gray-800 mt-auto p-4">
              {/* Live Preview Button (Primary Button) - Left side, using an appealing accent color */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 transition duration-300 rounded-lg text-white 
                 bg-gray-800 active:scale-[0.98] hover:scale-105 border border-gray-700 hover:border-fuchsia-500"
              >
                {/* Assuming ScanEye is an icon component */}
                <SquareArrowOutUpRight size={18} className="text-sm" />
              </a>

              {/* GitHub Button (Secondary Button) - Right side, using a muted background for secondary action */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 transition duration-300 rounded-lg text-white 
                 bg-gray-800 active:scale-[0.98] hover:scale-105 border border-gray-700 hover:border-fuchsia-500"
              >
                {/* Assuming FaGithub is an icon component */}
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
