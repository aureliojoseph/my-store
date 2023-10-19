import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function CartPage() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="pt-16 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        Coming soon...
      </h1>
      <Link
        className="flex items-center justify-center gap-1 pb-10 text-sm font-light text-gray-900 transition-all duration-300 ease-linear hover:text-gray-500 dark:text-gray-50 dark:hover:text-gray-300 lg:text-lg xl:text-xl 2xl:text-2xl"
        href={"/products"}
      >
        <IoIosArrowRoundBack className="text-base lg:text-lg xl:text-xl 2xl:text-2xl" />
        Back to Products
      </Link>
    </div>
  );
}
