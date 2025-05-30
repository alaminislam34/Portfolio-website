import { Typewriter } from "react-simple-typewriter";

const TypingAnimation = () => {
  return (
    <h1 className="text-xl md:text-2xl lg:text-3xl font-medium bg-gradient-to-tr from-purple-500 to-purple-400 bg-clip-text text-transparent">
      <p className="font-semibold conthrax">
        <Typewriter
          words={[
            "Junior Backend Developer",
            "Front End Specialist",
            "Mern Stack Developer",
          ]}
          loop={0}
          typeSpeed={150}
          cursor
          cursorColor="white"
          deleteSpeed={100}
          delaySpeed={1200}
        />
      </p>
    </h1>
  );
};

export default TypingAnimation;
