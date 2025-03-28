import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import categories from "../../../data/categories";

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            const allProducts = categories.flatMap((category) =>
                category.products ? category.products.map((p) => ({ ...p, category: category.name })) : []
            );

            const foundProduct = allProducts.find((p) => p.id === Number(id));
            setProduct(foundProduct || null);
        }
    }, [id]);

    if (!product) {
        return <h1 className="text-center text-2xl">Product Not Found</h1>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Breadcrumb */}
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
                    onClick={() => router.push(`/shop`)}
                >
                    Shop
                </span>
                <span className="mx-2 text-gray-600">{'>'}</span>
                <span className="text-gray-900">{product.name}</span>
            </p>

            {/* Product Image and Details */}
            <div className="flex flex-col md:flex-row gap-8">
                <Image src={product.image} width={500} height={500} alt={product.name} className="rounded-md" />
                
                <div>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-gray-500 text-lg">Category: {product.category}</p>
                    <p className="text-gray-500 text-lg font-semibold">₹{product.price}</p>

                    {/* Order Buttons */}
                    <div className="mt-5 flex gap-3">
                        <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                            Buy Now
                        </button>
                        <button className="px-5 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition">
                            Request Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
