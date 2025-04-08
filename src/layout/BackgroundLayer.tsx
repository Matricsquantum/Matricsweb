import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../styles/background.css";

const BackgroundLayer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="background-layer absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          background: { color: "#000" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            number: {
              value: 80,
              density: { enable: true, value_area: 800 },
            },
            color: { value: "#00ffff" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 1 },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: "out" },
            },
          },
        }}
      />
    </div>
  );
};

export default BackgroundLayer;
