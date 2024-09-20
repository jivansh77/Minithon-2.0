// src/pages/Projects.jsx

import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';

const mockProjects = [
  {
    id: 1,
    name: 'Downtown Revitalization',
    status: 'In Progress',
    progress: 65, // Percentage completion
    description: 'Upgrading infrastructure and public spaces downtown.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIYUTtSDTGwgBM0ydw7cREEO-049z2QOkpg&s',
  },
  {
    id: 2,
    name: 'New Community Center',
    status: 'Planning',
    progress: 20,
    description: 'Building a new center for community activities.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUUbR59STxUagl51LD30zIgMkOL75LWfi6A&s',
  },
  // Add more mock projects as needed
];

function Projects() {
  const [projects] = useState(mockProjects);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Ongoing City Projects</h2>

      {projects.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">No ongoing projects.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;