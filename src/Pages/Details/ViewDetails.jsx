import { IoCaretBackOutline } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const {
    id,
    image,
    name,
    stack,
    description,
    liveLink,
    github,
    challenges,
    improvements,
  } = data;
  return (
    <div className="my-12">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <button onClick={() => navigate("/")} className="buttonClass group">
          <IoCaretBackOutline /> Back
          <span className="buttonAnimationColor"></span>
        </button>
      </div>
      <div
        key={id}
        className="p-6 rounded-lg shadow-2xl bg-purple-800/5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-12"
      >
        <div className="space-y-4 md:col-span-2 lg:col-span-3">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl md:text-3xl lg:text-4xl font-bold pb-4 lg:pb-8 text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-purple-700"
            >
              {name}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor-placement="top-bottom"
              className="rounded-lg overflow-hidden"
            >
              <img src={image} alt="image" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6 p-2 lg:p-4">
          <div className="space-y-2">
            <p
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-anchor-placement="top-bottom"
              className="text-purple-400 font-bold text-xl lg:text-2xl"
            >
              Overview:{" "}
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-anchor-placement="top-bottom"
              className="text-xs lg:text-base"
            >
              {description}
            </p>
          </div>
          <div className="space-y-6">
            <h3
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-anchor-placement="top-bottom"
              className="text-lg lg:text-xl font-bold text-purple-400"
            >
              Used Technologies:{" "}
            </h3>
            <div
              data-aos="fade-up"
              data-aos-delay="1400"
              data-aos-anchor-placement="top-bottom"
              className="flex flex-wrap gap-2"
            >
              {stack.map((t, i) => (
                <p
                  key={i}
                  className="px-2 py-1 rounded-lg border border-white/10 text-xs text-white/80 backdrop-blur-sm"
                >
                  {t}
                </p>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p
              data-aos="fade-up"
              data-aos-delay="1600"
              data-aos-anchor-placement="top-bottom"
              className="font-bold text-purple-400"
            >
              Challenges:{" "}
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="1800"
              data-aos-anchor-placement="top-bottom"
              className="text-xs lg:text-base"
            >
              {challenges}
            </p>
          </div>
          <div className="space-y-2">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="font-bold text-purple-400"
            >
              Improvements:{" "}
            </p>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-xs lg:text-base"
            >
              {improvements}
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="flex justify-between items-center"
          >
            <a href={github} target="_blank" className="buttonClass group">
              Github Repo
              <span className="buttonAnimationColor"></span>
            </a>
            <a href={liveLink} target="_blank" className="buttonClass group">
              Live Demo
              <span className="buttonAnimationColor"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
