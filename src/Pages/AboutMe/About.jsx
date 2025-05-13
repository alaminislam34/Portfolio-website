import { IoLogoFirebase } from "react-icons/io5";
import tech from "../../assets/Image/tech.json";
import { FaNodeJs, FaReact } from "react-icons/fa";
import Title from "../../Components/Shared/Title";
import Lottie from "react-lottie";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { MdContactEmergency } from "react-icons/md";

const About = () => {
  const skills = [
    {
      href: "https://react.dev/learn",
      icon: (
        <FaReact className="text-xl lg:text-2xl text-blue-400 group-hover:scale-105" />
      ),
    },
    {
      href: "https://tailwindui.com/documentation",
      icon: <RiTailwindCssFill className="text-xl lg:text-2xl text-cyan-400" />,
    },
    {
      href: "https://firebase.google.com/",
      icon: <IoLogoFirebase className="text-xl lg:text-2xl text-amber-400" />,
    },
    {
      href: "https://www.mongodb.com/",
      icon: <DiMongodb className="text-xl lg:text-2xl text-green-400" />,
    },
    {
      href: "https://nodejs.org/en",
      icon: <FaNodeJs className="text-xl lg:text-2xl text-green-400" />,
    },
  ];
  return (
    <div>
      <Title
        title={"About Me"}
        des={"✨ Building Scalable & Interactive Web Solutions ✨"}
      />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center *:flex-1">
        <div className="flex flex-col m-4 md:m-6 space-y-6">
          <div>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-justify leading-loose"
            >
              Motivated Frontend Developer skilled in HTML, CSS3, JavaScript,
              React.js, and Tailwind CSS, focusing on responsive, pixel-perfect
              designs from Figma. Eager to learn CMS platforms like WordPress
              and thrive in fast-paced, collaborative environments.
            </p>
          </div>

          <div className="space-y-4">
            <h4
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor-placement="top-bottom"
              className="text-lg md:text-xl font-bold text-fuchsia-400"
            >
              My Goals:{" "}
            </h4>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor-placement="top-bottom"
            >
              My goal is to become a skilled Full-Stack Developer and build
              impactful digital solutions that solve real-world problems.
            </p>
          </div>
          <div>
            <ul
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-anchor-placement="top-bottom"
              className="flex flex-row gap-6 items-center *:p-2 cursor-pointer *:rounded-lg my-2"
            >
              {skills.map(({ href, icon }, i) => (
                <motion.li
                  key={i}
                  className="cursor-pointer rounded-lg p-2 duration-300  border border-white/50"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    delay: i * 0.2,
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <a href={href} target="_blank">
                    {icon}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-anchor-placement="top-bottom"
            className="flex flex-row gap-2 lg:gap-4"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="buttonClass group"
            >
              Hire Me
              <span className="buttonAnimationColor"></span>
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="buttonClass group"
            >
              Contact Now <MdContactEmergency className="text-xl" />
              <span className="buttonAnimationColor"></span>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden h-full pointer-events-none">
          <div
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-anchor-placement="top-bottom"
            className="relative z-10 flex justify-center items-center"
          >
            <Lottie
              options={{ animationData: tech, autoplay: true, loop: true }}
            ></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
