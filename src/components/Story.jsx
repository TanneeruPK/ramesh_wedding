import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STORY_ITEMS = [
  {
    icon: '✨',
    year: 'The Beginning',
    title: 'Two Worlds Meet',
    desc: 'In the beautiful tapestry of fate, two souls found each other — Ramesh Babu and Akhilaja. Their first meeting was a moment the universe had planned long before.',
  },
  {
    icon: '💛',
    year: 'Growing Together',
    title: 'A Bond Beyond Words',
    desc: 'Through shared laughter, countless memories, and the warmth of each other\'s company, their friendship blossomed into something far deeper — a love story written in the stars.',
  },
  {
    icon: '💍',
    year: 'The Promise',
    title: 'Forever & Always',
    desc: 'With families united and hearts intertwined, Ramesh Babu asked the question that would change their lives forever. She said yes — and a new chapter began.',
  },
  {
    icon: '🌹',
    year: '24 June 2026',
    title: 'The Grand Celebration',
    desc: 'Now they invite you — their beloved family and friends — to witness and bless their sacred union as they begin the most beautiful journey of their lives.',
  },
];

function StoryItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '3rem',
      position: 'relative',
    }}>
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          width: 60, height: 60,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6B1C1C, #C9A84C)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem',
          border: '3px solid rgba(201,168,76,0.5)',
          boxShadow: '0 0 20px rgba(201,168,76,0.3)',
          animation: 'timelinePulse 2s ease-in-out infinite',
          zIndex: 2,
          flexShrink: 0,
          position: 'relative',
          marginBottom: '1.5rem',
        }}
      >
        {item.icon}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="premium-card"
        style={{
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          borderRadius: '4px',
          maxWidth: 560,
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at top, rgba(201,168,76,0.06), transparent 70%)',
          pointerEvents: 'none'
        }} />

        <p className="font-cinzel text-gold" style={{
          fontSize: '0.7rem', letterSpacing: '0.25em', opacity: 0.7, marginBottom: '0.5rem'
        }}>
          {item.year}
        </p>
        <h3 className="font-great-vibes gold-gradient-text" style={{
          fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
          marginBottom: '1rem',
          lineHeight: 1.2,
        }}>
          {item.title}
        </h3>
        <div className="ornate-divider" style={{ justifyContent: 'center', margin: '0.75rem 0' }}>
          <div className="line" style={{ maxWidth: 50 }}></div>
          <div className="diamond"></div>
          <div className="line right" style={{ maxWidth: 50 }}></div>
        </div>
        <p className="font-cormorant text-cream" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
          lineHeight: 1.8,
          fontStyle: 'italic',
          opacity: 0.75,
        }}>
          {item.desc}
        </p>
      </motion.div>
    </div>
  );
}

function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="story" ref={ref} className="section-pad" style={{
      background: `
        radial-gradient(ellipse at top left, rgba(107,28,28,0.1) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(107,28,28,0.1) 0%, transparent 50%),
        linear-gradient(180deg, var(--dark-bg), rgba(13,5,0,0.95), var(--dark-bg))
      `,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative large monogram */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        fontFamily: 'Great Vibes',
        fontSize: 'clamp(15rem, 40vw, 30rem)',
        color: 'rgba(201,168,76,0.025)',
        pointerEvents: 'none',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}>
        R & A
      </div>

      <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-subheading text-gold" style={{ opacity: 0.7, marginBottom: '0.75rem' }}>
            ✦ OUR JOURNEY ✦
          </p>
          <h2 className="section-heading gold-gradient-text">
            Beginning of a Beautiful Journey
          </h2>
          <div className="ornate-divider" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
            <div className="line" style={{ maxWidth: 100 }}></div>
            <div className="diamond"></div>
            <div className="diamond" style={{ margin: '0 6px' }}></div>
            <div className="diamond"></div>
            <div className="line right" style={{ maxWidth: 100 }}></div>
          </div>
          <p className="font-cormorant text-cream" style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontStyle: 'italic',
            opacity: 0.6,
            marginTop: '1rem'
          }}>
            A love story written in the stars
          </p>
        </motion.div>

        {/* Timeline items */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.4), rgba(201,168,76,0.4), transparent)',
            transform: 'translateX(-50%)',
          }} />

          {STORY_ITEMS.map((item, i) => (
            <StoryItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Story;
