import { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import gsap from "gsap";

const GradientBackground = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const particlesContainer = particlesRef.current;
    const particleCount = 80;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className =
        "absolute bg-white rounded-full opacity-0 pointer-events-none";

      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      resetParticle(particle);

      particlesContainer.appendChild(particle);
      animateParticle(particle);
    };

    const resetParticle = (particle) => {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = "0";

      return { x: posX, y: posY };
    };

    const animateParticle = (particle) => {
      const pos = resetParticle(particle);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;

        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;

        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        setTimeout(() => animateParticle(particle), duration * 1000);
      }, delay * 1000);
    };

    for (let i = 0; i < particleCount; i++) createParticle();

    const mouseHandler = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      const particle = document.createElement("div");
      particle.className = "absolute bg-white rounded-full pointer-events-none";
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;

      particlesContainer.appendChild(particle);

      gsap.to(particle, {
        opacity: 0,
        duration: 1,
        onComplete: () => particlesContainer.removeChild(particle),
      });
    };

    document.addEventListener("mousemove", mouseHandler);
    return () => document.removeEventListener("mousemove", mouseHandler);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10">
      <div className="relative w-full h-full bg-black text-white font-sans">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "40vw",
              height: "40vw",
              background:
                "linear-gradient(40deg, rgba(255, 0, 128, 0.1), rgba(255, 102, 0, 0.1))",
              top: "-10%",
              left: "-10%",
            }}
            animate={{ x: ["0%", "-20%", "-40%", "-60%", "-80%", "-100%"] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "45vw",
              height: "45vw",
              background:
                "linear-gradient(240deg, rgba(72, 0, 255, 0.1), rgba(0, 183, 255, 0.1))",
              bottom: "-20%",
              right: "-10%",
            }}
            animate={{ x: ["0%", "-20%", "-40%", "-60%", "-80%", "-100%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "30vw",
              height: "30vw",
              background:
                "linear-gradient(120deg, rgba(133, 89, 255, 0.1), rgba(98, 216, 249, 0.1))",
              top: "60%",
              left: "20%",
            }}
            animate={{ x: ["0%", "-20%", "-40%", "-60%", "-80%", "-100%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <div
            className="absolute w-[40vw] h-[40vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(72, 0, 255, 0.15), transparent 70%)",
            }}
          />
          <div className="absolute inset-0 z-10 bg-[length:40px_40px] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
          <div
            ref={particlesRef}
            className="absolute inset-0 z-20 pointer-events-none"
          />
          <div
            className="absolute inset-0 z-10 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GradientBackground;
