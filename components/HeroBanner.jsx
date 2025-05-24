import React from "react";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <div className="relative text-white w-full max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        {/* slide 1 */}
        <div className="relative">
          <img
            src="/Banner/shoe 1.jpg"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex flex-col justify-center items-start p-6 md:p-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 animate-slide-in">
              New Arrivals
            </h2>
            <p className="text-sm md:text-lg mb-4 animate-slide-in delay-100">
              Check out our latest collection.
            </p>
            <Link href="/shop">
              <div className="px-4 py-2 md:px-8 md:py-3 bg-white text-black text-sm md:text-lg uppercase font-medium cursor-pointer hover:bg-gray-200 animate-slide-in delay-200">
                Shop Now
              </div>
            </Link>
          </div>
        </div>

        {/* slide 2 */}
        <div className="relative">
          <img
            src="/Banner/shoe 2.jpg"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex flex-col justify-center items-start p-6 md:p-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 animate-slide-in">
              Summer Sale
            </h2>
            <p className="text-sm md:text-lg mb-4 animate-slide-in delay-100">
              Up to 50% off on selected items.
            </p>
            <Link href="/shop">
              <div className="px-4 py-2 md:px-8 md:py-3 bg-white text-black text-sm md:text-lg uppercase font-medium cursor-pointer hover:bg-gray-200 animate-slide-in delay-200">
                Shop Now
              </div>
            </Link>
          </div>
        </div>

        {/* slide 3 */}
        <div className="relative">
          <img
            src="/Banner/shoe 3.jpg"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex flex-col justify-center items-start p-6 md:p-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 animate-slide-in">
              Limited Edition
            </h2>
            <p className="text-sm md:text-lg mb-4 animate-slide-in delay-100">
              Grab your exclusive items now.
            </p>
            <Link href="/shop">
              <div className="px-4 py-2 md:px-8 md:py-3 bg-white text-black text-sm md:text-lg uppercase font-medium cursor-pointer hover:bg-gray-200 animate-slide-in delay-200">
                Shop Now
              </div>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;