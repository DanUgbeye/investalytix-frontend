import { Container } from "@/components/container";
import NavBar from "@/components/ui/NavBar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function Custom404() {
  return (
    <>
      <NavBar />

      <Container>
        <main className="flex flex-col-reverse items-center justify-center overflow-hidden max-md:min-h-[calc(100vh_-_88px)] max-md:pb-10 md:grid md:h-[calc(100vh_-_88px)] md:grid-cols-[max-content,1fr]">
          <div className="flex flex-col items-start justify-center px-8 sm:px-[5%] md:h-full md:px-24 md:pl-0">
            <h1 className="mb-8 max-w-[10ch] text-center text-3xl font-bold leading-[1.2] text-[#0B0B0B] md:text-left md:text-5xl white-text ">
              Oops! Something went wrong
            </h1>

            <Link
              href="/"
              className="mx-auto flex w-fit items-center gap-1 border-b-2 border-[#252525] text-lg font-semibold md:mx-0"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.19727 14.9478L24.6424 14.9478C26.9394 14.9478 28.8014 16.8099 28.8014 19.1068L28.8014 20.6325C28.8014 22.9294 26.9394 24.7915 24.6424 24.7915L10.2077 24.7915"
                  stroke="#1D1D1D"
                  strokeWidth="2.08134"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.84375 10.5728C8.13521 12.2813 7.17729 13.2392 5.46875 14.9478L9.84375 19.3228"
                  stroke="#1D1D1D"
                  strokeWidth="2.08134"
                  strokeLinejoin="round"
                />
              </svg>
              Go Home
            </Link>
          </div>

          {/* <div className="relative flex justify-end overflow-hidden"> */}
            <Image
              src="/images/404.png"
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full object-contain object-center max-lg:max-w-sm lg:max-w-md xl:h-[110vh] xl:max-w-full xl:-translate-y-[10%] xl:rotate-[1deg]"
            />
            {/* <Image src="/images/404.png" alt="" fill className="w-screen h-auto object-right-top" /> */}
          {/* </div> */}
        </main>
      </Container>
    </>
  );
}
