import React from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1,  // Ensures it stays in the background
      }}
      init={particlesInit}
      options={{
        background: {
          color: "#1e3c72",
        },
        particles: {
          number: {
            value: 50,
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;