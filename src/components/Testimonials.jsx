// src/components/home/Testimonials.jsx

import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Alice Johnson',
    title: 'Community Leader',
    image: '/assets/images/testimonial1.jpg',
    quote: 'This platform has revolutionized how I engage with my city.',
  },
  {
    id: 2,
    name: 'Mark Thompson',
    title: 'Local Business Owner',
    image: '/assets/images/testimonial2.jpg',
    quote: 'An indispensable tool for staying informed about city projects.',
  },
  {
    id: 3,
    name: 'Sophia Martinez',
    title: 'Teacher',
    image: '/assets/images/testimonial3.jpg',
    quote: 'I love how easy it is to report issues and see them resolved.',
  },
  // Add more testimonials as needed
];

function Testimonials() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;