"use client";

import HeaderWithUnderline from "@/components/heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tailwindCSS } from "@/lib/utils";
import useTheme from "@/store/theme/useTheme";
import appUtils from "@/utils/app-util";
import { useMemo } from "react";
import { Pie, PieChart, Tooltip } from "recharts";

interface CapitalStructureScreenProps {
  ticker: string;
  capitalStructure: {
    label: string;
    value: number;
    fill: string;
    currency: string;
  }[];
  currency: string;
}

export default function CapitalStructureScreen(
  props: CapitalStructureScreenProps
) {
  const { ticker, capitalStructure, currency } = props;
  const { theme } = useTheme();

  const parsedData = useMemo(() => {
    let total = capitalStructure.reduce((prev, entry) => {
      return prev + entry.value;
    }, 0);

    return {
      data: capitalStructure.map((entry) => ({
        ...entry,
        percentage: (entry.value / total) * 100,
      })),
      total,
    };
  }, [capitalStructure]);

  const largestPercentage = useMemo(() => {
    return parsedData.data.reduce((max, currentEntry) => {
      return currentEntry.percentage > max ? currentEntry.percentage : max;
    }, 0);
  }, [parsedData]);

  return (
    <section className=" pb-12 ">
      <HeaderWithUnderline>Capital Structure ({currency})</HeaderWithUnderline>

      <div className=" grid gap-5 pt-10 md:grid-cols-[auto,1fr] ">
        <div className=" w-full md:min-w-80 ">
          <div className=" grid grid-cols-1 grid-rows-1 place-items-center ">
            <PieChart
              width={300}
              height={300}
              className=" col-start-1 row-start-1 w-full  "
            >
              <Pie
                data={capitalStructure}
                dataKey={"value"}
                nameKey={"label"}
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={60}
                paddingAngle={2}
                stroke="0"
              />

              <Tooltip
                content={(props) => {
                  const { payload, label } = props;

                  return (
                    <div className=" rounded bg-main-gray-700 p-2 text-main-gray-300 ">
                      {payload &&
                        payload.map((pl, index) => {
                          const { name, value } = pl;

                          return (
                            <div
                              key={`${value}-${index}`}
                              className=" text-main-gray-300 "
                            >
                              {name}:{" "}
                              {appUtils.formatNumber(value as number, {
                                style: "decimal",
                                notation: "compact",
                                maximumFractionDigits: 2,
                              })}
                            </div>
                          );
                        })}
                    </div>
                  );
                }}
              />
            </PieChart>

            <div className=" absolute -z-10 col-start-1 row-start-1 text-lg ">
              {appUtils.formatNumber(largestPercentage, {
                style: "decimal",
                maximumFractionDigits: 3,
              })}
              %
            </div>
          </div>
        </div>

        <div className=" h-fit w-full max-w-xl overflow-x-auto ">
          <Table className=" w-full text-sm ">
            <TableHeader>
              <TableRow headerRow className=" ">
                <TableHead className=" px-2 py-3 "></TableHead>

                <TableHead className=" px-2 py-3 ">Value</TableHead>

                <TableHead className=" w-fit max-w-40 px-2 py-3 text-right ">
                  Percentage
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="  ">
              {parsedData.data.map((item, index) => {
                return (
                  <TableRow
                    key={`${item.label}-${index}`}
                    className=" odd:bg-main-gray-100 dark:odd:bg-main-gray-900/60 "
                  >
                    <TableCell className="">
                      <div className=" flex items-center gap-x-3 px-2 ">
                        <span
                          className=" size-7 "
                          style={{ backgroundColor: item.fill }}
                        />
                        <span className=" ">{item.label}</span>
                      </div>
                    </TableCell>

                    <TableCell className=" ">
                      {item.value.toLocaleString(undefined, {
                        style: "currency",
                        currency: item.currency,
                        maximumFractionDigits: 0,
                      })}
                    </TableCell>

                    <TableCell className=" w-fit max-w-40 text-right ">
                      {item.percentage.toLocaleString(undefined, {
                        maximumFractionDigits: 3,
                      })}
                      %
                    </TableCell>
                  </TableRow>
                );
              })}

              {/* <TableRow className=" font-bold odd:bg-main-gray-100 dark:odd:bg-main-gray-900/60  ">
                <TableCell className=" pl-16 ">Total</TableCell>
                <TableCell className=" ">
                  {parsedData.total.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                    style: "currency",
                    currency: parsedData.data[0].currency,
                  })}
                </TableCell>

                <TableCell className=" w-fit max-w-40 text-right ">
                  100%
                </TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
