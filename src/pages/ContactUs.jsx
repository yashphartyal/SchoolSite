import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);

    return (
        <main className="container mx-auto p-4">
            {/* Page Header Section */}
            <section aria-labelledby="contact-us-header" className="my-12 text-center">
                <h2 id="contact-us-header" className="text-4xl font-bold mb-6 text-gray-800 border-b-2 pb-2 border-gray-300">Contact Us</h2>
                <p className="text-lg leading-relaxed text-gray-600">
                    We'd love to hear from you. Reach out to us using the information below or fill out the contact form.
                </p>
            </section>

            {/* Contact Information Section */}
            <section aria-labelledby="contact-info-section" className="my-12 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                    <h3 id="contact-info-section" className="text-2xl font-bold mb-4 text-gray-800">Get in Touch</h3>
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-blue-600 mr-4 text-2xl" />
                        <p className="text-lg">Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="text-blue-600 mr-4 text-2xl" />
                        <p className="text-lg">+1 (123) 456-7890</p>
                    </div>
                    <div className="flex items-center">
                        <FaEnvelope className="text-blue-600 mr-4 text-2xl" />
                        <p className="text-lg">info@springdale.edu</p>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Contact Form</h3>
                    <form action="#" method="POST" className="space-y-4" aria-labelledby="contact-form">
                        <div className="flex items-center mb-4">
                            <label htmlFor="name" className="sr-only">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                aria-required="true"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <label htmlFor="email" className="sr-only">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                aria-required="true"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <label htmlFor="message" className="sr-only">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                aria-required="true"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 flex items-center justify-center"
                            aria-label="Send Message"
                        >
                            <FaPaperPlane className="mr-2" />
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Google Maps Integration Section */}
            <section aria-labelledby="google-maps-section" className="my-12">
                <h3 id="google-maps-section" className="text-2xl font-bold mb-6 text-gray-800 text-center">Find Us Here</h3>
                <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.9732915789464!2d-97.73687018458365!3d30.28282808184274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644bf76e7c5eb57%3A0x41d49b4d030fb7b1!2s123%20Education%20Lane%2C%20Cityville%2C%20State%2C%20ZIP%20Code!5e0!3m2!1sen!2sus!4v1632782386842!5m2!1sen!2sus"
                        className="w-full h-72 border-0"
                        allowFullScreen
                        loading="lazy"
                        aria-label="Google Maps Location of Springdale Public School"
                    ></iframe>
                </div>
            </section>
        </main>
    );
};

export default ContactUs;
