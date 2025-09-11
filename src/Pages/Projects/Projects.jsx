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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 my-12">
        {projects?.map((project, i) => (
          <div
            data-aos="fade-up"
            data-aos-delay={i * 100}
            key={project.id}
            className="rounded backdrop-blur-xl shadow-xl shadow-purple-400/10 transition-all grid grid-cols-1 duration-300 hover:shadow-xl overflow-hidden border border-white/10"
          >
            {/* Image */}
            <div
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="overflow-hidden group"
            >
              <img
                src={project.image}
                loading="lazy"
                alt={project.name}
                className="aspect-video w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex justify-between flex-col">
              <div className="space-y-4 px-4">
                <h1
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="text-lg md:text-xl font-bold py-4 text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-purple-700 conthrax"
                >
                  {project.name}
                </h1>

                {/* Stack */}
                <div className="space-y-6">
                  <h3
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="text-sm lg:text-base font-medium text-purple-400/80"
                  >
                    Used Technologies:
                  </h3>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="flex flex-wrap gap-2"
                  >
                    {project.stack.map((t, idx) => (
                      <p
                        key={idx}
                        className="px-2 py-2 rounded-lg border border-gray-300/10 text-xs text-white/70 bg-fuchsia-800/5 backdrop-blur-sm"
                      >
                        {t}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="flex justify-between items-center mt-4 p-4"
              >
                <CommonLink link={project.liveLink} btnText={"Preview Now"} />
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-white/10 border border-white/20 py-1.5 px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10"
                >
                  <div>
                    <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-[120%] duration-700"></div>
                    <div className="py-2.5 active:scale-95 px-6 lg:px-8 rounded-lg  bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden">
                      <span className="relative z-10 text-xs flex flex-row gap-2 items-center justify-center">
                        View Details
                        <ArrowUpRight className="group-hover:scale-110 duration-500" />
                      </span>
                      <span className="absolute top-0 w-1/4 h-full -left-1/2 bg-white/20 blur-sm group-hover:left-[120%] duration-1000 transition-all ease-out z-0"></span>
                    </div>
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
              <XCircle/>
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
