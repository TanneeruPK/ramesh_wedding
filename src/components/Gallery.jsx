import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Beautiful gradient placeholder gallery images
const GALLERY_ITEMS = [
  { id: 1, gradient: 'linear-gradient(135deg, #6B1C1C 0%, #C9A84C 50%, #4A0E0E 100%)', label: 'The Beginning', aspect: '4/3' },
  { id: 2, gradient: 'linear-gradient(135deg, #1a0a04 0%, #8B6914 40%, #C9A84C 70%, #6B1C1C 100%)', label: 'A Beautiful Bond', aspect: '3/4' },
  { id: 3, gradient: 'linear-gradient(135deg, #4A0E0E 0%, #C9A84C 60%, #8B2222 100%)', label: 'Our Love Story', aspect: '4/3' },
  { id: 4, gradient: 'linear-gradient(135deg, #0D0500 0%, #6B1C1C 50%, #F5D98B 100%)', label: 'Together Forever', aspect: '3/4' },
  { id: 5, gradient: 'linear-gradient(135deg, #8B6914 0%, #1A0A04 50%, #C9A84C 100%)', label: 'Blessed Union', aspect: '4/3' },
  { id: 6, gradient: 'linear-gradient(135deg, #6B1C1C 0%, #FFE97D 40%, #8B2222 100%)', label: 'Joy & Celebration', aspect: '4/3' },
];

function GalleryCard({ item, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="gallery-item"
      style={{ aspectRatio: item.aspect, cursor: 'pointer' }}
      onClick={() => onClick(item)}
    >
      {/* Gradient placeholder */}
      <div style={{
        width: '100%',
        height: '100%',
        background: item.gradient,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transition: 'transform 0.6s ease',
        minHeight: 200,
      }}>
        {/* Decorative overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.05), transparent 70%)',
          pointerEvents: 'none'
        }} />
        {/* Corner accents */}
        <div style={{ position: 'absolute', top: 10, left: 10, width: 20, height: 20, borderTop: '1px solid rgba(201,168,76,0.6)', borderLeft: '1px solid rgba(201,168,76,0.6)' }} />
        <div style={{ position: 'absolute', top: 10, right: 10, width: 20, height: 20, borderTop: '1px solid rgba(201,168,76,0.6)', borderRight: '1px solid rgba(201,168,76,0.6)' }} />
        <div style={{ position: 'absolute', bottom: 10, left: 10, width: 20, height: 20, borderBottom: '1px solid rgba(201,168,76,0.6)', borderLeft: '1px solid rgba(201,168,76,0.6)' }} />
        <div style={{ position: 'absolute', bottom: 10, right: 10, width: 20, height: 20, borderBottom: '1px solid rgba(201,168,76,0.6)', borderRight: '1px solid rgba(201,168,76,0.6)' }} />

        <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌸</span>
        <span className="font-great-vibes text-gold" style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          textShadow: '0 0 20px rgba(201,168,76,0.8)'
        }}>
          {item.label}
        </span>
        <span className="font-cinzel" style={{
          color: 'rgba(201,168,76,0.6)',
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          marginTop: '0.5rem'
        }}>
          RAMESH ❤ AKHILAJA
        </span>
      </div>
    </motion.div>
  );
}

function Lightbox({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            onClick={e => e.stopPropagation()}
            style={{
              width: 'min(700px, 90vw)',
              aspectRatio: item.aspect,
              borderRadius: '4px',
              border: '1px solid rgba(201,168,76,0.4)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 0 60px rgba(201,168,76,0.2), 0 40px 80px rgba(0,0,0,0.8)',
            }}
          >
            <div style={{
              width: '100%', height: '100%',
              background: item.gradient,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌸</span>
              <span className="font-great-vibes gold-gradient-text" style={{
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                textAlign: 'center'
              }}>
                {item.label}
              </span>
              <p className="font-cinzel text-gold" style={{ fontSize: '0.7rem', letterSpacing: '0.3em', marginTop: '1rem', opacity: 0.6 }}>
                RAMESH BABU ❤ AKHILAJA
              </p>
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: 12, right: 12,
                width: 36, height: 36,
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.7)',
                border: '1px solid rgba(201,168,76,0.4)',
                color: '#C9A84C',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Gallery() {
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="gallery" ref={ref} className="section-pad" style={{
      background: `
        radial-gradient(ellipse at top, rgba(201,168,76,0.04) 0%, transparent 50%),
        linear-gradient(180deg, var(--dark-bg), rgba(13,5,0,0.95), var(--dark-bg))
      `,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p className="section-subheading text-gold" style={{ opacity: 0.7, marginBottom: '0.75rem' }}>
            ✦ CHERISHED MOMENTS ✦
          </p>
          <h2 className="section-heading gold-gradient-text">Our Gallery</h2>
          <div className="ornate-divider" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
            <div className="line" style={{ maxWidth: 100 }}></div>
            <div className="diamond"></div>
            <div className="diamond" style={{ margin: '0 6px' }}></div>
            <div className="diamond"></div>
            <div className="line right" style={{ maxWidth: 100 }}></div>
          </div>
          <p className="font-cormorant text-cream" style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            fontStyle: 'italic', opacity: 0.6, marginTop: '1rem'
          }}>
            Click on any card to preview
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem',
        }}>
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} onClick={setSelected} />
          ))}
        </div>
      </div>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export default Gallery;
