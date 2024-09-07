import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import "../cols.css";
import "../animations.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arcade",
  description: "Various webapps that do fun things.",
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
