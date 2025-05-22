import React from "react";
import { motion } from "framer-motion";

const NewsLetter = () => {
  return (
    <div className="w-[95%] sm:w-11/12 min-h-[30vh] md:min-h-[40vh] flex flex-col items-center justify-center mx-auto px-6 sm:px-8 md:px-16 lg:px-36 mb-12 md:mb-24 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] gap-4 md:gap-6 py-10 rounded-lg">
      
      {/* Animated Heading */}
      <motion.h1
        className="text-[#454545] text-2xl sm:text-3xl md:text-5xl font-semibold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get Exclusive Offers on Your Email
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="text-[#454545] text-sm sm:text-base md:text-lg text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Subscribe to our newsletter and stay updated
      </motion.p>

      {/* Input & Button Section */}
      <div className="flex flex-col sm:flex-row items-center bg-white w-full max-w-x1 sm:max-w-2xl h-auto sm:h-[50px] rounded-full border border-gray-300 px-4 py-3 sm:py-0 gap-3 sm:gap-4">
        <label htmlFor="email" className="sr-only">
          Enter your email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your email id"
          className="w-full sm:w-[400px] md:w-[500px] px-4 py-3 border-none outline-none text-gray-600 placeholder-gray-500 text-lg bg-transparent"
          aria-label="Enter your email"
        />
        
      </div>
      <button className="w-full sm:w-[150px] md:w-[180px] h-[50px] sm:h-[55px] md:h-[60px] rounded-full bg-black text-white text-lg cursor-pointer transition-all hover:bg-gray-900">
          Subscribe
        </button>
    </div>
  );
};

export default NewsLetter;
