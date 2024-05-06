import quotes from "@/mock/quotes";

export default function Overview() {
  return (
    <div>
      <header className="relative mb-4">
        <p className="white-text text-2xl font-bold  text-[#2A3037]">Gainers</p>

        <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] from-50% to-[#545454] to-50% dark:to-white/30"></div>
      </header>
      <div className="flex flex-col gap-6">
        {quotes.map((quote) => {
          const isPositive = quote.changesPercentage >= 0;
          return (
            <div
              key={quote.name}
              className="white-text grid grid-cols-3 border-b border-[#DCDCDC] pb-2 font-bold text-[#636363]  dark:border-white/30"
            >
              <p className="">{quote.symbol}</p>
              <p
                className={`self-center rounded px-4  py-1 text-center font-bold ${
                  isPositive
                    ? "bg-[#D6FFEF] text-[#00CA5F]"
                    : "bg-[#FEDEDF] text-[#E74C3C]"
                }`}
              >
                {isPositive && "+"}
                {quote.changesPercentage}%
              </p>
              <p className="white-text text-end">${quote.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
