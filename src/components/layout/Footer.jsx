import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faWhatsapp,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#F4F6FF] py-10">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Company Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src="/logo.PNG" alt="Bake House Logo" className="h-18" />
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </p>
          <div className="space-y-2">
            <p className="flex items-center text-gray-700">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[#E4B1F0] mr-2"
              />
              hello@example.com
            </p>
            <p className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faPhone} className="text-[#E4B1F0] mr-2" />
              123 456 7890
            </p>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-black font-semibold mb-4">COMPANY</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#" className="hover:text-[#E4B1F0]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#E4B1F0]">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#E4B1F0]">
                Recipes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#E4B1F0]">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4 text-gray-600">
            <a href="#" className="hover:text-[#E4B1F0]">
              <FontAwesomeIcon icon={faInstagram} className="h-5" />
            </a>
            <a href="#" className="hover:text-[#E4B1F0]">
              <FontAwesomeIcon icon={faYoutube} className="h-5" />
            </a>
            <a href="#" className="hover:text-[#E4B1F0]">
              <FontAwesomeIcon icon={faWhatsapp} className="h-5" />
            </a>
            <a href="#" className="hover:text-[#E4B1F0]">
              <FontAwesomeIcon icon={faTwitter} className="h-5" />
            </a>
            <a href="#" className="hover:text-[#E4B1F0]">
              <FontAwesomeIcon icon={faFacebookF} className="h-5" />
            </a>
          </div>
        </div>

        {/* Information Links */}
        <div>
          <h2 className="text-black font-semibold mb-4">INFORMATION</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#" className="hover:text-[#E4B1F0]">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#E4B1F0]">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#E4B1F0]">
                FAQ’s
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#E4B1F0]">
                Terms Of Use
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="text-black font-semibold mb-4">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consetetur
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E4B1F0]"
            />
            <button className="bg-[#E4B1F0] text-white px-6 py-2 rounded-full text-lg shadow-md hover:bg-pink-600 transition duration-300 w-fit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
