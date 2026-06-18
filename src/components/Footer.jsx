import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#details', label: 'Details' },
    { href: '#countdown', label: 'Countdown' },
    { href: '#story', label: 'Our Story' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#venue', label: 'Venue' },
    { href: '#rsvp', label: 'RSVP' },
  ];

  return (
    <footer ref={ref} style={{
      background: `
        radial-gradient(ellipse at top, rgba(107,28,28,0.2) 0%, transparent 60%),
        linear-gradient(180deg, var(--dark-bg), rgba(5,2,0,1))
      `,
      padding: 'clamp(3rem, 8vw, 6rem) 1.5rem 2rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(201,168,76,0.15)',
    }}>
      {/* Large monogram watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        fontFamily: 'Great Vibes',
        fontSize: 'clamp(15rem, 40vw, 28rem)',
        color: 'rgba(201,168,76,0.02)',
        pointerEvents: 'none',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}>
        R & A
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
        {/* Decorative top */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="ornate-divider" style={{ justifyContent: 'center', marginBottom: '2.5rem' }}>
            <div className="line"></div>
            <span style={{ fontSize: '1.5rem' }}>🌸</span>
            <div className="diamond"></div>
            <span style={{ fontSize: '1.5rem' }}>🌸</span>
            <div className="line right"></div>
          </div>
        </motion.div>

        {/* Thank you */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <p className="section-subheading text-gold" style={{ opacity: 0.6, marginBottom: '1rem' }}>
            ✦ WITH GRATITUDE ✦
          </p>
          <h2 className="font-great-vibes gold-gradient-text gold-glow" style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Thank You
          </h2>
          <p className="font-cormorant text-cream" style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            fontStyle: 'italic',
            lineHeight: 1.9,
            opacity: 0.75,
            marginBottom: '2.5rem',
          }}>
            Thank you for being a part of our most special day.<br />
            Your presence, blessings, and love mean the world to us.<br />
            We are grateful to share this joyous celebration with you.
          </p>
        </motion.div>

        {/* Hosted By & Compliments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}
        >
          <div style={{ maxWidth: 500, width: '100%', padding: '1.25rem', border: '1px dashed rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.02)', borderRadius: '2px' }}>
            <p className="font-cinzel text-gold" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', opacity: 0.7, marginBottom: '0.5rem' }}>
              HOSTED BY
            </p>
            <p className="font-cormorant text-cream" style={{ fontSize: '1.1rem', fontStyle: 'italic', opacity: 0.85 }}>
              Sri Thanneeru Venkateswarlu &amp; Smt. Parvathi
            </p>
          </div>

          <div style={{ maxWidth: 500, width: '100%', padding: '1.25rem', border: '1px dashed rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.02)', borderRadius: '2px' }}>
            <p className="font-cinzel text-gold" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', opacity: 0.7, marginBottom: '0.5rem' }}>
              WITH BEST COMPLIMENTS FROM
            </p>
            <p className="font-cormorant text-cream" style={{ fontSize: '1.05rem', fontStyle: 'italic', opacity: 0.85, lineHeight: 1.5 }}>
              Sri Thanneeru Siva Nagaraju &amp; Smt. Mounika<br />
              Near &amp; Dear
            </p>
          </div>
        </motion.div>

        {/* With Love */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{
            display: 'inline-block',
            padding: '2rem 3rem',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: '4px',
            background: 'rgba(201,168,76,0.04)',
            position: 'relative',
          }}>
            {[
              { top: 0, left: 0, borderWidth: '2px 0 0 2px' },
              { top: 0, right: 0, borderWidth: '2px 2px 0 0' },
              { bottom: 0, left: 0, borderWidth: '0 0 2px 2px' },
              { bottom: 0, right: 0, borderWidth: '0 2px 2px 0' },
            ].map((s, i) => (
              <div key={i} style={{
                position: 'absolute', ...s, width: 20, height: 20,
                borderStyle: 'solid', borderColor: 'rgba(201,168,76,0.6)'
              }} />
            ))}

            <p className="font-cinzel text-gold" style={{
              fontSize: '0.7rem', letterSpacing: '0.25em', opacity: 0.7, marginBottom: '0.75rem'
            }}>
              WITH LOVE
            </p>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            >
              <p className="font-great-vibes gold-gradient-text gold-glow-strong" style={{
                fontSize: 'clamp(2.5rem, 7vw, 4rem)',
                lineHeight: 1.2,
              }}>
                Ramesh Babu & Akhilaja
              </p>
            </motion.div>
            <div style={{ marginTop: '0.5rem' }}>
              <span className="animate-heartbeat" style={{ fontSize: '1.5rem' }}>❤️</span>
            </div>
          </div>
        </motion.div>

        {/* Nav links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'center', gap: '0.5rem 1.5rem',
            marginBottom: '2rem',
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-cinzel text-gold"
              style={{
                fontSize: '0.65rem', letterSpacing: '0.15em',
                opacity: 0.5, textDecoration: 'none',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => e.target.style.opacity = 0.9}
              onMouseLeave={e => e.target.style.opacity = 0.5}
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Bottom divider */}
        <div className="ornate-divider" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div className="line"></div>
          <div className="diamond"></div>
          <div className="diamond" style={{ margin: '0 6px' }}></div>
          <div className="diamond"></div>
          <div className="line right"></div>
        </div>

        <p className="font-cormorant text-gold" style={{
          fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.4
        }}>
          © 2026 Ramesh Babu & Akhilaja Wedding Celebration
        </p>
      </div>
    </footer>
  );
}

export default Footer;
