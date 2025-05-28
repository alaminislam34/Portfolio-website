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
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-[100] opacity-80"
      />
      {/*  *******************************Gradient Motion Layers Start****************************** */}
      <div className="absolute inset-0 -z-10 bg-[length:20px_20px] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: "40vw",
          height: "40vw",

          top: "-10%",
          left: "-10%",
          animation: "moveGradient1 15s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: "45vw",
          height: "45vw",

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

          top: "60%",
          left: "20%",
          animation: "moveGradient3 20s ease-in-out infinite alternate",
        }}
      />

      {/*  *******************************Gradient Motion Layers END****************************** */}
    </>
  );
};

export default GradientBackground;
