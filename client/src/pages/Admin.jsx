import React, { useState, useEffect } from 'react';
import { Mail, Calendar, MessageSquare, ArrowLeft, LogOut, Lock, Key, ShieldAlert } from 'lucide-react';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Check session storage on mount
  useEffect(() => {
    const savedPassword = sessionStorage.getItem('adminPassword');
    if (savedPassword) {
      setPassword(savedPassword);
      verifyAndLoad(savedPassword);
    }
  }, []);

  const verifyAndLoad = async (passToVerify) => {
    setLoading(true);
    setLoginError('');
    try {
      const loginRes = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passToVerify })
      });

      if (loginRes.ok) {
        // Authenticated! Now fetch messages
        const msgRes = await fetch('/api/contacts', {
          headers: { 'x-admin-password': passToVerify }
        });

        if (msgRes.ok) {
          const data = await msgRes.json();
          setMessages(data);
          setIsAuthenticated(true);
          sessionStorage.setItem('adminPassword', passToVerify);
        } else {
          setLoginError('Authentication succeeded, but failed to fetch messages.');
        }
      } else {
        const errJson = await loginRes.json();
        setLoginError(errJson.error || 'Invalid password.');
        sessionStorage.removeItem('adminPassword');
      }
    } catch (err) {
      setLoginError('Could not connect to backend server. Make sure it is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!password) return;
    verifyAndLoad(password);
  };

  const handleLogOut = () => {
    sessionStorage.removeItem('adminPassword');
    setIsAuthenticated(false);
    setPassword('');
    setMessages([]);
  };

  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: '100vh', backgroundColor: '#050505', display: 'flex',
        alignItems: 'center', justifyContent: 'center', padding: '1.5rem'
      }}>
        <div className="glass-card" style={{ maxWidth: '400px', width: '100%', padding: '2.5rem 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{
              width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--bg-badge)',
              border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Lock size={20} style={{ color: '#fff' }} />
            </div>
          </div>

          <h2 style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
            Admin Dashboard
          </h2>
          <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Enter your admin password to view contact submissions.
          </p>

          <form onSubmit={handleLoginSubmit}>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="adminPassword" style={{ fontSize: '0.72rem' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="password" id="adminPassword" required placeholder="••••••••"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  style={{ paddingLeft: '2.5rem' }}
                />
                <Key size={14} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              </div>
            </div>

            {loginError && (
              <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '6px', padding: '0.75rem', fontSize: '0.8rem', color: '#f87171',
                marginBottom: '1.5rem', display: 'flex', gap: '8px', alignItems: 'center'
              }}>
                <ShieldAlert size={14} style={{ flexShrink: 0 }} />
                <span>{loginError}</span>
              </div>
            )}

            <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', gap: '8px' }}>
              {loading ? 'Verifying...' : 'Access Dashboard'}
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <ArrowLeft size={12} /> Back to Portfolio
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#050505', color: '#fff' }}>
      {/* Header */}
      <header style={{
        borderBottom: '1px solid var(--border-light)', backgroundColor: 'var(--bg-secondary)',
        padding: '1.25rem 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h1 style={{ fontSize: '1.15rem', fontWeight: 600 }}>PK Admin Logs</h1>
            <span style={{ fontSize: '0.72rem', backgroundColor: 'var(--bg-badge)', border: '1px solid var(--border-medium)', padding: '2px 8px', borderRadius: '4px', color: 'var(--text-secondary)' }}>
              Live Connected
            </span>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a href="/" className="btn btn-secondary" style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', borderRadius: '4px', gap: '6px' }}>
              <ArrowLeft size={12} /> View Page
            </a>
            <button onClick={handleLogOut} className="btn btn-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', borderRadius: '4px', gap: '6px' }}>
              <LogOut size={12} /> Log Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>Inbound Inquiries</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '2px' }}>
                Review requests from prospective clients and recruiters.
              </p>
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Total Submissions: <strong style={{ color: '#fff' }}>{messages.length}</strong>
            </div>
          </div>

          {messages.length === 0 ? (
            <div className="glass-card" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              padding: '4rem 2rem', textAlign: 'center', borderStyle: 'dashed'
            }}>
              <MessageSquare size={36} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>No Messages Yet</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '4px' }}>
                Submissions from the contact form will show up here.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {messages.map((msg, i) => (
                <div key={i} className="glass-card" style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>{msg.name}</h3>
                      <div style={{ display: 'flex', gap: '1rem', marginTop: '4px', flexWrap: 'wrap' }}>
                        <a href={`mailto:${msg.email}`} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <Mail size={12} /> {msg.email}
                        </a>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <Calendar size={12} /> {new Date(msg.createdAt).toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '2px 8px', borderRadius: '4px', backgroundColor: 'var(--bg-badge)', border: '1px solid var(--border-light)' }}>
                        {msg.subject}
                      </span>
                      {msg.budget && msg.budget !== 'Not specified' && (
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Budget: {msg.budget}
                        </span>
                      )}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
