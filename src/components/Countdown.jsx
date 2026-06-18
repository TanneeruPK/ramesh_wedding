import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

// Target: 24 June 2026
const WEDDING_DATE = new Date('2026-06-24T00:00:00+05:30');

function pad(n) { return String(n).padStart(2, '0'); }

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds, past: false };
}

function CountUnit({ value, label }) {
  const [prev, setPrev] = useState(value);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setAnimate(true);
      const t = setTimeout(() => { setPrev(value); setAnimate(false); }, 400);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  return (
    <div style={{ textAlign: 'center', flex: 1 }}>
      <div className="premium-card" style={{
        padding: 'clamp(1rem, 4vw, 2rem) clamp(0.75rem, 3vw, 1.5rem)',
        borderRadius: '4px',
        position: 'relative',
        overflow: 'hidden',
        minWidth: 70,
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at top, rgba(201,168,76,0.08), transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Corner accents */}
        <div style={{ position: 'absolute', top: 6, left: 6, width: 12, height: 12, borderTop: '1px solid rgba(201,168,76,0.6)', borderLeft: '1px solid rgba(201,168,76,0.6)' }} />
        <div style={{ position: 'absolute', top: 6, right: 6, width: 12, height: 12, borderTop: '1px solid rgba(201,168,76,0.6)', borderRight: '1px solid rgba(201,168,76,0.6)' }} />
        <div style={{ position: 'absolute', bottom: 6, left: 6, width: 12, height: 12, borderBottom: '1px solid rgba(201,168,76,0.6)', borderLeft: '1px solid rgba(201,168,76,0.6)' }} />
        <div style={{ position: 'absolute', bottom: 6, right: 6, width: 12, height: 12, borderBottom: '1px solid rgba(201,168,76,0.6)', borderRight: '1px solid rgba(201,168,76,0.6)' }} />

        <motion.div
          key={value}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <span className="font-cinzel gold-gradient-text" style={{
            fontSize: 'clamp(2rem, 7vw, 4rem)',
            fontWeight: 700,
            display: 'block',
            lineHeight: 1,
          }}>
            {pad(value)}
          </span>
        </motion.div>
      </div>
      <p className="font-cinzel text-gold" style={{
        fontSize: 'clamp(0.55rem, 1.5vw, 0.7rem)',
        letterSpacing: '0.2em',
        marginTop: '0.75rem',
        opacity: 0.7
      }}>
        {label}
      </p>
    </div>
  );
}

function Countdown() {
  const [time, setTime] = useState(getTimeLeft());
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" ref={ref} style={{
      padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
      background: `
        radial-gradient(ellipse at center, rgba(107,28,28,0.2) 0%, transparent 70%),
        linear-gradient(180deg, var(--dark-bg), rgba(26,10,4,0.9), var(--dark-bg))
      `,
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative mandala-like circles */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 'min(600px,100vw)', height: 'min(600px,100vw)',
        pointerEvents: 'none'
      }}>
        {[1,2,3].map((i) => (
          <div key={i} style={{
            position: 'absolute', inset: `${i * 60}px`,
            border: `1px solid rgba(201,168,76,${0.06 - i * 0.015})`,
            borderRadius: '50%',
          }} />
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="section-subheading text-gold" style={{ opacity: 0.7, marginBottom: '0.75rem' }}>
            ✦ COUNTING DOWN ✦
          </p>
          <h2 className="section-heading gold-gradient-text" style={{ marginBottom: '0.5rem' }}>
            The Big Day
          </h2>
          <p className="font-cormorant text-cream" style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontStyle: 'italic',
            opacity: 0.6,
            marginBottom: '2.5rem'
          }}>
            24 June 2026 — Wedding Ceremony
          </p>
        </motion.div>

        {time.past ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-great-vibes gold-gradient-text" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
              🎊 The Celebration Has Begun! 🎊
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{ display: 'flex', gap: 'clamp(0.5rem, 2vw, 1.5rem)', alignItems: 'flex-start', justifyContent: 'center' }}
          >
            <CountUnit value={time.days} label="DAYS" />
            <div style={{ color: '#C9A84C', fontSize: 'clamp(2rem,5vw,3rem)', fontFamily: 'Cinzel', paddingTop: 'clamp(0.8rem,3vw,1.5rem)', opacity: 0.7 }}>:</div>
            <CountUnit value={time.hours} label="HOURS" />
            <div style={{ color: '#C9A84C', fontSize: 'clamp(2rem,5vw,3rem)', fontFamily: 'Cinzel', paddingTop: 'clamp(0.8rem,3vw,1.5rem)', opacity: 0.7 }}>:</div>
            <CountUnit value={time.minutes} label="MINUTES" />
            <div style={{ color: '#C9A84C', fontSize: 'clamp(2rem,5vw,3rem)', fontFamily: 'Cinzel', paddingTop: 'clamp(0.8rem,3vw,1.5rem)', opacity: 0.7 }}>:</div>
            <CountUnit value={time.seconds} label="SECONDS" />
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-great-vibes text-gold"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginTop: '2rem', opacity: 0.6 }}
        >
          Until we say "I Do"
        </motion.p>
      </div>
    </section>
  );
}

export default Countdown;
