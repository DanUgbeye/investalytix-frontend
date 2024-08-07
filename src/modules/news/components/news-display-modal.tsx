"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import useOnNavigate from "@/hooks/use-on-navigate";
import { cn } from "@/lib/utils";
import tickerUtils from "@/modules/ticker/utils";
import { useAppStore } from "@/store";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { formatDistanceToNowStrict } from "date-fns";
import { X } from "lucide-react";
import Link from "next/link";

export default function NewsDisplayModal() {
  const { currentNews, setNews } = useAppStore();

  function stopBack() {
    window.history.go(1);
    console.log("stopped");
  }

  useOnNavigate((e) => {
    if (currentNews !== undefined) {
      e.preventDefault();
      stopBack();
    }
    setNews();
  });

  return (
    <section
      className={cn("fixed inset-0", {
        hidden: currentNews === undefined,
      })}
    >
      <Dialog open={currentNews !== undefined} onOpenChange={() => setNews()}>
        <DialogPortal>
          <DialogOverlay className="z-[49]" />

          <DialogPrimitive.Content
            className={cn(
              "bottom fixed inset-x-0 top-[88px] z-50 w-full bg-white duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-bottom-1/2 dark:bg-black"
            )}
          >
            <div className="absolute right-10 top-3 z-10 flex w-full justify-center sm:top-5 xl:right-0">
              <div className="flex w-full max-w-4xl justify-end">
                <DialogClose className="rounded-full bg-main-gray-200/40 p-2 text-main-gray-600 dark:bg-main-gray-200/20 dark:text-main-gray-300">
                  <X className="size-6 sm:size-8" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </div>
            </div>

            {currentNews && (
              <section className="relative inset-0 flex h-[calc(100dvh-88px)] flex-col overflow-y-auto overflow-x-clip">
                <div className="mx-auto max-w-3xl space-y-5 bg-white px-6 py-20 sm:py-28 dark:bg-black">
                  <div className="space-y-10">
                    <DialogHeader className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-x-10">
                        <Link
                          href={currentNews.url}
                          target="_blank"
                          className="text-lg font-semibold text-primary-base"
                        >
                          {currentNews.site}
                        </Link>

                        <span className="text-sm">
                          {formatDistanceToNowStrict(
                            new Date(currentNews.publishedDate),
                            { addSuffix: true }
                          )}
                        </span>
                      </div>

                      <DialogTitle className="text-left text-3xl font-extrabold leading-tight sm:text-5xl">
                        {currentNews.title}
                      </DialogTitle>

                      <div className="flex flex-wrap gap-4 py-4">
                        {currentNews.symbols.length > 0 &&
                          currentNews.symbols.map((symbol) => (
                            <div
                              key={`current-news-${symbol}`}
                              className="flex h-fit w-fit items-center gap-2 rounded-full bg-main-gray-200/50 py-2 pl-2 pr-4 dark:bg-main-gray-800"
                            >
                              <Avatar className="size-5">
                                <AvatarImage
                                  src={tickerUtils.getTickerLogoUrl(
                                    symbol.replaceAll("$", "")
                                  )}
                                  className="h-full w-full object-cover"
                                />
                              </Avatar>

                              <span className="text-xs font-semibold">
                                {symbol}
                              </span>
                            </div>
                          ))}
                      </div>
                    </DialogHeader>

                    {currentNews.image && (
                      <Avatar className="aspect-video h-full max-h-[20rem] w-full rounded-none">
                        <AvatarImage
                          src={currentNews.image}
                          className="h-full w-full overflow-clip rounded-lg object-cover"
                        />
                      </Avatar>
                    )}

                    <DialogDescription className="whitespace-pre-line text-xl">
                      {currentNews.text}
                    </DialogDescription>
                  </div>
                </div>
              </section>
            )}
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>
    </section>
  );
}
