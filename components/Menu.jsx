import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { categories } from "@/data/categories"; // ✅ Import categories.js

const Menu = ({ showCatMenu, setShowCatMenu }) => {
    const [loading, setLoading] = useState(true);
    const [showOffer, setShowOffer] = useState(true); // ✅ Offer visibility state
    const [offerColor, setOfferColor] = useState("bg-red-500"); // ✅ Dynamic Offer Color

    const offerMessages = [
        "🎉 Sign up now and get 50% OFF on your first purchase!",
        "🚀 Limited time deal! Get Flat 40% OFF on all items!",
        "🔥 Hurry! Use code SAVE30 for 30% instant discount!",
        "🎁 Special Offer: Buy 1 Get 1 Free on select products!"
    ];

    const offerColors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500"]; // ✅ Offer Background Colors

    const [currentOffer, setCurrentOffer] = useState(0);

    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Change offer message and color every 5 seconds
        const interval = setInterval(() => {
            setCurrentOffer((prev) => (prev + 1) % offerMessages.length);
            setOfferColor(offerColors[Math.floor(Math.random() * offerColors.length)]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            {/* ✅ Offer Banner with Changing Colors */}
            {showOffer && (
                <div className={`${offerColor} text-white text-center py-0 px-2 flex justify-between items-center transition-all duration-500`}>
                    {/* ✅ Mobile View: Show only "Enjoy Offer" */}
                    <span className="text-sm font-semibold md:hidden">Enjoy Offer</span>
                    
                    {/* ✅ Desktop View: Show full offer message */}
                    <span className="hidden md:block text-sm md:text-base font-semibold">
                        {offerMessages[currentOffer]}
                    </span>

                    <button onClick={() => setShowOffer(false)} className="font-bold px-3">
                        ✖
                    </button>
                </div>
            )}

            {/* ✅ Space added between Offer & Menu */}
            <div className="mt-4"></div> 

            {/* ✅ Navigation Menu */}
            <ul className="hidden md:flex items-center gap-8 font-medium text-black">
                {[ 
                    { id: 1, name: "Home", url: "/" },
                    { id: 2, name: "About", url: "/about" },
                    { id: 3, name: "Categories", subMenu: true },
                    { id: 4, name: "Contact", url: "/ContactUs" },
                ].map((item) => (
                    <React.Fragment key={item.id}>
                        {item.subMenu ? (
                            <li
                                className="cursor-pointer flex items-center gap-2 relative"
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}
                            >
                                {item.name}
                                <BsChevronDown size={14} />

                                {/* ✅ Display categories in the dropdown */}
                                {showCatMenu && (
                                    <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                                        {loading ? (
                                            <div className="text-center text-lg font-semibold text-gray-600 p-4 flex items-center justify-center gap-2">
                                                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-150"></div>
                                                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-300"></div>
                                                <span>Thinking...</span>
                                            </div>
                                        ) : (
                                            categories.map(({ id, name, link }) => (
                                                <Link key={id} href={link}>
                                                    <li
                                                        className="h-12 flex justify-between items-center px-3 hover:bg-gray-100 rounded-md"
                                                        onClick={() => setShowCatMenu(false)}
                                                    >
                                                        {name}
                                                    </li>
                                                </Link>
                                            ))
                                        )}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className="cursor-pointer">
                                <Link href={item.url}>{item.name}</Link>
                            </li>
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
};

export default Menu;