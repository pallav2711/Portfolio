import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Portfolio from './pages/Portfolio.jsx';
import Admin from './pages/Admin.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <SpeedInsights />
    </Router>
  );
}

export default App;
