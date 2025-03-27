export default function handler(req, res) {
    const { page = 1 } = req.query; // URL से Page नंबर लें
    const pageSize = 10; // एक बार में 10 प्रोडक्ट्स दिखाएं

    // ✅ Dummy Data (इसकी जगह Database से Fetch करें)
    const allProducts = Array.from({ length: 100 }).map((_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        price: (Math.random() * 1000).toFixed(2),
        image: `https://source.unsplash.com/200x200/?product&sig=${index + 1}`,
    }));

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const products = allProducts.slice(startIndex, endIndex);

    res.status(200).json(products);
}
