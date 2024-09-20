// src/pages/Feedback.jsx

import React, { useState } from 'react';

const mockFeedbacks = [
  {
    id: 1,
    name: 'John Doe',
    rating: 4,
    comment: 'Great initiative on the new park!',
    date: '2023-09-30',
  },
  // Add more mock feedbacks as needed
];

function Feedback() {
  const [feedbacks, setFeedbacks] = useState(mockFeedbacks);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate adding feedback
    const newFeedback = {
      id: feedbacks.length + 1,
      ...formData,
      date: new Date().toISOString().split('T')[0],
    };
    setFeedbacks([newFeedback, ...feedbacks]);

    // Reset form and show success message
    setFormData({ name: '', rating: 5, comment: '' });
    setSuccessMessage('Thank you for your feedback!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Citizen Feedback</h2>

      {/* Feedback Form */}
      <div className="mb-8">
        {successMessage && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200">Rating</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            >
              {[5, 4, 3, 2, 1].map((rate) => (
                <option key={rate} value={rate}>
                  {rate} Star{rate > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Comment */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200">Comment</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Feedback List */}
      <h3 className="text-2xl font-bold mb-4">Recent Feedback</h3>
      <div className="space-y-4">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                {fb.name}
              </h4>
              <span className="text-yellow-500">
                {'★'.repeat(fb.rating)}
                {'☆'.repeat(5 - fb.rating)}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{fb.comment}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              {fb.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;