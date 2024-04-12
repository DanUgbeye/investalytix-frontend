import { Container } from "@/components/container";
import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <NavBar />

      <Container>
        <main className="flex max-xl:min-h-[calc(100vh_-_88px)] xl:h-[calc(100vh_-_88px)] max-xl:pb-10 flex-col-reverse items-center justify-center xl:grid xl:grid-cols-[max-content,1fr] overflow-hidden">
          <div className="flex flex-col justify-center px-8 sm:px-[5%] xl:h-full xl:px-24 xl:pl-0">
            <h1 className="mb-8 max-w-[10ch] text-center text-3xl font-bold leading-[1.2] text-[#0B0B0B] md:text-5xl xl:text-left">
              Oops! Something went wrong
            </h1>

            <Link
              href="/"
              className="item-center mx-auto inline-flex w-fit gap-1 border-b-2 border-[#252525]"
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
                  stroke-width="2.08134"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.84375 10.5728C8.13521 12.2813 7.17729 13.2392 5.46875 14.9478L9.84375 19.3228"
                  stroke="#1D1D1D"
                  stroke-width="2.08134"
                  stroke-linejoin="round"
                />
              </svg>
              Go Home
            </Link>
          </div>
          <div className="relative flex justify-end overflow-hidden">
            <img
              src="/images/404.png"
              alt=""
              className="h-auto w-full object-contain object-center max-lg:max-w-sm lg:max-w-md xl:h-[110vh] xl:max-w-full xl:-translate-y-[10%]  xl:rotate-[1deg]"
            />
            {/* <Image src="/images/404.png" alt="" fill className="w-screen h-auto object-right-top" /> */}
          </div>
        </main>
      </Container>
    </>
  );
}
