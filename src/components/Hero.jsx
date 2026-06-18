import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="hero"
      ref={ref}
      className="hero-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "clamp(2rem, 5vw, 4rem) 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(107,28,28,0.15) 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(107,28,28,0.15) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)
        `,
          pointerEvents: "none",
        }}
      />

      {/* Top ornament */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ marginBottom: "2rem" }}
      >
        <span style={{ fontSize: "2rem" }}>🪷</span>
        <p
          className="section-subheading text-gold"
          style={{ marginTop: "0.75rem", opacity: 0.8 }}
        >
          ✦ ROYAL TELUGU WEDDING ✦
        </p>
      </motion.div>

      {/* Main text block */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
        style={{ maxWidth: 800 }}
      >
        <p
          className="font-cormorant text-cream"
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            fontStyle: "italic",
            opacity: 0.75,
            marginBottom: "0.5rem",
            letterSpacing: "0.05em",
          }}
        >
          Together with their families
        </p>

        <div className="ornate-divider" style={{ justifyContent: "center" }}>
          <div className="line" style={{ maxWidth: 80 }}></div>
          <div className="diamond"></div>
          <div className="line right" style={{ maxWidth: 80 }}></div>
        </div>

        <p
          className="font-cormorant text-cream"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            fontStyle: "italic",
            opacity: 0.7,
            marginBottom: "1.5rem",
            letterSpacing: "0.03em",
          }}
        >
          We invite you to celebrate the wedding of
        </p>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-great-vibes gold-gradient-text gold-glow"
            style={{
              fontSize: "clamp(3.5rem, 11vw, 8rem)",
              lineHeight: 1.05,
              display: "block",
            }}
          >
            Ramesh
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              margin: "0.75rem 0",
            }}
          >
            <div
              style={{
                flex: 1,
                height: 1,
                background: "linear-gradient(90deg,transparent,#C9A84C)",
                maxWidth: 150,
              }}
            />
            <span
              className="animate-heartbeat"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              ❤️
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "linear-gradient(90deg,#C9A84C,transparent)",
                maxWidth: 150,
              }}
            />
          </div>

          <h1
            className="font-great-vibes gold-gradient-text gold-glow"
            style={{
              fontSize: "clamp(3.5rem, 11vw, 8rem)",
              lineHeight: 1.05,
              display: "block",
            }}
          >
            Akhilaja
          </h1>
        </motion.div>
      </motion.div>

      {/* Date badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.6 }}
        style={{ marginTop: "3rem" }}
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            padding: "1.5rem 3rem",
            border: "1px solid rgba(201,168,76,0.4)",
            position: "relative",
            animation: "borderGlow 3s ease-in-out infinite",
          }}
        >
          {/* Corner accents */}
          {[
            { top: -1, left: -1, borderWidth: "2px 0 0 2px" },
            { top: -1, right: -1, borderWidth: "2px 2px 0 0" },
            { bottom: -1, left: -1, borderWidth: "0 0 2px 2px" },
            { bottom: -1, right: -1, borderWidth: "0 2px 2px 0" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                ...s,
                width: 20,
                height: 20,
                borderStyle: "solid",
                borderColor: "#C9A84C",
              }}
            />
          ))}

          <p
            className="font-cinzel text-gold"
            style={{
              fontSize: "clamp(0.65rem, 2vw, 0.8rem)",
              letterSpacing: "0.3em",
              opacity: 0.7,
            }}
          >
            WEDDING CEREMONY
          </p>
          <p
            className="font-playfair gold-gradient-text"
            style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", fontWeight: 600 }}
          >
            24 June 2026
          </p>
          <div
            className="ornate-divider"
            style={{ margin: "0.25rem 0", justifyContent: "center" }}
          >
            <div className="line" style={{ maxWidth: 40 }}></div>
            <div className="diamond"></div>
            <div className="line right" style={{ maxWidth: 40 }}></div>
          </div>
          <p
            className="font-cinzel text-gold"
            style={{
              fontSize: "clamp(0.65rem, 2vw, 0.8rem)",
              letterSpacing: "0.3em",
              opacity: 0.7,
            }}
          >
            RECEPTION
          </p>
          <p
            className="font-playfair gold-gradient-text"
            style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", fontWeight: 600 }}
          >
            26 June 2026
          </p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ textAlign: "center" }}
        >
          <div
            style={{
              width: 1,
              height: 40,
              background: "linear-gradient(to bottom, #C9A84C, transparent)",
              margin: "0 auto",
            }}
          />
          <p
            className="font-cinzel text-gold"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              marginTop: "0.5rem",
              opacity: 0.5,
            }}
          >
            SCROLL
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
