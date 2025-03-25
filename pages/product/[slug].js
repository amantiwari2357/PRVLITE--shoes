import { useRouter } from "next/router";
import productsData from "@/data/products";
import Image from "next/image";

const ProductDetail = () => {
    const router = useRouter();
    const { slug } = router.query;

    // ✅ Category-wise iteration karke product search karna
    let product = null;
    Object.values(productsData).forEach((category) => {
        category.forEach((item) => {
            if (item.attributes.slug === slug) {
                product = item;
            }
        });
    });

    // ✅ Agar product nahi mila toh 404 message
    if (!product) {
        return <h1 className="text-center text-2xl text-red-500">Product Not Found!</h1>;
    }

    return (
        <div className="max-w-2xl mx-auto p-5">
            <Image
                src={product.attributes.thumbnail.data.attributes.url}
                alt={product.attributes.name}
                width={400}
                height={400}
                className="w-full object-cover rounded-lg"
            />
            <h1 className="text-3xl font-bold mt-4">{product.attributes.name}</h1>
            <p className="text-gray-500 mt-2">{product.attributes.description}</p>
            <p className="text-2xl font-bold text-green-600 mt-2">&#8377;{product.attributes.price}</p>
            {product.attributes.original_price && (
                <p className="text-md text-gray-500 line-through">
                    &#8377;{product.attributes.original_price}
                </p>
            )}
        </div>
    );
};

export default ProductDetail;
