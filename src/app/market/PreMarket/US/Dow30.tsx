import quotes from "@/mock/quotes";

export default function Dow30() {
  return (
    <>
      <header className="mb-5">
        <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
          DOW 30 CHART
        </h2>
      </header>
      <table className="w-full table-auto">
        <thead>
          <tr className="">
            <th className="bg-[#1D1D1D] p-2 text-left text-sm font-extrabold uppercase text-white">
              Symbol
            </th>
            <th className="bg-[#1D1D1D] p-2 text-left text-sm font-extrabold uppercase text-white">
              Name
            </th>
            <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase text-white">
              price
            </th>
            <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase text-white">
              change
            </th>
            <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase text-white">
              % change
            </th>
            <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase text-white">
              low
            </th>
            <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase text-white">
              high
            </th>
            <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase text-white">
              previous close
            </th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote.symbol} className="odd:bg-[#F9F9F9]">
              <td className="p-2 text-left text-sm font-bold uppercase">
                {quote.symbol}
              </td>
              <td className="p-2 text-left text-sm font-bold uppercase">
                {quote.name}
              </td>
              <td className="p-2 text-right text-sm font-bold text-black">
                {quote.price}
              </td>
              <td className="p-2 text-right text-sm font-bold text-black">
                {quote.change}
              </td>
              <td className="p-2 text-right text-sm font-bold text-black">
                {quote.changesPercentage}
              </td>
              <td className="p-2 text-right text-sm font-bold text-black">
                {quote.dayLow}
              </td>
              <td className="p-2 text-right text-sm font-bold text-black">
                {quote.dayHigh}
              </td>
              <td className="p-2 text-right text-sm font-bold text-black">
                {quote.previousClose}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
