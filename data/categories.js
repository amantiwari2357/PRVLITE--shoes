const categories = [
    {
        id: 1, 
        name: "mens-shoes",
        image: "/products/formal-shoes.jpg",
        link: "/shop/mens-shoes",
        products: [
            { id: 101, name: "Formal Shoes", price: 1499, image: "/products/mens1.jpg" },
            { id: 102, name: "Trendy Shoes", price: 799, image: "/products/mens2.jpg" },
            { id: 103, name: "Slim Shoes", price: 1299, image: "/products/mens3.jpg" },
            { id: 104, name: "Strong Shoes", price: 1300, image: "/products/mens4.jpg" },
            { id: 105, name: "Formal Shoes", price: 1499, image: "/products/mens5.jpg" },
            { id: 106, name: "Trendy Shoes", price: 799, image: "/products/mens6.jpg" },
            { id: 107, name: "Slim Shoes", price: 1299, image: "/products/mens7.jpg" },
            { id: 108, name: "Strong Shoes", price: 1300, image: "/products/mens8.jpg" }
        ]
    },
    {
        id: 2,
        name: "CasualShoes",
        image: "/products/casual1.jpg",
        link: "/shop/CasualShoes",
        products: [
            { id: 201, name: "Casual Shoes", price: 1499, image: "/products/casual1.jpg" },
            { id: 202, name: "Trendy Casuals", price: 799, image: "/products/casual2.jpg" },
            { id: 203, name: "Slim Casuals", price: 1299, image: "/products/casual3.jpg" },
            { id: 204, name: "Strong Casuals", price: 1300, image: "/products/casual4.jpg" },
            { id: 205, name: "Classic Casuals", price: 1499, image: "/products/casual5.jpg" },
            { id: 206, name: "Street Style", price: 799, image: "/products/casual6.jpg" },
            { id: 207, name: "Urban Casuals", price: 1299, image: "/products/casual7.jpg" },
            { id: 208, name: "Trendy Walkers", price: 1300, image: "/products/casual8.jpg" }
        ]
    },
    {
        id: 3,
        name: "FormalShoes",
        image: "/products/FormalShoes.jpg",
        link: "/shop/FormalShoes",
        products: [
            { id: 301, name: "Elegant Formal", price: 1499, image: "/products/formal1.jpg" },
            { id: 302, name: "Business Shoes", price: 799, image: "/products/formal2.jpg" },
            { id: 303, name: "Executive Shoes", price: 1299, image: "/products/formal3.jpg" },
            { id: 304, name: "Premium Leather", price: 1300, image: "/products/formal4.jpg" },
            { id: 305, name: "Classic Black", price: 1499, image: "/products/formal5.jpg" },
            { id: 306, name: "Luxury Brown", price: 799, image: "/products/formal6.jpg" },
            { id: 307, name: "Oxford Style", price: 1299, image: "/products/formal7.jpg" },
            { id: 308, name: "Derby Formal", price: 1300, image: "/products/formal8.jpg" }
        ]
    },
    {
        id: 4,
        name: "Sneakers",
        image: "/products/Sneaker.jpg",
        link: "/shop/Sneakers",
        products: [
            { id: 401, name: "Sport Sneakers", price: 1499, image: "/products/sneaker1.jpg" },
            { id: 402, name: "Running Sneakers", price: 799, image: "/products/sneaker2.jpg" },
            { id: 403, name: "Casual Sneakers", price: 1299, image: "/products/sneaker3.jpg" },
            { id: 404, name: "High-Top Sneakers", price: 1300, image: "/products/sneaker4.jpg" },
            { id: 405, name: "Fashion Sneakers", price: 1499, image: "/products/sneaker5.jpg" },
            { id: 406, name: "Canvas Sneakers", price: 799, image: "/products/sneaker6.jpg" },
            { id: 407, name: "Urban Sneakers", price: 1299, image: "/products/sneaker7.jpg" },
            { id: 408, name: "Trendy Sneakers", price: 1300, image: "/products/sneaker8.jpg" }
        ]
    },
    {
        id: 5,
        name: "Accessories",
        image: "/products/Accessories2.jpg",
        link: "/shop/accessories",
        products: [
            { id: 501, name: "Leather Belt", price: 1499, image: "/products/Accessories1.jpg" },
            { id: 502, name: "Classic Wallet", price: 799, image: "/products/Accessories2.jpg" },
            { id: 503, name: "Socks Pack", price: 1299, image: "/products/Accessories3.jpg" },
            { id: 504, name: "Stylish Watch", price: 1300, image: "/products/Accessories4.jpg" },
            { id: 505, name: "Formal Tie", price: 1499, image: "/products/Accessories5.jpg" },
            { id: 506, name: "Shoe Polish Kit", price: 799, image: "/products/Accessories6.jpg" },
            { id: 507, name: "Backpack", price: 1299, image: "/products/Accessories7.jpg" },
            { id: 508, name: "Cap", price: 1300, image: "/products/Accessories8.jpg" }
        ]
    },
    {
        id: 6,
        name: "womens-shoes",
        image: "/products/womens8.jpg",
        link: "/shop/womens-shoes",
        products: [
            { id: 601, name: "Heels", price: 1499, image: "/products/womens1.jpg" },
            { id: 602, name: "Flats", price: 799, image: "/products/womens2.jpg" },
            { id: 603, name: "Wedge Sandals", price: 1299, image: "/products/womens3.jpg" },
            { id: 604, name: "Casual Slippers", price: 1300, image: "/products/womens4.jpg" },
            { id: 605, name: "Formal Pumps", price: 1499, image: "/products/womens5.jpg" },
            { id: 606, name: "Fashion Boots", price: 799, image: "/products/womens6.jpg" },
            { id: 607, name: "Stylish Sneakers", price: 1299, image: "/products/womens7.jpg" },
            { id: 608, name: "Trendy Loafers", price: 1300, image: "/products/womens8.jpg" }
        ]
    },


    {
        id: 7,
        name: "SportsShoes",
        image: "/products/sports2.jpg",
        link: "/shop/SportsShoes",
        products: [
            { id: 201, name: "Formal Shoes", price: 1499, image: "/products/sports1.jpg" },
            { id: 202, name: "Trendy Shoes", price: 799, image: "/products/sports2.jpg" },
            { id: 203, name: "SliM Shoes", price: 1299, image: "/products/sports3.jpg" },
            { id: 204, name: "Strong Shoes", price: 1300, image: "/products/sports4.jpg"},
            { id: 205, name: "Formal Shoes", price: 1499, image: "/products/sports5.jpg" },
            { id: 206, name: "Trendy Shoes", price: 799, image: "/products/sports6.jpg" },
            { id: 207, name: "SliM Shoes", price: 1299, image: "/products/sports7.jpg" },
            { id: 208, name: "Strong Shoes", price: 1300, image: "/products/sports8.jpg"}
        ]
    }, 

    {
        id: 8,
        name: "Footwear",
        image: "/products/footwear6.jpg",
        link: "/shop/footwear",
        products: [
            { id: 301, name: "Formal Shoes", price: 1499, image: "/products/footwear1.jpg" },
            { id: 302, name: "Trendy Shoes", price: 799, image: "/products/footwear2.jpg" },
            { id: 303, name: "SliM Shoes", price: 1299, image: "/products/footwear3.jpg" },
            { id: 304, name: "Strong Shoes", price: 1300, image: "/products/footwear4.jpg"},
            { id: 305, name: "Formal Shoes", price: 1499, image: "/products/footwear5.jpg" },
            { id: 306, name: "Trendy Shoes", price: 799, image: "/products/footwear6.jpg" },
            { id: 307, name: "SliM Shoes", price: 1299, image: "/products/footwear7.jpg" },
            { id: 308, name: "Strong Shoes", price: 1300, image: "/products/footwear8.jpg"}
        ]
    } 
]

export default categories;
