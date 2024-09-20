// src/components/common/Alert.jsx

import React, { useState, useEffect } from 'react';
import { ExclamationIcon } from '@heroicons/react/solid';
import { motion, AnimatePresence } from 'framer-motion';

function Alert() {
  const [showAlert, setShowAlert] = useState(true);

  // Simulate fetching alert data
  const alertMessage = 'Severe weather warning in your area. Stay indoors and stay safe.';

  useEffect(() => {
    // Auto-dismiss after 10 seconds
    const timer = setTimeout(() => setShowAlert(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showAlert && (
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          className="bg-red-600 text-white px-4 py-2 flex items-center justify-between"
        >
          <div className="flex items-center">
            <ExclamationIcon className="h-6 w-6 mr-2" />
            <span>{alertMessage}</span>
          </div>
          <button onClick={() => setShowAlert(false)} className="text-white font-bold">
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Alert;