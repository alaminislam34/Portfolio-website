import { Typewriter } from "react-simple-typewriter";

const TypingAnimation = () => {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium bg-gradient-to-tr from-purple-600 to-purple-500 bg-clip-text text-transparent">
      <p className="font-semibold">
        <Typewriter
          words={["MERN Stack Developer", "React Specialist", "UI/UX Designer"]}
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
