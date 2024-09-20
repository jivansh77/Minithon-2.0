// src/pages/ServiceDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const servicesData = [
  {
    id: '1',
    name: 'Water Supply',
    description: 'Detailed information about water supply services.',
    content: 'Here you can provide extensive details about the water supply service...',
    image: '/assets/images/water-supply.jpg',
  },
  // Add more services as needed
];

function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((service) => service.id === id);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700 dark:text-gray-300">{service.content}</p>
    </div>
  );
}

export default ServiceDetail;