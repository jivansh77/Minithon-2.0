// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/videos/bg-video.mp4'; // Adjust the path as necessary
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <>
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Empower Your City</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Stay connected with city services and events.
          </p>
          <Link to="/services">
            <button className="mt-6 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-lg font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div>
      <Testimonials />
    </div>
    </>
  );
}

export default Home;