import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const INITIAL = { name: '', phone: '', guests: '1', attendance: '' };

function RSVP() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    if (!form.attendance) e.attendance = 'Please confirm your attendance';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (field, value) => {
    setForm(p => ({ ...p, [field]: value }));
    setErrors(p => ({ ...p, [field]: undefined }));
  };

  return (
    <section id="rsvp" ref={ref} className="section-pad" style={{
      background: `
        radial-gradient(ellipse at center, rgba(107,28,28,0.15) 0%, transparent 70%),
        linear-gradient(180deg, var(--dark-bg), rgba(26,10,4,0.95), var(--dark-bg))
      `,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p className="section-subheading text-gold" style={{ opacity: 0.7, marginBottom: '0.75rem' }}>
            ✦ LET US KNOW ✦
          </p>
          <h2 className="section-heading gold-gradient-text">RSVP</h2>
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
            Your presence will make our celebration complete
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="premium-card"
            style={{ padding: '3rem', textAlign: 'center', borderRadius: '4px' }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ fontSize: '3rem', marginBottom: '1rem' }}
            >
              🎊
            </motion.div>
            <h3 className="font-great-vibes gold-gradient-text" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '1rem' }}>
              Thank You!
            </h3>
            <p className="font-cormorant text-cream" style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontStyle: 'italic', opacity: 0.8, lineHeight: 1.8
            }}>
              We have received your response, <strong style={{ color: '#C9A84C' }}>{form.name}</strong>.<br />
              We can't wait to celebrate with you! 🌸
            </p>
            <p className="font-cinzel text-gold" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', opacity: 0.5, marginTop: '1.5rem' }}>
              RAMESH BABU ❤ AKHILAJA
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="premium-card"
            style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}
          >
            {/* Card corner decorations */}
            {[
              { top: 12, left: 12, borderWidth: '2px 0 0 2px' },
              { top: 12, right: 12, borderWidth: '2px 2px 0 0' },
              { bottom: 12, left: 12, borderWidth: '0 0 2px 2px' },
              { bottom: 12, right: 12, borderWidth: '0 2px 2px 0' },
            ].map((s, i) => (
              <div key={i} style={{
                position: 'absolute', ...s,
                width: 28, height: 28,
                borderStyle: 'solid', borderColor: 'rgba(201,168,76,0.4)'
              }} />
            ))}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>

              {/* Name */}
              <div>
                <label className="font-cinzel text-gold" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', display: 'block', marginBottom: '0.6rem', opacity: 0.8 }}>
                  FULL NAME *
                </label>
                <input
                  id="rsvp-name"
                  className="form-input"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                />
                {errors.name && <p style={{ color: '#C9A84C', fontSize: '0.8rem', marginTop: '0.3rem', fontStyle: 'italic' }}>{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="font-cinzel text-gold" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', display: 'block', marginBottom: '0.6rem', opacity: 0.8 }}>
                  PHONE NUMBER *
                </label>
                <input
                  id="rsvp-phone"
                  className="form-input"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                />
                {errors.phone && <p style={{ color: '#C9A84C', fontSize: '0.8rem', marginTop: '0.3rem', fontStyle: 'italic' }}>{errors.phone}</p>}
              </div>

              {/* Number of guests */}
              <div>
                <label className="font-cinzel text-gold" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', display: 'block', marginBottom: '0.6rem', opacity: 0.8 }}>
                  NUMBER OF GUESTS
                </label>
                <select
                  id="rsvp-guests"
                  className="form-input"
                  value={form.guests}
                  onChange={e => handleChange('guests', e.target.value)}
                  style={{ cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A84C' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n} style={{ background: '#1A0A04', color: '#FDF6E3' }}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              {/* Attendance */}
              <div>
                <label className="font-cinzel text-gold" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', display: 'block', marginBottom: '0.8rem', opacity: 0.8 }}>
                  WILL YOU ATTEND? *
                </label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {[
                    { value: 'yes-both', label: '🎊 Both Events', icon: '🎉' },
                    { value: 'yes-ceremony', label: '🪷 Ceremony Only', icon: '🪷' },
                    { value: 'yes-reception', label: '🥂 Reception Only', icon: '🥂' },
                    { value: 'no', label: '💌 Unable to Attend', icon: '💌' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      id={`rsvp-${opt.value}`}
                      onClick={() => handleChange('attendance', opt.value)}
                      style={{
                        flex: '1 1 calc(50% - 0.5rem)',
                        padding: '0.9rem 0.75rem',
                        background: form.attendance === opt.value
                          ? 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(107,28,28,0.2))'
                          : 'rgba(201,168,76,0.04)',
                        border: `1px solid ${form.attendance === opt.value ? 'rgba(201,168,76,0.7)' : 'rgba(201,168,76,0.2)'}`,
                        borderRadius: '2px',
                        color: form.attendance === opt.value ? '#F5D98B' : 'rgba(253,246,227,0.6)',
                        cursor: 'pointer',
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '0.95rem',
                        fontStyle: 'italic',
                        transition: 'all 0.3s ease',
                        boxShadow: form.attendance === opt.value ? '0 0 15px rgba(201,168,76,0.2)' : 'none',
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {errors.attendance && <p style={{ color: '#C9A84C', fontSize: '0.8rem', marginTop: '0.5rem', fontStyle: 'italic' }}>{errors.attendance}</p>}
              </div>

              {/* Submit button */}
              <motion.button
                id="rsvp-submit"
                type="submit"
                className="btn-gold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '0.85rem',
                  letterSpacing: '0.2em',
                  borderRadius: '2px',
                  marginTop: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      style={{ display: 'inline-block', fontSize: '1rem' }}
                    >
                      ✦
                    </motion.span>
                    SENDING...
                  </>
                ) : '✦ CONFIRM ATTENDANCE ✦'}
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}

export default RSVP;
