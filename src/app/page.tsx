import Link from "next/link";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function Home() {
  return (
    <main className="w-full bg-white p-8 dark:bg-black md:p-14 lg:p-20">
      <div className="flex flex-col items-center justify-center gap-8 font-mono sm:gap-12">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Welcome to My Store!
        </h1>
        <p className="flex flex-col items-center text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Check Out our new stuff
          <IoIosArrowRoundDown className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl" />
        </p>
        <Link href={"/products"}>
          <button className="rounded bg-gray-800 px-6 py-3 text-base text-white transition-all duration-300 ease-linear hover:bg-gray-600 dark:bg-gray-400 dark:text-gray-950 dark:hover:bg-gray-200 dark:hover:text-black sm:text-lg md:px-8 md:py-4 md:text-xl  lg:text-2xl xl:px-10 xl:py-5 xl:text-3xl 2xl:px-12 2xl:py-6 2xl:text-4xl">
            Show me!
          </button>
        </Link>
      </div>
    </main>
  );
}
