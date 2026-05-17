import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-scroll";
import { RiMenu2Fill } from "react-icons/ri";
import { X } from "lucide-react";
import logo from "../../assets/logo/logo2.png";
import CommonLink from "../CommonLink";

const links = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home"); // Active state track করার জন্য

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuExpanded = !isScrolled || isHovered;

  return (
    <>
      <section className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
        <header className="max-w-[1440px] mx-auto py-6 px-6 md:px-12 flex items-center justify-between">
          {/* LOGO */}
          <div className="pointer-events-auto">
            <Link to="home" smooth={true} className="cursor-pointer">
              <img src={logo} alt="Logo" className="h-8 md:h-9 w-auto" />
            </Link>
          </div>

          {/* RIGHT SIDE NAV */}
          <div
            className="flex items-center pointer-events-auto relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* GHOST TRIGGER: To maintain hover state smoothly */}
            <div className="absolute inset-y-[-10px] right-0 w-full min-w-[60px]" />

            <motion.nav
              initial={false}
              animate={{
                width: menuExpanded ? "auto" : "54px",
                backgroundColor: isScrolled
                  ? "rgba(10, 10, 10, 0.9)"
                  : "rgba(255, 255, 255, 0.05)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative z-10 flex items-center h-[54px] border border-white/10 backdrop-blur-2xl rounded-full overflow-hidden shadow-2xl"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {menuExpanded ? (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center gap-2 px-3 whitespace-nowrap"
                  >
                    <ul className="flex items-center gap-1">
                      {links.map((link) => (
                        <li key={link.path} className="relative">
                          <Link
                            to={link.path}
                            smooth={true}
                            spy={true}
                            offset={-70}
                            onSetActive={() => setActiveNav(link.path)}
                            className={`relative z-10 px-4 py-2 rounded-full font-bold transition-all duration-300 cursor-pointer block
                              ${activeNav === link.path ? "text-white" : "text-white/40 hover:text-white/70"}`}
                          >
                            {link.name}
                          </Link>

                          {/* Active Indicator Span */}
                          {activeNav === link.path && (
                            <motion.span
                              layoutId="activeBackground"
                              className="absolute inset-0 bg-white/10 rounded-full z-0"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              }}
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex w-[54px] shrink-0 items-center justify-center text-purple-500"
                  >
                    <RiMenu2Fill size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.nav>
          </div>
        </header>
      </section>
    </>
  );
};

export default Navbar;
