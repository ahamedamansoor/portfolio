import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

interface ParticlesBackgroundProps {
  id?: string;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ id = 'tsparticles' }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false
        },
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "bubble",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 40,
                smooth: 20
              }
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: [
              "#FF6B6B",  // Coral
              "#4ECDC4",  // Turquoise
              "#45B7D1",  // Sky Blue
              "#96CEB4",  // Sage
              "#FFEEAD",  // Cream
              "#D4A5A5",  // Dusty Rose
              "#9E7BB5",  // Purple
              "#87CEEB",  // Sky
              "#98FB98",  // Pale Green
              "#DDA0DD"   // Plum
            ],
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 15,
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.4,
              sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 30, max: 60 },
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 25,
              sync: false
            }
          },
          wobble: {
            enable: true,
            distance: 10,
            speed: 2
          },
          roll: {
            enable: true,
            speed: 5
          },
          tilt: {
            enable: true,
            value: {
              min: 0,
              max: 360
            },
            animation: {
              enable: true,
              speed: 2,
              sync: false
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;