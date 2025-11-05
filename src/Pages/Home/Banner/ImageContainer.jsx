import  { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

// Assuming 'image' is passed as a prop
const ModernImageContainer = ({ image }) => {
  // --- Refs for GSAP Targets ---
  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const codeBubbleRef = useRef(null);
  const innovationBubbleRef = useRef(null);

  useLayoutEffect(() => {
    // GSAP Context to manage and revert animations easily
    let ctx = gsap.context(() => {
      // 1. Floating Text Animation (Continuous, Looping Motion)
      const floatDuration = 4; // base duration
      const floatAmount = 15; // vertical float pixels

      // Clean Code Bubble
      gsap.to(codeBubbleRef.current, {
        y: floatAmount,
        rotation: 0.5, // Subtle rotation for a 3D float
        ease: "sine.inOut",
        duration: floatDuration,
        repeat: -1,
        yoyo: true,
      });

      // Innovation Bubble (Slower and different rotation for variety)
      gsap.to(innovationBubbleRef.current, {
        y: floatAmount * 0.8,
        rotation: -0.7,
        ease: "sine.inOut",
        duration: floatDuration * 1.5,
        repeat: -1,
        yoyo: true,
      });

      // 2. Ring Animation (Continuous Rotation with Scale 'Pulse')
      gsap.to(ringRef.current, {
        rotation: 360,
        scale: 1.05, // Subtle pulse effect
        duration: 10,
        ease: "linear",
        repeat: -1,
        transformOrigin: "center center",
      });

      // To bring the scale back down to create the pulse
      gsap.to(ringRef.current, {
        scale: 1,
        duration: 5, // Half the duration of the rotation
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, containerRef); // <- scope all animations to the containerRef

    return () => ctx.revert(); // <- cleanup
  }, []);

  return (
    <div
      ref={containerRef}
      data-aos="zoom-in"
      className="flex justify-center items-center h-full w-full relative my-10 lg:col-span-3 min-h-[500px]"
    >
      {/* --- Floating Text 1 (Clean Code) --- */}
      {/* Using ref for GSAP, removed previous Framer Motion 'animate' prop */}
      <div
        ref={codeBubbleRef}
        className="px-6 py-3 text-sm leading-normal tracking-widest rounded-full backdrop-blur-md border border-purple-400/20 shadow-lg 
                   bg-gradient-to-r from-purple-700/50 to-pink-500/50 
                   absolute -left-4 top-12 z-20 transition-shadow hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
        style={{ willChange: "transform" }} // Optimization for smooth GSAP animation
      >
        <span>Clean Code</span>
      </div>

      {/* --- Floating Text 2 (Innovation) --- */}
      <div
        ref={innovationBubbleRef}
        className="px-6 py-3 text-sm leading-normal tracking-widest rounded-full backdrop-blur-md border border-yellow-400/20 shadow-lg 
                   bg-gradient-to-r from-yellow-700/50 to-amber-500/50 
                   absolute right-4 bottom-1/4 z-20 transition-shadow hover:shadow-[0_0_20px_rgba(252,211,77,0.5)]"
        style={{ willChange: "transform" }} // Optimization for smooth GSAP animation
      >
        <span>Innovation</span>
      </div>

      {/* --- Main Image Frame Container --- */}
      <div className="w-full max-h-[700px] h-full flex justify-center items-center px-4 relative">
        <div className="relative w-5/6 h-5/6 aspect-square flex items-center justify-center p-6 bg-black/50 rounded-[4rem] shadow-2xl shadow-purple-500/20">
          {/* --- Rotating Ring (GSAP Target) --- */}
          <div
            ref={ringRef}
            className="absolute w-[110%] h-[110%] rounded-full z-10"
            style={{
              // Use a CONIC-GRADIENT for a crisp 'scan line' look (Option 2 idea)
              background:
                "conic-gradient(transparent 0deg, transparent 330deg, #a78bfa 350deg, transparent 360deg)",
              // Mask to create the thin ring
              maskImage:
                "radial-gradient(ellipse at center, transparent 96%, black 97%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, transparent 96%, black 97%)",
              willChange: "transform", // Optimization for smooth GSAP animation
            }}
          />

          {/* --- Image Container (Glassmorphism Look) --- */}
          <div
            className="relative w-full h-full aspect-square overflow-hidden rounded-[3rem] p-3
                       bg-white/5 backdrop-blur-xl border border-purple-300/10 shadow-[0_0_40px_rgba(125,5,255,0.1)]"
          >
            {/* Inner Image Div (for better control of image effects) */}
            <div className="w-full h-full relative overflow-hidden rounded-[2.5rem]">
              <img
                src={image}
                alt="alamin"
                className="w-full h-full object-cover bg-top scale-[1.03] transition-transform duration-500 hover:scale-100"
                loading="lazy"
              />
              {/* Subtle top/bottom gradient overlay for a richer look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernImageContainer;
