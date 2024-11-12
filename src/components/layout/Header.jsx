import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to keep track of the active nav link and menu visibility
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle navigation click
  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu on link click
  };

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center px-4 py-4 shadow-lg bg-white relative z-20">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo.PNG" alt="Bake House Logo" className="h-18" />
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 text-gray-700" />
        </button>
      </div>

      {/* Navigation Links - Mobile & Desktop */}
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 z-10`}
      >
        <Link
          to="/"
          onClick={() => handleNavClick('Home')}
          className={`${
            activeLink === 'Home' ? 'text-[#E4B1F0]' : 'text-gray-700'
          } font-semibold py-2 md:py-0 md:mx-4 hover:text-[#E4B1F0]`}
        >
          Home
        </Link>
        <Link
          to="/shop"
          onClick={() => handleNavClick('Shop')}
          className={`${
            activeLink === 'Shop' ? 'text-[#E4B1F0]' : 'text-gray-700'
          } font-semibold py-2 md:py-0 md:mx-4 hover:text-[#E4B1F0]`}
        >
          Shop
        </Link>
        {/* <Link
          to="/recipes"
          onClick={() => handleNavClick('Recipes')}
          className={`${
            activeLink === 'Recipes' ? 'text-[#E4B1F0]' : 'text-gray-700'
          } font-semibold py-2 md:py-0 md:mx-4 hover:text-[#E4B1F0]`}
        >
          Recipes
        </Link> */}
        <Link
          to="/about-us"
          onClick={() => handleNavClick('About')}
          className={`${
            activeLink === 'About' ? 'text-[#E4B1F0]' : 'text-gray-700'
          } font-semibold py-2 md:py-0 md:mx-4 hover:text-[#E4B1F0]`}
        >
          About
        </Link>
        <Link
          to="/contact-us"
          onClick={() => handleNavClick('Contact Us')}
          className={`${
            activeLink === 'Contact Us' ? 'text-[#E4B1F0]' : 'text-gray-700'
          } font-semibold py-2 md:py-0 md:mx-4 hover:text-[#E4B1F0]`}
        >
          Contact Us
        </Link>
        <Link
          to="/account"
          onClick={() => handleNavClick('Account')}
          className={`${
            activeLink === 'Account' ? 'text-[#E4B1F0]' : 'text-gray-700'
          } font-semibold py-2 md:py-0 md:mx-4 hover:text-[#E4B1F0]`}
        >
          Account
        </Link>
      </nav>

      {/* Cart Section */}
      <div className="relative md:ml-4">
        <button className="relative">
          <FontAwesomeIcon icon={faShoppingCart} className="h-6 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
