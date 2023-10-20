import Link from "next/link";
import { IoIosCart } from "react-icons/io";

export default function AddToCartButton() {
  return (
    <Link
      className="flex justify-center text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl"
      href={"/cart"}
    >
      <button className="flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-gray-950 p-5 text-white transition-all duration-300 ease-linear hover:bg-gray-800 dark:bg-gray-50 dark:text-black dark:hover:bg-gray-300 md:max-w-full lg:py-8 xl:py-10 2xl:py-12">
        Add to cart
        <span>
          <IoIosCart />
        </span>
      </button>
    </Link>
  );
}
