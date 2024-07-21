"use client";

import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { clientAPI } from "@/config/client/api";
import { QUERY_KEYS } from "@/data/query-keys";
import useExecuteOnce from "@/hooks/use-execute-once";
import { SubscriptionRepository } from "@/modules/subscription/repository";
import { useAppStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { useMemo } from "react";

export default function SubscriptionsTab() {
  const user = useAppStore(({ user }) => user);
  const { executeOnce, reset } = useExecuteOnce();
  const subscriptionRepo = useMemo(
    () => new SubscriptionRepository(clientAPI),
    []
  );

  // const {
  //   data: userSubscription,
  //   isLoading: userSubscriptionLoading,
  //   error: userSubscriptionError,
  // } = useQuery({
  //   enabled: user !== undefined,
  //   queryKey: [QUERY_KEYS.GET_USER_SUBSCRIPTION, user?.id],
  //   queryFn: ({ signal }) =>
  //     subscriptionRepo.getUserSubscription({
  //       signal,
  //     }),
  //   // refetchInterval: false,
  // });

  const {
    data: transactionsHistory,
    isLoading: transactionsHistoryLoading,
    error: transactionsHistoryError,
  } = useQuery({
    enabled: user !== undefined,
    queryKey: [QUERY_KEYS.GET_USER_TRANSACTIONS, user?.id],
    queryFn: ({ signal }) =>
      subscriptionRepo.getUserTransactiontionHistory({
        signal,
      }),
    // refetchInterval: false,
  });

  return (
    <div className="flex w-full max-w-7xl flex-col gap-2">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-10 rounded-lg border p-6 dark:border-main-gray-700">
        <div className="">
          <p className="text-xs uppercase">current plan</p>
          <p className="text-xl font-bold capitalize">
            {user?.plan || "Free"} plan
          </p>
        </div>

        <Button>Change plan</Button>
      </div>

      <h3 className="text-2xl font-semibold capitalize">billing history</h3>

      <div className="overflow-auto">
        {transactionsHistoryLoading ? (
          <center className="py-20">
            <Spinner className=" " />
          </center>
        ) : (
          <>
            {transactionsHistoryError ? (
              <div className="text-red-500">
                {transactionsHistoryError.message}
              </div>
            ) : transactionsHistory && transactionsHistory.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow headerRow>
                    <TableHead>date</TableHead>
                    <TableHead>action</TableHead>
                    <TableHead>transaction id</TableHead>
                    <TableHead>total</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell className="whitespace-nowrap">
                      {moment(new Date("2024/4/25")).format("MMM Do, YYYY")}
                    </TableCell>
                    <TableCell className="">subscription</TableCell>
                    <TableCell className="">729374691937</TableCell>
                    <TableCell className="">$10,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="whitespace-nowrap">
                      {moment(new Date("2024/4/25")).format("MMM Do, YYYY")}
                    </TableCell>
                    <TableCell className="">subscription</TableCell>
                    <TableCell className="">729374691937</TableCell>
                    <TableCell className="">$10,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="whitespace-nowrap">
                      {moment(new Date("2024/4/25")).format("MMM Do, YYYY")}
                    </TableCell>
                    <TableCell className="">subscription</TableCell>
                    <TableCell className="">729374691937</TableCell>
                    <TableCell className="">$10,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            ) : (
              <div className="py-2 text-main-gray-500 dark:text-main-gray-600">
                No billing history
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
