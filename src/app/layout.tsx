import type { Metadata } from "next";
import { interFont } from "./fonts";
import GlobalComponents from "./global-components";
import "./globals.css";
import Providers from "./providers";

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
        className={`${interFont.variable} font-mulish dark:bg-black dark:text-white `}
      >
        <Providers>
          <GlobalComponents>{children}</GlobalComponents>
        </Providers>
      </body>
    </html>
  );
}
