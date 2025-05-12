import { useEffect, useRef, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { GrClose, GrContactInfo } from "react-icons/gr";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../../assets/logo/name-logo-white.svg";
import { GoHome } from "react-icons/go";
import { IoCodeSlashOutline, IoMailUnreadOutline } from "react-icons/io5";
import { BsFolder2Open } from "react-icons/bs";
import { X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);
  const lastScrollY = useRef(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-8% 0px -8% 0px",
      }
    );

    Aos.init({
      once: false,
      delay: 300,
      duration: 1500,
    });

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setScrollY(false);
      } else if (currentScrollY > lastScrollY.current) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "home", icon: <GoHome /> },
    { name: "About", path: "about", icon: <GrContactInfo /> },
    { name: "Skills", path: "skills", icon: <IoCodeSlashOutline /> },
    { name: "Projects", path: "projects", icon: <BsFolder2Open /> },
    { name: "Contact", path: "contact", icon: <IoMailUnreadOutline /> },
  ];

  return (
    <div className="h-[76px]">
      <div
        className={`w-full fixed left-0 z-50 duration-700 ${
          scrollY ? "-top-52" : "top-0"
        } `}
      >
        <nav
          className={`my-4 rounded-2xl shadow-lg shadow-fuchsia-700/10 backdrop-blur-xl duration-300 max-w-7xl w-11/12 mx-auto`}
        >
          <div className="flex items-center justify-between py-2 px-6 rounded-[14px] bg-gradient-to-r from-[#1f1f2e]/80 via-[#2b1b36]/80 to-[#1f1f2e]/80  shadow-xl shadow-purple-800/20 backdrop-blur-md relative">
            {/*  *******************************Gradient Motion Layers Start****************************** */}
            <div className="absolute inset-0 -z-10 bg-[length:20px_20px] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
            <div
              className="absolute rounded-full blur-3xl"
              style={{
                width: "40vw",
                height: "40vw",
                background:
                  "linear-gradient(40deg, rgba(128, 0, 255, 0.1), rgba(102, 0, 204, 0.1))",
                top: "-10%",
                left: "-10%",
                animation: "moveGradient1 15s ease-in-out infinite alternate",
              }}
            />
            <div
              className="absolute rounded-full blur-3xl"
              style={{
                width: "45vw",
                height: "45vw",
                background:
                  "linear-gradient(40deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",

                bottom: "-20%",
                right: "-10%",
                animation: "moveGradient2 18s ease-in-out infinite alternate",
              }}
            />
            <div
              className="absolute rounded-full blur-3xl"
              style={{
                width: "30vw",
                height: "30vw",
                background:
                  "radial-gradient(circle, rgba(102, 126, 234, 0.15), transparent 70%)",
                top: "60%",
                left: "20%",
                animation: "moveGradient3 20s ease-in-out infinite alternate",
              }}
            />

            {/*  *******************************Gradient Motion Layers END****************************** */}
            {/* Mobile Menu */}
            <div
              className={`absolute left-0 w-full z-50 bg-gradient-to-r from-[#1f1f2e] via-[#2b1b36] to-[#1f1f2e] backdrop-blur-2xl text-white rounded-xl duration-500 ${
                open ? "top-0" : "-top-96"
              }`}
            >
              <ul className="flex flex-col p-6 space-y-4 relative">
                {/*  *******************************Gradient Motion Layers Start****************************** */}
                <div className="absolute inset-0 -z-10 bg-[length:20px_20px] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
                <div
                  className="absolute -z-10 rounded-full blur-3xl"
                  style={{
                    width: "40vw",
                    height: "40vw",
                    background:
                      "linear-gradient(40deg, rgba(128, 0, 255, 0.1), rgba(102, 0, 204, 0.1))",
                    top: "-10%",
                    left: "-10%",
                    animation:
                      "moveGradient1 15s ease-in-out infinite alternate",
                  }}
                />
                <div
                  className="absolute -z-10 rounded-full blur-3xl"
                  style={{
                    width: "45vw",
                    height: "45vw",
                    background:
                      "linear-gradient(40deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",

                    bottom: "-20%",
                    right: "-10%",
                    animation:
                      "moveGradient2 18s ease-in-out infinite alternate",
                  }}
                />
                <div
                  className="absolute -z-10 rounded-full blur-3xl"
                  style={{
                    width: "30vw",
                    height: "30vw",
                    background:
                      "radial-gradient(circle, rgba(102, 126, 234, 0.15), transparent 70%)",
                    top: "60%",
                    left: "20%",
                    animation:
                      "moveGradient3 20s ease-in-out infinite alternate",
                  }}
                />

                {/*  *******************************Gradient Motion Layers END****************************** */}
                <div className="absolute top-4 right-4 text-xl transition z-10">
                  <button
                    onClick={() => setOpen(false)}
                    className="btn btn-sm cursor-pointer"
                  >
                    <X />
                  </button>
                </div>
                {links.map((item) => (
                  <li
                    key={item.path}
                    data-aos="fade-up"
                    className="text-center"
                  >
                    <Link
                      to={item.path}
                      smooth={true}
                      duration={500}
                      onClick={() => setOpen(false)}
                      className="text-base px-4 py-2 rounded-md transition-all hover:bg-fuchsia-700/20"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo */}
            <div>
              <Link to="home" smooth={true} duration={500}>
                <img
                  src={logo}
                  alt="logo"
                  className="h-12 md:h-14 cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div>
              <ul className="hidden lg:flex items-center gap-4 hover:gap-6 duration-300 text-sm">
                {links.map(({ name, path }) => (
                  <li key={path} className="relative group">
                    <Link
                      to={path}
                      smooth={true}
                      duration={500}
                      className={`py-3 px-4 cursor-pointer 
                        ${
                          activeSection === path
                            ? "border-b text-white shadow-md"
                            : "hover:border-b "
                        }`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resume + Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="https://drive.google.com/file/d/1Cm3ACSBCaR6Q_PMKmNAQSu3rfuQonG5W/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="buttonClass group"
              >
                Resume
                <span className="buttonAnimationColor group-hover:-top-4 "></span>
              </a>
              <button
                onClick={() => setOpen(true)}
                className="text-xl lg:hidden text-fuchsia-200 btn"
              >
                <RiMenu2Fill />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
