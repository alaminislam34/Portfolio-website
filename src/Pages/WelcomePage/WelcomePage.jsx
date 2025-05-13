// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const WelcomePage = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setHide(true);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[999] h-screen w-screen flex items-center justify-center transition-opacity duration-1000 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      } `}
    >
      <div className="relative w-full h-full bg-black text-white flex justify-center items-center">
        <div className="absolute inset-0 z-0">
          {/* Gradient Motion Layers */}
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "40vw",
              height: "40vw",
              background:
                "linear-gradient(40deg, rgba(128, 0, 255, 0.01), rgba(102, 0, 204, 0.01))",
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

          {/* Radial center glow */}
          <div
            className="absolute w-[40vw] h-[40vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(72, 0, 255, 0.15), transparent 70%)",
            }}
          />

          {/* Grid lines */}
          <div className="absolute inset-0 z-10 bg-[length:40px_40px] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />

          {/* Noise texture */}
          <div
            className="absolute inset-0 z-10 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
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
            style={{ WebkitTextStroke: "1px white" }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-wide text-purple-500/10"
          >
            <Typewriter words={["<Hello World! />..."]} />
          </motion.h1>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-xl md:text-3xl font-semibold text-center text-white"
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
    </div>
  );
};

export default WelcomePage;
