// import Link from "next/link";
// import Image from "next/image";
// import productsData from "@/data/productsData"; // Correct path check karein
// import productsData from "../data/products"; // Correct path check karein

// const Products = () => {
//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold mb-5">All product</h1>
//             <div className="grid grid-cols-2 gap-4">
//                 {Object.entries(productsData).map(([category, products]) => (
//                     products.map((product) => (
//                         <Link key={product.id} href={`/product/${product.attributes.slug}`} passHref>
//                             <div className="border p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition">
//                                 <Image
//                                     src={product.attributes.thumbnail.data.attributes.url}
//                                     alt={product.attributes.name}
//                                     width={200}
//                                     height={200}
//                                     className="w-full h-40 object-cover"
//                                 />
//                                 <h2 className="text-lg font-bold mt-2">{product.attributes.name}</h2>
//                                 <p className="text-md font-bold text-red-600">
//                                     &#8377;{product.attributes.price}
//                                 </p>
//                             </div>
//                         </Link>
//                     ))
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Products;

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Products = () => {
    const [products, setProducts] = useState([]); // सभी प्रोडक्ट्स को स्टोर करेगा
    const [page, setPage] = useState(1); // Page Number
    const [loading, setLoading] = useState(false); // लोडिंग स्टेट
    const [hasMore, setHasMore] = useState(true); // Infinite Scroll रोकने के लिए

    // ✅ API से Products लाने का Function
    const fetchProducts = async () => {
        if (!hasMore) return;
        setLoading(true);
        try {
            const res = await fetch(`/api/products?page=${page}`);
            const data = await res.json();
            if (data.length === 0) {
                setHasMore(false); // अगर और डेटा नहीं बचा है तो Infinite Scroll रोक दें
            }
            setProducts((prev) => [...prev, ...data]); // पुराने डेटा में नया डेटा जोड़ें
            setPage(page + 1); // Next Page Load करें
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        setLoading(false);
    };

    // ✅ जब Component Load हो, तो पहली बार API Call करें
    useEffect(() => {
        fetchProducts();
    }, []);

    // ✅ Infinite Scroll Handler
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop + 100 >=
                document.documentElement.offsetHeight
            ) {
                fetchProducts();
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [products]);

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-5">All Products</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 shadow rounded">
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                        <p className="text-gray-600">₹{product.price}</p>
                        <Link href={`/product/${product.id}`} className="text-blue-500 mt-2 inline-block">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
            {loading && <p className="text-center mt-5">Loading more products...</p>}
            {!hasMore && <p className="text-center mt-5 text-red-500">No more products available</p>}
        </div>
    );
};

export default Products;
