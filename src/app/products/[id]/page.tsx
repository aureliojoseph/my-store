"use client";

import AddToCartButton from "@/components/AddToCartButton";
import Loading from "@/components/Loading";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoMdStar } from "react-icons/io";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductDisplayPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data: Product) => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col p-4">
      <Link
        className="flex items-center justify-center gap-1 pb-10 text-sm font-light text-gray-900 transition-all duration-300 ease-linear hover:text-gray-500 dark:text-gray-50 dark:hover:text-gray-300 md:justify-start lg:text-lg xl:text-xl 2xl:text-2xl"
        href={"/products"}
      >
        <IoIosArrowRoundBack className="text-base lg:text-lg xl:text-xl 2xl:text-2xl" />
        Back to Products
      </Link>

      <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-center md:px-5 xl:gap-40 2xl:justify-evenly 2xl:gap-10 2xl:px-10">
        <img
          className="aspect-auto h-60 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-auto"
          width={""}
          height={""}
          src={product.image}
          alt={`Image of product: ${product.title}`}
        />

        <div className="flex flex-col gap-2 sm:justify-center md:max-w-lg lg:max-w-xl lg:gap-3 xl:max-w-2xl 2xl:max-w-4xl 2xl:gap-5">
          <h2 className="dark:text-whitefont-medium text-center text-xl text-gray-900 dark:text-white sm:text-2xl md:text-left md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            {product.title}
          </h2>

          <p className="text-center text-sm font-normal text-gray-600 dark:text-gray-400 sm:text-base md:text-left md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            {product.category.charAt(0).toUpperCase() +
              product.category.substring(1)}
          </p>

          <div className="flex items-center justify-center gap-3 py-4 md:justify-start">
            <p className="flex items-center gap-2">
              <IoMdStar className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl" />
              <span className="border border-black/20 px-1 text-xs dark:border-white/20 sm:text-sm md:px-2 md:py-1 md:text-base lg:text-lg xl:text-xl 2xl:px-3 2xl:py-1 2xl:text-2xl">
                {product.rating.rate}
              </span>
            </p>
            <p className="text-xs font-normal text-gray-500 dark:text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              ({product.rating.count} ratings)
            </p>
          </div>

          <p className="pb-4 text-center text-base sm:text-lg md:text-start md:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl">
            {product.description.charAt(0).toUpperCase() +
              product.description.substring(1)}
          </p>

          <p className="pb-4 text-center text-lg font-bold text-gray-900 dark:text-white sm:text-xl md:text-left md:text-2xl lg:text-3xl xl:pb-6 xl:text-4xl 2xl:text-5xl">
            $ {product.price.toFixed(2)}
          </p>

          <AddToCartButton />
        </div>
      </div>
    </div>
  );
}
