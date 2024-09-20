// src/components/cards/ServiceCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {service.name}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {service.description}
        </p>
        <Link to={`/services/${service.id}`}>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;