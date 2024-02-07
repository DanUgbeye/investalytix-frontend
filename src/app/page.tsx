import Image from "next/image";

const quotes = [
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 305.42,
    changesPercentage: 0.78,
    change: 2.37,
    dayLow: 303.15,
    dayHigh: 308.19,
    yearHigh: 349.69,
    yearLow: 266.06,
    marketCap: 2314567890123,
    priceAvg50: 298.5732,
    priceAvg200: 312.18765,
    exchange: "NASDAQ",
    volume: 38765210,
    avgVolume: 54981763,
    open: 303.85,
    previousClose: 303.05,
    eps: 8.05,
    pe: 37.94,
    earningsAnnouncement: "2023-05-10T12:45:00.000+0000",
    sharesOutstanding: 7564321098,
    timestamp: 1677791001,
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 145.775,
    changesPercentage: 0.32,
    change: 0.465,
    dayLow: 143.9,
    dayHigh: 146.71,
    yearHigh: 179.61,
    yearLow: 124.17,
    marketCap: 2306437439846,
    priceAvg50: 140.8724,
    priceAvg200: 147.18594,
    exchange: "NASDAQ",
    volume: 42478176,
    avgVolume: 73638864,
    open: 144.38,
    previousClose: 145.31,
    eps: 5.89,
    pe: 24.75,
    earningsAnnouncement: "2023-04-26T10:59:00.000+0000",
    sharesOutstanding: 15821899776,
    timestamp: 1677790773,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 2789.12,
    changesPercentage: -1.15,
    change: -32.45,
    dayLow: 2778.23,
    dayHigh: 2818.49,
    yearHigh: 2985.67,
    yearLow: 2520.11,
    marketCap: 1897654321012,
    priceAvg50: 2760.875,
    priceAvg200: 2889.23456,
    exchange: "NASDAQ",
    volume: 21548763,
    avgVolume: 30251489,
    open: 2798.55,
    previousClose: 2821.57,
    eps: 78.23,
    pe: 35.68,
    earningsAnnouncement: "2023-05-15T14:30:00.000+0000",
    sharesOutstanding: 6789012345,
    timestamp: 1677791255,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 3356.78,
    changesPercentage: 1.42,
    change: 47.22,
    dayLow: 3332.56,
    dayHigh: 3378.91,
    yearHigh: 3555.99,
    yearLow: 3001.78,
    marketCap: 1456789012345,
    priceAvg50: 3310.456,
    priceAvg200: 3445.789,
    exchange: "NASDAQ",
    volume: 19876543,
    avgVolume: 27654321,
    open: 3321.34,
    previousClose: 3309.56,
    eps: 41.87,
    pe: 80.22,
    earningsAnnouncement: "2023-05-20T11:15:00.000+0000",
    sharesOutstanding: 4321098765,
    timestamp: 1677791502,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 915.67,
    changesPercentage: 2.89,
    change: 25.65,
    dayLow: 901.45,
    dayHigh: 927.88,
    yearHigh: 1105.32,
    yearLow: 780.21,
    marketCap: 987654321098,
    priceAvg50: 898.674,
    priceAvg200: 945.325,
    exchange: "NASDAQ",
    volume: 15324876,
    avgVolume: 20987654,
    open: 903.56,
    previousClose: 890.02,
    eps: 3.45,
    pe: 265.12,
    earningsAnnouncement: "2023-05-25T09:30:00.000+0000",
    sharesOutstanding: 1098765432,
    timestamp: 1677791758,
  },
  {
    symbol: "FB",
    name: "Facebook Inc.",
    price: 332.45,
    changesPercentage: -0.96,
    change: -3.21,
    dayLow: 329.87,
    dayHigh: 335.18,
    yearHigh: 354.29,
    yearLow: 301.54,
    marketCap: 876543210987,
    priceAvg50: 328.945,
    priceAvg200: 342.567,
    exchange: "NASDAQ",
    volume: 16789432,
    avgVolume: 23456789,
    open: 333.12,
    previousClose: 335.66,
    eps: 10.76,
    pe: 30.89,
    earningsAnnouncement: "2023-05-30T13:00:00.000+0000",
    sharesOutstanding: 7654321098,
    timestamp: 1677792006,
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="flex mb-4 py-8">
        {quotes.map((quote) => (
          <Quote quote={quote} key={quote.symbol} />
        ))}
      </div>

      <div className="relative w-full h-[170px]">
        <Image src={"/images/ad1.png"} alt="" fill className="object-contain" />
      </div>

      <p className="text-[#1D1D1D] text-xl font-bold mb-6">
        <span className="text-[#636363]">Quick Links:</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; European markets close slightly higher
        after central bank bonanza; Maersk shares up 8%
      </p>

      <div className="grid grid-cols-[1fr,350px]">
        <div className="">
          <h2 className="font-bold text-[#020224] text-3xl mb-6">
            Latest News
          </h2>
          <div className="flex flex-col gap-6 pb-8 mb-6 border-b border-[#DCDCDC]">
            <News />
            <News />
            <News />
            <News />
          </div>
          <button className="font-bold bg-[#FB8B1E] text-white rounded py-2 px-6">
            More Articles
          </button>
        </div>
        <div className="flex flex-col gap-14 border-l border-[#DCDCDC] pl-5 ml-5 py-10">
          <Overview />
          <Overview />
          <Overview />
          <EconomicEvent />
        </div>
      </div>
    </main>
  );
}

