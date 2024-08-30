// src/components/Carousel.js

import React, { useState } from 'react';
import SportsDay from '../assets/sports_day.jpg';
import ScienceExhibition from '../assets/science_exhibition.jpg'; // Ensure this image is available

const slides = [
  {
    src: SportsDay,
    alt: 'Annual Sports Day',
    caption: 'Annual Sports Day - Celebrating Excellence in Sports',
  },
  {
    src: ScienceExhibition,
    alt: 'Science Exhibition',
    caption: 'Science Exhibition - Showcasing Student Innovations',
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[100vh] mx-auto overflow-hidden">
      <div
        className="relative flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <p className="absolute bottom-4 left-4 text-white text-sm md:text-lg font-semibold bg-black bg-opacity-60 p-2 rounded-lg">
              {slide.caption}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full"
      >
        &#9664;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full"
      >
        &#9654;
      </button>
    </div>
  );
}

export default Carousel;
