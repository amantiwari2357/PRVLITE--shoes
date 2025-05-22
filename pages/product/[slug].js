import { useRouter } from "next/router";
import { useState } from "react";
import productsData from "@/data/products";
import Image from "next/image";
import OrderEnquiryForm from "@/components/OrderEnquiryForm"; // Import enquiry form

const ProductDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [showForm, setShowForm] = useState(false);

    // ✅ Find product category-wise
    let product = null;
    Object.values(productsData).forEach((category) => {
        category.forEach((item) => {
            if (item.attributes.slug === slug) {
                product = item;
            }
        });
    });

    // ✅ If no product found, show 404 message
    if (!product) {
        return <h1 className="text-center text-2xl text-red-500 mt-10">⚠️ Product Not Found!</h1>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Breadcrumb */}
            <p className="text-lg font-bold font-serif text-gray-700 mb-4">
                <span className="text-blue-600 cursor-pointer hover:underline transition-all"
                    onClick={() => router.push("/")}>Home</span>
                <span className="mx-2 text-gray-600">{'>'}</span>
                <span className="text-gray-900">{product.attributes.name}</span>
            </p>

            {/* Product Layout */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6">
                {/* Left - Product Image */}
                <div className="md:w-1/2">
                    <Image
                        src={product.attributes.thumbnail.data.attributes.url}
                        alt={product.attributes.name}
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover rounded-md"
                    />
                </div>

                {/* Right - Product Details */}
                <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold">{product.attributes.name}</h1>
                        <p className="text-gray-600 mt-2">{product.attributes.description}</p>

                        {/* Price Section */}
                        <div className="flex items-center mt-3">
                            <p className="text-2xl font-bold text-green-600">
                                ₹{product.attributes.price}
                            </p>
                            {product.attributes.original_price && (
                                <p className="text-md text-gray-500 line-through ml-3">
                                    ₹{product.attributes.original_price}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Order Button */}
                    <button className="px-5 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition"
                        onClick={() => setShowForm(true)}>
                        Request Order
                    </button>
                </div>
            </div>

            {/* Order Enquiry Form */}
            {showForm && <OrderEnquiryForm onClose={() => setShowForm(false)} />}
        </div>
    );
};

export default ProductDetail;