"use client";

import { useState } from "react";
import Link from "next/link";
import ActionButton from "./ActionButton";

export default function MyProducts({ data }: any) {
  const [displayRows, setDisplayRows] = useState(2);

  const loadMore = () => {
    setDisplayRows(displayRows + 1);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex w-full flex-col gap-5 p-4 lg:p-10">
      <h1 className="text-center text-lg font-bold text-gray-900 dark:text-gray-50 sm:text-xl md:text-left md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        All Products ({data.length})
      </h1>
      <div className="flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 sm:justify-items-center sm:gap-x-10 sm:gap-y-20 lg:grid-cols-3 2xl:grid-cols-4">
        {data.slice(0, displayRows * 4).map((product: any) => (
          <div
            key={product.id}
            className="flex flex-col justify-between gap-4 pb-5"
          >
            <Link
              className="flex justify-center"
              href={`/products/${product.id}`}
              key={product.id}
            >
              <img
                className="aspect-auto h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-60"
                width={""}
                height={""}
                src={product.image}
                alt={`Image of product: ${product.title}`}
              />
            </Link>
            <div className="flex flex-col gap-2 2xl:gap-4">
              <p className="text-center text-base font-medium text-gray-900 dark:text-white sm:text-left sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                {product.title}
              </p>
              <p className="text-center text-sm font-normal text-gray-600 dark:text-gray-400 sm:text-left sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                {product.category.charAt(0).toUpperCase() +
                  product.category.substring(1)}
              </p>
            </div>
            <p className="text-center text-base sm:text-left sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              $ {product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <ActionButton
          data={data}
          loadMore={loadMore}
          displayRows={displayRows}
          scrollToTop={scrollToTop}
        />
      </div>
    </div>
  );
}
