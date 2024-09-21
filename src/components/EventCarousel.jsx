// src/components/carousels/EventCarousel.jsx

import React, { useEffect, useRef } from 'react';
import './EventCarousel.css'; // We'll create this CSS file next
import { Link } from 'react-router-dom';

function EventCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    // Implement automatic scrolling
    let scrollAmount = 0;
    const scrollMax = scrollElement.scrollWidth - scrollElement.clientWidth;

    const scrollInterval = setInterval(() => {
      scrollAmount += 1; // Adjust the scroll speed here

      if (scrollAmount >= scrollMax) {
        scrollAmount = 0; // Reset to start
      }

      scrollElement.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }, 20); // Adjust the interval time here

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  const events = [
    {
      id: 1,
      title: 'Hackathons',
      image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'Tata Mumbai Marathon',
      image: 'https://images.pexels.com/photos/20500973/pexels-photo-20500973/free-photo-of-photo-of-a-woman-running-a-marathon.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'Cricket',
      image: 'https://img.freepik.com/free-photo/portrait-person-playing-cricket-sport_23-2151702146.jpg',
    },
    {
      id: 4,
      title: 'Navratri',
      image: 'https://images.pexels.com/photos/5661065/pexels-photo-5661065.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      title: 'Ganesh Chaturthi',
      image: 'https://images.pexels.com/photos/28495472/pexels-photo-28495472/free-photo-of-majestic-ganesh-statue-in-mumbai-street-festival.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      title: 'Live Concerts',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 7,
      title: 'Bandra Fest',
      image: 'https://fastly.4sqi.net/img/general/600x600/9171187_cF4dQvkGUD0R7GUQSgDM_7S7mI4ngGgXXFA-T2icIP4.jpg',
    },
    // Add more events as needed
  ];

  return (
    <div className="carousel-container">
      <div className="scroll" ref={scrollRef}>
        {events.map((event) => (
          <div className="card" key={event.id}>
            <img src={event.image} alt={event.title} />
            <div className="userinfo">
              <div className="userD">
                <h4>{event.title}</h4>
                <ul className="tags">
                  <li className="tagLi">
                    <Link to={`/events/${event.id}`}>Explore</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCarousel;