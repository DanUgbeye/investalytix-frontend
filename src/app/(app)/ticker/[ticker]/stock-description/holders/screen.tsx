"use client";

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
          <table className=" w-full min-w-[50rem] border text-xs dark:border-main-gray-600 ">
            <thead className="  ">
              <tr className=" border-b font-semibold dark:border-main-gray-600 dark:bg-white/20 ">
                <td className=" px-2 py-3 ">Name</td>
                <td className=" px-2 py-3 text-right ">% Total Shares Held</td>
                <td className=" px-2 py-3 text-right ">
                  % Total Assets Percentage
                </td>
                <td className=" px-2 py-3 text-right ">
                  Trend in Prev. 8 Qtrs
                </td>
                <td className=" px-2 py-3 text-right ">Current Shares</td>
                <td className=" px-2 py-3 text-right ">Change Amount</td>
                <td className=" px-2 py-3 text-right ">Change %</td>
                <td className=" px-2 py-3 text-right ">Date</td>
              </tr>
            </thead>

            <tbody className="  ">
              {TOP_HOLDERS.map((item, index) => {
                return (
                  <tr
                    key={`institutional-holder-${item.name}-${index}`}
                    className=" border-b dark:border-main-gray-600 "
                  >
                    <td className=" px-2 py-3 font-medium ">{item.name}</td>

                    <td className=" px-2 py-3 text-right ">
                      {item.totalSharesHeldPercentage.toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {item.totalAssetsPercentage.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {item.prev8QrtsTrend}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {item.currentShares.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {item.changeAmount.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {item.changePercentage.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {item.date.toDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className=" space-y-3 ">
        <h3 className=" text-2xl font-extrabold ">Top Mutual Fund Holders</h3>

        <div className=" overflow-x-auto ">
          <table className=" w-full min-w-[50rem] border text-xs dark:border-main-gray-600 ">
            <thead className="  ">
              <tr className=" border-b font-semibold dark:border-main-gray-600 dark:bg-white/20 ">
                <td className=" px-2 py-3 ">Name</td>
                <td className=" px-2 py-3 text-right ">% Total Shares Held</td>
                <td className=" px-2 py-3 text-right ">
                  % Total Assets Percentage
                </td>
                <td className=" px-2 py-3 text-right ">
                  Trend in Prev. 8 Qtrs
                </td>
                <td className=" px-2 py-3 text-right ">Current Shares</td>
                <td className=" px-2 py-3 text-right ">Change Amount</td>
                <td className=" px-2 py-3 text-right ">Change %</td>
                <td className=" px-2 py-3 text-right ">Date</td>
              </tr>
            </thead>

            <tbody className="  ">
              {TOP_HOLDERS.map((item, index) => {
                return (
                  <tr
                    key={`mutual-fund-holder-${item.name}-${index}`}
                    className=" border-b dark:border-main-gray-600 "
                  >
                    <td className=" px-2 py-3 font-medium ">{item.name}</td>

                    <td className=" px-2 py-3 text-right ">
                      {item.totalSharesHeldPercentage.toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {item.totalAssetsPercentage.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {item.prev8QrtsTrend}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {item.currentShares.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {item.changeAmount.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {item.changePercentage.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {item.date.toDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
