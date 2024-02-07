import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const routes = [
  {
    label: "HOME",
    href: "",
  },
  {
    label: "MARKETS",
    href: "",
  },
  {
    label: "PRICING",
    href: "",
  },
  {
    label: "ABOUT US",
    href: "",
  },
];

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
      <body className={`${inter.className}`}>
        <nav className="bg-[#0B0B0B] px-5 py-3">
          <div className="py-3 flex justify-between items-center">
            <Image src="/images/logo.svg" alt="Logo" height={40} width={200} />

            <div className="flex">
              <div className="relative">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search for ticker, quotes & videos"
                  className="min-w-[320px] w-full py-3 px-5 rounded bg-[#262626] text-white placeholder:text-white font-bold text-sm"
                />
                <div className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 pl-6 bg-[#262626]">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0194 11.0787L14.8747 13.9333L13.9314 14.8767L11.0767 12.0213C10.0145 12.8728 8.69337 13.3359 7.33203 13.334C4.02003 13.334 1.33203 10.646 1.33203 7.33398C1.33203 4.02198 4.02003 1.33398 7.33203 1.33398C10.644 1.33398 13.332 4.02198 13.332 7.33398C13.334 8.69532 12.8708 10.0165 12.0194 11.0787ZM10.682 10.584C11.5281 9.71391 12.0006 8.5476 11.9987 7.33398C11.9987 4.75532 9.91003 2.66732 7.33203 2.66732C4.75336 2.66732 2.66536 4.75532 2.66536 7.33398C2.66536 9.91198 4.75336 12.0007 7.33203 12.0007C8.54565 12.0026 9.71196 11.5301 10.582 10.684L10.682 10.584Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <button className="font-bold bg-transparent text-white rounded py-2 px-8">
                Login
              </button>
              <button className="font-bold bg-[#FB8B1E] text-white rounded py-2 px-8">
                Sign Up
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <ul className="flex gap-7">
              {routes.map((route) => (
                <li>
                  <Link
                    className="uppercase font-bold text-white py-4 inline-block"
                    href={route.href}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex items-center gap-7">
              <li>
                <Link
                  className="uppercase font-bold text-white py-4 flex items-center gap-3"
                  href={""}
                >
                  watchlist
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 7.5C13.5 6.30653 13.0259 5.16193 12.182 4.31802C11.3381 3.47411 10.1935 3 9 3C7.80653 3 6.66193 3.47411 5.81802 4.31802C4.97411 5.16193 4.5 6.30653 4.5 7.5V13.5H13.5V7.5ZM15 14.0002L15.3 14.4C15.3418 14.4557 15.3672 14.522 15.3735 14.5913C15.3797 14.6607 15.3666 14.7304 15.3354 14.7927C15.3043 14.855 15.2564 14.9074 15.1971 14.944C15.1379 14.9806 15.0696 15 15 15H3C2.93036 15 2.86209 14.9806 2.80285 14.944C2.74361 14.9074 2.69573 14.855 2.66459 14.7927C2.63345 14.7304 2.62026 14.6607 2.62652 14.5913C2.63277 14.522 2.65821 14.4557 2.7 14.4L3 14.0002V7.5C3 5.9087 3.63214 4.38258 4.75736 3.25736C5.88258 2.13214 7.4087 1.5 9 1.5C10.5913 1.5 12.1174 2.13214 13.2426 3.25736C14.3679 4.38258 15 5.9087 15 7.5V14.0002ZM7.125 15.75H10.875C10.875 16.2473 10.6775 16.7242 10.3258 17.0758C9.97419 17.4275 9.49728 17.625 9 17.625C8.50272 17.625 8.02581 17.4275 7.67417 17.0758C7.32254 16.7242 7.125 16.2473 7.125 15.75Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="uppercase font-bold text-white py-4 inline-block"
                  href={""}
                >
                  subscribe
                </Link>
              </li>
              <li>
                <Link
                  className="uppercase font-bold text-white py-4 inline-block"
                  href={""}
                >
                  support
                </Link>
              </li>
              <li>
                <button className="uppercase font-bold text-white py-4 ml-6 inline-block">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3346 9.33268C13.3344 11.1869 13.8864 12.9991 14.9203 14.5383C15.9542 16.0775 17.4231 17.2738 19.1397 17.9748C20.8563 18.6757 22.7427 18.8495 24.5585 18.4739C26.3742 18.0983 28.037 17.1904 29.3346 15.866V15.9993C29.3346 23.3633 23.3653 29.3327 16.0013 29.3327C8.6373 29.3327 2.66797 23.3633 2.66797 15.9993C2.66797 8.63535 8.6373 2.66602 16.0013 2.66602H16.1346C15.2467 3.53418 14.5415 4.5713 14.0606 5.71626C13.5797 6.86121 13.3329 8.09084 13.3346 9.33268ZM5.33464 15.9993C5.33367 18.3793 6.12867 20.6913 7.59316 22.5673C9.05764 24.4433 11.1075 25.7757 13.4165 26.3524C15.7256 26.9292 18.1611 26.7171 20.3358 25.75C22.5104 24.7829 24.2991 23.1163 25.4173 21.0154C23.4272 21.4842 21.3503 21.4368 19.3837 20.8776C17.4171 20.3185 15.626 19.2661 14.1803 17.8204C12.7345 16.3747 11.6822 14.5835 11.123 12.6169C10.5639 10.6503 10.5165 8.57343 10.9853 6.58335C9.27807 7.49287 7.85035 8.84957 6.85498 10.5082C5.85961 12.1668 5.33407 14.065 5.33464 15.9993Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <section className="max-w-7xl px-10 xl:px-20">{children}</section>
        <p className="text-white bg-black font-bold py-5 text-center mt-6">
          Trusted by more than 89,300 successful value investors
        </p>
      </body>
    </html>
  );
}
