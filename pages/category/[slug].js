import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import productData from "../productData";
// import { fetchDataFromApi } from "@/utils/api";  // API Import Commented
import useSWR from "swr";
import { useRouter } from "next/router";
const maxResult = 3;

const Category = ({ category, products, slug }) => {
    const [pageIndex, setPageIndex] = useState(1);
    const { query } = useRouter();

    useEffect(() => {
        setPageIndex(1);
    }, [query]);

    // Commented out API call for SWR
    // const { data, error, isLoading } = useSWR(
    //     `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    //     fetchDataFromApi,
    //     {
    //         fallbackData: products,
    //     }
    // );

    return (
        <div className="w-full md:py-20 relative">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {category?.data?.[0]?.attributes?.name}
                    </div>
                </div>

                {/* Products Grid Start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {/* Static Product Cards for Testing */}
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                {/* Products Grid End */}

                {/* PAGINATION BUTTONS START */}
                {/* Pagination Logic Removed as API Data is Disabled */}
                {/* PAGINATION BUTTONS END */}

                {/* Loading State (Can be removed since API is disabled) */}
                {/* {isLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                        <img src="/logo.svg" width={150} />
                        <span className="text-2xl font-medium">Loading...</span>
                    </div>
                )} */}
            </Wrapper>
        </div>
    );
};

export default Category;

// getStaticPaths and getStaticProps commented as they use API data
// export async function getStaticPaths() {
//     const category = await fetchDataFromApi("/api/categories?populate=*");
//     const paths = category?.data?.map((c) => ({
//         params: {
//             slug: c.attributes.slug,
//         },
//     }));

//     return {
//         paths,
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params: { slug } }) {
//     const category = await fetchDataFromApi(
//         `/api/categories?filters[slug][$eq]=${slug}`
//     );
//     const products = await fetchDataFromApi(
//         `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
//     );

//     return {
//         props: {
//             category,
//             products,
//             slug,
//         },
//     };
// }
