import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my personal site where i showcase my",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>
        {children}
      </body>
      <Navigation />
    </html>
  );
}
