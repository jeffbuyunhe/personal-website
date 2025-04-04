import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/app/globals.css";
import "@/app/cols.css";
import "@/app/animations.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toronto Record Store Scraper",
  description: "Scrapes information about records from popular Toronto record stores for easy comparison.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
