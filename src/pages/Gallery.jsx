import React, { useEffect, useState } from 'react';
import { FaImages, FaVideo } from 'react-icons/fa';
import sportsDay from "../assets/sports_day.jpg";
import scienceDay from "../assets/science_exhibition.jpg";
import culturalDay from "../assets/culturalDay.jpg";

const galleryItems = {
  photos: [
    {
      src: sportsDay,
      alt: "Students participating in various sports events.",
      title: "Sports Day"
    },
    {
      src: scienceDay,
      alt: "Students presenting their science projects.",
      title: "Science Exhibition"
    },
    {
      src: culturalDay,
      alt: "Students performing in the cultural fest.",
      title: "Cultural Fest"
    }
  ],
  videos: [
    {
      src: "path/to/school_tour.mp4",
      alt: "Virtual tour of Springdale Public School.",
      title: "School Tour"
    },
    {
      src: "path/to/annual_function.mp4",
      alt: "Highlights from the Annual Function 2023.",
      title: "Annual Function 2023"
    }
  ]
};

const Gallery = () => {
  const [filter, setFilter] = useState('photos');

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <main className="container mx-auto p-4">
      {/* Page Header Section */}
      <section className="my-12 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 border-b-2 pb-2 border-gray-300">Gallery</h2>
        <p className="text-lg leading-relaxed text-gray-600">Explore our gallery showcasing school events, activities, and infrastructure.</p>
      </section>

      {/* Filter Buttons */}
      <section className="text-center my-8">
        <button
          className={`px-4 py-2 mx-2 font-semibold rounded-lg transition-colors duration-300 ${filter === 'photos' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => handleFilterChange('photos')}
        >
          <FaImages className="inline-block mr-2" /> Photos
        </button>
        <button
          className={`px-4 py-2 mx-2 font-semibold rounded-lg transition-colors duration-300 ${filter === 'videos' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => handleFilterChange('videos')}
        >
          <FaVideo className="inline-block mr-2" /> Videos
        </button>
      </section>

      {/* Gallery Section */}
      <section className="my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems[filter].map((item, index) => (
          <div key={index} className="relative group">
            {filter === 'photos' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-500 transform group-hover:scale-105"
              />
            ) : (
              <video
                src={item.src}
                controls
                className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-500 transform group-hover:scale-105"
              >
                Your browser does not support the video tag.
              </video>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Gallery;
