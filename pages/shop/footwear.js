import Link from "next/link";
import { useEffect, useState } from "react";
import categories from "@/data/categories";

const MensClothing = () => {
    // ✅ Fetching Footwear Category Data from categories
    const mensCategory = categories.find(cat => cat.name.toLowerCase() === "footwear");

    if (!mensCategory) {
        return (
            <div className="max-w-[1360px] mx-auto p-4 text-center">
                <h1 className="text-3xl font-bold my-6">Formal Footwear</h1>
                <p className="text-red-500">No products available in this category.</p>
            </div>
        );
    }

    // ✅ Timer State for Offer Countdown
    const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 30, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { hours, minutes, seconds } = prev;

                if (hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(timer);
                    return { hours: 0, minutes: 0, seconds: 0 };
                }

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // ✅ Sorting State
    const [sortOption, setSortOption] = useState("default");

    // ✅ Function to Handle Sorting
    const sortedProducts = mensCategory.products.slice().sort((a, b) => {
        if (sortOption === "price-low") return a.price - b.price;
        if (sortOption === "price-high") return b.price - a.price;
        if (sortOption === "newest") return b.id - a.id;
        return 0;
    });

    return (
        <div className="max-w-[1360px] mx-auto p-4">
            {/* 🏷️ Banner Section with Offer */}
            <div className="relative w-full h-80 mb-6">
                <img 
                    src="/products/slide-2.png" 
                    alt="Sneakers Collection" 
                    className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center rounded-lg text-center px-6">
                    <h1 className="text-white text-5xl md:text-6xl font-extrabold uppercase drop-shadow-md">Formal Shoes Collection</h1>
                    
                    {/* Offer Box */}
                    <div className="mt-4 bg-white/90 px-4 py-2 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-orange-500">FLAT 50% OFF</h2>
                        <p className="text-lg mt-1 text-black">
                            Hurry! Offer ends in 
                            <span className="text-red-500"> {" "}
                                {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                            </span>
                        </p>
                        <Link href="/shop">
                            <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
                                Shop Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ✅ Product Count & Sorting */}
            <div className="flex justify-between items-center mb-4">
                <p className="text-lg text-gray-700">
                    Showing {sortedProducts.length} products
                </p>
                <div>
                    <label className="text-lg font-medium mr-2">Sort by:</label>
                    <select 
                        className="border p-2 rounded-md"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="newest">Newest Arrivals</option>
                    </select>
                </div>
            </div>

            {/* ✅ Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {sortedProducts.map((product) => (
                    <Link key={product.id} href={`/shop/product/${product.id}`}>
                        <div className="border p-4 rounded-md shadow-md cursor-pointer hover:shadow-lg">
                            <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md"/>
                            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                            <p className="text-gray-500">₹{product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center mt-8">
                <Link href="/shop">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all">
                        View All Products
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MensClothing;
