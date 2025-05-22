import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import newArrivalData from "@/data/newarrival"; // Importing new arrival data

const NewArrivals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newArrivalData.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 mb-8 md:mb-20 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] rounded-3xl overflow-hidden">
      {/* Left Section - Text from newarrival.js */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[#171717] text-4xl md:text-6xl font-semibold">
              {newArrivalData[currentIndex].title}
            </h1>
            <p className="text-[#171717] text-lg md:text-xl font-semibold mt-2">
              {newArrivalData[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
        <Link href="/shop" passHref>
  <Button className="w-56 md:w-72 h-12 md:h-16 rounded-full bg-[#ff4141] text-white text-lg md:text-xl font-medium mt-6 hover:bg-red-600 transition-all">
    Request Order
  </Button>
</Link>
      </div>

      {/* Right Section - Smooth Image Transition */}
      <div className="flex-1 flex items-center justify-center md:justify-end w-full max-w-[350px] md:max-w-[450px] pt-6 md:pt-12">
        <AnimatePresence mode="wait">
          <motion.img
            key={newArrivalData[currentIndex].image}
            src={newArrivalData[currentIndex].image}
            alt="New Arrival"
            className="w-full max-w-[300px] md:max-w-[450px] object-cover rounded-full border-4 border-[#ff4141] shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NewArrivals;
