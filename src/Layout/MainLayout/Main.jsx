import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import AnimatedBackground from "../../Components/AnimatedBackground";
import { ArrowUp } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import GradientBackground from "../../Components/MatrixRain/Matrix";

const Main = () => {
  const [show, setShow] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);

      if (scrollTop > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div className="overflow-hidden relative">
      <Navbar />
      <section className="max-w-7xl w-11/12 mx-auto min-h-[75vh] mb-12 overflow-hidden">
        <Outlet />
      </section>
      <Footer />
      <GradientBackground />
      <AnimatedBackground />
      <ToastContainer autoClose={3000} hideProgressBar={true} />

      {/* Scroll to Top Button */}
      <div className="relative">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className={`fixed bottom-4 right-4 z-50 lg:right-6 lg:bottom-8 ${
            show ? "block" : "hidden"
          }`}
        >
          <div className="relative w-14 h-14">
            {/* Progress Circle */}
            <svg className="absolute top-0 left-0" width="56" height="56">
              <circle
                cx="28"
                cy="28"
                r={radius}
                stroke="#a855f7"
                strokeWidth="4"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
              />
            </svg>

            {/* Arrow Icon with Glass Effect */}
            <Link to="home" smooth={true} duration={500}>
              <ArrowUp
                size={40}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 text-white cursor-pointer bg-gradient-to-br from-fuchsia-900/70 to-fuchsia-500/40 backdrop-blur-lg rounded-full"
              />
            </Link>
            {/* Glow shadow underneath */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/50 filter blur-[5px] h-2 rounded-[50%] w-[90%]"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
