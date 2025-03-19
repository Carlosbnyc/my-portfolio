import React from "react";
import { Particles } from "@tsparticles/react";

const ParticlesBackground: React.FC = () => {
  return (
    <Particles
      id="tsparticles"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      options={{
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 100,
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
            random: true,
          },
          size: {
            value: 2,
            random: true,
          },
          move: {
            enable: true,
            speed: 1.5,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;