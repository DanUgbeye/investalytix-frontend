import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

export interface NewsCardProps extends HTMLAttributes<HTMLDivElement> {
  latest?: boolean;
  hideContent?: boolean;
}

export default function NewsCard(props: NewsCardProps) {
  const { className, latest, hideContent, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(
        " grid grid-cols-1 grid-rows-[auto,auto] gap-5 py-4 sm:grid-cols-[auto,auto] sm:grid-rows-1 ",
        className
      )}
    >
      <Image
        src="/images/news1.jpg"
        alt=""
        className="aspect-video h-full w-full max-w-96 object-cover "
        width={196}
        height={110}
      />

      <div className="">
        <div className="flex flex-wrap items-start justify-between gap-2 xl:gap-5">
          <p className="white-text font-bold text-[#020224] lg:text-lg">
            Cardinal Health Started With Underweight at Wells Fargo, Shares Drop
            6%
          </p>

          {!latest && (
            <p className="white-text flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base">
              <span className="">ADBE</span>
              <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
              <span className="whitespace-nowrap">14 December, 2023</span>
            </p>
          )}
        </div>

        {!hideContent && (
          <p className="white-text mt-4 text-sm text-[#4B4646] lg:mt-8 lg:text-base">
            Adobe system our appointment management solution streamlines
            scheduling for real estate professionals, enhancing coordination
            between agents and clients for smoother property transactions and
            improved customer experiences.
          </p>
        )}

        {latest && (
          <p className="white-text mt-8 flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base">
            <span className="">ADBE</span>
            <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
            <span className="whitespace-nowrap">14 December, 2023</span>
          </p>
        )}
      </div>
    </div>
  );
}
