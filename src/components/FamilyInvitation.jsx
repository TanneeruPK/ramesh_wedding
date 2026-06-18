import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function FamilyInvitation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="family" ref={ref} className="section-pad" style={{
      background: `
        radial-gradient(ellipse at top, rgba(107,28,28,0.15) 0%, transparent 60%),
        radial-gradient(ellipse at bottom, rgba(201,168,76,0.05) 0%, transparent 60%),
        linear-gradient(180deg, var(--dark-bg), rgba(13,5,0,0.95), var(--dark-bg))
      `,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative floral watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        fontSize: 'clamp(15rem, 40vw, 25rem)',
        opacity: 0.02,
        pointerEvents: 'none',
        lineHeight: 1,
        userSelect: 'none',
      }}>
        🌸
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p className="section-subheading text-gold" style={{ opacity: 0.7, marginBottom: '0.75rem' }}>
            ✦ WITH BLESSINGS OF OUR FAMILIES ✦
          </p>
          <h2 className="section-heading gold-gradient-text">Family Invitation</h2>
          <div className="ornate-divider" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
            <div className="line" style={{ maxWidth: 100 }}></div>
            <div className="diamond"></div>
            <div className="diamond" style={{ margin: '0 6px' }}></div>
            <div className="diamond"></div>
            <div className="line right" style={{ maxWidth: 100 }}></div>
          </div>
        </motion.div>

        {/* Invitation card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 40 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="premium-card"
          style={{
            padding: 'clamp(2rem, 6vw, 4rem)',
            borderRadius: '4px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(145deg, rgba(26,10,4,0.98) 0%, rgba(13,5,0,0.99) 100%)',
          }}
        >
          {/* Ornate corner decorations */}
          {[
            { top: 0, left: 0, borderWidth: '3px 0 0 3px' },
            { top: 0, right: 0, borderWidth: '3px 3px 0 0' },
            { bottom: 0, left: 0, borderWidth: '0 0 3px 3px' },
            { bottom: 0, right: 0, borderWidth: '0 3px 3px 0' },
          ].map((s, i) => (
            <div key={i} style={{
              position: 'absolute', ...s,
              width: 50, height: 50,
              borderStyle: 'solid',
              borderColor: 'rgba(201,168,76,0.5)',
            }} />
          ))}

          {/* Inner border */}
          <div style={{
            position: 'absolute', inset: 16,
            border: '1px solid rgba(201,168,76,0.12)',
            borderRadius: '2px',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Auspicious symbol */}
            <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
              🕉️
            </div>

            {/* Telugu style opening */}
            <p className="font-cinzel text-gold" style={{
              fontSize: 'clamp(0.85rem, 2vw, 1.15rem)',
              letterSpacing: '0.25em',
              lineHeight: 1.8,
              opacity: 0.9,
              marginBottom: '0.5rem',
            }}>
              Sri Rasthu ✦ Subhamasthu ✦ Avighnamasthu
            </p>
            <p className="font-great-vibes gold-gradient-text" style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              lineHeight: 1.3,
              marginBottom: '0.5rem',
            }}>
              శుభ లగ్నం
            </p>
            <p className="font-cinzel text-gold" style={{
              fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
              letterSpacing: '0.3em',
              opacity: 0.6,
              marginBottom: '2rem',
            }}>
              SHUBHA LAGNAM
            </p>

            <div className="ornate-divider" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <div className="line"></div>
              <span style={{ fontSize: '1.2rem' }}>🌸</span>
              <div className="line right"></div>
            </div>

            {/* Main invitation text */}
            <p className="font-cormorant text-cream" style={{
              fontSize: 'clamp(1.05rem, 3vw, 1.3rem)',
              lineHeight: 2,
              fontStyle: 'italic',
              opacity: 0.85,
              marginBottom: '2rem',
            }}>
              We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our younger son
            </p>

            {/* Groom's family */}
            <div style={{
              background: 'rgba(107,28,28,0.15)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '2px',
              padding: '1.25rem',
              marginBottom: '1.5rem',
            }}>
              <p className="font-cinzel text-gold" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', opacity: 0.6, marginBottom: '0.5rem' }}>
                GROOM'S FAMILY (THANNEERU FAMILY)
              </p>
              <p className="font-great-vibes gold-gradient-text" style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', lineHeight: 1.2 }}>
                Ramesh Babu
              </p>
              <p className="font-cormorant text-cream" style={{ fontSize: '0.95rem', fontStyle: 'italic', opacity: 0.75, marginTop: '0.25rem' }}>
                Son of Sri Thanneeru Venkateswarlu & Smt. Parvathi
              </p>
            </div>

            <p className="font-great-vibes text-gold" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', opacity: 0.7 }}>
              &amp; 
            </p>

            {/* Bride's family */}
            <div style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '2px',
              padding: '1.25rem',
              marginTop: '1.5rem',
              marginBottom: '2rem',
            }}>
              <p className="font-cinzel text-gold" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', opacity: 0.6, marginBottom: '0.5rem' }}>
                BRIDE'S FAMILY
              </p>
              <p className="font-great-vibes gold-gradient-text" style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', lineHeight: 1.2 }}>
                Chi. La. Sow. Akhilaja
              </p>
              <p className="font-cormorant text-cream" style={{ fontSize: '0.95rem', fontStyle: 'italic', opacity: 0.75, marginTop: '0.25rem' }}>
                Only Daughter of Sri Bommi Srinivas & Smt. Padma
              </p>
              <p className="font-cinzel text-gold" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', opacity: 0.6, marginTop: '0.25rem' }}>
                Mancherial
              </p>
            </div>

            <div className="ornate-divider" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <div className="line"></div>
              <span style={{ fontSize: '1.2rem' }}>💛</span>
              <div className="line right"></div>
            </div>

            <p className="font-cormorant text-cream" style={{
              fontSize: 'clamp(1.05rem, 3vw, 1.25rem)',
              lineHeight: 2,
              fontStyle: 'italic',
              opacity: 0.85,
              marginBottom: '2rem',
            }}>
              Your presence and blessings will make our celebration truly memorable.
            </p>

            {/* Compliments Section */}
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem 1rem 0.5rem',
              borderTop: '1px solid rgba(201,168,76,0.15)',
              textAlign: 'center',
            }}>
              <p className="font-cinzel text-gold" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', opacity: 0.6, marginBottom: '0.5rem' }}>
                WITH BEST COMPLIMENTS FROM:
              </p>
              <p className="font-cormorant text-cream" style={{ fontSize: '0.95rem', fontStyle: 'italic', opacity: 0.85, lineHeight: 1.6 }}>
                Sri Thanneeru Siva Nagaraju & Smt. Mounika<br />
                Near & Dear
              </p>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <p className="font-great-vibes gold-gradient-text gold-glow" style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                marginBottom: '0.5rem',
              }}>
                Ramesh Babu ❤️ Akhilaja
              </p>
              <p className="font-cinzel text-gold" style={{ fontSize: '0.7rem', letterSpacing: '0.25em', opacity: 0.6 }}>
                24 JUNE — 26 JUNE 2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FamilyInvitation;
