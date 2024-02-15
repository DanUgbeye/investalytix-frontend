"use client";
import { useState } from "react";
import Panels from "../../Panels";

export default function CreditRating() {
  const markets = [
    "WORLD",
    "EUROPE",
    "AMERICA",
    "ASIA",
    "AFRICA",
    "AUSTRALIA",
    "G20",
  ] as const;

  const [activeMarket, setActiveMarket] = useState<(typeof markets)[number]>(
    markets[0]
  );

  const updateActiveMarket = (mkt: typeof activeMarket) => () =>
    setActiveMarket(mkt);

  const mockCreditRatingData = [
    {
      "S&P": "AAA",
      "Moody's": "Aaa",
      DBRS: "AAA",
      TE: "100",
      Country: "Australia",
    },
    {
      "S&P": "AAA",
      "Moody's": "Aaa",
      DBRS: "AAA",
      TE: "100",
      Country: "Canada",
    },
    {
      "S&P": "AA+",
      "Moody's": "Aa1",
      DBRS: "AA",
      TE: "95",
      Country: "United States",
    },
    {
      "S&P": "AA",
      "Moody's": "Aa2",
      DBRS: "AA",
      TE: "90",
      Country: "United Kingdom",
    },
    { "S&P": "A+", "Moody's": "A1", DBRS: "A", TE: "85", Country: "Germany" },
    { "S&P": "A", "Moody's": "A2", DBRS: "A", TE: "80", Country: "Japan" },
    {
      "S&P": "BBB+",
      "Moody's": "Baa1",
      DBRS: "BBB",
      TE: "75",
      Country: "France",
    },
    {
      "S&P": "BBB",
      "Moody's": "Baa2",
      DBRS: "BBB",
      TE: "70",
      Country: "Italy",
    },
    {
      "S&P": "BBB-",
      "Moody's": "Baa3",
      DBRS: "BBB",
      TE: "65",
      Country: "China",
    },
    { "S&P": "BB+", "Moody's": "Ba1", DBRS: "BB", TE: "60", Country: "Brazil" },
    { "S&P": "BB", "Moody's": "Ba2", DBRS: "BB", TE: "55", Country: "India" },
    { "S&P": "B+", "Moody's": "B1", DBRS: "B", TE: "50", Country: "Russia" },
    {
      "S&P": "B",
      "Moody's": "B2",
      DBRS: "B",
      TE: "45",
      Country: "South Korea",
    },
    {
      "S&P": "CCC+",
      "Moody's": "Caa1",
      DBRS: "CCC",
      TE: "40",
      Country: "Mexico",
    },
    {
      "S&P": "CCC",
      "Moody's": "Caa2",
      DBRS: "CCC",
      TE: "35",
      Country: "Turkey",
    },
    {
      "S&P": "CCC-",
      "Moody's": "Caa3",
      DBRS: "CCC",
      TE: "30",
      Country: "South Africa",
    },
    {
      "S&P": "CC",
      "Moody's": "Ca",
      DBRS: "CC",
      TE: "25",
      Country: "Argentina",
    },
    { "S&P": "C", "Moody's": "C", DBRS: "C", TE: "20", Country: "Nigeria" },
    { "S&P": "D", "Moody's": "D", DBRS: "D", TE: "15", Country: "Venezuela" },
    {
      "S&P": "AAA",
      "Moody's": "Aaa",
      DBRS: "AAA",
      TE: "100",
      Country: "Singapore",
    },
    {
      "S&P": "AA",
      "Moody's": "Aa2",
      DBRS: "AA",
      TE: "90",
      Country: "Netherlands",
    },
    { "S&P": "A", "Moody's": "A2", DBRS: "A", TE: "80", Country: "Spain" },
    {
      "S&P": "BBB",
      "Moody's": "Baa2",
      DBRS: "BBB",
      TE: "70",
      Country: "Portugal",
    },
    {
      "S&P": "BB",
      "Moody's": "Ba2",
      DBRS: "BB",
      TE: "55",
      Country: "Indonesia",
    },
    { "S&P": "B", "Moody's": "B2", DBRS: "B", TE: "45", Country: "Thailand" },
    {
      "S&P": "CCC",
      "Moody's": "Caa2",
      DBRS: "CCC",
      TE: "35",
      Country: "Philippines",
    },
    { "S&P": "CC", "Moody's": "Ca", DBRS: "CC", TE: "25", Country: "Malaysia" },
    { "S&P": "D", "Moody's": "D", DBRS: "D", TE: "15", Country: "Cambodia" },
    {
      "S&P": "AAA",
      "Moody's": "Aaa",
      DBRS: "AAA",
      TE: "100",
      Country: "Norway",
    },
    { "S&P": "AA", "Moody's": "Aa2", DBRS: "AA", TE: "90", Country: "Sweden" },
  ];

  const creditRating = [
    {
      Issuer: "Company 1",
      "S&P": "AAA",
      "Moody's": "AAA",
      DBRS: "AAA",
      TE: 78,
      description: "High Grade",
    },
    {
      Issuer: "Company 2",
      "S&P": "AA+",
      "Moody's": "AA+",
      DBRS: "Aa1",
      TE: 54,
      description: "High Grade",
    },
    {
      Issuer: "Company 3",
      "S&P": "AA",
      "Moody's": "AA",
      DBRS: "Aa2",
      TE: 89,
      description: "High Grade",
    },
    {
      Issuer: "Company 4",
      "S&P": "A+",
      "Moody's": "A+",
      DBRS: "A2",
      TE: 41,
      description: "Upper Medium Grade",
    },
    {
      Issuer: "Company 5",
      "S&P": "A",
      "Moody's": "A",
      DBRS: "A3",
      TE: 63,
      description: "Upper Medium Grade",
    },
    {
      Issuer: "Company 6",
      "S&P": "BBB+",
      "Moody's": "BBB+",
      DBRS: "Baa1",
      TE: 32,
      description: "Lower Medium Grade",
    },
    {
      Issuer: "Company 7",
      "S&P": "BBB",
      "Moody's": "BBB",
      DBRS: "Baa2",
      TE: 27,
      description: "Lower Medium Grade",
    },
    {
      Issuer: "Company 8",
      "S&P": "BBB-",
      "Moody's": "BBB-",
      DBRS: "Baa3",
      TE: 19,
      description: "Non-Investment Grade",
    },
    {
      Issuer: "Company 9",
      "S&P": "BB+",
      "Moody's": "BB",
      DBRS: "Ba1",
      TE: 11,
      description: "Non-Investment Grade",
    },
    {
      Issuer: "Company 10",
      "S&P": "BB",
      "Moody's": "BB",
      DBRS: "Ba2",
      TE: 7,
      description: "Non-Investment Grade",
    },
    {
      Issuer: "Company 11",
      "S&P": "BB-",
      "Moody's": "BB-",
      DBRS: "Ba3",
      TE: 4,
      description: "Highly Speculative",
    },
    {
      Issuer: "Company 12",
      "S&P": "B+",
      "Moody's": "B",
      DBRS: "B1",
      TE: 2,
      description: "Highly Speculative",
    },
    {
      Issuer: "Company 13",
      "S&P": "B",
      "Moody's": "B",
      DBRS: "B2",
      TE: 1,
      description: "Highly Speculative",
    },
    {
      Issuer: "Company 14",
      "S&P": "B-",
      "Moody's": "B-",
      DBRS: "B3",
      TE: 0,
      description: "Highly Speculative",
    },
  ];

  return (
    <div className="">
      <div
        className={"mb-14 flex justify-between gap-4 overflow-auto px-14 py-5"}
      >
        {markets.map((mkt) => (
          <button
            key={mkt}
            onClick={updateActiveMarket(mkt)}
            className={`whitespace-nowrap rounded px-5 py-3 ${
              mkt === activeMarket
                ? "bg-primary-base text-white"
                : "bg-transparent text-[#636363]"
            }`}
          >
            {mkt}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
        <div className="">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]"></th>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                  S&P
                </th>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                  Moody&apos;s
                </th>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                  DBRS
                </th>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                  TE
                </th>
              </tr>
            </thead>
            <tbody>
              {mockCreditRatingData.map((rating, index) => (
                <tr key={rating.Country.replaceAll(" ", "-")}>
                  <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
                    {rating.Country}
                  </td>
                  <td
                    className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
                  >
                    {rating["S&P"]}
                  </td>
                  <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                    {rating["Moody's"]}
                  </td>
                  <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                    {rating["DBRS"]}
                  </td>
                  <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                    {rating["TE"]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-14 border border-[#DDDDDD] px-5 py-6">
            This page includes the sovereign debt credit rating for a list of
            countries as reported by major credit rating agencies.
          </p>

          <h2 className="mb-6 mt-10 font-bold">Credit Ratings</h2>

          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                  TE
                </th>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                  S&P
                </th>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                  Moody&apos;s
                </th>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                  DBRS
                </th>
                <th className="bg-[#F5F5F5] px-2 py-3 text-center text-sm text-[#212529]">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {creditRating.map((rating, index) => (
                <tr key={index}>
                  <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
                    {rating.TE}
                  </td>
                  <td
                    className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
                  >
                    {rating["S&P"]}
                  </td>
                  <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                    {rating["Moody's"]}
                  </td>
                  <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                    {rating["DBRS"]}
                  </td>
                  <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-center text-sm text-[#212529]">
                    {rating.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-1">
          <Panels heading={"Prices"} defaultOpen />
          <Panels heading={"Markets"} />
          <Panels heading={"Labour"} />
          <Panels heading={"GDP"} />
          <Panels heading={"Health"} />
          <Panels heading={"Money"} />
          <Panels heading={"Trade"} />
          <Panels heading={"Government"} />
          <Panels heading={"Business"} />
          <Panels heading={"Consumer"} />
          <Panels heading={"Housing"} />
          <Panels heading={"Taxes"} />
          <Panels heading={"Climate"} />
        </div>
      </div>
    </div>
  );
}
