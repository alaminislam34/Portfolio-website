import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const SkillSlider = ({ skills }) => {
  const [index, setIndex] = useState(0);

  // Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="w-full flex justify-center items-center py-12 bg-[#111] overflow-hidden">
      <div className="w-72 md:w-80 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={skills[index].name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="p-4 h-64 w-full rounded-[20px_40px_20px_20px] border border-fuchsia-400/20 flex flex-col justify-between bg-[#1a1a1a]"
          >
            <div className="p-4 flex justify-center items-center">
              <img
                src={skills[index].image}
                alt={skills[index].name}
                className="h-32 rounded-md mb-4"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-center text-white">
              {skills[index].name}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillSlider;
