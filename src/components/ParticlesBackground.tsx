import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
    }

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return ()=> window.removeEventListener('resize', checkMobile);
  })

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: isMobile ? 30 : 60,
    interactivity: {
      events: {
        onHover: {
          enable: !isMobile,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.3,
          },
        },
      },
    },
    particles: {
      color: {
        value: "#888888",
      },
      links: {
        color: "#888888",
        distance: 150,
        enable: !isMobile,
        opacity: 0.15,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: "out" as const,
        random: false,
        speed: isMobile ? 0.2 : 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: isMobile ? 1500 : 800,
        },
        value: isMobile ? 15 : 50,
      },
      opacity: {
        value: isMobile ? 0.15 : 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  }), [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
