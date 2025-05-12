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
import bg from "../../../assets/Image/lottie.json";
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
    <div
      className={`flex flex-col md:flex-row justify-around lg:mx-12 items-center min-h-[550px] mt-8 lg:mt-0`}
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
              className="text-2xl md:text-3xl lg:text-4xl font-semibold"
            >
              Hello, I`m Al Amin
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor-placement="center-center"
              className="overflow-hidden h-14 md:h-16 flex items-center"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-purple-600">
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
                  className="cursor-pointer rounded-lg p-2 duration-300 
                   bg-purple-600/40"
                >
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-xl text-white"
                  >
                    {icon}
                  </a>
                </motion.li>
              ))}
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
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] overflow-hidden rounded-3xl bg-white/5">
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
                <div className="absolute inset-0 bg-purple-500/50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-xl -z-10"></div>
                <FaReact className="text-6xl text-purple-600 group-hover:scale-105 rounded-full" />
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
                <div className="absolute inset-0 bg-purple-500/50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-xl -z-10"></div>
                <RiTailwindCssFill className="text-6xl text-purple-600 z-10" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
