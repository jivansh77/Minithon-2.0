// src/pages/Services.jsx

import React from 'react';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
  {
    id: 1,
    name: 'Water Supply',
    description: 'Access water supply services and report issues.',
    image: 'https://img.freepik.com/premium-photo/water-running-down-pipe-with-words-water-supply-bottom_916191-377973.jpg',
  },
  {
    id: 2,
    name: 'Waste Management',
    description: 'Learn about waste collection schedules and recycling.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR78_U3hzLChR_Xrzw5Nx7r7knMO-GfO6BYfw&s',
  },
  {
    id: 3,
    name: 'Public Transportation',
    description: 'Get updates on routes and schedules.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpcKqIlFisJcsTZkPXNP1tftPhu27_7jifQ&s',
  },
  // Add more services as needed
];

function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">City Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;