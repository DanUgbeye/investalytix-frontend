"use client";

import HeaderWithUnderline from "@/components/heading";
import ShortenText from "@/components/shorten-text";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import appUtils from "@/utils/app-util";
import { ProfilePageData } from "./page";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

interface ProfileScreenProps extends ProfilePageData {
  ticker: string;
}

export default function ProfileScreen(props: ProfileScreenProps) {
  const { ticker, outlook, quote } = props;

  return (
    <section className="space-y-10 pb-10">
      <HeaderWithUnderline className=" ">
        About {outlook.profile.companyName}
      </HeaderWithUnderline>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-5 lg:grid-cols-4">
        <div className="flex flex-col">
          <span className="text-sm opacity-80">Sector</span>
          <span className="font-bold">{outlook.profile.sector}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm opacity-80">Industry</span>
          <span className="font-bold">{outlook.profile.industry}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm opacity-80">CEO</span>
          <span className="font-bold">{outlook.profile.ceo}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm opacity-80">Country</span>
          <span className="font-bold">{outlook.profile.country}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm opacity-80">City</span>
          <span className="font-bold">{outlook.profile.city}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm opacity-80">Address</span>
          <span className="font-bold">{outlook.profile.address}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm opacity-80">Phone</span>
          <span className="font-bold">{outlook.profile.phone}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm opacity-80">Website</span>
          <span className="truncate font-bold">
            <Link
              href={outlook.profile.website || ""}
              target="_blank"
              aria-disabled={!outlook.profile.website}
              className="flex items-center gap-1 hover:underline"
            >
              <span className="truncate">{outlook.profile.website}</span>
              <SquareArrowOutUpRight className="size-3" />
            </Link>
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm opacity-80">Full Time Empoyees</span>
          <span className="font-bold">
            {appUtils.formatNumber(Number(outlook.profile.fullTimeEmployees), {
              style: "decimal",
            })}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm opacity-80">IPO Date</span>
          <span className="font-bold">
            {new Date(outlook.profile.ipoDate).toDateString()}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm opacity-80">Shares Outstanding</span>
          <span className="font-bold">
            {appUtils.formatNumber(quote.sharesOutstanding || undefined, {
              style: "decimal",
              notation: "compact",
            })}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm opacity-80">Market Cap</span>
          <span className="font-bold">
            {appUtils.formatNumber(outlook.profile.mktCap, {
              notation: "compact",
            })}
          </span>
        </div>
      </div>

      <ShortenText
        text={outlook.profile.description || undefined}
        className="max-w-3xl whitespace-pre-line"
      />

      <div className="space-y-4">
        <h3 className="font-extrabold">Key Executives</h3>

        <div className="overflow-y-auto">
          <Table className="w-full min-w-[50rem] border-b dark:border-main-gray-900">
            <TableHeader>
              <TableRow headerRow className=" ">
                <TableHead className="px-2 py-2 text-left">Name</TableHead>

                <TableHead className="py-4 text-left font-normal">
                  Title
                </TableHead>

                <TableHead className="py-4 text-left font-normal">
                  Pay
                </TableHead>

                <TableHead className="px-2 py-2 text-center">
                  Year Born
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {outlook.keyExecutives.map((executive, index) => {
                return (
                  <TableRow
                    key={`${executive.name}`}
                    className="text-sm dark:border-main-gray-900 dark:text-main-gray-300 dark:odd:bg-transparent"
                    highlightPattern="odd"
                  >
                    <TableCell className="px-2 py-2 text-left">
                      {executive.name}
                    </TableCell>

                    <TableCell className={`py-3 text-left`}>
                      {executive.title}
                    </TableCell>

                    <TableCell className={`py-3 text-left`}>
                      {appUtils.formatNumber(executive.pay || undefined, {
                        currency:
                          executive.currencyPay ||
                          outlook.profile.currency ||
                          undefined,
                        notation: "compact",
                        minimumFractionDigits: 2,
                      })}
                    </TableCell>

                    <TableCell className="px-2 py-2 text-center">
                      {executive.yearBorn}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
