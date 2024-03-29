import NavBar from "@/components/ui/NavBar";
import type { Metadata } from "next";
import { interFont } from "./fonts";
import "./globals.css";

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
      <body
        className={`${interFont.variable} font-mulish dark:bg-[#23242C] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
