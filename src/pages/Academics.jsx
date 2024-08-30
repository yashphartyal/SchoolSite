import React, { useEffect } from 'react';
import { FaBook, FaChalkboardTeacher, FaLaptop, FaFileAlt } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <main className="container mx-auto p-4">
      {/* Page Header Section */}
      <section aria-labelledby="academics-header" className="my-12 text-center">
        <h2 id="academics-header" className="text-4xl font-bold mb-6 text-gray-800 border-b-2 pb-2 border-gray-300">
          Academics
        </h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Discover the comprehensive academic programs and resources that make our institution a hub of learning and growth.
        </p>
      </section>

      {/* Curriculum Section */}
      <section aria-labelledby="curriculum-section" className="my-12">
        <h3 id="curriculum-section" className="text-3xl font-semibold mb-6 text-center text-gray-700">Curriculum</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105" role="article">
            <FaBook className="text-4xl text-blue-500 mx-auto mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Primary (Grades 1-5)</h4>
            <ul className="list-disc list-inside text-lg">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
              <li>Art</li>
              <li>Physical Education</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105" role="article">
            <FaChalkboardTeacher className="text-4xl text-green-500 mx-auto mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Secondary (Grades 6-10)</h4>
            <ul className="list-disc list-inside text-lg">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Studies</li>
              <li>Computer Science</li>
              <li>Physical Education</li>
              <li>Art</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105" role="article">
            <MdSchool className="text-4xl text-red-500 mx-auto mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Senior Secondary (Grades 11-12)</h4>
            <div>
              <h5 className="text-xl font-semibold">Science Stream</h5>
              <ul className="list-disc list-inside text-lg mb-4">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>English</li>
              </ul>
              <h5 className="text-xl font-semibold">Commerce Stream</h5>
              <ul className="list-disc list-inside text-lg">
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodologies Section */}
      <section aria-labelledby="teaching-methodologies-section" className="my-12 bg-gray-100 p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:bg-gray-200">
        <div className="flex items-center justify-center">
          <FaChalkboardTeacher className="text-4xl text-purple-500 mr-4" />
          <div>
            <h3 id="teaching-methodologies-section" className="text-3xl font-semibold mb-4 text-gray-700">Teaching Methodologies</h3>
            <p className="text-lg leading-relaxed">
              We use a blend of traditional and modern teaching techniques to cater to different learning styles.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section aria-labelledby="educational-resources-section" className="my-12">
        <h3 id="educational-resources-section" className="text-3xl font-semibold mb-6 text-center text-gray-700">Educational Resources</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105" role="article">
            <FaLaptop className="text-6xl text-blue-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Digital Classrooms</h4>
            <p className="text-sm">Interactive and modern classrooms equipped with digital tools.</p>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105" role="article">
            <FaFileAlt className="text-6xl text-green-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Interactive Learning</h4>
            <p className="text-sm">Learning modules that engage students actively.</p>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105" role="article">
            <FaBook className="text-6xl text-red-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Online Platforms</h4>
            <p className="text-sm">Access to various online educational resources and platforms.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academics;
