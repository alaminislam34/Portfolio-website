import { LuLinkedin, LuFacebook, LuGithub } from "react-icons/lu";
import image from "../../../assets/Image/image.png";
import { Link } from "react-scroll";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TypingAnimation from "./TypingText";

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import CommonLink from "../../../Components/CommonLink";
import ModernImageContainer from "./ImageContainer";

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
      <div className="grid grid-cols-1 lg:grid-cols-7 items-center min-h-[600px] mt-8 md:mt-12 lg:mt-16 text-white relative">
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
                className="leading-relaxed max-w-lg"
              >
                Full Stack Web Developer passionate about building interactive,
                responsive, and high-quality websites with clean and efficient
                code.
              </p>
            </div>
            {/* Social Icons */}
            <ul
              data-aos="fade-up"
              data-aos-delay="900"
              className="flex flex-row gap-6 items-center"
            >
              {socialLinks.map(({ link, icon, label }, i) => (
                <li key={i} className="w-10 h-10">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-full h-full hover:ring-2 hover:ring-fuchsia-600 text-white inline-block rounded-full ring-2 ring-gray-700 shadow hover:scale-105 relative group will-change-transform transition-transform duration-500 ease-in-out overflow-hidden hover:shadow-[2px_2px_6px_#623ac0]"
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
                <button className="py-2.5 px-8 active:scale-95 rounded-lg bg-linear-to-tr from-[#6b14ce] via-[#8827f7] to-[#9e02bd] text-white relative group overflow-hidden">
                  <span className="relative z-10 text-xs md:text-sm ">
                    Projects
                  </span>
                  <span className="absolute top-0 w-1/4 h-full -left-24 bg-white/20 blur-sm group-hover:left-40 duration-1000 transition-all ease-out z-0"></span>
                </button>
              </Link>
              <CommonLink
                link={
                  "https://drive.google.com/file/d/1vgUAhnPa2z9TrXilEu_PvDLJhv6C6IDn/view?usp=drivesdk"
                }
                btnText={"Resume"}
              />
            </div>
          </div>
        </div>

        {/* Right Image and Animations */}
        <ModernImageContainer image={image} />
      </div>
    </div>
  );
};

export default Banner;
// <div className="absolute top-0 left-0 w-full">
//   <Lottie
//     options={{ animationData: bg, autoplay: true, loop: true }}
//   ></Lottie>
// </div>
