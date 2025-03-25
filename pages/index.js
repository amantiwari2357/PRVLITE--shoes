import { useState } from "react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import "@fontsource/bebas-neue";
import NewsLetter from "@/components/NewsLetter";
// import QuickEnquiry from "@/components/QuickEnquiry";
import NewArrival from "@/components/NewArrival";
import ShopByCategory from "@/components/ShopByCategory";
import AllProducts from "../components/products/product1";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleCategoryClick = (link) => {
        setLoading(true);
        setTimeout(() => {
            router.push(link);
        }, 1500);
    };

    return (
        <main>
                <HeroBanner />
                <Wrapper>
                <AllProducts/>
                <ShopByCategory/>
                <NewArrival/>
                {/* <QuickEnquiry/> */}
                <NewsLetter />
               </Wrapper>
        </main>
    );
}
