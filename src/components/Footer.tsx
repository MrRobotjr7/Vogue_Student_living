import { Link } from 'react-router-dom';
import { Facebook, Instagram, Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold">Vogue Student Living</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Your Premier Student Accommodation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-500">About us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500">Services</Link>
              </li>
              <li>
                <Link to="/accommodations" className="text-gray-400 hover:text-amber-500">Accommodations</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-amber-500">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                911 Vanderbijlpark SE 7, South Africa
              </li>
              <li className="text-gray-400">
                voguestudentliving@gmail.com
              </li>
              <li className="text-gray-400">
                068 363 2163
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Vogue Student Living. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}