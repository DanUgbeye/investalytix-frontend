"use client";

import HeaderWithUnderline from "@/components/heading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InstitutionalHolder, MutualFundHolder } from "@/modules/ticker/types";
import { useAppStore } from "@/store";
import appUtils from "@/utils/app-util";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface HoldersScreenProps {
  ticker: string;
  institutionalHolders: InstitutionalHolder[];
  mutualFundHolders: MutualFundHolder[];
}

export default function HoldersScreen(props: HoldersScreenProps) {
  const { ticker, institutionalHolders, mutualFundHolders } = props;
  const isAuthenticated = useAppStore(({ auth }) => auth !== undefined);
  const { toggleLoginModal } = useAppStore();
  const [showAll, setShowAll] = useState({
    mutual: false,
    institutional: false,
  });

  function toggleShowAll(select: keyof typeof showAll) {
    if (isAuthenticated) {
      setShowAll((prev) => ({ ...prev, [select]: !prev[select] }));
    } else {
      toggleLoginModal();
    }
  }

  return (
    <section className="space-y-10 pb-10">
      <div className="space-y-10">
        <HeaderWithUnderline className="text-2xl font-extrabold">
          Top Institutional Holders
        </HeaderWithUnderline>

        <div className=" ">
          <div className="overflow-x-auto">
            <Table className="w-full min-w-[50rem]">
              <TableHeader className=" ">
                <TableRow className=" " headerRow>
                  <TableHead className=" ">Name</TableHead>

                  <TableHead className=" ">Current Shares</TableHead>

                  <TableHead className=" ">Change Amount</TableHead>

                  <TableHead className=" ">Date</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className=" ">
                {institutionalHolders
                  .slice(0, showAll.institutional ? -1 : 10)
                  .map((holder, index) => {
                    return (
                      <TableRow
                        key={`institutional-holder-${holder.holder}-${index}`}
                        className=" "
                        highlightPattern="odd"
                      >
                        <TableCell className="font-medium">
                          {holder.holder}
                        </TableCell>

                        <TableCell className=" ">
                          {appUtils.formatNumber(holder.shares, {
                            style: "decimal",
                            maximumFractionDigits: 0,
                          })}
                        </TableCell>

                        <TableCell className=" ">
                          {appUtils.formatNumber(holder.change, {
                            style: "decimal",
                            maximumFractionDigits: 0,
                          })}
                        </TableCell>

                        <TableCell className=" ">
                          {holder.dateReported.toDateString()}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-center">
            <Button
              variant={"link"}
              className="h-fit w-full gap-x-2 py-2 text-primary-base hover:no-underline dark:text-primary-base"
              onClick={() => toggleShowAll("institutional")}
            >
              {showAll.institutional ? (
                <>
                  <Minus className="size-4" />
                  Show Less
                </>
              ) : (
                <>
                  <Plus className="size-4" />
                  Show More
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <HeaderWithUnderline className="text-2xl font-extrabold">
          Top Mutual Fund Holders
        </HeaderWithUnderline>

        <div className=" ">
          <div className="overflow-x-auto">
            <Table className="w-full min-w-[50rem]">
              <TableHeader className=" ">
                <TableRow className=" " headerRow>
                  <TableHead className=" ">Name</TableHead>

                  <TableHead className=" ">% Total Shares Held</TableHead>

                  <TableHead className=" ">Current Shares</TableHead>

                  <TableHead className=" ">Change Amount</TableHead>

                  <TableHead className=" ">Date</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className=" ">
                {mutualFundHolders
                  .slice(0, showAll.mutual ? -1 : 10)
                  .map((holder, index) => {
                    return (
                      <TableRow
                        key={`mutual-fund-holder-${holder.holder}-${index}`}
                        className=" "
                        highlightPattern="odd"
                      >
                        <TableCell className="font-medium">
                          {holder.holder}
                        </TableCell>

                        <TableCell className=" ">
                          {appUtils.formatNumber(
                            holder.weightPercent || undefined,
                            {
                              style: "decimal",
                              maximumFractionDigits: 10,
                              minimumFractionDigits: 10,
                            }
                          )}
                        </TableCell>

                        <TableCell className=" ">
                          {appUtils.formatNumber(holder.shares, {
                            style: "decimal",
                            maximumFractionDigits: 0,
                          })}
                        </TableCell>

                        <TableCell className=" ">
                          {appUtils.formatNumber(holder.change, {
                            style: "decimal",
                            maximumFractionDigits: 0,
                          })}
                        </TableCell>

                        <TableCell className=" ">
                          {holder.dateReported.toDateString()}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-center">
            <Button
              variant={"link"}
              className="h-fit w-full gap-x-2 py-2 text-primary-base hover:no-underline dark:text-primary-base"
              onClick={() => toggleShowAll("mutual")}
            >
              {showAll.mutual ? (
                <>
                  <Minus className="size-4" />
                  Show Less
                </>
              ) : (
                <>
                  <Plus className="size-4" />
                  Show More
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
