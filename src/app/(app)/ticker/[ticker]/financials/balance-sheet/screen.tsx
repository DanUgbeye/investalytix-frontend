"use client";

import { RowWithChildren } from "@/components/row-with-children";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  tableHeaderCellVariants,
} from "@/components/ui/table";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { BalanceSheetStatement, FinancialPeriod } from "@/modules/ticker/types";
import { useAppStore } from "@/store";
import { format, startOfYear, subYears } from "date-fns";
import { ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { generateBalanceTableData } from "./generate-table-data";

function getPeriodUrl(path: string, period: string) {
  return `${path}?period=${period}`;
}

interface BalanceSheetScreenProps {
  ticker: string;
  balanceSheet: BalanceSheetStatement[];
  period?: FinancialPeriod;
  currency: string;
}

export default function BalanceSheetScreen(props: BalanceSheetScreenProps) {
  const { ticker, currency, period, balanceSheet } = props;
  const pathname = usePathname();
  const isAuthenticated = useAppStore(({ auth }) => auth !== undefined);
  const { toggleLoginModal } = useAppStore();

  const dataToDisplay = useMemo(() => {
    let data = balanceSheet;
    if (!isAuthenticated) {
      let _12YrsAgo = startOfYear(subYears(new Date(), 10)).getTime();

      data = balanceSheet.filter(
        (bs) => new Date(bs.date).getTime() > _12YrsAgo
      );
    }

    return data;
  }, [balanceSheet, isAuthenticated, period]);

  const tableData = useMemo(() => {
    return generateBalanceTableData(dataToDisplay);
  }, [dataToDisplay]);

  const { ref, isScrolled } = useScroll<HTMLDivElement>();

  return (
    <main className="space-y-5 pb-12">
      <div className="flex items-center justify-between gap-10">
        <h2 className="font-bold">Balance Sheet Statement</h2>

        {/* PERIOD FILTERS */}
        <div className="ml-auto flex items-center gap-2">
          <Link
            href={getPeriodUrl(pathname, "quarter")}
            className={cn(
              "h-fit rounded-md p-2 text-xs duration-300 hover:bg-[#F0F3FA] hover:no-underline dark:hover:bg-main-gray-700",
              {
                "bg-[#F0F3FA] font-bold dark:bg-main-gray-700":
                  !period || period === "quarter",
              }
            )}
          >
            Quarterly
          </Link>

          <Link
            href={getPeriodUrl(pathname, "annual")}
            className={cn(
              "h-fit rounded-md p-2 text-xs duration-300 hover:bg-[#F0F3FA] hover:no-underline dark:hover:bg-main-gray-700",
              {
                "bg-[#F0F3FA] font-bold dark:bg-main-gray-700":
                  period === "annual",
              }
            )}
          >
            Annual
          </Link>
        </div>
      </div>

      <div className="">
        <div ref={ref} className="overflow-x-auto">
          <Table className="w-full min-w-[50rem]">
            <TableHeader>
              <TableRow headerRow>
                <TableHead
                  className={cn(
                    tableHeaderCellVariants({ scrolled: isScrolled }),
                    "min-w-[10rem] sm:min-w-[20rem]"
                  )}
                >
                  <span className=" ">Currency: {currency}</span>
                </TableHead>

                {dataToDisplay.map((balance, index) => {
                  return (
                    <TableHead
                      key={`income-${balance.period}-${index}-${period}`}
                      className="text-right"
                    >
                      <div className="flex w-20 flex-col gap-1">
                        <span className=" ">
                          {(!period || period === "quarter") &&
                            `${balance.period} '`}
                          {balance.calendarYear}
                        </span>

                        <span className="text-xs">
                          {format(new Date(balance.date), "MMM yyyy")}
                        </span>
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>

            <TableBody>
              {tableData.map((rowData, index) => {
                return (
                  <RowWithChildren
                    key={`${rowData.data.label}-${period}`}
                    row={rowData}
                    renderRow={({
                      data,
                      hasChildren,
                      level,
                      expanded,
                      onStateToggle: onToggle,
                    }) => {
                      const hightlight = level === 1 && (index + 1) % 2 === 1;

                      return (
                        <TableRow
                          key={`row-${data.label}-${period}`}
                          highlightPattern={hightlight ? "current" : "none"}
                          className={cn("group border-y", {
                            "cursor-pointer": hasChildren,
                          })}
                        >
                          <TableCell
                            className={cn(
                              tableHeaderCellVariants({
                                scrolled: isScrolled,
                                highlight: hightlight,
                              }),
                              "px-0"
                            )}
                            onClick={() => onToggle && onToggle()}
                          >
                            <div
                              className={cn("flex items-center gap-x-1")}
                              style={{
                                paddingLeft: (level || 1) * 16,
                              }}
                            >
                              <span>{data.label}</span>

                              {hasChildren && (
                                <ChevronRight
                                  className={cn("size-4 duration-300", {
                                    "rotate-90": expanded,
                                  })}
                                />
                              )}
                            </div>
                          </TableCell>

                          {data.cols.map((colData, index) => {
                            return (
                              <TableCell
                                key={`income-${data.label}-${index}`}
                                className="text-right"
                              >
                                {colData}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    }}
                  />
                );
              })}
            </TableBody>
          </Table>
        </div>

        {!isAuthenticated && (
          <div className="flex justify-end">
            <Button
              variant={"link"}
              className="gap-x-2 text-primary-base hover:no-underline dark:text-primary-base"
              onClick={() => toggleLoginModal()}
            >
              <>
                <Plus className="size-4" />
                Show More Years?
              </>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
