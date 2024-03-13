import { Container } from "@/components/container";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { interFont } from "./fonts";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";

export const metadata: Metadata = {
  title: "Investalytix",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} font-mulish dark:bg-[#23242C] dark:text-white`}>
        <NavBar />

        {children}

        <p className="mt-6 bg-black py-5 text-center font-bold text-white">
          Trusted by more than 89,300 successful value investors
        </p>
      </body>
    </html>
  );
}
