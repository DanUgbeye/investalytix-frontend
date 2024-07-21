"use client";
import ColoredNumber from "@/components/ui/ColoredNumber";
import { Tab } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useFetcher from "@/hooks/useFetcher";
import { Quote } from "@/types";
import Spinner from "@/components/spinner";
import { motion } from "framer-motion";
import { useAppStore } from "@/store";
import { NewWatchlist, Watchlist } from "@/modules/watchlist/types";
import WatchlistRepository from "@/modules/watchlist/repository";
import { toast } from "react-toastify";
import { clientAPI } from "@/config/client/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { CompanyOutlook } from "@/modules/ticker/types";

// const marketMovers = ["NYSE", "EURONEXT", "NASDAQ"];
const marketMovers = [
  {
    label: "DOW",
    route: "/market/movers/dow-jones",
  },
  {
    label: "EURONEXT",
    route: "/market/movers/euronext",
  },
  {
    label: "NASDAQ",
    route: "/market/movers/nasdaq",
  },
  {
    label: "NYSE",
    route: "/market/movers/nyse",
  },
  {
    label: "S&P 500",
    route: "/market/movers/sp500",
  },
];
// const marketMovers = ["S&P", "NASDAQ", "DOW", "EUR", "ASIA", "COVID19"];

type Movers = { gainers: Quote[]; losers: Quote[] };

async function getData(route: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${route}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<{
    message: String;
    status: number;
    data: Movers;
  }>;
}

export default function MarketMovers() {
  const [movers, setMovers] = useState<Movers>();
  const [exchange, setExchange] = useState(marketMovers[0]);
  const { wrapper, data, loading } = useFetcher<{
    message: String;
    status: number;
    data: Movers;
  }>();

  function updateExchange(exchange: (typeof marketMovers)[number]) {
    setExchange(exchange);
  }

  useEffect(() => {
    wrapper(() => getData(exchange.route));
  }, [exchange]);

  useEffect(() => {
    if (data) setMovers(data.data);
  }, [data]);

  return (
    <div>
      <h1 className="white-text whitespace-nowrap text-2xl font-extrabold capitalize max-lg:mb-5">
        market movers
      </h1>

      <div className="white-text mb-12 mt-10 text-[#252525]">
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          freeMode
          // className={"flex w-full items-center gap-4 md:justify-start"}
        >
          {/* <Swiper spaceBetween={24} slidesPerView={"auto"} freeMode> */}
          {marketMovers.map((market) => (
            <SwiperSlide
              key={market.label}
              className={"z-[1] !w-fit !flex-shrink grow-0"}
            >
              <button
                className={`rounded-md px-4 py-1 text-sm font-extrabold outline-none ${
                  exchange === market
                    ? "bg-primary-base text-white dark:bg-primary-light dark:text-black"
                    : "bg-hover-focus bg-[#EBEEF3] dark:bg-[#EBEEF3]/20 dark:text-white/70"
                }`}
                onClick={() => updateExchange(market)}
              >
                {market.label}
              </button>
            </SwiperSlide>
          ))}
          {/* </Swiper> */}
        </Swiper>

        {/* content */}
        <div className="mt-10">
          <motion.div
            initial="rest"
            animate={loading ? "show" : "hide"}
            variants={{
              rest: {
                top: -50,
                opacity: 0,
              },
              show: {
                opacity: 1,
                y: -20,
              },
              hide: {
                opacity: 0,
                y: -50,
              },
            }}
            className="flex items-center justify-center"
          >
            <Spinner />
          </motion.div>
          {movers && <Panel movers={movers} />}
        </div>
      </div>
    </div>
  );
}

