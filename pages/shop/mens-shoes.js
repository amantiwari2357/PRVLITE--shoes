import Link from "next/link";
import { useEffect, useState } from "react";
import categories from "../../data/categories";

const MensClothing = () => {
    const mensCategory = categories.find(cat => cat.name === "mens-shoes");

    // Timer State
    const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 30 });

    // Sorting State
    const [sortOption, setSortOption] = useState("popularity");
    const [filteredProducts, setFilteredProducts] = useState(mensCategory.products);

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
    
    // Sorting Logic
    useEffect(() => {
        let sortedProducts = [...mensCategory.products];

        switch (sortOption) {
            case "price-low-high":
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case "price-high-low":
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case "newest":
                sortedProducts.sort((a, b) => b.id - a.id);
                break;
            default:
                break;
        }

        setFilteredProducts(sortedProducts);
    }, [sortOption]);

    return (
        <div className="max-w-[1360px] mx-auto p-4">
            {/* 🏷️ Banner Section with Offer */}
            <div 
                className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url('/products/slide-3.png')` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-white text-5xl md:text-6xl font-extrabold uppercase drop-shadow-md">
                        Men's Footwear
                    </h1>

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

            {/* 🏷️ Sorting and Product Count */}
            <div className="flex justify-between items-center mt-6">
                <p className="text-lg text-gray-600">
                    Showing {filteredProducts.length} products
                </p>
                <div className="flex items-center gap-2">
                    <span className="text-gray-600">Sort by:</span>
                    <select 
                        className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="popularity">Popularity</option>
                        <option value="price-low-high">Price: Low to High</option>
                        <option value="price-high-low">Price: High to Low</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>

            {/* 🏷️ Product Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
    {filteredProducts.map((product) => (
        <Link key={product.id} href={`/shop/product/${product.id}`}>
            <div className="border p-4 rounded-lg shadow-md cursor-pointer bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-60 object-cover rounded-lg"
                />
                <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
                <p className="text-gray-600 text-lg font-medium">₹{product.price}</p>
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
