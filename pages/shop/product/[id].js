import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import categories from "../../../data/categories"; // Ensure correct path
import OrderEnquiryForm from "@/components/OrderEnquiryForm"; // Import enquiry form

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (!id) return; // Prevent running when id is undefined

        setLoading(true);
        const allProducts = Array.isArray(categories)
            ? categories.flatMap((category) =>
                Array.isArray(category.products)
                    ? category.products.map((p) => ({ ...p, category: category.name }))
                    : []
            )
            : [];

        const foundProduct = allProducts.find((p) => p.id === parseInt(id, 10));
        setProduct(foundProduct || null);
        setLoading(false);
    }, [id]);

    if (loading) {
        return <h1 className="text-center text-2xl">Loading...</h1>;
    }

    if (!product) {
        return <h1 className="text-center text-2xl text-red-500">Product Not Found</h1>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Breadcrumb Navigation */}
            <p className="text-lg font-bold font-serif text-gray-700 mb-4">
                <span
                    className="text-blue-600 cursor-pointer hover:underline transition-all"
                    onClick={() => router.push("/")}
                >
                    Home
                </span>
                <span className="mx-2 text-gray-600">{'>'}</span>
                <span
                    className="text-blue-600 cursor-pointer hover:underline transition-all"
                    onClick={() => router.push("/shop")}
                >
                    Shop
                </span>
                <span className="mx-2 text-gray-600">{'>'}</span>
                <span className="text-gray-900">{product.name}</span>
            </p>

            {/* Product Image & Details */}
            <div className="flex flex-col md:flex-row gap-8">
                <Image
                    src={product.image || "/default-placeholder.png"} // Use fallback image if missing
                    width={500}
                    height={500}
                    alt={product.name}
                    className="rounded-md object-cover"
                    priority
                />

                <div>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-gray-500 text-lg">Category: <strong>{product.category}</strong></p>
                    <p className="text-gray-500 text-lg font-semibold">₹{product.price}</p>

                    {/* Order Button */}
                    <button
                        className="mt-5 px-5 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition"
                        onClick={() => setShowForm(true)}
                    >
                        Request Order
                    </button>
                </div>
            </div>

            {/* Order Enquiry Form */}
            {showForm && <OrderEnquiryForm onClose={() => setShowForm(false)} />}
        </div>
    );
};

export default ProductDetails;
