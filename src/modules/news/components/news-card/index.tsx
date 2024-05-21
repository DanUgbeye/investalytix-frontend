import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { News } from "../../types";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export interface NewsCardProps extends HTMLAttributes<HTMLDivElement> {
  latest?: boolean;
  hideContent?: boolean;
  news: News;
}

export default function NewsCard(props: NewsCardProps) {
  const { className, latest, hideContent, news, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(
        " grid grid-cols-1 grid-rows-[auto,auto] gap-5 py-4 sm:grid-cols-[auto,1fr] sm:grid-rows-1 ",
        className
      )}
    >
      <Avatar className=" h-full  w-full max-w-96 rounded-none ">
        <AvatarImage
          src={news.image}
          alt=""
          className="aspect-video h-full w-full object-cover "
          width={196}
          height={110}
        />

        <AvatarFallback className="">{news.symbol}</AvatarFallback>
      </Avatar>

      <div className="">
        <div className="flex flex-col flex-wrap items-start justify-between gap-2 xl:gap-5">
          <Link
            href={news.url}
            target="_blank"
            className={cn(
              "white-text text-lg font-bold text-[#020224] hover:text-primary-light hover:underline lg:text-xl"
            )}
          >
            {news.title}
          </Link>

          <div className="  ">
            <div className="whitespace-nowrap">{news.site}</div>

            {!latest && (
              <p className="white-text flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base">
                {news.symbol && (
                  <>
                    <span className="">{news.symbol}</span>
                    <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
                  </>
                )}

                <span className="whitespace-nowrap">
                  {format(new Date(news.publishedDate), "MMMM dd, yyyy")}
                </span>
              </p>
            )}
          </div>
        </div>

        {!hideContent && (
          <p className="white-text mt-4 text-sm text-[#4B4646] lg:mt-8 lg:text-base">
            {news.text}
          </p>
        )}

        {latest && (
          <p className="white-text mt-8 flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base">
            {news.symbol && (
              <>
                <span className="">{news.symbol}</span>
                <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
              </>
            )}

            <span className="whitespace-nowrap">
              {format(new Date(news.publishedDate), "MMMM dd, yyyy")}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
