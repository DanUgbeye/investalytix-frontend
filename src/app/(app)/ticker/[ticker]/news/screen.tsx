"use client";

import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { News } from "@/modules/ticker/types";
import { Avatar } from "@radix-ui/react-avatar";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface NewsScreenProps {
  ticker: string;
  news: News[];
}

export default function NewsScreen(props: NewsScreenProps) {
  const { ticker, news } = props;

  const latest = news.slice(0, -4);
  const others = news.slice(-4);

  return (
    <section className=" py-12 ">
      <div className=" grid gap-10 xl:grid-cols-[3fr,2fr] ">
        {/* KEY DATA */}
        <div className=" w-full space-y-4 xl:border xl:px-4 xl:py-8 dark:border-main-gray-600 ">
          <header className="relative w-full ">
            <div className=" flex w-full py-4 ">
              <h3 className=" white-text text-2xl font-bold text-[#2A3037]">
                Latest on Apple INC
              </h3>
            </div>

            <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] from-50% to-[#545454] to-50% dark:to-white/30"></div>
          </header>

          <div className=" w-full divide-y divide-inherit dark:border-main-gray-600 ">
            {latest.map((item, index) => {
              return (
                <div key={`${item.title}-${index}`} className=" w-full py-4 ">
                  <div className="flex flex-col items-start justify-between gap-2">
                    <Link
                      href={item.url}
                      target="_blank"
                      className="white-text font-bold duration-300 hover:text-primary-light lg:text-lg"
                    >
                      {item.title}
                    </Link>

                    <div className=" text-sm text-main-gray-500 ">
                      {item.site}
                    </div>

                    <p className="white-text flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base">
                      <span className="">{item.symbol}</span>

                      <span className="inline-block size-2 bg-[#0097F4]"></span>

                      <span className="whitespace-nowrap">
                        {format(item.publishedDate, "dd MMMM, yyyy")}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-5 xl:flex xl:flex-col xl:gap-y-6 ">
          {others.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={" flex flex-col gap-3 border-[#DCDCDC] "}
            >
              <Avatar className=" aspect-video h-60 w-full rounded-none ">
                <AvatarImage
                  src={item.image}
                  alt={item.title}
                  className="aspect-video h-full w-full object-cover "
                  width={196}
                  height={110}
                />

                <AvatarFallback className=" rounded-none">
                  {item.symbol}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col flex-wrap gap-y-1 ">
                <Link
                  href={item.url}
                  target="_blank"
                  className="white-text font-bold duration-300 hover:text-primary-light lg:text-lg"
                >
                  {item.title}
                </Link>

                <div className="text-sm text-main-gray-500 ">{item.site}</div>

                <p className="white-text flex flex-nowrap items-center gap-2 text-xs font-medium text-[#565555] lg:text-base">
                  <span className="">{item.symbol}</span>

                  <span className="inline-block size-2 bg-[#0097F4]"></span>

                  <span className="whitespace-nowrap">
                    {format(item.publishedDate, "dd MMMM, yyyy")}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
