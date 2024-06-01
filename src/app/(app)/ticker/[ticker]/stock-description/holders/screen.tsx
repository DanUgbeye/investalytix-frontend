"use client";

import { InstitutionalHolder, MutualFundHolder } from "@/modules/ticker/types";
import appUtils from "@/utils/app-util";

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
  institutionalHolders: InstitutionalHolder[];
  mutualFundHolders: MutualFundHolder[];
}

export default function HoldersScreen(props: HoldersScreenProps) {
  const { ticker, institutionalHolders, mutualFundHolders } = props;

  return (
    <section className=" space-y-10 pb-10 ">
      <div className=" space-y-3 ">
        <h3 className=" text-2xl font-extrabold ">Top Institutional Holders</h3>

        <div className=" overflow-x-auto border dark:border-main-gray-600 ">
          <table className=" w-full min-w-[50rem] text-xs ">
            <thead className="  ">
              <tr className=" th font-semibold dark:bg-white/20 ">
                <td className=" px-2 py-3 ">Name</td>

                <td className=" px-2 py-3 text-right ">Current Shares</td>

                <td className=" px-2 py-3 text-right ">Change Amount</td>

                <td className=" px-2 py-3 text-right ">Date</td>
              </tr>
            </thead>

            <tbody className="  ">
              {institutionalHolders.map((holder, index) => {
                return (
                  <tr
                    key={`institutional-holder-${holder.holder}-${index}`}
                    className="even:bg-main-gray-100  dark:even:bg-main-gray-900 "
                  >
                    <td className=" px-2 py-3 font-medium ">{holder.holder}</td>

                    <td className=" px-2 py-3 text-right ">
                      {appUtils.formatNumber(holder.shares, {
                        style: "decimal",
                        maximumFractionDigits: 0,
                      })}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {appUtils.formatNumber(holder.change, {
                        style: "decimal",
                        maximumFractionDigits: 0,
                      })}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {holder.dateReported.toDateString()}
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

        <div className=" overflow-x-auto border dark:border-main-gray-600 ">
          <table className=" w-full min-w-[50rem] text-xs ">
            <thead className="  ">
              <tr className=" th font-semibold dark:bg-white/20 ">
                <td className=" px-2 py-3 ">Name</td>

                <td className=" px-2 py-3 text-right ">% Total Shares Held</td>

                <td className=" px-2 py-3 text-right ">Current Shares</td>

                <td className=" px-2 py-3 text-right ">Change Amount</td>

                <td className=" px-2 py-3 text-right ">Date</td>
              </tr>
            </thead>

            <tbody className="  ">
              {mutualFundHolders.map((holder, index) => {
                return (
                  <tr
                    key={`mutual-fund-holder-${holder.holder}-${index}`}
                    className=" even:bg-main-gray-100  dark:even:bg-main-gray-900 "
                  >
                    <td className=" px-2 py-3 font-medium ">{holder.holder}</td>

                    <td className=" px-2 py-3 text-right ">
                      {appUtils.formatNumber(
                        holder.weightPercent || undefined,
                        {
                          style: "decimal",
                          maximumFractionDigits: 10,
                          minimumFractionDigits: 10,
                        }
                      )}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {appUtils.formatNumber(holder.shares, {
                        style: "decimal",
                        maximumFractionDigits: 0,
                      })}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {appUtils.formatNumber(holder.change, {
                        style: "decimal",
                        maximumFractionDigits: 0,
                      })}
                    </td>

                    <td className=" px-2 py-3 text-right ">
                      {holder.dateReported.toDateString()}
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
