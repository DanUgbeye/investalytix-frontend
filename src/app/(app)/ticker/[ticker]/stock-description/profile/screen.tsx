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
          <span className="text-sm">Sector</span>
          <span className="font-bold">{outlook.profile.sector}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm">Industry</span>
          <span className="font-bold">{outlook.profile.industry}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm">CEO</span>
          <span className="font-bold">{outlook.profile.ceo}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm">Country</span>
          <span className="font-bold">{outlook.profile.country}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm">City</span>
          <span className="font-bold">{outlook.profile.city}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm">Address</span>
          <span className="font-bold">{outlook.profile.address}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm">Phone</span>
          <span className="font-bold">{outlook.profile.phone}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm">Website</span>
          <span className="truncate font-bold">{outlook.profile.website}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm">Full Time Empoyees</span>
          <span className="font-bold">
            {appUtils.formatNumber(Number(outlook.profile.fullTimeEmployees), {
              style: "decimal",
            })}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm">IPO Date</span>
          <span className="font-bold">
            {new Date(outlook.profile.ipoDate).toDateString()}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm">Shares Outstanding</span>
          <span className="font-bold">
            {appUtils.formatNumber(quote.sharesOutstanding || undefined, {
              style: "decimal",
              notation: "compact",
            })}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm">Market Cap</span>
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
