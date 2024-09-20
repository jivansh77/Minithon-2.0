// src/components/cards/ProjectCard.jsx

import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {project.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
        <div className="mt-4">
          <p className="text-gray-700 dark:text-gray-200">
            Status: <span className="font-semibold">{project.status}</span>
          </p>
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4 mt-2">
            <div
              className="bg-indigo-600 h-4 rounded-full"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            {project.progress}% Complete
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;