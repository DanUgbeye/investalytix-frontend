"use client";

import Mapper from "@/components/mapper";

const TOP_HOLDERS = [
  {
    name: "Schwab® S&P 500 Index",
    totalSharesHeldPercentage: 2.99,
    totalAssetsPercentage: 6.37,
    prev8QrtsTrend: "Buy",
    currentShares: 465_528_962,
    changeAmount: 633_900,
    changePercentage: 13_029_843,
    date: new Date(),
  },
  {
    name: "Vanguard Information Technology ET",
    totalSharesHeldPercentage: 2.99,
    totalAssetsPercentage: 6.37,
    prev8QrtsTrend: "Buy",
    currentShares: 465_528_962,
    changeAmount: 633_900,
    changePercentage: 13_029_843,
    date: new Date(),
  },
  {
    name: "Vanguard Total Stock Mkt Idx Inv",
    totalSharesHeldPercentage: 2.99,
    totalAssetsPercentage: 6.37,
    prev8QrtsTrend: "Buy",
    currentShares: 465_528_962,
    changeAmount: 633_900,
    changePercentage: 13_029_843,
    date: new Date(),
  },
  {
    name: "Technology Select Sector SPDR® ETF",
    totalSharesHeldPercentage: 2.99,
    totalAssetsPercentage: 6.37,
    prev8QrtsTrend: "Buy",
    currentShares: 465_528_962,
    changeAmount: 633_900,
    changePercentage: 13_029_843,
    date: new Date(),
  },
  {
    name: "iShares Core S&P 500 ETF",
    totalSharesHeldPercentage: 2.99,
    totalAssetsPercentage: 6.37,
    prev8QrtsTrend: "Buy",
    currentShares: 465_528_962,
    changeAmount: 633_900,
    changePercentage: 13_029_843,
    date: new Date(),
  },
  {
    name: "Vanguard Total Stock Mkt Idx Inv",
    totalSharesHeldPercentage: 2.99,
    totalAssetsPercentage: 6.37,
    prev8QrtsTrend: "Buy",
    currentShares: 465_528_962,
    changeAmount: 633_900,
    changePercentage: 13_029_843,
    date: new Date(),
  },
];

interface HoldersScreenProps {
  ticker: string;
}

export default function HoldersScreen(props: HoldersScreenProps) {
  const { ticker } = props;

  return (
    <section className=" space-y-10 pb-10 ">
      <div className=" space-y-3 ">
        <h3 className=" text-2xl font-extrabold ">Top Institutional Holders</h3>

        <div className=" overflow-x-auto ">
          <table className=" w-full min-w-[50rem] text-xs ">
            <thead className="  ">
              <tr className=" border-b ">
                <td className=" px-2 py-3 ">Name</td>
                <td className=" px-2 py-3 text-center ">% Total Shares Held</td>
                <td className=" px-2 py-3 text-center ">
                  % Total Assets Percentage
                </td>
                <td className=" px-2 py-3 text-center ">
                  Trend in Prev. 8 Qtrs
                </td>
                <td className=" px-2 py-3 text-center ">Current Shares</td>
                <td className=" px-2 py-3 text-center ">Change Amount</td>
                <td className=" px-2 py-3 text-center ">Change %</td>
                <td className=" px-2 py-3 text-center ">Date</td>
              </tr>
            </thead>

            <tbody className="  ">
              <Mapper
                list={TOP_HOLDERS}
                component={(props) => {
                  const { item } = props;

                  return (
                    <tr className=" border-b ">
                      <td className=" px-2 py-3 font-medium ">{item.name}</td>

                      <td className=" px-2 py-3 text-center ">
                        {item.totalSharesHeldPercentage}
                      </td>

                      <td className=" px-2 py-3 text-center ">
                        {item.totalAssetsPercentage}
                      </td>

                      <td className=" px-2 py-3 text-center ">
                        {item.prev8QrtsTrend}
                      </td>

                      <td className=" px-2 py-3 text-center ">
                        {item.currentShares}
                      </td>

                      <td className=" px-2 py-3 text-center ">
                        {item.changeAmount}
                      </td>

                      <td className=" px-2 py-3 text-center ">
                        {item.changePercentage}
                      </td>

                      <td className=" px-2 py-3 text-center ">
                        {item.date.toDateString()}
                      </td>
                    </tr>
                  );
                }}
              />
            </tbody>
          </table>
        </div>
      </div>

      <div className=" space-y-3 ">
        <h3 className=" text-2xl font-extrabold ">Top Mutual Fund Holders</h3>

        <div className=" overflow-x-auto ">
          <table className=" w-full min-w-[50rem] text-xs ">
            <thead className="  ">
              <tr className=" border-b ">
                <td className=" px-2 py-3 ">Name</td>
                <td className=" px-2 py-3 text-center ">% Total Shares Held</td>
                <td className=" px-2 py-3 text-center ">
                  % Total Assets Percentage
                </td>
                <td className=" px-2 py-3 text-center ">
                  Trend in Prev. 8 Qtrs
                </td>
                <td className=" px-2 py-3 text-center ">Current Shares</td>
                <td className=" px-2 py-3 text-center ">Change Amount</td>
                <td className=" px-2 py-3 text-center ">Change %</td>
                <td className=" px-2 py-3 text-center ">Date</td>
              </tr>
            </thead>

            <tbody className="  ">
              <Mapper
                list={TOP_HOLDERS}
                component={(props) => {
                  const { item } = props;

                  return (
                    <tr className=" border-b ">
                      <td className=" px-2 py-3 font-medium ">{item.name}</td>

                      <td className=" px-2 py-3 text-center ">
                        {item.totalSharesHeldPercentage}
                      </td>

                      <td className=" px-2 py-3 text-center ">
                        {item.totalAssetsPercentage}
                      </td>

                      <td className=" px-2 py-3 text-center ">
                        {item.prev8QrtsTrend}
                      </td>

                      <td className=" px-2 py-3 text-center ">
                        {item.currentShares}
                      </td>

                      <td className=" px-2 py-3 text-center ">
                        {item.changeAmount}
                      </td>

                      <td className=" px-2 py-3 text-center ">
                        {item.changePercentage}
                      </td>

                      <td className=" px-2 py-3 text-center ">
                        {item.date.toDateString()}
                      </td>
                    </tr>
                  );
                }}
              />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
