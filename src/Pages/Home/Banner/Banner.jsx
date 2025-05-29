import { LuLinkedin, LuFacebook, LuGithub } from "react-icons/lu";
import image from "../../../assets/Image/alaminBW.jpg";
import { Link } from "react-scroll";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TypingAnimation from "./TypingText";
// import bg from "../../../assets/Image/imageBG.jpg";
// import bg from "../../../assets/Image/lottie.json";
// import nameLogo from "../../../assets/logo/AA.png";
// style={{
//   backgroundImage: `url(${bg})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// }}
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-12 items-center min-h-[90vh] mt-8 sm:mt-0 md:mt-6 text-white relative overflow-hidden">
      <div
        data-aos="fade-right"
        className="flex justify-start items-center relative z-10"
      >
        <div className="space-y-4 md:space-y-6 ">
          <div className="text-left space-y-6 space-y-4 md:space-y-6 ">
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
              <button className="py-2.5 px-8 active:scale-95 rounded-lg cursor-pointer bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden">
                <span className="relative z-10 text-xs md:text-sm">
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
                className="py-2.5 px-8 active:scale-95 rounded-lg cursor-pointer bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden inline-block"
              >
                <span className="relative z-10 text-xs md:text-sm">Resume</span>
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
        <div className="w-full max-h-[700px] h-full flex justify-center items-center px-4 relative">
          <div className="relative w-2/3 h-3/4 aspect-square flex items-center justify-center rounded-3xl shadow-2xl shadow-white/10">
            {/* Animated Gradient Ring 1 */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute -z-10 top-0 w-full h-full rotate-12 aspect-square rounded-3xl scale-105 bg-purple-100/5 backdrop-blur-xs"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <div className="relative w-full h-full bg-black/5 backdrop-blur-xl z-10 rounded-xl"></div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10 }}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-[150%] h-[150%] opacity-10 bg-gradient-to-r from-[#44318D] via-[#6E44FF] to-[#E0C3FC] blur-3xl"
                ></motion.div>
              </div>
            </motion.div>

            {/* Animated Gradient Ring 2 */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 1,
                ease: "linear",
              }}
              className="absolute -z-10 top-0 w-full h-full rotate-[24deg] aspect-square rounded-3xl scale-105 bg-purple-100/5 backdrop-blur-xs"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <div className="relative w-full h-full bg-black/5 backdrop-blur-xl z-10 rounded-xl"></div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10 }}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-[150%] h-[150%] opacity-10 bg-gradient-to-r from-[#44318D] via-[#6E44FF] to-[#E0C3FC] blur-3xl"
                ></motion.div>
              </div>
            </motion.div>

            {/* Profile Image */}
            <div className="w-full h-full relative overflow-hidden p-2 rounded-xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10 }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-[100%] h-[200%] bg-gradient-to-r from-[#5e42ff] via-[#7d60ff] to-[#d2c3fc] blur-3xl shadow-[0_0_60px_rgba(125,5,255,0.2)] "
              ></motion.div>
              <div className="w-full h-full overflow-hidden rounded-xl shadow-[inset_0_0_60px_rgba(125,5,255,0.2)] bg-gradient-to-r from-purple-700/40 via-purple-600/30 to-purple-400/30 backdrop-blur shadow shadow-black">
                <img
                  src={image}
                  alt="alamin"
                  style={{
                    boxShadow:
                      "15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60)",
                  }}
                  className="relative scale-105 z-10 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
