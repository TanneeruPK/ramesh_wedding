import React, { useEffect, useRef } from 'react';

function Particles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const particles = [];
    const COUNT = 30;

    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 4 + 2;
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        animation-duration: ${Math.random() * 12 + 10}s;
        animation-delay: ${Math.random() * 15}s;
        opacity: ${Math.random() * 0.5 + 0.3};
      `;
      container.appendChild(p);
      particles.push(p);
    }

    return () => { particles.forEach(p => p.remove()); };
  }, []);

  return <div className="particles-container" ref={containerRef} />;
}

export default Particles;
