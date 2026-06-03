import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code2, FlaskConical, Rocket } from 'lucide-react';

const STEPS = [
  { icon: MessageSquare, number: '01', title: 'Discuss Your Requirements', desc: "We start with a free conversation. You tell me what you need, I ask the right questions, and we figure out the best approach together." },
  { icon: PenTool, number: '02', title: 'Planning & Design', desc: "I map out the structure, plan the tech stack, and share a clear timeline. No surprises — just a solid plan before any code is written." },
  { icon: Code2, number: '03', title: 'Development', desc: "I build it with clean, well-structured code. You get regular progress updates and can share feedback throughout the process." },
  { icon: FlaskConical, number: '04', title: 'Revisions & Testing', desc: "We review everything together. I test across devices, fix bugs, and make sure everything looks and works exactly as expected." },
  { icon: Rocket, number: '05', title: 'Launch & Support', desc: "I handle deployment and make sure everything is live and stable. And I stay available for support even after the project is done." },
];

export default function HowWeWorkSection() {
  return (
    <section id="process" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-tag">Process</div>
          <h2 className="section-title">How We <em>Work Together</em></h2>
          <p className="section-desc">Clear, collaborative, and no surprises. Here's how a project goes from idea to launch.</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '720px', margin: '0 auto' }}>
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === STEPS.length - 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}
              >
                {!isLast && (
                  <div style={{
                    position: 'absolute', left: '21px', top: '52px',
                    width: '2px', height: 'calc(100% - 20px)',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 100%)',
                  }} />
                )}
                <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color="#fff" strokeWidth={1.75} />
                  </div>
                </div>
                <div style={{ paddingBottom: isLast ? 0 : '2.5rem', paddingTop: '8px' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Step {step.number}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
