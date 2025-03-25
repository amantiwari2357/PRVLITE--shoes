import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const ProductCard = ({ data }) => {
    if (!data || !data.attributes) return null;

    const { attributes: p, id } = data;
    
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPosition({ x, y });
    };

    // Smooth Slow Scroll Animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.2 }
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Link href={`/product/${p.slug || "#"}`} passHref>
            <div 
                ref={cardRef}
                className={`relative border border-gray-200 rounded-2xl shadow-xl overflow-hidden transition-all duration-[1.5s] transform ${
                    isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-90"
                } hover:scale-[1.05] hover:shadow-2xl cursor-pointer`}
            >
                {/* Discount Badge on Top-Left */}
                {p.original_price && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                        {getDiscountedPricePercentage(p.original_price, p.price) || 0}% OFF
                    </div>
                )}

                {/* Full Width & Height Image */}
                {p.thumbnail?.data?.attributes?.url ? (
                    <div
                        className="relative w-full h-64 overflow-hidden"
                        onMouseEnter={() => setIsZoomed(true)}
                        onMouseLeave={() => setIsZoomed(false)}
                        onMouseMove={handleMouseMove}
                    >
                        <Image
                            width={400}
                            height={400}
                            src={p.thumbnail.data.attributes.url}
                            alt={p.name || "Product Image"}
                            className="w-full h-full object-cover transition-transform duration-500"
                        />
                        {/* Hover Zoom Effect */}
                        {isZoomed && (
                            <div
                                className="absolute inset-0 bg-no-repeat bg-cover z-10"
                                style={{
                                    backgroundImage: `url(${p.thumbnail.data.attributes.url})`,
                                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                    transform: "scale(1.5)",
                                    transition: "transform 0.4s ease-in-out",
                                }}
                            />
                        )}
                    </div>
                ) : (
                    <div className="w-full h-64 flex items-center justify-center text-gray-500">
                        No Image Available
                    </div>
                )}

                {/* Product Info Over Image */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-center">
                    <h2 className="text-lg font-extrabold">{p.name || "Unnamed Product"}</h2>
                    <div className="flex justify-center items-center space-x-2">
                        <p className="text-2xl font-bold text-yellow-300">
                            &#8377;{p.price || "N/A"}
                        </p>
                        {p.original_price && (
                            <p className="text-sm font-medium line-through text-gray-300">
                                &#8377;{p.original_price}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
