// src/components/news/NewsList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewsList() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch news articles
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us', // Adjust country code
            category: 'general', // Adjust category
            apiKey: import.meta.env.VITE_NEWS_API_KEY, // Updated here
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news articles.');
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Latest News</h2>
      {articles.length === 0 ? (
        <p>No news articles available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-white hover:underline"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {article.description}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsList;