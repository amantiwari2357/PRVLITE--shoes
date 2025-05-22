import Link from "next/link";
import { useEffect, useState } from "react";
import categories from "@/data/categories";

const MensClothing = () => {
    const mensCategory = categories.find(cat => cat.name === "SportsShoes");

    if (!mensCategory || !mensCategory.products) {
        return <p className="text-center text-red-500">No products found for this category.</p>;
    }

    const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 30 });
    const [sortedProducts, setSortedProducts] = useState([...mensCategory.products]);
    const [sortOption, setSortOption] = useState("popular");

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { hours, minutes, second } = prev;
    
                if (second > 0) {
                    second--;
                } else if (minutes > 0) {
                    minutes--;
                    second = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    second = 59;
                }
    
                return { hours, minutes, second };
            });
        }, 1000); // Run every 1 second
    
        return () => clearInterval(timer);
    }, []);
    

    useEffect(() => {
        let sorted = [...mensCategory.products];
        if (sortOption === "low-high") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortOption === "high-low") {
            sorted.sort((a, b) => b.price - a.price);
        } else if (sortOption === "new") {
            sorted.reverse();
        }
        setSortedProducts(sorted);
    }, [sortOption, mensCategory.products]);

    return (
        <div className="max-w-[1360px] mx-auto p-4">
            {/* 🏷️ Banner Section with Offer */}
            <div className="relative w-full h-80 mb-6">
                <img 
                    src="/products/slide-3.png" 
                    alt="Sneakers Collection" 
                    className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center rounded-lg text-center px-6">
                    <h1 className="text-white text-5xl md:text-6xl font-extrabold uppercase drop-shadow-md">SportsShoes Collection</h1>
                    {/* Offer Box */}
<div className="mt-4 bg-white/90 px-4 py-2 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-orange-500">FLAT 50% OFF</h2>
    <p className="text-lg mt-1 text-black">
        Hurry! Offer ends in 
        <span className="text-red-500">
            {" "}{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.second}s
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

            <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600 text-lg">Showing {sortedProducts.length} products</p>
                <div>
                    <label className="text-gray-700 font-semibold mr-2">Sort by:</label>
                    <select 
                        className="border px-3 py-1 rounded-md" 
                        value={sortOption} 
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="popular">Most Popular</option>
                        <option value="low-high">Price: Low to High</option>
                        <option value="high-low">Price: High to Low</option>
                        <option value="new">Newest Arrivals</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {sortedProducts.map((product) => (
                    <Link key={product.id} href={`/shop/product/${product.id}`} legacyBehavior>
                        <a className="border p-4 rounded-md shadow-md cursor-pointer hover:shadow-lg block">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-60 object-cover rounded-md"
                            />
                            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                            <p className="text-gray-500">₹{product.price}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MensClothing;