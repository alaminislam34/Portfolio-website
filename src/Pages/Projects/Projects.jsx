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
            // Container: Very subtle lift, focus on clean borders and shadowless depth
            data-aos="fade-up"
            data-aos-delay={i * 100}
            key={project.id}
            className="rounded-xl overflow-hidden bg-gray-900 duration-500 shadow-lg shadow-black/40 hover:shadow-xl ring-1 ring-gray-800 transition-all ease-in-out"
          >
            {/* Image: Softer transition, slight opacity change on hover */}
            <div className="overflow-hidden bg-gray-950">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                width="800"
                height="450"
                // Reduced scale, slower transition, and a slight darkening (opacity reduction) on the image itself
                className="aspect-video w-full object-cover transition-transform duration-700 ease-in-out 
                 group-hover:scale-105 opacity-90 group-hover:opacity-100"
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

              {/* Action Buttons: Simplified hover effects, more consistent primary/secondary look */}
              <div className="flex justify-between gap-3 pt-4 border-t border-gray-800 mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-2 px-5 text-sm font-semibold transition duration-300 rounded-lg 
                   text-white bg-gradient-to-r from-indigo-600 to-fuchsia-400 
                    active:scale-95 shadow-md shadow-indigo-900/50 hover:ring-2 ring-fuchsia-500 group"
                >
                  Preview
                  <ScanEye className="ml-2 text-2xl group-hover:scale-125 duration-75 ease-out group-hover:rotate-2" />
                </a>

                {/* GitHub Button (Secondary) - Subtle outline on hover */}
                <div className="border-2 border-transparent bg-gray-800 rounded-lg hover:ring-2 hover:ring-fuchsia-500 transition duration-300 group">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 transition duration-300 text-white active:scale-95"
                  >
                    <FaGithub className="text-xl group-hover:scale-125 group-hover:rotate-6 duration-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
