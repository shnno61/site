import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Container for About, Contact, and Follow Us */}
        <div className="flex flex-col gap-6 mb-6 sm:flex-row sm:gap-8 lg:gap-12 lg:flex-row">
          {/* About Section */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 sm:mb-0 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
              We provide expert reviews and recommendations on the latest smart home devices to help you make informed decisions.
            </p>
          </div>

          {/* Contact Section */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 sm:mb-0 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm sm:text-base lg:text-lg">
              <li className="mb-2">
                <Link href="mailto:info@example.com" passHref>
                  <span className="text-gray-400 hover:underline transition-colors duration-300">info@example.com</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="tel:+1234567890" passHref>
                  <span className="text-gray-400 hover:underline transition-colors duration-300">+1 (234) 567-890</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <span className="text-gray-400 hover:underline transition-colors duration-300">Contact Form</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="w-full sm:w-full lg:w-1/3 mb-6 lg:mb-0 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center gap-4 lg:justify-center lg:gap-6">
              <Link href="https://facebook.com" passHref>
                <span className="text-gray-400 hover:text-white transition-colors duration-300 text-xl sm:text-2xl lg:text-3xl">
                  <FaFacebook />
                </span>
              </Link>
              <Link href="https://twitter.com" passHref>
                <span className="text-gray-400 hover:text-white transition-colors duration-300 text-xl sm:text-2xl lg:text-3xl">
                  <FaTwitter />
                </span>
              </Link>
              <Link href="https://instagram.com" passHref>
                <span className="text-gray-400 hover:text-white transition-colors duration-300 text-xl sm:text-2xl lg:text-3xl">
                  <FaInstagram />
                </span>
              </Link>
              <Link href="https://linkedin.com" passHref>
                <span className="text-gray-400 hover:text-white transition-colors duration-300 text-xl sm:text-2xl lg:text-3xl">
                  <FaLinkedin />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 py-4 text-center text-gray-400 text-sm sm:text-base lg:text-lg">
        <p>&copy; {new Date().getFullYear()} YourSiteName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
