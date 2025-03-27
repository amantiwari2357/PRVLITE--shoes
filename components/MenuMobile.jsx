import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { categories as staticCategories } from "../data/categories"; // ✅ Corrected import path

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Product", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
    const [categories, setCategories] = useState([]);

    // ✅ Ensuring categories are set properly
    useEffect(() => {
        setCategories(staticCategories);
        console.log("Categories Data:", staticCategories);
    }, []);

    return (
        <ul
            className="flex flex-col md:hidden font-medium absolute top-[50px] 
            left-0 w-full h-[calc(100vh-50px)] bg-white border-t 
            text-black shadow-md z-50"
        >
            {data.map((item) => (
                <React.Fragment key={item.id}>
                    {item?.subMenu ? (
                        <li
                            className="cursor-pointer py-4 px-5 border-b 
                            flex flex-col relative hover:bg-blue-50"
                            onClick={() => setShowCatMenu(!showCatMenu)}
                        >
                            <div className="flex justify-between items-center">
                                {item.name}
                                <BsChevronDown
                                    size={14}
                                    className={`transform duration-300 ${showCatMenu ? "rotate-180" : ""}`}
                                />
                            </div>

                            {showCatMenu && categories?.length > 0 && (
    <ul className="bg-blue-50 -mx-5 mt-2 -mb-2 transition-all duration-300 overflow-hidden">
        {categories.map((category) => {
            const c = category?.attributes || category; // Ensure correct structure

            return (
                <Link
                    key={category?.id}
                    href={c?.slug ? `/category/${c.slug}` : "#"}
                    onClick={() => {
                        setShowCatMenu(false);
                        setMobileMenu(false);
                    }}
                >
                    <li className="py-3 px-8 border-t flex justify-between hover:bg-blue-100">
                        {c?.name || "Unnamed Category"} 
                        <span className="opacity-60 text-sm hidden">
                            {`(${c?.products?.data?.length || ""})`}
                        </span>
                    </li>
                </Link>
            );
        })}
    </ul>
)}

                        </li>
                    ) : (
                        <li className="py-4 px-5 border-b hover:bg-blue-50">
                            <Link href={item?.url} onClick={() => setMobileMenu(false)}>
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
