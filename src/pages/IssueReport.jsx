// src/pages/IssueReport.jsx

import React, { useState } from 'react';

function IssueReport() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    category: '',
    image: null,
  });
  const [successMessage, setSuccessMessage] = useState('');

  const categories = [
    'Roads and Transportation',
    'Public Safety',
    'Utilities',
    'Parks and Recreation',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    console.log('Issue reported:', formData);

    // Reset form and show success message
    setFormData({
      title: '',
      description: '',
      location: '',
      category: '',
      image: null,
    });
    setSuccessMessage('Your issue has been reported successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Report an Issue</h2>

      {successMessage && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Issue Title */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200">Issue Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter address or description"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200">
            Upload an Image (optional)
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Submit Issue
        </button>
      </form>
    </div>
  );
}

export default IssueReport;