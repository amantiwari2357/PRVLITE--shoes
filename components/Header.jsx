import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector } from "react-redux";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-lg bg-white/90 backdrop-blur-md");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`w-full h-[70px] md:h-[100px] bg-white flex items-center justify-between z-30 sticky top-0 transition-transform duration-300 shadow-md ${show}`}
        >
            <Wrapper className="h-[100px] flex justify-between items-center px-4 md:px-8">
                <Link href="/">
                    <img src="/images/logo.webp" className="w-[120px] md:w-[130px] h-[60px] md:h-[35px]" />
                </Link>

                <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    categories={categories}
                />

                {mobileMenu && (
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                        categories={categories}
                    />
                )}

                <div className="flex items-center gap-2 text-black">
                    <Link href="/login">
                        <div className="w-20 md:w-24 h-8 md:h-10 flex justify-center items-center 
                                        text-white bg-gradient-to-r from-blue-500 to-blue-700 
                                        hover:from-blue-600 hover:to-blue-800 
                                        rounded-full shadow-md text-[13px] md:text-[15px] font-semibold 
                                        transition-all duration-300 cursor-pointer 
                                        ml-[-10px] md:ml-[3px]">
                            Login
                        </div>
                    </Link>

                    {/* Mobile icon start */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <VscChromeClose
                                className="text-[16px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenuAltRight
                                className="text-[20px]"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                    {/* Mobile icon end */}
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;