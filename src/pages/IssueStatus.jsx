// src/pages/IssueStatus.jsx

import React, { useState } from 'react';

const mockIssues = [
  {
    id: 1,
    title: 'Pothole on Main Street',
    category: 'Roads and Transportation',
    status: 'In Progress',
    updatedAt: '2023-10-01',
  },
  {
    id: 2,
    title: 'Streetlight out on Elm Avenue',
    category: 'Utilities',
    status: 'Resolved',
    updatedAt: '2023-09-28',
  },
  // Add more mock issues as needed
];

function IssueStatus() {
  const [issues] = useState(mockIssues);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Issue Status</h2>
      {issues.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">No issues reported.</p>
      ) : (
        <div className="space-y-4">
          {issues.map((issue) => (
            <div
              key={issue.id}
              className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {issue.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Category: {issue.category}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Status:{' '}
                <span
                  className={`font-semibold ${
                    issue.status === 'Resolved'
                      ? 'text-green-600'
                      : 'text-yellow-600'
                  }`}
                >
                  {issue.status}
                </span>
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Last updated: {issue.updatedAt}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IssueStatus;