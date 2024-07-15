"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { SUBSCRIPTION_TYPE } from "@/modules/socket/types";
import { useAppStore } from "@/store";
import { Quote, StockSocketData } from "@/types";
import { useDebouncedCallback } from "@mantine/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Row({ quote }: { quote: Quote }) {
  const [data, setData] = useState<StockSocketData | null>(null);
  const socketService = useAppStore(({ socketService }) => socketService);

  const handleSocketUpdate = useDebouncedCallback((data: StockSocketData) => {
    setData(data);
  }, 1_500);

  useEffect(() => {
    socketService.subscribe(
      SUBSCRIPTION_TYPE.CRYPTO,
      quote.symbol,
      handleSocketUpdate
    );

    return () => {
      socketService.unsubscribe(
        SUBSCRIPTION_TYPE.STOCK,
        quote.symbol,
        handleSocketUpdate
      );
    };
  }, [quote.symbol]);

  return (
    <TableRow>
      <TableCell className="py-2 text-sm">
        <Link className="text-hover-focus" href={`/ticker/${quote.symbol}`}>
          {quote.symbol}
        </Link>
      </TableCell>
      <TableCell className="py-2 text-sm">{quote.name}</TableCell>
      <TableCell className="py-2 text-sm">
        {data ? data.lp ?? ((data.ap ?? 0) + (data.bp ?? 0)) / 2 : quote.price}
      </TableCell>
      <TableCell className="py-2 text-sm">{quote.change}</TableCell>
      <TableCell className="py-2 text-sm">{quote.changesPercentage}</TableCell>
      <TableCell className="py-2 text-sm">{quote.previousClose}</TableCell>
    </TableRow>
  );
}
