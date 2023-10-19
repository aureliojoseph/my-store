"use client";

import { IoMdHome, IoIosSunny, IoIosMoon } from "react-icons/io";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function NavBar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between border-b border-solid border-gray-500/20 p-4 dark:border-gray-300/20">
      <Link href={"/"}>
        <IoMdHome className="cursor-pointer rounded-full p-1 text-4xl transition-all duration-300 ease-linear hover:bg-gray-300 dark:hover:bg-gray-400" />
      </Link>

      {theme === "dark" ? (
        <IoIosSunny
          className="cursor-pointer rounded-full p-1 text-4xl transition-all duration-300 ease-linear dark:hover:bg-gray-400"
          onClick={() => setTheme("light")}
        />
      ) : (
        <IoIosMoon
          className="cursor-pointer rounded-full p-1 text-4xl transition-all duration-300 ease-linear hover:bg-gray-300"
          onClick={() => setTheme("dark")}
        />
      )}
    </nav>
  );
}
