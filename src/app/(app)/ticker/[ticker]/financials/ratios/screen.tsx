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
import CLIENT_CONFIG from "@/config/client/app";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store";
import {
  differenceInCalendarYears,
  format,
  startOfYear,
  subYears,
} from "date-fns";
import { ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { generateRatiosTableData } from "./generate-table-data";
import { FinancialRatiosPageData } from "./page";
import userUtils from "@/modules/user/utils";
import useAuthenticatedAction from "@/hooks/use-authenticated-action";
import { SUBSCRIPTION_PLAN_NAMES } from "@/modules/subscription/types";

function getPeriodUrl(path: string, period: string) {
  return `${path}?period=${period}`;
}

interface RatiosScreenProps extends FinancialRatiosPageData {
  ticker: string;
}

export default function RatiosScreen(props: RatiosScreenProps) {
  const { ticker, currency, period, ratios } = props;
  const pathname = usePathname();
  const isPremiumUser = useAppStore(
    ({ user }) => user !== undefined && userUtils.isPremiumPlanUser(user)
  );

  const authenticateAction = useAuthenticatedAction();
  const [showAllData, setShowAllData] = useState(false);

  const dataToDisplay = useMemo(() => {
    if (showAllData) return ratios;

    return ratios.filter(
      (bs) =>
        differenceInCalendarYears(new Date(), new Date(bs.date)) <=
        CLIENT_CONFIG.FREE_YEARS_DATA
    );
  }, [ratios, period]);

  const tableData = useMemo(() => {
    return generateRatiosTableData(dataToDisplay);
  }, [dataToDisplay]);

  const { ref, isScrolled } = useScroll<HTMLDivElement>();

  function handleShowMore() {
    authenticateAction(() => setShowAllData(true), {
      plan: [SUBSCRIPTION_PLAN_NAMES.PREMIUM],
    });
  }

  return (
    <main className="space-y-5 pb-12">
      <div className="flex items-center justify-between gap-10">
        <h2 className="font-bold">Ratios</h2>

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

      <div className=" ">
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
                  <span className=" "></span>
                </TableHead>

                {dataToDisplay.map((incomeSheet, index) => {
                  return (
                    <TableHead
                      key={`income-${incomeSheet.period}-${index}`}
                      className="text-right"
                    >
                      <div className="ml-auto flex w-20 flex-col gap-1">
                        <span className=" ">
                          {(!period || period === "quarter") &&
                            `${incomeSheet.period} '`}
                          {incomeSheet.calendarYear}
                        </span>

                        <span className="text-xs">
                          {format(new Date(incomeSheet.date), "MMM yyyy")}
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
                    key={`ratios-${rowData.data.label}-${period}`}
                    row={rowData}
                    renderRow={({
                      data,
                      hasChildren,
                      level,
                      expanded,
                      onStateToggle: onToggle,
                    }) => {
                      const hightlight = level === 1;

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

                          {data.cols.map((colData, colIndex) => {
                            return (
                              <TableCell
                                key={`ratio-${data.label}-${colIndex}`}
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

        {!isPremiumUser && (
          <div className="flex justify-end">
            <Button
              variant={"link"}
              className="gap-x-2 text-primary-base hover:no-underline dark:text-primary-base"
              onClick={() => handleShowMore()}
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
