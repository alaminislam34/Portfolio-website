import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Code2,
  FolderOpen,
  Mail,
  Menu,
  X,
  FileText,
} from "lucide-react";
import Logo from '../../assets/logo/AA.jpg'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);
  const lastScrollY = useRef(0);
  const [activeSection, setActiveSection] = useState("home");

  // Intersection Observer for active section
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -10% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Optimized scroll listener (throttled)
  useEffect(() => {
    let timeout = null;

    const handleScroll = () => {
      if (timeout) return;
      timeout = setTimeout(() => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY > lastScrollY.current);
        lastScrollY.current = currentScrollY;
        timeout = null;
      }, 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "home", icon: <Home className="w-4 h-4" /> },
    { name: "About", path: "about", icon: <User className="w-4 h-4" /> },
    { name: "Skills", path: "skills", icon: <Code2 className="w-4 h-4" /> },
    {
      name: "Projects",
      path: "projects",
      icon: <FolderOpen className="w-4 h-4" />,
    },
    { name: "Contact", path: "contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <header className="h-[76px]">
      {/* Navbar Wrapper */}
      <div
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
          scrollY ? "backdrop-blur-md" : ""
        }`}
      >
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="my-2 rounded-xl border backdrop-blur-xl border-white/10 max-w-7xl w-11/12 mx-auto"
        >
          <div className="flex items-center justify-between py-2 px-4 rounded-[14px] bg-gradient-to-r from-[#1f1f2e]/80 via-[#2b1b36]/80 to-[#1f1f2e]/80 shadow-md shadow-purple-900/10 relative">
            {/* Logo */}
            <Link to="home" smooth={true} duration={500}>
              <img
                loading="lazy"
                src={Logo}
                alt="logo"
                className="h-12 md:h-14 rounded-md"
              />
            </Link>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-6 text-sm">
              {links.map(({ name, path }) => (
                <li key={path} className="relative group">
                  <Link
                    to={path}
                    smooth={true}
                    duration={500}
                    className={`px-3 py-2 transition ${
                      activeSection === path
                        ? "bg-gradient-to-r from-[#a48af0] via-[#b297f1] to-[#c4b0f3] bg-clip-text text-transparent font-semibold"
                        : "text-white"
                    }`}
                  >
                    {name}
                  </Link>
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>

            {/* Resume + Toggle */}
            <div className="flex items-center gap-3">
              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1qRSADF-JFIjXiVWGD7wmunUomS4LjAcO/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-1 py-2 px-5 rounded-lg text-sm bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white shadow-md hover:shadow-lg transition"
              >
                <FileText className="w-4 h-4" /> Resume
              </a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 rounded-md bg-white/10 border border-white/20 text-white"
              >
                {open ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ y: -300 }}
            animate={{ y: open ? 0 : -300 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-gradient-to-r from-[#1f1f2e] via-[#2b1b36] to-[#1f1f2e] backdrop-blur-xl text-white rounded-xl overflow-hidden"
          >
            <ul className="flex flex-col p-6 space-y-4">
              {links.map(({ name, path, icon }) => (
                <li key={path} className="text-center">
                  <Link
                    to={path}
                    smooth={true}
                    duration={500}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-fuchsia-700/20 transition"
                  >
                    {icon} {name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://drive.google.com/file/d/1qRSADF-JFIjXiVWGD7wmunUomS4LjAcO/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center py-2 rounded-lg bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
