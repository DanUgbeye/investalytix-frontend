"use client";
import Spinner from "@/components/spinner";
import ColoredNumber from "@/components/ui/ColoredNumber";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { clientAPI } from "@/config/client/api";
import useFetcher from "@/hooks/useFetcher";
import { TickerRepository } from "@/modules/ticker/repository";
import { Quote } from "@/types";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Futures({
  isFairValue = false,
  ticker,
}: {
  isFairValue?: boolean;
  ticker: string;
}) {
  const { wrapper, data, loading } = useFetcher<Quote>();

  useEffect(() => {
    const repo = new TickerRepository(clientAPI);
    wrapper(() => repo.getQuote(ticker));
  }, [ticker]);

  return (
    <div className="mt-8">
      {/* <p className="white-text pb-5 font-bold capitalize text-[#2F3A48]">
        {isFairValue ? "fair value futures (-27.48)" : "futures"}
      </p> */}

      <motion.div
        initial="rest"
        animate={loading ? "show" : "hide"}
        variants={{
          rest: {
            top: -50,
            opacity: 0,
          },
          show: {
            opacity: 1,
            y: -20,
          },
          hide: {
            opacity: 0,
            y: -50,
          },
        }}
        className="flex items-center justify-center"
      >
        <div>
          <Spinner />
        </div>
      </motion.div>

      {data && (
        <div className="w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow headerRow>
                <TableHead className="capitalize">
                  close
                  {/* {isFairValue ? "FV close" : "IND close"} */}
                </TableHead>
                <TableHead className="text-center capitalize">
                  price
                  {/* future */}
                </TableHead>
                <TableHead className="text-right capitalize">
                  change
                  {/* {isFairValue ? "IML open" : "change"} */}
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow className="border-none odd:bg-[#F0F3FA] dark:odd:bg-main-gray-200/10">
                <TableCell>{data.previousClose}</TableCell>
                <TableCell className="text-center">{data.price}</TableCell>
                <TableCell className="text-right">
                  <ColoredNumber number={data.change} colored />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
