import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const CASE_STUDY_META = {
  'Crackit AI': {
    problem: 'Job seekers waste hours creating resumes and preparing for interviews with no structured tools.',
    solution: 'Built an AI SaaS with OpenAI-powered resume builder, mock interviews, and analytics dashboard.',
    result: 'Live product serving real users. Resume generation in under 30 seconds.',
    tags: ['AI SaaS', 'Full Stack', 'Web App'],
    codeLink: 'https://github.com/pallav2711',
  },
  'ProdFlow AI': {
    problem: 'Engineering teams lack tools that forecast sprint risks before they become blockers.',
    solution: 'Led a 4-person team to build an AI sprint planning platform with RBAC and real-time dashboards.',
    result: 'Shipped ahead of schedule. AI prediction reduced missed sprint goals.',
    tags: ['Dashboard', 'Full Stack', 'Team Project'],
    codeLink: 'https://github.com/pallav2711',
  },
};

export default function ProjectsSection({ projects = [], activeTab, setActiveTab }) {
  const filtered = activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: '2.5rem' }}
        >
          <div className="section-tag">Featured Projects</div>
          <h2 className="section-title">What I've <em>Built</em></h2>
          <p className="section-desc">Production-grade apps used by real users — from idea to launch.</p>
        </motion.div>

        <div className="filter-bar">
          {['all', 'fullstack'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className="filter-btn" style={{
              padding: '0.65rem 1.75rem', fontSize: '0.88rem',
              borderRadius: 'var(--radius-full)',
              border: activeTab === tab ? '1px solid rgba(255,255,255,0.3)' : '1px solid var(--border-subtle)',
              background: activeTab === tab ? 'rgba(255,255,255,0.08)' : 'var(--bg-glass)',
              color: activeTab === tab ? '#fff' : 'var(--text-secondary)',
              fontWeight: 600, backdropFilter: 'blur(10px)', cursor: 'pointer',
              transition: 'all var(--transition-smooth)',
            }}>
              {tab === 'all' ? 'All Projects' : 'Full Stack'}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => {
            const meta = CASE_STUDY_META[project.title] || {};
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                style={{
                  display: 'flex', flexDirection: 'column', padding: '2.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#fff', fontFamily: 'var(--font-serif)' }}>{project.title}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                    {meta.codeLink && (
                      <a href={meta.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.78rem', gap: '5px' }}>
                        <Github size={12} /> Code
                      </a>
                    )}
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.78rem', gap: '5px' }}>
                      Live <ExternalLink size={11} />
                    </a>
                  </div>
                </div>

                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1.25rem' }}>{project.stack}</p>

                {meta.tags && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                    {meta.tags.map((tag) => (
                      <span key={tag} style={{
                        padding: '3px 10px', borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)',
                        fontSize: '0.71rem', color: 'var(--text-muted)', fontWeight: 500,
                      }}>{tag}</span>
                    ))}
                  </div>
                )}

                {meta.problem ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', flexGrow: 1 }}>
                    {[
                      { label: 'Problem', text: meta.problem, color: 'rgba(255,100,100,0.7)' },
                      { label: 'Solution', text: meta.solution, color: 'rgba(255,255,255,0.5)' },
                      { label: 'Result', text: meta.result, color: 'rgba(100,255,150,0.7)' },
                    ].map((row) => (
                      <div key={row.label} style={{
                        padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.07)', borderLeft: `3px solid ${row.color}`,
                        borderRadius: '0 8px 8px 0',
                      }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, color: row.color, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '3px' }}>{row.label}</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{row.text}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                    {project.desc.map((bullet, bi) => (
                      <li key={bi} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '1.25rem', lineHeight: 1.7, position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, top: '10px', width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
