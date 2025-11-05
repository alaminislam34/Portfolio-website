import { useEffect, useRef } from "react";
import gsap from "gsap";

const SparkleBadge = ({text}) => {
  const badgeRef = useRef(null);

  useEffect(() => {
    const sparkles = badgeRef.current.querySelectorAll(".sparkle");
    const text = badgeRef.current.querySelector(".badge-text");

    // Sparkle scale + float animation
    sparkles.forEach((el, i) => {
      gsap.fromTo(
        el,
        { scale: 0.6 },
        {
          scale: 1.3,
          y: i % 2 === 0 ? -4 : 4,
          duration: 1.8 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        }
      );
    });

    // Text breathing effect
    gsap.fromTo(
      text,
      { scale: 1 },
      {
        scale: 1.12,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <span
      ref={badgeRef}
      className="relative inline-block px-8 py-3 font-semibold text-white tracking-wide select-none"
    >
      {/* Sparkles */}
      <span className="sparkle absolute top-0 left-0 text-xl">✨</span>
      <span className="sparkle absolute top-0 left-8 text-base">✨</span>
      <span className="sparkle absolute -bottom-2 -right-2 text-xl">✨</span>
      <span className="sparkle absolute -bottom-1 right-6 text-sm">✨</span>

      {/* Text */}
      <span className="badge-text relative z-10">{text}</span>

      {/* Glow Background */}
      <span className="bg-gradient-to-r from-[#330091] via-[#580097] to-[#6c0097] rounded-full absolute inset-0 -z-10 blur-xl opacity-90"></span>
    </span>
  );
};

export default SparkleBadge;
