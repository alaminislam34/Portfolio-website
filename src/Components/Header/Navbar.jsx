import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-scroll";
import { RiMenu2Fill } from "react-icons/ri";
import { X } from "lucide-react";
import logo from "../../assets/logo/logo2.png";

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
  const [activeNav, setActiveNav] = useState("home");

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

          {/* DESKTOP NAV */}
          <div
            className="hidden md:flex items-center pointer-events-auto relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
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
                            ${
                              activeNav === link.path
                                ? "text-white"
                                : "text-white/40 hover:text-white/70"
                            }`}
                          >
                            {link.name}
                          </Link>

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

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden pointer-events-auto w-[50px] h-[50px] rounded-full border border-white/10 bg-black/70 backdrop-blur-xl flex items-center justify-center text-white"
          >
            <RiMenu2Fill size={22} />
          </button>
        </header>
      </section>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-[280px] h-screen bg-[#0a0a0a] border-l border-white/10 z-[300] p-6"
            >
              {/* CLOSE BUTTON */}
              <div className="flex justify-end mb-10">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white"
                >
                  <X size={28} />
                </button>
              </div>

              {/* MOBILE LINKS */}
              <ul className="flex flex-col gap-6">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      smooth={true}
                      spy={true}
                      offset={-70}
                      onClick={() => setMobileOpen(false)}
                      onSetActive={() => setActiveNav(link.path)}
                      className={`text-xl font-semibold cursor-pointer transition-all duration-300
                      ${
                        activeNav === link.path ? "text-white" : "text-white/50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
