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
    <div className="w-full h-[80vh] flex mx-auto px-24 mb-36 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] rounded-3xl overflow-hidden">
      {/* Left Section - Text from newarrival.js */}
      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[#171717] text-6xl font-semibold">{newArrivalData[currentIndex].title}</h1>
            <p className="text-[#171717] text-xl font-semibold mt-2">
              {newArrivalData[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
        <Button className="w-72 h-16 rounded-full bg-[#ff4141] text-white text-xl font-medium mt-6 hover:bg-red-600 transition-all">
          Shop Now
        </Button>
      </div>

      {/* Right Section - Smooth Image Transition */}
      <div className="flex-1 flex items-center justify-end pt-12 relative w-[450px] h-[450px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={newArrivalData[currentIndex].image}
            src={newArrivalData[currentIndex].image}
            alt="New Arrival"
            className="absolute w-[450px] h-[450px] object-cover rounded-full border-4 border-[#ff4141] shadow-lg"
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
