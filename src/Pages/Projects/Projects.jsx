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

    Aos.init({
      offset: 200,
    });
  }, []);

  return (
    <div>
      <Title
        title={"My Projects"}
        des={
          "Showcases my web development skills, including HTML, CSS, JavaScript, and React-based projects."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 my-12">
        {projects.map((project, i) => (
          <div
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-anchor-placement="top-bottom"
            key={project.id}
            className="rounded-2xl shadow-xl shadow-fuchsia-200/10 transition-all flex flex-col justify-between duration-300 hover:shadow-xl overflow-hidden"
          >
            <div>
              {/* Image with Hover Effect */}
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100}
                data-aos-anchor-placement="top-bottom"
                className="overflow-hidden group"
              >
                <img
                  src={project.image}
                  alt="image"
                  className="aspect-video w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-4">
                <h1
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  data-aos-anchor-placement="top-bottom"
                  className="text-2xl lg:text-3xl font-bold py-4 text-transparent bg-clip-text bg-gradient-to-t from-fuchsia-500 to-fuchsia-700"
                >
                  {project.name}
                </h1>
                <div className="space-y-6">
                  <h3
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    data-aos-anchor-placement="top-bottom"
                    className="text-sm lg:text-base font-medium text-fuchsia-400/80"
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
                className="border border-[#66426b] px-3 lg:px-4 py-2 rounded-lg relative z-20 group hover:shadow-lg shadow-[#3b1441]/40 bg-gradient-to-tr from-[#1c0922] to-[#7e057f] overflow-hidden flex items-center gap-2 text-[#e2c9e8] group-hover:text-white transition duration-300 cursor-pointer"
              >
                Live Demo
                <span className="w-40 h-20 left-1/2 -translate-x-1/2 bg-gradient-to-bl from-[#1d0c1f] via-[#550a5f] to-[#920597] block absolute -bottom-24 group-hover:-bottom-4 duration-700 shadow-lg shadow-[#501858]/30 z-[-1] border border-[#39133f] rotate-6 blur-sm"></span>
              </a>
              <button
                onClick={() => navigate(`/details/${project.id}`)}
                className="border border-[#66426b] px-3 lg:px-4 py-2 rounded-lg relative z-20 group hover:shadow-lg shadow-[#3b1441]/40 bg-gradient-to-tr from-[#1c0922] to-[#7e057f] overflow-hidden flex items-center gap-2 text-[#e2c9e8] group-hover:text-white transition duration-300 cursor-pointer"
              >
                View Details
                <span className="w-40 h-20 left-1/2 -translate-x-1/2 bg-gradient-to-bl from-[#1d0c1f] via-[#550a5f] to-[#920597] block absolute -bottom-24 group-hover:-bottom-4 duration-700 shadow-lg shadow-[#501858]/30 z-[-1] border border-[#39133f] rotate-6 blur-sm"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
