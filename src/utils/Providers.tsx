"use client";

import Loading from "@/components/Loading";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Providers({ children }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add("dark");
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      {children}
    </ThemeProvider>
  );
}
