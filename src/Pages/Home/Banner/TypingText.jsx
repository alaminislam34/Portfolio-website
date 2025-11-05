import { color } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

const TypingAnimation = () => {
  return (
    <div className="">
      <p className="text-xl md:text-2xl lg:text-4xl font-medium conthrax">
        <Typewriter
          words={[
            "React Specialist",
            "Next.js Specialist",
            "Junior Mern Specialist",
          ]}
          loop={0}
          typeSpeed={150}
          cursor
          cursorColor="white"
          deleteSpeed={20}
          delaySpeed={1200}
        />
      </p>
    </div>
  );
};

export default TypingAnimation;
