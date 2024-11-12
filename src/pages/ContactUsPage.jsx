import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faWhatsapp, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 flex flex-col items-center">
      <h2 className="text-6xl font-black font-script text-center mb-8 text-gray-800">
        We'd Love To Hear From You
      </h2>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-16 w-full max-w-6xl">
        {/* Left Section: Contact Info */}
        <div className="space-y-8 p-4 text-gray-800 lg:w-1/2">
          <div>
            <h3 className="text-3xl font-black font-script mb-3">Contact Information</h3>
            <p className="flex items-center">
              <span className="mr-2">📧</span> hello@example.com
            </p>
            <p className="flex items-center">
              <span className="mr-2">📞</span> 123 456 7890
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-black font-script mb-3">Business Hours</h3>
            <p>Monday - Friday: 10am - 6pm</p>
            <p>Saturday - Sunday: 11am - 7pm</p>
          </div>
          <div>
            <h3 className="text-3xl font-black font-script mb-3">Address</h3>
            <p className="flex items-center">
              <span className="mr-2">📍</span> 123, Main street, Anytown ST 12345
            </p>
            <p className="flex items-center">
              <span className="mr-2">📍</span> 456, Main street, Anytown ST 12345
            </p>
          </div>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" aria-label="Instagram" className="text-2xl text-gray-700 hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="YouTube" className="text-2xl text-gray-700 hover:text-pink-500">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-2xl text-gray-700 hover:text-pink-500">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="#" aria-label="Twitter" className="text-2xl text-gray-700 hover:text-pink-500">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" aria-label="Facebook" className="text-2xl text-gray-700 hover:text-pink-500">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>

        {/* Right Section: Get In Touch Form */}
        <div className="bg-white border border-pink-200 rounded-lg shadow-lg p-8 mt-8 lg:mt-0 lg:w-1/2">
          <h3 className="text-3xl font-black font-script text-gray-800 mb-6 text-center">
            Get In Touch
          </h3>
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-pink-400"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone No <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-pink-400"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-pink-400"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600 focus:outline-none focus:bg-pink-600 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
