import type { Metadata } from "next";
import { interFont, manropeFont, mulishFont } from "./fonts";
import GlobalComponents from "./global-components";
import "./globals.css";
import Providers from "./providers";
import Footer from "@/components/Footer";

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
        className={`${interFont.variable} ${manropeFont.variable} ${mulishFont.variable} font-manrope dark:bg-black dark:text-main-gray-300 `}
      >
        <Providers>
          <GlobalComponents>{children}</GlobalComponents>
        </Providers>

        <Footer />
      </body>
    </html>
  );
}
