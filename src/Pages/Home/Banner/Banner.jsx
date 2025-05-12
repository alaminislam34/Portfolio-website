import { FaReact } from "react-icons/fa";
import { LuLinkedin, LuFacebook, LuGithub } from "react-icons/lu";
// import image from "../../../assets/Image/alamin1.jpg";
import image from "../../../assets/Image/alaminBW.jpg";
import { MdFileDownload } from "react-icons/md";
import { Link } from "react-scroll";
import { VscGithubProject } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../../../assets/logo/name-logo.svg";
import TypingAnimation from "./TypingText";
import Lottie from "react-lottie";
import bg from "../../../assets/Image/bannerImageBackGround.json";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const Banner = () => {
  useEffect(() => {
    Aos.init({
      once: false,
      offset: 0,
      duration: 1500,
    });
  }, []);

  return (
    <div
      className={`flex flex-col lg:flex-row justify-around items-center min-h-[550px] mt-8 lg:mt-0`}
    >
      <div className="flex flex-1 justify-start items-center">
        <div className="space-y-8">
          <div
            style={{
              backgroundImage: `url(${logo})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="text-left space-y-2"
          >
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor-placement="center-center"
              className="text-2xl md:text-3xl lg:text-4xl font-semibold animate-fadeIn"
            >
              Hello, I`m Al Amin
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor-placement="center-center"
              className="overflow-hidden h-14 md:h-16 flex items-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#e76be7] to-[#bf07e4] animate-fadeIn ">
                <TypingAnimation />
              </h2>
            </div>

            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-anchor-placement="center-bottom"
              className=" leading-relaxed max-w-md"
            >
              A Full Stack Web Developer Passionate About Building Professional
              and Interactive Websites.
            </p>
          </div>

          <div>
            <ul
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-anchor-placement="center-bottom"
              className="flex flex-row gap-6 items-center"
            >
              {/* Facebook */}
              <motion.li
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }} // Up & down animation
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }} // Smooth looping animation
                className="cursor-pointer rounded-lg p-2 duration-300 
                   bg-fuchsia-600/40"
              >
                <a
                  href="https://www.facebook.com/ar.alamin34"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-xl text-white"
                >
                  <LuFacebook />
                </a>
              </motion.li>

              {/* LinkedIn */}
              <motion.li
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  delay: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="cursor-pointer rounded-lg p-2 duration-300 
                   bg-fuchsia-600/40"
              >
                <a
                  href="https://www.linkedin.com/in/alaminislam34"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-xl text-white"
                >
                  <LuLinkedin />
                </a>
              </motion.li>

              {/* GitHub */}
              <motion.li
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  delay: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="cursor-pointer rounded-lg p-2 duration-300 
                   bg-fuchsia-600/40"
              >
                <a
                  href="https://github.com/alaminislam34"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-xl text-white"
                >
                  <LuGithub />
                </a>
              </motion.li>
            </ul>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="1400"
            data-aos-anchor-placement="center-bottom"
            className="flex flex-row flex-wrap gap-4 md:gap-6 items-center my-4"
          >
            <a
              href="https://drive.google.com/file/d/1qRSADF-JFIjXiVWGD7wmunUomS4LjAcO/view?usp=sharing"
              target="_blank"
              aria-label="Download Resume"
              className="border border-[#66426b] px-3 lg:px-4 py-2 rounded-lg relative z-20 group hover:shadow-lg shadow-[#3b1441]/40 bg-gradient-to-tr from-[#1c0922] to-[#7e057f] overflow-hidden flex items-center gap-2 text-[#e2c9e8] group-hover:text-white transition duration-300"
            >
              Resume <MdFileDownload className="text-xl" />
              <span className="w-40 h-20 left-1/2 -translate-x-1/2 bg-gradient-to-bl from-[#1d0c1f] via-[#550a5f] to-[#920597] block absolute -bottom-24 group-hover:-bottom-4 duration-700 shadow-lg shadow-[#501858]/30 z-[-1] border border-[#39133f] rotate-6 blur-sm"></span>
            </a>

            <Link
              activeClass="active"
              to="works"
              smooth={true}
              duration={500}
              className="border border-[#66426b] px-3 lg:px-4 py-2 rounded-lg relative z-20 group hover:shadow-lg shadow-[#3b1441]/40 bg-gradient-to-tr from-[#1c0922] to-[#7e057f] overflow-hidden flex items-center gap-2 text-[#e2c9e8] group-hover:text-white transition duration-300 cursor-pointer"
            >
              Projects <VscGithubProject className="text-xl" />
              <span className="w-40 h-20 left-1/2 -translate-x-1/2 bg-gradient-to-bl from-[#1d0c1f] via-[#550a5f] to-[#920597] block absolute -bottom-24 group-hover:-bottom-4 duration-700 shadow-lg shadow-[#501858]/30 z-[-1] border border-[#39133f] rotate-6 blur-sm"></span>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-1 justify-center items-center h-full w-full relative my-6">
        <div
          data-aos="zoom-in"
          data-aos-duration="2500"
          className="h-full w-full flex justify-center items-center px-4 relative"
        >
          <motion.div
            className="relative lg:w-[80%] mx-auto flex items-center justify-center "
            animate={{
              y: [0, -10, 0],
            }}
            jj
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
          >
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] overflow-hidden rounded-3xl bg-purple-700/10">
              <div className="absolute inset-0 z-0 scale-105">
                <Lottie
                  options={{ animationData: bg, autoplay: true, loop: true }}
                ></Lottie>
              </div>
              <img
                className="w-full h-full object-cover lg:bg-top bg-right bg-cover scale-125 z-10 relative"
                src={image}
                alt="image"
              />
            </div>
            {/* React Icon */}
            <motion.button
              className="group p-2 absolute top-2 left-2 lg:top-4 lg:left-4 z-10"
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-fuchsia-500/50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-xl -z-10"></div>
                <FaReact className="text-6xl text-fuchsia-600 group-hover:scale-105 rounded-full" />
              </div>
            </motion.button>

            {/* Tailwind CSS Icon */}
            <motion.button
              className="group p-2 absolute bottom-2 right-2 lg:bottom-4 lg:right-4 z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-fuchsia-500/50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-xl -z-10"></div>
                <RiTailwindCssFill className="text-6xl text-fuchsia-600 z-10" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
