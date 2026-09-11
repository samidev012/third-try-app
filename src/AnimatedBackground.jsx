import React, { useEffect, useRef } from "react";
import "./AnimatedBackground.css";

function AnimatedBackground() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;

      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      bgRef.current.style.setProperty("--mouse-x", `${x}%`);
      bgRef.current.style.setProperty("--mouse-y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={bgRef} className="animated-bg">

      {/* Big animated gradient */}
      <div className="gradient-layer"></div>

      {/* Moving light blobs */}
      <div className="light light-purple"></div>
      <div className="light light-blue"></div>
      <div className="light light-pink"></div>

      {/* Mouse follower */}
      <div className="mouse-glow"></div>

      {/* Animated grid */}
      <div className="animated-grid"></div>

      {/* Particles */}
      <div className="particle p1"></div>
      <div className="particle p2"></div>
      <div className="particle p3"></div>
      <div className="particle p4"></div>
      <div className="particle p5"></div>
      <div className="particle p6"></div>
      <div className="particle p7"></div>
      <div className="particle p8"></div>
      <div className="particle p9"></div>
      <div className="particle p10"></div>

      {/* Noise / darkness */}
      <div className="dark-overlay"></div>

    </div>
  );
}

export default AnimatedBackground;
