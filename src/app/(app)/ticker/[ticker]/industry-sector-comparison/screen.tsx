"use client";

import ColoredText from "@/components/colored-text";
import HeaderWithUnderline from "@/components/heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { SectorPerformanceHistory } from "@/modules/market/types";
import { CompanyProfile } from "@/modules/ticker/types";
import tickerUtils from "@/modules/ticker/utils";
import { getTickerStockDescriptionRoute } from "@/route";
import useTheme from "@/store/theme/useTheme";
import { Quote } from "@/types";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import Link from "next/link";
import { useMemo } from "react";
import { generateSectorData } from "./generate-sector-table-data";
import IndustryComparisonChart from "./industry-comparison-chart";
import SectorComparisonChart from "./sector-comparison-chart";

interface IndustrySectorComparisonScreenProps {
  ticker: string;
  currency: string;
  profile: CompanyProfile;
  similarStocks: Quote[];
  sectorPerformaceHistory: SectorPerformanceHistory[];
}

export default function IndustrySectorComparisonScreen(
  props: IndustrySectorComparisonScreenProps
) {
  const { ticker, currency, profile, sectorPerformaceHistory, similarStocks } =
    props;
  const { theme } = useTheme();
  const { ref, isScrolled } = useScroll<HTMLDivElement>();

  const sectorTableData = useMemo(() => {
    return generateSectorData(sectorPerformaceHistory);
  }, [sectorPerformaceHistory]);

  return (
    <main className=" space-y-14 pb-10 ">
      <HeaderWithUnderline>
        {profile.companyName} Similar Stocks
      </HeaderWithUnderline>

      {/* INDUSTRY PERFORMANACE */}
      <section className=" space-y-4 ">
        <h3 className=" text-2xl font-bold ">By Industry</h3>

        <div className=" space-y-8 ">
          <IndustryComparisonChart
            currency={currency}
            tickers={similarStocks.map((quote) => quote.symbol)}
          />

          <div className=" overflow-x-auto ">
            <Table className=" w-full min-w-[50rem] ">
              <TableHeader>
                <TableRow headerRow>
                  <TableHead className=" min-w-[12rem] ">Name</TableHead>

                  <TableHead className=" ">Price</TableHead>

                  <TableHead className="  ">Market Cap</TableHead>

                  <TableHead className="  ">P/E</TableHead>

                  <TableHead className="  ">EPS</TableHead>

                  <TableHead className="  ">Change</TableHead>

                  <TableHead className="  ">Change %</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {similarStocks.map((similarStock, index) => {
                  return (
                    <TableRow key={`forecast-${index}`} className="  ">
                      <TableCell className=" ">
                        <div className=" flex items-center gap-4 ">
                          <Avatar className=" size-10 rounded-full bg-main-gray-200/50 p-2 text-xxs dark:bg-main-gray-800 ">
                            <AvatarImage
                              crossOrigin="anonymous"
                              className=" rounded-full "
                              src={tickerUtils.getTickerLogoUrl(
                                similarStock.symbol
                              )}
                            />

                            <AvatarFallback className=" truncate bg-transparent p-2 ">
                              {similarStock.symbol.slice(0, 4)}
                            </AvatarFallback>
                          </Avatar>

                          <div className=" flex flex-col space-y-1 ">
                            <Link
                              href={getTickerStockDescriptionRoute(
                                similarStock.symbol
                              )}
                              className=" w-fit text-base font-semibold text-[#125BD4] underline-offset-2 hover:underline "
                            >
                              {similarStock.symbol}
                            </Link>

                            <span className=" text-xs font-semibold ">
                              {similarStock.name}
                            </span>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell className={``}>
                        {appUtils.formatNumber(similarStock.price)}
                      </TableCell>

                      <TableCell className=" ">
                        {appUtils.formatNumber(similarStock.marketCap, {
                          notation: "compact",
                        })}
                      </TableCell>

                      <TableCell className="">
                        {appUtils.formatNumber(similarStock.pe, {
                          style: "decimal",
                        })}
                      </TableCell>

                      <TableCell className="">
                        {appUtils.formatNumber(similarStock.eps, {
                          style: "decimal",
                        })}
                      </TableCell>

                      <TableCell className=" text-green-700 ">
                        <ColoredText
                          isPositive={(() => {
                            if (similarStock.change) {
                              if (similarStock.change > 0) return true;
                              if (similarStock.change < 0) return false;
                            }
                            return undefined;
                          })()}
                        >
                          {appUtils.formatNumber(similarStock.change, {
                            style: "decimal",
                          })}
                        </ColoredText>
                      </TableCell>

                      <TableCell className=" text-[#125BD4] ">
                        <ColoredText
                          isPositive={(() => {
                            if (similarStock.changesPercentage) {
                              if (similarStock.changesPercentage > 0)
                                return true;
                              if (similarStock.changesPercentage < 0)
                                return false;
                            }
                            return undefined;
                          })()}
                        >
                          {appUtils.formatNumber(
                            similarStock.changesPercentage,
                            {
                              style: "decimal",
                            }
                          )}
                          {similarStock.changesPercentage && "%"}
                        </ColoredText>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* SECTOR PERFORMANACE */}
      <section className=" space-y-4 ">
        <h3 className=" text-2xl font-bold ">By Sector</h3>

        <div className=" space-y-8 ">
          <SectorComparisonChart
            currency={currency}
            sectorPerformaceHistory={sectorPerformaceHistory.slice(0, 30)}
          />

          <div ref={ref} className=" overflow-x-auto ">
            <Table className=" w-full min-w-[50rem] ">
              <TableHeader>
                <TableRow headerRow>
                  <TableHead
                    className={cn(
                      tableHeaderCellVariants({ scrolled: isScrolled }),
                      " min-w-[10rem] sm:min-w-[20rem] "
                    )}
                  >
                    <span className="  ">Sector</span>
                  </TableHead>

                  {sectorPerformaceHistory.map((data, index) => {
                    return (
                      <TableHead
                        key={`${data.date.toString()}-${index}`}
                        className=" text-right "
                      >
                        <div className=" flex w-20 flex-col gap-1 ">
                          <span className=" text-xs ">
                            {format(new Date(data.date), "dd MMM")}
                          </span>

                          <span className=" ">
                            {new Date(data.date).getFullYear()}
                          </span>
                        </div>
                      </TableHead>
                    );
                  })}
                </TableRow>
              </TableHeader>

              <TableBody>
                {sectorTableData.map((rowData, index) => {
                  return (
                    <TableRow
                      key={`row-${rowData.label}`}
                      highlightPattern={
                        (index + 1) % 2 === 1 ? "current" : "none"
                      }
                      className=" group "
                    >
                      <TableCell
                        className={cn(
                          tableHeaderCellVariants({
                            scrolled: isScrolled,
                            highlight: (index + 1) % 2 === 1,
                          })
                        )}
                      >
                        <span>{rowData.label}</span>
                      </TableCell>

                      {rowData.cols.map((data, index) => {
                        return (
                          <TableCell
                            key={`${rowData.label}-${index}`}
                            className=" text-right"
                          >
                            {data || 0}%
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  );
}
