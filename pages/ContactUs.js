import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us For any Query</h2>
      
      <div className="grid md:grid-cols-3 gap-6 text-center mb-10">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold">// ADDRESS //</h3>
          <p className="mt-2">🏠 B - 314, Mangolpuri, industrial area, phase 1, New Delhi - 110083</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold">// EMAIL //</h3>
          <p className="mt-2">📧 parav0087@gmail.com</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold">// PHONE //</h3>
          <p className="mt-2">📞 +91-9321227881</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <iframe 
          className="w-full h-64 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28037.208451605564!2d77.082227!3d28.6967135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04dabae2bde7%3A0x5c3c1d3f1b0ec6f!2sMangolpuri%2C%20Delhi%2C%20110083!5e0!3m2!1sen!2sin!4v1615193545693!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        
        <form className="bg-gray-100 p-6 rounded-lg shadow-md">
          <input type="text" placeholder="Name" className="w-full p-2 mb-3 border rounded" />
          <input type="text" placeholder="Phone Number" className="w-full p-2 mb-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 mb-3 border rounded" />
          <input type="text" placeholder="Address" className="w-full p-2 mb-3 border rounded" />
          <textarea placeholder="Message" className="w-full p-2 mb-3 border rounded"></textarea>
          <button className="w-full bg-black text-white p-2 rounded">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
