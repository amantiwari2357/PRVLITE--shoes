'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function QuickEnquiry() {
  const [formData, setFormData] = useState({
    product: '',
    name: '',
    email: '',
    country: 'India',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-5xl mx-auto bg-gray-100 rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
      {/* Left Section: Form */}
      <div className="md:w-2/3 p-8">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Quick <span className="text-blue-800">Enquiry</span>
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            name="product" 
            placeholder="Product / Service Looking for" 
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-500 outline-none" 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-500 outline-none" 
            onChange={handleChange} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-500 outline-none" 
            onChange={handleChange} 
          />
          <select 
            name="country" 
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-500 outline-none" 
            onChange={handleChange}
          >
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
          {/* Phone Input Field */}
          <div className="col-span-2 flex items-center border rounded overflow-hidden">
            <span className="p-3 bg-gray-200 border-r">+91</span>
            <input 
              type="text" 
              name="phone" 
              placeholder="Phone / Mobile" 
              className="p-3 w-full outline-none focus:ring-2 focus:ring-blue-500" 
              onChange={handleChange} 
            />
          </div>
          {/* Message Field */}
          <textarea 
            name="message" 
            placeholder="Leave a Message for us" 
            className="p-3 border rounded w-full col-span-2 h-24 focus:ring-2 focus:ring-blue-500 outline-none resize-none" 
            onChange={handleChange}
          ></textarea>
          {/* Submit Button */}
          <button 
            type="submit" 
            className="col-span-2 bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Section: Image */}
      <div className="md:w-1/3 hidden md:flex items-center justify-center bg-white p-6">
        <Image 
          src="/products/PRVLITE.png" 
          width={400} 
          height={300} 
          alt="Laptop" 
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
