import Link from "next/link";
import React from "react";
import Wrapper from "./Wrapper";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Importing icons

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-14 pb-6">
            <Wrapper className="max-w-[1280px] mx-auto px-6">
                
                {/* Top Section: Company Info, Quick Links, and Social Media */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">

                    {/* LEFT: Company Info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">Company</h3>
                        <p className="text-sm text-gray-300">XYZ Street, City, Country - 123456</p>
                        <p className="text-sm text-gray-300 mt-1">Phone: 9876543210</p>
                        <p className="text-sm text-gray-300 mt-1">
                            Email: 
                            <a href="mailto:info@company.com" className="text-blue-400 hover:underline ml-1">
                                info@company.com
                            </a>
                        </p>
                    </div>

                    {/* CENTER: Quick Links */}
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">Quick Links</h3>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <Link href="/about"><span className="hover:text-blue-400 cursor-pointer">About Us</span></Link>
                            <Link href="/TermsAndConditions"><span className="hover:text-blue-400 cursor-pointer">Terms & Conditions</span></Link>
                            <Link href="/PrivacyPolicy"><span className="hover:text-blue-400 cursor-pointer">Privacy Policy</span></Link>
                            <Link href="/RefundPolicy"><span className="hover:text-blue-400 cursor-pointer">Refund Policy</span></Link>
                            <Link href="/ContactUs"><span className="hover:text-blue-400 cursor-pointer">Contact Us</span></Link>
                        </div>
                    </div>

                    {/* RIGHT: Social Media Icons */}
                    <div className="flex flex-col items-center md:items-end">
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full">
                                <FaFacebookF className="text-white text-lg" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-blue-400 hover:bg-blue-500 rounded-full">
                                <FaTwitter className="text-white text-lg" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-pink-500 hover:bg-pink-600 rounded-full">
                                <FaInstagram className="text-white text-lg" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full">
                                <FaYoutube className="text-white text-lg" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="mt-6 text-center text-sm text-gray-400">
                    © 2025 Developed by <span className="text-white font-semibold">Digi India Solutions </span>. All Rights Reserved.
                </div>
            </Wrapper>
        </footer>
    );
};

export default Footer;
