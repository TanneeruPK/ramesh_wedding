import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import WelcomeScreen from "./components/WelcomeScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WeddingDetails from "./components/WeddingDetails";
import Countdown from "./components/Countdown";
import Story from "./components/Story";
import EventsTimeline from "./components/EventsTimeline";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import FamilyInvitation from "./components/FamilyInvitation";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import Petals from "./components/Petals";
import Particles from "./components/Particles";

// ── Sparkle Effect ──────────────────────────────────────────────────────────
function Sparkles() {
  const ref = useRef(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const sparkles = [];
    function spawnSparkle() {
      const s = document.createElement("div");
      const size = Math.random() * 8 + 4;
      s.style.cssText = `
        position:fixed;
        left:${Math.random() * 100}vw;
        top:${Math.random() * 100}vh;
        width:${size}px;height:${size}px;
        background:radial-gradient(circle, #FFE97D, rgba(201,168,76,0.3));
        border-radius:50%;
        pointer-events:none;
        z-index:2;
        animation:sparkle ${Math.random() * 2 + 1.5}s ease-in-out forwards;
        animation-delay:${Math.random() * 0.5}s;
      `;
      container.appendChild(s);
      sparkles.push(s);
      setTimeout(() => {
        if (s.parentNode) s.remove();
      }, 3500);
    }
    const interval = setInterval(spawnSparkle, 600);
    return () => {
      clearInterval(interval);
      sparkles.forEach((s) => s.remove());
    };
  }, []);
  return (
    <div
      ref={ref}
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 2 }}
    />
  );
}

// ── Section separator ───────────────────────────────────────────────────────
function GoldSeparator() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 1.5rem",
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          flex: 1,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.3))",
        }}
      />
      <div
        style={{
          width: 8,
          height: 8,
          background: "#C9A84C",
          transform: "rotate(45deg)",
          margin: "0 12px",
          flexShrink: 0,
          boxShadow: "0 0 8px rgba(201,168,76,0.6)",
        }}
      />
      <div
        style={{
          flex: 1,
          height: 1,
          background:
            "linear-gradient(90deg, rgba(201,168,76,0.3), transparent)",
        }}
      />
    </div>
  );
}

// ── Main App ────────────────────────────────────────────────────────────────
function App() {
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef(null);

  // Once user enters, attempt to play ambient music
  useEffect(() => {
    if (entered && audioRef.current) {
      if (!muted) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [entered]);

  const handleToggleMute = () => {
    setMuted((m) => {
      const next = !m;
      if (audioRef.current) {
        audioRef.current.muted = next;
        if (!next) audioRef.current.play().catch(() => {});
        else audioRef.current.pause();
      }
      return next;
    });
  };

  return (
    <>
      {/* Ambient music — using a royalty-free piano loop URL */}
      <audio
        ref={audioRef}
        loop
        muted={muted}
        preload="none"
        style={{ display: "none" }}
      >
        {/* Gentle instrumental — will load only if unmuted */}
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Welcome / Splash Screen */}
      <WelcomeScreen onEnter={() => setEntered(true)} />

      {/* Main site — rendered beneath the welcome screen */}
      <AnimatePresence>
        {entered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Ambient effects — always on top */}
            <Petals />
            <Particles />
            <Sparkles />

            {/* Navigation */}
            <Navbar muted={muted} onToggleMute={handleToggleMute} />

            {/* Page sections */}
            <main>
              <Hero />
              <GoldSeparator />
              <WeddingDetails />
              <GoldSeparator />
              <Countdown />
              <GoldSeparator />
              <Story />
              <GoldSeparator />
              <EventsTimeline />
              <GoldSeparator />
              {/* <Gallery /> */}
              <GoldSeparator />
              <Venue />
              <GoldSeparator />
              <FamilyInvitation />
              <GoldSeparator />
              {/* <RSVP /> */}
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
