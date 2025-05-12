import { useEffect, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { GrClose, GrContactInfo } from "react-icons/gr";
import { Link } from "react-scroll";
import Aos from "aos";
import logo from "../../assets/logo/name-logo-white.svg";
import { GoHome } from "react-icons/go";
import { IoCodeSlashOutline, IoMailUnreadOutline } from "react-icons/io5";
import { BsFolder2Open } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    // Intersection Observer
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

    // AOS init
    Aos.init({
      once: false,
      delay: 300,
      duration: 1500,
    });

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
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
      <div className="w-full fixed top-0 left-0 z-50 duration-700">
        <nav
          className={`my-4 rounded-2xl shadow-xl shadow-fuchsia-700/10 backdrop-blur-xl max-w-7xl w-11/12 mx-auto`}
        >
          <div className="flex items-center justify-between py-2 px-6 rounded-[14px] shadow-inner shadow-fuchsia-700/50">
            {/* Mobile Menu */}
            <div
              className={`absolute left-0 w-full z-50 bg-gradient-to-br from-[#1e112c] via-[#180d2a] to-[#0a0312] rounded-xl duration-500 ${
                open ? "top-0" : "-top-96"
              }`}
            >
              <ul className="flex flex-col p-6 space-y-3 relative">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4  transition cursor-pointer"
                >
                  <GrClose className="text-xl" />
                </button>
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
                      className=" text-base px-4 py-2 rounded-md transition-all duration-300"
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
              <ul className="hidden lg:flex items-center gap-6">
                {links.map(({ name, path }) => (
                  <li key={path} className="relative group">
                    <Link
                      to={path}
                      smooth={true}
                      duration={500}
                      className={` text-sm lg:text-base py-2 px-4 rounded-md transition-colors ease-in-out duration-500 cursor-pointer ${
                        activeSection === path
                          ? "bg-gradient-to-br from-fuchsia-500/40 via-fuchsia-600/40 to-fuchsia-700/40 text-white"
                          : "hover:bg-gradient-to-br from-fuchsia-500/40 via-fuchsia-600/40 to-fuchsia-700/40 duration-300"
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
                className="border border-[#66426b] px-3 lg:px-4 py-2 rounded-lg relative z-20 group hover:shadow-lg shadow-[#3b1441]/40 bg-gradient-to-tr from-[#1c0922] to-[#7e057f] overflow-hidden flex items-center gap-2 text-[#e2c9e8] group-hover:text-white transition duration-300"
              >
                Resume
                <span className="w-40 h-20 left-1/2 -translate-x-1/2 bg-gradient-to-bl from-[#1d0c1f] via-[#550a5f] to-[#920597] block absolute -bottom-24 group-hover:-bottom-4 duration-700 shadow-lg shadow-[#501858]/30 z-[-1] border border-[#39133f] rotate-6 blur-sm"></span>
              </a>
              <button
                onClick={() => setOpen(true)}
                className=" text-xl lg:hidden cursor-pointer"
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
