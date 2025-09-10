// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
const WelcomePage = () => {
  return (
    <div
      className={`fixed top-0 left-0 z-[999] h-screen w-screen flex items-center justify-center transition-opacity duration-1000 `}
    >
      <div className="relative w-full h-full bg-black text-white flex justify-center items-center">
        {/* Background and animations (unchanged) */}
        {/* ... same as your previous background code ... */}

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
