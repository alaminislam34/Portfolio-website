import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBackground = () => {
  const particlesRef = useRef(null);
  const particlePool = useRef([]);
  const maxParticles = 25; // Slightly increased particle count for better density

  useEffect(() => {
    const container = particlesRef.current;

    // --- 1. Fixed Background Particle Setup (Using GSAP) ---
    function animateParticle(particle) {
      const duration = Math.random() * 8 + 12; // Duration 12s - 20s
      const moveX = (Math.random() * 20 - 10);
      const moveY = (Math.random() * 30 - 15);
      const opacity = 0.1 + Math.random() * 0.4;

      // Set initial state randomly across the viewport
      gsap.set(particle, {
        x: `${Math.random() * window.innerWidth}px`,
        y: `${Math.random() * window.innerHeight}px`,
        opacity: 0,
      });

      // Animate the particle
      gsap.to(particle, {
        x: `+=${moveX}%`, // Use percentage for relative movement
        y: `+=${moveY}%`,
        opacity: opacity,
        duration: duration,
        ease: "none", // Consistent floating movement
        repeat: -1,
        yoyo: true, // Float back and forth
        delay: Math.random() * 5, // Stagger start times
      });
    }

    // Create particle pool once
    for (let i = 0; i < maxParticles; i++) {
      const particle = document.createElement("div");
      Object.assign(particle.style, {
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        position: "absolute",
        borderRadius: "9999px",
        backgroundColor: "#fff", // White particles for contrast
        boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.4)", // Subtle glow
        pointerEvents: "none",
        opacity: 0,
        zIndex: 20,
      });
      container.appendChild(particle);
      particlePool.current.push(particle);
      animateParticle(particle);
    }

    // --- 2. Mouse Particle Handler (Throttled) ---
    let lastMove = 0;
    const mouseHandler = (e) => {
      const now = Date.now();
      // Increased throttle for better performance (one particle every 200ms)
      if (now - lastMove < 200) return; 
      lastMove = now;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const particle = document.createElement("div");
      const size = Math.random() * 4 + 2;

      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        position: "absolute",
        borderRadius: "9999px",
        // Use a primary accent color for the mouse trail
        backgroundColor: "#EC4899", // Fuchsia-500
        left: `${mouseX}px`,
        top: `${mouseY}px`,
        pointerEvents: "none",
        zIndex: 50,
      });

      container.appendChild(particle);

      // GSAP to animate opacity out and then remove the element
      gsap.to(particle, {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        onComplete: () => {
          if (container.contains(particle)) {
            container.removeChild(particle);
          }
        },
      });
    };

    document.addEventListener("mousemove", mouseHandler);

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", mouseHandler);
      // Kill all GSAP animations when the component unmounts
      particlePool.current.forEach(p => gsap.killTweensOf(p));
      gsap.killTweensOf(container.children); 
    };
  }, []); // Empty dependency array ensures this runs once

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[-999] bg-[#040113]"> 
      <div className="relative w-full h-full text-white font-sans">
        <div className="absolute inset-0 z-0">
          
          {/* --- Motion Gradients (Professional Glow) --- */}
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "40vw",
              height: "40vw",
              // Fuchsia Glow
              background: "radial-gradient(circle, rgba(236, 72, 153, 0.2), transparent 70%)", 
              top: "5%",
              left: "5%",
              animation: "float1 16s ease-in-out infinite alternate",
            }}
          />
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "45vw",
              height: "45vw",
              // Indigo/Blue Glow
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.25), transparent 70%)",
              bottom: "10%",
              right: "5%",
              animation: "float2 20s ease-in-out infinite alternate",
            }}
          />
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "30vw",
              height: "30vw",
              // Purple/Violet Glow
              background: "radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent 70%)",
              top: "50%",
              left: "25%",
              animation: "float3 14s ease-in-out infinite alternate",
            }}
          />

          {/* Center Glow (Subtle anchor point) */}
          <div
            className="absolute w-[40vw] h-[40vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(72, 0, 255, 0.1), transparent 70%)", // Reduced opacity
            }}
          />

          {/* Grid (Subtle texture) */}
          <div className="absolute inset-0 z-10 bg-[length:40px_40px] bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)]" />

          {/* Particles Container (Used by JS) */}
          <div
            ref={particlesRef}
            className="absolute inset-0 z-20 pointer-events-none"
          />

          {/* Optional: Noise layer (Retained for grain texture) */}
          <div
            className="absolute inset-0 z-10 opacity-5"
            style={{
              // Inline SVG for noise for easy deployment
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* --- Global CSS Keyframe Animations for Smooth Floating --- */}
      <style>{`
        @keyframes float1 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(15vw, -10vh) scale(1.05); }
            100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes float2 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-10vw, 15vh) scale(0.95); }
            100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes float3 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20vw, 5vh) scale(1.1); }
            100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;