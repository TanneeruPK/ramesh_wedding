import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function WelcomeScreen({ onEnter }) {
  const [show, setShow] = useState(true);
  const [nameVisible, setNameVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setNameVisible(true), 800);
    const t2 = setTimeout(() => setBtnVisible(true), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleEnter = () => {
    setShow(false);
    setTimeout(onEnter, 900);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="welcome-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          style={{ zIndex: 9999 }}
        >
          {/* Radial glow rings */}
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center', pointerEvents: 'none'
          }}>
            {[300, 450, 600, 750].map((size, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: size, height: size,
                borderRadius: '50%',
                border: `1px solid rgba(201,168,76,${0.15 - i * 0.03})`,
                animation: `pulse-gold ${3 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }} />
            ))}
          </div>

          {/* Floating golden orbs */}
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: Math.random() * 6 + 3,
              height: Math.random() * 6 + 3,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #FFE97D, #C9A84C)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.6,
            }} />
          ))}

          {/* Top decorative line */}
          <div style={{
            position: 'absolute', top: '8%', left: '50%', transform: 'translateX(-50%)',
            textAlign: 'center'
          }}>
            <p className="font-cinzel text-gold" style={{ letterSpacing: '0.2em', fontSize: '0.75rem', whiteSpace: 'nowrap', opacity: 0.85 }}>
              Sri Rasthu ✦ Subhamasthu ✦ Avighnamasthu
            </p>
          </div>

          {/* Central content */}
          <div style={{ textAlign: 'center', padding: '2rem', position: 'relative', zIndex: 2 }}>

            {/* Telugu Om / Auspicious symbol */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'backOut' }}
              style={{ marginBottom: '2rem' }}
            >
              <span style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#C9A84C',
                textShadow: '0 0 20px rgba(201,168,76,0.8)',
                display: 'block',
                marginBottom: '0.5rem'
              }}>🪷</span>
              <div className="ornate-divider" style={{ justifyContent: 'center', marginBottom: 0 }}>
                <div className="line" style={{ maxWidth: 60 }}></div>
                <div className="diamond"></div>
                <div className="diamond" style={{ margin: '0 4px' }}></div>
                <div className="diamond"></div>
                <div className="line right" style={{ maxWidth: 60 }}></div>
              </div>
            </motion.div>

            <AnimatePresence>
              {nameVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-cinzel text-gold" style={{
                    fontSize: 'clamp(0.65rem, 2vw, 0.8rem)',
                    letterSpacing: '0.35em',
                    marginBottom: '1rem',
                    opacity: 0.8
                  }}>
                    YOU ARE CORDIALLY INVITED TO THE
                  </p>
                  <h1 className="font-great-vibes gold-gradient-text gold-glow-strong" style={{
                    fontSize: 'clamp(3rem, 10vw, 7rem)',
                    lineHeight: 1.1,
                    marginBottom: '0.3rem',
                  }}>
                    Ramesh Babu
                  </h1>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '0.5rem 0' }}>
                    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C)', maxWidth: 120 }}></div>
                    <span className="animate-heartbeat" style={{ fontSize: '1.5rem', color: '#C9A84C' }}>❤️</span>
                    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #C9A84C, transparent)', maxWidth: 120 }}></div>
                  </div>
                  <h1 className="font-great-vibes gold-gradient-text gold-glow-strong" style={{
                    fontSize: 'clamp(3rem, 10vw, 7rem)',
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                  }}>
                    Akhilaja
                  </h1>

                  <p className="font-cormorant text-cream" style={{
                    fontSize: 'clamp(1rem, 3vw, 1.3rem)',
                    fontStyle: 'italic',
                    opacity: 0.7,
                    marginBottom: '0.5rem'
                  }}>
                    Royal Telugu Wedding Celebration
                  </p>
                  <p className="font-cinzel text-gold" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', letterSpacing: '0.2em' }}>
                    24 JUNE — 26 JUNE 2026
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {btnVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'backOut' }}
                  style={{ marginTop: '2.5rem' }}
                >
                  <button
                    id="open-invitation-btn"
                    className="btn-gold"
                    onClick={handleEnter}
                    style={{
                      padding: '16px 48px',
                      fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                      borderRadius: '2px',
                      letterSpacing: '0.2em',
                    }}
                  >
                    ✦ OPEN INVITATION ✦
                  </button>
                  <p className="font-cormorant text-gold" style={{
                    marginTop: '1rem', fontSize: '0.9rem', opacity: 0.5, fontStyle: 'italic'
                  }}>
                    Click to enter
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom decorative */}
          <div style={{
            position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)',
            textAlign: 'center'
          }}>
            <p className="font-cinzel text-gold" style={{ fontSize: '0.65rem', letterSpacing: '0.4em', opacity: 0.5 }}>
              ✦ WITH LOVE & BLESSINGS ✦
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WelcomeScreen;
