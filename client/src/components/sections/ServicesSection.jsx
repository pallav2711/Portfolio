import { motion } from 'framer-motion';
import { Globe, Zap, Wrench, LayoutDashboard, User, Gauge, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const SERVICES = [
  {
    icon: Globe, title: 'Business Website Development',
    headline: 'Build a Professional Website That Grows Your Business',
    bestFor: 'Local businesses, startups, brands', price: '$199+', delivery: '5–10 Days',
    features: ['Responsive website', 'Premium UI design', 'Contact form', 'SEO basics', 'Fast loading', 'WhatsApp integration', 'Deployment support'],
    popular: false, badge: null,
  },
  {
    icon: Zap, title: 'Landing Page Development',
    headline: 'Convert Visitors Into Customers',
    bestFor: 'Startups, products, marketing campaigns', price: '$49+', delivery: '2–4 Days',
    features: ['High-converting design', 'Mobile responsive', 'CTA optimization', 'Lead capture form', 'Fast performance'],
    popular: false, badge: 'Best Value',
  },
  {
    icon: Wrench, title: 'Website Maintenance & Bug Fixing',
    headline: 'Keep Your Website Fast, Secure & Running Smoothly',
    bestFor: 'Existing websites needing ongoing care', price: '$39/month+', delivery: 'Ongoing Support',
    features: ['Bug fixes', 'Content updates', 'Security improvements', 'Speed optimization', 'Responsive fixes', 'Technical support'],
    popular: false, badge: null,
  },
  {
    icon: LayoutDashboard, title: 'Admin Dashboard & Business Systems',
    headline: 'Custom Systems to Manage Your Business Efficiently',
    bestFor: 'Businesses needing internal tools', price: '$249+', delivery: '7–14 Days',
    features: ['Admin dashboard', 'Login authentication', 'CRUD operations', 'Database integration', 'Search & filtering', 'Analytics view'],
    popular: true, badge: null,
  },
  {
    icon: User, title: 'Portfolio Website Development',
    headline: 'Build a Professional Personal Brand Online',
    bestFor: 'Students, developers, creators', price: '$99+', delivery: '3–5 Days',
    features: ['Modern design', 'Projects showcase', 'Resume download', 'Contact form', 'Responsive layout', 'Smooth animations'],
    popular: false, badge: null,
  },
  {
    icon: Gauge, title: 'Website Redesign & UI Improvement',
    headline: 'Transform Outdated Websites Into Modern Experiences',
    bestFor: 'Sites that feel old or slow', price: '$79+', delivery: '2–7 Days',
    features: ['UI redesign', 'Better UX flow', 'Speed optimization', 'Responsive fixes', 'Better navigation', 'Modern styling'],
    popular: false, badge: null,
  },
];

export default function ServicesSection({ whatsapp = '' }) {
  const waNumber = whatsapp.replace(/[^0-9]/g, '');
  const buildWaLink = (srv) =>
    `https://wa.me/${waNumber}?text=${encodeURIComponent(
      `Hi Pallav! I'm interested in your *${srv.title}* service (${srv.price}).\n\nDelivery: ${srv.delivery}\nBest for: ${srv.bestFor}\n\nFeatures:\n${srv.features.map((f) => `• ${f}`).join('\n')}\n\nI'd like to discuss my project.`
    )}`;

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-tag">Services</div>
          <h2 className="section-title">Services <em>I Offer</em></h2>
          <p className="section-desc">
            Helping startups, businesses, and creators build powerful digital experiences — focused on outcomes, not just deliverables.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
        }}>
          {SERVICES.map((srv, i) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                style={{
                  display: 'flex', flexDirection: 'column',
                  padding: '1.85rem',
                  borderRadius: 'var(--radius-md)',
                  background: srv.popular
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)'
                    : 'rgba(255,255,255,0.03)',
                  border: srv.popular ? '1px solid rgba(255,255,255,0.22)' : '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* ambient glow */}
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: 110, height: 110, pointerEvents: 'none',
                  background: srv.popular
                    ? 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
                }} />

                {srv.popular && (
                  <div style={{
                    position: 'absolute', top: '1.1rem', right: '1.1rem',
                    background: '#fff', color: '#050505', fontSize: '0.62rem', fontWeight: 700,
                    padding: '3px 10px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>Most Popular</div>
                )}
                {srv.badge === 'Best Value' && (
                  <div style={{
                    position: 'absolute', top: '1.1rem', right: '1.1rem',
                    background: 'rgba(255,255,255,0.12)', color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)',
                    fontSize: '0.62rem', fontWeight: 700,
                    padding: '3px 10px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>Best Value</div>
                )}

                <div style={{
                  width: 46, height: 46, borderRadius: '12px',
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.1rem', flexShrink: 0,
                }}>
                  <Icon size={21} color="#fff" strokeWidth={1.75} />
                </div>

                <h3 style={{
                  fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.3rem', lineHeight: 1.35,
                  paddingRight: srv.popular || srv.badge ? '4rem' : 0,
                }}>{srv.title}</h3>

                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                  {srv.headline}
                </p>

                <p style={{ fontSize: '0.77rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Best for: </span>{srv.bestFor}
                </p>

                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  flexWrap: 'wrap', gap: '0.5rem',
                  padding: '0.65rem 0.9rem',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px', marginBottom: '1.1rem',
                }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{srv.price}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    <Clock size={11} /> {srv.delivery}
                  </span>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1, marginBottom: '1.5rem' }}>
                  {srv.features.map((feat, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', fontSize: '0.83rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={12} color="rgba(255,255,255,0.45)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={buildWaLink(srv)}
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '7px', width: '100%', padding: '0.7rem',
                    borderRadius: '999px', fontSize: '0.86rem', fontWeight: 600,
                    cursor: 'pointer', textDecoration: 'none',
                    ...(srv.popular
                      ? { background: '#fff', color: '#050505', border: 'none', boxShadow: '0 4px 20px rgba(255,255,255,0.15)' }
                      : { background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }),
                  }}
                >
                  <SiWhatsapp size={13} /> Get Free Quote <ArrowRight size={12} />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
