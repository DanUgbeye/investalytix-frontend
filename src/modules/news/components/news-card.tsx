import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNowStrict } from "date-fns";
import { HTMLAttributes } from "react";
import { News } from "../types";

export interface NewsCardProps extends HTMLAttributes<HTMLDivElement> {
  news: News;
}

export default function NewsCard(props: NewsCardProps) {
  const { className, news, ...rest } = props;

  return (
    <div
      {...rest}
      className=" group rounded-lg p-2 pr-4 duration-300 hover:bg-primary-base/10 "
    >
      <div className="  grid grid-cols-[auto,1fr] gap-4 ">
        <Avatar className=" size-24 overflow-clip rounded-lg">
          <AvatarImage
            src={news.image}
            className=" h-full w-full object-cover "
          />

          <AvatarFallback className=" h-full w-full rounded-lg bg-main-gray-200 dark:bg-main-gray-700 ">
            <span className=" truncate ">{news.symbol}</span>
          </AvatarFallback>
        </Avatar>

        <div className=" space-y-1 ">
          <div className=" grid grid-cols-[auto,auto,1fr] items-center gap-2 rounded-lg text-main-gray-600 sm:text-xs dark:text-main-gray-500 ">
            <span>
              {formatDistanceToNowStrict(new Date(news.publishedDate), {
                addSuffix: true,
              })}
            </span>

            <span className=" size-1 rounded-full bg-main-gray-600 " />

            <span className=" truncate ">{news.site}</span>
          </div>

          <div className=" line-clamp-3 font-medium text-sm ">
            {news.title}
          </div>
        </div>
      </div>
    </div>
  );
}
