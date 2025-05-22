import React, { useState, useEffect, useRef } from "react";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products";

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(12);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");
    const loaderRef = useRef(null);

    useEffect(() => {
        const allProducts = Object.values(productsData).flat();
        setProducts(allProducts);
        setFilteredProducts(allProducts);
    }, []);

    // Categories extraction
    const categories = ["all", ...new Set(products.map((p) => p.category).filter(Boolean))];

    // Sorting logic
    const sortProducts = (products, option) => {
        switch (option) {
            case "price-low":
                return [...products].sort((a, b) => a.price - b.price);
            case "price-high":
                return [...products].sort((a, b) => b.price - a.price);
            case "newest":
                return [...products].sort((a, b) => new Date(b.date) - new Date(a.date));
            case "name":
                return [...products].sort((a, b) => (a.name || "").localeCompare(b.name || ""));
            default:
                return products;
        }
    };

    // Filter & Sort when category or sorting changes
    useEffect(() => {
        if (products.length === 0) return;

        let updatedProducts = [...products];

        if (selectedCategory !== "all") {
            updatedProducts = updatedProducts.filter((p) => p.category === selectedCategory);
        }

        updatedProducts = sortProducts(updatedProducts, sortOption);
        setFilteredProducts(updatedProducts);
    }, [selectedCategory, sortOption, products]);

    // Infinite Scroll Logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleCount((prevCount) => prevCount + 8);
                }
            },
            { threshold: 1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, []);

    return (
        <div className="max-w-[1360px] mx-auto p-4">
            {/* Header */}
            <div className="text-center max-w-[900px] mx-auto my-12 px-4">
                <h2 className="text-[42px] md:text-[60px] font-extrabold uppercase text-black leading-tight font-['Bebas Neue']">
                    Our <span className="text-[#ff4500]">Complete Collection</span>
                </h2>
                <p className="text-lg text-gray-600 mt-3">Browse through all our amazing products.</p>
            </div>

            {/* Filters & Sorting */}
            <div className="flex flex-wrap justify-between items-center mb-6">
                {/* Category Filter */}
                <div className="flex items-center space-x-3">
                    <select
                        className="p-2 border rounded-lg"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category ? category.charAt(0).toUpperCase() + category.slice(1) : "Unknown"}
                            </option>
                        ))}
                    </select>
                    
                    {/* Back Button */}
                    <button
                        className="p-2 px-4 border rounded-lg bg-gray-200 hover:bg-gray-300"
                        onClick={() => setSelectedCategory("all")}
                    >
                        Back
                    </button>
                </div>

                {/* Sort Options */}
                <select
                    className="p-2 border rounded-lg"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="default">Sort By</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="name">Name: A-Z</option>
                </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.slice(0, visibleCount).map((product) => (
                    <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden p-4">
                        <ProductCard data={product} />
                    </div>
                ))}
            </div>

            {/* Infinite Scroll Loader */}
            {visibleCount < filteredProducts.length && (
                <div ref={loaderRef} className="text-center my-8">
                    <p className="text-gray-600">Loading more products...</p>
                </div>
            )}
        </div>
    );
};

export default AllProductsPage;