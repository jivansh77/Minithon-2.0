// src/pages/Events.jsx

import React, { useState } from 'react';
import EventCard from '../components/EventCard.jsx';

const mockEvents = [
  {
    id: 1,
    name: 'Community Cleanup',
    date: '2023-10-05',
    category: 'Community',
    description: 'Join us for a neighborhood cleanup event.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfgvxdCx0HAwL_qxxelNqOiIFrZkNFZ4RVA&s',
  },
  {
    id: 2,
    name: 'Art Festival',
    date: '2023-10-12',
    category: 'Cultural',
    description: 'Experience local art and music.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLQcVkJRjr3cs2yruAhgNT6Ep30Urr_9eMA&s',
  },
  // Add more mock events as needed
];

function Events() {
  const [events] = useState(mockEvents);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Community', 'Cultural', 'Educational', 'Sports'];

  const filteredEvents =
    selectedCategory === 'All'
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Community Events</h2>

      {/* Category Filters */}
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-200 mb-2">
          Filter by Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Events Listing */}
      {filteredEvents.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;