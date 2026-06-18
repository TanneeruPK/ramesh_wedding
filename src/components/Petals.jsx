import React, { useEffect, useRef } from 'react';

const PETAL_COLORS = [
  'rgba(255, 182, 193, 0.8)',
  'rgba(255, 160, 170, 0.7)',
  'rgba(255, 200, 210, 0.9)',
  'rgba(255, 220, 220, 0.8)',
  'rgba(230, 150, 160, 0.7)',
  'rgba(255, 240, 200, 0.6)',
];

function Petals() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const petals = [];
    const COUNT = 18;

    for (let i = 0; i < COUNT; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      const size = Math.random() * 10 + 8;
      petal.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        background: ${PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)]};
        animation-duration: ${Math.random() * 8 + 7}s;
        animation-delay: ${Math.random() * 10}s;
        opacity: ${Math.random() * 0.5 + 0.4};
        border-radius: ${Math.random() > 0.5 ? '0 50% 0 50%' : '50% 0 50% 0'};
        transform: rotate(${Math.random() * 360}deg);
      `;
      container.appendChild(petal);
      petals.push(petal);
    }

    return () => {
      petals.forEach(p => p.remove());
    };
  }, []);

  return <div className="petals-container" ref={containerRef} />;
}

export default Petals;
