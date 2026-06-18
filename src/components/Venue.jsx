import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VENUES = [
  {
    id: "ceremony-venue",
    icon: "🏛️",
    event: "Wedding Ceremony",
    date: "24 June 2026 | 8:45 AM",
    name: "Sri Tara Convention",
    address: "Kompally, Hyderabad",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Sri+Tara+Convention+Kompally+Hyderabad",
    note: "Muhurtham timings: 8:45 AM | Followed by Lunch",
  },
  {
    id: "reception-venue",
    icon: "✨",
    event: "Grand Reception",
    date: "26 June 2026 | 7:00 PM onwards",
    name: "Sri Vasavi & Venugopala Swamy Kalyana Mandapam",
    address: "Durgi, Palnadu District, Andhra Pradesh - 522612",
    mapUrl: "https://maps.app.goo.gl/sAoNkem6qShk9R2d7",
    note: "Reception celebration dinner awaits your presence",
  },
];

function VenueCard({ venue, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="premium-card"
      style={{
        borderRadius: "4px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header band */}
      <div
        style={{
          padding: "1.5rem",
          background:
            "linear-gradient(135deg, rgba(107,28,28,0.4), rgba(201,168,76,0.1))",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
          textAlign: "center",
        }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}
        >
          {venue.icon}
        </motion.div>
        <p
          className="font-cinzel text-gold"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            opacity: 0.7,
            marginBottom: "0.25rem",
          }}
        >
          {venue.event}
        </p>
        <p
          className="font-cormorant text-cream"
          style={{
            fontSize: "0.95rem",
            fontStyle: "italic",
            opacity: 0.6,
          }}
        >
          {venue.date}
        </p>
      </div>

      {/* Map placeholder */}
      <div
        style={{
          height: 180,
          background: `
          linear-gradient(135deg, rgba(13,5,0,0.95), rgba(26,10,4,0.9)),
          repeating-linear-gradient(0deg, rgba(201,168,76,0.03) 0, rgba(201,168,76,0.03) 1px, transparent 0, transparent 40px),
          repeating-linear-gradient(90deg, rgba(201,168,76,0.03) 0, rgba(201,168,76,0.03) 1px, transparent 0, transparent 40px)
        `,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          position: "relative",
        }}
      >
        {/* Map pin */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50% 50% 50% 0",
              background: "linear-gradient(135deg, #C9A84C, #6B1C1C)",
              transform: "rotate(-45deg)",
              margin: "0 auto 0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(201,168,76,0.4)",
            }}
          >
            <span style={{ transform: "rotate(45deg)", fontSize: "1.1rem" }}>
              📍
            </span>
          </div>
          <p
            className="font-cinzel text-gold"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              opacity: 0.6,
            }}
          >
            LOCATION
          </p>
        </div>
      </div>

      {/* Details */}
      <div style={{ padding: "1.5rem", textAlign: "center" }}>
        <h3
          className="font-playfair gold-gradient-text"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}
        >
          {venue.name}
        </h3>
        <p
          className="font-cormorant text-cream"
          style={{
            fontSize: "1rem",
            fontStyle: "italic",
            opacity: 0.65,
            marginBottom: "1.25rem",
          }}
        >
          📍 {venue.address}
        </p>

        <p
          className="font-cormorant text-gold"
          style={{
            fontSize: "0.9rem",
            fontStyle: "italic",
            opacity: 0.6,
            marginBottom: "1.5rem",
            padding: "0.5rem",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            borderBottom: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          {venue.note}
        </p>

        {/* Get directions button */}
        <a
          href={venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{
            display: "inline-block",
            padding: "12px 32px",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            borderRadius: "2px",
            textDecoration: "none",
          }}
        >
          📍 GET DIRECTIONS
        </a>
      </div>
    </motion.div>
  );
}

function Venue() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="venue"
      ref={ref}
      className="section-pad"
      style={{
        background: `
        radial-gradient(ellipse at center, rgba(107,28,28,0.12) 0%, transparent 70%),
        linear-gradient(180deg, var(--dark-bg), rgba(26,10,4,0.9), var(--dark-bg))
      `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <p
            className="section-subheading text-gold"
            style={{ opacity: 0.7, marginBottom: "0.75rem" }}
          >
            ✦ JOIN US HERE ✦
          </p>
          <h2 className="section-heading gold-gradient-text">Venue Details</h2>
          <div
            className="ornate-divider"
            style={{ justifyContent: "center", marginTop: "0.5rem" }}
          >
            <div className="line" style={{ maxWidth: 100 }}></div>
            <div className="diamond"></div>
            <div className="diamond" style={{ margin: "0 6px" }}></div>
            <div className="diamond"></div>
            <div className="line right" style={{ maxWidth: 100 }}></div>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {VENUES.map((venue, i) => (
            <VenueCard key={venue.id} venue={venue} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Venue;
