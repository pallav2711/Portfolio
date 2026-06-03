import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const STATS = [
  { value: '5+', label: 'Projects Built' },
  { value: '6+', label: 'Technologies' },
  { value: '2+', label: 'Years Learning' },
  { value: '2', label: 'Live Products' },
];

export default function AboutSection({ data }) {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Developer, Problem Solver<br /><em>&amp; Builder</em></h2>
        </motion.div>

        <div className="about-grid-layout">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              I'm a 2nd-year Computer Science Engineering student specializing in AI &amp; ML at GSFC University.
              Alongside my studies, I work as a Full Stack Developer — building real products that solve real problems.
            </p>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              I've shipped production features at <strong style={{ color: '#fff' }}>Foecht</strong>, built Crackit AI —
              a SaaS platform with real users — and led a 4-person team to deliver ProdFlow AI end-to-end.
              I'm deeply interested in startups, AI-powered products, and software that actually gets used.
            </p>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              I focus on quality UI, clean architecture, and fast delivery. Whether it's a business website,
              an admin system, or an AI integration — I build it the right way, the first time.
            </p>

            <div style={{
              background: 'var(--bg-glass)', borderLeft: '2px solid rgba(255,255,255,0.3)',
              padding: '1.5rem 2rem', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
              marginBottom: '2rem', fontStyle: 'italic', color: '#fff', fontSize: '1.02rem',
              boxShadow: 'var(--shadow-glass)', backdropFilter: 'blur(10px)', lineHeight: 1.8,
            }}>
              "{data.aboutQuote}"
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  padding: '1rem 1.25rem', background: 'var(--bg-glass)',
                  border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)',
                  backdropFilter: 'blur(10px)', minWidth: '90px',
                }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#fff', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px', letterSpacing: '0.08em', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Name', value: data.name },
                { label: 'Location', value: data.location },
                { label: 'Education', value: data.educationDegree },
                { label: 'Specialization', value: 'AI & ML — Full Stack Dev' },
                { label: 'CGPA', value: data.cgpa },
                { label: 'Email', value: data.email, isEmail: true },
              ].map((row) => (
                <li key={row.label} className="about-info-row">
                  <span style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{row.label}</span>
                  {row.isEmail
                    ? <a href={`mailto:${row.value}`} style={{ color: '#fff', borderBottom: '1px solid var(--border-medium)', fontSize: '0.9rem', wordBreak: 'break-all' }}>{row.value}</a>
                    : <span style={{ color: '#fff', fontSize: '0.9rem', textAlign: 'right' }}>{row.value}</span>
                  }
                </li>
              ))}
              <li className="about-info-row">
                <span style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Social</span>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href={data.github} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
                    <Github size={18} className="portfolio-icon" strokeWidth={1.75} />
                  </a>
                  <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
                    <Linkedin size={18} className="portfolio-icon" strokeWidth={1.75} />
                  </a>
                </div>
              </li>
            </ul>

            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Tech I Use</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Java', 'OpenAI API', 'Tailwind CSS', 'JWT', 'REST APIs'].map((tech) => (
                  <span key={tech} style={{
                    padding: '5px 12px', borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.03)',
                    fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500,
                  }}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
