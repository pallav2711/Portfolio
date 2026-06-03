import { motion } from 'framer-motion';
import { DollarSign, MessageSquare, Code2, LifeBuoy, Lightbulb, Sparkles } from 'lucide-react';

const REASONS = [
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Premium quality at a price that makes sense. No agency overhead — you work directly with me.' },
  { icon: MessageSquare, title: 'Fast Communication', desc: 'Clear updates, quick replies, and no guessing games. I typically respond within 12 hours.' },
  { icon: Code2, title: 'Modern Tech Stack', desc: 'React, Node.js, MongoDB, REST APIs. Your project is built with tools that scale and last.' },
  { icon: LifeBuoy, title: 'Long-Term Support', desc: "I don't disappear after launch. Bug fixes, updates, and guidance — I'm here after delivery too." },
  { icon: Lightbulb, title: 'Problem-Solving Mindset', desc: "I think about the whole picture — not just the ticket. You get solutions, not just code." },
  { icon: Sparkles, title: 'Premium UI Focus', desc: 'Every interface I build is clean, modern, and polished. First impressions matter — I take that seriously.' },
];

export default function WhyMeSection() {
  return (
    <section id="why-me" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-tag">Why Work With Me</div>
          <h2 className="section-title">Why Clients <em>Choose Me</em></h2>
          <p className="section-desc">
            It's not just about writing code. It's about understanding your goal and delivering something that actually works.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1.25rem',
        }}>
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                style={{
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '10px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  <Icon size={20} color="#fff" strokeWidth={1.75} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>{r.title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
