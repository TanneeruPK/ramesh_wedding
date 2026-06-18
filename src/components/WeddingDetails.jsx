import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const EVENTS = [
  {
    id: 'ceremony',
    icon: '🪷',
    date: '24 June 2026',
    day: 'Wednesday',
    title: 'Wedding Ceremony',
    subtitle: 'Shubh Vivah',
    time: '8:45 AM | Muhurtham: Chitha Nakshatram, Karkataka Lagnam',
    desc: 'Join us for the sacred Telugu wedding rituals, mangalsutra ceremony, and the holy union of two souls at Sri Tara Convention, Kompally, Hyderabad. Followed by Lunch.',
    color: '#6B1C1C',
    gradient: 'linear-gradient(135deg, rgba(107,28,28,0.3), rgba(201,168,76,0.1))',
  },
  {
    id: 'reception',
    icon: '🥂',
    date: '26 June 2026',
    day: 'Friday',
    title: 'Grand Reception',
    subtitle: 'Celebration',
    time: '7:00 PM onwards',
    desc: 'Celebrate with us at the grand reception — an evening of joy, music, dance, and feasting at Sri Vasavi & Venugopala Swamy Kalyana Mandapam, Durgi, Palnadu District, AP.',
    color: '#C9A84C',
    gradient: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(107,28,28,0.2))',
  },
];

function WeddingDetails() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="details" ref={ref} className="section-pad" style={{
      background: 'linear-gradient(180deg, var(--dark-bg) 0%, rgba(26,10,4,0.8) 50%, var(--dark-bg) 100%)',
      position: 'relative',
    }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
        backgroundSize: '20px 20px',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-subheading text-gold" style={{ opacity: 0.7, marginBottom: '0.75rem' }}>
            ✦ MARK YOUR CALENDAR ✦
          </p>
          <h2 className="section-heading gold-gradient-text">
            Wedding Events
          </h2>
          <div className="ornate-divider" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
            <div className="line" style={{ maxWidth: 100 }}></div>
            <div className="diamond"></div>
            <div className="diamond" style={{ margin: '0 6px' }}></div>
            <div className="diamond"></div>
            <div className="line right" style={{ maxWidth: 100 }}></div>
          </div>
        </motion.div>

        {/* Event cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: i * 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="premium-card"
              style={{
                padding: '2.5rem',
                borderRadius: '4px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Card background glow */}
              <div style={{
                position: 'absolute', inset: 0,
                background: event.gradient,
                pointerEvents: 'none'
              }} />

              {/* Corner accents */}
              <div style={{ position: 'absolute', top: 12, left: 12, width: 24, height: 24, borderTop: '1px solid rgba(201,168,76,0.5)', borderLeft: '1px solid rgba(201,168,76,0.5)' }} />
              <div style={{ position: 'absolute', top: 12, right: 12, width: 24, height: 24, borderTop: '1px solid rgba(201,168,76,0.5)', borderRight: '1px solid rgba(201,168,76,0.5)' }} />
              <div style={{ position: 'absolute', bottom: 12, left: 12, width: 24, height: 24, borderBottom: '1px solid rgba(201,168,76,0.5)', borderLeft: '1px solid rgba(201,168,76,0.5)' }} />
              <div style={{ position: 'absolute', bottom: 12, right: 12, width: 24, height: 24, borderBottom: '1px solid rgba(201,168,76,0.5)', borderRight: '1px solid rgba(201,168,76,0.5)' }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3 + i, ease: 'easeInOut' }}
                  style={{ fontSize: '3rem', marginBottom: '1rem' }}
                >
                  {event.icon}
                </motion.div>

                {/* Title */}
                <h3 className="font-cinzel text-gold" style={{
                  fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                  letterSpacing: '0.15em',
                  marginBottom: '0.5rem'
                }}>
                  {event.title}
                </h3>

                <p className="font-great-vibes gold-gradient-text" style={{
                  fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                  lineHeight: 1.2,
                  marginBottom: '0.5rem'
                }}>
                  {event.subtitle}
                </p>

                <div className="ornate-divider" style={{ justifyContent: 'center', margin: '1rem 0' }}>
                  <div className="line" style={{ maxWidth: 60 }}></div>
                  <div className="diamond"></div>
                  <div className="line right" style={{ maxWidth: 60 }}></div>
                </div>

                {/* Date */}
                <div style={{
                  background: 'rgba(201,168,76,0.08)',
                  border: '1px solid rgba(201,168,76,0.25)',
                  borderRadius: '2px',
                  padding: '1rem',
                  marginBottom: '1rem'
                }}>
                  <p className="font-cormorant text-gold-light" style={{
                    fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                    letterSpacing: '0.2em',
                    fontStyle: 'italic',
                    marginBottom: '0.25rem'
                  }}>
                    {event.day}
                  </p>
                  <p className="font-playfair gold-gradient-text" style={{
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    fontWeight: 600,
                    lineHeight: 1.1
                  }}>
                    {event.date}
                  </p>
                  <p className="font-cormorant text-gold" style={{
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                    opacity: 0.7,
                    marginTop: '0.25rem'
                  }}>
                    {event.time}
                  </p>
                </div>

                <p className="font-cormorant text-cream" style={{
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                  lineHeight: 1.7,
                  opacity: 0.75,
                  fontStyle: 'italic'
                }}>
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WeddingDetails;
