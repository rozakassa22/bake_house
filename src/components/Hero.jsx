import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getscrollanimation";

const Hero = () => {
  // Initialize scroll animation
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <section className="relative bg-[#FFE3E3] pb-32 min-h-[600px] flex items-end">
      {/* Text and Button Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={scrollAnimation}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h1 className="text-5xl font-black font-script text-gray-800 mb-4" >
            Cakes And Desserts That You <br /> Can't Resist
          </h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0 font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-[#E4B1F0] text-white px-6 py-2 rounded-full text-lg shadow-md hover:bg-pink-600 transition duration-300">
            Buy Now
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end relative z-20"
          variants={scrollAnimation}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <img
            src="/cake.png"
            alt="Cupcakes and Desserts"
            className="h-60 md:h-auto -mb-20 lg:-mb-20 relative z-20"
          />
        </motion.div>
      </div>

      {/* Zigzag SVG Background */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L60,180C120,200,240,240,360,230C480,220,600,160,720,150C840,140,960,180,1080,160C1200,140,1320,80,1380,50L1440,20L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
