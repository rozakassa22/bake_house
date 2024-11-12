import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getscrollanimation"; // Adjust the import path as needed

const CustomizeSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-center text-gray-800 mb-12 text-6xl font-black font-script"
          variants={scrollAnimation}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          Customize Your Cakes
        </motion.h2>

        {/* Three Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <motion.div
            className="text-center"
            variants={scrollAnimation}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <img
              src="/assets/cake-icon.PNG"
              alt="Customize Your Design"
              className="w-42 h-32 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Customize Your Design
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonumy eirmod.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="text-center"
            variants={scrollAnimation}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <img
              src="/assets/order-icon.PNG"
              alt="Place Your Order"
              className="w-42 h-32 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Place Your Order
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonumy eirmod.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="text-center"
            variants={scrollAnimation}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <img
              src="/assets/delivery-icon.PNG"
              alt="Delivered In 3 Hours"
              className="w-42 h-32 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Delivered In 1 Day
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonumy eirmod.
            </p>
          </motion.div>
        </div>

        {/* Order Now Button */}
        <motion.div
          className="mt-12 text-center"
          variants={scrollAnimation}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <button className="bg-[#E4B1F0] text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300">
            Order Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomizeSection;
