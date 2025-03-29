import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true }, // Added submenu property
    { id: 4, name: "Contact", url: "/ContactUs" },
];

const categories = [
    { id: 101, name: "Men's Shoes", url: "/shop/mens-shoes" },
    { id: 102, name: "Casual Shoes", url: "/shop/CasualShoes" },
    { id: 103, name: "Formal Shoes", url: "/shop/FormalShoes" },
    { id: 104, name: "Sneakers", url: "/shop/Sneakers" },
    { id: 105, name: "Accessories", url: "/shop/accessories" },
    { id: 106, name: "Women's Shoes", url: "/shop/womens-shoes" },
    { id: 107, name: "Sports Shoes", url: "/shop/SportsShoes" },
    { id: 108, name: "Footwear", url: "/shop/footwear" },
];

const MenuMobile = ({ setMobileMenu }) => {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <ul className="flex flex-col md:hidden font-medium absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black shadow-md z-50">
            {data.map((item) => (
                <li key={item.id} className="py-4 px-5 border-b hover:bg-blue-50">
                    {item.subMenu ? (
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setShowCategories((prev) => !prev)}
                        >
                            {item.name}
                            <BsChevronDown
                                size={14}
                                className={`transform transition-transform duration-300 ${showCategories ? "rotate-180" : ""}`}
                            />
                        </div>
                    ) : (
                        <Link href={item.url} onClick={() => setTimeout(() => setMobileMenu(false), 300)}>
                            {item.name}
                        </Link>
                    )}

                    {/* Dropdown for categories */}
                    {item.subMenu && showCategories && (
                        <ul className="bg-blue-50 mt-2 transition-all duration-300 overflow-hidden">
                            {categories.map((category) => (
                                <li key={category.id} className="py-3 px-8 border-t hover:bg-blue-100">
                                    <Link
                                        href={category.url}
                                        onClick={() => setTimeout(() => setMobileMenu(false), 300)}
                                    >
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MenuMobile;
