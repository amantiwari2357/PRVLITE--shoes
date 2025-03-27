import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CategoryCard = ({ category }) => {
    const [zoomPosition, setZoomPosition] = useState({ x: "50%", y: "50%" });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPosition({ x: `${x}%`, y: `${y}%` });
    };

    return (
        <Link href={category.link} className="w-full sm:w-[260px]">
            <motion.div
                className="group cursor-pointer border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300 relative"
                whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Image with Hover Zoom Effect */}
                <div className="relative overflow-hidden rounded-t-lg" onMouseMove={handleMouseMove}>
                    <motion.img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-[230px] object-cover transition-transform duration-500 group-hover:scale-110"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                        style={{ transformOrigin: `${zoomPosition.x} ${zoomPosition.y}` }}
                    />

                    {/* Glassmorphism Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                    {/* Floating Title on Hover */}
                    <motion.div 
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl font-bold text-white uppercase tracking-wide font-['Bebas Neue'] bg-black bg-opacity-60 px-6 py-2 rounded-md shadow-lg">
                            {category.name}
                        </h2>
                    </motion.div>
                </div>

                {/* Category Name Always Visible */}
                <div className="p-4 text-center bg-white">
                    <h2 className="text-lg font-bold uppercase text-gray-800 tracking-wide font-['Bebas Neue'] group-hover:text-[#ff4500] transition-colors duration-300">
                        {category.name}
                    </h2>
                </div>
            </motion.div>
        </Link>
    );
};

export default CategoryCard;
