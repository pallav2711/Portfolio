import React, { useState, useEffect } from 'react';
import {
  Award, Mail, Phone, MapPin,
  Send, CheckCircle, Menu, X, ArrowRight, Github, Linkedin,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SiWhatsapp } from 'react-icons/si';
import PortfolioIcon from '../components/PortfolioIcon';
import TopicSelect from '../components/TopicSelect';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import WhoIHelpSection from '../components/sections/WhoIHelpSection';
import ServicesSection from '../components/sections/ServicesSection';
import WhyMeSection from '../components/sections/WhyMeSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import HowWeWorkSection from '../components/sections/HowWeWorkSection';
import FreeConsultSection from '../components/sections/FreeConsultSection';

const DEFAULT_DATA = {
  name: 'Pallav Kanani',
  title: 'Full Stack Developer',
  location: 'Gujarat, India',
  email: 'pallavkanani27@gmail.com',
  phone: '+91 6354678706',
  whatsapp: '+91 6354678706',
  github: 'https://github.com/pallav2711',
  linkedin: 'https://www.linkedin.com/in/pallav-kanani-306b8b28b',
  cgpa: '7.0 / 10',
  educationDegree: 'B.Tech CSE (AI & ML), GSFC University',
  educationYears: '2023 – 2027 (Expected)',
  status: 'Open to Projects',
  stats: { experience: '2+', projectsBuilt: '5+', fasterDelivery: '40%', apiSpeedBoost: '35%' },
  aboutQuote: "I don't just write code — I architect solutions. Whether it's a business website or an AI product, I think about the whole picture.",
  aboutParagraphs: [
    "I'm a 2nd-year CSE student specializing in AI & ML at GSFC University with real production experience as a Full-Stack Developer at Foecht.",
    "I built Crackit AI — a live SaaS platform with OpenAI integration — and led a 4-person team to ship ProdFlow AI end-to-end.",
    "I'm passionate about startups, AI-powered products, and building software that actually gets used.",
  ],
  skills: [
    { icon: 'mern', title: 'MERN Stack Core', tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Mongoose'] },
    { icon: 'frontend', title: 'Frontend', tags: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'] },
    { icon: 'backend', title: 'Backend & APIs', tags: ['RESTful APIs', 'JWT Auth', 'Middleware', 'Zod Validation', 'PostgreSQL'] },
    { icon: 'ai', title: 'AI Integration', tags: ['OpenAI API', 'Gemini API', 'AI/ML', 'Prompt Engineering'] },
    { icon: 'devops', title: 'DevOps & Tools', tags: ['Git & GitHub', 'Docker', 'Vercel', 'Postman', 'JIRA'] },
    { icon: 'qa', title: 'QA & Project Mgmt', tags: ['Agile / Scrum', 'API Testing', 'Code Review', 'Sprint Planning', 'RBAC Design'] },
  ],
  experience: [
    {
      role: 'Full-Stack Developer',
      company: 'Foecht',
      dates: '2025 – 2026',
      details: [
        'Developed 3+ production features using MERN stack, reducing delivery time by 40%',
        'Optimized MongoDB queries and indexes, improving API response time by 35%',
        'Built RESTful APIs with JWT auth, Zod validation, and robust error handling',
        'Performed end-to-end testing across 3+ features and reviewed 50+ pull requests',
        'Coordinated delivery using Agile, managing sprint planning and cross-team communication',
      ],
    },
    {
      role: 'B.Tech in Computer Science & Engineering',
      company: 'GSFC University, Gujarat',
      dates: '2023 – 2027',
      details: [
        'Specialization in AI & ML with CGPA 7.0',
        'Coursework: Data Structures · Algorithms · Web Development · DBMS · Software Engineering',
      ],
    },
  ],
  projects: [
    {
      title: 'Crackit AI',
      category: 'fullstack',
      liveLink: 'https://crackiitai.vercel.app',
      stack: 'React.js · Node.js · MongoDB · OpenAI API',
      desc: [
        'Full-stack AI SaaS career platform with JWT auth and RESTful APIs serving real users',
        'AI Resume Builder generates ATS-optimized resumes in under 30 seconds',
        'Mock Interview system with real-time AI feedback and analytics dashboard',
      ],
    },
    {
      title: 'ProdFlow AI',
      category: 'fullstack',
      liveLink: 'https://prodflowaii.vercel.app',
      stack: 'React.js · Node.js · MongoDB · AI/ML',
      desc: [
        'Led 4-member team building an AI-powered sprint planning platform',
        'AI prediction engine forecasts sprint outcomes and identifies risks early',
        'RBAC system with 4 user roles and granular permission management',
      ],
    },
  ],
  certifications: [
    { name: 'Cloud Computing', issuer: 'NPTEL, IIT Kharagpur', year: '2024' },
    { name: 'AI Fundamentals', issuer: 'Cisco Networking Academy', year: '2025' },
  ],
  testimonials: [
    { quote: "Pallav is the kind of developer who doesn't just complete tasks — he improves the whole process. Genuinely one of the most reliable engineers I've worked with.", authorName: 'Team Member, Foecht', authorRole: 'Engineering Colleague · 2025–2026', avatarLetters: 'TM' },
    { quote: "Leading ProdFlow AI with Pallav was a great experience. He understood both the architecture and the product vision. The platform shipped ahead of schedule.", authorName: 'Project Collaborator', authorRole: 'ProdFlow AI Team · 2025', avatarLetters: 'PM' },
    { quote: "Pallav built Crackit AI from scratch while keeping the codebase clean and the API fast. That 35% performance improvement wasn't accidental.", authorName: 'Early User, Crackit AI', authorRole: 'Platform Feedback · 2025', avatarLetters: 'CR' },
  ],
  blogs: [
    { category: 'MERN Stack', title: 'How I Cut API Response Time by 35% with MongoDB Index Optimization', excerpt: 'How I identified N+1 query patterns via Postman and restructured indexes to improve production performance.', date: 'May 2025', readTime: '5 min read' },
    { category: 'AI Integration', title: 'Building an ATS Resume Generator with OpenAI API in Under a Weekend', excerpt: 'The engineering story behind Crackit AI\'s resume builder — prompt design, streaming responses, and speed.', date: 'July 2025', readTime: '7 min read' },
    { category: 'Project Management', title: 'Leading a Dev Team as a Student: What I Learned on ProdFlow AI', excerpt: 'Lessons from coordinating a 4-person team through a full SDLC — from architecture to production bugs at 2 AM.', date: 'September 2025', readTime: '6 min read' },
  ],
};

const NAV_LINKS = ['About', 'Services', 'Projects', 'Process', 'Contact'];

const Portfolio = () => {
  const [data, setData] = useState(DEFAULT_DATA);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Typewriter
  const [typedText, setTypedText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const textArray = ['React.js & Node.js Apps', 'Business Websites', 'Admin Dashboards', 'AI-Powered Products', 'Full Stack Software'];

  // Form
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', subject: '', budget: '', message: '' });
  const [formSuccess, setFormSuccess] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // typewriter
  useEffect(() => {
    const handle = setTimeout(() => {
      const i = loopNum % textArray.length;
      const full = textArray[i];
      if (isDeleting) {
        setTypedText(full.substring(0, typedText.length - 1));
        setTypingSpeed(40);
      } else {
        setTypedText(full.substring(0, typedText.length + 1));
        setTypingSpeed(100);
      }
      if (!isDeleting && typedText === full) { setIsDeleting(true); setTypingSpeed(1800); }
      else if (isDeleting && typedText === '') { setIsDeleting(false); setLoopNum(loopNum + 1); setTypingSpeed(300); }
    }, typingSpeed);
    return () => clearTimeout(handle);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/portfolio`);
        if (res.ok) { const json = await res.json(); setData(json); }
      } catch { /* use defaults */ }
      finally { setTimeout(() => setLoading(false), 800); }
    };
    fetchData();
  }, []);

  // scroll + mouse
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setScrollProgress((window.scrollY / total) * 100);
      const sections = ['hero', 'about', 'who-i-help', 'services', 'why-me', 'projects', 'process', 'consult', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) { setActiveSection(id); break; }
        }
      }
    };
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('mousemove', handleMouse); };
  }, []);

  // form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return alert('Please fill required fields.');
    setFormLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          subject: formData.subject || formData.budget || 'General Inquiry',
          message: `Budget: ${formData.budget || 'Not specified'}\n\n${formData.message}`,
        }),
      });
      if (res.ok) {
        setFormSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', budget: '', message: '' });
        setTimeout(() => setFormSuccess(false), 5000);
      } else { alert('Something went wrong. Please try again.'); }
    } catch { alert('Could not submit form. Please try WhatsApp instead.'); }
    finally { setFormLoading(false); }
  };

  const waNumber = (data.whatsapp || '').replace(/[^0-9]/g, '');
  const waFloatLink = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi Pallav! I'd like to get a free quote.")}`;

  if (loading) {
    return (
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: 'var(--bg-primary)', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', zIndex: 99999,
      }}>
        <div style={{
          width: '56px', height: '56px', border: '2px solid rgba(255,255,255,0.1)',
          borderTopColor: 'rgba(255,255,255,0.8)', borderRadius: '50%',
          animation: 'spin-slow 1s linear infinite',
        }} />
        <p style={{ marginTop: '28px', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
          Loading
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* NAVBAR */}
      <nav className="luxury-nav" style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '50px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}>
        <div className="nav-inner">
          <a href="#hero" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            PK<span style={{ color: 'var(--text-muted)' }}>.</span>
          </a>
          <ul className="nav-desktop-menu">
            {NAV_LINKS.map((sec) => {
              const id = sec.toLowerCase().replace(/\s/g, '-');
              const isActive = activeSection === id || (sec === 'Process' && activeSection === 'process');
              return (
                <li key={sec}>
                  <a href={`#${id}`} className="nav-link" style={{
                    fontSize: '0.88rem', fontWeight: 500, position: 'relative', paddingBottom: '4px',
                    color: isActive ? '#fff' : 'var(--text-secondary)', transition: 'color 0.3s',
                  }}>
                    {sec}
                  </a>
                </li>
              );
            })}
            <li>
              <a href="#contact" className="btn btn-primary" style={{ padding: '0.55rem 1.4rem', fontSize: '0.84rem' }}>
                Get Free Quote
              </a>
            </li>
          </ul>
          <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hamburger-btn" aria-label="Toggle menu" style={{ color: '#fff' }}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu-panel glass-card" style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          animation: 'fadeUp 0.4s ease-out',
        }}>
          {NAV_LINKS.map((sec) => (
            <a key={sec} href={`#${sec.toLowerCase().replace(/\s/g, '-')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-menu-link"
              style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-secondary)', padding: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
              {sec}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
            Get Free Quote
          </a>
        </div>
      )}

      {/* SECTIONS */}
      <HeroSection data={data} typedText={typedText} mousePos={mousePos} />
      <AboutSection data={data} />
      <WhoIHelpSection />

      {/* SKILLS */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="section-tag">Technical Skills</div>
            <h2 className="section-title">My Tech Stack</h2>
            <p className="section-desc">Tools and technologies I use to build full-stack applications from database to UI.</p>
          </motion.div>
          <div className="skills-grid">
            {data.skills.map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}>
                <div className="glass-card" style={{ padding: '1.85rem' }}>
                  <div className="portfolio-icon-box portfolio-icon-box--skill skill-icon">
                    <PortfolioIcon icon={cat.icon} title={cat.title} size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>{cat.title}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {cat.tags.map((tag) => (
                      <span key={tag} className="skill-tag" style={{
                        background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)', fontSize: '0.78rem', padding: '5px 12px',
                        borderRadius: 'var(--radius-full)', fontWeight: 500,
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection whatsapp={data.whatsapp} />
      <WhyMeSection />
      <ProjectsSection projects={data.projects} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* EXPERIENCE */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="section-tag">Experience</div>
            <h2 className="section-title">Professional Journey</h2>
            <p className="section-desc">Real production work, real impact.</p>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '780px', margin: '0 auto' }}>
            {data.experience.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.55 }}
                className={`experience-row ${i < data.experience.length - 1 ? 'experience-row--bordered' : ''}`}>
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.dates}</span>
                  <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 600, marginTop: '4px' }}>{item.company}</h4>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>{item.role}</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {item.details.map((d, di) => (
                      <li key={di} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', position: 'relative', paddingLeft: '1.4rem', lineHeight: '1.7' }}>
                        <span style={{ position: 'absolute', left: 0, top: '11px', width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.6)' }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HowWeWorkSection />
      <FreeConsultSection whatsapp={data.whatsapp} />

      {/* EDUCATION & CREDENTIALS */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="section-tag">Credentials</div>
            <h2 className="section-title">Education &amp; Certifications</h2>
          </motion.div>
          <div className="edu-grid-layout">
            <div className="glass-card">
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>GSFC University</span>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 600, margin: '0.5rem 0' }}>{data.educationDegree}</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '0.75rem 0' }}>
                {[data.educationYears, `CGPA: ${data.cgpa}`, 'Gujarat, India'].map((tag) => (
                  <span key={tag} style={{ fontSize: '0.73rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', padding: '2px 9px', borderRadius: '4px' }}>{tag}</span>
                ))}
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: '1.6' }}>
                <strong>Coursework:</strong> Data Structures · Algorithms · Web Development · DBMS · Software Engineering
              </p>
            </div>
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 600, borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={17} className="portfolio-icon" strokeWidth={1.75} /> Certifications
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.certifications.map((cert, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{cert.name}</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{cert.issuer}</div>
                    </div>
                    <span style={{ fontSize: '0.73rem', fontWeight: 600, padding: '2px 9px', borderRadius: '20px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)' }}>{cert.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-alt">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="section-tag">Social Proof</div>
            <h2 className="section-title">Feedback &amp; <em>Recommendations</em></h2>
            <p className="section-desc">Honest feedback from teammates, collaborators, and early users.</p>
          </motion.div>
          <div className="testimonials-grid">
            {data.testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.55 }}
                className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '240px' }}>
                <div>
                  <span style={{ fontSize: '2.8rem', fontFamily: 'var(--font-serif)', color: 'var(--border-medium)', lineHeight: 0.1, display: 'block', height: '10px' }}>"</span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: '1.75' }}>{t.quote}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600 }}>{t.avatarLetters}</div>
                  <div>
                    <div style={{ fontSize: '0.83rem', fontWeight: 600, color: '#fff' }}>{t.authorName}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t.authorRole}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="section-tag">Articles</div>
            <h2 className="section-title">Thoughts &amp; <em>Writing</em></h2>
            <p className="section-desc">Dev insights on performance, AI integrations, and building software as a student.</p>
          </motion.div>
          <div className="blogs-grid">
            {data.blogs.map((blog, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{blog.category}</span>
                  <h3 style={{ fontSize: '1.02rem', color: '#fff', fontWeight: 600, margin: '0.5rem 0 0.75rem', lineHeight: 1.4 }}>{blog.title}</h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{blog.excerpt}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.73rem', color: 'var(--text-muted)' }}>
                  <span>{blog.date} · {blog.readTime}</span>
                  <span style={{ color: '#fff', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' }}>Read <ArrowRight size={11} /></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="section-tag">Let's Connect</div>
            <h2 className="section-title">Let's Build Something <em>Together</em></h2>
          </motion.div>
          <div className="contact-grid-layout">
            <div>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', fontWeight: 600, marginBottom: '0.65rem' }}>Have an idea or project?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.75', marginBottom: '0.75rem' }}>
                Whether you need a business website, a custom system, or an AI integration — drop me a message and let's figure out the best solution.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '2.5rem' }}>
                ⏱ Usually replies within 12 hours
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {[
                  { Icon: Mail, label: 'Email', value: data.email, href: `mailto:${data.email}` },
                  { Icon: Phone, label: 'Call / WhatsApp', value: data.phone, href: `tel:${data.phone}` },
                  { Icon: MapPin, label: 'Location', value: data.location },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="portfolio-icon-box portfolio-icon-box--contact">
                      <Icon size={15} className="portfolio-icon" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</div>
                      {href ? (
                        <a href={href} style={{ fontSize: '0.9rem', color: '#fff' }}>{value}</a>
                      ) : (
                        <div style={{ fontSize: '0.9rem', color: '#fff' }}>{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Hi Pallav! I'd like to discuss a project.")}`}
                target="_blank" rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ marginTop: '2rem', gap: '8px', display: 'inline-flex' }}
              >
                <SiWhatsapp size={15} /> Chat on WhatsApp
              </a>
            </div>

            <div className="glass-card" style={{ position: 'relative' }}>
              {formSuccess ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '300px', textAlign: 'center' }}>
                  <CheckCircle size={48} style={{ color: '#fff', marginBottom: '1.25rem' }} />
                  <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 600, marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>I'll get back to you within 12 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-double-column">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input type="text" id="firstName" required placeholder="First name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" placeholder="Last name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" required placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Project Type</label>
                    <TopicSelect id="subject" value={formData.subject} onChange={(v) => setFormData({ ...formData, subject: v })} placeholder="What do you need?" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select id="budget" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}>
                      <option value="">Select budget</option>
                      <option>Under $100</option>
                      <option>$100 – $300</option>
                      <option>$300 – $500</option>
                      <option>$500+</option>
                      <option>Let's discuss</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" required rows={4} placeholder="Tell me about your project or idea..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>
                  <button type="submit" disabled={formLoading} className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', gap: '8px' }}>
                    {formLoading ? 'Sending...' : 'Send Message'} {!formLoading && <Send size={13} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#050505', borderTop: '1px solid var(--border-subtle)', padding: '3rem 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700 }}>{data.name}</div>
          <div style={{ fontSize: '0.83rem', color: 'var(--text-secondary)' }}>Full Stack Developer · Available for Freelance Projects</div>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.78rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={`mailto:${data.email}`} className="footer-link"><Mail size={13} className="portfolio-icon" strokeWidth={1.75} /> Email</a>
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="footer-link"><Github size={13} className="portfolio-icon" strokeWidth={1.75} /> GitHub</a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link"><Linkedin size={13} className="portfolio-icon" strokeWidth={1.75} /> LinkedIn</a>
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', width: '100%', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
            &copy; {new Date().getFullYear()} {data.name}. Built with MERN stack.
          </div>
        </div>
      </footer>

      {/* FLOATING WhatsApp CTA */}
      <a href={waFloatLink} target="_blank" rel="noopener noreferrer"
        className="whatsapp-float" title="Get Free Quote on WhatsApp">
        <SiWhatsapp aria-hidden />
      </a>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blink { from, to { border-color: transparent } 50% { border-color: var(--text-primary); } }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.1); } }
        .stat-card-luxury:hover { border-color: var(--border-medium) !important; transform: translateY(-4px); }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent); transition: width 0.4s ease; }
        .nav-link:hover::after { width: 100%; }
        @keyframes fadeDown { from { opacity: 0; transform: translate(-50%, -20px); } to { opacity: 1; transform: translate(-50%, 0); } }
        .luxury-nav { animation: fadeDown 0.8s ease-out; }
        .mobile-menu-link:hover { color: var(--text-primary) !important; background: rgba(255,255,255,0.04); border-radius: var(--radius-sm); }
      ` }} />
    </>
  );
};

export default Portfolio;
