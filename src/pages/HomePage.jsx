import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FAQSection from "../components/FAQSection";
import sportsDay from "../assets/sports_day.jpg";
import scienceDay from "../assets/science_exhibition.jpg";
import culturalDay from "../assets/culturalDay.jpg";
import springDale from "../assets/springDale.jpg";
import { FaBook, FaCalendarAlt, FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <main className="container mx-auto p-4">
      <section aria-labelledby="school-overview" className="my-12 text-center">
        <h2 id="school-overview" className="text-4xl font-bold mb-6 text-gray-800 border-b-2 pb-2 border-gray-300">
          School Overview
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 mb-6">
          Discover a place where education meets innovation, inspiring young minds for a brighter future.
        </p>
      </section>

      {/* Brief Info Section */}
      <section aria-labelledby="about-us" className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 id="about-us" className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
            <p className="text-lg text-gray-600 mb-4">
              At Springdale Public School, we are dedicated to providing a holistic education that fosters academic excellence and personal growth. Our vibrant community of students, teachers, and parents work together to create a nurturing environment where every child can thrive.
            </p>
            <p className="text-lg text-gray-600">
              Our school is committed to developing well-rounded individuals through a balanced approach that includes rigorous academics, extracurricular activities, and character-building programs. With state-of-the-art facilities and a passionate faculty, we ensure that our students are well-prepared for future challenges.
            </p>
          </div>
          <div>
            <img
              src={springDale}
              alt="Springdale Public School"
              className="w-full h-auto object-cover rounded-lg shadow-md"
              aria-describedby="about-us-description"
            />
          </div>
        </div>
      </section>

      {/* New Sections */}
      <section aria-labelledby="info-sections" className="my-12 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaSchool className="text-6xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
          <p className="text-lg text-gray-600">
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaBook className="text-6xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Curriculum</h3>
          <p className="text-lg text-gray-600">
            Offering a diverse and inclusive curriculum that encourages critical thinking and creativity.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaCalendarAlt className="text-6xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Events & Activities</h3>
          <p className="text-lg text-gray-600">
            Engaging students in a variety of activities that promote holistic development.
          </p>
        </div>
      </section>

      {/* Carousel/Banner Highlights Section */}
      <section aria-labelledby="key-events" className="mb-12">
        <h2 id="key-events" className="text-3xl font-bold mb-6 text-center text-gray-800">
          Key Events
        </h2>

        <Carousel
        useKeyboardArrows
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={2000} // Interval for each slide (milliseconds)
          transitionTime={500} // Transition time between slides (milliseconds)
          className="rounded-lg shadow-lg"
          aria-live="polite"
        >
          <div>
            <img
              src={sportsDay}
              alt="Annual Sports Day"
              className="md:h-[40rem] w-full object-fill"
              aria-labelledby="sports-day-description"
            />
            <p id="sports-day-description" className="legend text-white bg-black bg-opacity-50 p-2">
              Annual Sports Day - Celebrating Excellence in Sports
            </p>
          </div>
          <div>
            <img
              src={scienceDay}
              alt="Science Exhibition"
              className="md:h-[40rem]  w-full object-fill"
              aria-labelledby="science-exhibition-description"
            />
            <p id="science-exhibition-description" className="legend text-white bg-black bg-opacity-50 p-2">
              Science Exhibition - Showcasing Student Innovations
            </p>
          </div>
          <div>
            <img
              src={culturalDay}
              alt="Cultural Fest"
              className="md:h-[40rem] w-full object-fill"
              aria-labelledby="cultural-fest-description"
            />
            <p id="cultural-fest-description" className="legend text-white bg-black bg-opacity-50 p-2">
              Cultural Fest - Embracing Diversity and Creativity
            </p>
          </div>
        </Carousel>
      </section>

      {/* Admissions Section */}
      <section aria-labelledby="admissions-section" className="bg-blue-100 p-6 rounded-lg shadow-lg mb-12">
        <div className="text-center mb-6">
          <h2 id="admissions-section" className="text-4xl font-bold text-gray-800">
            Admissions Now Open!
          </h2>
        </div>
        <p className="text-lg text-center mb-4">
          We are excited to announce that admissions for the upcoming academic year are now open. Join us at Springdale Public School and be a part of our vibrant learning community.
        </p>
        <div className="text-center">
          <Link
            to="/admissions"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section aria-labelledby="faq-section">
        <h2 id="faq-section" className="text-3xl font-bold mb-6 text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <FAQSection />
      </section>
    </main>
  );
}

export default HomePage;
