import { useEffect, useState } from "react";
import Title from "../../Components/Shared/Title";
import CommonLink from "../../Components/CommonLink";
import ViewDetails from "../Details/ViewDetails";
import { ArrowUpRight } from "lucide-react";
import { XCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { ScanEye } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <Title
        title={"My Projects"}
        des={
          "Showcases my web development skills, including HTML, CSS, JavaScript, and React-based projects."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {projects?.map((project, i) => (
          <div
            data-aos="fade-up"
            data-aos-delay={i * 100}
            key={project.id}
            // Simplified Card Style: Clean dark background, subtle border, and a professional hover lift.
            className="rounded-xl overflow-hidden bg-gray-900 border border-gray-800 duration-500 hover:shadow-2xl hover:shadow-fuchsia-900/50 hover:-translate-y-1"
          >
            {/* Image - Clean overflow and professional scale on hover */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                width="800"
                height="450"
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between h-full p-6 z-20">
              <div className="space-y-4">
                {/* Project Name - Using the gradient for the main title for emphasis */}
                <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8827f7] via-[#9e02bd] to-[#9e02bd] tracking-tight">
                  {project.name}
                </h1>

                {/* Stack */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-400">
                    Technologies:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t, idx) => (
                      <p
                        key={idx}
                        // Clean, subtle pill badge
                        className="px-3 py-1 rounded-full text-xs font-medium text-purple-200 bg-purple-900/30 border border-purple-900"
                      >
                        {t}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex justify-start gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* Live Demo Button (Gradient Primary) */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center py-2 px-6 text-white transition duration-300 rounded-full 
               bg-gradient-to-r from-[#294deb] via-[#8251f3] to-[#d33ae7] 
               hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 active:scale-95 overflow-hidden"
                  >
                    {/* Icon with Hover Animation (Slight Jiggle) */}
                    Preview{" "}
                    <ScanEye className="transition duration-300 group-hover:rotate-6 group-hover:scale-125 ml-2 " />
                    {/* Optional: Add a sweeping shine effect (complex but stylish) */}
                    <span className="absolute top-0 opacity-0 group-hover:opacity-100 w-1/4 h-full -left-[200%] group-hover:bg-white/30 group-hover:blur-sm group-hover:left-[150%] duration-700 transition-all ease-out z-0"></span>
                  </a>

                  {/* GitHub Button (Secondary) */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center p-3 transition duration-300 rounded-full 
               text-gray-700 bg-gray-100 hover:bg-gray-200 
               dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600
               hover:scale-105 hover:shadow-md active:scale-95"
                  >
                    {/* Icon with Hover Animation (Pulse/Bounce) */}
                    <FaGithub className="w-4 h-4 transition duration-300 group-hover:translate-y-[-2px]" />

                    {/* Optional: Add a subtle border glow/ring on hover */}
                    <div className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-indigo-500 transition duration-300 pointer-events-none"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black/40 backdrop-blur-xl flex items-center justify-center z-50">
          <div className="relative p-3 md:p-6 border rounded-xl border-white/40">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-1 right-1 z-20 px-2 py-2 bg-red-200 border border-red-300 text-red-600 rounded-xl"
            >
              <XCircle />
            </button>
            <div className="rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
              <ViewDetails
                id={selectedProject.id}
                image={selectedProject.image}
                name={selectedProject.name}
                stack={selectedProject.stack}
                description={selectedProject.description}
                liveLink={selectedProject.liveLink}
                github={selectedProject.github}
                challenges={selectedProject.challenges}
                improvements={selectedProject.improvements}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
