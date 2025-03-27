import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products"; // Import product data

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const allProducts = Object.values(productsData).flat();
        setProducts(allProducts);
    }, []);

    return (
        <div className="max-w-[1360px] mx-auto p-4">
            {/* Heading */}
            <div className="text-center max-w-[900px] mx-auto my-12 px-4">
                <h2 className="text-[42px] md:text-[60px] font-extrabold uppercase text-black leading-tight font-['Bebas Neue']">
                    Explore Our <span className="text-[#ff4500]">Latest Products</span>
                </h2>
                <p className="text-lg text-gray-600 mt-3">
                    Find the best products that suit your style and needs.
                </p>
            </div>

            {/* Show Limited Products */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.slice(0, 8).map((product) => (
                    <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden p-4">
                        <ProductCard data={product} />
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center my-8">
                <button
                    onClick={() => router.push("/all-products")}
                    className="px-6 py-3 bg-[#ff4500] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#e03e00] transition duration-300"
                >
                    View All
                </button>
            </div>
        </div>
    );
};

export default HomeProducts;
