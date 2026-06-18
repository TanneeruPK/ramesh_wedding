import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#details", label: "Details" },
  { href: "#countdown", label: "Countdown" },
  { href: "#story", label: "Story" },
  { href: "#events", label: "Events" },
  // { href: '#gallery', label: 'Gallery' },
  { href: "#venue", label: "Venue" },
  { href: "#family", label: "Invitation" },
  // { href: '#rsvp', label: 'RSVP' },
];

function Navbar({ muted, onToggleMute }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Highlight active section
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9000,
          padding: "0 1.5rem",
          height: scrolled ? 58 : 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(13,5,0,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: "none" }}>
          <span
            className="font-great-vibes gold-gradient-text"
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
              textShadow: "0 0 20px rgba(201,168,76,0.4)",
            }}
          >
            R ❤ A
          </span>
        </a>

        {/* Desktop links */}
        <div
          style={{
            gap: "0.25rem",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-cinzel"
              style={{
                color:
                  active === link.href ? "#C9A84C" : "rgba(253,246,227,0.55)",
                fontSize: "0.62rem",
                letterSpacing: "0.12em",
                textDecoration: "none",
                padding: "6px 10px",
                borderBottom:
                  active === link.href
                    ? "1px solid #C9A84C"
                    : "1px solid transparent",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                if (active !== link.href)
                  e.target.style.color = "rgba(201,168,76,0.9)";
              }}
              onMouseLeave={(e) => {
                if (active !== link.href)
                  e.target.style.color = "rgba(253,246,227,0.55)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Mute button */}
          <button
            id="mute-toggle"
            onClick={onToggleMute}
            title={muted ? "Unmute music" : "Mute music"}
            style={{
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "50%",
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#C9A84C",
              fontSize: "1rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(201,168,76,0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(201,168,76,0.1)")
            }
          >
            {muted ? "🔇" : "🎵"}
          </button>

          {/* Hamburger */}
          <button
            id="menu-toggle"
            className="mobile-nav-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "2px",
              width: 36,
              height: 36,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              cursor: "pointer",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: i === 1 ? 16 : 20,
                  height: 1,
                  background: "#C9A84C",
                  borderRadius: 1,
                  transition: "all 0.3s ease",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4px, 4px)"
                      : i === 2
                        ? "rotate(-45deg) translate(4px, -4px)"
                        : "scaleX(0)"
                    : "none",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "min(280px, 80vw)",
              height: "100vh",
              background:
                "linear-gradient(135deg, rgba(13,5,0,0.98), rgba(26,10,4,0.99))",
              borderLeft: "1px solid rgba(201,168,76,0.2)",
              zIndex: 9100,
              padding: "5rem 2rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute",
                top: 18,
                right: 16,
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#C9A84C",
                fontSize: "1.1rem",
                width: 36,
                height: 36,
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <p
              className="font-great-vibes gold-gradient-text"
              style={{
                fontSize: "2rem",
                marginBottom: "1.5rem",
                lineHeight: 1,
              }}
            >
              R ❤ A
            </p>

            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMenuOpen(false)}
                className="font-cinzel"
                style={{
                  color:
                    active === link.href ? "#C9A84C" : "rgba(253,246,227,0.6)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textDecoration: "none",
                  padding: "0.8rem 0",
                  borderBottom: "1px solid rgba(201,168,76,0.1)",
                  transition: "color 0.25s",
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay when menu open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 9050,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
