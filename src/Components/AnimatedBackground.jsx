import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBackground = () => {
  const particlesRef = useRef(null);
  const particlePool = useRef([]);
  const maxParticles = 30;

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    // Ambient floating particles
    function animateParticle(particle) {
      const duration = Math.random() * 10 + 15;
      const moveX = Math.random() * 100 - 50;
      const moveY = Math.random() * 100 - 50;
      const opacity = 0.05 + Math.random() * 0.2;

      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0,
      });

      gsap.to(particle, {
        x: `+=${moveX}`,
        y: `+=${moveY}`,
        opacity: opacity,
        duration: duration,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 5,
      });
    }

    // Initialize static particles
    for (let i = 0; i < maxParticles; i++) {
      const particle = document.createElement("div");
      Object.assign(particle.style, {
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        position: "absolute",
        borderRadius: "50%",
        backgroundColor: "#8B5CF6", // Purple accent
        boxShadow: "0 0 8px 1px rgba(139, 92, 246, 0.4)",
        pointerEvents: "none",
      });
      container.appendChild(particle);
      particlePool.current.push(particle);
      animateParticle(particle);
    }

    // Mouse trail logic
    let lastMove = 0;
    const mouseHandler = (e) => {
      const now = Date.now();
      if (now - lastMove < 150) return;
      lastMove = now;

      const trail = document.createElement("div");
      Object.assign(trail.style, {
        width: "4px",
        height: "4px",
        position: "absolute",
        borderRadius: "50%",
        backgroundColor: "#8B5CF6",
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        pointerEvents: "none",
        boxShadow: "0 0 15px #8B5CF6",
      });

      container.appendChild(trail);

      gsap.to(trail, {
        opacity: 0,
        scale: 2,
        y: "+=20",
        duration: 1.2,
        onComplete: () => {
          if (container.contains(trail)) container.removeChild(trail);
        },
      });
    };

    window.addEventListener("mousemove", mouseHandler);

    return () => {
      window.removeEventListener("mousemove", mouseHandler);
      particlePool.current.forEach((p) => gsap.killTweensOf(p));
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden">
      {/* 1. Obsidian Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 2. Soft Neon Gradients */}
      <div
        className="absolute rounded-full blur-[120px] opacity-20"
        style={{
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, #8B5CF6, transparent 70%)",
          top: "-10%",
          right: "-10%",
          animation: "floatPulse 20s infinite alternate ease-in-out",
        }}
      />
      <div
        className="absolute rounded-full blur-[120px] opacity-[0.15]"
        style={{
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, #4F46E5, transparent 70%)",
          bottom: "-5%",
          left: "-5%",
          animation: "floatPulse 25s infinite alternate-reverse ease-in-out",
        }}
      />

      {/* 3. Particle/Trail Layer */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* 4. Film Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <style>{`
        @keyframes floatPulse {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(40px, 40px) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
