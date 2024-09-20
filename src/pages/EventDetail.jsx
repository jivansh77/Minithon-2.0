// src/pages/EventDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const mockEvents = [
  {
    id: '1',
    name: 'Community Cleanup',
    date: '2023-10-05',
    category: 'Community',
    description: 'Join us for a neighborhood cleanup event.',
    details:
      'We will meet at the central park at 9 AM. Gloves and trash bags will be provided. Please wear comfortable clothing.',
    image: '/assets/images/cleanup.jpg',
  },
  // Add more mock events as needed
];

function EventDetail() {
  const { id } = useParams();
  const event = mockEvents.find((event) => event.id === id);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold">Event Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h2 className="text-3xl font-bold mb-2">{event.name}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{event.date}</p>
      <p className="text-gray-700 dark:text-gray-300">{event.details}</p>

      {/* Registration Button */}
      <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Register for Event
      </button>
    </div>
  );
}

export default EventDetail;