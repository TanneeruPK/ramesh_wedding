import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EVENTS = [
  {
    id: 'ceremony',
    date: '24',
    month: 'JUNE',
    year: '2026',
    day: 'Wednesday',
    title: 'Wedding Ceremony',
    subtitle: 'Shubh Vivah',
    icon: '🪷',
    details: [
      { label: 'Venue', value: 'Sri Tara Convention, Kompally, Hyderabad' },
      { label: 'Muhurtham', value: '8:45 AM (Chitha Nakshatram, Karkataka Lagnam)' },
      { label: 'Note', value: 'Followed by Lunch' },
      { label: 'Dress Code', value: 'Traditional Attire' },
    ],
    color: 'rgba(107,28,28,0.35)',
    borderGlow: 'rgba(107,28,28,0.8)',
  },
  {
    id: 'reception',
    date: '26',
    month: 'JUNE',
    year: '2026',
    day: 'Friday',
    title: 'Grand Reception',
    subtitle: 'Celebration',
    icon: '🥂',
    details: [
      { label: 'Venue', value: 'Sri Vasavi & Venugopala Swamy Kalyana Mandapam, Durgi, Palnadu District' },
      { label: 'Time', value: '7:00 PM onwards' },
      { label: 'Dress Code', value: 'Formal / Traditional' },
    ],
    color: 'rgba(201,168,76,0.1)',
    borderGlow: 'rgba(201,168,76,0.6)',
  },
];

function EventCard({ event, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
      marginBottom: '3rem',
      position: 'relative',
    }}>
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, type: 'spring' }}
        style={{
          width: 70, height: 70,
          borderRadius: '50%',
          background: `radial-gradient(circle at 35% 35%, #C9A84C, #6B1C1C)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '2rem',
          boxShadow: `0 0 0 4px rgba(201,168,76,0.2), 0 0 30px rgba(201,168,76,0.3)`,
          animation: 'timelinePulse 2.5s ease-in-out infinite',
          zIndex: 2,
          flexShrink: 0,
        }}
      >
        {event.icon}
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 30 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="premium-card"
        style={{
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          borderRadius: '4px',
          maxWidth: 580,
          width: '100%',
          background: `linear-gradient(145deg, ${event.color}, rgba(13,5,0,0.97))`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Corner decorations */}
        {[
          { top: 10, left: 10, borderWidth: '2px 0 0 2px' },
          { top: 10, right: 10, borderWidth: '2px 2px 0 0' },
          { bottom: 10, left: 10, borderWidth: '0 0 2px 2px' },
          { bottom: 10, right: 10, borderWidth: '0 2px 2px 0' },
        ].map((s, i) => (
          <div key={i} style={{
            position: 'absolute', ...s,
            width: 28, height: 28,
            borderStyle: 'solid', borderColor: 'rgba(201,168,76,0.5)'
          }} />
        ))}

        <div style={{ textAlign: 'center' }}>
          {/* Date block */}
          <div style={{ marginBottom: '1.25rem' }}>
            <p className="font-cinzel text-gold" style={{
              fontSize: '0.7rem', letterSpacing: '0.3em', opacity: 0.65, marginBottom: '0.25rem'
            }}>
              {event.day}
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.5rem' }}>
              <span className="font-cinzel gold-gradient-text" style={{
                fontSize: 'clamp(3rem, 10vw, 5rem)', fontWeight: 700, lineHeight: 1
              }}>
                {event.date}
              </span>
              <div>
                <p className="font-cinzel text-gold" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', letterSpacing: '0.15em' }}>
                  {event.month}
                </p>
                <p className="font-cormorant text-gold" style={{ fontSize: '0.85rem', opacity: 0.6 }}>
                  {event.year}
                </p>
              </div>
            </div>
          </div>

          <div className="ornate-divider" style={{ justifyContent: 'center', margin: '1rem 0' }}>
            <div className="line" style={{ maxWidth: 60 }}></div>
            <div className="diamond"></div>
            <div className="line right" style={{ maxWidth: 60 }}></div>
          </div>

          <h3 className="font-cinzel text-gold" style={{
            fontSize: 'clamp(0.8rem, 2vw, 1rem)', letterSpacing: '0.12em', marginBottom: '0.4rem'
          }}>
            {event.title}
          </h3>
          <p className="font-great-vibes gold-gradient-text" style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', lineHeight: 1.2, marginBottom: '1.5rem'
          }}>
            {event.subtitle}
          </p>

          {/* Detail rows */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '0.6rem',
            background: 'rgba(201,168,76,0.04)',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: '2px',
            padding: '1rem',
          }}>
            {event.details.map((d, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                paddingBottom: i < event.details.length - 1 ? '0.6rem' : 0,
                borderBottom: i < event.details.length - 1 ? '1px solid rgba(201,168,76,0.1)' : 'none',
              }}>
                <span className="font-cinzel text-gold" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', opacity: 0.6 }}>
                  {d.label}
                </span>
                <span className="font-cormorant text-cream" style={{ fontSize: '0.95rem', fontStyle: 'italic', opacity: 0.8 }}>
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function EventsTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="events" ref={ref} className="section-pad" style={{
      background: `
        linear-gradient(180deg, var(--dark-bg) 0%, rgba(26,10,4,0.95) 50%, var(--dark-bg) 100%)
      `,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background filigree */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 15% 50%, rgba(201,168,76,0.04) 0%, transparent 30%),
                          radial-gradient(circle at 85% 50%, rgba(107,28,28,0.08) 0%, transparent 30%)`,
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-subheading text-gold" style={{ opacity: 0.7, marginBottom: '0.75rem' }}>
            ✦ SAVE THE DATES ✦
          </p>
          <h2 className="section-heading gold-gradient-text">Events Timeline</h2>
          <div className="ornate-divider" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
            <div className="line" style={{ maxWidth: 100 }}></div>
            <div className="diamond"></div>
            <div className="diamond" style={{ margin: '0 6px' }}></div>
            <div className="diamond"></div>
            <div className="line right" style={{ maxWidth: 100 }}></div>
          </div>
        </motion.div>

        {/* Vertical timeline */}
        <div style={{ position: 'relative' }}>
          {/* Center line */}
          <div style={{
            position: 'absolute',
            left: '50%', top: 0, bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.4) 20%, rgba(201,168,76,0.4) 80%, transparent)',
            transform: 'translateX(-50%)',
          }} />

          {EVENTS.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsTimeline;
