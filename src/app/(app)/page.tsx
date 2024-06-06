"use client";

import { Container } from "@/components/container";
import useInput from "@/hooks/useInput";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import "swiper/css";

export default function Home() {
  const [query, queryOpts] = useInput("");
  const router = useRouter();

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/ticker/${query}`);
  }

  return (
    <main className="relative h-[90dvh] w-full overflow-hidden bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat lg:h-[calc(100dvh_-_100px)]">
      <div className="absolute inset-0 z-10 bg-black/50"></div>

      <Container className="mx-auto">
        <div className="z-10 flex h-full items-center">
          <div className="absolute bottom-0 right-0 h-full w-screen max-lg:left-0 md:w-screen lg:w-[600px] xl:w-[800px]">
            <Image
              src="/images/girl.png"
              fill
              className="object-contain object-bottom"
              alt=""
            />
          </div>

          <div className="z-20 text-white">
            <h1 style={{lineHeight:"1.2"}} className="text-4xl font-bold max-xs:text-center md:text-5xl xl:text-6xl max-w-sm lg:max-w-lg xl:max-w-xl">
              Integrating Macro, Technical Strategy, and Fundamentals
            </h1>

            <p className="mt-5 max-w-sm text-lg font-medium max-xs:text-center lg:max-w-lg xl:mt-8 xl:max-w-xl xl:text-xl">
              Providing data-driven investment decisions with a comprehensive
              suite of financial analysis tools.
            </p>

            <div className="relative mt-10 h-fit">
              <div className="absolute bottom-4 left-4 top-4 grid translate-x-1/2 place-content-center">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0194 11.0787L14.8747 13.9333L13.9314 14.8767L11.0767 12.0213C10.0145 12.8728 8.69337 13.3359 7.33203 13.334C4.02003 13.334 1.33203 10.646 1.33203 7.33398C1.33203 4.02198 4.02003 1.33398 7.33203 1.33398C10.644 1.33398 13.332 4.02198 13.332 7.33398C13.334 8.69532 12.8708 10.0165 12.0194 11.0787ZM10.682 10.584C11.5281 9.71391 12.0006 8.5476 11.9987 7.33398C11.9987 4.75532 9.91003 2.66732 7.33203 2.66732C4.75336 2.66732 2.66536 4.75532 2.66536 7.33398C2.66536 9.91198 4.75336 12.0007 7.33203 12.0007C8.54565 12.0026 9.71196 11.5301 10.582 10.684L10.682 10.584Z"
                    fill="black"
                  />
                </svg>
              </div>

              <form onSubmit={submitHandler}>
                <input
                  {...queryOpts}
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search for ticker, quotes & videos"
                  className="w-full rounded-full bg-white py-6 pl-16 pr-6 text-sm font-bold text-black outline-none placeholder:text-black"
                />
              </form>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
