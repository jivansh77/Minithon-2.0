// src/components/common/Footer.jsx

import React from 'react';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-8">
      <div className="container mx-auto px-6 py-4 text-center text-gray-800 dark:text-white">
        <p>&copy; {new Date().getFullYear()} Smart City Platform. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;