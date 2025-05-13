import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import AnimatedBackground from "../../Components/AnimatedBackground";
import { ArrowUp } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import WelcomePage from "../../Pages/WelcomePage/WelcomePage";

const Main = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`overflow-hidden relative`}>
      <Navbar />
      <section className="max-w-7xl w-11/12 mx-auto min-h-[75vh] mb-12">
        <Outlet />
      </section>
      <Footer />
      <AnimatedBackground />
      <WelcomePage />
      <ToastContainer autoClose={3000} hideProgressBar={true} />
      <div className="relative">
        <motion.div
          animate={{
            y: [0, -10, 0], // up and down
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`fixed bottom-4 right-4 z-50 lg:right-6 lg:bottom-8 ${
            show ? "block" : "hidden"
          }`}
        >
          <Link to="home" smooth={true} duration={500}>
            <ArrowUp
              size={40}
              className="text-2xl cursor-pointer bg-gradient-to-br p-2 from-fuchsia-900/70 to-fuchsia-500/40 backdrop-blur-lg rounded-full"
            />
          </Link>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/50 filter blur-[5px] h-2 rounded-[50%] w-[90%]"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
