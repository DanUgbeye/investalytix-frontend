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
    <main className="overflow-hidden">
      <Container>
        <div className="mb-4 py-8">
          <Swiper spaceBetween={0} slidesPerView={"auto"} loop freeMode>
            {quotes.map((quote) => (
              <SwiperSlide className="!flex-shrink" key={quote.symbol}>
                <Quote quote={quote} key={quote.symbol} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative mb-4 h-[170px] w-full lg:mb-12">
          <Image src={"/images/ad1.png"} alt="" fill className="object-cover" />
        </div>

        <p className="mb-6 font-bold dark:text-[#F8F7F7] text-[#1D1D1D] lg:text-xl">
          <span className="dark:text-[#F8F7F7] text-[#636363] max-lg:block">
            Quick Links: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          European markets close slightly higher after central bank bonanza;
          Maersk shares up 8%
        </p>

        <WithSidePanel sections={SIDE_SECTIONS["ALL"]}>
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
        </WithSidePanel>
      </Container>
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
          <p className="font-extrabold dark:text-white text-[#020224] lg:text-xl">
            Cardinal Health Started With Underweight at Wells Fargo, Shares Drop
            6%
          </p>
          {!latest && (
            <p className="flex flex-nowrap items-center gap-2 text-sm font-medium dark:text-white text-[#565555] lg:text-base">
              <span className="">ADBE</span>
              <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
              <span className="whitespace-nowrap">14 December, 2023</span>
            </p>
          )}
        </div>
        <p className="mt-4 text-sm dark:text-white text-[#4B4646] lg:mt-8 lg:text-base">
          Adobe system our appointment management solution streamlines
          scheduling for real estate professionals, enhancing coordination
          between agents and clients for smoother property transactions and
          improved customer experiences.
        </p>

        {latest && (
          <p className="mt-8 flex flex-nowrap items-center gap-2 text-sm font-medium dark:text-white text-[#565555] lg:text-base">
            <span className="">ADBE</span>
            <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
            <span className="whitespace-nowrap">14 December, 2023</span>
          </p>
        )}
      </div>
    </div>
  );
}


