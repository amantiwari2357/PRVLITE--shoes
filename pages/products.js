import Link from "next/link";
import Image from "next/image";
// import productsData from "@/data/productsData"; // Correct path check karein
import productsData from "../data/products"; // Correct path check karein

const Products = () => {
    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">All Products</h1>
            <div className="grid grid-cols-2 gap-4">
                {Object.entries(productsData).map(([category, products]) => (
                    products.map((product) => (
                        <Link key={product.id} href={`/product/${product.attributes.slug}`} passHref>
                            <div className="border p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition">
                                <Image
                                    src={product.attributes.thumbnail.data.attributes.url}
                                    alt={product.attributes.name}
                                    width={200}
                                    height={200}
                                    className="w-full h-40 object-cover"
                                />
                                <h2 className="text-lg font-bold mt-2">{product.attributes.name}</h2>
                                <p className="text-md font-bold text-red-600">
                                    &#8377;{product.attributes.price}
                                </p>
                            </div>
                        </Link>
                    ))
                ))}
            </div>
        </div>
    );
};

export default Products;
