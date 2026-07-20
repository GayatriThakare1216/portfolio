import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

  return (
    <Particles
      id="particles"
      init={particlesInit}
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      options={{
        fullScreen: {
          enable: false,
        },

        particles: {

          number: {
            value: 80,
          },

          color: {
            value: "#3b82f6",
          },

          links: {
            enable: true,
            color: "#3b82f6",
            distance: 150,
            opacity: 0.5,
          },

          move: {
            enable: true,
            speed: 2,
          },

          size: {
            value: 4,
          },

          opacity: {
            value: 0.8,
          },

        },
      }}
    />
  );
}

export default ParticlesBackground;