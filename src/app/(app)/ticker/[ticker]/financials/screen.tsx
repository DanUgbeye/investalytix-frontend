"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { FinancialPeriod, Financials } from "@/modules/ticker/types";
import { format } from "date-fns";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { generateKeyStatsTableData } from "./generate-table-data";

interface KeyStatsScreenProps {
  ticker: string;
  financials: {
    annual: Financials;
    quarter: Financials;
  };
  currency: string;
}

export default function KeyStatsScreen(props: KeyStatsScreenProps) {
  const {
    ticker,
    currency,
    financials: { annual, quarter },
  } = props;
  const pathname = usePathname();

  const [viewPeriods, setViewPeriods] = useState<{
    income: FinancialPeriod;
    cash: FinancialPeriod;
    balance: FinancialPeriod;
  }>({
    income: "quarter",
    cash: "quarter",
    balance: "quarter",
  });

  const financials = useMemo<Financials>(() => {
    return {
      income: viewPeriods.income === "annual" ? annual.income : quarter.income,
      balance:
        viewPeriods.balance === "annual" ? annual.balance : quarter.balance,
      cash: viewPeriods.cash === "annual" ? annual.cash : quarter.cash,
    };
  }, [viewPeriods]);

  const dataRows = useMemo(() => {
    return generateKeyStatsTableData(financials);
  }, [financials]);

  function handlePeriodChange(
    select: keyof Financials,
    period: FinancialPeriod
  ) {
    setViewPeriods((prev) => ({
      ...prev,
      [select]: period,
    }));
  }

  return (
    <main className=" space-y-12 pb-12 ">
      {/* INCOME SHEET */}
      <section className=" space-y-5 ">
        <div className=" flex items-center justify-between gap-10 ">
          <h2 className=" font-bold ">Income Statement</h2>

          {/* PERIOD FILTERS */}
          <div className=" ml-auto flex items-center gap-2 ">
            <Button
              variant={"link"}
              className={cn(
                " h-fit p-2 text-xs hover:bg-[#F0F3FA] hover:no-underline dark:hover:bg-main-gray-700 ",
                {
                  " bg-[#F0F3FA] font-bold dark:bg-main-gray-700 ":
                    viewPeriods.income === "quarter",
                }
              )}
              onClick={() => handlePeriodChange("income", "quarter")}
            >
              Quarterly
            </Button>

            <Button
              variant={"link"}
              className={cn(
                " h-fit p-2 text-xs hover:bg-[#F0F3FA] hover:no-underline dark:hover:bg-main-gray-700 ",
                {
                  " bg-[#F0F3FA] font-bold dark:bg-main-gray-700 ":
                    viewPeriods.income === "annual",
                }
              )}
              onClick={() => handlePeriodChange("income", "annual")}
            >
              Annual
            </Button>
          </div>
        </div>

        <div className=" overflow-x-auto ">
          <Table>
            <TableHeader>
              <TableRow headerRow>
                <TableHead>Currency: {currency}</TableHead>

                {financials.income.map((incomeSheet, index) => {
                  return (
                    <TableHead
                      key={`income-${incomeSheet.calendarYear}-${incomeSheet.period}-${index}`}
                    >
                      <div className=" flex flex-col gap-1 ">
                        <span className=" ">
                          {viewPeriods.income === "quarter" &&
                            `${incomeSheet.period} '`}
                          {incomeSheet.calendarYear}
                        </span>

                        <span className=" text-xs ">
                          {format(new Date(incomeSheet.date), "MMM yyyy ")}
                        </span>
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>

            <TableBody>
              {dataRows.income.map((rowData) => {
                return (
                  <TableRow key={`row-${rowData.label}`}>
                    <TableCell> {rowData.label}</TableCell>

                    {rowData.cols.map((data, index) => {
                      return (
                        <TableCell key={`income-${rowData.label}-${index}`}>
                          {data}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* BALANCE SHEET */}
      <section className=" space-y-5 ">
        <div className=" flex items-center justify-between gap-10 ">
          <h2 className=" font-bold ">Balance Statement</h2>

          {/* PERIOD FILTERS */}
          <div className=" ml-auto flex items-center gap-2 ">
            <Button
              variant={"link"}
              className={cn(
                " h-fit p-2 text-xs hover:bg-[#F0F3FA] hover:no-underline dark:hover:bg-main-gray-700 ",
                {
                  " bg-[#F0F3FA] font-bold dark:bg-main-gray-700 ":
                    viewPeriods.balance === "quarter",
                }
              )}
              onClick={() => handlePeriodChange("balance", "quarter")}
            >
              Quarterly
            </Button>

            <Button
              variant={"link"}
              className={cn(
                " h-fit p-2 text-xs hover:bg-[#F0F3FA] hover:no-underline dark:hover:bg-main-gray-700 ",
                {
                  " bg-[#F0F3FA] font-bold dark:bg-main-gray-700 ":
                    viewPeriods.balance === "annual",
                }
              )}
              onClick={() => handlePeriodChange("balance", "annual")}
            >
              Annual
            </Button>
          </div>
        </div>

        <div className=" overflow-x-auto ">
          <Table>
            <TableHeader>
              <TableRow headerRow>
                <TableHead>Currency: {currency}</TableHead>

                {financials.balance.map((balanceSheet, index) => {
                  return (
                    <TableHead
                      key={`balance-${balanceSheet.calendarYear}-${balanceSheet.period}-${index}`}
                    >
                      <div className=" flex flex-col gap-1 ">
                        <span className=" ">
                          {viewPeriods.balance === "quarter" &&
                            `${balanceSheet.period} '`}
                          {balanceSheet.calendarYear}
                        </span>

                        <span className=" text-xs ">
                          {format(new Date(balanceSheet.date), "MMM yyyy ")}
                        </span>
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>

            <TableBody>
              {dataRows.balance.map((rowData) => {
                return (
                  <TableRow key={`row-${rowData.label}`}>
                    <TableCell> {rowData.label}</TableCell>

                    {rowData.cols.map((data, index) => {
                      return (
                        <TableCell key={`balance-${rowData.label}-${index}`}>
                          {data}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* CASH SHEET */}
      <section className=" space-y-5 ">
        <div className=" flex items-center justify-between gap-10 ">
          <h2 className=" font-bold ">Cash Flow Statement</h2>

          {/* PERIOD FILTERS */}
          <div className=" ml-auto flex items-center gap-2 ">
            <Button
              variant={"link"}
              className={cn(
                " h-fit p-2 text-xs hover:bg-[#F0F3FA] hover:no-underline dark:hover:bg-main-gray-700 ",
                {
                  " bg-[#F0F3FA] font-bold dark:bg-main-gray-700 ":
                    viewPeriods.cash === "quarter",
                }
              )}
              onClick={() => handlePeriodChange("cash", "quarter")}
            >
              Quarterly
            </Button>

            <Button
              variant={"link"}
              className={cn(
                " h-fit p-2 text-xs hover:bg-[#F0F3FA] hover:no-underline dark:hover:bg-main-gray-700 ",
                {
                  " bg-[#F0F3FA] font-bold dark:bg-main-gray-700 ":
                    viewPeriods.cash === "annual",
                }
              )}
              onClick={() => handlePeriodChange("cash", "annual")}
            >
              Annual
            </Button>
          </div>
        </div>

        <div className=" overflow-x-auto ">
          <Table>
            <TableHeader>
              <TableRow headerRow>
                <TableHead>Currency: {currency}</TableHead>

                {financials.cash.map((cashFlow, index) => {
                  return (
                    <TableHead
                      key={`cash-${cashFlow.calendarYear}-${cashFlow.period}-${index}`}
                    >
                      <div className=" flex flex-col gap-1 ">
                        <span className=" ">
                          {viewPeriods.cash === "quarter" &&
                            `${cashFlow.period} '`}
                          {cashFlow.calendarYear}
                        </span>

                        <span className=" text-xs ">
                          {format(new Date(cashFlow.date), "MMM yyyy ")}
                        </span>
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>

            <TableBody>
              {dataRows.cash.map((rowData) => {
                return (
                  <TableRow key={`row-${rowData.label}`}>
                    <TableCell> {rowData.label}</TableCell>

                    {rowData.cols.map((data, index) => {
                      return (
                        <TableCell key={`cash-${rowData.label}-${index}`}>
                          {data}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
}
