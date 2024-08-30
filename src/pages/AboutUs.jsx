import React, { useEffect } from "react";
import {
  FaBuilding,
  FaBookOpen,
  FaPlayCircle,
  FaSchool,
} from "react-icons/fa";
import historyImg from "../assets/history.jpg";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <main className="container mx-auto p-4">
      {/* Page Header Section */}
      <section aria-labelledby="about-us-header" className="my-12 text-center">
        <h2 id="about-us-header" className="text-4xl font-bold mb-6 text-gray-800 border-b-2 pb-2 border-gray-300">
          About Us
        </h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Learn more about our school's rich history, vision, mission, and the state-of-the-art facilities that make Springdale Public School a premier educational institution.
        </p>
      </section>

      {/* History Section */}
      <section aria-labelledby="history-section" className="my-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h2 id="history-section" className="text-2xl font-bold mb-4">History</h2>
            <p className="text-lg leading-relaxed mb-4">
              Founded in 1985, Springdale Public School has a rich legacy of academic excellence and community involvement. From its humble beginnings as a small neighborhood school, Springdale has grown into a premier educational institution known for its innovative teaching methods and commitment to holistic development.
            </p>
            <p className="text-lg leading-relaxed">
              Over the years, the school has introduced various programs and initiatives to enhance the learning experience, including state-of-the-art facilities, extracurricular activities, and community outreach programs. Our dedicated faculty and staff work relentlessly to maintain our tradition of excellence and to continuously improve the quality of education we provide.
            </p>
          </div>
          <div className="md:col-span-1">
            <img 
              src={historyImg} 
              alt="History of Springdale Public School" 
              className="w-full h-auto object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105" 
              aria-describedby="history-img-description"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section aria-labelledby="vision-mission-section" className="my-12 bg-gray-100 p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:bg-gray-200">
        <div className="text-center mb-6">
          <h3 id="vision-mission-section" className="text-3xl font-bold mb-4">Vision & Mission</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Discover our vision for a future filled with academic excellence and our mission to empower students for lifelong success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 id="vision" className="text-2xl font-bold mb-4">Vision</h2>
            <p className="text-lg leading-relaxed">
              To create a learning environment that fosters academic excellence, critical thinking, and ethical values. We strive to be a beacon of educational innovation and integrity.
            </p>
          </div>
          <div>
            <h2 id="mission" className="text-2xl font-bold mb-4">Mission</h2>
            <p className="text-lg leading-relaxed">
              To empower students with the knowledge, skills, and values needed to thrive in a dynamic world. Our mission is to cultivate well-rounded individuals who are prepared for future challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section aria-labelledby="principals-message" className="my-12">
        <h3 id="principals-message" className="text-3xl font-bold mb-4 text-center">
          Principal's Message
        </h3>
        <p className="text-lg leading-relaxed text-center mb-6 text-gray-600">
          A message from our principal, highlighting our commitment to nurturing every student's potential.
        </p>
        <div className="text-center p-6 bg-blue-100 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
          <p className="text-lg leading-relaxed">
            "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future. Our dedicated team of educators and staff work tirelessly to create an environment where each child can thrive and reach their full potential."
          </p>
          <p className="mt-4 font-semibold">- John Doe</p>
        </div>
      </section>

      {/* Infrastructure and Facilities Section */}
      <section aria-labelledby="infrastructure-facilities" className="my-12">
        <h3 id="infrastructure-facilities" className="text-3xl font-bold mb-6 text-center">
          Infrastructure and Facilities
        </h3>
        <p className="text-lg leading-relaxed text-center mb-6 text-gray-600">
          Explore our world-class infrastructure and facilities designed to provide a comprehensive learning experience.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaBuilding className="text-6xl text-blue-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Science Labs</h4>
            <p className="text-sm">
              State-of-the-art science and computer labs for hands-on learning.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaSchool className="text-6xl text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Classrooms</h4>
            <p className="text-sm">
              Spacious and well-equipped classrooms for an optimal learning experience.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaBookOpen className="text-6xl text-red-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Library</h4>
            <p className="text-sm">
              A library with a vast collection of books and digital resources.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaPlayCircle className="text-6xl text-yellow-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Sports Facilities</h4>
            <p className="text-sm">
              Sports facilities including a playground, gymnasium, and swimming pool.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
