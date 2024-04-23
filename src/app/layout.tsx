import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nvabar from "../components/Nvabar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Butatech solution",
  description: "Integrity, Speed and Quality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nvabar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
