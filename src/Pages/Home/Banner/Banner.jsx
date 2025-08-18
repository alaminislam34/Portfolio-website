import { LuLinkedin, LuFacebook, LuGithub } from "react-icons/lu";
import image from "../../../assets/Image/MD-Alamin.jpg";
import bg from "../../../assets/Image/Wave Loop.json";
import { Link } from "react-scroll";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TypingAnimation from "./TypingText";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Lottie from "react-lottie";

const Banner = () => {
  useEffect(() => {
    Aos.init({ once: true, offset: 200, duration: 1500 });
  }, []);

  const socialLinks = [
    {
      icon: <LuLinkedin />,
      label: "Linkedin",
      link: "https://www.linkedin.com/in/al-amin-islam/",
    },
    {
      icon: <LuGithub />,
      label: "Github",
      link: "https://github.com/alamin-islam",
    },
    {
      icon: <LuFacebook />,
      label: "Facebook",
      link: "https://www.facebook.com/alaminislam",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full">
        <Lottie
          options={{ animationData: bg, autoplay: true, loop: true }}
        ></Lottie>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 items-center min-h-[600px] mt-8 sm:mt-0 md:mt-6 text-white relative overflow-hidden">
        <div className="flex justify-start items-center relative z-10 lg:col-span-4">
          <div className="space-y-4 md:space-y-6 ">
            <div className="text-left space-y-6 md:space-y-6 ">
              <h1
                data-aos="fade-up"
                className="text-lg md:text-xl lg:text-2xl font-semibold conthrax"
              >
                Hello, I`m Al Amin Islam
              </h1>
              <div data-aos="fade-up" data-aos-duration="200">
                <TypingAnimation />
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="leading-relaxed max-w-md text-sm"
              >
                A Full Stack Web Developer Passionate About Building
                Professional and Interactive Websites.
              </p>
            </div>
            {/* Social Icons */}
            <ul
              data-aos="fade-up"
              data-aos-delay="900"
              className="flex flex-row gap-6 items-center"
            >
              {socialLinks.map(({ link, icon, label }, i) => (
                <li key={i} className=" w-10 h-10">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-full h-full text-white inline-block rounded-full border border-white/50 relative group will-change-transform transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden"
                  >
                    <div className="w-full h-full flex items-center justify-center text-xl backdrop-blur">
                      {icon}
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="1100"
              className="flex flex-row flex-wrap gap-4 md:gap-6 items-center my-4"
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="bg-white/10 border border-white/20 py-1.5 px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10"
              >
                <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-44 duration-700"></div>
                <button className="py-2.5 px-8 active:scale-95 rounded-lg bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden">
                  <span className="relative z-10 text-xs md:text-sm ">
                    Projects
                  </span>
                  <span className="absolute top-0 w-1/4 h-full -left-24 bg-white/20 blur-sm group-hover:left-40 duration-1000 transition-all ease-out z-0"></span>
                </button>
              </Link>
              <div className="bg-white/10 border border-white/20 py-1.5 px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10 flex items-center justify-center">
                <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-44 duration-700"></div>
                <a
                  href="https://drive.google.com/file/d/1qRSADF-JFIjXiVWGD7wmunUomS4LjAcO/view?usp=sharing"
                  target="_blank"
                  className="py-2.5 px-8 active:scale-95 rounded-lg  bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden inline-block"
                >
                  <span className="relative z-10 text-xs md:text-sm">
                    Resume
                  </span>
                  <span className="absolute top-0 w-1/4 h-full -left-24 bg-white/20 blur-sm group-hover:left-40 duration-1000 transition-all ease-out z-0"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image and Animations */}
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center h-full w-full relative my-10 lg:col-span-3"
        >
          <div className="w-full max-h-[700px] h-full flex justify-center items-center px-4 relative">
            <div className="relative w-4/6 h-3/4 aspect-square flex items-center justify-center rounded-3xl shadow-2xl shadow-white/10">
              <div className="relative w-full h-full flex items-center justify-center p-4 border-2 border-purple-100/10 rounded-3xl">
                {/* Rotating Ring Around Image */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                  className="absolute w-[115%] h-[115%] rounded-full 
               bg-gradient-to-r from-[#5e42ff] via-[#7d60ff] to-[#d2c3fc] 
               blur-md opacity-60"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse at center, transparent 70%, black 71%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse at center, transparent 70%, black 71%)",
                  }}
                ></motion.div>
                {/* Rotating Ring Around Image */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                  className="absolute w-[115%] h-[115%] rounded-full 
               bg-gradient-to-r from-[#5e42ff] via-[#7d60ff] to-[#d2c3fc] 
               blur-md opacity-60"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse at center, transparent 70%, black 71%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse at center, transparent 70%, black 71%)",
                  }}
                ></motion.div>
                {/* Rotating Ring Around Image */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                  className="absolute w-[115%] h-[115%] rounded-full 
               bg-gradient-to-r from-[#5e42ff] via-[#7d60ff] to-[#d2c3fc] 
               blur-md opacity-60"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse at center, transparent 70%, black 71%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse at center, transparent 70%, black 71%)",
                  }}
                ></motion.div>
                {/* Rotating Ring Around Image */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                  className="absolute w-[115%] h-[115%] rounded-full 
               bg-gradient-to-r from-[#5e42ff] via-[#7d60ff] to-[#d2c3fc] 
               blur-md opacity-60"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse at center, transparent 70%, black 71%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse at center, transparent 70%, black 71%)",
                  }}
                ></motion.div>

                {/* Image Container */}
                <div
                  className="relative w-full h-full overflow-hidden rounded-xl shadow-[inset_0_0_60px_rgba(125,5,255,0.2)] 
                  bg-gradient-to-r from-purple-700/40 via-purple-600/30 to-purple-400/30 backdrop-blur shadow-black"
                >
                  <img
                    src={image}
                    alt="alamin"
                    className="relative z-10 w-full h-full object-cover rounded-xl scale-105"
                    style={{
                      boxShadow:
                        "15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60)",
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
