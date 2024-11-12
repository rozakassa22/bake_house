import React, { useMemo, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import getScrollAnimation from "../utils/getscrollanimation"; // Adjust the path as necessary
import ScrollAnimationWrapper from "./layout/ScrollAnimationWrapper"; // Adjust the path as necessary
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomSlider.css"; // Custom CSS for dots and arrows

// Custom arrow components
const CustomNextArrow = (props) => {
  const { className = "", style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-right`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-pink-500 hover:text-pink-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className = "", style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-left`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-pink-500 hover:text-pink-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const products = [
  {
    name: "Cinnamon Roll",
    salePrice: "$25.00",
    image: "/assets/cinnamon-roll.png",
    onSale: true,
  },
  {
    name: "Chicken Puff",
    salePrice: "$24.00",
    image: "/assets/chicken-puff.png",
    onSale: true,
  },
  {
    name: "Raspberry Patch",
    salePrice: "$14.00",
    image: "/assets/raspberry-patch.png",
    onSale: true,
  },
  {
    name: "Chocolate Croissant",
    salePrice: "$19.00",
    image: "/assets/chocolate-croissant.png",
    onSale: true,
  },
];

const ProductSlider = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : 4,
    slidesToScroll: 1,
    arrows: !isSmallScreen,
    customPaging: function (i) {
      return (
        <div className="custom-dot">
          <span className="dot"></span>
        </div>
      );
    },
    dotsClass: "slick-dots custom-dots", // Custom dots class
    nextArrow: !isSmallScreen ? <CustomNextArrow /> : null,
    prevArrow: !isSmallScreen ? <CustomPrevArrow /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
    ],
  };

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <ScrollAnimationWrapper>
        <motion.h2
          variants={scrollAnimation}
          className="text-6xl font-black font-script text-gray-800 mb-10"
        >
          Satisfy your Cravings
        </motion.h2>
      </ScrollAnimationWrapper>

      {isSmallScreen ? (
        // For small screens, render arrows outside the slider
        <div className="flex items-center justify-center">
          <CustomPrevArrow
            onClick={() => sliderRef.current.slickPrev()}
            className="custom-arrow-outside"
          />
          <div className="w-64 mx-4">
            <Slider ref={sliderRef} {...settings}>
              {products.map((product, index) => {
                return (
                  <ScrollAnimationWrapper key={index}>
                    <motion.div
                      variants={scrollAnimation}
                      className="p-6"
                      whileHover={{
                        opacity: 1,
                        scale: 1.1,
                        transition: {
                          duration: 0.2,
                        },
                      }}
                    >
                      <div className="relative bg-[#F4F6FF] rounded-lg shadow-lg p-6 h-[400px] w-full flex flex-col justify-between">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-contain mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800">
                          {product.name}
                        </h3>
                        <div className="mt-2">
                          <span className="text-[#E4B1F0] font-bold">
                            {product.salePrice}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollAnimationWrapper>
                );
              })}
            </Slider>
          </div>
          <CustomNextArrow
            onClick={() => sliderRef.current.slickNext()}
            className="custom-arrow-outside"
          />
        </div>
      ) : (
        // For larger screens, render slider with default arrows
        <Slider {...settings}>
          {products.map((product, index) => {
            return (
              <ScrollAnimationWrapper key={index}>
                <motion.div
                  variants={scrollAnimation}
                  className="p-6"
                  whileHover={{
                    opacity: 1,
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="relative bg-[#F4F6FF] rounded-lg shadow-lg p-6 h-[400px] w-[290px] flex flex-col justify-between">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-contain mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-800">
                      {product.name}
                    </h3>
                    <div className="mt-2">
                      <span className="text-[#E4B1F0] font-bold">
                        {product.salePrice}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default ProductSlider;
