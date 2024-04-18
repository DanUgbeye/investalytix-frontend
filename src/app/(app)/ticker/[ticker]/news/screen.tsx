"use client";

import Image from "next/image";

interface NewsScreenProps {
  ticker: string;
}

export default function NewsScreen(props: NewsScreenProps) {
  const { ticker } = props;

  return (
    <section className=" py-12 ">
      <div className=" grid gap-10 xl:grid-cols-[3fr,2fr] ">
        {/* KEY DATA */}
        <div className=" w-full space-y-4 xl:border xl:px-4 xl:py-8 ">
          <header className="relative w-full ">
            <div className=" flex w-full py-4 ">
              <h3 className=" text-2xl font-bold text-[#2A3037] white-text">
                Latest on Apple INC
              </h3>
            </div>

            <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] from-50% to-[#545454] to-50% dark:to-white"></div>
          </header>

          <div className=" w-full divide-y ">
            {Array(10)
              .fill("_")
              .map((_, index) => {
                return (
                  <div key={`news-summary-${index}`} className=" w-full py-4 ">
                    <div className="flex flex-col items-start justify-between gap-2">
                      <p className="font-bold text-[#020224] lg:text-lg white-text">
                        Cardinal Health Started With Underweight at Wells Fargo,
                        Shares Drop 6%
                      </p>

                      <p className="flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base white-text">
                        <span className="">ADBE</span>
                        <span className="inline-block size-2 bg-[#0097F4]"></span>
                        <span className="whitespace-nowrap">
                          14 December, 2023
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className=" grid grid-cols-[repeat(auto-fill,minmax(0,20rem))] gap-4 xl:grid-cols-1 ">
          {Array(3)
            .fill("")
            .map((_, index) => (
              <div
                key={`news-${index}`}
                className={
                  " grid grid-cols-1 grid-rows-[auto,auto] gap-5 border-[#DCDCDC] "
                }
              >
                <Image
                  src="/images/news1.jpg"
                  alt=""
                  className=" h-full w-full min-w-full object-cover "
                  width={196}
                  height={110}
                />

                <div className="flex flex-wrap items-start justify-between gap-2 ">
                  <p className="text-sm font-bold text-[#020224] lg:text-lg white-text">
                    Cardinal Health Started With Underweight at Wells Fargo,
                    Shares Drop 6%
                  </p>

                  <p className="flex flex-nowrap items-center gap-2 text-xs font-medium text-[#565555] lg:text-base white-text">
                    <span className="">ADBE</span>
                    <span className="inline-block size-2 bg-[#0097F4]"></span>
                    <span className="whitespace-nowrap">14 December, 2023</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
