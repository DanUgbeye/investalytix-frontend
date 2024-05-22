"use client";

import { tailwindCSS } from "@/lib/utils";
import useTheme from "@/store/theme/useTheme";
import { useMemo } from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const CAPITAL_STRUCTURE_DATA = [
  {
    label: "Market Cap",
    value: 2_662_325.9,
    percentage: 95.6,
    fill: "#F94144",
  },
  {
    label: "ST Debt",
    value: 17_382.0,
    percentage: 0.6,
    fill: "#F8961E",
  },
  {
    label: "LT Debt",
    value: 106_548.0,
    percentage: 3.8,
    fill: "#F3722C",
  },
  {
    label: "Pref. Eqty",
    value: 0.0,
    percentage: 0.0,
    fill: "#F9C74F",
  },
];

interface CapitalStructureScreenProps {
  ticker: string;
  capitalStructure: {
    label: string;
    value: number;
    fill: string;
    currency: string;
  }[];
}

export default function CapitalStructureScreen(
  props: CapitalStructureScreenProps
) {
  const { ticker, capitalStructure } = props;
  const { theme } = useTheme();

  const parsedData = useMemo(() => {
    let total = capitalStructure.reduce((prev, entry) => {
      return prev + entry.value;
    }, 0);

    return {
      data: capitalStructure.map((entry) => ({
        ...entry,
        percentage: entry.value / total,
      })),
      total,
    };
  }, [capitalStructure]);

  return (
    <section className=" grid gap-7 pb-12 md:grid-cols-[max-content,1fr] ">
      <div className=" w-full space-y-5 border md:min-w-80 dark:border-main-gray-600 ">
        <div className=" border-b p-4 dark:border-main-gray-600 ">
          <h4 className=" text-xl font-semibold ">
            Capital Structure ({parsedData.data[0].currency}){" "}
          </h4>
        </div>

        <div className=" grid place-items-center ">
          <PieChart width={300} height={300} className=" w-full ">
            <Pie
              data={capitalStructure}
              dataKey={"value"}
              nameKey={"label"}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={{ display: "none" }}
              labelLine={{ style: { display: "none" } }}
              fill="#fff"
            />

            <Tooltip
              wrapperClassName=" dark:bg-gray-700 white-text "
              formatter={(value, name, item, index) =>
                Number(value).toLocaleString(undefined, {
                  style: "currency",
                  currency: item.payload.currency,
                  notation: "compact"
                })
              }
              contentStyle={{
                backgroundColor:
                  theme === "dark"
                    ? tailwindCSS().theme.colors.main.gray[300]
                    : "white",
                border: "none",
              }}
            />
          </PieChart>
        </div>
      </div>

      <div className=" h-fit w-full max-w-xl overflow-x-auto border dark:border-main-gray-600 ">
        <table className=" w-full text-sm ">
          <thead>
            <tr className=" th font-bold ">
              <td className=" px-2 py-3 "></td>
              <td className=" px-2 py-3 ">VALUE</td>
              <td className=" w-fit max-w-40 px-2 py-3 text-right ">
                PERCENTAGE
              </td>
            </tr>
          </thead>

          <tbody className="  ">
            {parsedData.data.map((item, index) => {
              return (
                <tr
                  key={`${item.label}-${index}`}
                  className=" even:bg-main-gray-100 dark:border-main-gray-600  dark:even:bg-main-gray-900 "
                >
                  <td className=" font-semibold ">
                    <div className=" flex items-center gap-x-2 px-2 ">
                      <span
                        className=" size-7 "
                        style={{ backgroundColor: item.fill }}
                      />
                      <span className=" px-2 py-3 ">{item.label}</span>
                    </div>
                  </td>

                  <td className=" px-2 py-3 ">
                    {item.value.toLocaleString(undefined, {
                      style: "currency",
                      currency: item.currency,
                      maximumFractionDigits: 0,
                    })}
                  </td>

                  <td className=" w-fit max-w-40 px-2 py-3 text-right ">
                    {item.percentage.toLocaleString(undefined, {
                      maximumFractionDigits: 3,
                    })}
                    %
                  </td>
                </tr>
              );
            })}

            <tr className=" font-bold even:bg-main-gray-100 dark:border-main-gray-600 dark:even:bg-main-gray-900  ">
              <td className=" px-2 py-3 ">Total</td>
              <td className=" px-2 py-3 ">
                {parsedData.total.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                  style: "currency",
                  currency: parsedData.data[0].currency,
                })}
              </td>

              <td className=" w-fit max-w-40 px-2 py-3 text-right ">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
