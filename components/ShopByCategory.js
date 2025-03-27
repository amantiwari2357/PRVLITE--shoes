import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import categories from "@/data/categories"; // Importing category data

const ShopByCategory = () => {
  const router = useRouter();

  const handleCategoryClick = (link) => {
    router.push(link); // Redirect to category link
  };

  return (
    <motion.div className="mt-20 px-6 md:px-16 lg:px-20 pb-24">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="text-center text-[42px] md:text-[64px] font-extrabold uppercase tracking-wide drop-shadow-lg font-['Bebas Neue']"
      >
        Shop by <span className="text-[#ff4500]">Category</span>
      </motion.h2>

      {/* Subtext */}
      <p className="text-lg text-gray-600 mt-3 text-center max-w-3xl mx-auto">
        Discover the best products that match your style and needs. Browse through.
      </p>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleCategoryClick(category.link)}
            className="relative cursor-pointer p-4 border border-gray-300 rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300"
          >
            {/* Category Image */}
            <motion.img
              src={category.image}
              alt={category.name}
              className="w-full h-[220px] md:h-[250px] object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />

            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-white">{category.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => router.push("/shop")}
          className="px-6 py-3 bg-[#ff4500] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#e03e00] transition-all duration-300"
        >
          View All
        </button>
      </div>
    </motion.div>
  );
};

export default ShopByCategory;
