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
          <tr className="text-white white-text">
            <th className="bg-[#1D1D1D] p-2 text-left text-sm font-extrabold uppercase dark:border-b dark:bg-transparent">
              Symbol
            </th>
            <th className="bg-[#1D1D1D] p-2 text-left text-sm font-extrabold uppercase dark:border-b dark:bg-transparent">
              Name
            </th>
            <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase dark:border-b dark:bg-transparent">
              price
            </th>
            <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase dark:border-b dark:bg-transparent">
              change
            </th>
            <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase dark:border-b dark:bg-transparent">
              % change
            </th>
            <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase dark:border-b dark:bg-transparent">
              low
            </th>
            <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase dark:border-b dark:bg-transparent">
              high
            </th>
            <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase dark:border-b dark:bg-transparent">
              previous close
            </th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr
              key={quote.symbol}
              className="odd:bg-[#F9F9F9] dark:odd:bg-transparent"
            >
              <td className="p-2 text-left text-sm font-bold uppercase">
                {quote.symbol}
              </td>
              <td className="p-2 text-left text-sm font-bold uppercase">
                {quote.name}
              </td>
              <td className="p-2 text-right text-sm font-bold text-black white-text">
                {quote.price}
              </td>
              <td className="p-2 text-right text-sm font-bold text-black white-text">
                {quote.change}
              </td>
              <td className="p-2 text-right text-sm font-bold text-black white-text">
                {quote.changesPercentage}
              </td>
              <td className="p-2 text-right text-sm font-bold text-black white-text">
                {quote.dayLow}
              </td>
              <td className="p-2 text-right text-sm font-bold text-black white-text">
                {quote.dayHigh}
              </td>
              <td className="p-2 text-right text-sm font-bold text-black white-text">
                {quote.previousClose}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