function News() {
  return (
    <div className="min-h-[180px] grid grid-cols-[max-content,1fr] gap-5">
      <div className="h-full max-h-[200px] w-80 relative overflow-hidden">
        <Image src="/images/news1.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="">
        <div className="flex flex-wrap justify-between items-start gap-2 xl:gap-5">
          <p className="text-xl font-extrabold text-[#020224]">
            Cardinal Health Started With Underweight at Wells Fargo, Shares Drop
            6%
          </p>
          <p className="font-medium flex items-center gap-2 flex-nowrap text-[#565555]">
            <span className="">ADBE</span>
            <span className="inline-block w-1 h-1 bg-[#0097F4]"></span>
            <span className="whitespace-nowrap">14 December, 2023</span>
          </p>
        </div>
        <p className="mt-4 lg:mt-8 text-[#4B4646]">
          Adobe system our appointment management solution streamlines
          scheduling for real estate professionals, enhancing coordination
          between agents and clients for smoother property transactions and
          improved customer experiences.
        </p>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div>
      <header className="mb-4 relative">
        <p className="font-bold text-2xl text-[#2A3037]">Gainers</p>

        <div className="absolute w-full h-[2px] bg-gradient-to-r from-[#FB8B1E] to-[#545454] from-50% to-50%"></div>
      </header>
      <div className="flex flex-col gap-6">
        {quotes.map((quote) => {
          const isPositive = quote.changesPercentage >= 0;
          return (
            <div
              key={quote.name}
              className="grid grid-cols-3 font-bold text-[#636363] border-b border-[#DCDCDC] pb-2"
            >
              <p className="">{quote.symbol}</p>
              <p
                className={`px-4 py-1 rounded  font-bold self-center text-center ${
                  isPositive
                    ? "bg-[#D6FFEF] text-[#00CA5F]"
                    : "bg-[#FEDEDF] text-[#E74C3C]"
                }`}
              >
                {isPositive && "+"}
                {quote.changesPercentage}%
              </p>
              <p className="text-end">${quote.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Quote({ quote }: { quote: (typeof quotes)[number] }) {
  const isPositive = quote.changesPercentage >= 0;
  return (
    <div className="w-[220px] border-r border-[#B3B3B3] py-2 px-3 text-sm text-[#252525] font-bold">
      <div className="flex justify-between items-center">
        <p className="">{quote.symbol}</p>
        <p className="">{quote.price}</p>
      </div>
      <div
        className={`flex justify-between py-3 ${
          isPositive ? "text-[#DC0000]" : "text-[#008133]"
        }`}
      >
        <p className=""></p>
        <p className="">
          {isPositive && "+"}
          {quote.change} {isPositive && "+"}
          {quote.changesPercentage}%
        </p>
      </div>
      <p className="text-xs">LAST | {quote.timestamp}</p>
    </div>
  );
}

function EconomicEvent() {
  const Event = (
    <div className="w-full flex gap-2">
      <div className="h-[110px] w-28 flex-shrink-0 relative overflow-hidden bg-red-500">
        <Image src="/images/news1.jpg" alt="" fill className="object-cover" />
      </div>

      <div className="">
        <p className="text-sm font-bold text-[#000000]">
          Cardinal Health Started With Underweight at Wells Fargo, Shares Drop
          6%
        </p>
        <p className="flex items-center gap-1 mt-8 text-sm text-[#565555]">
          <span className="">ADBE</span>
          <span className="inline-block w-1 h-1 bg-[#0097F4]"></span>
          <span className="whitespace-nowrap">14 December, 2023</span>
        </p>
      </div>
    </div>
  );
  return (
    <div>
      <header className="mb-4 relative">
        <p className="font-bold text-2xl text-[#2A3037]">Top Economic Event</p>

        <div className="absolute w-full h-[2px] bg-gradient-to-r from-[#FB8B1E] to-[#545454] from-50% to-50%"></div>
      </header>

      <div className="flex flex-col gap-6">
        {Event}
        {Event}
      </div>
    </div>
  );
}
