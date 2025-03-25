import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products"; // Import product data

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const allProducts = Object.values(productsData).flat();
        setProducts(allProducts);

        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="max-w-[1360px] mx-auto p-4">
            {/* Heading (Always Rendered) */}
            <div className="text-center max-w-[900px] mx-auto my-12 px-4">
                <h2 className="text-[42px] md:text-[60px] font-extrabold uppercase text-black leading-tight font-['Bebas Neue']">
                    Explore Our <span className="text-[#ff4500]">Latest Products</span>
                </h2>
                <p className="text-lg text-gray-600 mt-3">
                    Find the best products that suit your style and needs.
                </p>
            </div>

            {/* Prevent rendering products until mounted */}
            {!isMounted ? (
                <p className="text-center text-gray-600">Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <div
                                key={product.id}
                                className="opacity-0 translate-y-10 animate-fadeInUp"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl p-4">
                                    <ProductCard data={product} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 col-span-4">
                            No products available.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default AllProducts;