function Panel({ movers }: { movers: Movers }) {
  return (
    <div className="grid gap-10 pb-14 lg:grid-cols-2">
      <div className="">
        <p className="white-text mb-11 text-2xl font-bold capitalize">
          Top gainers
        </p>

        <div className="flex flex-col gap-5">
          {movers.gainers.map((mover) => (
            <Mover quote={mover} key={mover.symbol} gainer />
          ))}
        </div>
      </div>
      <div className="">
        <p className="white-text mb-11 text-2xl font-bold capitalize">
          Top decliners
        </p>

        <div className="flex flex-col gap-5">
          {movers.losers.map((mover) => (
            <Mover key={mover.symbol} quote={mover} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Mover({ quote, gainer = false }: { quote: Quote; gainer?: boolean }) {
  const watchlistRepo = new WatchlistRepository(clientAPI);
  const tickerRepo = new TickerRepository(clientAPI);
  const addFetcher = useFetcher<boolean>();
  const removeFetcher = useFetcher<boolean>();

  const {
    addToWatchList: addToWatchListStore,
    removeFromWatchlist: removeFromWatchListStore,
    watchlist,
  } = useAppStore();
  const isAuthenticated = useAppStore(({ auth }) => auth !== undefined);

  const [inWatchlist, setInWatchlist] = useState(false);

  // check if quote is already in watchlist
  useEffect(() => {
    const match = watchlist.find(
      (item) => item.symbol.toLowerCase() === quote.symbol.toLowerCase()
    );
    if (match) setInWatchlist(true);
  }, [watchlist, quote]);

  // controllers
  async function addToWatchList() {
    try {
      const outlook = await tickerRepo.getCompanyOutLook(quote.symbol);

      if (!outlook) throw new Error("Failed to add stock to watchlist");

      if (!isAuthenticated) throw new Error("You need to be logged in");

      const watchlistData: NewWatchlist = {
        stockExchange: outlook.profile.exchange,
        name: outlook.profile.companyName || "",
        symbol: outlook.profile.symbol,
        exchangeShortName: outlook.profile.exchangeShortName || "",
        currency: outlook.profile.currency || "",
        industry: outlook.profile.industry || "",
        sector: outlook.profile.sector || "",
      };

      const watchlist = await watchlistRepo.addToWatchlist(watchlistData);

      addToWatchListStore(watchlist);

      return true;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  async function removeFromWatchList() {
    try {
      if (!isAuthenticated) throw new Error("User not authenticated");

      const savedEntry = watchlist.find(
        (wt) => wt.symbol.toLowerCase() === quote.symbol.toLowerCase()
      );
      if (!savedEntry) throw new Error("Not in watchlist");

      const response = await watchlistRepo.removeFromWatchlist(savedEntry.id);
      if (response) {
        removeFromWatchListStore(savedEntry.id);
        setInWatchlist(false);
      }

      return true;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  // handlers

  async function addToWatchListHandler() {
    addFetcher.wrapper(addToWatchList);
  }

  async function removeFromWatchListHandler() {
    removeFetcher.wrapper(removeFromWatchList);
  }

  // add to watchlist
  useEffect(() => {
    if (addFetcher.data) {
      toast.success("Added to watchlist");
    }
  }, [addFetcher.data]);

  useEffect(() => {
    if (addFetcher.error) {
      toast.error(addFetcher.error);
    }
  }, [addFetcher.error]);

  // remove from watchlist
  useEffect(() => {
    if (removeFetcher.data) {
      toast.success("Removed from watchlist");
    }
  }, [removeFetcher.data]);

  useEffect(() => {
    if (removeFetcher.error) {
      toast.error(removeFetcher.error);
    }
  }, [removeFetcher.error]);

  return (
    <div className="flex items-center gap-4">
      <div className="grid grid-cols-[7ch,auto,10ch] items-center gap-1 md:grid-cols-[7ch,auto,10ch] md:gap-3">
        <p className="truncate text-sm font-bold">{quote.symbol}</p>

        {addFetcher.loading || removeFetcher.loading ? (
          <div>
            <Spinner className="h-4 w-4" />
          </div>
        ) : inWatchlist ? (
          <button
            onClick={removeFromWatchListHandler}
            className="group border border-main-red-dark outline-none hover:bg-main-red-dark focus:bg-main-red-dark dark:border-main-red-light dark:hover:bg-main-red-light dark:focus:bg-main-red-light"
          >
            <FiMinus className="text-main-red-dark group-hover:text-white group-focus:text-white dark:text-main-red-light" />
          </button>
        ) : (
          <button
            onClick={addToWatchListHandler}
            className="group border border-main-blue-base outline-none hover:bg-main-blue-base focus:bg-main-blue-base dark:border-main-blue-light dark:hover:bg-main-blue-light dark:focus:bg-main-blue-light"
          >
            <FiPlus className="text-main-blue-base group-hover:text-white group-focus:text-white dark:text-main-blue-light" />
          </button>
        )}

        <p className="truncate text-sm font-bold">{quote.name}</p>
      </div>
      <div className="grid w-full grid-cols-[max-content,1fr] gap-3">
        <ColoredNumber
          number={quote.changesPercentage ?? 0}
          percent
          colored
          className="text-right"
        />
        <div className="w-full">
          <div
            className={`h-full ${gainer ? "bg-main-green-light dark:bg-main-green-dark" : "bg-main-red-light dark:bg-main-red-dark"}`}
            style={{
              width: `${quote.changesPercentage ?? 0}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
