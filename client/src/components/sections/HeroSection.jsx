import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const TRUST_BADGES = [
  'Affordable Pricing',
  'Fast Communication',
  'Modern Tech Stack',
  'Long-Term Support',
];

export default function HeroSection({ data, typedText, mousePos }) {
  const waNumber = (data.whatsapp || '').replace(/[^0-9]/g, '');
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi Pallav! I'd like to get a free quote for my project.")}`;

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-clearance) + 16px)',
        paddingBottom: '2rem',
        position: 'relative',
        background:
          'radial-gradient(circle at 15% 25%, rgba(255,255,255,0.055) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(255,255,255,0.035) 0%, transparent 45%)',
      }}
    >
      <div className="cursor-glow" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1.15fr 0.85fr',
        gap: 'clamp(2rem, 4vw, 4rem)',
        alignItems: 'center',
        width: '100%',
      }}>

        {/* ── LEFT CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* availability pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            padding: '4px 13px', borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(255,255,255,0.14)',
            background: 'rgba(255,255,255,0.04)',
            fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-secondary)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            marginBottom: '1.1rem', backdropFilter: 'blur(10px)',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', display: 'inline-block',
              background: '#fff', boxShadow: '0 0 8px rgba(255,255,255,0.8)',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            Available for Freelance Projects
          </div>

          {/* headline */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.85rem, 3.8vw, 3.2rem)',
            lineHeight: 1.14, fontWeight: 700,
            letterSpacing: '-0.03em', marginBottom: '0.85rem',
          }}>
            I Build Websites &amp; Software<br />
            <span style={{
              background: 'linear-gradient(135deg, #fff 0%, #b0b0b0 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', fontStyle: 'italic', fontWeight: 500,
            }}>
              That Help Businesses Grow
            </span>
          </h1>

          {/* typewriter */}
          <p style={{
            fontSize: '0.98rem', color: 'var(--text-secondary)',
            marginBottom: '0.75rem', minHeight: '24px',
          }}>
            Specializing in{' '}
            <span style={{ fontWeight: 600, color: '#fff' }}>{typedText}</span>
            <span style={{ borderRight: '2px solid #fff', animation: 'blink 0.8s step-end infinite', marginLeft: '2px' }} />
          </p>

          {/* sub-copy — trimmed to 2 lines */}
          <p style={{
            fontSize: '0.9rem', color: 'var(--text-secondary)',
            lineHeight: 1.7, maxWidth: '480px', marginBottom: '1.25rem',
          }}>
            Hi, I'm <strong style={{ color: '#fff', fontWeight: 600 }}>Pallav Kanani</strong> — a Full Stack Developer &amp; CSE student
            building modern websites, custom software, and AI-powered products for startups and businesses.
          </p>

          {/* trust badges — single row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '1.5rem' }}>
            {TRUST_BADGES.map((badge) => (
              <span key={badge} style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                padding: '4px 11px', borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
                fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 500,
              }}>
                <CheckCircle size={10} color="rgba(255,255,255,0.45)" />
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs — 2 primary + whatsapp in same row */}
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '0.85rem' }}>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ gap: '7px', padding: '0.7rem 1.6rem', fontSize: '0.9rem' }}
            >
              Get Free Quote <ArrowRight size={14} />
            </motion.a>
            <motion.a
              href="#projects"
              className="btn btn-secondary"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ padding: '0.7rem 1.4rem', fontSize: '0.9rem' }}
            >
              View My Work
            </motion.a>
            <motion.a
              href={waLink}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '0.7rem 1.2rem', borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.04)',
                color: '#fff', fontSize: '0.88rem', fontWeight: 500,
                textDecoration: 'none', backdropFilter: 'blur(10px)',
              }}
            >
              <SiWhatsapp size={15} /> WhatsApp
            </motion.a>
          </div>

          <p style={{
            fontSize: '0.74rem', color: 'var(--text-muted)',
            display: 'flex', alignItems: 'center', gap: '5px',
          }}>
            <MessageCircle size={11} /> Typically replies within 12 hours
          </p>
        </motion.div>

        {/* ── RIGHT VISUAL ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
          style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '1rem',
          }}
        >
          {/* profile ring */}
          <div style={{
            position: 'relative',
            width: 'clamp(200px, 26vw, 280px)',
            height: 'clamp(200px, 26vw, 280px)',
            marginTop: 'calc(var(--hero-visual-top-buffer, 50px))',
          }}>
            {/* spin ring */}
            <div className="animate-spin-slow" style={{
              position: 'absolute', inset: '-14px', borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: '0 0 28px rgba(255,255,255,0.04)',
            }} />
            {/* dashed ring */}
            <div style={{
              position: 'absolute', inset: '-7px', borderRadius: '50%',
              border: '1px dashed rgba(255,255,255,0.07)',
            }} />
            {/* glow */}
            <div style={{
              position: 'absolute', inset: '-22px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }} />
            {/* image container */}
            <div className="animate-float" style={{
              position: 'relative', zIndex: 2,
              width: '100%', height: '100%', borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              border: '2px solid rgba(255,255,255,0.14)',
              overflow: 'hidden', padding: '7px',
              backdropFilter: 'blur(10px)',
              boxShadow: 'var(--shadow-luxury)',
            }}>
              <img
                src="/assets/profile.jpg"
                alt={data.name}
                width={280} height={280}
                loading="eager" decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;"><span style="font-family:var(--font-serif);font-size:4rem;font-weight:700;color:#fff;">PK</span></div>`;
                }}
              />
            </div>
            {/* floating dots */}
            <div style={{
              position: 'absolute', top: '8%', right: '-10px', zIndex: 3,
              width: '10px', height: '10px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.8)', boxShadow: '0 0 20px rgba(255,255,255,0.5)',
              animation: 'float 4s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', bottom: '12%', left: '-8px', zIndex: 3,
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.55)', boxShadow: '0 0 15px rgba(255,255,255,0.35)',
              animation: 'float 5s ease-in-out infinite reverse',
            }} />
          </div>

          {/* stats row — compact horizontal */}
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {[
              { value: data.stats?.projectsBuilt || '5+', label: 'Projects' },
              { value: data.stats?.experience || '2+', label: 'Yrs Exp' },
              { value: '12h', label: 'Reply' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '0.6rem 0.9rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px', backdropFilter: 'blur(10px)',
                textAlign: 'center', minWidth: '62px',
              }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#fff', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '3px', letterSpacing: '0.07em', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* status badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '5px 14px',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: 'var(--radius-full)',
            position: 'relative', overflow: 'hidden',
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', background: '#fff',
              boxShadow: '0 0 16px rgba(255,255,255,0.8)',
              animation: 'pulse 2s ease-in-out infinite',
              position: 'relative', zIndex: 2,
            }} />
            <span style={{
              fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.09em',
              textTransform: 'uppercase', color: '#fff', position: 'relative', zIndex: 2,
              whiteSpace: 'nowrap',
            }}>
              {data.status || 'Open to Projects'}
            </span>
            <span style={{
              position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
              animation: 'shimmer 3s infinite',
            }} />
          </div>
        </motion.div>
      </div>

      {/* responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          #hero > .container { grid-template-columns: 1fr !important; }
          #hero > .container > div:last-child { order: -1; }
        }
        @media (max-width: 640px) {
          #hero > .container > div:last-child > div:first-child {
            width: clamp(170px, 54vw, 220px) !important;
            height: clamp(170px, 54vw, 220px) !important;
          }
        }
      `}</style>
    </section>
  );
}
