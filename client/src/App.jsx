import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Portfolio from './pages/Portfolio.jsx';
import Admin from './pages/Admin.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
