import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBackground = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const particlesContainer = particlesRef.current;
    const particleCount = 20;

    const createParticle = () => {
      const particle = document.createElement("div");
      const size = Math.random() * 3 + 1;

      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        position: "absolute",
        borderRadius: "9999px",
        backgroundColor: "#fff",
        pointerEvents: "none",
        opacity: "0",
      });

      particlesContainer.appendChild(particle);
      animateParticle(particle);
    };

    const resetParticle = (particle) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      Object.assign(particle.style, {
        left: `${x}%`,
        top: `${y}%`,
        opacity: "0",
      });
      return { x, y };
    };

    const animateParticle = (particle) => {
      const { x, y } = resetParticle(particle);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      setTimeout(() => {
        const moveX = x + (Math.random() * 20 - 10);
        const moveY = y - Math.random() * 30;

        Object.assign(particle.style, {
          transition: `all ${duration}s linear`,
          opacity: Math.random() * 0.3 + 0.1,
          left: `${moveX}%`,
          top: `${moveY}%`,
        });

        setTimeout(() => animateParticle(particle), duration * 1000);
      }, delay * 1000);
    };

    for (let i = 0; i < particleCount; i++) createParticle();

    const mouseHandler = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      const particle = document.createElement("div");
      const size = Math.random() * 4 + 2;

      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        position: "absolute",
        borderRadius: "9999px",
        backgroundColor: "#fff",
        left: `${mouseX}%`,
        top: `${mouseY}%`,
        pointerEvents: "none",
      });

      particlesContainer.appendChild(particle);

      gsap.to(particle, {
        opacity: 0,
        duration: 0.6,
        onComplete: () => {
          if (particlesContainer.contains(particle)) {
            particlesContainer.removeChild(particle);
          }
        },
      });
    };

    document.addEventListener("mousemove", mouseHandler);
    return () => document.removeEventListener("mousemove", mouseHandler);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-50">
      <div className="relative w-full h-full bg-black text-white font-sans">
        <div className="absolute inset-0 z-0">
          {/* Gradient Motion Layers */}
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "40vw",
              height: "40vw",
              background:
                "linear-gradient(40deg, #06010d, rgba(102, 0, 204, 0.01))",
              top: "-10%",
              left: "-10%",
              animation: "moveGradient1 10s ease-in-out infinite alternate",
            }}
          />
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "45vw",
              height: "45vw",
              background:
                "linear-gradient(40deg, #06010d, rgba(118, 75, 162, 0.1))",

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
              background: "radial-gradient(circle, #06010d, transparent 70%)",
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

          {/* Particles */}
          <div
            ref={particlesRef}
            className="absolute inset-0 z-20 pointer-events-none"
          />
          {/* Noise texture */}
          <div
            className="absolute inset-0 z-10 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>
      {/* Custom animations using CSS */}
      <style>{`
        @keyframes moveGradient1 {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes moveGradient2 {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes moveGradient3 {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
