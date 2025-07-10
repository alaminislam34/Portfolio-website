import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Detect hover over interactive elements
    // const checkHover = (e) => {
    //   const target = e.target;
    //   const tag = target.tagName.toLowerCase();
    //   const isInteractive =
    //     ["a", "button", "input", "textarea", "select", "label"].includes(tag) ||
    //     target.getAttribute("role") === "button";

    //   setIsHovered(isInteractive);
    // };
    const checkHover = (e) => {
      const interactiveElement = e.target.closest(
        "a, button, input, textarea, select, label, [role='button']"
      );

      setIsHovered(!!interactiveElement);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{
        transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div
        className={`w-6 h-6 rounded-full border border-purple-400/50 transition-all duration-200 ease-out ${
          isHovered ? "scale-200" : "scale-100"
        }`}
      />
    </div>
  );
}
