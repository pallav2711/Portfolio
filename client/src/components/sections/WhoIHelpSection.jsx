import { motion } from 'framer-motion';
import { Building2, Rocket, Store, UserCircle, GraduationCap, Bot } from 'lucide-react';

const AUDIENCE = [
  {
    icon: Building2,
    title: 'Small Businesses',
    desc: 'You need a professional website that builds trust and brings in customers. I build fast, modern sites that represent your brand properly.',
    tags: ['Business Website', 'Contact Forms', 'SEO Basics'],
  },
  {
    icon: Rocket,
    title: 'Startups & Founders',
    desc: "Need an MVP or landing page fast? I build lean, scalable products that help you validate your idea and attract early users.",
    tags: ['MVP', 'Landing Pages', 'Full Stack App'],
  },
  {
    icon: Store,
    title: 'Shops & Local Businesses',
    desc: 'Inventory, billing, or management systems that save you time. Custom dashboards built around how your business actually works.',
    tags: ['Inventory System', 'Admin Dashboard', 'Business Tools'],
  },
  {
    icon: UserCircle,
    title: 'Creators & Professionals',
    desc: 'A portfolio that showcases your work and gets you noticed. Clean, modern, and designed to make a great first impression.',
    tags: ['Portfolio Site', 'Personal Brand', 'Resume Page'],
  },
  {
    icon: GraduationCap,
    title: 'Students & Learners',
    desc: "Need help with a project, a portfolio, or guidance on your dev journey? I've been there and I'm happy to help.",
    tags: ['Project Help', 'Portfolio', 'Dev Guidance'],
  },
  {
    icon: Bot,
    title: 'AI-Curious Businesses',
    desc: 'Want AI features in your product? Chatbots, content generators, smart dashboards — integrated cleanly into your existing system.',
    tags: ['AI Integration', 'OpenAI', 'Smart Features'],
  },
];

export default function WhoIHelpSection() {
  return (
    <section id="who-i-help" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-tag">Who I Help</div>
          <h2 className="section-title">Built for <em>Real People</em></h2>
          <p className="section-desc">
            Whether you're launching something new or need to improve what you have — there's a good chance I can help.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '1.25rem',
        }}>
          {AUDIENCE.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
                style={{
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '10px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} color="#fff" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.02rem', fontWeight: 600, color: '#fff', marginBottom: '0.45rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: '3px 10px', borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(255,255,255,0.03)',
                      fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
