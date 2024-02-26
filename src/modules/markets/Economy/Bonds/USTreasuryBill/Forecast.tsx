import Image from "next/image";
import Panel from "../../Panel";
import { FiPlus } from "react-icons/fi";

const bonds = [
  {
    Bonds: "US 10Y",
    Yield: {
      "%": "4.10",
      Day: "0.032%",
      Month: "0.142%",
      Year: "0.723%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "UK 10Y",
    Yield: {
      "%": "1.85",
      Day: "-0.015%",
      Month: "-0.092%",
      Year: "-0.421%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "Germany 10Y",
    Yield: {
      "%": "0.10",
      Day: "0.008%",
      Month: "0.025%",
      Year: "-0.053%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "Japan 10Y",
    Yield: {
      "%": "0.15",
      Day: "0.002%",
      Month: "0.013%",
      Year: "0.084%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "Canada 10Y",
    Yield: {
      "%": "1.75",
      Day: "0.012%",
      Month: "0.085%",
      Year: "0.362%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "Australia 10Y",
    Yield: {
      "%": "2.20",
      Day: "0.025%",
      Month: "0.101%",
      Year: "0.482%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "France 10Y",
    Yield: {
      "%": "0.60",
      Day: "0.006%",
      Month: "0.035%",
      Year: "-0.196%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "Italy 10Y",
    Yield: {
      "%": "1.50",
      Day: "0.016%",
      Month: "0.073%",
      Year: "0.346%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "Spain 10Y",
    Yield: {
      "%": "0.50",
      Day: "0.003%",
      Month: "0.021%",
      Year: "-0.143%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "China 10Y",
    Yield: {
      "%": "2.95",
      Day: "0.028%",
      Month: "0.122%",
      Year: "0.602%",
    },
    Date: "Jan/17",
  },
];

const related = [
  {
    related: "United States GDP Growth Rate",
    last: "4.90",
    previous: "2.10",
    unit: "percent",
    reference: "Sep 2023",
  },
  {
    related: "United States Inflation Rate",
    last: "3.40",
    previous: "3.10",
    unit: "percent",
    reference: "Dec 2023",
  },
  {
    related: "United States Fed Funds Interest Rate",
    last: "5.50",
    previous: "5.50",
    unit: "percent",
    reference: "Dec 2023",
  },
  {
    related: "United States Unemployment Rate",
    last: "3.70",
    previous: "3.70",
    unit: "percent",
    reference: "Dec 2023",
  },
];

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

export default function Forecast() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="">
        <p className="mb-8 text-[#636363]">
          The yield on the 10-year US Treasury note rose to the 4.1% mark on
          Wednesday, the highest in over one month, as strong retail sales
          figures magnified recent pushbacks against imminent interest rate cuts
          by the Federal Reserve. Retail activity expanded by 0.6% from the
          previous month in December, above market expectations of a 0.4%
          increase to extend evidence of the resilience of US consumers to
          higher interest rates. Earlier, FOMC member Waller pushed back against
          the need for rate cuts, citing a strong labor market and economic
          activity. Funds futures show that roughly 60% of the market has
          positioned for a rate cut by March, considerably lower than levels at
          the start of the year.
        </p>

        <div className="relative mb-8 h-[500px] w-full">
          <Image src="/images/chart1.png" fill alt="" />
        </div>

        <BondsTable />

        <div className="h-8 w-full"></div>
        <RelatedTable />

        <div className="h-8 w-full"></div>
        <BondNoteYield />
      </div>
      <div className="">
        <QuotesTable />

        <div className="mt-8 flex flex-col gap-1">
          <Panel heading={"Prices"} defaultOpen />
          <Panel heading={"Markets"} />
          <Panel heading={"Labour"} />
          <Panel heading={"GDP"} />
          <Panel heading={"Health"} />
          <Panel heading={"Money"} />
          <Panel heading={"Trade"} />
          <Panel heading={"Government"} />
          <Panel heading={"Business"} />
          <Panel heading={"Consumer"} />
          <Panel heading={"Housing"} />
          <Panel heading={"Taxes"} />
          <Panel heading={"Climate"} />
        </div>
      </div>
    </div>
  );
}

function BondsTable() {
  return (
    <table className="w-full border border-[#DEE2E6]">
      <thead>
        <tr>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            Bonds
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            Yield
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]"></th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            Day
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            Month
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            Year
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        {bonds.map((bond, index) => (
          <tr key={bond.Bonds.replaceAll(" ", "-")}>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
              {bond.Bonds}
            </td>
            <td
              className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
            >
              {bond.Yield["%"]}
            </td>
            <td
              className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
            ></td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {bond.Yield.Day}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {bond.Yield.Month}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {bond.Yield.Year}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {bond.Date}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function RelatedTable() {
  return (
    <div className="border border-[#DEE2E6]">
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
              Related
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
              Last
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
              Previous
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
              Unit
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
              Reference
            </th>
          </tr>
        </thead>
        <tbody>
          {related.map((entry, index) => (
            <tr key={entry.related.replaceAll(" ", "-")}>
              <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
                {entry.related}
              </td>
              <td
                className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
              >
                {entry.last}
              </td>

              <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                {entry.previous}
              </td>
              <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                {entry.unit}
              </td>
              <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                {entry.reference}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-[#F5F5F5] px-2 py-3">
        <button className="border border-[#CCCCCC] bg-white p-2">
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

function BondNoteYield() {
  return (
    <div className="border border-[#DEE2E6]">
      <div className="bg-[#F5F5F5] px-2 py-3 text-sm text-[#212529]">
        US 10 Year Treasury Bond Note Yield
      </div>
      <p className="p-4 text-sm text-[#212529]">
        Generally, a government bond is issued by a national government and is
        denominated in the country`s own currency. Bonds issued by national
        governments in foreign currencies are normally referred to as sovereign
        bonds. The yield required by investors to loan funds to governments
        reflects inflation expectations and the likelihood that the debt will be
        repaid.
      </p>

      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="bg-[#F5F5F5] py-3 pl-4 pr-2 text-left text-sm text-[#212529]">
              Actual
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
              Previous
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
              Highest
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
              Lowest
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
              Dates
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
              Unit
            </th>
            <th className="bg-[#F5F5F5] py-3 pl-2 pr-4 text-left text-sm text-[#212529]">
              Frequency
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 pl-4 pr-2 text-left text-sm text-[#212529]">
              4.10
            </td>
            <td className="px-2 py-3 text-left text-sm text-[#212529]">4.07</td>
            <td className="px-2 py-3 text-left text-sm text-[#212529]">
              15.82
            </td>
            <td className="px-2 py-3 text-left text-sm text-[#212529]">0.32</td>
            <td className="px-2 py-3 text-left text-sm text-[#212529]">
              1912 - 2024
            </td>
            <td className="py-3 pl-2 pr-4 text-left text-sm text-[#212529]">
              percent
            </td>
            <td className="px-2 py-3 text-left text-sm text-[#212529]">
              Daily
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function QuotesTable() {
  return (
    <div className="border border-[#DEE2E6] text-sm p-3">
      <div className="flex items-center flex-wrap gap-2 p-2">
        <button className="">Commodity</button>
        <button className="">Forex</button>
        <button className="">Index</button>
        <button className="">Stock</button>
        <button className="">Bond</button>
        <button className="">Crypto</button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-[#F5F5F5] pr-3 py-2"></th>
            <th className="bg-[#F5F5F5] px-3 py-2 text-left font-light text-[#212529]">
              Actual
            </th>
            <th className="bg-[#F5F5F5] px-3 py-2 text-left font-light text-[#212529]">
              Chg
            </th>
            <th className="bg-[#F5F5F5] pl-3 py-2 text-left font-light text-[#212529]">
              %Chg
            </th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote.country.replaceAll(" ", "-")} className="font-light">
              <td className="border-b border-[#DEE2E6] pr-3 py-2 text-left font-bold text-[#333333]">
                {quote.country}
              </td>
              <td className="border-b border-[#DEE2E6] px-3 py-2 text-left text-[#212529]">
                {quote.actual}
              </td>
              <td className="border-b border-[#DEE2E6] px-3 py-2 text-left text-[#212529]">
                {quote.chg}
              </td>
              <td className="border-b border-[#DEE2E6] pl-3 py-2 text-left text-[#212529]">
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
