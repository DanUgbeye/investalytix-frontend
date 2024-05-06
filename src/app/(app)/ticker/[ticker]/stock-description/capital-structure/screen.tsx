"use client";

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
}

export default function CapitalStructureScreen(
  props: CapitalStructureScreenProps
) {
  const { ticker } = props;

  return (
    <section className=" grid gap-7 pb-12 md:grid-cols-[max-content,1fr] ">
      <div className=" w-full space-y-5 border md:min-w-80 dark:border-main-gray-600 ">
        <div className=" space-y-1 border-b p-4 dark:border-main-gray-600 ">
          <h4 className=" text-xl font-semibold ">Capital Structure </h4>
          <p className=" ">Millions in USD</p>
        </div>

        <div className=" grid place-items-center ">
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

            <Tooltip wrapperClassName=" dark:bg-gray-700 white-text " />
          </PieChart>
        </div>
      </div>

      <div className="  ">
        <table className=" w-full max-w-xl text-sm ">
          <thead>
            <tr className=" th font-bold text-white dark:bg-white/20 ">
              <td className=" px-2 py-3 "></td>
              <td className=" px-2 py-3 ">VALUE</td>
              <td className=" w-fit max-w-40 px-2 py-3 text-right ">
                PERCENTAGE
              </td>
            </tr>
          </thead>

          <tbody className="  ">
            {[...CAPITAL_STRUCTURE_DATA].map((item, index) => {
              return (
                <tr
                  key={`${item.label}-${index}`}
                  className=" odd:bg-neutral-100 dark:border-b dark:border-main-gray-600 dark:odd:bg-transparent "
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

                  <td className=" px-2 py-3 ">{item.value.toLocaleString()}</td>

                  <td className=" w-fit max-w-40 px-2 py-3 text-right ">
                    {item.percentage}%
                  </td>
                </tr>
              );
            })}

            <tr className=" font-semibold odd:bg-neutral-100 dark:border-b dark:border-main-gray-600 dark:odd:bg-transparent ">
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
