import quotes from "@/mock/quotes";

export default function Quotes() {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="bg-[#1D1D1D] p-2 text-left text-sm font-extrabold capitalize text-white">
            Name
          </th>
          <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase text-white">
            last
          </th>
          <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase text-white">
            chg
          </th>
          <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase text-white">
            chg%
          </th>
        </tr>
      </thead>
      <tbody>
        {quotes.map((quote) => (
          <tr key={quote.symbol} className="odd:bg-[#F9F9F9]">
            <td className="p-2 text-left text-sm font-bold uppercase">
              {quote.symbol}
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}
