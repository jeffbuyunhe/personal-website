import type { Metadata } from "next";

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
