import { useEffect, useRef, useState } from "react";

const StarField = () => {
  const starFieldRef = useRef();
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Initialisation des dimensions de la fenêtre au montage
  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Fonction de redimensionnement optimisée
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Ajouter un écouteur pour les changements de taille de la fenêtre
    window.addEventListener("resize", handleResize);

    // Nettoyage du listener lors du démontage
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // S'assurer que l'animation ne démarre que lorsque les dimensions sont définies
    if (windowDimensions.width === 0 || windowDimensions.height === 0) return;

    const { width, height } = windowDimensions;
    const starField = starFieldRef.current;

    const numberOfStars = width < 600 ? 150 : 300;
    const numberOfComets = 5;

    // Créer les étoiles
    const stars = Array.from({ length: numberOfStars }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.2 + 0.05,
      opacity: Math.random() * 0.7 + 0.3,
      direction: Math.random() < 0.5 ? 1 : -1,
      variation: Math.random() * 0.5 + 0.5,
    }));

    // Créer les comètes
    const comets = Array.from({ length: numberOfComets }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 2 + 1,
      directionX: Math.random() * 2 - 1,
      directionY: Math.random() * 2 - 1,
      opacity: Math.random() * 0.5 + 0.5,
      tailLength: Math.random() * 20 + 10,
    }));

    const animateStars = () => {
      const ctx = starField.getContext("2d");
      ctx.clearRect(0, 0, width, height);

      // Dessiner les étoiles
      stars.forEach((star) => {
        star.y += star.speed * star.direction;
        if (star.y > height) star.y = 0;
        if (star.y < 0) star.y = height;

        const alpha = Math.abs(Math.sin(star.y * 0.005)) * star.opacity;
        const starSize = star.size + Math.sin(star.y * 0.01) * star.variation;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillRect(star.x, star.y, starSize, starSize);
      });

      // Dessiner les comètes
      comets.forEach((comet) => {
        comet.x += comet.speed * comet.directionX;
        comet.y += comet.speed * comet.directionY;

        if (comet.x > width || comet.x < 0 || comet.y > height || comet.y < 0) {
          comet.x = Math.random() * width;
          comet.y = Math.random() * height;
          comet.directionX = Math.random() * 2 - 1;
          comet.directionY = Math.random() * 2 - 1;
        }

        const gradient = ctx.createLinearGradient(
          comet.x,
          comet.y,
          comet.x - comet.directionX * comet.tailLength,
          comet.y - comet.directionY * comet.tailLength
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(
          comet.x - comet.directionX * comet.tailLength,
          comet.y - comet.directionY * comet.tailLength
        );
        ctx.lineWidth = comet.size;
        ctx.strokeStyle = gradient;
        ctx.stroke();
      });

      requestAnimationFrame(animateStars);
    };

    // Démarrer l'animation
    animateStars();
  }, [windowDimensions]);

  return (
    <canvas
      ref={starFieldRef}
      width={windowDimensions.width}
      height={windowDimensions.height}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none",
        maxWidth: "100%",
        maxHeight: "100vh", // Assurer que le canvas ne dépasse pas l'écran
      }}
    ></canvas>
  );
};

export default StarField;
