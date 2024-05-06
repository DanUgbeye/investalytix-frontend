const quotes = [
  {
    actual: "4.1000",
    chg: "0.034",
    "%chg": "0.03%",
    country: "Country1",
  },
  {
    actual: "3.9610",
    chg: "0.159",
    "%chg": "0.16%",
    country: "Country2",
  },
  {
    actual: "0.6160",
    chg: "0.024",
    "%chg": "0.02%",
    country: "Country3",
  },
  {
    actual: "4.2930",
    chg: "0.130",
    "%chg": "0.13%",
    country: "Country4",
  },
  {
    actual: "2.2790",
    chg: "0.065",
    "%chg": "0.07%",
    country: "Country5",
  },
  {
    actual: "10.7600",
    chg: "0.057",
    "%chg": "0.06%",
    country: "Country6",
  },
  {
    actual: "12.2900",
    chg: "0.060",
    "%chg": "-0.06%",
    country: "Country7",
  },
  {
    actual: "7.1630",
    chg: "0.017",
    "%chg": "0.02%",
    country: "Country8",
  },
  {
    actual: "3.4410",
    chg: "0.079",
    "%chg": "0.08%",
    country: "Country9",
  },
  {
    actual: "3.9190",
    chg: "0.089",
    "%chg": "0.09%",
    country: "Country10",
  },
  {
    actual: "2.8130",
    chg: "0.063",
    "%chg": "0.06%",
    country: "Country11",
  },
  {
    actual: "9.8350",
    chg: "0.025",
    "%chg": "0.03%",
    country: "Country12",
  },
  {
    actual: "2.5120",
    chg: "0.019",
    "%chg": "-0.02%",
    country: "Country13",
  },
  {
    actual: "0.8830",
    chg: "0.055",
    "%chg": "0.06%",
    country: "Country14",
  },
  {
    actual: "5.4700",
    chg: "0.010",
    "%chg": "0.01%",
    country: "Country15",
  },
];

export default function QuotesTable() {
  return (
    <div className="border border-[#DEE2E6] p-3 text-sm">
      <div className="flex flex-wrap items-center gap-2 p-2">
        <button className="">Commodity</button>
        <button className="">Forex</button>
        <button className="">Index</button>
        <button className="">Stock</button>
        <button className="">Bond</button>
        <button className="">Crypto</button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-[#F5F5F5] dark:bg-transparent">
            <th className="py-2 pr-3"></th>
            <th className="white-text px-3 py-2 text-left font-light text-[#212529]">
              Actual
            </th>
            <th className="white-text px-3 py-2 text-left font-light text-[#212529]">
              Chg
            </th>
            <th className="white-text py-2 pl-3 text-left font-light text-[#212529]">
              %Chg
            </th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote.country.replaceAll(" ", "-")} className="font-light">
              <td className="white-text border-b border-[#DEE2E6] py-2 pr-3 text-left font-bold text-[#333333]">
                {quote.country}
              </td>
              <td className="white-text border-b border-[#DEE2E6] px-3 py-2 text-left text-[#212529]">
                {quote.actual}
              </td>
              <td className="white-text border-b border-[#DEE2E6] px-3 py-2 text-left text-[#212529]">
                {quote.chg}
              </td>
              <td className="white-text border-b border-[#DEE2E6] py-2 pl-3 text-left text-[#212529]">
                {quote["%chg"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="mt-2 text-[#333333]">More</button>
    </div>
  );
}
