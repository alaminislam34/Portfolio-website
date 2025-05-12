// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const WelcomePage = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setHide(true);
    }, 5000);

    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div
      className={`fixed top-0 left-0 z-[999] h-screen w-screen flex items-center justify-center transition-opacity duration-1000 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      } bg-gradient-to-br from-[#0a0a0a] via-[#1c0a1d] to-[#2a0f30] text-white`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="text-center space-y-6 px-6"
      >
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-500"
        >
          <Typewriter
            words={["<Hello World! />"]}
            loop={1}
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </motion.h1>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-xl md:text-3xl font-medium text-white"
        >
          <Typewriter
            words={["Welcome to my Portfolio."]}
            loop={1}
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default WelcomePage;
