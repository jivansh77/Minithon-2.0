// src/components/cards/EventCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={event.image} alt={event.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {event.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{event.date}</p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {event.description}
        </p>
        <Link to={`/events/${event.id}`}>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default EventCard;