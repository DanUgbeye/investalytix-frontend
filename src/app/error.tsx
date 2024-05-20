"use client"; // Error components must be Client Components

import { Container } from "@/components/container";
import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error?.cause, error?.name, error?.message, "hereeeee");
  }, [error]);

  return (
    <>
      <NavBar />

      <Container>
        <main className="flex flex-col-reverse items-center justify-center overflow-hidden max-md:min-h-[calc(100vh_-_88px)] max-md:pb-10 md:grid md:h-[calc(100vh_-_88px)] md:grid-cols-[max-content,1fr]">
          <div className="flex flex-col items-start justify-center px-8 sm:px-[5%] md:h-full md:px-24 md:pl-0">
            <h1 className="white-text mb-8 max-w-[20ch] text-center text-3xl font-bold leading-[1.2] text-[#0B0B0B] md:text-left md:text-5xl ">
              {error.message === "fetch failed"
                ? "You don't have an internet connection"
                : error.message}
            </h1>

            <button
              onClick={() => reset()}
              className="mx-auto flex w-fit items-center gap-1 border-b-2 border-[#252525] text-lg font-semibold md:mx-0"
            >
              Refresh
            </button>
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
