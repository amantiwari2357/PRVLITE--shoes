import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { categories } from "@/data/categories"; // ✅ API की जगह Direct Import

const Menu = ({ showCatMenu, setShowCatMenu }) => {
    const [showOffer, setShowOffer] = useState(true);
    const [offerColor, setOfferColor] = useState("bg-red-500");

    const offerMessages = [
        "🎉 Sign up now and get 50% OFF on your first purchase!",
        "🚀 Limited time deal! Get Flat 40% OFF on all items!",
        "🔥 Hurry! Use code SAVE30 for 30% instant discount!",
        "🎁 Special Offer: Buy 1 Get 1 Free on select products!"
    ];
    const offerColors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500"];
    const [currentOffer, setCurrentOffer] = useState(0);

    useEffect(() => {
        // Change offer message and color every 5 seconds
        const interval = setInterval(() => {
            setCurrentOffer((prev) => (prev + 1) % offerMessages.length);
            setOfferColor(offerColors[Math.floor(Math.random() * offerColors.length)]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            {/* ✅ Offer Banner */}
            {showOffer && (
                <div className={`${offerColor} text-white text-center py-0 px-2 flex justify-between items-center transition-all duration-500`}>
                    <span className="text-sm font-semibold md:hidden">Enjoy Offer</span>
                    <span className="hidden md:block text-sm md:text-base font-semibold">
                        {offerMessages[currentOffer]}
                    </span>
                    <button onClick={() => setShowOffer(false)} className="font-bold px-3">✖</button>
                </div>
            )}

            <div className="mt-4"></div> 

            {/* ✅ Navigation Menu */}
            <ul className="hidden md:flex items-center gap-8 font-medium text-black">
                {[ 
                    { id: 1, name: "Home", url: "/" },
                    { id: 2, name: "About", url: "/about" },
                    // { id: 3, name: "Categories", subMenu: true },
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

                                {/* ✅ Categories Dropdown */}
                                {showCatMenu && (
                                    <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                                        {categories.map(({ id, name, link }) => (
                                            <Link key={id} href={link}>
                                                <li
                                                    className="h-12 flex justify-between items-center px-3 hover:bg-gray-100 rounded-md"
                                                    onClick={() => setShowCatMenu(false)}
                                                >
                                                    {name}
                                                </li>
                                            </Link>
                                        ))}
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
