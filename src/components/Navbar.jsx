// src/components/common/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle.jsx';

function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
          Smart City Platform
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-800 dark:text-white hover:underline">
            Home
          </Link>
          <Link to="/services" className="text-gray-800 dark:text-white hover:underline">
            Services
          </Link>
          <Link to="/report-issue" className="text-gray-800 dark:text-white hover:underline">
            Report Issue
          </Link>
          <Link to="/events" className="text-gray-800 dark:text-white hover:underline">
            Events
          </Link>
          <Link to="/projects" className="text-gray-800 dark:text-white hover:underline">
            Projects
          </Link>
          <Link to="/feedback" className="text-gray-800 dark:text-white hover:underline">
            Feedback
          </Link>
          <Link to="/news" className="text-gray-800 dark:text-white hover:underline">
            News
          </Link>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <DarkModeToggle />

          {/* Language Switcher */}
          <div id="google_translate_element"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;