"use client";

import Mapper from "@/components/mapper";
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

interface StockDescriptionCapitalStructureScreenProps {
  ticker: string;
}

export default function StockDescriptionCapitalStructureScreen(
  props: StockDescriptionCapitalStructureScreenProps
) {
  const { ticker } = props;

  return (
    <section className=" grid gap-5 lg:grid-cols-[max-content,1fr] ">
      <div className=" w-full space-y-5 lg:min-w-60 border ">
        <div className=" space-y-1 p-4 border-b ">
          <h4 className=" text-xl font-bold ">Capital Structure </h4>
          <p className=" ">Millions in USD</p>
        </div>

        <div className=" grid place-items-center border-b ">
          <PieChart width={300} height={300} className=" w-full ">
            <Pie
              data={CAPITAL_STRUCTURE_DATA}
              dataKey={"value"}
              nameKey={"label"}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={{ display: "none" }}
              labelLine={{ style: { display: "none" } }}
              fill="#fff"
            />

            <Tooltip wrapperClassName=" dark:bg-gray-700 dark:text-white " />
          </PieChart>
        </div>
      </div>

      <div className="  ">
        <table className=" w-full text-sm font-bold ">
          <thead>
            <tr className=" border-b ">
              <td className=" px-2 py-3 "></td>
              <td className=" px-2 py-3 ">VALUE</td>
              <td className=" w-fit max-w-40 px-2 py-3 text-right ">
                PERCENTAGE
              </td>
            </tr>
          </thead>

          <tbody className="  ">
            <Mapper
              list={[...CAPITAL_STRUCTURE_DATA]}
              component={(props) => {
                const { item } = props;

                return (
                  <tr className=" odd:bg-neutral-100 dark:odd:bg-transparent ">
                    <td className="  ">
                      <div className=" flex items-center gap-x-2 ">
                        <span
                          className=" size-6"
                          style={{ backgroundColor: item.fill }}
                        />
                        <span className=" px-2 py-3 ">{item.label}</span>
                      </div>
                    </td>
                    <td className=" px-2 py-3 ">
                      {item.value.toLocaleString()}
                    </td>
                    <td className=" w-fit max-w-40 px-2 py-3 text-right ">
                      {item.percentage}%
                    </td>
                  </tr>
                );
              }}
            />

            <tr className=" odd:bg-neutral-100 dark:odd:bg-transparent ">
              <td className=" px-2 py-3 ">Total</td>
              <td className=" px-2 py-3 ">
                {CAPITAL_STRUCTURE_DATA.reduce((acc, current) => {
                  return acc + current.value;
                }, 0).toLocaleString()}
              </td>
              <td className=" w-fit max-w-40 px-2 py-3 text-right ">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
