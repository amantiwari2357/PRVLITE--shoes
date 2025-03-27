import React, { useState } from "react";
import testimonialsData from "@/data/testimonials"; // Ensure this file exports an array
import Link from "next/link";

const aboutData = {
  title: "WELCOME TO OUR COMPANY!",
  description: `A flexible, lightweight, and ergonomic range of footwear, giving you the maximum degree of comfort.

  Don't you get tired of wearing the same old shoes everywhere you go? Do you not think it's time to change your style? Well then what are you waiting for? Come to PAV Enterprises India (P) Ltd. and get a feather-touch array of footwear which would blow your minds away in terms of comfort!

  A Manufacturer and Supplier of Gents Footwear, Ladies Footwear, and Sports Shoes in nature, our company is using the finest array of raw materials for our production process, so that the clients get nothing but A-grade products. Having shock-absorbent features, such goods would exceed your expectations beyond all doubt. From School Shoes and Ladies footwear to Sandals, one can find all their needs under our roof at the most affordable prices.

  Be it a hot summer month or a nice breezy autumn, get ready to feel the butter-smooth comfort under your feet. Having a low maintenance feature enables these to be a top choice in the Indian Market.`,
};

const About = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const testimonials = Array.isArray(testimonialsData) ? testimonialsData : [];

  return (
    <div className="container mx-auto p-6 space-y-10">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-80 flex items-center justify-center"
        style={{ backgroundImage: "url('/products/newarrival2.webp')" }}
      >
        <h1 className="text-5xl font-extrabold text-white bg-black bg-opacity-60 p-6 rounded-lg shadow-lg text-center">
          {aboutData.title}
        </h1>
      </div>

      {/* Company Description with Read More / Read Less */}
      <div className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
        <p className="whitespace-pre-line">
          {showFullDescription
            ? aboutData.description
            : `${aboutData.description.slice(0, 300)}...`}
        </p>
        <button
          className="text-blue-600 font-semibold mt-3 focus:outline-none"
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <div className="bg-gray-50 py-10 px-6 rounded-lg shadow-md max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <p className="text-gray-800 italic leading-relaxed">"{testimonial.feedback}"</p>
                <p className="text-gray-600 font-semibold mt-4 text-right">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Call-to-Action */}
      <div className="text-center">
      <Link href="/shop">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105">
          Explore Our Collection
        </button>
        </Link>
      </div>
    </div>
  );
};

export default About;