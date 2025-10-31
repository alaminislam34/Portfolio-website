import { useEffect, useState } from "react";
import Title from "../../Components/Shared/Title";
import CommonLink from "../../Components/CommonLink";
import ViewDetails from "../Details/ViewDetails";
import { ArrowUpRight } from "lucide-react";
import { XCircle } from "lucide-react";

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
            className="rounded-xl overflow-hidden bg-gray-900 border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-900/50 hover:-translate-y-1"
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
            <div className="flex flex-col justify-between h-full p-6">
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
              </div>

              {/* Buttons - Separated for better visual flow */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-800/50">
                {/* Left Button (Live Link) - Keep it clean and secondary */}
                {/* Assuming CommonLink handles its own styling, otherwise you'd update it here */}
                <CommonLink
                  link={project.liveLink}
                  btnText={"Preview Now"}
                  className="text-sm text-gray-400 hover:text-purple-400"
                />

                {/* Right Button (View Details) - The primary CTA, using a solid gradient for strong focus */}
                <button
                  onClick={() => setSelectedProject(project)}
                  // Professional Gradient Button with a clean hover state
                  className="relative overflow-hidden group rounded-lg text-white font-medium transition-all duration-300 transform active:scale-95"
                >
                  <div className="py-2 px-4 rounded-lg bg-gradient-to-r from-[#8827f7] via-[#9e02bd] to-[#9e02bd]">
                    <span className="relative z-10 text-sm flex items-center justify-center gap-1">
                      View Details
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </button>
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
