import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { categories as categoryData } from '@/data/categories';
import CategoryCard from "@/components/CategoryCard";

const Shop = () => {
    const [sortOption, setSortOption] = useState("default");
    const [categories, setCategories] = useState(categoryData);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortOption(value);

        let sortedCategories = [...categoryData];

        if (value === "price-low") {
            sortedCategories.sort((a, b) => a.price - b.price);
        } else if (value === "price-high") {
            sortedCategories.sort((a, b) => b.price - a.price);
        } else if (value === "newest") {
            sortedCategories.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        } else if (value === "popular") {
            sortedCategories.sort((a, b) => b.popularity - a.popularity);
        }

        setCategories(sortedCategories);
    };

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
            setCategories(categoryData);
        } else {
            setSelectedCategory(category);
            setCategories(categoryData.filter(cat => cat.name === category));
        }
    };

    return (
        <div className="max-w-[1360px] mx-auto p-4">
            {/* Promotional Banner */}
            <div className="relative bg-gradient-to-r from-orange-200 to-white p-6 rounded-lg shadow-lg flex items-center justify-between">
                <div>
                    <h2 className="text-4xl font-bold text-orange-500">FLAT 50% OFF</h2>
                    <p className="text-xl text-gray-700"><span className="text-orange-500">12 Hours 20 Mins</span></p>
                    <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full text-lg font-semibold hover:bg-orange-600">Explore Now</button>
                </div>
                <div>
                    {/* Placeholder for Image, replace with an actual image tag */}
                    <img src="/p5.png" alt="Discount Banner" className="w-40 h-auto" />
                </div>
            </div>

            {/* Animated Heading */}
            <motion.h1 
                className="text-4xl md:text-5xl font-bold text-center my-6 uppercase tracking-wide font-['Bebas Neue']"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Shop by <span className="text-[#ff4500]">Category</span>
            </motion.h1>

            <motion.p 
                className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                {/* Explore our wide range of shoe categories, from casual wear to formal styles.  
                Whether you need running shoes, stylish sneakers  */}
            </motion.p>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-[250px] p-4 border border-gray-200 rounded-lg shadow-md bg-white">
                    <h3 className="text-lg font-semibold mb-2">Sort By</h3>
                    <select 
                        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                        value={sortOption}
                        onChange={handleSortChange}
                    >
                        <option value="default">Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="newest">Newest Arrivals</option>
                        <option value="popular">Most Popular</option>
                    </select>

                    <h3 className="text-lg font-semibold mb-2">Categories</h3>
                    <ul className="space-y-2">
                        {categoryData.map((category) => (
                            <li 
                                key={category.id} 
                                className={`p-2 rounded-md cursor-pointer transition ${
                                    selectedCategory === category.name 
                                        ? "bg-[#ff4500] text-white" 
                                        : "bg-gray-100 hover:bg-gray-200"
                                }`}
                                onClick={() => handleCategoryClick(category.name)}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>

                    {selectedCategory && (
                        <button 
                            className="mt-4 w-full p-2 bg-gray-300 hover:bg-gray-400 text-black rounded-md"
                            onClick={() => { setSelectedCategory(null); setCategories(categoryData); }}
                        >
                            Reset Filters
                        </button>
                    )}
                </div>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <CategoryCard key={category.id} category={category} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">
                            No categories found.
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Shop;
