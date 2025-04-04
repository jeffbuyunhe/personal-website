import type { Metadata } from "next";
import { HeroUIProvider } from "@heroui/system";
import { Outfit } from "next/font/google";
import Navigation from "@/app/components/Navigation/navigation"
import Footer from "@/app/components/Footer/footer"
import "@/app/globals.css";
import "@/app/cols.css";
import "@/app/animations.css";

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
        <HeroUIProvider>
          <Navigation />
          <>{children}</>
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}
