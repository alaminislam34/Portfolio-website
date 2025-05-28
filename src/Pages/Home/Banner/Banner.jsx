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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-12 items-center min-h-[550px] mt-10 lg:mt-4 text-white relative overflow-hidden">
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
            <TypingAnimation />
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
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="bg-white/10 border border-white/20 py-1.5 px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10"
            >
              <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-44 duration-700"></div>
              <button className="py-2.5 px-8 rounded-lg cursor-pointer bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden">
                <span className="relative z-10">Projects</span>
                <span className="absolute top-0 w-1/4 h-full -left-24 bg-white/20 blur-sm group-hover:left-40 duration-1000 transition-all ease-out z-0"></span>
              </button>
            </Link>
            <div className="bg-white/10 border border-white/20 py-1.5 px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10 flex items-center justify-center">
              <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-44 duration-700"></div>
              <a
                href="https://drive.google.com/file/d/1qRSADF-JFIjXiVWGD7wmunUomS4LjAcO/view?usp=sharing"
                target="_blank"
                className="py-2.5 px-8 rounded-lg cursor-pointer bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden inline-block"
              >
                <span className="relative z-10">Resume</span>
                <span className="absolute top-0 w-1/4 h-full -left-24 bg-white/20 blur-sm group-hover:left-40 duration-1000 transition-all ease-out z-0"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image and Animations */}
      <div
        data-aos="zoom-in"
        className="flex justify-center items-center h-full w-full relative my-10"
      >
        <div className="h-full w-full flex justify-center items-center px-4 relative">
          <motion.div
            className="relative w-[240px] sm:w-[300px] md:w-[420px] aspect-square flex items-center justify-center rounded-full border border-white/10 shadow-2xl shadow-white/10"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            {/* Animated Gradient Ring */}
            <div className="absolute inset-0 rounded-full"></div>

            {/* Lottie Background */}
            <div className="absolute z-0 scale-105 rounded-full overflow-hidden">
              <Lottie
                options={{ animationData: bg, autoplay: true, loop: true }}
              />
            </div>

            {/* Profile Image */}
            <img
              src={image}
              alt="alamin"
              className="relative z-10 w-full h-full object-cover rounded-full shadow-[0_0_60px_rgba(125,5,255,0.2)]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
