import { useEffect, useState } from "react";
import Title from "../../Components/Shared/Title";
import { useNavigate } from "react-router-dom";
import Aos from "aos";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
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
      <div className="grid grid-cols-3  gap-6 lg:gap-8 my-12">
        {projects?.map((project, i) => (
          <div
            data-aos="fade-up"
            data-aos-delay={i * 100}
            key={project.id}
            className="rounded backdrop-blur-xl shadow-xl shadow-purple-400/10 transition-all grid grid-cols-1 duration-300 hover:shadow-xl overflow-hidden border border-white/10"
          >
            <div>
              {/* Image with Hover Effect */}
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="overflow-hidden group"
              >
                <img
                  src={project.image}
                  loading="lazy"
                  alt="image"
                  className="aspect-video w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="flex justify-between flex-col">
              <div className="space-y-4 px-4">
                <h1
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  data-aos-anchor-placement="top-bottom"
                  className="text-lg md:text-xl font-bold py-4 text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-purple-700 conthrax"
                >
                  {project.name}
                </h1>
                <div className="space-y-6">
                  <h3
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    data-aos-anchor-placement="top-bottom"
                    className="text-sm lg:text-base font-medium text-purple-400/80"
                  >
                    Used Technologies:
                  </h3>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    data-aos-anchor-placement="top-bottom"
                    className="flex flex-wrap gap-2"
                  >
                    {project.stack.map((t, i) => (
                      <p
                        key={i}
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
                data-aos-anchor-placement="top-bottom"
                className="flex justify-between items-center mt-4 p-4"
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="bg-white/10 border border-white/20 py-1.5 px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10"
                >
                  <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-[120%] duration-700"></div>
                  <button className="py-2.5 active:scale-95 px-6 lg:px-8 rounded-lg  bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden">
                    <span className="relative z-10 text-xs">
                      {" "}
                      Live Demo
                    </span>
                    <span className="absolute top-0 w-1/4 h-full -left-1/2 bg-white/20 blur-sm group-hover:left-[120%] duration-1000 transition-all ease-out z-0"></span>
                  </button>
                </a>

                <button
                  onClick={() => navigate(`/details/${project.id}`)}
                  className="bg-white/10 border border-white/20 py-1.5 px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10"
                >
                  <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-[120%] duration-700"></div>
                  <button className="py-2.5 active:scale-95 px-6 lg:px-8 rounded-lg  bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden">
                    <span className="relative z-10 text-xs">
                      View Details
                    </span>
                    <span className="absolute top-0 w-1/4 h-full -left-1/2 bg-white/20 blur-sm group-hover:left-[120%] duration-1000 transition-all ease-out z-0"></span>
                  </button>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
