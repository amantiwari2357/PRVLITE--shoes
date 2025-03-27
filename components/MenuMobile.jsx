import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { categories as staticCategories } from "../data/categories"; 

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/ContactUs" },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(staticCategories);
    }, []);

    return (
        <ul className="flex flex-col md:hidden font-medium absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black shadow-md z-50">
            {data.map((item) => (
                <React.Fragment key={item.id}>
                    {item?.subMenu ? (
                        <li className="cursor-pointer py-4 px-5 border-b flex flex-col relative hover:bg-blue-50">
                            <div
                                className="flex justify-between items-center"
                                onClick={() => setShowCatMenu((prev) => !prev)} // ✅ Toggle category menu
                            >
                                {item.name}
                                <BsChevronDown
                                    size={14}
                                    className={`transform transition-transform duration-300 ${showCatMenu ? "rotate-180" : ""}`}
                                />
                            </div>

                            {showCatMenu && categories.length > 0 && (
                                <ul className="bg-blue-50 -mx-5 mt-2 -mb-2 transition-all duration-300 overflow-hidden">
                                    {categories.map((category) => {
                                        const c = category?.attributes || category;
                                        return (
                                            <li key={category?.id} className="py-3 px-8 border-t hover:bg-blue-100">
                                                <Link 
                                                    href={c?.slug ? `/category/${c.slug}` : `/category/${c.slug}`} 
                                                    onClick={(e) => {
                                                        e.stopPropagation(); // ✅ Prevents event issues
                                                        setShowCatMenu(false);
                                                        setTimeout(() => setMobileMenu(false), 300); // ✅ Close menu smoothly
                                                    }}
                                                >
                                                    {c?.name || "Unnamed Category"}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className="py-4 px-5 border-b hover:bg-blue-50">
                            <Link 
                                href={item?.url} 
                                onClick={(e) => {
                                    e.stopPropagation(); // ✅ Prevents event bubbling
                                    setTimeout(() => setMobileMenu(false), 300); // ✅ Ensures smooth navigation
                                }}
                            >
                                {item.name}
                            </Link>
                        </li>
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
};

export default MenuMobile;
