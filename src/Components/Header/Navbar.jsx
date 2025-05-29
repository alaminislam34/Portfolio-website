import { useEffect, useRef, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { GrClose, GrContactInfo } from "react-icons/gr";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../../assets/logo/AA.jpg";
import { GoHome } from "react-icons/go";
import { IoCodeSlashOutline, IoMailUnreadOutline } from "react-icons/io5";
import { BsFolder2Open } from "react-icons/bs";
import { X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);
  const lastScrollY = useRef(0);
  const [activeSection, setActiveSection] = useState("home");
  console.log(scrollY);
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
    <div className="h-[76px] overflow-hidden">
      <div className={`w-full fixed left-0 z-50 duration-700 top-0`}>
        <nav
          data-aos="fade-down"
          className={`my-2 rounded-xl border backdrop-blur-xl duration-300 max-w-7xl w-11/12 mx-auto border-white/20`}
        >
          <div className="flex items-center justify-between py-2 px-4 rounded-[14px] bg-gradient-to-r from-[#1f1f2e]/80 via-[#2b1b36]/80 to-[#1f1f2e]/80  shadow-md shadow-purple-800/20 backdrop-blur-md relative">
            {/*  *******************************Gradient Motion Layers Start****************************** */}
            <div className="absolute inset-0 -z-10 bg-[length:20px_20px] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
            <div
              className="absolute rounded-full blur-3xl"
              style={{
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
                <li className="flex items-center justify-center">
                  <div className="bg-white/10 border border-white/20 py-1.5 px-1.5 lg:px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10 flex items-center justify-center">
                    <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-44 duration-700"></div>
                    <a
                      href="https://drive.google.com/file/d/1qRSADF-JFIjXiVWGD7wmunUomS4LjAcO/view?usp=sharing"
                      target="_blank"
                      className="py-2 lg:py-2.5 px-4 md:px-6 lg:px-8 rounded-lg text-sm cursor-pointer bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden inline-block"
                    >
                      <span className="relative z-10">Resume</span>
                      <span className="absolute top-0 w-1/4 h-full -left-24 bg-white/20 blur-sm group-hover:left-40 duration-1000 transition-all ease-out z-0"></span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <div>
              <Link to="home" smooth={true} duration={500}>
                <img
                  loading="lazy"
                  src={logo}
                  alt="logo"
                  className="h-12 md:h-14 cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="relative z-50">
              <ul className="hidden lg:flex items-center gap-4 hover:gap-6 duration-300 text-sm">
                {links.map(({ name, path }) => (
                  <li
                    key={path}
                    className="relative py-3 px-4 cursor-pointer group overflow-hidden"
                  >
                    <Link
                      to={path}
                      smooth={true}
                      duration={500}
                      className={` 
                        ${
                          activeSection === path
                            ? "bg-gradient-to-r from-[#a48af0] via-[#b297f1] to-[#c4b0f3] bg-clip-text text-transparent shadow-md"
                            : "text-white"
                        }`}
                    >
                      {name}
                    </Link>
                    <span className="absolute -z-10 top-0 -left-[120%] group-hover:left-[120%] w-full h-full bg-white"></span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resume + Toggle */}
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="bg-white/10 border hidden md:flex border-white/20 py-1.5 px-1.5 lg:px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10 items-center justify-center">
                <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-44 duration-700"></div>
                <a
                  href="https://drive.google.com/file/d/1qRSADF-JFIjXiVWGD7wmunUomS4LjAcO/view?usp=sharing"
                  target="_blank"
                  className="py-2 lg:py-2.5 px-4 md:px-6 lg:px-8 active:scale-95 rounded-lg text-sm cursor-pointer bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden inline-block"
                >
                  <span className="relative z-10">Resume</span>
                  <span className="absolute top-0 w-1/4 h-full -left-24 bg-white/20 blur-sm group-hover:left-40 duration-1000 transition-all ease-out z-0"></span>
                </a>
              </div>
              <div
                onClick={() => setOpen(true)}
                className="bg-white/10 border border-white/20 py-1.5 px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10 lg:hidden flex items-center justify-center"
              >
                <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-44 duration-700"></div>
                <a className="py-2 lg:py-2.5 px-4 md:px-6 lg:px-8 rounded-lg text-sm cursor-pointer bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden inline-block">
                  <span className="relative z-10">
                    <RiMenu2Fill className="text-xl" />
                  </span>
                  <span className="absolute top-0 w-1/4 h-full -left-24 bg-white/20 blur-sm group-hover:left-40 duration-1000 transition-all ease-out z-0"></span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
