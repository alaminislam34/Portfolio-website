/* eslint-disable react/prop-types */
import { motion } from "motion/react";

const SkillSlider = ({ skills }) => {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-8 py-12"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-4 h-64 w-64 rounded-[20px_40px_20px_20px] border flex flex-col justify-between"
          >
            <div className="p-4 flex justify-center items-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="h-32 rounded-md mb-4"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-center text-white">
              {skill.name}
            </h2>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillSlider;
