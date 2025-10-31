import { useEffect, useRef, useState, useCallback } from "react";
import PropTypes from "prop-types";

// Mock components - replace with your actual components
const Title = ({ title, des }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
    <p className="text-gray-300 max-w-2xl mx-auto">{des}</p>
  </div>
);

const CommonButton = ({ navigateLink, btnText }) => (
  <a
    href={navigateLink}
    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
  >
    {btnText}
  </a>
);

const CommonLink = ({ link, btnText }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-500 hover:text-white transition-colors text-sm"
  >
    {btnText}
  </a>
);

// Custom hook for intersection observation
function useInView(options = { threshold: 0.1 }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    io.observe(el);

    return () => {
      io.unobserve(el);
      io.disconnect();
    };
  }, [options]);

  return { ref, inView };
}

// ProjectCard component
const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const cardRef = useRef(null);

  // Use callback to memoize the function and prevent unnecessary re-renders
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHover(true), []);
  const handleMouseLeave = useCallback(() => setIsHover(false), []);

  return (
    <div
      ref={(node) => {
        // Set both refs for the useInView hook and our own use
        ref.current = node;
        cardRef.current = node;
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-xl shadow-2xl transition-all duration-500 grid grid-cols-1 border border-gray-700 overflow-hidden group
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      role="article"
      aria-label={`Project: ${project.name}`}
      style={{
        transform: isHover
          ? "translateY(-8px) scale(1.02)"
          : "translateY(0) scale(1)",
      }}
    >
      {/* Gradient overlay effect */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(139, 92, 246, 0.15) 0%, transparent 80%)`,
        }}
      />

      {/* Border glow effect */}
      <div
        className="absolute inset-0 pointer-events-none z-20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `0 0 30px 5px rgba(139, 92, 246, 0.5)`,
          clipPath: `circle(200px at ${pos.x}px ${pos.y}px)`,
        }}
      />

      {/* Image */}
      <div className="overflow-hidden relative">
        <img
          src={project.image}
          alt="Project image"
          className="aspect-video w-full h-full flex items-center justify-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info + Buttons */}
      <div className="flex flex-col p-5 relative z-30">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
          {project.name}
        </h2>

        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <div
          className="flex flex-wrap gap-2 mb-4"
          role="list"
          aria-label="Technologies used"
        >
          {project.stack.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full border border-purple-500/30 text-xs text-purple-300 bg-purple-900/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-700">
          <CommonLink link={project.liveLink} btnText={"Live Preview"} />
          <CommonButton
            navigateLink={`/details/${project.id}`}
            btnText={"View Details"}
          />
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveLink: PropTypes.string.isRequired,
  }).isRequired,
};

// Main Projects component
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call with timeout
    const fetchProjects = async () => {
      try {
        setLoading(true);

        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Mock data
        const mockProjects = [
          {
            id: 1,
            name: "E-Commerce Platform",
            description:
              "A full-featured online shopping experience with cart, checkout, and payment processing.",
            image: "/project1.jpg",
            stack: ["React", "Node.js", "MongoDB", "Stripe"],
            liveLink: "#",
          },
          {
            id: 2,
            name: "Task Management App",
            description:
              "Productivity application for managing tasks and projects with team collaboration.",
            image: "/project2.jpg",
            stack: ["Vue.js", "Firebase", "Tailwind CSS"],
            liveLink: "#",
          },
          {
            id: 3,
            name: "Weather Dashboard",
            description:
              "Real-time weather information with forecasts and interactive maps.",
            image: "/project3.jpg",
            stack: ["React", "OpenWeather API", "Chart.js"],
            liveLink: "#",
          },
          {
            id: 4,
            name: "Social Media Analytics",
            description:
              "Track and analyze social media performance across multiple platforms.",
            image: "/project4.jpg",
            stack: ["Next.js", "GraphQL", "D3.js"],
            liveLink: "#",
          },
          {
            id: 5,
            name: "Fitness Tracker",
            description:
              "Monitor workouts, nutrition, and health metrics with personalized recommendations.",
            image: "/project5.jpg",
            stack: ["React Native", "Express", "MySQL"],
            liveLink: "#",
          },
          {
            id: 6,
            name: "Recipe Finder",
            description:
              "Discover new recipes based on ingredients you have and dietary preferences.",
            image: "/project6.jpg",
            stack: ["Angular", "Spoonacular API", "Bootstrap"],
            liveLink: "#",
          },
        ];

        setProjects(mockProjects);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 p-6">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mb-4"></div>
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <Title
          title={"My Projects"}
          des={
            "Showcases my web development skills, including HTML, CSS, JavaScript, and React-based projects."
          }
        />

        {projects.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No projects to display.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
