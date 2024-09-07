import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/system";
import { Outfit } from "next/font/google";
import Navigation from "@/app/components/Navigation/navigation"
import Footer from "@/app/components/Footer/footer"
import "./globals.css";
import "./cols.css";
import "./animations.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeff He",
  description: "Jeff He's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NextUIProvider>
          <Navigation />
          <>{children}</>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
