import React, { useEffect } from 'react';
import { FaFileDownload, FaCalendarAlt, FaSchool, FaInfoCircle } from 'react-icons/fa';

const Admissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <main className="container mx-auto p-4">
      {/* Page Header Section */}
      <section aria-labelledby="admissions-header" className="my-12 text-center">
        <h2 id="admissions-header" className="text-4xl font-bold mb-2 text-gray-800 border-b-2 pb-2 border-gray-300 animate-fade-in">
          Admissions
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 mb-6">
          Welcome to the admissions section. Here you can find all the information you need to join our institution.
        </p>
      </section>

      {/* Admission Process Section */}
      <section aria-labelledby="admission-process-section" className="my-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        <h3 id="admission-process-section" className="text-3xl font-semibold mb-6 text-center text-gray-700 animate-slide-in flex items-center justify-center">
          <FaInfoCircle className="text-4xl text-blue-500 mr-2" />
          Admission Form
        </h3>
        <p className="text-lg leading-relaxed text-center mb-4 animate-fade-in">
          Admission forms are available for download. Submit the completed form along with required documents at the school office. Please ensure all details are filled out accurately.
        </p>
        <p className="text-lg leading-relaxed text-center animate-fade-in">
          Required documents include the student's birth certificate, previous academic records, and a recent passport-sized photograph.
        </p>
        <div className="text-center mt-6">
          <a
            href="path/to/admission-form.pdf"
            download
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 animate-bounce flex items-center justify-center"
            aria-label="Download Admission Form"
          >
            <FaFileDownload className="mr-2" />
            Download Admission Form
          </a>
        </div>
      </section>

      {/* Admission Criteria Section */}
      <section aria-labelledby="admission-criteria-section" className="my-12">
        <h3 id="admission-criteria-section" className="text-3xl font-semibold mb-6 text-center text-gray-700 animate-slide-in flex items-center justify-center">
          <FaSchool className="text-4xl text-green-500 mr-2" />
          Admission Criteria
        </h3>
        <p className="text-lg leading-relaxed text-center mb-4 animate-fade-in">
          Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades. Applicants must demonstrate a strong academic record and a keen interest in extracurricular activities.
        </p>
        <p className="text-lg leading-relaxed text-center animate-fade-in">
          For grades 1-5, admissions are primarily based on an interactive session with the child and parents. For grades 6-10, an entrance test and an interview are conducted. For grades 11-12, admission is based on performance in the entrance test and previous academic records.
        </p>
      </section>

      {/* Important Dates Section */}
      <section aria-labelledby="important-dates-section" className="my-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        <h3 id="important-dates-section" className="text-3xl font-semibold mb-6 text-center text-gray-700 animate-slide-in flex items-center justify-center">
          <FaCalendarAlt className="text-4xl text-orange-500 mr-2" />
          Important Dates
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in" role="article">
            <h4 className="text-xl font-semibold mb-4">Admission Form Availability</h4>
            <p className="text-lg">March 1st</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in" role="article">
            <h4 className="text-xl font-semibold mb-4">Last Date for Submission</h4>
            <p className="text-lg">March 31st</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in" role="article">
            <h4 className="text-xl font-semibold mb-4">Entrance Test</h4>
            <p className="text-lg">April 15th</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in" role="article">
            <h4 className="text-xl font-semibold mb-4">Announcement of Results</h4>
            <p className="text-lg">April 30th</p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section aria-labelledby="contact-information-section" className="my-12">
        <h3 id="contact-information-section" className="text-3xl font-semibold mb-6 text-center text-gray-700 animate-slide-in flex items-center justify-center">
          <FaInfoCircle className="text-4xl text-purple-500 mr-2" />
          Contact Information
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center p-6 rounded-lg shadow-md bg-gray-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in" role="article">
            <h4 className="text-xl font-semibold mb-4">School Office</h4>
            <p className="text-lg">1234 Elm Street</p>
            <p className="text-lg">Springfield, IL 62704</p>
            <p className="text-lg">Phone: (555) 123-4567</p>
            <p className="text-lg">Email: admissions@springdale.edu</p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-md bg-gray-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in" role="article">
            <h4 className="text-xl font-semibold mb-4">Office Hours</h4>
            <p className="text-lg">Monday - Friday: 8:00 AM - 4:00 PM</p>
            <p className="text-lg">Saturday: 9:00 AM - 1:00 PM</p>
            <p className="text-lg">Sunday: Closed</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admissions;
