import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import categories from "@/data/categories";

const CasualShoes = () => {
    const CasualShoesCategory = categories.find(cat => cat.name === "CasualShoes");
    const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 20, seconds: 0 });
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState("popularity");

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { hours, minutes, seconds } = prev;
                if (seconds > 0) return { ...prev, seconds: seconds - 1 };
                if (minutes > 0) return { hours, minutes: minutes - 1, seconds: 59 };
                if (hours > 0) return { hours: hours - 1, minutes: 59, seconds: 59 };
                clearInterval(timer);
                return { hours: 0, minutes: 0, seconds: 0 };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (CasualShoesCategory?.products) {
            let sortedProducts = [...CasualShoesCategory.products];
            if (sortOption === "price-low-high") sortedProducts.sort((a, b) => a.price - b.price);
            else if (sortOption === "price-high-low") sortedProducts.sort((a, b) => b.price - a.price);
            else if (sortOption === "newest") sortedProducts.sort((a, b) => b.id - a.id);
            setProducts(sortedProducts);
        }
    }, [sortOption, CasualShoesCategory]);

    return (
        <div className="max-w-[1360px] mx-auto p-4">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-cover bg-center">
                <Image src="/products/slide-2.png" alt="Casual Shoes Collection" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-5xl md:text-6xl font-extrabold uppercase drop-shadow-md">Casual Footwear</h1>
                    <div className="mt-4 bg-white/90 px-4 py-2 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-orange-500">FLAT 50% OFF</h2>
                        <p className="text-lg mt-1 text-black">Hurry! Offer ends in <span className="text-red-500">{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span></p>
                        <Link href="/shop"><button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">Shop Now</button></Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6">
                <p className="text-gray-600">Showing {products.length} products</p>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-700">Sort by:</span>
                    <select className="border rounded-md p-2" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="popularity">Popularity</option>
                        <option value="price-low-high">Price: Low to High</option>
                        <option value="price-high-low">Price: High to Low</option>
                        <option value="newest">Newest First</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                    <Link key={product.id} href={`/shop/product/${product.id}`}>
                        <div className="border p-4 rounded-md shadow-md cursor-pointer hover:shadow-lg">
                            <Image src={product.image} alt={product.name} width={300} height={240} className="rounded-md" />
                            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                            <p className="text-gray-500">₹{product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex flex-col items-center mt-12">
                <Link href="/shop">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all">View All Products</button>
                </Link>
            </div>
        </div>
    );
};

export default CasualShoes;