import type { Metadata } from "next";
import "./globals.css";
import { interFont } from "./fonts";

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
      <body className={` ${interFont.variable} `}>{children}</body>
    </html>
  );
}

