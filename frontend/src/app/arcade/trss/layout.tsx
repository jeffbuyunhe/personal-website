import type { Metadata } from "next";

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
