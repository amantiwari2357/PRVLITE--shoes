import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import categories from "../../../data/categories"; // ✅ Import categories


const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            // ✅ Extract all products from categories
            const allProducts = categories.flatMap((category) =>
                category.products ? category.products.map((p) => ({ ...p, category: category.name })) : []
            );

            // ✅ Find the product with matching ID
            const foundProduct = allProducts.find((p) => p.id === Number(id));
            setProduct(foundProduct || null);
        }
    }, [id]);

    if (!product) {
        return <h1 className="text-center text-2xl">Product Not Found</h1>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Image src={product.image} width={500} height={500} alt={product.name} className="rounded-md"/>
            <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
            <p className="text-gray-500 text-lg">Category: {product.category}</p>
            <p className="text-gray-500 text-lg">₹{product.price}</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md">Buy Now</button>
        </div>
    );
};

export default ProductDetails;
