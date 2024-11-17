import { useEffect, useRef, useState } from "react";

const StarField = () => {
  const starFieldRef = useRef();
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Met à jour les dimensions du window une fois que le composant est monté
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Ajouter un écouteur pour les redimensionnements
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Cette useEffect s'exécute une seule fois après le montage du composant

  useEffect(() => {
    // S'assurer que l'animation se lance uniquement lorsque les dimensions sont disponibles
    if (windowDimensions.width === 0 || windowDimensions.height === 0) return;

    const { width, height } = windowDimensions;
    const starField = starFieldRef.current;

    const numberOfStars = 300;
    const numberOfComets = 5;

    const stars = Array.from({ length: numberOfStars }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5, // Taille des étoiles
      speed: Math.random() * 0.2 + 0.05, // Vitesse des étoiles
      opacity: Math.random() * 0.7 + 0.3, // Opacité des étoiles
      direction: Math.random() < 0.5 ? 1 : -1,
      variation: Math.random() * 0.5 + 0.5,
    }));

    const comets = Array.from({ length: numberOfComets }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5, // Réduit la taille des comètes
      speed: Math.random() * 2 + 1,
      directionX: Math.random() * 2 - 1,
      directionY: Math.random() * 2 - 1,
      opacity: Math.random() * 0.5 + 0.5,
      tailLength: Math.random() * 20 + 10, // Réduit la longueur de la queue
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

      // Dessiner les comètes (étoiles filantes)
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

    animateStars();
  }, [windowDimensions]); // Redémarre l'animation si les dimensions changent

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
      }}
    ></canvas>
  );
};

export default StarField;
