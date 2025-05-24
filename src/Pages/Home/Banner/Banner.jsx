import { FaNodeJs, FaReact } from "react-icons/fa";
import { LuLinkedin, LuFacebook, LuGithub } from "react-icons/lu";
import image from "../../../assets/Image/alaminBW.jpg";
import { MdFileDownload } from "react-icons/md";
import { Link } from "react-scroll";
import { VscGithubProject } from "react-icons/vsc";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TypingAnimation from "./TypingText";
import Lottie from "react-lottie";
import bg from "../../../assets/Image/lottie.json";
// import nameLogo from "../../../assets/logo/AA.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { SiExpress, SiFirebase, SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandTypescript } from "react-icons/tb";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-12 items-center min-h-[550px] mt-10 lg:mt-4 text-white relative">
      {/* <div className="fixed opacity-10 -z-10 top-0 left-0 w-full h-full flex items-center justify-center">
        <img src={nameLogo} alt="logo" className="scale-125" />
      </div> */}
      {/* Left Content */}
      <div
        data-aos="fade-right"
        className="flex justify-start items-center relative z-10"
      >
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          <div className="text-left space-y-6 space-y-4 md:space-y-6 lg:space-y-8">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-2xl md:text-3xl lg:text-4xl font-semibold"
            >
              Hello, I`m Al Amin
            </h1>

            <h2
              data-aos="fade-up"
              data-aos-delay="500"
              className="h-[35px] md:h-[46px] lg:h-[58px] text-purple-400 font-extrabold"
            >
              <TypingAnimation />
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="700"
              className="leading-relaxed max-w-md"
            >
              A Full Stack Web Developer Passionate About Building Professional
              and Interactive Websites.
            </p>
          </div>

          {/* Social Icons */}
          <ul
            data-aos="fade-up"
            data-aos-delay="900"
            className="flex flex-row gap-6 items-center"
          >
            {socialLinks.map(({ link, icon, label }, i) => (
              <motion.li
                key={i}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                className="cursor-pointer transition"
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-xl text-white inline-block p-2 rounded-xl border border-white/50"
                >
                  {icon}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="1100"
            className="flex flex-row flex-wrap gap-4 md:gap-6 items-center my-4"
          >
            <a
              href="https://drive.google.com/file/d/1qRSADF-JFIjXiVWGD7wmunUomS4LjAcO/view?usp=sharing"
              target="_blank"
              className="buttonClass group"
            >
              Resume <MdFileDownload className="text-xl" />
              <span className="buttonAnimationColor group-hover:-top-4"></span>
            </a>

            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="buttonClass group"
            >
              Projects <VscGithubProject className="text-xl" />
              <span className="buttonAnimationColor group-hover:-top-4"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image and Animations */}
      <div
        data-aos="fade-left"
        className="flex justify-center items-center h-full w-full relative my-6"
      >
        <div className="h-full w-full flex justify-center items-center px-4 relative">
          <motion.div
            className="relative lg:w-[80%] mx-auto flex items-center justify-center border border-white/10 rounded-full shadow-white/10 shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] overflow-hidden rounded-full bg-main/30">
              <div className="absolute inset-0 z-0 scale-105">
                <Lottie
                  options={{ animationData: bg, autoplay: true, loop: true }}
                />
              </div>
              <img
                className="w-full h-full object-cover scale-125 z-10 relative"
                src={image}
                alt="alamin"
              />
            </div>
            {/* React Icon */}
            <motion.button
              className="group p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 w-[120%] flex items-center justify-between rotate-90"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <span className="relative">
                <RiNextjsLine className="text-5xl p-2 rounded-full backdrop-blur shadow-xl shadow-white/10 text-Accent" />
              </span>
              <div className="relative">
                <RiTailwindCssFill className="text-5xl p-2 rounded-full backdrop-blur shadow-xl shadow-white/10 text-blue-400" />
              </div>
            </motion.button>
            <motion.button
              className="group p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 w-[120%] flex items-center justify-between"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <span className="relative">
                <FaReact className="text-5xl p-2 rounded-full backdrop-blur shadow-xl shadow-white/10 text-blue-500" />
              </span>
              <div className="relative">
                <FaNodeJs className="text-5xl p-2 rounded-full backdrop-blur shadow-xl shadow-white/10 text-green-500" />
              </div>
            </motion.button>
            <motion.button
              className="group p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 w-[120%] flex items-center justify-between rotate-45"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <span className="relative">
                <DiMongodb className="text-5xl p-2 rounded-full backdrop-blur shadow-xl shadow-white/10 text-green-500" />
              </span>
              <div className="relative">
                <TbBrandTypescript className="text-5xl p-2 rounded-full backdrop-blur shadow-xl shadow-white/10 text-yellow-500" />
              </div>
            </motion.button>
            <motion.button
              className="group p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 w-[120%] flex items-center justify-between rotate-135"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <span className="relative">
                <SiFirebase className="text-5xl p-2 rounded-full backdrop-blur shadow-xl shadow-white/10 text-orange-500" />
              </span>
              <div className="relative">
                <AiFillHtml5 className="text-5xl p-2 rounded-full backdrop-blur shadow-xl shadow-white/10 text-red-500" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
