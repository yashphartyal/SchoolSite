// src/components/Footer.js

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Quick Links */}
          <div className="w-1/3 md:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:underline">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:underline">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:underline">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/students" className="hover:underline">
                  Students
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address>
              <p className="mb-2">123 Springdale Rd</p>
              <p className="mb-2">Springdale, SD 56789</p>
              <p className="mb-2">Phone: +1 (123) 456-7890</p>
              <p className="mb-2">
                Email:{" "}
                <Link
                  href="mailto:info@springdale.edu"
                  className="hover:underline"
                >
                  info@springdale.edu
                </Link>
              </p>
            </address>
          </div>
          <div className="w-full md:w-auto">
            {/* Follow Us */}
            <div className="w-full mb-6">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" className="hover:underline">
                  Facebook
                </Link>
                <Link href="https://twitter.com" className="hover:underline">
                  Twitter
                </Link>
                <Link href="https://instagram.com" className="hover:underline">
                  Instagram
                </Link>
                <Link href="https://linkedin.com" className="hover:underline">
                  LinkedIn
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="w-fullmb-6">
              <h3 className="text-lg font-bold mb-4">Newsletter Signup</h3>
              <form action="#" method="post" className="flex  p-2  flex-col">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="mb-2 p-2 rounded border border-gray-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-8 border-t border-gray-300 pt-4">
          &copy; 2024 Springdale Public School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
