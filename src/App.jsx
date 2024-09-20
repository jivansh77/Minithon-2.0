// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Alert from './components/Alert.jsx';

// Pages
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import IssueReport from './pages/IssueReport.jsx';
import IssueStatus from './pages/IssueStatus.jsx';
import Feedback from './pages/Feedback.jsx';
import Events from './pages/Events.jsx';
import EventDetail from './pages/EventDetail.jsx';
import Projects from './pages/Projects.jsx';
import NewsPage from './pages/NewsPage.jsx'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Emergency Alert */}
        <Alert />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/report-issue" element={<IssueReport />} />
            <Route path="/issue-status" element={<IssueStatus />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;