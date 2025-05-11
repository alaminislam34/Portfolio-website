import { useEffect, useRef } from "react";

const GradientBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let gradientOffset = 0;

    function drawGradient() {
      const gradient = ctx.createLinearGradient(
        gradientOffset,
        0,
        canvas.width + gradientOffset,
        0
      );
      gradient.addColorStop(0, "#0d071c");
      gradient.addColorStop(0.3, "#0f0214");
      gradient.addColorStop(0.5, "#040113");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function animateGradient() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGradient();
      gradientOffset += 1; // Change this speed if needed
      if (gradientOffset > canvas.width) gradientOffset = 0;

      requestAnimationFrame(animateGradient);
    }

    animateGradient();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-80"
    />
  );
};

export default GradientBackground;
