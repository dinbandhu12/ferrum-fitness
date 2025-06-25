import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fitness-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-2">
                <img
                  src="/logo-white-svg.svg"
                  alt="Ferrum"
                  className="w-full h-10"
                />
                {/* <span className="text-2xl font-extrabold text-fitness-black pl-1">Ferrum Fitness</span> */}
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Transform your body, elevate your mind, and join our community of
              fitness enthusiasts.
            </p>
            <div className="flex space-x-4">
              <Facebook
                size={20}
                className="hover:text-fitness-orange cursor-pointer transition-colors"
              />
              <Instagram
                size={20}
                className="hover:text-fitness-orange cursor-pointer transition-colors"
              />
              <Twitter
                size={20}
                className="hover:text-fitness-orange cursor-pointer transition-colors"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-fitness-orange transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-fitness-orange transition-colors"
                >
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-fitness-orange transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-fitness-orange transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-fitness-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-fitness-orange" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-fitness-orange" />
                <span className="text-gray-300">info@fitnessstudio.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-fitness-orange" />
                <span className="text-gray-300">
                  123 Fitness Street, Health City
                </span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Operating Hours</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>6AM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8AM - 8PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Ferrum Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="#"
                className="text-gray-400 hover:text-fitness-orange text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-fitness-orange text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
