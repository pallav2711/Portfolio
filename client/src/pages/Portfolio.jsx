import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, Mail, Phone, MapPin, ExternalLink, ArrowDown, 
  Send, CheckCircle, Menu, X, ArrowRight, Github, Linkedin
} from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import PortfolioIcon from '../components/PortfolioIcon';
import TopicSelect from '../components/TopicSelect';

const DEFAULT_PORTFOLIO_DATA = {
  name: 'Pallav Kanani',
  title: 'MERN Stack Developer',
  location: 'Gujarat, India',
  email: 'pallavkanani27@gmail.com',
  phone: '+91 6354678706',
  whatsapp: '+91 6354678706',
  github: 'https://github.com/pallav2711',
  linkedin: 'https://www.linkedin.com/in/pallav-kanani-306b8b28b',
  cgpa: '7.0 / 10',
  educationDegree: 'B.Tech CSE, GSFC University',
  educationYears: '2023 – 2027 (Expected)',
  status: 'Open to Opportunities',
  stats: {
    experience: '2+',
    projectsBuilt: '5+',
    fasterDelivery: '40%',
    apiSpeedBoost: '35%'
  },
  aboutQuote: 'I don\'t just write code — I architect solutions. Whether it\'s optimizing a slow MongoDB query or designing a multi-role access system, I think about the whole picture.',
  aboutParagraphs: [
    'I\'m a Computer Science student at GSFC University (graduating 2027) with hands-on production experience as a Full-Stack Developer at Foecht. I love building things that are fast, clean, and actually useful.',
    'My interest in AI led me to integrate OpenAI and Gemini APIs into real products — including Crackit AI, a SaaS platform now serving real users. I\'m equally comfortable leading a team sprint or diving deep into backend optimization.',
    'Outside of code, I\'m exploring cloud infrastructure, staying current with AI developments, and occasionally writing about what I learn.'
  ],
  skills: [
    { icon: 'mern', title: 'MERN Stack Core', tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Mongoose'] },
    { icon: 'frontend', title: 'Frontend', tags: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'] },
    { icon: 'backend', title: 'Backend & APIs', tags: ['RESTful APIs', 'JWT Auth', 'Middleware', 'Zod Validation', 'PostgreSQL'] },
    { icon: 'ai', title: 'AI Integration', tags: ['OpenAI API', 'Gemini API', 'AI/ML', 'Prompt Engineering'] },
    { icon: 'devops', title: 'DevOps & Tools', tags: ['Git & GitHub', 'Docker', 'Vercel', 'Postman', 'JIRA'] },
    { icon: 'qa', title: 'QA & Project Mgmt', tags: ['Agile / Scrum', 'API Testing', 'Code Review', 'Sprint Planning', 'RBAC Design'] }
  ],
  experience: [
    {
      role: 'Full-Stack Developer',
      company: 'Foecht',
      dates: '2025 – 2026',
      details: [
        'Developed 3+ production features using MERN stack, reducing feature delivery time by 40% through reusable, well-structured components',
        'Optimized MongoDB queries and indexes, improving API response time by 35% — identified N+1 patterns via Postman testing',
        'Built RESTful APIs with JWT authentication, Zod validation, and robust error handling',
        'Performed end-to-end testing across 3+ full-stack features and executed 50+ pull request reviews enforcing quality standards',
        'Coordinated delivery using Agile methodology, managing sprint planning and cross-team technical communication'
      ]
    },
    {
      role: 'B.Tech in Computer Science & Engineering',
      company: 'GSFC University, Gujarat',
      dates: '2023 – 2027',
      details: [
        'Pursuing Bachelor of Technology with CGPA 7.0, focusing on full-stack development alongside academic studies',
        'Coursework: Data Structures · Algorithms · Web Development · DBMS · Software Engineering'
      ]
    }
  ],
  projects: [
    {
      title: 'Crackit AI',
      category: 'fullstack',
      liveLink: 'https://crackiitai.vercel.app',
      stack: 'React.js · Node.js · MongoDB · OpenAI API',
      desc: [
        'Full-stack AI SaaS career platform with JWT auth, RESTful APIs, and responsive UI serving real users',
        'AI Resume Builder generates ATS-optimized resumes in under 30 seconds using OpenAI API',
        'Mock Interview system with real-time AI feedback; Mock Test platform with analytics dashboard',
        'Complete test coverage across 5 categories, validating data accuracy and edge cases'
      ]
    },
    {
      title: 'ProdFlow AI',
      category: 'fullstack',
      liveLink: 'https://prodflowaii.vercel.app',
      stack: 'React.js · Node.js · MongoDB · AI/ML',
      desc: [
        'Led 4-member team building an AI-powered sprint planning platform with real-time dashboards',
        'AI prediction engine analyzes sprint data to forecast outcomes and identify risks before they happen',
        'RBAC system with 4 user roles and granular permission management',
        'Full SDLC ownership from architecture design to production deployment using Agile methodology'
      ]
    }
  ],
  services: [
    { icon: 'fullstack', title: 'Full-Stack Web Development', desc: 'End-to-end MERN stack applications — from database schema to responsive UI — built for performance and scale.' },
    { icon: 'ai-integration', title: 'AI Feature Integration', desc: 'Integrate OpenAI, Gemini, and other AI APIs into your product. Chatbots, content generators, smart analytics — done right.' },
    { icon: 'api', title: 'API Design & Optimization', desc: 'RESTful API architecture with JWT auth, Zod validation, and query optimization to cut response times significantly.' },
    { icon: 'testing', title: 'QA & Testing', desc: 'Manual testing, API testing with Postman, integration testing, and detailed bug reports to keep your product solid.' },
    { icon: 'coordination', title: 'Technical Project Coordination', desc: 'Sprint planning, backlog management, team coordination, and Agile delivery for technical teams and founders.' },
    { icon: 'mvp', title: 'MVP Development', desc: 'Turn your idea into a working product fast. Architecture, build, testing, and deployment — from zero to launched.' }
  ],
  certifications: [
    { name: 'Cloud Computing', issuer: 'NPTEL, IIT Kharagpur', year: '2024' },
    { name: 'AI Fundamentals', issuer: 'Cisco Networking Academy', year: '2025' }
  ],
  testimonials: [
    { quote: 'Pallav is the kind of developer who doesn\'t just complete tasks — he improves the whole process. His code reviews alone saved us from several critical production bugs. Genuinely one of the most reliable engineers I\'ve worked with.', authorName: 'Team Member, Foecht', authorRole: 'Engineering Colleague · 2025–2026', avatarLetters: 'TM' },
    { quote: 'Leading the ProdFlow AI project with Pallav was a great experience. He understood both the technical architecture and the product vision, which made sprint planning feel effortless. The platform shipped ahead of schedule.', authorName: 'Project Collaborator', authorRole: 'ProdFlow AI Team · 2025', avatarLetters: 'PM' },
    { quote: 'I was impressed by how Pallav approached the Crackit AI product. He built a full AI SaaS from scratch while keeping the codebase clean and the API fast. That 35% performance improvement wasn\'t accidental — it came from genuine attention to detail.', authorName: 'Early User, Crackit AI', authorRole: 'Platform Feedback · 2025', avatarLetters: 'CR' }
  ],
  blogs: [
    { category: 'MERN Stack', title: 'How I Cut API Response Time by 35% with MongoDB Index Optimization', excerpt: 'A practical breakdown of how I identified N+1 query patterns using Postman and restructured indexes to dramatically improve performance in production.', date: 'May 2025', readTime: '5 min read' },
    { category: 'AI Integration', title: 'Building an ATS Resume Generator with OpenAI API in Under a Weekend', excerpt: 'The engineering story behind Crackit AI\'s resume builder — prompt design, streaming responses, and making it fast enough to feel instant.', date: 'July 2025', readTime: '7 min read' },
    { category: 'Project Management', title: 'Leading a Dev Team as a Student: What I Learned on ProdFlow AI', excerpt: 'Lessons from coordinating a 4-person team through a full SDLC — from architecture meetings to production bugs at 2 AM.', date: 'September 2025', readTime: '6 min read' }
  ]
};

const Portfolio = () => {
  const [data, setData] = useState(DEFAULT_PORTFOLIO_DATA);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // Cursor position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Typewriter Hook logic
  const [typedText, setTypedText] = useState('');
  const textArray = [
    'MERN Stack Development',
    'Full Stack Applications',
    'AI Integration (OpenAI & Gemini)',
    'RESTful API Development',
    'MongoDB Optimization',
    'React.js Applications'
  ];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let handle = setTimeout(() => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      if (isDeleting) {
        setTypedText(fullText.substring(0, typedText.length - 1));
        setTypingSpeed(40);
      } else {
        setTypedText(fullText.substring(0, typedText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && typedText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(1800); // Wait on full word
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    }, typingSpeed);

    return () => clearTimeout(handle);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  // Fetch portfolio data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/portfolio`);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        }
      } catch (err) {
        console.warn('Backend server not running or database error. Running in offline fallback mode.');
      } finally {
        // Mock a sleek loader delay
        setTimeout(() => setLoading(false), 900);
      }
    };
    fetchData();
  }, []);

  // Event Listeners for scrolling progress and cursor glow
  useEffect(() => {
    const handleScroll = () => {
      // Progress Bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Active Section highlight
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'services', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Form Submit Handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setFormLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setFormSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormSuccess(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Could not submit form. Please check if backend is running.');
    } finally {
      setFormLoading(false);
    }
  };

  const filteredProjects = activeTab === 'all' 
    ? data.projects 
    : data.projects.filter(p => p.category === activeTab);

  if (loading) {
    return (
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: 'var(--bg-primary)', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        zIndex: 99999
      }}>
        <div style={{
          width: '60px', 
          height: '60px', 
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderTopColor: 'rgba(255, 255, 255, 0.8)', 
          borderRadius: '50%',
          animation: 'spin-slow 1s linear infinite'
        }} className="animate-spin-slow" />
        <p style={{ 
          marginTop: '30px', 
          fontSize: '0.85rem', 
          color: 'var(--text-muted)', 
          letterSpacing: '0.2em', 
          textTransform: 'uppercase',
          fontWeight: 600
        }}>
          Loading Excellence
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Dynamic Cursor Glow */}
      <div 
        className="cursor-glow" 
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} 
      />

      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* NAVIGATION NAVBAR - Floating Glass */}
      <nav
        className="luxury-nav"
        style={{
          background: 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '50px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          transition: 'all 0.4s ease'
        }}
      >
        <div className="nav-inner">
          <a href="#hero" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            {data.name.split(' ').map(n => n[0]).join('')}<span style={{ color: 'var(--text-muted)' }}>.</span>
          </a>

          {/* Desktop Menu */}
          <ul className="nav-desktop-menu">
            {['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((sec) => {
              const secId = sec.toLowerCase();
              const isActive = activeSection === secId;
              return (
                <li key={sec}>
                  <a 
                    href={`#${secId}`}
                    style={{
                      fontSize: '0.9rem', fontWeight: 500,
                      color: isActive ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'color 0.3s', letterSpacing: '0.02em',
                      position: 'relative', paddingBottom: '4px'
                    }}
                    className="nav-link"
                  >
                    {sec}
                  </a>
                </li>
              );
            })}
            <li>
              <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
                Hire Me
              </a>
            </li>
          </ul>

          {/* Mobile hamburger icon */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hamburger-btn"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            style={{ color: '#ffffff' }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel - Luxury Glass */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-panel glass-card"
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: 'var(--shadow-glass)',
            animation: 'fadeUp 0.4s ease-out'
          }}
        >
          {['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((sec) => (
            <a 
              key={sec}
              href={`#${sec.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ 
                fontSize: '1.1rem', 
                fontWeight: 500, 
                color: 'var(--text-secondary)', 
                padding: '1rem',
                borderBottom: '1px solid var(--border-subtle)',
                transition: 'all var(--transition-fast)'
              }}
              className="mobile-menu-link"
            >
              {sec}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
            Hire Me
          </a>
        </div>
      )}

      {/* HERO SECTION - Luxury Cinematic - Optimized */}
      <section
        id="hero"
        className="section hero-section"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'
        }}
      >
        <div className="container hero-grid">
          <div className="hero-content fade-up">
            <h1 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', 
              lineHeight: 1.15, 
              fontWeight: 700, 
              marginBottom: '1.25rem', 
              letterSpacing: '-0.03em'
            }}>
              Crafting Premium<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #FFFFFF 0%, #B5B5B5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontStyle: 'italic',
                fontWeight: 500
              }}>Digital Experiences</span>
            </h1>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem', minHeight: '30px', fontWeight: 400 }}>
              Specializing in <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{typedText}</span>
              <span style={{ borderRight: '2px solid var(--text-primary)', animation: 'blink 0.8s step-end infinite', marginLeft: '2px' }}></span>
            </p>

            <p className="hero-intro" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', fontWeight: 400 }}>
              I'm <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{data.name}</strong> — a {data.title} based in {data.location}. I build fast, scalable full-stack applications and AI-powered products.
            </p>

            {/* Stats row - Compact Luxury Cards */}
            <div className="hero-stats">
              {[
                { value: data.stats.experience, label: 'Years' },
                { value: data.stats.projectsBuilt, label: 'Projects' }
              ].map((stat, idx) => (
                <div key={idx} style={{ 
                  padding: '1rem 1.5rem', 
                  background: 'var(--bg-glass)', 
                  border: '1px solid var(--border-subtle)', 
                  borderRadius: 'var(--radius-sm)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all var(--transition-smooth)',
                  boxShadow: 'var(--shadow-glass)',
                  minWidth: '100px'
                }} className="stat-card-luxury">
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '6px', letterSpacing: '0.08em', fontWeight: 600 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary btn-large" style={{ padding: '0.9rem 2rem' }}>
                View My Work <ArrowDown size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary btn-large" style={{ padding: '0.9rem 2rem' }}>
                Let's Talk <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Luxury Hero Image - Compact */}
          <div className="hero-visual-panel">
            <div className="hero-visual-safe">
            <div className="hero-profile-ring animate-float">
              {/* Outer rotating ring */}
              <div 
                className="animate-spin-slow" 
                style={{
                  position: 'absolute', inset: '-15px', borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.05)'
                }}
              />
              {/* Middle ring */}
              <div style={{
                position: 'absolute', inset: '-8px', borderRadius: '50%',
                border: '1px dashed rgba(255, 255, 255, 0.08)'
              }} />
              {/* Luxury glow */}
              <div style={{
                position: 'absolute', inset: '-25px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
                filter: 'blur(25px)'
              }} />
              {/* Profile container */}
              <div style={{
                width: '100%', height: '100%', borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'var(--shadow-luxury)', 
                position: 'relative', zIndex: 2,
                overflow: 'hidden',
                padding: '8px',
                backdropFilter: 'blur(10px)'
              }}>
                <img 
                  src="/assets/profile.jpg" 
                  alt={data.name}
                  width={320}
                  height={320}
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
                        <span style="font-family: var(--font-serif); font-size: 5rem; font-weight: 700; color: #fff; letter-spacing: -0.05em;">${data.name.split(' ').map(n => n[0]).join('')}</span>
                        <span style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-muted); margin-top: 6px; font-weight: 600;">MERN Stack Developer</span>
                      </div>
                    `;
                  }}
                />
              </div>
              {/* Decorative elements - smaller */}
              <div style={{
                position: 'absolute', top: '8%', right: '-12px',
                width: '12px', height: '12px', borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.8)', 
                boxShadow: '0 0 25px rgba(255, 255, 255, 0.5)',
                animation: 'float 4s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute', bottom: '12%', left: '-10px',
                width: '10px', height: '10px', borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.6)', 
                boxShadow: '0 0 18px rgba(255, 255, 255, 0.4)',
                animation: 'float 5s ease-in-out infinite reverse'
              }} />
            </div>
            
            {/* Status Badge - Below photo */}
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0.6rem 1.2rem',
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              marginTop: '1rem'
            }} className="status-badge">
              <span style={{ 
                display: 'inline-block', 
                width: '8px', 
                height: '8px', 
                backgroundColor: '#fff', 
                borderRadius: '50%',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)',
                animation: 'pulse 2s ease-in-out infinite',
                position: 'relative',
                zIndex: 2
              }}></span>
              <span style={{
                color: 'var(--text-primary)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                position: 'relative',
                zIndex: 2,
                whiteSpace: 'nowrap'
              }}>
                {data.status}
              </span>
              {/* Shimmer effect */}
              <span style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                animation: 'shimmer 3s infinite'
              }}></span>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="section section-alt">
        <div className="container">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">A Developer Who Thinks<br /><em>Beyond the Code</em></h2>
          
          <div className="about-grid-layout">
            <div>
              {data.aboutParagraphs.map((para, index) => (
                <p key={index} style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  {para}
                </p>
              ))}
              <div style={{
                background: 'var(--bg-glass)', 
                borderLeft: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '1.5rem 2rem', 
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                margin: '2.5rem 0', 
                fontStyle: 'italic', 
                color: 'var(--text-primary)', 
                fontSize: '1.05rem',
                boxShadow: 'var(--shadow-glass)',
                backdropFilter: 'blur(10px)',
                lineHeight: 1.8
              }}>
                "{data.aboutQuote}"
              </div>
            </div>

            <div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li className="about-info-row">
                  <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Name</span>
                  <span style={{ color: '#fff' }}>{data.name}</span>
                </li>
                <li className="about-info-row">
                  <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Location</span>
                  <span style={{ color: '#fff' }}>{data.location}</span>
                </li>
                <li className="about-info-row">
                  <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Education</span>
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>{data.educationDegree}</span>
                </li>
                <li className="about-info-row">
                  <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>CGPA</span>
                  <span style={{ color: '#fff' }}>{data.cgpa}</span>
                </li>
                <li className="about-info-row">
                  <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email</span>
                  <a href={`mailto:${data.email}`} style={{ color: '#fff', borderBottom: '1px solid var(--border-medium)', wordBreak: 'break-all' }}>{data.email}</a>
                </li>
                <li className="about-info-row about-info-row--last">
                  <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Social</span>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a href={data.github} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub profile">
                      <Github size={18} className="portfolio-icon" strokeWidth={1.75} />
                    </a>
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn profile">
                      <Linkedin size={18} className="portfolio-icon" strokeWidth={1.75} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-tag">Technical Skills</div>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-desc">A curated set of tools and technologies I use to build robust full-stack applications from database layer to user interface.</p>

          <div className="skills-grid">
            {data.skills.map((skillCat, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                <div className="portfolio-icon-box portfolio-icon-box--skill skill-icon">
                  <PortfolioIcon icon={skillCat.icon} title={skillCat.title} size={26} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>{skillCat.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skillCat.tags.map((tag) => (
                    <span 
                      key={tag}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)', 
                        fontSize: '0.8rem', 
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-full)',
                        transition: 'all var(--transition-fast)',
                        fontWeight: 500
                      }}
                      className="skill-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <div className="section-tag">Experience</div>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-desc">Real production work, real impact.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            {data.experience.map((item, i) => (
              <div 
                key={i} 
                className={`experience-row ${i < data.experience.length - 1 ? 'experience-row--bordered' : ''}`}
              >
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.dates}</span>
                  <h4 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 600, marginTop: '4px' }}>{item.company}</h4>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>{item.role}</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', position: 'relative', paddingLeft: '1.5rem', lineHeight: '1.7' }}>
                        <span style={{ 
                          position: 'absolute', 
                          left: 0, 
                          top: '12px', 
                          width: '6px', 
                          height: '6px', 
                          borderRadius: '50%', 
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
                          boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                        }}></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-tag">Featured Projects</div>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-desc">Production-grade applications used by real users, built with care from architecture to deployment.</p>

          {/* Project Filters - Luxury Style */}
          <div className="filter-bar">
            <button 
              onClick={() => setActiveTab('all')} 
              style={{
                padding: '0.75rem 2rem', 
                fontSize: '0.9rem', 
                borderRadius: 'var(--radius-full)',
                border: activeTab === 'all' ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid var(--border-subtle)',
                background: activeTab === 'all' ? 'rgba(255, 255, 255, 0.08)' : 'var(--bg-glass)',
                color: activeTab === 'all' ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                backdropFilter: 'blur(10px)',
                transition: 'all var(--transition-smooth)',
                cursor: 'pointer'
              }}
              className="filter-btn"
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveTab('fullstack')} 
              style={{
                padding: '0.75rem 2rem', 
                fontSize: '0.9rem', 
                borderRadius: 'var(--radius-full)',
                border: activeTab === 'fullstack' ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid var(--border-subtle)',
                background: activeTab === 'fullstack' ? 'rgba(255, 255, 255, 0.08)' : 'var(--bg-glass)',
                color: activeTab === 'fullstack' ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                backdropFilter: 'blur(10px)',
                transition: 'all var(--transition-smooth)',
                cursor: 'pointer'
              }}
              className="filter-btn"
            >
              Full Stack
            </button>
          </div>

          {/* Projects Grid - Luxury Cards */}
          <div className="projects-grid">
            {filteredProjects.map((project, i) => (
              <div key={i} className="glass-card project-card">
                <div className="project-card-header">
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>{project.title}</h3>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary" 
                    style={{ 
                      padding: '0.5rem 1rem', 
                      fontSize: '0.8rem', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '6px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Live <ExternalLink size={12} />
                  </a>
                </div>
                <div style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--text-muted)', 
                  fontStyle: 'italic', 
                  marginBottom: '2rem',
                  fontWeight: 500
                }}>
                  {project.stack}
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
                  {project.desc.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ 
                      fontSize: '0.95rem', 
                      color: 'var(--text-secondary)', 
                      position: 'relative', 
                      paddingLeft: '1.5rem', 
                      lineHeight: '1.7' 
                    }}>
                      <span style={{ 
                        position: 'absolute', 
                        left: 0, 
                        top: '10px', 
                        width: '5px', 
                        height: '5px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3))'
                      }}></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section section-alt">
        <div className="container">
          <div className="section-tag">Services</div>
          <h2 className="section-title">What I Can Do For You</h2>
          <p className="section-desc">Whether you need a full product built or a specific performance optimization solved, here's how I can help.</p>

          <div className="services-grid">
            {data.services.map((srv, i) => (
              <div key={i} className="glass-card" style={{ padding: '1.75rem 1.5rem' }}>
                <div className="portfolio-icon-box portfolio-icon-box--service">
                  <PortfolioIcon icon={srv.icon} title={srv.title} size={22} />
                </div>
                <h3 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 600, marginBottom: '0.75rem' }}>{srv.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION & CREDENTIALS SECTION */}
      <section className="section">
        <div className="container">
          <div className="section-tag">Credentials</div>
          <h2 className="section-title">Education &amp; Certifications</h2>
          
          <div className="edu-grid-layout">
            <div className="glass-card">
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>GSFC University</span>
              <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600, margin: '0.5rem 0' }}>{data.educationDegree}</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '0.75rem 0' }}>
                <span style={{ fontSize: '0.75rem', backgroundColor: 'var(--bg-badge)', border: '1px solid var(--border-light)', padding: '2px 8px', borderRadius: '4px' }}>{data.educationYears}</span>
                <span style={{ fontSize: '0.75rem', backgroundColor: 'var(--bg-badge)', border: '1px solid var(--border-light)', padding: '2px 8px', borderRadius: '4px' }}>CGPA: {data.cgpa}</span>
                <span style={{ fontSize: '0.75rem', backgroundColor: 'var(--bg-badge)', border: '1px solid var(--border-light)', padding: '2px 8px', borderRadius: '4px' }}>Gujarat, India</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: '1.6' }}>
                <strong>Coursework:</strong> Data Structures · Algorithms · Web Development · Database Management Systems (DBMS) · Software Engineering
              </p>
            </div>

            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 600, borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={18} className="portfolio-icon" strokeWidth={1.75} /> Certifications
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.certifications.map((cert, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#fff' }}>{cert.name}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{cert.issuer}</div>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '2px 10px', borderRadius: '20px', backgroundColor: 'var(--bg-badge)', border: '1px solid var(--border-light)' }}>
                      {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-tag">Social Proof</div>
          <h2 className="section-title">What People Say</h2>
          <p className="section-desc">Feedback from teammates and collaborators I've worked with in production environments.</p>

          <div className="testimonials-grid">
            {data.testimonials.map((test, i) => (
              <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '260px' }}>
                <div>
                  <span style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: 'var(--border-medium)', lineHeight: 0.1, display: 'block', height: '10px' }}>“</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: '1.75' }}>
                    {test.quote}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--bg-badge)', border: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem', fontWeight: 600 }}>
                    {test.avatarLetters}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{test.authorName}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{test.authorRole}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG ARTICLES SECTION */}
      <section className="section">
        <div className="container">
          <div className="section-tag">Articles</div>
          <h2 className="section-title">Thoughts &amp; Writing</h2>
          <p className="section-desc">Developer insights on performance optimizations, AI integrations, and full SDLC execution.</p>

          <div className="blogs-grid">
            {data.blogs.map((blog, i) => (
              <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{blog.category}</span>
                  <h3 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 600, margin: '0.5rem 0 0.75rem 0', lineHeight: 1.4 }}>{blog.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{blog.excerpt}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span>{blog.date} · {blog.readTime}</span>
                  <span style={{ color: '#fff', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <div className="section-tag">Let's Connect</div>
          <h2 className="section-title">Let's Build Something Together</h2>
          
          <div className="contact-grid-layout">
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 600, marginBottom: '0.75rem' }}>Open to Opportunities</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                Whether you have a freelance project, a job opportunity, or just want to brainstorm tech — feel free to drop a message. I typically respond within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="portfolio-icon-box portfolio-icon-box--contact">
                    <Mail size={16} className="portfolio-icon" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email</div>
                    <a href={`mailto:${data.email}`} style={{ fontSize: '0.9rem', color: '#fff' }}>{data.email}</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="portfolio-icon-box portfolio-icon-box--contact">
                    <Phone size={16} className="portfolio-icon" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Call / WhatsApp</div>
                    <a href={`tel:${data.phone}`} style={{ fontSize: '0.9rem', color: '#fff' }}>{data.phone}</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="portfolio-icon-box portfolio-icon-box--contact">
                    <MapPin size={16} className="portfolio-icon" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Location</div>
                    <div style={{ fontSize: '0.9rem', color: '#fff' }}>{data.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ position: 'relative' }}>
              {formSuccess ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '300px', textAlign: 'center' }}>
                  <CheckCircle size={50} style={{ color: '#fff', marginBottom: '1.25rem' }} />
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600, marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Thank you. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-double-column">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input 
                        type="text" id="firstName" required placeholder="First name"
                        value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input 
                        type="text" id="lastName" placeholder="Last name"
                        value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input 
                      type="email" id="email" required placeholder="name@domain.com"
                      value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <TopicSelect
                      id="subject"
                      value={formData.subject}
                      onChange={(subject) => setFormData({ ...formData, subject })}
                      placeholder="Select a topic"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" required rows="4" placeholder="Tell me about your project or role..."
                      value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" disabled={formLoading} className="btn btn-primary" style={{ width: '100%', marginTop: '0.75rem', gap: '8px' }}>
                    {formLoading ? 'Sending...' : 'Send Message'} <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#050505', borderTop: '1px solid var(--border-light)', padding: '3.5rem 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700 }}>
            {data.name}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            {data.title} · Remote-friendly Full-Stack Engineer
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={`mailto:${data.email}`} className="footer-link">
              <Mail size={14} className="portfolio-icon" strokeWidth={1.75} /> Email
            </a>
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="footer-link">
              <Github size={14} className="portfolio-icon" strokeWidth={1.75} /> GitHub
            </a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
              <Linkedin size={14} className="portfolio-icon" strokeWidth={1.75} /> LinkedIn
            </a>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-light)', width: '100%', paddingTop: '1.5rem', marginTop: '1rem' }}>
            &copy; {new Date().getFullYear()} {data.name}. Built with care using the MERN stack.
          </div>
        </div>
      </footer>

      {/* Luxury WhatsApp Floating Button */}
      <a 
        href={`https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat on WhatsApp"
      >
        <SiWhatsapp aria-hidden />
      </a>

      {/* Embedded styles for custom items */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: var(--text-primary); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        .stat-card-luxury:hover {
          border-color: var(--border-medium) !important;
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6) !important;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          transition: width 0.4s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .luxury-nav {
          animation: fadeDown 0.8s ease-out;
        }
        
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        .mobile-menu-link:hover {
          color: var(--text-primary) !important;
          background: rgba(255, 255, 255, 0.04);
          border-radius: var(--radius-sm);
        }
      `}} />
    </>
  );
};

export default Portfolio;
