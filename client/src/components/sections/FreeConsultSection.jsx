import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function FreeConsultSection({ whatsapp = '' }) {
  const waNumber = whatsapp.replace(/[^0-9]/g, '');
  const consultLink = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi Pallav! I'd like to book a free website consultation. Let me tell you about my idea.")}`;
  const quoteLink = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi Pallav! I'd like to chat on WhatsApp about my project.")}`;

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          style={{
            padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.5rem, 5vw, 3.5rem)',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
            border: '1px solid rgba(255,255,255,0.14)',
            backdropFilter: 'blur(20px)',
            textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* ambient glow */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 70% 70% at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)',
          }} />

          <div className="section-tag" style={{ justifyContent: 'center', position: 'relative' }}>
            Free Offer
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 600, color: '#fff',
            marginBottom: '1rem', position: 'relative',
            lineHeight: 1.2, letterSpacing: '-0.02em',
          }}>
            Free Website Consultation
          </h2>

          <p style={{
            fontSize: '1rem', color: 'var(--text-secondary)',
            maxWidth: '520px', margin: '0 auto 2.25rem',
            lineHeight: 1.75, position: 'relative',
          }}>
            Not sure what to build or where to start? Let's talk through your idea, figure out the best approach,
            and I'll give you an honest recommendation — no commitment needed.
          </p>

          <div style={{
            display: 'flex', gap: '0.85rem', justifyContent: 'center',
            flexWrap: 'wrap', position: 'relative',
          }}>
            <motion.a
              href={consultLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '9px',
                padding: '0.9rem 2.2rem', borderRadius: '999px',
                background: '#fff', color: '#050505',
                fontSize: '0.95rem', fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(255,255,255,0.15)',
              }}
            >
              Book Free Consultation <ArrowRight size={15} />
            </motion.a>

            <motion.a
              href={quoteLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '9px',
                padding: '0.9rem 2rem', borderRadius: '999px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#fff', fontSize: '0.95rem', fontWeight: 600,
                textDecoration: 'none', backdropFilter: 'blur(10px)',
              }}
            >
              <SiWhatsapp size={16} /> Chat on WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
