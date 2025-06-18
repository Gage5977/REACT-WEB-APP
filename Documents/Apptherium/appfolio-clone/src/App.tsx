import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Bookings from './pages/Bookings';
import Guests from './pages/Guests';
import Calendar from './pages/Calendar';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="min-h-screen bg-white">
      {!isDashboard && <Header />}
      
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
