"use client";
import { Container } from "@/components/container";
import Quote from "@/components/ui/Quote";
import quotes from "@/mock/quotes";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <main className="relative max-lg:gap-20 flex flex-col-reverse items-center justify-evenly overflow-hidden bg-[url('/images/bg.jpg')] bg-cover px-8 max-lg:py-10 sm:px-[5%] lg:flex-row xl:px-24">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="z-10">
        <h1 className="text-5xl font-bold leading-[1.2em] text-white">
          Look first/
          <br />
          Then leap.
        </h1>
        <p className="mt-2 max-w-xs text-lg text-white">
          The best trades require research, then commitment.
        </p>

        <div className="relative mt-10 h-fit">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for ticker, quotes & videos"
            className="w-full min-w-[320px] rounded-full bg-white px-8 py-6 text-sm font-bold text-black placeholder:text-black"
          />
          <div className="absolute bottom-4 right-0 top-5 grid -translate-x-1/2 place-content-center bg-white pl-6">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0194 11.0787L14.8747 13.9333L13.9314 14.8767L11.0767 12.0213C10.0145 12.8728 8.69337 13.3359 7.33203 13.334C4.02003 13.334 1.33203 10.646 1.33203 7.33398C1.33203 4.02198 4.02003 1.33398 7.33203 1.33398C10.644 1.33398 13.332 4.02198 13.332 7.33398C13.334 8.69532 12.8708 10.0165 12.0194 11.0787ZM10.682 10.584C11.5281 9.71391 12.0006 8.5476 11.9987 7.33398C11.9987 4.75532 9.91003 2.66732 7.33203 2.66732C4.75336 2.66732 2.66536 4.75532 2.66536 7.33398C2.66536 9.91198 4.75336 12.0007 7.33203 12.0007C8.54565 12.0026 9.71196 11.5301 10.582 10.684L10.682 10.584Z"
                fill="#262626"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="h-[50vh] lg:h-[calc(100vh_-_100px)]">
        <div className="relative h-full w-[600px]">
          <Image
            src="/images/girl.png"
            fill
            alt=""
            className="object-contain"
          />
        </div>
      </div>
      {/* <Container> */}
      {/* <div className="mb-4 py-8">
          <Swiper spaceBetween={0} slidesPerView={"auto"} loop freeMode>
            {quotes.map((quote) => (
              <SwiperSlide className="!flex-shrink" key={quote.symbol}>
                <Quote quote={quote} key={quote.symbol} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

      {/* <div className="relative mb-4 h-[170px] w-full lg:mb-12">
          <Image src={"/images/ad1.png"} alt="" fill className="object-cover" />
        </div> */}

      {/* <p className="mb-6 font-bold dark:text-[#F8F7F7] text-[#1D1D1D] lg:text-xl">
          <span className="dark:text-[#F8F7F7] text-[#636363] max-lg:block">
            Quick Links: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          European markets close slightly higher after central bank bonanza;
          Maersk shares up 8%
        </p> */}

      {/* <WithSidePanel sections={SIDE_SECTIONS["ALL"]}>
          <div className="">
            <h2 className="font-bold text-[#020224] lg:text-3xl">
              Latest News
            </h2>
            <div className="mb-6 flex flex-col">
              <News latest />
              <News />
              <News />
              <News />
            </div>
          </div>
        </WithSidePanel> */}
      {/* </Container> */}
    </main>
  );
}

function News({ latest = false }: { latest?: boolean }) {
  return (
    <div className="grid grid-cols-1 grid-rows-[200px,1fr] gap-5 border-b border-[#DCDCDC] py-4 lg:grid-cols-[max-content,1fr] lg:grid-rows-[auto,auto] lg:py-8">
      <div
        className={`relative h-full max-h-[200px] w-full overflow-hidden lg:w-80 ${latest ? "lg:w-96" : "w-80"}`}
      >
        <Image src="/images/news1.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="">
        <div className="flex flex-wrap items-start justify-between gap-2 xl:gap-5">
          <p className="font-extrabold text-[#020224] lg:text-xl dark:text-white">
            Cardinal Health Started With Underweight at Wells Fargo, Shares Drop
            6%
          </p>
          {!latest && (
            <p className="flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base dark:text-white">
              <span className="">ADBE</span>
              <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
              <span className="whitespace-nowrap">14 December, 2023</span>
            </p>
          )}
        </div>
        <p className="mt-4 text-sm text-[#4B4646] lg:mt-8 lg:text-base dark:text-white">
          Adobe system our appointment management solution streamlines
          scheduling for real estate professionals, enhancing coordination
          between agents and clients for smoother property transactions and
          improved customer experiences.
        </p>

        {latest && (
          <p className="mt-8 flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base dark:text-white">
            <span className="">ADBE</span>
            <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
            <span className="whitespace-nowrap">14 December, 2023</span>
          </p>
        )}
      </div>
    </div>
  );
}
