import NavBar from "@/components/ui/NavBar";
import type { Metadata } from "next";
import { interFont } from "./fonts";
import "./globals.css";
import ThemeContextProvider from "@/store/theme/store";

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
        className={`${interFont.variable} font-mulish dark:bg-black dark:text-white`}
      >
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
